import assert from "node:assert/strict";
import test from "node:test";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { gbpLocation, NAP } from "../app/lib/gbp-location.ts";
import { HILLCREST_24H_ALIAS, VISIT_HUB_LINKS } from "../app/lib/sccParityHub.ts";

const cigPage = await readFile(
  new URL("../app/native-cigarettes-hillcrest-brampton/page.tsx", import.meta.url),
  "utf8",
);
const cigLib = await readFile(new URL("../app/lib/hillcrestNativeCigarettes.ts", import.meta.url), "utf8");
const vapePage = await readFile(
  new URL("../app/nicotine-vape-kennedy-brampton/page.tsx", import.meta.url),
  "utf8",
);
const vapeLib = await readFile(new URL("../app/lib/kennedyNicotineVape.ts", import.meta.url), "utf8");
const deliveryPage = await readFile(
  new URL("../app/cannabis-delivery-hillcrest-brampton/page.tsx", import.meta.url),
  "utf8",
);
const deliveryLib = await readFile(new URL("../app/lib/hillcrestDelivery.ts", import.meta.url), "utf8");
const openNowPage = await readFile(new URL("../app/24-hour-dispensary-brampton/page.tsx", import.meta.url), "utf8");
const openNowLib = await readFile(new URL("../app/lib/openNowFaq.ts", import.meta.url), "utf8");
const homeClient = await readFile(new URL("../app/HomePageClient.tsx", import.meta.url), "utf8");
const visitPage = await readFile(new URL("../app/visit/page.tsx", import.meta.url), "utf8");
const visitGuide = await readFile(new URL("../app/lib/visitGuide.ts", import.meta.url), "utf8");
const storePage = await readFile(new URL("../app/cannabis-store-brampton/page.tsx", import.meta.url), "utf8");
const storeGuide = await readFile(new URL("../app/lib/cannabisStoreGuide.ts", import.meta.url), "utf8");
const gbpPage = await readFile(new URL("../app/components/GBPLandingPage.tsx", import.meta.url), "utf8");
const footer = await readFile(new URL("../app/components/Footer.tsx", import.meta.url), "utf8");
const faqPage = await readFile(new URL("../app/faq/page.tsx", import.meta.url), "utf8");
const sitemap = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");
const hubModule = await readFile(new URL("../app/lib/sccParityHub.ts", import.meta.url), "utf8");
const nextConfig = await readFile(new URL("../next.config.ts", import.meta.url), "utf8");
const itemsCategory = await readFile(new URL("../app/items/[category]/page.tsx", import.meta.url), "utf8");

const CIG_PATH = "/native-cigarettes-hillcrest-brampton";
const CIG_TITLE = "Hillcrest Native Cigarettes | Kennedy Loud";
const CIG_H1 = "Hillcrest / Kennedy Native Cigarettes in Central Brampton";
const VAPE_PATH = "/nicotine-vape-kennedy-brampton";
const VAPE_TITLE = "Kennedy Nicotine Vape | Kennedy Loud";
const VAPE_H1 = "Kennedy / Hillcrest Nicotine Vape in Central Brampton";
const OPEN_NOW_TITLE = "24-Hour Hillcrest Dispensary FAQ | Open Now";
const OPEN_NOW_H1 = "24-Hour / Open-Now Hillcrest / Kennedy Dispensary FAQ";

const PUBLIC_COPY = [
  cigPage,
  cigLib,
  vapePage,
  vapeLib,
  deliveryPage,
  deliveryLib,
  openNowPage,
  openNowLib,
  homeClient,
  visitPage,
  visitGuide,
  storePage,
  storeGuide,
  gbpPage,
  footer,
  faqPage,
].join("\n");

test("Wave 3 Hillcrest native cigarettes LP has unique title, meta, H1, and path", () => {
  assert.match(cigLib, /path: "\/native-cigarettes-hillcrest-brampton"/);
  assert.match(cigLib, new RegExp(`title: "${CIG_TITLE.replace(/[|/]/g, "\\$&")}"`));
  assert.match(cigLib, new RegExp(`h1: "${CIG_H1.replace(/[()]/g, "\\$&")}"`));
  assert.ok(CIG_TITLE.length <= 60);
  assert.match(cigLib, /49 Hillcrest Ave Unit 104/);
  assert.match(cigLib, /\+1 \(289\) 206-1181/);
  assert.match(cigLib, /Adults 19\+/);
  assert.match(cigPage, /absolute: HILLCREST_NATIVE_CIGARETTES\.title/);
  assert.match(cigPage, /<h1 className=\{styles\.h1\}>\{HILLCREST_NATIVE_CIGARETTES\.h1\}<\/h1>/);
  assert.ok(existsSync(path.resolve(import.meta.dirname, "../app/native-cigarettes-hillcrest-brampton/page.tsx")));
  assert.notEqual(CIG_TITLE, gbpLocation.seoTitle);
  assert.notEqual(CIG_H1, gbpLocation.h1);
  assert.notEqual(CIG_TITLE, "Native Cigarettes Brampton | Kennedy Loud Cannabis");
});

test("Wave 3 Kennedy nicotine vape LP ships because Nic Vape is sold", () => {
  assert.match(vapeLib, /path: "\/nicotine-vape-kennedy-brampton"/);
  assert.match(vapeLib, new RegExp(`title: "${VAPE_TITLE.replace(/[|/]/g, "\\$&")}"`));
  assert.match(vapeLib, new RegExp(`h1: "${VAPE_H1.replace(/[()]/g, "\\$&")}"`));
  assert.ok(VAPE_TITLE.length <= 60);
  assert.match(vapeLib, /Nicotine is addictive/);
  assert.match(vapeLib, /Adults 19\+/);
  assert.match(vapeLib, /49 Hillcrest Ave Unit 104/);
  assert.match(vapePage, /absolute: KENNEDY_NICOTINE_VAPE\.title/);
  assert.match(vapePage, /<h1 className=\{styles\.h1\}>\{KENNEDY_NICOTINE_VAPE\.h1\}<\/h1>/);
  assert.match(vapeLib, /href: "\/items\/vapes"/);
  assert.match(vapeLib, /thcVapeHref: "\/items\/vape-disposables"/);
  assert.ok(existsSync(path.resolve(import.meta.dirname, "../app/nicotine-vape-kennedy-brampton/page.tsx")));
  assert.notEqual(VAPE_TITLE, CIG_TITLE);
  assert.notEqual(VAPE_H1, CIG_H1);
});

test("Wave 3 keeps locked NAP and does not invent 24h delivery", () => {
  assert.equal(NAP.storeName, "Kennedy Loud Cannabis");
  assert.equal(NAP.address, "49 Hillcrest Ave Unit 104, Brampton, ON L6W 1Y7");
  assert.equal(NAP.phone, "+1 (289) 206-1181");
  assert.equal(NAP.website, "https://kennedyloudcannabis.com/");
  assert.equal(NAP.hours, "Open 24 Hours");
  assert.match(cigPage, /NAP\.address/);
  assert.match(vapePage, /NAP\.address/);
  assert.match(openNowLib, /hours: NAP\.hours/);
  assert.doesNotMatch(cigLib, /delivery is 24/);
  assert.doesNotMatch(vapeLib, /delivery is 24/);
  assert.doesNotMatch(openNowLib, /delivery is listed as 24/);
  assert.match(openNowLib, /delivery is not listed as 24\/7/);
});

test("Wave 3 deepens B07 Hillcrest 24h H1/FAQ/links and keeps the alias", () => {
  assert.match(openNowLib, /path: "\/24-hour-dispensary-brampton"/);
  assert.match(openNowLib, new RegExp(`title: "${OPEN_NOW_TITLE.replace(/[|/]/g, "\\$&")}"`));
  assert.match(openNowLib, new RegExp(`h1: "${OPEN_NOW_H1.replace(/[()]/g, "\\$&")}"`));
  assert.match(openNowLib, /Hillcrest \/ Kennedy/);
  assert.match(openNowLib, /24 hour dispensary Brampton/);
  assert.match(openNowLib, /Is the 24-hour Hillcrest \/ Kennedy dispensary on Queen Street West/);
  assert.match(openNowLib, /Can I buy native cigarettes or nicotine vape at the 24-hour Hillcrest counter/);
  assert.match(openNowPage, /OPEN_NOW_FAQ\.hillcrestAlias/);
  assert.equal(HILLCREST_24H_ALIAS.source, "/24-hour-hillcrest-brampton-dispensary");
  assert.equal(HILLCREST_24H_ALIAS.destination, "/24-hour-dispensary-brampton");
  assert.match(
    nextConfig,
    /source: "\/24-hour-hillcrest-brampton-dispensary", destination: "\/24-hour-dispensary-brampton", permanent: true/,
  );
  assert.equal(
    existsSync(path.resolve(import.meta.dirname, "../app/24-hour-hillcrest-brampton-dispensary")),
    false,
  );
});

test("Wave 3 keeps delivery and densely links hubs plus sold categories", () => {
  assert.ok(existsSync(path.resolve(import.meta.dirname, "../app/cannabis-delivery-hillcrest-brampton/page.tsx")));
  assert.ok(VISIT_HUB_LINKS.some((link) => link.href === CIG_PATH));
  assert.ok(VISIT_HUB_LINKS.some((link) => link.href === VAPE_PATH));
  assert.ok(VISIT_HUB_LINKS.some((link) => link.href === "/24-hour-dispensary-brampton"));
  assert.ok(VISIT_HUB_LINKS.some((link) => link.href === "/cannabis-delivery-hillcrest-brampton"));
  assert.match(hubModule, /href: "\/native-cigarettes-hillcrest-brampton"/);
  assert.match(hubModule, /href: "\/nicotine-vape-kennedy-brampton"/);

  const requiredSurfaces = [homeClient, visitGuide, openNowLib, storeGuide, footer, faqPage];
  for (const surface of requiredSurfaces) {
    assert.match(surface, /\/native-cigarettes-hillcrest-brampton/);
    assert.match(surface, /\/nicotine-vape-kennedy-brampton/);
    assert.match(surface, /\/24-hour-dispensary-brampton/);
    assert.match(surface, /\/cannabis-delivery-hillcrest-brampton/);
  }

  assert.match(sitemap, /\$\{BASE\}\/native-cigarettes-hillcrest-brampton/);
  assert.match(sitemap, /\$\{BASE\}\/nicotine-vape-kennedy-brampton/);
  assert.match(sitemap, /\$\{BASE\}\/24-hour-dispensary-brampton/);
  assert.match(itemsCategory, /\/native-cigarettes-hillcrest-brampton/);
  assert.match(itemsCategory, /\/nicotine-vape-kennedy-brampton/);
  assert.match(gbpPage, /\/native-cigarettes-hillcrest-brampton/);
  assert.match(visitPage, /\/native-cigarettes-hillcrest-brampton/);
  assert.match(storePage, /\/native-cigarettes-hillcrest-brampton/);
});

test("Wave 3 stays Hillcrest/Kennedy only: no pouches/grabba LPs, sister, Ottawa, medical, or #1", () => {
  assert.doesNotMatch(PUBLIC_COPY, /Blouds|Magic Leaf|St\.? Clair|117 Queen|sister store|corporate parent|fleet store/i);
  assert.doesNotMatch(PUBLIC_COPY, /Ottawa|Gatineau|ByWard|Dalhousie/i);
  assert.doesNotMatch(PUBLIC_COPY, /nicotine-pouches-kennedy-brampton|grabba-hillcrest-brampton/);
  assert.equal(existsSync(path.resolve(import.meta.dirname, "../app/nicotine-pouches-kennedy-brampton")), false);
  assert.equal(existsSync(path.resolve(import.meta.dirname, "../app/grabba-hillcrest-brampton")), false);
  assert.doesNotMatch(cigPage, /#1|best dispensary|treats|cures|google reviews say/i);
  assert.doesNotMatch(vapePage, /#1|best dispensary|treats|cures|google reviews say/i);
  assert.doesNotMatch(openNowPage, /#1|best dispensary|treats|cures|google reviews say/i);
  assert.doesNotMatch(cigLib, /h1: ".*Queen Street West/);
  assert.doesNotMatch(vapeLib, /h1: ".*Queen Street West/);
  assert.doesNotMatch(openNowLib, /h1: ".*Queen Street West/);
  assert.doesNotMatch(cigPage, /GBP Website\s*=\s*\//i);
  assert.doesNotMatch(vapePage, /also visit our other|our other location/i);
});
