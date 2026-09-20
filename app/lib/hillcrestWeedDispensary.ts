import { NAP, gbpLocation } from "./gbp-location";

/** Fifth Hillcrest / Kennedy pillar: neighbourhood weed dispensary at Unit 104. */
export const HILLCREST_WEED_DISPENSARY = {
  path: "/weed-dispensary-brampton/",
  slug: gbpLocation.slug,
  canonical: `${NAP.website.replace(/\/$/, "")}/weed-dispensary-brampton/`,
  title: gbpLocation.seoTitle,
  h1: gbpLocation.h1,
  metaDescription: gbpLocation.metaDescription,
  eyebrow: "Hillcrest / Kennedy / Unit 104 · Adults 19+",
  hours: NAP.hours,
  napDisplay:
    "49 Hillcrest Ave Unit 104, Brampton, ON L6W 1Y7 · +1 (289) 206-1181 · https://kennedyloudcannabis.com/",
} as const;

export const HILLCREST_WEED_DISPENSARY_FAQS = [
  {
    q: "Is Kennedy Loud the neighbourhood weed dispensary for Hillcrest / Kennedy / Unit 104?",
    a: `Yes. ${NAP.storeName} is the walk-in weed dispensary at ${NAP.address}, on the Hillcrest Ave / Kennedy Road side of central Brampton. This hub is for Unit 104 only — not a Queen Street West downtown door.`,
  },
  {
    q: "Is the Hillcrest / Kennedy / Unit 104 weed dispensary on Queen Street West downtown?",
    a: `No. The neighbourhood weed pin is ${NAP.address}. Queen Street West downtown is a different licensed door. Keep this page when you mean Hillcrest Ave, Kennedy Road, and Unit 104.`,
  },
  {
    q: "What address, phone, and site should I use for this Hillcrest / Kennedy weed dispensary?",
    a: `${NAP.storeName}, ${NAP.address}. Call ${NAP.phone}. Website ${NAP.website}. Listed walk-in hours are ${NAP.hours}. Adults 19+ with valid government photo ID.`,
  },
  {
    q: "Which Hillcrest / Kennedy pages should I open after this weed dispensary hub?",
    a: "Use the Unit 104 visit guide to find the door, the 24-hour / open-now FAQ for listed hours, the central Brampton cannabis store guide for Kennedy / Queen / Main corridors, Hillcrest delivery for dispatcher drops, native cigarettes and nicotine vape for those sold counters, and the five flower tiers for collections. This page stays the neighbourhood weed hub.",
  },
  {
    q: "Do Exotic, Premium, AAA+, AA, or Budget pages replace this Unit 104 weed dispensary?",
    a: "No. Those five collections are flower tiers at the same Hillcrest / Kennedy counter. Start here when you want the neighbourhood weed dispensary, then open one tier. They do not move the pin off 49 Hillcrest Ave Unit 104.",
  },
  {
    q: "Is walking into this Hillcrest / Kennedy weed dispensary the same as cannabis delivery?",
    a: `No. The Unit 104 walk-in lists ${NAP.hours}. Cannabis delivery from this same Hillcrest / Kennedy pin is a separate dispatcher channel and is not listed as 24/7. Use the Hillcrest / Kennedy delivery page to order.`,
  },
  {
    q: "Can I buy native cigarettes or nicotine vape at this neighbourhood weed dispensary?",
    a: `Yes. Native cigarettes and Nic Vape are sold categories at ${NAP.address}. Confirm current listings on those Hillcrest / Kennedy pages before you travel. Open 24 Hours describes the door, not one named pack or device on the shelf.`,
  },
  {
    q: "Do I need an appointment to shop the Hillcrest / Kennedy / Unit 104 weed dispensary?",
    a: "No appointment. Walk in with valid 19+ government photo ID. Call +1 (289) 206-1181 if the multi-unit entrance is not obvious, and confirm current menu details before a special-item trip.",
  },
] as const;

export const HILLCREST_WEED_DISPENSARY_INTERNAL_LINKS = [
  { href: "/visit", label: "How to find Unit 104" },
  { href: "/24-hour-dispensary-brampton", label: "24-hour / open-now FAQ" },
  { href: "/cannabis-store-brampton", label: "Central Brampton cannabis store" },
  { href: "/cannabis-delivery-hillcrest-brampton", label: "Hillcrest / Kennedy delivery" },
  { href: "/native-cigarettes-hillcrest-brampton", label: "Hillcrest native cigarettes" },
  { href: "/nicotine-vape-kennedy-brampton", label: "Kennedy nicotine vape" },
  { href: "/exotic-weed", label: "Exotic Weed" },
  { href: "/premium-weed", label: "Premium Weed" },
  { href: "/aaa-weed", label: "AAA+ Weed" },
  { href: "/aa-weed", label: "AA Weed" },
  { href: "/budget-weed", label: "Budget Weed" },
] as const;
