import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { RESOURCE_PAGES, RESOURCE_PATHS, RESOURCE_SITE, getResourceBySegments } from "../app/resources/resourceData.ts";

const routeSource = await readFile(new URL("../app/resources/[...slug]/page.tsx", import.meta.url), "utf8");
const sitemapSource = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");
const nextConfig = await readFile(new URL("../next.config.ts", import.meta.url), "utf8");

const PATH = "/resources/golden-gas-strain";
const TITLE = "Golden Gas Strain, Explained: Reading a Name That Wears Its Parents";
const CANONICAL = "https://kennedyloudcannabis.com/resources/golden-gas-strain";

test("golden gas article is a self-canonical resource with Article dates", () => {
  const page = getResourceBySegments(["golden-gas-strain"]);
  assert.ok(page);
  assert.equal(page.path, PATH);
  assert.equal(page.title, TITLE);
  assert.equal(page.seoTitle, undefined);
  assert.equal(page.lastChecked, "November 10, 2026");
  assert.equal(page.datePublished, "2026-11-20");
  assert.equal(page.dateModified, "2026-11-20");
  assert.equal(page.omitBreadcrumbSchema, true);
  assert.equal(page.faqs, undefined);
  assert.equal(page.metaDescription.length <= 155, true);
  assert.equal(page.metaDescription.endsWith("."), true);
  assert.equal((page.metaDescription.match(/[.!?]/g) || []).length, 1);
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
  assert.match(routeSource, /name: "Kennedy Loud Cannabis"/);
  assert.doesNotMatch(nextConfig, /golden-gas-strain/);
  assert.doesNotMatch(routeSource, /"@type": "Review"|"@type": "AggregateRating"|"@type": "Product"|"@type": "Offer"/);
});

test("golden gas body stays verbatim and free of prices, phones, and 3.5", () => {
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
    ...(page.quickLinks ?? []).map((link) => link.href),
  ].join("\n");
  assert.match(copy, /November 10, 2026/);
  assert.match(copy, /The \*\*Golden Gas strain\*\*/);
  assert.match(copy, /between \*\*Golden Goat\*\* and \*\*Gas\*\*/);
  assert.match(copy, /"Golden" from one parent, "Gas" from the other/);
  assert.match(copy, /\*\*Diesel\*\*/);
  assert.match(copy, /\*\*strain name as optional\*\*/);
  assert.match(copy, /\[hash oil vs cannabis oil labels\]\(\/resources\/hash-oil-vs-cannabis-oil-labels\)/);
  assert.match(copy, /\[visit page\]\(\/visit\)/);
  assert.match(copy, /Leafly's Golden Gas page doesn't give a detailed look description/);
  assert.match(copy, /Bring government-issued photo ID\./);
  assert.equal(copy.match(/\]\((?!\/(?:resources\/hash-oil-vs-cannabis-oil-labels|visit)\))/g), null);
  const quickHrefs = (page.quickLinks ?? []).map((link) => link.href);
  assert.deepEqual(quickHrefs, ["/resources/hash-oil-vs-cannabis-oil-labels", "/visit"]);
  assert.doesNotMatch(copy, /\/flower\/|\/items\//);
  assert.doesNotMatch(copy, /we carry/i);
  assert.doesNotMatch(copy, /https?:\/\//);
  assert.doesNotMatch(copy, /3\.5/);
  assert.doesNotMatch(copy, /(?:\+1|\(\d{3}\)|\b\d{3}[-.\s]\d{3}[-.\s]\d{4}\b|289|206-1181|tel:|Farmers Link)/);
  assert.doesNotMatch(copy, /\$|\b(?:price|prices|deal|deals|coupon|discount|promo|hours|delivery window)\b/i);
});
