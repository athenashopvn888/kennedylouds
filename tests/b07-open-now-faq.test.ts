import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { gbpLocation, NAP } from "../app/lib/gbp-location.ts";
import { SEO_PAGES } from "../app/lib/seoPages.ts";

const openNowPage = await readFile(new URL("../app/24-hour-dispensary-brampton/page.tsx", import.meta.url), "utf8");
const openNowLib = await readFile(new URL("../app/lib/openNowFaq.ts", import.meta.url), "utf8");
const visitPage = await readFile(new URL("../app/visit/page.tsx", import.meta.url), "utf8");
const visitGuide = await readFile(new URL("../app/lib/visitGuide.ts", import.meta.url), "utf8");
const homepage = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const homeClient = await readFile(new URL("../app/HomePageClient.tsx", import.meta.url), "utf8");
const landing = await readFile(new URL("../app/weed-dispensary-brampton/page.tsx", import.meta.url), "utf8");
const gbpPage = await readFile(new URL("../app/components/GBPLandingPage.tsx", import.meta.url), "utf8");
const footer = await readFile(new URL("../app/components/Footer.tsx", import.meta.url), "utf8");
const sitemap = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");
const faqPage = await readFile(new URL("../app/faq/page.tsx", import.meta.url), "utf8");

const TITLE = "24-Hour Hillcrest Dispensary FAQ | Open Now";
const H1 = "24-Hour / Open-Now Hillcrest / Kennedy Dispensary FAQ";
const VISIT_TITLE = "How to Find Kennedy Loud at 49 Hillcrest Ave Unit 104";
const VISIT_H1 = "How to Find Kennedy Loud at 49 Hillcrest Ave Unit 104 (Central Brampton Walk-In)";

test("B07 open-now FAQ has unique title, meta, and H1 for 24h Brampton queries", () => {
  assert.match(openNowLib, /path: "\/24-hour-dispensary-brampton"/);
  assert.match(openNowLib, new RegExp(`title: "${TITLE.replace(/[|]/g, "\\|")}"`));
  assert.match(openNowLib, new RegExp(`h1: "${H1.replace(/[()]/g, "\\$&")}"`));
  assert.match(openNowLib, /24 hour dispensary Brampton/i);
  assert.match(openNowLib, /49 Hillcrest Ave Unit 104/);
  assert.match(openNowLib, /Open 24 Hours/);
  assert.match(openNowLib, /\+1 \(289\) 206-1181/);
  assert.match(openNowPage, /absolute: OPEN_NOW_FAQ\.title/);
  assert.match(openNowPage, /<h1 className=\{styles\.h1\}>\{OPEN_NOW_FAQ\.h1\}<\/h1>/);
  assert.ok(TITLE.length <= 60);

  const existingTitles = [
    "Kennedy Loud Cannabis | 24 Hour Weed Dispensary Brampton",
    gbpLocation.seoTitle,
    "Kennedy Road Weed Dispensary | Open 24 Hours | Brampton",
    VISIT_TITLE,
    ...SEO_PAGES.map((page) => page.title),
  ];
  assert.ok(!existingTitles.includes(TITLE));
  assert.ok(!SEO_PAGES.some((page) => page.h1 === H1));
  assert.notEqual(H1, gbpLocation.h1);
  assert.notEqual(H1, VISIT_H1);
});

test("B07 keeps GBP-true NAP, 24h hours, and homepage website lock", () => {
  assert.match(openNowPage, /NAP\.address/);
  assert.match(openNowPage, /NAP\.hours/);
  assert.match(openNowPage, /NAP\.website/);
  assert.match(openNowPage, /NAP\.phone/);
  assert.equal(NAP.storeName, "Kennedy Loud Cannabis");
  assert.equal(NAP.address, "49 Hillcrest Ave Unit 104, Brampton, ON L6W 1Y7");
  assert.equal(NAP.phone, "+1 (289) 206-1181");
  assert.equal(NAP.website, "https://kennedyloudcannabis.com/");
  assert.equal(NAP.hours, "Open 24 Hours");
  assert.match(openNowPage, /does not replace the homepage as the Google Business Profile website/);
  assert.doesNotMatch(openNowPage, /star rating|5-star|google reviews say|rated #1/i);
  assert.doesNotMatch(openNowLib, /rename|new GBP name|Kennedy Loud Cannabis Brampton 24/i);
});

test("B07 includes required H2s, FAQ table, hours schema, and live internal links", () => {
  assert.match(openNowPage, /GBP hours truth/);
  assert.match(openNowPage, /When “open now” applies/);
  assert.match(openNowPage, /Hillcrest Unit 104 late arrival/);
  assert.match(openNowPage, />FAQ table</);
  assert.match(openNowPage, /CTA to homepage map/);
  assert.match(openNowPage, /"@type": "FAQPage"/);
  assert.match(openNowPage, /"@type": "OpeningHoursSpecification"/);
  assert.match(openNowPage, /opens: "00:00"/);
  assert.match(openNowPage, /closes: "23:59"/);
  assert.match(openNowPage, /<table className=\{styles\.faqTable\}>/);
  assert.match(openNowLib, /Is there a 24 hour dispensary in Brampton\?/);
  assert.match(openNowLib, /dispensary Brampton open/);
  assert.match(openNowLib, /24 hour dispensary near me/);
  assert.match(openNowLib, /24 hour dispensary open near me/);
  assert.match(openNowLib, /cannabis store near me open now/);
  assert.match(openNowLib, /href: "\/"/);
  assert.match(openNowLib, /href: "\/weed-dispensary-brampton\/"/);
  assert.match(openNowLib, /href: "\/visit"/);
  assert.match(openNowPage, /href="\/visit"/);
  assert.match(openNowPage, /href="\/weed-dispensary-brampton\/"/);
  assert.match(openNowPage, /href="\/#contact"/);
});

test("homepage, visit guide, landing, footer, and sitemap link to the B07 FAQ", () => {
  assert.match(homeClient, /href: "\/24-hour-dispensary-brampton"/);
  assert.match(homeClient, /href="\/24-hour-dispensary-brampton"/);
  assert.match(gbpPage, /href="\/24-hour-dispensary-brampton"/);
  assert.match(footer, /href="\/24-hour-dispensary-brampton"/);
  assert.match(sitemap, /\$\{BASE\}\/24-hour-dispensary-brampton/);
  assert.match(visitPage, /href="\/24-hour-dispensary-brampton"/);
  assert.match(visitGuide, /href: "\/24-hour-dispensary-brampton"/);
  assert.match(faqPage, /href="\/24-hour-dispensary-brampton"/);
  assert.equal(gbpLocation.localGuides[0]?.href, "/visit");
  assert.equal(gbpLocation.localGuides[1]?.href, "/24-hour-dispensary-brampton");
  assert.match(landing, /GBPLandingPage/);
  assert.match(homepage, /absolute: TITLE/);
});

test("B07 copy stays standalone and does not invent reviews, hours, or sister stores", () => {
  const publicCopy = [openNowPage, openNowLib, homeClient, gbpPage, visitPage, faqPage].join("\n");
  assert.doesNotMatch(publicCopy, /Blouds|Magic Leaf|St\.? Clair|117 Queen|varies by store|fully licensed/i);
  assert.doesNotMatch(publicCopy, /corporate parent|sister store|fleet store/i);
  assert.doesNotMatch(openNowPage, /buzzer code [0-9]|unit 105|best dispensary in Brampton/i);
  assert.doesNotMatch(openNowPage, /GBP Website\s*=\s*\/weed-dispensary/i);
});
