import { NAP } from "./gbp-location";

export const HILLCREST_NATIVE_CIGARETTES = {
  path: "/native-cigarettes-hillcrest-brampton",
  canonical: `${NAP.website.replace(/\/$/, "")}/native-cigarettes-hillcrest-brampton`,
  title: "Hillcrest Native Cigarettes | Kennedy Loud",
  h1: "Hillcrest / Kennedy Native Cigarettes in Central Brampton",
  metaDescription:
    "Native cigarettes at Kennedy Loud, 49 Hillcrest Ave Unit 104, Hillcrest / Kennedy, central Brampton. Adults 19+. Call +1 (289) 206-1181. Check the current menu.",
  eyebrow: "Hillcrest / Kennedy · Adults 19+",
  menuHref: "/items/cigarettes",
  hours: NAP.hours,
} as const;

export const HILLCREST_NATIVE_CIGARETTES_FAQS = [
  {
    q: "Does Kennedy Loud sell native cigarettes at Hillcrest / Kennedy?",
    a: `Yes. Kennedy Loud Cannabis lists a cigarettes category at ${NAP.address}. This page is the Hillcrest Ave / Kennedy Road native-cigarettes pin — not a Queen Street West downtown door. Check the current cigarette menu before you travel; brand mix can rotate.`,
  },
  {
    q: "Where is the Hillcrest native cigarettes counter?",
    a: `The walk-in is ${NAP.address}. Pin Unit 104 on Hillcrest Ave, on the Kennedy Road side of central Brampton. Call ${NAP.phone} if the multi-unit entrance is not obvious.`,
  },
  {
    q: "Do I need to be 19+ to buy native cigarettes at Kennedy Loud?",
    a: "Yes. Kennedy Loud serves adults 19 and older. Bring valid government-issued photo ID. This page is menu-navigation guidance, not a medical or health claim.",
  },
  {
    q: "Is this the Queen Street West downtown cigarette shop?",
    a: `No. Native cigarettes on this page are sold at the Hillcrest Ave / Kennedy Road walk-in at ${NAP.address}. Queen Street West downtown is a different licensed door. Keep this page for Unit 104.`,
  },
  {
    q: "Are Hillcrest native cigarettes available 24 hours?",
    a: `The Unit 104 walk-in lists ${NAP.hours}. That 24-hour fact is for the door, not a guarantee that one named cigarette brand is on the shelf at that minute. Delivery hours are confirmed by the dispatcher and are not listed as 24/7.`,
  },
  {
    q: "Where do I check current native cigarette listings?",
    a: "Use the cigarettes category for current brand names and package details, then walk in at Unit 104 or call the store. This page does not invent prices or guaranteed stock.",
  },
] as const;

export const HILLCREST_NATIVE_CIGARETTES_INTERNAL_LINKS = [
  { href: "/", label: "Homepage NAP and menu" },
  { href: "/visit", label: "How to find Unit 104" },
  { href: "/24-hour-dispensary-brampton", label: "24-hour / open-now FAQ" },
  { href: "/cannabis-store-brampton", label: "Central Brampton cannabis store" },
  { href: "/weed-dispensary-brampton/", label: "Hillcrest / Kennedy weed dispensary" },
  { href: "/cannabis-delivery-hillcrest-brampton", label: "Hillcrest / Kennedy delivery" },
  { href: "/items/cigarettes", label: "Current cigarette menu" },
  { href: "/info/native-cigarettes-brampton", label: "Native cigarettes Brampton guide" },
  { href: "/nicotine-vape-kennedy-brampton", label: "Kennedy / Hillcrest nicotine vape" },
  { href: "/exotic-weed", label: "Exotic Weed" },
  { href: "/premium-weed", label: "Premium Weed" },
  { href: "/aaa-weed", label: "AAA+ Weed" },
  { href: "/aa-weed", label: "AA Weed" },
  { href: "/budget-weed", label: "Budget Weed" },
] as const;
