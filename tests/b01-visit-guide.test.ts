import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { gbpLocation, NAP } from "../app/lib/gbp-location.ts";
import { SEO_PAGES } from "../app/lib/seoPages.ts";

const visitPage = await readFile(new URL("../app/visit/page.tsx", import.meta.url), "utf8");
const visitGuide = await readFile(new URL("../app/lib/visitGuide.ts", import.meta.url), "utf8");
const homepage = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const homeClient = await readFile(new URL("../app/HomePageClient.tsx", import.meta.url), "utf8");
const landing = await readFile(new URL("../app/weed-dispensary-brampton/page.tsx", import.meta.url), "utf8");
const gbpPage = await readFile(new URL("../app/components/GBPLandingPage.tsx", import.meta.url), "utf8");
const footer = await readFile(new URL("../app/components/Footer.tsx", import.meta.url), "utf8");
const sitemap = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");

const VISIT_TITLE = "How to Find Kennedy Loud at 49 Hillcrest Ave Unit 104";
const VISIT_H1 = "How to Find Kennedy Loud at 49 Hillcrest Ave Unit 104 (Central Brampton Walk-In)";

test("B01 visit guide has unique title, meta, and H1 for Unit 104 findability", () => {
  assert.match(visitGuide, /path: "\/visit"/);
  assert.match(visitGuide, new RegExp(`title: "${VISIT_TITLE}"`));
  assert.match(visitGuide, new RegExp(`h1: "${VISIT_H1.replace(/[()]/g, "\\$&")}"`));
  assert.match(visitGuide, /dispensary near me/i);
  assert.match(visitGuide, /49 Hillcrest Ave Unit 104/);
  assert.match(visitGuide, /Open 24 Hours/);
  assert.match(visitGuide, /\+1 \(289\) 206-1181/);
  assert.match(visitPage, /absolute: VISIT_GUIDE\.title/);
  assert.match(visitPage, /<h1 className=\{styles\.h1\}>\{VISIT_GUIDE\.h1\}<\/h1>/);

  const existingTitles = [
    "Kennedy Loud Cannabis | 24 Hour Weed Dispensary Brampton",
    gbpLocation.seoTitle,
    "Kennedy Road Weed Dispensary | Open 24 Hours | Brampton",
    ...SEO_PAGES.map((page) => page.title),
  ];
  assert.ok(!existingTitles.includes(VISIT_TITLE));
  assert.ok(!SEO_PAGES.some((page) => page.h1 === VISIT_H1));
  assert.notEqual(VISIT_TITLE, gbpLocation.seoTitle);
});

test("B01 visit guide keeps GBP-true NAP, hours, and homepage website lock", () => {
  assert.match(visitPage, /NAP\.address/);
  assert.match(visitPage, /NAP\.hours/);
  assert.match(visitPage, /NAP\.website/);
  assert.match(visitPage, /NAP\.phone/);
  assert.equal(NAP.storeName, "Kennedy Loud Cannabis");
  assert.equal(NAP.address, "49 Hillcrest Ave Unit 104, Brampton, ON L6W 1Y7");
  assert.equal(NAP.phone, "+1 (289) 206-1181");
  assert.equal(NAP.website, "https://kennedyloudcannabis.com/");
  assert.equal(NAP.hours, "Open 24 Hours");
  assert.doesNotMatch(visitPage, /star rating|5-star|google reviews say|rated #1/i);
});

test("B01 visit guide includes required H2s, FAQ schema, and live internal links", () => {
  assert.match(visitPage, /Where we are \(Hillcrest Ave Unit 104/);
  assert.match(visitPage, /Kennedy–Queen–Main corridor landmarks/);
  assert.match(visitPage, /Hours and what “open now” means/);
  assert.match(visitPage, /What to bring \(19\+ ID\)/);
  assert.match(visitPage, /FAQ: dispensary near me \/ Brampton open/);
  assert.match(visitPage, /Map and directions from Kennedy Rd \/ Queen St/);
  assert.match(visitPage, /"@type": "FAQPage"/);
  assert.match(visitGuide, /Is there a dispensary near me in central Brampton\?/);
  assert.match(visitGuide, /href: "\/"/);
  assert.match(visitGuide, /href: "\/weed-dispensary-brampton\/"/);
  assert.match(visitGuide, /href: "\/info\/native-cigarettes-brampton"/);
});

test("homepage and Brampton landing link to the B01 /visit guide", () => {
  assert.match(homeClient, /href: "\/visit"/);
  assert.match(homeClient, /Find Unit 104/);
  assert.match(homeClient, /href="\/visit"/);
  assert.match(gbpPage, /href="\/visit"/);
  assert.match(gbpPage, /How to find Unit 104/);
  assert.match(footer, /href="\/visit"/);
  assert.match(sitemap, /\$\{BASE\}\/visit/);
  assert.equal(gbpLocation.localGuides[0]?.href, "/visit");
  assert.match(landing, /GBPLandingPage/);
  assert.match(homepage, /absolute: TITLE/);
});

test("B01 visit copy stays standalone and does not invent reviews or sister stores", () => {
  const publicCopy = [visitPage, visitGuide, homeClient, gbpPage].join("\n");
  assert.doesNotMatch(publicCopy, /Blouds|Magic Leaf|St\.? Clair|117 Queen|varies by store|fully licensed/i);
  assert.doesNotMatch(publicCopy, /corporate parent|sister store|fleet store/i);
  assert.doesNotMatch(visitPage, /buzzer code [0-9]|unit 105|best dispensary in Brampton/i);
});
