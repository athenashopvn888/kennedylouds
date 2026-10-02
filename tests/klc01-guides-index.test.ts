import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path: string) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("guides index is registry-driven with the four required lanes", async () => {
  const [page, registry] = await Promise.all([read("app/guides/page.tsx"), read("app/lib/guideRegistry.ts")]);
  const laneCounts = ["strain", "native_cig", "nic_vape", "thc_vape"].map(
    (lane) => registry.match(new RegExp(`\\["[^"]+","${lane}"`, "g"))?.length ?? 0,
  );
  assert.deepEqual(laneCounts, [11, 11, 4, 2]);
  assert.equal(laneCounts.reduce((total, count) => total + count, 0), 28);
  assert.match(registry, /export const getGuidesByLane=/);
  assert.match(page, /title: \{ absolute: "Guides \| Kennedy Loud Cannabis" \}/);
  assert.match(page, /<h1>Guides \| Kennedy Loud Cannabis<\/h1>/);
  assert.match(page, /alternates: \{ canonical: CANONICAL \}/);
  assert.match(page, /robots: \{ index: true, follow: true \}/);
  assert.match(page, /"@type": "WebPage"/);
  assert.match(page, /"@type": "BreadcrumbList"/);
  assert.match(page, /getGuidesByLane\(lane\.lane\)/);
  for (const label of ["Strains", "Native Cigarettes", "Nicotine Vape", "THC Vape"]) assert.match(page, new RegExp(`title: "${label}"`));
  assert.doesNotMatch(page, /"@type": "(?:Product|Offer)"|price/i);
});

test("navigation, resources and sitemap expose the index without removing hub routes", async () => {
  const [navbar, footer, resourceView, sitemap] = await Promise.all([
    read("app/components/Navbar.tsx"),
    read("app/components/Footer.tsx"),
    read("app/resources/ResourceView.tsx"),
    read("app/sitemap.ts"),
  ]);
  assert.ok(navbar.indexOf('{ href: "/resources", label: "Resources" }') < navbar.indexOf('{ href: "/guides", label: "Guides" }'));
  assert.match(footer, /<Link href="\/guides">Guides<\/Link>/);
  assert.match(resourceView, /href="\/guides"/);
  assert.match(resourceView, /Name guides/);
  assert.match(sitemap, /`\$\{BASE\}\/guides`/);
  assert.match(sitemap, /GUIDE_REGISTRY\.map\(\(guide\) => \(\{ url: `\$\{BASE\}\/guides\/\$\{guide\.slug\}`/);
});
