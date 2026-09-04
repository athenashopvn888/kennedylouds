import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const resources = await readFile(new URL("../app/resources/resourceData.ts", import.meta.url), "utf8");
const route = await readFile(new URL("../app/resources/[...slug]/page.tsx", import.meta.url), "utf8");

test("KLC dispensary authority article keeps exact metadata, identity and local-page support", () => {
  assert.match(resources, /path: "\/resources\/cannabis-dispensary-vs-weed-dispensary"/);
  assert.match(resources, /seoTitle: "Weed vs Cannabis Dispensary \| Kennedy Loud Brampton"/);
  assert.match(resources, /title: "Weed Dispensary vs\. Cannabis Dispensary: Two Searches, Similar Intent"/);
  assert.match(resources, /href: "\/info\/dispensary-near-me-brampton"/);
  assert.match(resources, /Frequently Asked Questions|Why do people say weed dispensary/);
  assert.match(route, /page\.seoTitle \?\? page\.title/);
});
