import assert from "node:assert/strict";
import test from "node:test";
import { SEO_PAGES } from "../app/lib/seoPages.ts";

const page = SEO_PAGES.find((entry) => entry.slug === "nicotine-vapes-brampton");
const slugs = ["flavour-beast-e-liquid-salt","geek-promax-5-30k-puffs","geek-universe-25k-puffs","level-x-boost-g2-device-kit","nexa-pix-30k-puffs-many-flavors","ovns-10000-5-10k-puffs"];

test("Kennedy Loud nicotine page uses the six verified VAPE PENS products", () => {
  assert.ok(page?.heroPreview);
  assert.deepEqual(page.heroPreview.products.map((product) => product.sourceSlug), slugs);
  assert.equal(page.heroPreview.menuHref, "/items/vapes");
  assert.equal(page.heroPreview.secondaryHref, "#featured-vapes");
  assert.equal(page.heroPreview.warning, "Adults 19+. Nicotine is addictive.");
  assert.match(page.sections[2].body, /\/items\/vape-disposables/);
});
