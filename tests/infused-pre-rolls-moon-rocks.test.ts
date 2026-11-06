import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { RESOURCE_PAGES, RESOURCE_PATHS, RESOURCE_SITE, getResourceBySegments } from "../app/resources/resourceData.ts";

const routeSource = await readFile(new URL("../app/resources/[...slug]/page.tsx", import.meta.url), "utf8");
const sitemapSource = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");
const nextConfig = await readFile(new URL("../next.config.ts", import.meta.url), "utf8");

const PATH = "/resources/infused-pre-rolls-and-moon-rocks";
const TITLE = "Infused Pre-Rolls and Moon Rocks: Two Menu Words, One Label That Tells the Truth";
const CANONICAL = "https://kennedyloudcannabis.com/resources/infused-pre-rolls-and-moon-rocks";

test("infused pre-roll article is a self-canonical resource with Article dates", () => {
  const page = getResourceBySegments(["infused-pre-rolls-and-moon-rocks"]);
  assert.ok(page);
  assert.equal(page.path, PATH);
  assert.equal(page.title, TITLE);
  assert.equal(page.seoTitle, undefined);
  assert.equal(page.lastChecked, "October 25, 2026");
  assert.equal(page.datePublished, "2026-11-06");
  assert.equal(page.dateModified, "2026-11-06");
  assert.equal(page.omitBreadcrumbSchema, true);
  assert.equal(page.metaDescription.length <= 155, true);
  assert.equal(page.metaDescription.includes("."), true);
  assert.equal(RESOURCE_SITE, "https://kennedyloudcannabis.com");
  assert.equal(`${RESOURCE_SITE}${page.path}`, CANONICAL);
  assert.equal(RESOURCE_PATHS.includes(PATH), true);
  assert.equal(RESOURCE_PAGES.filter((entry) => entry.path === PATH).length, 1);
  assert.match(sitemapSource, /RESOURCE_PATHS/);
  assert.match(routeSource, /datePublished: page\.datePublished/);
  assert.match(routeSource, /omitBreadcrumbSchema/);
  assert.match(routeSource, /index: true/);
  assert.match(routeSource, /follow: true/);
  assert.doesNotMatch(nextConfig, /infused-pre-rolls-and-moon-rocks/);
  assert.doesNotMatch(routeSource, /"@type": "Review"|"@type": "AggregateRating"|"@type": "Product"|"@type": "Offer"/);
});

test("infused pre-roll body stays verbatim and free of prices, phones, 3.5, and dropped links", () => {
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
  assert.match(copy, /October 25, 2026/);
  assert.match(copy, /The 30-second version/);
  assert.match(copy, /Class line \(\*cannabis extract\*\?\), then ingredients/);
  assert.match(copy, /\*\*"Total THC"\*\*/);
  assert.match(copy, /more than 3% THC by weight/);
  assert.match(copy, /\[visit page\]\(\/visit\)/);
  assert.match(copy, /Staff ask for ID from anyone who looks under 25\./);
  assert.equal(copy.match(/\]\((?!\/visit\))/g), null);
  assert.doesNotMatch(copy, /vapes-concentrates-guide/);
  assert.doesNotMatch(copy, /https?:\/\//);
  assert.doesNotMatch(copy, /3\.5/);
  assert.doesNotMatch(copy, /(?:\+1|\(\d{3}\)|\b\d{3}[-.\s]\d{3}[-.\s]\d{4}\b|289|206-1181|tel:|Farmers Link)/);
  assert.doesNotMatch(copy, /\$|\b(?:price|prices|deal|deals|coupon|discount|promo|hours|delivery window)\b/i);
});
