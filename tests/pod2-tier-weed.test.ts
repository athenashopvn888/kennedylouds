import assert from "node:assert/strict";
import test from "node:test";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { TIER_COMPARE, TIER_SEO } from "../app/lib/tierSeoContent.ts";

const tierPage = await readFile(new URL("../app/[tier]/page.tsx", import.meta.url), "utf8");
const nextConfig = await readFile(new URL("../next.config.ts", import.meta.url), "utf8");
const productsSource = await readFile(new URL("../app/lib/products.ts", import.meta.url), "utf8");
const resourceSource = await readFile(new URL("../app/resources/resourceData.ts", import.meta.url), "utf8");
const tierKeys = ["EXOTIC", "PREMIUM", "AAA+", "AA", "BUDGET"];
const canonicalSlugs = ["exotic-weed", "premium-weed", "aaa-weed", "aa-weed", "budget-weed"];
const legacySlugs = ["exotic", "premium", "aaa", "aa", "budget"];

async function readSourceTree(directory: string): Promise<string> {
  const entries = await readdir(directory, { withFileTypes: true });
  const parts: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) parts.push(await readSourceTree(fullPath));
    else if (/\.(?:ts|tsx)$/.test(entry.name)) parts.push(await readFile(fullPath, "utf8"));
  }
  return parts.join("\n");
}

const appSource = await readSourceTree(path.resolve(import.meta.dirname, "../app"));

test("all five KLC tier pages have unique approved Weed metadata and copy", () => {
  assert.deepEqual(Object.keys(TIER_SEO), tierKeys);
  assert.equal(new Set(tierKeys.map((key) => TIER_SEO[key].seoTitle)).size, 5);
  assert.equal(new Set(tierKeys.map((key) => TIER_SEO[key].seoIntro)).size, 5);

  for (const key of tierKeys) {
    const seo = TIER_SEO[key];
    assert.match(seo.seoTitle, /Weed & Cannabis Flower Brampton \| Kennedy Loud Cannabis$/);
    assert.equal((seo.seoTitle.match(/Kennedy Loud Cannabis/g) ?? []).length, 1);
    assert.match(seo.h1, /Weed & Cannabis Flower in Brampton$/);
    assert.match(seo.strainHeading, /Weed/);
    assert.equal(seo.sections.length, 2);
    assert.equal(seo.faqs.length, 3);
    const body = [seo.seoIntro, ...seo.sections.flatMap((section) => [section.heading, section.body]), ...seo.faqs.flatMap((faq) => [faq.q, faq.a])].join(" ");
    assert.doesNotMatch(body, /available in-store|in stock|medical|effect|\bpage\b|\broute\b|\bowner\b|site structure|seo/i);
  }
});

test("tier template uses absolute titles, one H1 and self-canonicals", () => {
  assert.match(tierPage, /title: seo \? \{ absolute: seo\.seoTitle \}/);
  assert.equal((tierPage.match(/<h1\b/g) ?? []).length, 1);
  assert.match(tierPage, /canonical: `https:\/\/kennedyloudcannabis\.com\/\$\{tierSlug\}`/);
  assert.match(tierPage, /seo\?\.strainHeading/);
});

test("all tier config names and slugs comply with Weed V2", () => {
  for (const slug of canonicalSlugs) {
    assert.match(productsSource, new RegExp(`slug: "${slug}"`));
  }
  for (const name of ["Exotic Weed", "Premium Weed", "AAA+ Weed", "AA Weed", "Budget Weed"]) {
    assert.match(productsSource, new RegExp(`name: "${name.replace("+", "\\+")}"`));
  }
});

test("legacy tier and resource URLs are direct permanent redirects", () => {
  legacySlugs.forEach((legacy, index) => {
    assert.match(nextConfig, new RegExp(`source: "/${legacy}", destination: "/${canonicalSlugs[index]}", permanent: true`));
  });
  assert.match(nextConfig, /source: "\/resources\/flower-tier-guide", destination: "\/resources\/weed-flower-tier-guide", permanent: true/);
});

test("tier comparison and Weed resource preserve the broad Weed owner", () => {
  assert.equal(TIER_COMPARE.ownerHref, "/weed-dispensary-brampton/");
  assert.match(TIER_COMPARE.heading, /Kennedy Loud Weed & Flower Tiers/);
  assert.match(tierPage, /Object\.values\(TIER_CONFIG\)/);
  assert.match(tierPage, /\{tier\.name\} &amp; Flower/);
  assert.match(resourceSource, /path: "\/resources\/weed-flower-tier-guide"/);
  assert.doesNotMatch(resourceSource, /path: "\/resources\/flower-tier-guide"/);
});

test("app source links directly to new canonicals with no legacy internal hrefs", () => {
  for (const legacy of legacySlugs) {
    assert.doesNotMatch(appSource, new RegExp(`(?:href=|href:)[^\\n]{0,20}/${legacy}(?:["'/?#}])`));
  }
  assert.doesNotMatch(appSource, /(?:href=|href:)[^\n]{0,30}\/resources\/flower-tier-guide/);
  for (const slug of canonicalSlugs) assert.match(appSource, new RegExp(`/${slug}`));
});
