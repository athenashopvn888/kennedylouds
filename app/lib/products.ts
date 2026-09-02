/* -- Product & Item Types -- */
export interface FlowerProduct {
  sku: string;
  name: string;
  slug: string;
  tier: string;
  type: "indica" | "sativa" | "hybrid";
  isHot: boolean;
  isSale: boolean;
  thc: string;
  price3g: PricePoint | null;
  price5g: PricePoint | null;
  price14g: PricePoint | null;
  price28g: PricePoint | null;
  image: string;
}

export interface PricePoint {
  regular: number;
  sale: number | null;
}

export interface ItemProduct {
  sku: string;
  name: string;
  slug: string;
  category: string;
  type: string;
  thc: string;
  mg: string;
  price: string;
  image: string;
  promoImage: string | null;
}

/* ── Data imports (static fallback) ── */
import flowersJson from "./flowers.json";
import itemsJson from "./items.json";

export const allFlowers: FlowerProduct[] = flowersJson as FlowerProduct[];
export const allItems: ItemProduct[] = itemsJson as ItemProduct[];

/* ── Live stock fetch from Apps Script ── */
const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || "";

interface LiveStockResponse {
  flowers: FlowerProduct[];
  items: ItemProduct[];
  storeCode?: string;
  stockDate?: string;
}

/**
 * Fetch live stock-filtered products from Apps Script endpoint.
 * Used at build time (getStaticProps / generateStaticParams).
 * Falls back to static JSON if endpoint not configured.
 */
export async function fetchLiveProducts(): Promise<{
  flowers: FlowerProduct[];
  items: ItemProduct[];
  isLive: boolean;
  stockDate: string | null;
}> {
  if (!APPS_SCRIPT_URL) {
    return { flowers: allFlowers, items: allItems, isLive: false, stockDate: null };
  }

  try {
    // Temporary override: use PL60 stock while the KLC01 POS email feed is glitching.
    const res = await fetch(`${APPS_SCRIPT_URL}?store=PL601`, {
      next: { revalidate: 300 }, // Cache for 5 min during build
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: LiveStockResponse = await res.json();
    return {
      flowers: data.flowers || allFlowers,
      items: data.items || allItems,
      isLive: true,
      stockDate: data.stockDate || null,
    };
  } catch (err) {
    console.warn("[products] Live fetch failed, using static data:", err);
    return { flowers: allFlowers, items: allItems, isLive: false, stockDate: null };
  }
}

export const TIER_CONFIG: Record<
  string,
  {
    name: string; slug: string; color: string; icon: string; tagline: string; banner: string;
    unitPrice: number; /* $/g */
    deal3g: { label: string; total: string; price: number } | null; /* 3g bundle pricing */
    deal6g: { label: string; total: string; price: number } | null; /* 6g bundle pricing (top 3 only) */
  }
> = {
  EXOTIC: {
    name: "Exotic Weed",
    slug: "exotic-weed",
    color: "#f59e0b",
    icon: "\uD83D\uDD25",
    tagline: "Explore the Exotic Weed flower tier",
    banner: "/banners/KennedyLoud_Exotic.webp",
    unitPrice: 20,
    deal3g: { label: "3g bundle", total: "3G", price: 40 },
    deal6g: { label: "6g bundle", total: "6G", price: 60 },
  },
  PREMIUM: {
    name: "Premium Weed",
    slug: "premium-weed",
    color: "#a78bfa",
    icon: "\uD83D\uDC8E",
    tagline: "Explore the Premium Weed flower tier",
    banner: "/banners/KennedyLoud_Premium.webp",
    unitPrice: 15,
    deal3g: { label: "3g bundle", total: "3G", price: 30 },
    deal6g: { label: "6g bundle", total: "6G", price: 45 },
  },
  "AAA+": {
    name: "AAA+ Weed",
    slug: "aaa-weed",
    color: "#22d3ee",
    icon: "\u26A1",
    tagline: "Explore the AAA+ Weed flower tier",
    banner: "/banners/KennedyLoud_AAA_Plus.webp",
    unitPrice: 10,
    deal3g: { label: "3g bundle", total: "3G", price: 20 },
    deal6g: { label: "6g bundle", total: "6G", price: 30 },
  },
  AA: {
    name: "AA Weed",
    slug: "aa-weed",
    color: "#34d399",
    icon: "\u2726",
    tagline: "Explore the AA Weed flower tier",
    banner: "/banners/KennedyLoud_AA.webp",
    unitPrice: 4,
    deal3g: null,
    deal6g: null,
  },
  BUDGET: {
    name: "Budget Weed",
    slug: "budget-weed",
    color: "#94a3b8",
    icon: "\uD83D\uDCB0",
    tagline: "Explore the Budget Weed flower tier",
    banner: "/banners/KennedyLoud_Budget.webp",
    unitPrice: 3,
    deal3g: { label: "$10 / 3g Special", total: "3G", price: 10 },
    deal6g: null,
  },
};

/* ── Item category config ── */
export interface CategoryInfo {
  name: string; slug: string; color: string; icon: string; banner?: string;
  seoTitle: string; seoIntro: string; seoDescription: string;
  faqs: { q: string; a: string }[];
}

export const CATEGORY_CONFIG: Record<string, CategoryInfo> = {
  EDIBLES: {
    banner: "/banners/KennedyLoud_Edibles.webp",
    name: "Edibles", slug: "edibles", color: "#f97316", icon: "🍬",
    seoTitle: "Cannabis Edibles Brampton | Kennedy Loud Cannabis",
    seoIntro: "Browse edible category information at Kennedy Loud Cannabis on Hillcrest Ave in Brampton.",
    seoDescription: "Review edible-related menu categories at Kennedy Loud Cannabis in Brampton and confirm current menu details before visiting. This page is intended for general category browsing and does not promise current product menu details.",
    faqs: [
      { q: "What edible information can shoppers review?", a: "Visitors can use this page to review edibles category information and then confirm current menu details before visiting Kennedy Loud Cannabis." },
      { q: "Does this page guarantee current edible menu details?", a: "No. This page is for general category browsing; customers should confirm current menu details before visiting." },
    ],
  },
  "VAPE PENS": {
    banner: "/banners/KennedyLoud_Nic_Vape.webp",
    name: "Nic Vape", slug: "vapes", color: "#8b5cf6", icon: "💨",
    seoTitle: "Nic Vape Brampton | Kennedy Loud Cannabis",
    seoIntro: "Browse the current Nic Vape category at Kennedy Loud Cannabis in Brampton for listed product names, formats, package details, and prices.",
    seoDescription: "Use the Nic Vape category to compare the nicotine vape products currently listed before visiting Kennedy Loud Cannabis at 49 Hillcrest Ave, Unit 104.",
    faqs: [
      { q: "What is listed on the Nic Vape page?", a: "Use this page to compare the nicotine vape product names, package details, and prices currently listed." },
      { q: "Where should shoppers check device details?", a: "Review each item listing and product package for the current format and device details." },
    ],
  },
  "VAPE DISPOSABLE": {
    banner: "/banners/KennedyLoud_THC_Vape.webp",
    name: "THC Vape", slug: "vape-disposables", color: "#a78bfa", icon: "💨",
    seoTitle: "THC Vape Disposables Brampton | Kennedy Loud Cannabis",
    seoIntro: "Browse the current THC Vape category at Kennedy Loud Cannabis in Brampton for listed product names, formats, package details, and prices.",
    seoDescription: "Use the THC Vape category to compare the cannabis vape products currently listed before visiting Kennedy Loud Cannabis at 49 Hillcrest Ave, Unit 104.",
    faqs: [
      { q: "What is listed on the THC Vape page?", a: "Use this page to compare the THC vape product names, package details, and prices currently listed." },
      { q: "Where should shoppers check product details?", a: "Review each item listing and product package for the current format and device details." },
    ],
  },
  CONCENTRATES: {
    banner: "/banners/KennedyLoud_Concentrates.webp",
    name: "Concentrates", slug: "concentrates", color: "#f59e0b", icon: "💎",
    seoTitle: "Cannabis Concentrates Brampton | Kennedy Loud Cannabis",
    seoIntro: "Browse concentrates category information at Kennedy Loud Cannabis in Brampton.",
    seoDescription: "Review concentrate-related menu categories at Kennedy Loud Cannabis in Brampton and confirm current menu details before visiting. This page is intended for general category browsing and does not promise current product menu details.",
    faqs: [
      { q: "What concentrate information can shoppers review?", a: "Visitors can use this page to review concentrates category information and then confirm current menu details before visiting Kennedy Loud Cannabis." },
      { q: "Does this page guarantee current concentrate menu details?", a: "No. Category details can change, so customers should confirm the current menu before visiting." },
    ],
  },
  PREROLLS: {
    banner: "/banners/KennedyLoud_Pre_Rolls.webp", name: "Pre-Rolls", slug: "prerolls", color: "#22c55e", icon: "🚬",
    seoTitle: "Pre-Rolls Brampton | Kennedy Loud Cannabis",
    seoIntro: "Browse pre-roll category information at Kennedy Loud Cannabis in Brampton.",
    seoDescription: "Kennedy Loud Cannabis includes pre-roll category information for Brampton shoppers. Review the category, confirm current menu details, and visit 49 Hillcrest Ave, Unit 104 during posted store hours.",
    faqs: [
      { q: "What pre-roll information can shoppers review?", a: "Visitors can review pre-roll category information and then confirm current menu details before visiting Kennedy Loud Cannabis." },
      { q: "Does this page guarantee current pre-roll menu details?", a: "No. Category details can change, so customers should confirm the current menu before visiting." },
    ],
  },
  "ADD ONS": {
    banner: "/banners/KennedyLoud_Accessories.webp",
    name: "Accessories", slug: "add-ons", color: "#34d399", icon: "➕",
    seoTitle: "Cannabis Accessories Brampton | Kennedy Loud Cannabis",
    seoIntro: "Review cannabis accessory category information at Kennedy Loud Cannabis in Brampton.",
    seoDescription: "Kennedy Loud Cannabis includes accessory category information for Brampton shoppers. Check the current menu or contact the store before visiting 49 Hillcrest Ave, Unit 104 for a specific accessory.",
    faqs: [
      { q: "What accessory information can shoppers review?", a: "Visitors can review accessory category information and confirm current details before visiting Kennedy Loud Cannabis." },
    ],
  },
  "MAGIC & OTHERS": {
    banner: "/banners/KennedyLoud_Magic_Stuff.webp",
    name: "Magic Stuff", slug: "magic", color: "#64748b", icon: "*",
    seoTitle: "Magic Stuff - Specialty Items",
    seoIntro: "Browse current menu for available specialty products. Menu details may vary by store.",
    seoDescription: "Specialty items are listed when they are carried on the menu. Product menu details may vary by store and by day. Check current category details before visiting.",
    faqs: [
      { q: "What specialty items are available?", a: "Selection varies by store and by day. Check the current menu for available specialty products." },
      { q: "Does menu details vary by location?", a: "Yes. Specialty item menu details may vary by store, so please check the current menu for this location." },
    ],
  },
  CIGARETTES: {
    banner: "/banners/native-cigarette-offer-20260822.webp",
    name: "Cigarettes", slug: "cigarettes", color: "#78716c", icon: "🏷️",
    seoTitle: "Native Cigarettes Brampton - Brands And Prices at Kennedy Loud Cannabis",
    seoIntro: "Shop native cigarettes in Brampton at Kennedy Loud Cannabis with listed brands like Canadian, Canadian Goose, Canadian Classics, Putters, Rolled Gold, Nexus, Time, Backwoods, Grabba, and nicotine pouches.",
    seoDescription: "Kennedy Loud Cannabis lists native cigarette packs at $25 for many brands, plus 10 x Premium Mix Cigarettes at $3, nicotine pouches from Velo, Pablo, and Killa at $20, Grabba at $5, Grabba Shaker at $19, and Backwoods options from $20-$25. Visit 49 Hillcrest Ave, Unit 104 in Brampton and check the cigarette category for current details.",
    faqs: [
      { q: "Do you sell native cigarettes at Kennedy Loud Cannabis?", a: "Yes. The cigarette menu includes brands such as Canadian Lights, Canadian Full, Canadian Menthol, Canadian Goose, Canadian Classics, Putters, Rolled Gold, Nexus, and Time." },
      { q: "How much are cigarettes at Kennedy Loud Cannabis?", a: "Many native cigarette packs are listed at $25. The menu also lists 10 x Premium Mix Cigarettes at $3, nicotine pouches at $20, Grabba at $5, Grabba Shaker at $19, and Backwoods options from $20-$25." },
      { q: "Do cigarette brands and prices change?", a: "Yes. Brand mix, flavours, carton options, and prices can rotate, so check the cigarette category before visiting Hillcrest Ave." },
    ],
  },
};

/* ── Helper functions ── */
export function getFlowersByTier(tier: string): FlowerProduct[] {
  return allFlowers.filter(
    (f) => f.tier.toUpperCase() === tier.toUpperCase()
  );
}

export function getFlowerBySlug(slug: string): FlowerProduct | undefined {
  return allFlowers.find((f) => f.slug === slug);
}

export function getItemsByCategory(category: string): ItemProduct[] {
  return allItems.filter(
    (i) => i.category.toUpperCase() === category.toUpperCase()
  );
}

export function getTierFromSlug(
  slug: string
): { key: string; config: (typeof TIER_CONFIG)[string] } | undefined {
  const entry = Object.entries(TIER_CONFIG).find(
    ([, v]) => v.slug === slug
  );
  if (!entry) return undefined;
  return { key: entry[0], config: entry[1] };
}

export function getCategoryFromSlug(
  slug: string
): { key: string; config: (typeof CATEGORY_CONFIG)[string] } | undefined {
  const entry = Object.entries(CATEGORY_CONFIG).find(
    ([, v]) => v.slug === slug
  );
  if (!entry) return undefined;
  return { key: entry[0], config: entry[1] };
}

export function getLowestPrice(flower: FlowerProduct): number | null {
  const prices = [flower.price3g, flower.price5g, flower.price14g, flower.price28g]
    .filter((p): p is PricePoint => p !== null)
    .map((p) => p.sale ?? p.regular);
  return prices.length ? Math.min(...prices) : null;
}

export function formatPrice(p: PricePoint | null): string {
  if (!p) return "—";
  if (p.sale !== null) return `$${p.sale}`;
  return `$${p.regular}`;
}
