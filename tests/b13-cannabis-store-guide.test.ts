import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { gbpLocation, NAP } from "../app/lib/gbp-location.ts";
import { SEO_PAGES } from "../app/lib/seoPages.ts";

const storePage = await readFile(new URL("../app/cannabis-store-brampton/page.tsx", import.meta.url), "utf8");
const storeGuide = await readFile(new URL("../app/lib/cannabisStoreGuide.ts", import.meta.url), "utf8");
const homepage = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const homeClient = await readFile(new URL("../app/HomePageClient.tsx", import.meta.url), "utf8");
const landing = await readFile(new URL("../app/weed-dispensary-brampton/page.tsx", import.meta.url), "utf8");
const gbpPage = await readFile(new URL("../app/components/GBPLandingPage.tsx", import.meta.url), "utf8");
const footer = await readFile(new URL("../app/components/Footer.tsx", import.meta.url), "utf8");
const sitemap = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");
const visitGuide = await readFile(new URL("../app/lib/visitGuide.ts", import.meta.url), "utf8");

const STORE_TITLE = "Cannabis Store Brampton | Kennedy / Queen / Main";
const STORE_H1 = "Central Brampton Cannabis Store Guide (Kennedy / Queen / Main)";
const VISIT_TITLE = "How to Find Kennedy Loud at 49 Hillcrest Ave Unit 104";

test("B13 cannabis store guide has unique title, meta, and H1 for central Brampton", () => {
  assert.match(storeGuide, /path: "\/cannabis-store-brampton"/);
  assert.match(storeGuide, new RegExp(`title: "${STORE_TITLE.replace(/[|/]/g, "\\$&")}"`));
  assert.match(storeGuide, new RegExp(`h1: "${STORE_H1.replace(/[()]/g, "\\$&")}"`));
  assert.match(storeGuide, /cannabis store brampton/i);
  assert.match(storeGuide, /cannabis brampton/i);
  assert.match(storeGuide, /brampton dispensary/i);
  assert.match(storeGuide, /kennedy loud cannabis/i);
  assert.match(storeGuide, /49 Hillcrest Ave Unit 104/);
  assert.match(storeGuide, /Open 24 Hours/);
  assert.match(storeGuide, /\+1 \(289\) 206-1181/);
  assert.match(storePage, /absolute: CANNABIS_STORE_GUIDE\.title/);
  assert.match(storePage, /<h1 className=\{styles\.h1\}>\{CANNABIS_STORE_GUIDE\.h1\}<\/h1>/);

  const existingTitles = [
    "Kennedy Loud Cannabis | 24 Hour Weed Dispensary Brampton",
    gbpLocation.seoTitle,
    VISIT_TITLE,
    "Kennedy Road Weed Dispensary | Open 24 Hours | Brampton",
    ...SEO_PAGES.map((page) => page.title),
  ];
  assert.ok(!existingTitles.includes(STORE_TITLE));
  assert.ok(!SEO_PAGES.some((page) => page.h1 === STORE_H1));
  assert.notEqual(STORE_TITLE, gbpLocation.seoTitle);
  assert.notEqual(STORE_TITLE, VISIT_TITLE);
  assert.doesNotMatch(storeGuide, /path: "\/cannabis-store-brampton\/"/);
});

test("B13 cannabis store guide keeps GBP-true NAP, hours, and homepage website lock", () => {
  assert.match(storePage, /NAP\.address/);
  assert.match(storePage, /NAP\.hours/);
  assert.match(storePage, /NAP\.website/);
  assert.match(storePage, /NAP\.phone/);
  assert.equal(NAP.storeName, "Kennedy Loud Cannabis");
  assert.equal(NAP.address, "49 Hillcrest Ave Unit 104, Brampton, ON L6W 1Y7");
  assert.equal(NAP.phone, "+1 (289) 206-1181");
  assert.equal(NAP.website, "https://kennedyloudcannabis.com/");
  assert.equal(NAP.hours, "Open 24 Hours");
  assert.match(storePage, /"@type": "CannabisStore"/);
  assert.match(storePage, /url: NAP\.website/);
  assert.doesNotMatch(storePage, /star rating|5-star|google reviews say|rated #1/i);
  assert.doesNotMatch(storePage, /https:\/\/kennedyloudcannabis\.com\/weed-dispensary/);
});

test("B13 cannabis store guide includes required H2s, FAQ schema, and live internal links", () => {
  assert.match(storePage, /Corridors we serve/);
  assert.match(storePage, /Unit 104 findability/);
  assert.match(storePage, /Hillcrest \/ Kennedy is not the Queen Street West storefront/);
  assert.match(storePage, /FAQ: cannabis store Brampton/);
  assert.match(storePage, /"@type": "FAQPage"/);
  assert.match(storeGuide, /Where is the Kennedy Loud cannabis store in Brampton\?/);
  assert.match(storeGuide, /href: "\/"/);
  assert.match(storeGuide, /href: "\/weed-dispensary-brampton\/"/);
  assert.match(storeGuide, /href: "\/visit"/);
  assert.match(storeGuide, /href: "\/resources\/24-hour-brampton-dispensary-guide"/);
});

test("homepage, visit guide, and Brampton landing link to the B13 cannabis store page", () => {
  assert.match(homeClient, /href: "\/cannabis-store-brampton"/);
  assert.match(homeClient, /href="\/cannabis-store-brampton"/);
  assert.match(gbpPage, /href="\/cannabis-store-brampton"/);
  assert.match(footer, /href="\/cannabis-store-brampton"/);
  assert.match(sitemap, /\$\{BASE\}\/cannabis-store-brampton/);
  assert.match(visitGuide, /href: "\/cannabis-store-brampton"/);
  assert.equal(gbpLocation.localGuides[1]?.href, "/cannabis-store-brampton");
  assert.equal(gbpLocation.localGuides[0]?.href, "/visit");
  assert.match(landing, /GBPLandingPage/);
  assert.match(homepage, /absolute: TITLE/);
});

test("B13 copy distinguishes Queen Street West without inventing reviews or merging NAP", () => {
  assert.match(storePage, /Blouds/);
  assert.match(storePage, /Queen Street West/);
  assert.match(storePage, /different licensed storefront/);
  assert.doesNotMatch(storePage, /our sister store|corporate parent|fleet store|also located at/i);
  assert.doesNotMatch(storePage, /Value Buds|Pink House|Magic Leaf|fully licensed/i);
  assert.doesNotMatch(storePage, /117 Queen/);
  assert.doesNotMatch(storePage, /buzzer code [0-9]|best dispensary in Brampton/i);

  const sharedSurfaces = [homeClient, gbpPage, visitGuide, footer].join("\n");
  assert.doesNotMatch(sharedSurfaces, /Blouds|117 Queen|sister store|corporate parent/i);
});
