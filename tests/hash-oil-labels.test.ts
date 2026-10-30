import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { RESOURCE_PAGES, RESOURCE_PATHS, RESOURCE_SITE, getResourceBySegments } from "../app/resources/resourceData.ts";

const routeSource = await readFile(new URL("../app/resources/[...slug]/page.tsx", import.meta.url), "utf8");
const sitemapSource = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");

const PATH = "/resources/hash-oil-vs-cannabis-oil-labels";
const TITLE = "Hash Oil vs Cannabis Oil vs Distillate: The Label Words, Decoded";

test("hash oil label article is a self-canonical resource with Article dates", () => {
  const page = getResourceBySegments(["hash-oil-vs-cannabis-oil-labels"]);
  assert.ok(page);
  assert.equal(page.path, PATH);
  assert.equal(page.title, TITLE);
  assert.equal(page.seoTitle, undefined);
  assert.equal(page.lastChecked, "October 21, 2026");
  assert.equal(page.datePublished, "2026-10-30");
  assert.equal(page.dateModified, "2026-10-30");
  assert.equal(page.omitBreadcrumbSchema, true);
  assert.equal(page.metaDescription.length <= 155, true);
  assert.equal(RESOURCE_SITE, "https://kennedyloudcannabis.com");
  assert.equal(`${RESOURCE_SITE}${page.path}`, "https://kennedyloudcannabis.com/resources/hash-oil-vs-cannabis-oil-labels");
  assert.equal(RESOURCE_PATHS.includes(PATH), true);
  assert.equal(RESOURCE_PAGES.filter((entry) => entry.path === PATH).length, 1);
  assert.match(sitemapSource, /RESOURCE_PATHS/);
  assert.match(routeSource, /datePublished: page\.datePublished/);
  assert.match(routeSource, /omitBreadcrumbSchema/);
  assert.doesNotMatch(routeSource, /"@type": "Review"|"@type": "AggregateRating"|"@type": "Product"|"@type": "Offer"/);
});

test("hash oil label body stays verbatim and free of prices, phones, and 3.5", () => {
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
  ].join("\n");
  assert.match(copy, /Last checked: October 21, 2026|October 21, 2026/);
  assert.match(copy, /\[visit page\]\(\/visit\)/);
  assert.match(copy, /section 123 of the Regulations/);
  assert.match(copy, /Word on the front/);
  assert.equal(copy.match(/\]\((?!\/visit\))/g), null);
  assert.doesNotMatch(copy, /https?:\/\//);
  assert.doesNotMatch(copy, /3\.5/);
  assert.doesNotMatch(copy, /(?:\+1|\(\d{3}\)|\b\d{3}[-.\s]\d{3}[-.\s]\d{4}\b|289|206-1181|tel:|Farmers Link)/);
  assert.doesNotMatch(copy, /\$|\b(?:price|prices|deal|deals|coupon|discount|promo|hours|delivery window)\b/i);
});
