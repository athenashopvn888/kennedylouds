import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { RESOURCE_PAGES, RESOURCE_PATHS, RESOURCE_SITE, getResourceBySegments } from "../app/resources/resourceData.ts";

const routeSource = await readFile(new URL("../app/resources/[...slug]/page.tsx", import.meta.url), "utf8");
const sitemapSource = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");
const nextConfig = await readFile(new URL("../next.config.ts", import.meta.url), "utf8");

const PATH = "/resources/what-is-shatter-vs-wax";
const TITLE = "What Is Shatter? The Glassy Concentrate, Plus Shatter vs Wax, Made Easy";
const CANONICAL = "https://kennedyloudcannabis.com/resources/what-is-shatter-vs-wax";

test("shatter vs wax article is a self-canonical resource with Article dates", () => {
  const page = getResourceBySegments(["what-is-shatter-vs-wax"]);
  assert.ok(page);
  assert.equal(page.path, PATH);
  assert.equal(page.title, TITLE);
  assert.equal(page.seoTitle, undefined);
  assert.equal(page.lastChecked, "October 25, 2026");
  assert.equal(page.datePublished, "2026-11-13");
  assert.equal(page.dateModified, "2026-11-13");
  assert.equal(page.omitBreadcrumbSchema, true);
  assert.equal(page.metaDescription.length <= 155, true);
  assert.equal(page.metaDescription.endsWith("."), true);
  assert.equal(RESOURCE_SITE, "https://kennedyloudcannabis.com");
  assert.equal(`${RESOURCE_SITE}${page.path}`, CANONICAL);
  assert.equal(RESOURCE_PATHS.includes(PATH), true);
  assert.equal(RESOURCE_PAGES.filter((entry) => entry.path === PATH).length, 1);
  assert.match(sitemapSource, /RESOURCE_PATHS/);
  assert.match(routeSource, /datePublished: page\.datePublished/);
  assert.match(routeSource, /mainEntityOfPage: canonical/);
  assert.match(routeSource, /omitBreadcrumbSchema/);
  assert.match(routeSource, /index: true/);
  assert.match(routeSource, /follow: true/);
  assert.match(routeSource, /title: \{ absolute: title \}/);
  assert.doesNotMatch(nextConfig, /what-is-shatter-vs-wax/);
  assert.doesNotMatch(routeSource, /"@type": "Review"|"@type": "AggregateRating"|"@type": "Product"|"@type": "Offer"/);
});

test("shatter vs wax body stays verbatim and free of prices, phones, and 3.5", () => {
  const page = RESOURCE_PAGES.find((entry) => entry.path === PATH);
  assert.ok(page);
  const copy = [
    page.title,
    page.summary,
    page.metaDescription,
    page.lastChecked,
    ...(page.blocks ?? []).flatMap((block) => {
      if (block.type === "table") return [...block.headers, ...block.rows.flat()];
      if ("items" in block) return block.items;
      return [block.text];
    }),
    ...(page.quickLinks ?? []).map((link) => `${link.href}`),
  ].join("\n");
  assert.match(copy, /October 25, 2026/);
  assert.match(copy, /So, \*\*what is shatter\*\*/);
  assert.match(copy, /Lip balm or ear wax \(sorry\)/);
  assert.match(copy, /0\.25 g of concentrate counts as 1 g of dried/);
  assert.match(copy, /\[Kennedy Loud guides\]\(\/guides\)/);
  assert.match(copy, /\[Kennedy Road weed dispensary\]\(\/weed-dispensary-brampton-kennedy\)/);
  assert.match(copy, /\[visit page\]\(\/visit\)/);
  assert.match(copy, /Staff ask for ID from anyone who looks under 25\./);
  assert.equal(copy.match(/\]\((?!\/(?:guides|visit|weed-dispensary-brampton-kennedy)\))/g), null);
  const quickHrefs = (page.quickLinks ?? []).map((link) => link.href).sort();
  assert.deepEqual(quickHrefs, ["/guides", "/visit", "/weed-dispensary-brampton-kennedy"]);
  assert.doesNotMatch(copy, /https?:\/\//);
  assert.doesNotMatch(copy, /3\.5/);
  assert.doesNotMatch(copy, /(?:\+1|\(\d{3}\)|\b\d{3}[-.\s]\d{3}[-.\s]\d{4}\b|289|206-1181|tel:|Farmers Link)/);
  assert.doesNotMatch(copy, /\$|\b(?:price|prices|deal|deals|coupon|discount|promo|hours|delivery window)\b/i);
});
