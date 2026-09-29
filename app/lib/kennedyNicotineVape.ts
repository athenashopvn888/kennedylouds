import { NAP } from "./gbp-location";

export const KENNEDY_NICOTINE_VAPE = {
  path: "/nicotine-vape-kennedy-brampton",
  canonical: `${NAP.website.replace(/\/$/, "")}/nicotine-vape-kennedy-brampton`,
  title: "Kennedy Nicotine Vape | Kennedy Loud",
  h1: "Kennedy / Hillcrest Nicotine Vape in Central Brampton",
  metaDescription:
    "Nicotine vape at Kennedy Loud, 49 Hillcrest Ave Unit 104, Kennedy Road / Hillcrest, central Brampton. Adults 19+. Nicotine is addictive. Call +1 (289) 206-1181.",
  eyebrow: "Kennedy / Hillcrest · Adults 19+ · Nicotine is addictive",
  menuHref: "/items/vapes",
  thcVapeHref: "/items/vape-disposables",
  hours: NAP.hours,
} as const;

export const KENNEDY_NICOTINE_VAPE_FAQS = [
  {
    q: "Does Kennedy Loud sell nicotine vape at Kennedy / Hillcrest?",
    a: `Yes. Kennedy Loud Cannabis lists a Nic Vape category at ${NAP.address}. This page is the Kennedy Road / Hillcrest Ave nicotine-vape pin — not a Queen Street West downtown door. Check the current Nic Vape menu before you travel; listings can rotate.`,
  },
  {
    q: "Is nicotine vape the same as the THC vape shelf?",
    a: "No. Nicotine vape listings live on the Nic Vape category. THC and cannabis vape listings are a separate category. Read each product page for its supported format. Nicotine is addictive.",
  },
  {
    q: "Do I need to be 19+ to buy nicotine vape at Kennedy Loud?",
    a: "Yes. Kennedy Loud serves adults 19 and older. Bring valid government-issued photo ID. This page does not make medical claims.",
  },
  {
    q: "Is this the Queen Street West downtown nicotine vape shop?",
    a: `No. Nicotine vape on this page is sold at the Hillcrest Ave / Kennedy Road walk-in at ${NAP.address}. Queen Street West downtown is a different licensed door. Keep this page for Unit 104.`,
  },
  {
    q: "Can I buy nicotine vape during the 24-hour Hillcrest walk-in?",
    a: `The Unit 104 walk-in lists ${NAP.hours}. That 24-hour fact is for the door, not a guarantee that one named nicotine vape is on the shelf at that minute. Delivery hours are confirmed by the dispatcher and are not listed as 24/7.`,
  },
  {
    q: "Where do I check current nicotine vape listings?",
    a: "Use the Nic Vape category for current names and package details, then walk in at Unit 104 or call the store. This page does not invent prices or guaranteed stock.",
  },
] as const;

export const KENNEDY_NICOTINE_VAPE_INTERNAL_LINKS = [
  { href: "/", label: "Homepage NAP and menu" },
  { href: "/visit", label: "How to find Unit 104" },
  { href: "/24-hour-dispensary-brampton", label: "24-hour / open-now FAQ" },
  { href: "/cannabis-store-brampton", label: "Central Brampton cannabis store" },
  { href: "/weed-dispensary-brampton/", label: "Hillcrest / Kennedy weed dispensary" },
  { href: "/cannabis-delivery-hillcrest-brampton", label: "Hillcrest / Kennedy delivery" },
  { href: "/items/vapes", label: "Current Nic Vape menu" },
  { href: "/info/nicotine-vapes-brampton", label: "Nicotine vapes Brampton guide" },
  { href: "/native-cigarettes-hillcrest-brampton", label: "Hillcrest / Kennedy native cigarettes" },
  { href: "/exotic-weed", label: "Exotic Weed" },
  { href: "/premium-weed", label: "Premium Weed" },
  { href: "/aaa-weed", label: "AAA+ Weed" },
  { href: "/aa-weed", label: "AA Weed" },
  { href: "/budget-weed", label: "Budget Weed" },
] as const;
