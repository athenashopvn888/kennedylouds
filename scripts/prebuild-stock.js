/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Prebuild script: Fetch Kennedy Loud stock from the approved Apps Script
 * endpoint and replace the checked-in menu snapshots only after full validation.
 */

const fs = require('fs');
const path = require('path');

// This identity is intentionally fixed and server-only. Never source it from
// NEXT_PUBLIC_* variables or fall back to another store.
const STORE_CODE = 'KLC01';
const FLOWERS_PATH = path.join(__dirname, '..', 'app', 'lib', 'flowers.json');
const ITEMS_PATH = path.join(__dirname, '..', 'app', 'lib', 'items.json');

function normalizeSku(value) {
  return String(value ?? '').trim().toUpperCase();
}

function validateCatalog(label, products, requiredField) {
  if (!Array.isArray(products)) {
    throw new Error(`Invalid response: ${label} must be an array`);
  }

  const seenSkus = new Set();
  for (const [index, product] of products.entries()) {
    if (!product || typeof product !== 'object' || Array.isArray(product)) {
      throw new Error(`Invalid response: ${label}[${index}] must be an object`);
    }

    const sku = normalizeSku(product.sku);
    if (!sku) {
      throw new Error(`Invalid response: ${label}[${index}] has no SKU`);
    }
    if (seenSkus.has(sku)) {
      throw new Error(`Invalid response: duplicate ${label} SKU ${sku}`);
    }
    seenSkus.add(sku);

    if (typeof product.name !== 'string' || !product.name.trim()) {
      throw new Error(`Invalid response: ${label}[${index}] has no name`);
    }
    if (typeof product[requiredField] !== 'string' || !product[requiredField].trim()) {
      throw new Error(`Invalid response: ${label}[${index}] has no ${requiredField}`);
    }
  }
}

function validatePayload(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    throw new Error('Invalid response: expected an object payload');
  }
  if (data.storeCode !== STORE_CODE) {
    throw new Error(`Invalid response: expected storeCode ${STORE_CODE}`);
  }

  validateCatalog('flowers', data.flowers, 'tier');
  validateCatalog('items', data.items, 'category');
  return data;
}

const SALE_RE = /\bSALE\b/i;
const ON_SALE_RE = /ON\s*SALE/i;

function hasSalePrice(flower) {
  return !!(
    (flower.price3g && flower.price3g.sale !== null) ||
    (flower.price5g && flower.price5g.sale !== null) ||
    (flower.price14g && flower.price14g.sale !== null) ||
    (flower.price28g && flower.price28g.sale !== null)
  );
}

function cleanName(name) {
  return name
    .replace(/\s*\(?\s*AAA\+?\s*ON\s*SALE\s*\)?\s*$/i, '')
    .replace(/\s*\(?\s*AAA\+?\s*SALE!?\s*\)?\s*$/i, '')
    .replace(/\s*\bSALE!?\s*$/i, '')
    .replace(/\s*\bON\s*SALE\s*$/i, '')
    .trim();
}

function prepareSnapshots(data) {
  let saleFixed = 0;
  const flowers = data.flowers.map((sourceFlower) => {
    const flower = structuredClone(sourceFlower);
    if (!flower.isSale && (SALE_RE.test(flower.name) || ON_SALE_RE.test(flower.name) || hasSalePrice(flower))) {
      flower.isSale = true;
      saleFixed += 1;
    }
    flower.name = cleanName(flower.name);
    return flower;
  });

  let itemsFixed = 0;
  const items = data.items.map((sourceItem) => {
    const item = structuredClone(sourceItem);
    if (typeof item.price === 'string' && item.price.includes('[object')) {
      item.price = '';
      itemsFixed += 1;
    }
    return item;
  });

  return { flowers, items, saleFixed, itemsFixed };
}

function writeSnapshotsAtomically(flowersPath, itemsPath, flowers, items) {
  const nonce = `${process.pid}-${Date.now()}`;
  const entries = [
    { target: flowersPath, temp: `${flowersPath}.${nonce}.tmp`, backup: `${flowersPath}.${nonce}.bak`, value: flowers },
    { target: itemsPath, temp: `${itemsPath}.${nonce}.tmp`, backup: `${itemsPath}.${nonce}.bak`, value: items },
  ];

  const removeTemporary = (filePath) => {
    try {
      fs.rmSync(filePath, { force: true });
    } catch {
      // Cleanup must never turn a successful snapshot install into data loss.
    }
  };

  try {
    for (const entry of entries) {
      fs.writeFileSync(entry.temp, `${JSON.stringify(entry.value, null, 2)}\n`, 'utf-8');
    }
  } catch (error) {
    for (const entry of entries) removeTemporary(entry.temp);
    throw error;
  }

  const backedUp = [];
  const installed = [];
  let committed = false;
  try {
    for (const entry of entries) {
      if (fs.existsSync(entry.target)) {
        fs.renameSync(entry.target, entry.backup);
        backedUp.push(entry);
      }
    }
    for (const entry of entries) {
      fs.renameSync(entry.temp, entry.target);
      installed.push(entry);
    }
    committed = true;
  } catch (error) {
    for (const entry of installed) {
      fs.rmSync(entry.target, { force: true });
    }
    for (const entry of backedUp) {
      if (fs.existsSync(entry.backup)) fs.renameSync(entry.backup, entry.target);
    }
    throw error;
  } finally {
    for (const entry of entries) {
      removeTemporary(entry.temp);
      if (committed) removeTemporary(entry.backup);
    }
  }
}

async function runPrebuild({
  appsScriptUrl = process.env.APPS_SCRIPT_URL || '',
  fetchImpl = fetch,
  flowersPath = FLOWERS_PATH,
  itemsPath = ITEMS_PATH,
  logger = console,
} = {}) {
  if (!appsScriptUrl) {
    logger.log('[prebuild] No server APPS_SCRIPT_URL set - keeping existing static JSON files');
    return { status: 'skipped' };
  }

  const url = new URL(appsScriptUrl);
  url.searchParams.set('store', STORE_CODE);
  logger.log(`[prebuild] Fetching approved menu source for ${STORE_CODE}...`);

  const response = await fetchImpl(url, { signal: AbortSignal.timeout(30000) });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error('Invalid response: body is not JSON');
  }

  validatePayload(data);
  const snapshots = prepareSnapshots(data);
  writeSnapshotsAtomically(flowersPath, itemsPath, snapshots.flowers, snapshots.items);

  if (snapshots.saleFixed > 0) logger.log(`[prebuild] Fixed ${snapshots.saleFixed} sale flags from names`);
  if (snapshots.itemsFixed > 0) logger.log(`[prebuild] Fixed ${snapshots.itemsFixed} mangled item prices`);
  logger.log(`[prebuild] flowers.json updated: ${snapshots.flowers.length} products`);
  logger.log(`[prebuild] items.json updated: ${snapshots.items.length} products`);
  logger.log(`[prebuild] Stock date: ${data.stockDate || 'unknown'}`);
  logger.log('[prebuild] Done!');

  return {
    status: 'updated',
    storeCode: data.storeCode,
    stockDate: data.stockDate || null,
    flowerCount: snapshots.flowers.length,
    itemCount: snapshots.items.length,
  };
}

async function main() {
  try {
    await runPrebuild();
  } catch (error) {
    console.error(`[prebuild] Refusing to replace menu snapshots: ${error.message}`);
    process.exitCode = 1;
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  STORE_CODE,
  prepareSnapshots,
  runPrebuild,
  validatePayload,
  writeSnapshotsAtomically,
};
