import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { RESOURCE_PAGES, RESOURCE_PATHS, RESOURCE_SITE, getResourceBySegments } from "../app/resources/resourceData.ts";

const routeSource = await readFile(new URL("../app/resources/[...slug]/page.tsx", import.meta.url), "utf8");
const viewSource = await readFile(new URL("../app/resources/ResourceView.tsx", import.meta.url), "utf8");
const sitemapSource = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");

const PATH = "/resources/smoking-at-home-fire-safety";
const TITLE = "Smoking at home without starting a fire";

test("smoking-at-home fire safety page is on the resources index and sitemap", () => {
  const page = getResourceBySegments(["smoking-at-home-fire-safety"]);
  assert.ok(page);
  assert.equal(page.path, PATH);
  assert.equal(page.title, TITLE);
  assert.equal(page.seoTitle, undefined);
  assert.equal(page.lastChecked, "September 30, 2026");
  assert.equal(page.dateModified, "2026-09-30");
  assert.equal(RESOURCE_SITE, "https://kennedyloudcannabis.com");
  assert.equal(`${RESOURCE_SITE}${page.path}`, "https://kennedyloudcannabis.com/resources/smoking-at-home-fire-safety");
  assert.equal(RESOURCE_PAGES.some((entry) => entry.path === PATH), true);
  assert.equal(RESOURCE_PATHS.includes(PATH), true);
  assert.match(sitemapSource, /RESOURCE_PATHS/);
  assert.match(viewSource, /RESOURCE_PAGES\.map/);
  assert.match(viewSource, /Last checked: \{article\.lastChecked\}/);
  assert.match(viewSource, /<h1>\{article\.title\}<\/h1>/);
});

test("resource article metadata keeps a self-canonical, index,follow, and Article schema", () => {
  assert.match(routeSource, /alternates: \{ canonical: `\$\{RESOURCE_SITE\}\$\{page\.path\}` \}/);
  assert.match(routeSource, /index: true/);
  assert.match(routeSource, /follow: true/);
  assert.match(routeSource, /"@type": "Article"/);
  assert.match(routeSource, /headline: page\.title/);
  assert.match(routeSource, /dateModified: page\.dateModified/);
});

test("approved article text stays free of phone numbers, prices, deals, and 3.5", () => {
  const page = RESOURCE_PAGES.find((entry) => entry.path === PATH);
  assert.ok(page);
  const copy = [page.title, page.summary, page.metaDescription, page.lastChecked, ...(page.blocks ?? []).flatMap((block) => ("text" in block ? [block.text] : block.items))].join("\n");
  assert.match(copy, /September 30, 2026/);
  assert.match(copy, /smoking is the number one cause of fatal home fires in Ontario/);
  assert.match(copy, /how do you put out a joint safely/);
  assert.match(copy, /call 911 and tell them what happened/);
  assert.match(copy, /\[visit page\]\(\/visit\)/);
  assert.match(copy, /\[first-visit guide\]\(\/resources\/hillcrest-ave-visit-guide\)/);
  assert.doesNotMatch(copy, /3\.5/);
  assert.doesNotMatch(copy, /(?:\+1|\(\d{3}\)|\b\d{3}[-.\s]\d{3}[-.\s]\d{4}\b|289|206-1181|tel:)/);
  assert.doesNotMatch(copy, /\$|\b(?:price|prices|deal|deals|coupon|discount|sale|cheap)\b/i);
});
