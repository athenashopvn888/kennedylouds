/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');

const { STORE_CODE, runPrebuild } = require('../scripts/prebuild-stock');

const quietLogger = { log() {}, error() {}, warn() {} };

function productPayload(storeCode = STORE_CODE) {
  return {
    storeCode,
    stockDate: '2026-08-22T00:00:00.000Z',
    flowers: [
      { sku: 'K-1', name: 'KENNEDY FLOWER', slug: 'kennedy-flower', tier: 'AAA+', isSale: false, price3g: { regular: 20, sale: null } },
    ],
    items: [
      { sku: 'K-2', name: 'KENNEDY ITEM', slug: 'kennedy-item', category: 'EDIBLES', price: '$10' },
    ],
  };
}

function makeFixture() {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'klc-prebuild-'));
  const flowersPath = path.join(directory, 'flowers.json');
  const itemsPath = path.join(directory, 'items.json');
  const beforeFlowers = '[{"sku":"OLD-FLOWER"}]\n';
  const beforeItems = '[{"sku":"OLD-ITEM"}]\n';
  fs.writeFileSync(flowersPath, beforeFlowers);
  fs.writeFileSync(itemsPath, beforeItems);
  return { directory, flowersPath, itemsPath, beforeFlowers, beforeItems };
}

function jsonResponse(payload) {
  return async () => ({ ok: true, status: 200, statusText: 'OK', json: async () => structuredClone(payload) });
}

function assertUnchanged(fixture) {
  assert.equal(fs.readFileSync(fixture.flowersPath, 'utf8'), fixture.beforeFlowers);
  assert.equal(fs.readFileSync(fixture.itemsPath, 'utf8'), fixture.beforeItems);
}

test('accepts KLC01 and writes both validated snapshots', async (t) => {
  const fixture = makeFixture();
  t.after(() => fs.rmSync(fixture.directory, { recursive: true, force: true }));

  const result = await runPrebuild({
    appsScriptUrl: 'https://example.test/menu',
    fetchImpl: jsonResponse(productPayload()),
    flowersPath: fixture.flowersPath,
    itemsPath: fixture.itemsPath,
    logger: quietLogger,
  });

  assert.equal(result.storeCode, STORE_CODE);
  assert.equal(result.flowerCount, 1);
  assert.equal(result.itemCount, 1);
  assert.equal(JSON.parse(fs.readFileSync(fixture.flowersPath, 'utf8'))[0].sku, 'K-1');
  assert.equal(JSON.parse(fs.readFileSync(fixture.itemsPath, 'utf8'))[0].sku, 'K-2');
});

test('accepts an intentional grouped SKU when product slugs are distinct', async (t) => {
  const fixture = makeFixture();
  t.after(() => fs.rmSync(fixture.directory, { recursive: true, force: true }));
  const payload = productPayload();
  payload.items.push({ ...payload.items[0], name: 'SECOND KENNEDY ITEM', slug: 'second-kennedy-item' });

  const result = await runPrebuild({
    appsScriptUrl: 'https://example.test/menu',
    fetchImpl: jsonResponse(payload),
    flowersPath: fixture.flowersPath,
    itemsPath: fixture.itemsPath,
    logger: quietLogger,
  });

  assert.equal(result.itemCount, 2);
});

test('rejects PL601 and preserves both existing snapshots', async (t) => {
  const fixture = makeFixture();
  t.after(() => fs.rmSync(fixture.directory, { recursive: true, force: true }));

  await assert.rejects(
    runPrebuild({
      appsScriptUrl: 'https://example.test/menu',
      fetchImpl: jsonResponse(productPayload('PL601')),
      flowersPath: fixture.flowersPath,
      itemsPath: fixture.itemsPath,
      logger: quietLogger,
    }),
    /expected storeCode KLC01/,
  );
  assertUnchanged(fixture);
});

test('rejects malformed arrays and preserves both existing snapshots', async (t) => {
  const fixture = makeFixture();
  t.after(() => fs.rmSync(fixture.directory, { recursive: true, force: true }));
  const payload = productPayload();
  payload.items = { not: 'an array' };

  await assert.rejects(
    runPrebuild({
      appsScriptUrl: 'https://example.test/menu',
      fetchImpl: jsonResponse(payload),
      flowersPath: fixture.flowersPath,
      itemsPath: fixture.itemsPath,
      logger: quietLogger,
    }),
    /items must be an array/,
  );
  assertUnchanged(fixture);
});

test('rejects duplicate SKU identity and preserves both existing snapshots', async (t) => {
  const fixture = makeFixture();
  t.after(() => fs.rmSync(fixture.directory, { recursive: true, force: true }));
  const payload = productPayload();
  payload.flowers.push({ ...payload.flowers[0], name: 'DUPLICATE' });

  await assert.rejects(
    runPrebuild({
      appsScriptUrl: 'https://example.test/menu',
      fetchImpl: jsonResponse(payload),
      flowersPath: fixture.flowersPath,
      itemsPath: fixture.itemsPath,
      logger: quietLogger,
    }),
    /duplicate flowers identity K-1\|KENNEDY-FLOWER/,
  );
  assertUnchanged(fixture);
});
