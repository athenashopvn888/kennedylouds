export const TIER_HUB_LINKS = [
  { href: "/exotic-weed", label: "Exotic Weed" },
  { href: "/premium-weed", label: "Premium Weed" },
  { href: "/aaa-weed", label: "AAA+ Weed" },
  { href: "/aa-weed", label: "AA Weed" },
  { href: "/budget-weed", label: "Budget Weed" },
] as const;

export const VISIT_HUB_LINKS = [
  { href: "/", label: "Homepage menu" },
  { href: "/visit", label: "Find Unit 104" },
  { href: "/24-hour-dispensary-brampton", label: "24-hour / open-now FAQ" },
  { href: "/cannabis-store-brampton", label: "Central Brampton cannabis store" },
  { href: "/weed-dispensary-brampton/", label: "Hillcrest / Kennedy weed dispensary" },
  { href: "/cannabis-delivery-hillcrest-brampton", label: "Hillcrest / Kennedy delivery" },
] as const;

export const PARITY_HUB_LINKS = [...VISIT_HUB_LINKS, ...TIER_HUB_LINKS] as const;

export const SHORT_TIER_ALIASES = [
  { source: "/exotic", destination: "/exotic-weed" },
  { source: "/premium", destination: "/premium-weed" },
  { source: "/aaa", destination: "/aaa-weed" },
  { source: "/aa", destination: "/aa-weed" },
  { source: "/budget", destination: "/budget-weed" },
] as const;

/** 301 into B07 so the Hillcrest 24h slug does not duplicate the live FAQ. */
export const HILLCREST_24H_ALIAS = {
  source: "/24-hour-hillcrest-brampton-dispensary",
  destination: "/24-hour-dispensary-brampton",
} as const;

export function normalizeHubPath(href: string): string {
  if (href === "/") return "/";
  return href.replace(/\/+$/, "");
}
