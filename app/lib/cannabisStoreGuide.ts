import { NAP } from "./gbp-location";

export const CANNABIS_STORE_GUIDE = {
  path: "/cannabis-store-brampton",
  canonical: `${NAP.website.replace(/\/$/, "")}/cannabis-store-brampton`,
  title: "Cannabis Store Brampton | Kennedy / Queen / Main",
  h1: "Central Brampton Cannabis Store Guide (Kennedy / Queen / Main)",
  metaDescription:
    "Cannabis store Brampton at 49 Hillcrest Ave Unit 104: Kennedy Loud on the Kennedy / Queen / Main corridors. Open 24 Hours. Call +1 (289) 206-1181.",
  eyebrow: "Central Brampton cannabis store · Adults 19+",
  primaryKeyword: "cannabis store brampton",
} as const;

export const CANNABIS_STORE_FAQS = [
  {
    q: "Where is the Kennedy Loud cannabis store in Brampton?",
    a: `Kennedy Loud Cannabis is the walk-in cannabis store in Brampton at ${NAP.address}. Pin Unit 104 on Hillcrest Ave, on the Kennedy Road side of central Brampton — not a generic downtown drop.`,
  },
  {
    q: "Is Kennedy Loud the Brampton dispensary on Queen Street West?",
    a: "No. Kennedy Loud Cannabis is the Hillcrest Ave / Kennedy Road shop at 49 Hillcrest Ave Unit 104. Queen Street West downtown is a different licensed door. Keep this guide for the Unit 104 pin.",
  },
  {
    q: "Which corridors does this Brampton dispensary serve?",
    a: "Kennedy Loud is the central Brampton cannabis store for shoppers arriving along Kennedy Road, Queen Street, and Main Street. Those streets are routes into Hillcrest Ave. The counter is still Unit 104.",
  },
  {
    q: "What are the hours at Kennedy Loud Cannabis?",
    a: `Listed hours are ${NAP.hours}. A cannabis Brampton or Brampton dispensary search can still point here because the Hillcrest shop is listed 24 hours. Call ${NAP.phone} if you need the door talked through.`,
  },
  {
    q: "Do I need an appointment at this cannabis store in Brampton?",
    a: "No appointment is required. Bring valid government-issued photo ID. Kennedy Loud Cannabis serves adults 19+. Check the homepage menu before a special-item trip.",
  },
] as const;

export const CANNABIS_STORE_INTERNAL_LINKS = [
  { href: "/", label: "Homepage NAP and menu" },
  { href: "/weed-dispensary-brampton/", label: "Hillcrest / Kennedy weed dispensary" },
  { href: "/visit", label: "How to find Unit 104" },
  { href: "/24-hour-dispensary-brampton", label: "24-hour / open-now FAQ" },
  { href: "/exotic-weed", label: "Exotic Weed" },
  { href: "/premium-weed", label: "Premium Weed" },
  { href: "/aaa-weed", label: "AAA+ Weed" },
  { href: "/aa-weed", label: "AA Weed" },
  { href: "/budget-weed", label: "Budget Weed" },
  { href: "/cannabis-delivery-hillcrest-brampton", label: "Hillcrest / Kennedy delivery" },
  { href: "/faq", label: "Store FAQ" },
  { href: "/contact", label: "Contact and hours" },
] as const;
