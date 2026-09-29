import { NAP } from "./gbp-location";

export const OPEN_NOW_FAQ = {
  path: "/24-hour-dispensary-brampton",
  canonical: `${NAP.website.replace(/\/$/, "")}/24-hour-dispensary-brampton`,
  title: "24-Hour Hillcrest Dispensary FAQ | Open Now",
  h1: "24-Hour / Open-Now Hillcrest / Kennedy Dispensary FAQ",
  metaDescription:
    "24 hour dispensary Brampton at 49 Hillcrest Ave Unit 104, Hillcrest / Kennedy. Open 24 Hours walk-in. Call +1 (289) 206-1181. Adults 19+.",
  eyebrow: "Hillcrest / Kennedy · Open 24 Hours · Adults 19+",
  primaryKeyword: "24 hour dispensary brampton",
  hillcrestAlias: "/24-hour-hillcrest-brampton-dispensary",
  hours: NAP.hours,
} as const;

export const OPEN_NOW_FAQS = [
  {
    q: "Is there a 24 hour dispensary in Brampton?",
    a: `Yes. Kennedy Loud Cannabis at ${NAP.address} lists ${NAP.hours}. That is the hours fact used on this page — a 24 hour dispensary Brampton walk-in, not a city-wide chain claim.`,
  },
  {
    q: "Is a dispensary Brampton open right now?",
    a: `Kennedy Loud lists ${NAP.hours}, so a “dispensary Brampton open” or “open now” search can still point here at any hour. Open now follows the listed hours. It does not guarantee one named flower, vape, or cigarette is on the shelf at that minute.`,
  },
  {
    q: "Is there a 24 hour dispensary near me that is open now?",
    a: `If you are in central Brampton near Hillcrest Ave and Kennedy Road, this is the 24 hour dispensary near me pin: ${NAP.address}. The listed hours are ${NAP.hours}, so “open now” matches the 24-hour listing.`,
  },
  {
    q: "Is there a 24 hour dispensary open near me after dark?",
    a: `Kennedy Loud is listed ${NAP.hours}, seven days. A late-night “24 hour dispensary open near me” search should still finish at Unit 104. Bring valid 19+ ID. Call ${NAP.phone} if the multi-unit entrance is not obvious.`,
  },
  {
    q: "Is Kennedy Loud a cannabis store near me open now?",
    a: `Yes, when you mean the Hillcrest Ave walk-in. Kennedy Loud Cannabis is the cannabis store near me open now at Unit 104 because the listed hours are ${NAP.hours}. Set the map to ${NAP.address}, not a generic Brampton cannabis pin.`,
  },
  {
    q: "Do I need an appointment for a 24 hour dispensary Brampton visit?",
    a: "No appointment is required. Walk in with valid government-issued photo ID. Kennedy Loud serves adults 19 and older.",
  },
  {
    q: "Is the 24-hour Hillcrest / Kennedy dispensary on Queen Street West?",
    a: `No. The listed ${NAP.hours} walk-in is Kennedy Loud Cannabis at ${NAP.address}. Queen Street West downtown is a different licensed door. Keep this FAQ for Unit 104.`,
  },
  {
    q: "Does Open 24 Hours include Hillcrest cannabis delivery?",
    a: `${NAP.hours} describes the Unit 104 door. Cannabis delivery from Hillcrest / Kennedy is a separate channel. The dispatcher confirms delivery hours before an order is accepted — delivery is not listed as 24/7.`,
  },
  {
    q: "Can I buy native cigarettes or nicotine vape at the 24-hour Hillcrest counter?",
    a: `The walk-in at ${NAP.address} lists ${NAP.hours}. Native cigarettes and nicotine vape are sold categories at this Hillcrest / Kennedy counter. Open now describes the door, not a guarantee that one named cigarette or vape is on the shelf at that minute.`,
  },
] as const;

export const OPEN_NOW_INTERNAL_LINKS = [
  { href: "/", label: "Homepage NAP and map" },
  { href: "/weed-dispensary-brampton/", label: "Hillcrest / Kennedy weed dispensary" },
  { href: "/visit", label: "Unit 104 walk-in guide" },
  { href: "/cannabis-store-brampton", label: "Central Brampton cannabis store" },
  { href: "/exotic-weed", label: "Exotic Weed" },
  { href: "/premium-weed", label: "Premium Weed" },
  { href: "/aaa-weed", label: "AAA+ Weed" },
  { href: "/aa-weed", label: "AA Weed" },
  { href: "/budget-weed", label: "Budget Weed" },
  { href: "/cannabis-delivery-hillcrest-brampton", label: "Hillcrest / Kennedy delivery" },
  { href: "/native-cigarettes-hillcrest-brampton", label: "Hillcrest / Kennedy native cigarettes" },
  { href: "/nicotine-vape-kennedy-brampton", label: "Kennedy / Hillcrest nicotine vape" },
] as const;
