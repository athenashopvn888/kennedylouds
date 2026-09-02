import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { TIER_COMPARE, TIER_SEO } from "../app/lib/tierSeoContent.ts";

const tierPage = await readFile(new URL("../app/[tier]/page.tsx", import.meta.url), "utf8");
const tierKeys = ["EXOTIC", "PREMIUM", "AAA+", "AA", "BUDGET"];

test("all five KLC tier pages have unique approved Weed metadata and copy", () => {
  assert.deepEqual(Object.keys(TIER_SEO), tierKeys);
  assert.equal(new Set(tierKeys.map((key) => TIER_SEO[key].seoTitle)).size, 5);
  assert.equal(new Set(tierKeys.map((key) => TIER_SEO[key].seoIntro)).size, 5);

  for (const key of tierKeys) {
    const seo = TIER_SEO[key];
    assert.match(seo.seoTitle, /Weed & Cannabis Flower in Brampton \| Kennedy Loud Cannabis$/);
    assert.equal((seo.seoTitle.match(/Kennedy Loud Cannabis/g) ?? []).length, 1);
    assert.match(seo.h1, /Weed & Cannabis Flower in Brampton$/);
    assert.equal(seo.sections.length, 2);
    assert.equal(seo.faqs.length, 3);
    assert.doesNotMatch(`${seo.metaDescription} ${seo.seoIntro}`, /available in-store|in stock|medical|effect/i);
  }
});

test("tier template uses absolute titles, one H1 and preserved self-canonicals", () => {
  assert.match(tierPage, /title: seo \? \{ absolute: seo\.seoTitle \}/);
  assert.equal((tierPage.match(/<h1\b/g) ?? []).length, 1);
  assert.match(tierPage, /canonical: `https:\/\/kennedyloudcannabis\.com\/\$\{tierSlug\}`/);
  assert.match(tierPage, /seo\?\.strainHeading/);
});

test("tier comparison keeps the broad Weed owner and all five tier links", () => {
  assert.equal(TIER_COMPARE.ownerHref, "/weed-dispensary-brampton/");
  assert.match(TIER_COMPARE.heading, /Kennedy Loud Cannabis Flower Tiers/);
  assert.match(tierPage, /Object\.values\(TIER_CONFIG\)/);
  assert.match(tierPage, /Weed &amp; Flower/);
});
