import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { gbpLocation, NAP } from "../app/lib/gbp-location.ts";
import { SEO_PAGES } from "../app/lib/seoPages.ts";
import { VISIT_FAQS, VISIT_GUIDE, VISIT_INTERNAL_LINKS } from "../app/lib/visitGuide.ts";

const visitPage = await readFile(new URL("../app/visit/page.tsx", import.meta.url), "utf8");
const homepage = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const homeClient = await readFile(new URL("../app/HomePageClient.tsx", import.meta.url), "utf8");
const landing = await readFile(new URL("../app/weed-dispensary-brampton/page.tsx", import.meta.url), "utf8");
const gbpPage = await readFile(new URL("../app/components/GBPLandingPage.tsx", import.meta.url), "utf8");
const footer = await readFile(new URL("../app/components/Footer.tsx", import.meta.url), "utf8");
const sitemap = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");

test("B01 visit guide has unique title, meta, and H1 for Unit 104 findability", () => {
  assert.equal(VISIT_GUIDE.path, "/visit");
  assert.equal(VISIT_GUIDE.title, "How to Find Kennedy Loud at 49 Hillcrest Ave Unit 104");
  assert.equal(
    VISIT_GUIDE.h1,
    "How to Find Kennedy Loud at 49 Hillcrest Ave Unit 104 (Central Brampton Walk-In)",
  );
  assert.match(VISIT_GUIDE.metaDescription, /dispensary near me/i);
  assert.match(VISIT_GUIDE.metaDescription, /49 Hillcrest Ave Unit 104/);
  assert.match(VISIT_GUIDE.metaDescription, /Open 24 Hours/);
  assert.match(VISIT_GUIDE.metaDescription, /\+1 \(289\) 206-1181/);
  assert.match(visitPage, /absolute: VISIT_GUIDE\.title/);
  assert.match(visitPage, /<h1 className=\{styles\.h1\}>\{VISIT_GUIDE\.h1\}<\/h1>/);

  const existingTitles = [
    "Kennedy Loud Cannabis | 24 Hour Weed Dispensary Brampton",
    gbpLocation.seoTitle,
    "Kennedy Road Weed Dispensary | Open 24 Hours | Brampton",
    ...SEO_PAGES.map((page) => page.title),
  ];
  assert.ok(!existingTitles.includes(VISIT_GUIDE.title));
  assert.ok(!SEO_PAGES.some((page) => page.h1 === VISIT_GUIDE.h1));
  assert.notEqual(VISIT_GUIDE.title, gbpLocation.seoTitle);
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
  assert.ok(VISIT_FAQS.length >= 4);
  assert.ok(VISIT_FAQS.some((faq) => /dispensary near me/i.test(faq.q) || /dispensary near me/i.test(faq.a)));
  assert.deepEqual(
    VISIT_INTERNAL_LINKS.map((link) => link.href),
    [
      "/",
      "/weed-dispensary-brampton/",
      "/info/native-cigarettes-brampton",
      "/resources/local-guides/queen-street-to-hillcrest-brampton",
      "/resources/local-guides/zum-kennedy-dispensary",
      "/contact",
    ],
  );
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
  const publicCopy = [visitPage, homeClient, gbpPage].join("\n");
  assert.doesNotMatch(publicCopy, /Blouds|Magic Leaf|St\.? Clair|117 Queen|varies by store|fully licensed/i);
  assert.doesNotMatch(publicCopy, /corporate parent|sister store|fleet store/i);
  assert.doesNotMatch(visitPage, /buzzer code [0-9]|unit 105|best dispensary in Brampton/i);
});
