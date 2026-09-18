import assert from "node:assert/strict";
import test from "node:test";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { gbpLocation, NAP } from "../app/lib/gbp-location.ts";
import { VISIT_HUB_LINKS } from "../app/lib/sccParityHub.ts";

const deliveryPage = await readFile(
  new URL("../app/cannabis-delivery-hillcrest-brampton/page.tsx", import.meta.url),
  "utf8",
);
const deliveryLib = await readFile(new URL("../app/lib/hillcrestDelivery.ts", import.meta.url), "utf8");
const deliveryCatalog = await readFile(new URL("../app/delivery/DeliveryContent.tsx", import.meta.url), "utf8");
const homeClient = await readFile(new URL("../app/HomePageClient.tsx", import.meta.url), "utf8");
const visitPage = await readFile(new URL("../app/visit/page.tsx", import.meta.url), "utf8");
const visitGuide = await readFile(new URL("../app/lib/visitGuide.ts", import.meta.url), "utf8");
const openNowPage = await readFile(new URL("../app/24-hour-dispensary-brampton/page.tsx", import.meta.url), "utf8");
const openNowLib = await readFile(new URL("../app/lib/openNowFaq.ts", import.meta.url), "utf8");
const storePage = await readFile(new URL("../app/cannabis-store-brampton/page.tsx", import.meta.url), "utf8");
const storeGuide = await readFile(new URL("../app/lib/cannabisStoreGuide.ts", import.meta.url), "utf8");
const gbpPage = await readFile(new URL("../app/components/GBPLandingPage.tsx", import.meta.url), "utf8");
const footer = await readFile(new URL("../app/components/Footer.tsx", import.meta.url), "utf8");
const faqPage = await readFile(new URL("../app/faq/page.tsx", import.meta.url), "utf8");
const sitemap = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");
const hubModule = await readFile(new URL("../app/lib/sccParityHub.ts", import.meta.url), "utf8");
const kennedy = await readFile(new URL("../app/weed-dispensary-brampton-kennedy/page.tsx", import.meta.url), "utf8");

const PATH = "/cannabis-delivery-hillcrest-brampton";
const TITLE = "Hillcrest / Kennedy Cannabis Delivery | Kennedy Loud";
const H1 = "Hillcrest / Kennedy Cannabis Delivery in Central Brampton";

const PUBLIC_COPY = [
  deliveryPage,
  deliveryLib,
  deliveryCatalog,
  homeClient,
  visitPage,
  visitGuide,
  openNowPage,
  openNowLib,
  storePage,
  storeGuide,
  gbpPage,
  footer,
  faqPage,
  kennedy,
].join("\n");

test("Wave 2 Hillcrest delivery LP has unique title, meta, H1, and path", () => {
  assert.match(deliveryLib, /path: "\/cannabis-delivery-hillcrest-brampton"/);
  assert.match(deliveryLib, new RegExp(`title: "${TITLE.replace(/[|/]/g, "\\$&")}"`));
  assert.match(deliveryLib, new RegExp(`h1: "${H1.replace(/[()]/g, "\\$&")}"`));
  assert.ok(TITLE.length <= 60);
  assert.match(deliveryLib, /49 Hillcrest Ave Unit 104/);
  assert.match(deliveryLib, /not 24\/7/);
  assert.match(deliveryLib, /\+1 \(289\) 206-1181/);
  assert.match(deliveryPage, /absolute: HILLCREST_DELIVERY\.title/);
  assert.match(deliveryPage, /<h1 className=\{styles\.h1\}>\{HILLCREST_DELIVERY\.h1\}<\/h1>/);
  assert.match(deliveryPage, /canonical: HILLCREST_DELIVERY\.canonical/);
  assert.ok(existsSync(path.resolve(import.meta.dirname, "../app/cannabis-delivery-hillcrest-brampton/page.tsx")));

  assert.notEqual(TITLE, gbpLocation.seoTitle);
  assert.notEqual(H1, gbpLocation.h1);
  assert.notEqual(TITLE, "How to Find Kennedy Loud at 49 Hillcrest Ave Unit 104");
  assert.notEqual(TITLE, "24-Hour Dispensary Brampton FAQ | Open Now");
  assert.notEqual(TITLE, "Cannabis Store Brampton | Kennedy / Queen / Main");
});

test("Wave 2 keeps locked NAP and homepage website", () => {
  assert.equal(NAP.storeName, "Kennedy Loud Cannabis");
  assert.equal(NAP.address, "49 Hillcrest Ave Unit 104, Brampton, ON L6W 1Y7");
  assert.equal(NAP.phone, "+1 (289) 206-1181");
  assert.equal(NAP.website, "https://kennedyloudcannabis.com/");
  assert.match(deliveryPage, /NAP\.address/);
  assert.match(deliveryPage, /NAP\.website/);
  assert.match(deliveryPage, /NAP\.phone/);
  assert.match(deliveryLib, /49 Hillcrest Ave Unit 104/);
  assert.match(deliveryLib, /NAP\.address/);
});

test("delivery hours stay separate from 24h walk-in and match site truth", () => {
  assert.match(deliveryLib, /walkInHours: NAP\.hours/);
  assert.match(deliveryLib, /not listed as 24\/7/);
  assert.match(deliveryLib, /dispatcher/);
  assert.match(deliveryPage, /Delivery hours vs 24-hour walk-in/);
  assert.match(deliveryPage, /How to order/);
  assert.match(deliveryPage, /Hillcrest \/ Kennedy delivery area/);
  assert.match(deliveryPage, /HILLCREST_DELIVERY\.minimum/);
  assert.match(deliveryPage, /liveOrderHref/);
  assert.doesNotMatch(deliveryLib, /delivery is 24/);
  assert.doesNotMatch(deliveryPage, /delivery is Open 24 Hours/i);
  assert.match(openNowPage, /Open 24 Hours describes the door, not cannabis delivery/);
});

test("FAQPage schema, how-to-order CTA, and Hillcrest / Kennedy voice", () => {
  assert.match(deliveryPage, /"@type": "FAQPage"/);
  assert.match(deliveryLib, /Does Kennedy Loud deliver cannabis around Hillcrest \/ Kennedy/);
  assert.match(deliveryLib, /Queen Street West downtown is a different licensed door/);
  assert.match(deliveryLib, /Hillcrest \/ Kennedy Cannabis Delivery in Central Brampton/);
  assert.doesNotMatch(deliveryLib, /title: ".*Queen Street West/);
  assert.doesNotMatch(deliveryLib, /h1: ".*Queen Street West/);
});

test("dense graph links homepage, visit, B07, B13, weed, delivery LP, catalog, and tiers", () => {
  assert.match(hubModule, /href: "\/cannabis-delivery-hillcrest-brampton"/);
  assert.ok(VISIT_HUB_LINKS.some((link) => link.href === PATH));

  const requiredSurfaces = [homeClient, visitGuide, openNowLib, storeGuide, footer, faqPage];
  for (const surface of requiredSurfaces) {
    assert.match(surface, /\/cannabis-delivery-hillcrest-brampton/);
  }

  assert.match(homeClient, /href: "\/cannabis-delivery-hillcrest-brampton"/);
  assert.match(homeClient, /href="\/cannabis-delivery-hillcrest-brampton"/);
  assert.match(visitPage, /href="\/cannabis-delivery-hillcrest-brampton"/);
  assert.match(openNowPage, /href="\/cannabis-delivery-hillcrest-brampton"/);
  assert.match(storePage, /href="\/cannabis-delivery-hillcrest-brampton"/);
  assert.match(gbpPage, /href="\/cannabis-delivery-hillcrest-brampton"/);
  assert.match(deliveryCatalog, /href="\/cannabis-delivery-hillcrest-brampton"/);
  assert.match(sitemap, /\$\{BASE\}\/cannabis-delivery-hillcrest-brampton/);
  assert.match(deliveryLib, /href: "\/"/);
  assert.match(deliveryLib, /href: "\/visit"/);
  assert.match(deliveryLib, /href: "\/24-hour-dispensary-brampton"/);
  assert.match(deliveryLib, /href: "\/cannabis-store-brampton"/);
  assert.match(deliveryLib, /href: "\/weed-dispensary-brampton\/"/);
  assert.match(deliveryLib, /href: "\/delivery"/);
  assert.match(deliveryLib, /href: "\/exotic-weed"/);
  assert.match(deliveryLib, /href: "\/premium-weed"/);
  assert.match(deliveryLib, /href: "\/aaa-weed"/);
  assert.match(deliveryLib, /href: "\/aa-weed"/);
  assert.match(deliveryLib, /href: "\/budget-weed"/);
});

test("Wave 2 does not add smoke LPs, sister framing, Ottawa copy, or GBP edits", () => {
  assert.doesNotMatch(PUBLIC_COPY, /Blouds|Magic Leaf|St\.? Clair|117 Queen|sister store|corporate parent|fleet store/i);
  assert.doesNotMatch(PUBLIC_COPY, /Ottawa|Gatineau|ByWard|Dalhousie/i);
  assert.doesNotMatch(PUBLIC_COPY, /native-cigarettes-hillcrest-brampton|nicotine-pouches-kennedy-brampton|grabba-hillcrest-brampton/);
  assert.doesNotMatch(deliveryPage, /GBP Website\s*=\s*\//i);
  assert.doesNotMatch(deliveryPage, /also visit our other|our other location/i);
  assert.doesNotMatch(faqPage, /Delivery information is being prepared/);
});
