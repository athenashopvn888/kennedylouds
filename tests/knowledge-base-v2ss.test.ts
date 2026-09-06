import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { RESOURCE_PAGES } from "../app/resources/resourceData.ts";
import { TIER_SEO } from "../app/lib/tierSeoContent.ts";

describe("KLC01 knowledge base V2 SS", () => {
  it("adds 15 new resources and expands the four approved owners", () => {
    assert.equal(RESOURCE_PAGES.length, 23);
    const routes = new Set(RESOURCE_PAGES.map((page) => page.path));
    assert.equal(routes.size, 23);
    for (const route of ["/resources/cannabis-101", "/resources/flower-guides/what-does-good-weed-mean", "/resources/cannabis-101/weed-slang-glossary"]) assert.equal(routes.has(route), true);
    for (const route of ["/resources/cannabis-dispensary-vs-weed-dispensary", "/resources/hillcrest-ave-visit-guide", "/resources/weed-flower-tier-guide", "/resources/native-smokes-brampton-guide"]) assert.ok((RESOURCE_PAGES.find((page) => page.path === route)?.blocks?.length || 0) > 5);
  });

  it("preserves protected Weed owners and adds bounded education", () => {
    assert.deepEqual(Object.keys(TIER_SEO), ["EXOTIC", "PREMIUM", "AAA+", "AA", "BUDGET"]);
    assert.match(TIER_SEO.EXOTIC.h1, /Exotic Weed/);
    assert.match(TIER_SEO.PREMIUM.h1, /Premium Weed/);
    for (const tier of Object.values(TIER_SEO)) assert.equal(tier.sections.length, 3);
  });

  it("contains no public workflow or markdown leakage", () => {
    const publicText = JSON.stringify(RESOURCE_PAGES);
    assert.doesNotMatch(publicText, /(?:PINKY|CODY|SEO workflow|keyword strategy|Preserve datePublished|Set commercialLinks)/i);
    assert.equal(publicText.includes('"---"'), false);
  });
});
