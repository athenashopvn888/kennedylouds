import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { categoryLinks, gbpLocation, NAP } from "../app/lib/gbp-location.ts";
import { SEO_PAGES } from "../app/lib/seoPages.ts";

const homepage = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const homeClient = await readFile(new URL("../app/HomePageClient.tsx", import.meta.url), "utf8");
const landing = await readFile(new URL("../app/weed-dispensary-brampton/page.tsx", import.meta.url), "utf8");
const kennedy = await readFile(new URL("../app/weed-dispensary-brampton-kennedy/page.tsx", import.meta.url), "utf8");
const gbpPage = await readFile(new URL("../app/components/GBPLandingPage.tsx", import.meta.url), "utf8");
const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
const footer = await readFile(new URL("../app/components/Footer.tsx", import.meta.url), "utf8");
const products = await readFile(new URL("../app/lib/products.ts", import.meta.url), "utf8");
const seoPagesSource = await readFile(new URL("../app/lib/seoPages.ts", import.meta.url), "utf8");
const guidesSource = await readFile(new URL("../app/lib/routeGuides.generated.json", import.meta.url), "utf8");
const seoContentSource = await readFile(new URL("../app/lib/seoContent.generated.json", import.meta.url), "utf8");

test("canonical NAP is consistent on homepage, landing, footer and schema", () => {
  assert.equal(NAP.storeName, "Kennedy Loud Cannabis");
  assert.equal(NAP.address, "49 Hillcrest Ave Unit 104, Brampton, ON L6W 1Y7");
  assert.equal(NAP.phone, "+1 (289) 206-1181");
  assert.equal(NAP.phoneIntl, "+12892061181");
  assert.equal(NAP.website, "https://kennedyloudcannabis.com/");
  assert.equal(NAP.hours, "Open 24 Hours");
  assert.equal(gbpLocation.address, NAP.address);
  assert.equal(gbpLocation.websiteUrl, NAP.website);
  assert.deepEqual(gbpLocation.hours, ["Open 24 Hours"]);
  assert.match(homepage, /absolute: TITLE/);
  assert.match(homepage, /24 Hour Weed Dispensary Brampton/);
  assert.match(homeClient, /24 Hour Weed Dispensary in Brampton/);
  assert.match(homeClient, /NAP\.address/);
  assert.match(homeClient, /NAP\.phone/);
  assert.match(homeClient, /NAP\.website/);
  assert.match(homeClient, /name: "THC Vape", slug: "items\/vape-disposables"/);
  assert.match(homeClient, /name: "Nic Vape", slug: "items\/vapes"/);
  assert.match(footer, /https:\/\/kennedyloudcannabis\.com\//);
  assert.match(footer, /\+1 \(289\) 206-1181/);
  assert.match(footer, /Open 24 Hours/);
  assert.match(layout, /streetAddress: "49 Hillcrest Ave Unit 104"/);
  assert.match(layout, /url: "https:\/\/kennedyloudcannabis\.com\/"/);
});

test("homepage and Brampton landing titles are unique, CTR-oriented and absolute", () => {
  assert.match(homepage, /Kennedy Loud Cannabis \| 24 Hour Weed Dispensary Brampton/);
  assert.equal(gbpLocation.seoTitle, "Weed Dispensary Brampton | Open 24 Hours | Kennedy Loud");
  assert.match(landing, /absolute: gbpLocation\.seoTitle/);
  assert.match(kennedy, /Kennedy Road Weed Dispensary \| Open 24 Hours \| Brampton/);
  assert.notEqual(gbpLocation.seoTitle, "Kennedy Loud Cannabis | 24 Hour Weed Dispensary Brampton");
  assert.match(gbpLocation.metaDescription, /49 Hillcrest Ave Unit 104/);
  assert.match(gbpLocation.metaDescription, /Open 24 hours/);
  assert.match(gbpLocation.metaDescription, /\+1 \(289\) 206-1181/);
  assert.ok(gbpLocation.seoTitle.length <= 60);
});

test("Brampton landing H1, above-the-fold CTAs and category links are visit-useful", () => {
  assert.equal(gbpLocation.h1, "24 Hour Weed Dispensary in Brampton");
  assert.match(gbpPage, /<Navbar \/>/);
  assert.match(gbpPage, /<Footer \/>/);
  assert.match(gbpPage, /View Menu/);
  assert.match(gbpPage, /Call Store/);
  assert.match(gbpPage, /Directions/);
  assert.equal(categoryLinks.Flower, "/resources/weed-flower-tier-guide");
  assert.equal(categoryLinks["THC vapes"], "/items/vape-disposables");
  assert.equal(categoryLinks["Nic Vape"], "/items/vapes");
  assert.equal(categoryLinks.Cigarettes, "/items/cigarettes");
  assert.ok(!Object.keys(categoryLinks).includes("CBD oils"));
  assert.ok(!Object.keys(categoryLinks).includes("Shatter"));
  assert.notEqual(categoryLinks.Flower, "/");
});

test("standalone brand copy does not mention other stores or false menu claims", () => {
  const publicCopy = [gbpPage, homeClient, kennedy, products, seoPagesSource, guidesSource, seoContentSource, layout, footer].join("\n");
  assert.doesNotMatch(publicCopy, /Blouds|Magic Leaf|St\.? Clair|117 Queen|varies by store|fully licensed|CBD oils/i);
  assert.doesNotMatch(publicCopy, /corporate parent|sister store|fleet store/i);
});

test("related local info pages keep unique door-test titles", () => {
  const brampton = SEO_PAGES.find((page) => page.slug === "brampton-weed-dispensary");
  const nearMe = SEO_PAGES.find((page) => page.slug === "dispensary-near-me-brampton");
  const hillcrest = SEO_PAGES.find((page) => page.slug === "weed-store-near-hillcrest-ave");
  assert.equal(brampton?.absoluteTitle, true);
  assert.equal(nearMe?.absoluteTitle, true);
  assert.equal(hillcrest?.absoluteTitle, true);
  assert.match(brampton?.title ?? "", /Brampton Weed Dispensary Guide/);
  assert.match(nearMe?.title ?? "", /Dispensary Near Me in Brampton/);
  assert.match(hillcrest?.title ?? "", /Weed Store Near Hillcrest Ave/);
  assert.equal(new Set([brampton?.title, nearMe?.title, hillcrest?.title, gbpLocation.seoTitle]).size, 4);
  assert.match(brampton?.h1 ?? "", /24 Hour Brampton Weed Dispensary/);
});

test("specialty copy no longer claims menu details vary by store", () => {
  assert.match(products, /Specialty items are listed when they are carried on the Kennedy Loud menu/);
  assert.doesNotMatch(products, /vary by store/i);
  assert.doesNotMatch(products, /varies by store/i);
});
