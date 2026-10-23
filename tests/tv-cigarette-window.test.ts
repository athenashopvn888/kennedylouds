import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { decideCigaretteSurface } from "../app/lib/cigDecision.ts";
import { CIGARETTE_CARD_OFF_TITLE, tv2CardItems, tv2CardTitle, tv2CategoryOff } from "../app/lib/tvCigaretteBoard.ts";

const cigCard = {
  id: "CIGARETTES",
  title: "🚬 CIGARETTES",
  filter: (item: { category?: string }) => item.category === "CIGARETTES",
};
const vapeCard = {
  id: "VAPES",
  title: "💨 VAPES",
  filter: (item: { category?: string }) => item.category === "VAPE PENS" || item.category === "VAPE DISPOSABLE",
};

const carton = { category: "CIGARETTES", name: "BB FULL CARTON", slug: "bb-full-carton" };
const grabba = { category: "CIGARETTES", name: "GRABBA", slug: "grabba" };
const backwoods = { category: "CIGARETTES", name: "BACKWOODS ASSORTED FLAVORS", slug: "backwoods" };
const cigarillo = { category: "CIGARETTES", name: "SWISHER CIGARILLO", slug: "swisher-cigarillo" };
const paper = { category: "CIGARETTES", name: "RAW PAPER KING SIZE", slug: "raw-paper" };
const wrap = { category: "CIGARETTES", name: "HEMP WRAP", slug: "hemp-wrap" };
const pouch = { category: "CIGARETTES", name: "NICOTINE POUCHES , VELO, PABLO, KILLA", slug: "nicotine-pouches-velo" };
const zyn = { category: "CIGARETTES", name: "ZYN NICOTINE POUCHES", slug: "zyn-nicotine-pouches" };
const vape = { category: "VAPE PENS", name: "Mango Ice", slug: "mango-ice" };
const items = [carton, grabba, backwoods, cigarillo, paper, wrap, pouch, zyn, vape];

test("a true TV flag shows the cigarette card items and a false flag hides them", () => {
  const shown = tv2CardItems(items, cigCard, true, false).map((item) => item.slug);
  assert.ok(shown.includes(carton.slug));
  assert.ok(shown.includes(backwoods.slug));
  assert.ok(shown.includes(wrap.slug));
  assert.ok(shown.includes(pouch.slug));
  assert.equal(shown.includes(vape.slug), false);
  assert.equal(tv2CardTitle(cigCard, true, "🚬 CIGARETTES"), "🚬 CIGARETTES");
  assert.equal(tv2CategoryOff("CIGARETTES", true), false);

  const hidden = tv2CardItems(items, cigCard, false, false).map((item) => item.slug);
  assert.deepEqual(hidden, [backwoods.slug, cigarillo.slug, paper.slug, wrap.slug]);
  assert.equal(hidden.includes(carton.slug), false);
  assert.equal(hidden.includes(grabba.slug), false);
  assert.equal(tv2CardTitle(cigCard, false), CIGARETTE_CARD_OFF_TITLE);
  assert.equal(tv2CategoryOff("CIGARETTES", false), true);

  const vapes = tv2CardItems(items, vapeCard, false, false).map((item) => item.slug);
  assert.ok(vapes.includes(vape.slug));
  assert.ok(vapes.includes(pouch.slug));
  assert.ok(vapes.includes(zyn.slug));
  assert.equal(vapes.includes(carton.slug), false);

  const daytime = tv2CardItems(items, cigCard, false, true).map((item) => item.slug);
  assert.ok(daytime.includes(backwoods.slug));
  assert.ok(daytime.includes(wrap.slug));
  assert.equal(daytime.includes(carton.slug), false);
});

test("a feed error hides the cigarette card items and a successful tvOn shows them", () => {
  const errored = decideCigaretteSurface({ cig: { tvOn: true }, items, surface: "tv", errored: true });
  assert.equal(errored.show, false);
  const hidden = tv2CardItems(items, cigCard, errored.show, false).map((item) => item.slug);
  assert.equal(hidden.includes(carton.slug), false);
  assert.equal(hidden.includes(grabba.slug), false);
  assert.ok(hidden.includes(backwoods.slug));
  assert.ok(hidden.includes(cigarillo.slug));
  assert.ok(hidden.includes(paper.slug));
  assert.ok(hidden.includes(wrap.slug));
  const vapes = tv2CardItems(items, vapeCard, errored.show, false).map((item) => item.slug);
  assert.ok(vapes.includes(pouch.slug));
  assert.ok(vapes.includes(zyn.slug));
  assert.equal(vapes.includes(carton.slug), false);

  const shown = decideCigaretteSurface({ cig: { tvOn: true }, items, surface: "tv" });
  assert.equal(shown.show, true);
  assert.ok(tv2CardItems(items, cigCard, shown.show, false).some((item) => item.slug === carton.slug));
  const off = decideCigaretteSurface({ cig: { tvOn: false }, items, surface: "tv" });
  assert.equal(off.show, false);
  assert.equal(tv2CardItems(items, cigCard, off.show, false).some((item) => item.slug === carton.slug), false);
});

test("TV pages read the live header and website pages keep the static gate", () => {
  const tv2 = readFileSync(new URL("../app/tv2/page.tsx", import.meta.url), "utf8");
  const tv = readFileSync(new URL("../app/tv/page.tsx", import.meta.url), "utf8");
  const route = readFileSync(new URL("../app/api/tv-data/route.ts", import.meta.url), "utf8");
  const nav = readFileSync(new URL("../app/components/Navbar.tsx", import.meta.url), "utf8");
  const sitemap = readFileSync(new URL("../app/sitemap.ts", import.meta.url), "utf8");

  for (const page of [tv2, tv]) {
    assert.match(page, /readCigaretteTvHeader/);
    assert.match(page, /useCigaretteState/);
    assert.doesNotMatch(page, /SHOW_CIGARETTES/);
  }
  assert.match(tv2, /tv2CardItems/);
  assert.match(route, /snapshotHeaders/);
  assert.match(route, /applyTvItemPayload/);
  assert.match(route, /x-tv-data-cig-tv|snapshotHeaders/);
  assert.doesNotMatch(route, /SHOW_CIGARETTES/);
  assert.match(nav, /SHOW_CIGARETTES/);
  assert.match(sitemap, /SHOW_CIGARETTES/);
});
