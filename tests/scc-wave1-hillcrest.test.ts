import assert from "node:assert/strict";
import test from "node:test";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { gbpLocation, NAP } from "../app/lib/gbp-location.ts";
import { TIER_SEO } from "../app/lib/tierSeoContent.ts";
import {
  HILLCREST_24H_ALIAS,
  PARITY_HUB_LINKS,
  SHORT_TIER_ALIASES,
  TIER_HUB_LINKS,
  VISIT_HUB_LINKS,
} from "../app/lib/sccParityHub.ts";

const homeClient = await readFile(new URL("../app/HomePageClient.tsx", import.meta.url), "utf8");
const visitPage = await readFile(new URL("../app/visit/page.tsx", import.meta.url), "utf8");
const visitGuide = await readFile(new URL("../app/lib/visitGuide.ts", import.meta.url), "utf8");
const openNowPage = await readFile(new URL("../app/24-hour-dispensary-brampton/page.tsx", import.meta.url), "utf8");
const openNowLib = await readFile(new URL("../app/lib/openNowFaq.ts", import.meta.url), "utf8");
const storePage = await readFile(new URL("../app/cannabis-store-brampton/page.tsx", import.meta.url), "utf8");
const storeGuide = await readFile(new URL("../app/lib/cannabisStoreGuide.ts", import.meta.url), "utf8");
const gbpPage = await readFile(new URL("../app/components/GBPLandingPage.tsx", import.meta.url), "utf8");
const tierPage = await readFile(new URL("../app/[tier]/page.tsx", import.meta.url), "utf8");
const nextConfig = await readFile(new URL("../next.config.ts", import.meta.url), "utf8");
const footer = await readFile(new URL("../app/components/Footer.tsx", import.meta.url), "utf8");
const faqPage = await readFile(new URL("../app/faq/page.tsx", import.meta.url), "utf8");
const kennedy = await readFile(new URL("../app/weed-dispensary-brampton-kennedy/page.tsx", import.meta.url), "utf8");
const hubModule = await readFile(new URL("../app/lib/sccParityHub.ts", import.meta.url), "utf8");
const hubNav = await readFile(new URL("../app/components/ParityHubNav.tsx", import.meta.url), "utf8");

const GRAPH_SURFACES = [
  homeClient,
  visitPage,
  visitGuide,
  openNowPage,
  openNowLib,
  storePage,
  storeGuide,
  gbpPage,
  tierPage,
  footer,
  faqPage,
];

const PUBLIC_COPY = GRAPH_SURFACES.join("\n") + "\n" + kennedy;

test("locked NAP stays Hillcrest Unit 104", () => {
  assert.equal(NAP.storeName, "Kennedy Loud Cannabis");
  assert.equal(NAP.address, "49 Hillcrest Ave Unit 104, Brampton, ON L6W 1Y7");
  assert.equal(NAP.phone, "+1 (289) 206-1181");
  assert.equal(NAP.website, "https://kennedyloudcannabis.com/");
  assert.equal(NAP.hours, "Open 24 Hours");
});

test("weed LP H1 and title own Hillcrest / Kennedy / central, not Queen St W downtown", () => {
  assert.match(gbpLocation.seoTitle, /Hillcrest \/ Kennedy/);
  assert.match(gbpLocation.h1, /Hillcrest \/ Kennedy/);
  assert.match(gbpLocation.h1, /Central Brampton/);
  assert.ok(gbpLocation.seoTitle.length <= 60);
  assert.match(gbpLocation.introVariant, /not a Queen Street West downtown door/);
  assert.match(gbpLocation.streetAddress, /49 Hillcrest Ave Unit 104/);
  assert.doesNotMatch(gbpLocation.seoTitle, /Queen Street West/);
  assert.doesNotMatch(gbpLocation.h1, /Queen Street West/);
  assert.equal(gbpLocation.slug, "weed-dispensary-brampton");
});

test("dense linking graph covers homepage, visit, B07, B13, weed LP, and five tiers", () => {
  const required = [
    ...VISIT_HUB_LINKS.map((link) => link.href),
    ...TIER_HUB_LINKS.map((link) => link.href),
  ];
  assert.equal(PARITY_HUB_LINKS.length, required.length);

  for (const href of required) {
    assert.match(hubModule, new RegExp(`href: "${href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`));
  }
  assert.match(hubNav, /VISIT_HUB_LINKS/);
  assert.match(hubNav, /TIER_HUB_LINKS/);

  const outboundSurfaces = [homeClient, visitGuide, openNowLib, storeGuide, footer, faqPage];
  for (const href of required.filter((item) => item !== "/")) {
    const pattern = new RegExp(href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    for (const surface of outboundSurfaces) {
      assert.match(surface, pattern, `missing ${href}`);
    }
  }

  assert.match(homeClient, /href="\/24-hour-dispensary-brampton"/);
  assert.match(visitPage, /ParityHubNav/);
  assert.match(openNowPage, /ParityHubNav/);
  assert.match(storePage, /ParityHubNav/);
  assert.match(gbpPage, /ParityHubNav/);
  assert.match(tierPage, /ParityHubNav/);
});

test("five live *-weed tiers keep unique Hillcrest-voice FAQs; short aliases stay 301", () => {
  const keys = ["EXOTIC", "PREMIUM", "AAA+", "AA", "BUDGET"];
  const questions = keys.flatMap((key) => TIER_SEO[key].faqs.map((faq) => faq.q));
  const answers = keys.flatMap((key) => TIER_SEO[key].faqs.map((faq) => faq.a));
  assert.equal(new Set(questions).size, 15);
  assert.equal(new Set(answers).size, 15);

  for (const key of keys) {
    const text = TIER_SEO[key].faqs.map((faq) => `${faq.q} ${faq.a}`).join(" ");
    assert.match(text, /Hillcrest|Kennedy|Unit 104|central Brampton/);
  }

  for (const alias of SHORT_TIER_ALIASES) {
    assert.match(
      nextConfig,
      new RegExp(`source: "${alias.source}", destination: "${alias.destination}", permanent: true`),
    );
  }
});

test("optional Hillcrest 24h alias is a 301 into B07, not a duplicate page", () => {
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

test("Wave 1 does not add smoke SEO LPs, Ottawa copy, sister framing, or GBP Name edits", () => {
  assert.doesNotMatch(PUBLIC_COPY, /Blouds|Magic Leaf|St\.? Clair|117 Queen|sister store|corporate parent|fleet store/i);
  assert.doesNotMatch(PUBLIC_COPY, /Ottawa|Gatineau|ByWard|Dalhousie/i);
  assert.doesNotMatch(PUBLIC_COPY, /native-cigarettes-hillcrest-brampton|nicotine-pouches-kennedy-brampton|grabba-hillcrest-brampton/);
  assert.doesNotMatch(PUBLIC_COPY, /GBP Website\s*=\s*\/weed-dispensary/i);
  assert.doesNotMatch(storePage, /also visit our other|our other location/i);
});
