import type { Nap, ResolvedBanner, ResolvedPage } from "./types.ts";

/**
 * The only store-specific fleet file. Other stores replace this module
 * and leave the rest of app/lib/fleet and app/components/fleet as-is.
 */
export const FLEET_STORE_CODE = "KLC01";
export const FLEET_STORE_NAME = "Kennedy Loud Cannabis";
export const FLEET_AREA = "Brampton";
export const FLEET_DOMAIN = "kennedyloudcannabis.com";
export const FLEET_DOMAINS = ["kennedyloudcannabis.com", "www.kennedyloudcannabis.com"] as const;
export const FLEET_ORIGIN = "https://kennedyloudcannabis.com";

/** Public blob origin. Objects live at /{storeCode}/manifest.json and /{storeCode}/articles/. */
export const FLEET_BLOB_ORIGIN = "https://dhaah0upvlpukv56.public.blob.vercel-storage.com";

export const FLEET_COLORS = {
  banner: "#111827",
  bannerText: "#ffffff",
} as const;

/** Digits or formatted numbers. An article containing any of these is dropped. */
export const FLEET_BLOCKED_PHONES: readonly string[] = [];

export const FLEET_ARTICLES_PATH = "/articles";

/** Page and spot names for the six TV2 category cards. Spot is the card name. */
export const TV2_PAGE = "TV2";
export const TV2_CARDS = [
  "PREROLLS_ADDONS",
  "VAPES",
  "EDIBLES",
  "CONCENTRATES",
  "CIGARETTES",
  "MAGIC",
] as const;

export const TV_PAGE = "TV";
export const TV_FULLSCREEN_SPOTS = [
  "Fullscreen promo 1",
  "Fullscreen promo 2",
  "Fullscreen promo 3",
] as const;

/** Fort York Cannabis takeover defaults: 5s on screen, once a minute, 5s first preview, 650ms slide. */
export const TV_PROMO_SHOW_SECONDS = 5;
export const TV_PROMO_EVERY_MINUTES = 1;
export const TV_PROMO_INITIAL_DELAY_MS = 5_000;
export const TV_PROMO_SLIDE_MS = 650;

export function defaultManifestUrl(storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/manifest.json`;
}

export function articlesIndexUrl(storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/articles/index.json`;
}

export function articleBodyUrl(slug: string, storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/articles/${encodeURIComponent(slug)}.json`;
}

export const CODED_NAP: Nap = {
  name: "Kennedy Loud Cannabis",
  street: "49 Hillcrest Ave Unit 104",
  city: "Brampton",
  province: "ON",
  postalCode: "L6W 1Y7",
  cityLine: "Brampton, ON L6W 1Y7",
  area: "Brampton",
  intersection: "Hillcrest Ave & Kennedy Rd",
  areaLine: "Hillcrest Ave & Kennedy Rd, Brampton",
  phoneDisplay: "+1 (289) 206-1181",
  phoneTel: "+12892061181",
  hours: "Open 24 Hours",
  mapsSearchUrl: "https://www.google.com/maps/place/?q=place_id:ChIJk4EH_lwVK4gR-Ag6p82yvFQ",
  mapsEmbedUrl: "https://maps.google.com/maps?q=49%20Hillcrest%20Ave%20Unit%20104%2C%20Brampton%2C%20ON%20L6W%201Y7&z=16&output=embed",
  lat: "43.6940006",
  lng: "-79.7477885",
  schemaName: "Kennedy Loud Cannabis Dispensary Weed Delivery",
  website: "https://kennedyloudcannabis.com",
};

export const CODED_BANNERS: ResolvedBanner[] = [
  {
    id: "weed",
    page: "Home",
    spot: "Top banner",
    href: "/exotic-weed",
    categoryName: "Exotic Weed",
    hidden: false,
    render: "image",
    image: "/banners/top-weed-tier-klc01.webp",
    codedImage: "/banners/top-weed-tier-klc01.webp",
    alt: "Kennedy Loud Cannabis in Hillcrest Avenue, Brampton — Exotic, Premium and AAA+ top weed tiers",
    title: "Kennedy Loud Cannabis top weed tiers — Exotic, Premium and AAA+",
    textBar: "Buy 2g Get 1g FREE · Buy 3g Get 3g FREE · Shop weed tiers",
    caption: "Buy 2g Get 1g FREE · Buy 3g Get 3g FREE · Shop weed tiers",
  },
  {
    id: "vapes",
    page: "Home",
    spot: "Promo banner 2",
    href: "/items/vapes",
    categoryName: "Nicotine Vapes",
    hidden: false,
    render: "image",
    image: "/banners/core-vapes-nicotine-thc.webp",
    codedImage: "/banners/core-vapes-nicotine-thc.webp",
    alt: "Kennedy Loud Cannabis in Hillcrest Avenue, Brampton — nicotine vapes and THC vapes",
    title: "Kennedy Loud Cannabis nicotine vapes and THC vapes",
    textBar: "Nicotine vapes + THC vapes · Shop vapes",
    caption: "Nicotine vapes + THC vapes · Shop vapes",
  },
  {
    id: "cigarettes",
    page: "Home",
    spot: "Promo banner 3",
    href: "/items/cigarettes",
    categoryName: "Cigarettes",
    hidden: false,
    render: "image",
    image: "/banners/native-cigarette-offer-20260822.webp",
    codedImage: "/banners/native-cigarette-offer-20260822.webp",
    alt: "Kennedy Loud Cannabis in Hillcrest Avenue, Brampton — 2 packs for $5 mix and match and $25 carton cigarette offer",
    title: "Kennedy Loud Cannabis cigarette offer — 2 packs $5 mix and match, $25 carton",
    textBar: "2 packs $5 mix & match · $25 carton · Shop cigarettes",
    caption: "2 packs $5 mix & match · $25 carton · Shop cigarettes",
  },
  {
    id: "premium-cigarettes",
    page: "Home",
    spot: "Promo banner 4",
    href: "/items/cigarettes",
    categoryName: "Premium Cigarettes",
    hidden: false,
    render: "image",
    image: "/banners/core-premium-bb-marlboro-belmont.webp",
    codedImage: "/banners/core-premium-bb-marlboro-belmont.webp",
    alt: "Kennedy Loud Cannabis in Hillcrest Avenue, Brampton — BB Full Flavor and Lights 2 packs for $5, Marlboro and Belmont $10 per pack",
    title: "Kennedy Loud Cannabis premium cigarettes — BB 2 packs $5, Marlboro and Belmont $10 per pack",
    textBar: "BB Full Flavor + Lights — 2 packs $5 · Marlboro & Belmont — $10/pack · Shop cigarettes",
    caption: "BB Full Flavor + Lights — 2 packs $5 · Marlboro & Belmont — $10/pack · Shop cigarettes",
  },
];

export const CODED_PAGES: Record<string, ResolvedPage> = {
  Home: {
    description: "Kennedy Loud Cannabis is a 24-hour weed dispensary at 49 Hillcrest Ave Unit 104, Brampton, near Kennedy Rd. Flower, vapes, edibles. Call +1 (289) 206-1181. Adults 19+.",
    metaTitle: "Kennedy Loud Cannabis | 24 Hour Weed Dispensary Brampton",
    metaDescription: "Kennedy Loud Cannabis is a 24-hour weed dispensary at 49 Hillcrest Ave Unit 104, Brampton, near Kennedy Rd. Flower, vapes, edibles. Call +1 (289) 206-1181. Adults 19+.",
  },
  Contact: {
    description: "Visit Kennedy Loud Cannabis at 49 Hillcrest Ave Unit 104, Brampton, ON L6W 1Y7. Open 24 Hours. Call +1 (289) 206-1181. Walk-ins welcome. Adults 19+.",
    metaTitle: "Contact Kennedy Loud Cannabis | 49 Hillcrest Ave Unit 104, Brampton",
    metaDescription: "Visit Kennedy Loud Cannabis at 49 Hillcrest Ave Unit 104, Brampton, ON L6W 1Y7. Open 24 Hours. Call +1 (289) 206-1181. Walk-ins welcome. Adults 19+.",
  },
};
