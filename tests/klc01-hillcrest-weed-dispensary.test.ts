import assert from "node:assert/strict";
import test from "node:test";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { gbpLocation, NAP } from "../app/lib/gbp-location.ts";
import { VISIT_HUB_LINKS, TIER_HUB_LINKS } from "../app/lib/sccParityHub.ts";

const weedLib = await readFile(new URL("../app/lib/hillcrestWeedDispensary.ts", import.meta.url), "utf8");
const gbpPage = await readFile(new URL("../app/components/GBPLandingPage.tsx", import.meta.url), "utf8");
const landing = await readFile(new URL("../app/weed-dispensary-brampton/page.tsx", import.meta.url), "utf8");
const gbpLocationSource = await readFile(new URL("../app/lib/gbp-location.ts", import.meta.url), "utf8");
const homeClient = await readFile(new URL("../app/HomePageClient.tsx", import.meta.url), "utf8");
const visitPage = await readFile(new URL("../app/visit/page.tsx", import.meta.url), "utf8");
const visitGuide = await readFile(new URL("../app/lib/visitGuide.ts", import.meta.url), "utf8");
const openNowPage = await readFile(new URL("../app/24-hour-dispensary-brampton/page.tsx", import.meta.url), "utf8");
const openNowLib = await readFile(new URL("../app/lib/openNowFaq.ts", import.meta.url), "utf8");
const storePage = await readFile(new URL("../app/cannabis-store-brampton/page.tsx", import.meta.url), "utf8");
const storeGuide = await readFile(new URL("../app/lib/cannabisStoreGuide.ts", import.meta.url), "utf8");
const deliveryPage = await readFile(
  new URL("../app/cannabis-delivery-hillcrest-brampton/page.tsx", import.meta.url),
  "utf8",
);
const deliveryLib = await readFile(new URL("../app/lib/hillcrestDelivery.ts", import.meta.url), "utf8");
const cigLib = await readFile(new URL("../app/lib/hillcrestNativeCigarettes.ts", import.meta.url), "utf8");
const vapeLib = await readFile(new URL("../app/lib/kennedyNicotineVape.ts", import.meta.url), "utf8");
const footer = await readFile(new URL("../app/components/Footer.tsx", import.meta.url), "utf8");
const faqPage = await readFile(new URL("../app/faq/page.tsx", import.meta.url), "utf8");
const sitemap = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");
const hubModule = await readFile(new URL("../app/lib/sccParityHub.ts", import.meta.url), "utf8");
const prebuild = await readFile(new URL("../scripts/prebuild-stock.js", import.meta.url), "utf8");
const tierSeo = await readFile(new URL("../app/lib/tierSeoContent.ts", import.meta.url), "utf8");

const PATH = "/weed-dispensary-brampton/";
const TITLE = "Hillcrest / Kennedy / Unit 104 Weed Dispensary";
const H1 = "Hillcrest / Kennedy / Unit 104 Weed Dispensary in Central Brampton";

const PUBLIC_COPY = [weedLib, gbpPage, landing, gbpLocationSource, homeClient].join("\n");

function faqQuestions(source: string): string[] {
  return [...source.matchAll(/q: "([^"]+)"/g)].map((match) => match[1]);
}

const OTHER_FAQ_QUESTIONS = [
  visitGuide,
  openNowLib,
  storeGuide,
  deliveryLib,
  cigLib,
  vapeLib,
  tierSeo,
].flatMap(faqQuestions);

test("5th pillar keeps the live Hillcrest weed-dispensary Brampton path", () => {
  assert.match(weedLib, /path: "\/weed-dispensary-brampton\/"/);
  assert.equal(gbpLocation.slug, "weed-dispensary-brampton");
  assert.match(landing, /GBPLandingPage/);
  assert.match(landing, /absolute: gbpLocation\.seoTitle/);
  assert.ok(existsSync(path.resolve(import.meta.dirname, "../app/weed-dispensary-brampton/page.tsx")));
  assert.match(sitemap, /\$\{BASE\}\/weed-dispensary-brampton\//);
});

test("5th pillar H1 and title own Hillcrest / Kennedy / Unit 104, never Queen St W downtown", () => {
  assert.equal(gbpLocation.seoTitle, TITLE);
  assert.equal(gbpLocation.h1, H1);
  assert.match(weedLib, /title: gbpLocation\.seoTitle/);
  assert.match(weedLib, /h1: gbpLocation\.h1/);
  assert.ok(TITLE.length <= 60);
  assert.match(TITLE, /Hillcrest \/ Kennedy/);
  assert.match(TITLE, /Unit 104/);
  assert.match(H1, /Hillcrest \/ Kennedy/);
  assert.match(H1, /Unit 104/);
  assert.match(gbpPage, /<h1 className=\{styles\.h1\}>\{HILLCREST_WEED_DISPENSARY\.h1\}<\/h1>/);
  assert.doesNotMatch(TITLE, /Queen Street West/);
  assert.doesNotMatch(H1, /Queen Street West/);
  assert.doesNotMatch(gbpLocation.seoTitle, /Queen Street West/);
  assert.doesNotMatch(gbpLocation.h1, /Queen Street West/);
  assert.notEqual(TITLE, "How to Find Kennedy Loud at 49 Hillcrest Ave Unit 104");
  assert.notEqual(TITLE, "24-Hour Hillcrest Dispensary FAQ | Open Now");
  assert.notEqual(TITLE, "Cannabis Store Brampton | Kennedy / Queen / Main");
  assert.notEqual(TITLE, "Hillcrest / Kennedy Cannabis Delivery | Kennedy Loud");
  assert.notEqual(TITLE, "Hillcrest Native Cigarettes | Kennedy Loud");
  assert.notEqual(TITLE, "Kennedy Nicotine Vape | Kennedy Loud");
});

test("5th pillar ships unique FAQ copy plus FAQPage schema", () => {
  assert.match(gbpPage, /"@type": "FAQPage"/);
  assert.match(gbpPage, /HILLCREST_WEED_DISPENSARY_FAQS/);
  assert.match(gbpPage, /FAQ: Hillcrest \/ Kennedy \/ Unit 104 weed dispensary/);
  assert.match(weedLib, /HILLCREST_WEED_DISPENSARY_FAQS/);
  const questions = faqQuestions(weedLib);
  const answers = [...weedLib.matchAll(/a: [`"]([^`"]+)/g)].map((match) => match[1]);
  assert.equal(questions.length, 8);
  assert.equal(new Set(questions).size, 8);
  assert.equal(new Set(answers).size, 8);
  assert.match(weedLib, /Hillcrest \/ Kennedy \/ Unit 104/);
  assert.match(weedLib, /49 Hillcrest Ave Unit 104/);
  assert.match(weedLib, /Queen Street West downtown is a different licensed door/);
  assert.match(weedLib, /Is Kennedy Loud the neighbourhood weed dispensary for Hillcrest \/ Kennedy \/ Unit 104\?/);
  assert.match(weedLib, /Is the Hillcrest \/ Kennedy \/ Unit 104 weed dispensary on Queen Street West downtown\?/);
  for (const question of questions) {
    assert.ok(!OTHER_FAQ_QUESTIONS.includes(question), `duplicate FAQ: ${question}`);
  }
});

test("5th pillar hub card and links cover visit, 24h, delivery, cig, nic, B13, and tiers", () => {
  assert.ok(VISIT_HUB_LINKS.some((link) => link.href === PATH));
  assert.match(hubModule, /href: "\/weed-dispensary-brampton\/"/);
  assert.match(homeClient, /href: "\/weed-dispensary-brampton\/"/);
  assert.match(homeClient, /title: "Hillcrest \/ Kennedy \/ Unit 104 weed dispensary"/);
  assert.match(homeClient, /href="\/weed-dispensary-brampton\/"/);
  assert.match(gbpPage, /HILLCREST_WEED_DISPENSARY_INTERNAL_LINKS/);

  const required = [
    "/visit",
    "/24-hour-dispensary-brampton",
    "/cannabis-delivery-hillcrest-brampton",
    "/native-cigarettes-hillcrest-brampton",
    "/nicotine-vape-kennedy-brampton",
    "/cannabis-store-brampton",
    ...TIER_HUB_LINKS.map((link) => link.href),
  ];
  for (const href of required) {
    assert.match(weedLib, new RegExp(`href: "${href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`));
    assert.match(gbpPage, new RegExp(href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  const inbound = [
    homeClient,
    visitGuide,
    openNowLib,
    storeGuide,
    footer,
    faqPage,
    visitPage,
    openNowPage,
    storePage,
    deliveryPage,
    cigLib,
    vapeLib,
  ];
  for (const surface of inbound) {
    assert.match(surface, /\/weed-dispensary-brampton\//);
  }
});

test("5th pillar keeps locked NAP and no sister framing", () => {
  assert.equal(NAP.storeName, "Kennedy Loud Cannabis");
  assert.equal(NAP.address, "49 Hillcrest Ave Unit 104, Brampton, ON L6W 1Y7");
  assert.equal(NAP.phone, "+1 (289) 206-1181");
  assert.equal(NAP.website, "https://kennedyloudcannabis.com/");
  assert.equal(NAP.hours, "Open 24 Hours");
  assert.match(gbpPage, /gbpLocation\.address/);
  assert.match(gbpPage, /gbpLocation\.phone/);
  assert.match(gbpPage, /gbpLocation\.websiteUrl/);
  assert.match(gbpPage, /HILLCREST_WEED_DISPENSARY\.napDisplay/);
  assert.match(weedLib, /49 Hillcrest Ave Unit 104, Brampton, ON L6W 1Y7/);
  assert.match(weedLib, /\+1 \(289\) 206-1181/);
  assert.match(weedLib, /https:\/\/kennedyloudcannabis\.com\//);
  assert.doesNotMatch(PUBLIC_COPY, /Blouds|Magic Leaf|St\.? Clair|117 Queen|sister store|corporate parent|fleet store/i);
  assert.doesNotMatch(PUBLIC_COPY, /Ottawa|Gatineau|ByWard|Dalhousie/i);
  assert.doesNotMatch(gbpPage, /also visit our other|our other location/i);
  assert.doesNotMatch(gbpPage, /GBP Website\s*=\s*\//i);
});

test("5th pillar stays out of the menu swimlane (no menu JSON, prebuild, or adcInventory)", () => {
  const menuPattern = /flowers\.json|items\.json|adcInventory|APPS_SCRIPT_URL|prebuild-stock|delivery-menu\.json/;
  assert.doesNotMatch(weedLib, menuPattern);
  assert.doesNotMatch(gbpPage, menuPattern);
  assert.doesNotMatch(landing, menuPattern);
  assert.doesNotMatch(weedLib, /from "\.\/products"|from "\.\.\/lib\/products"/);
  assert.doesNotMatch(prebuild, /hillcrestWeedDispensary/);
});
