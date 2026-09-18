import { NAP } from "./gbp-location";

export const HILLCREST_DELIVERY = {
  path: "/cannabis-delivery-hillcrest-brampton",
  canonical: `${NAP.website.replace(/\/$/, "")}/cannabis-delivery-hillcrest-brampton`,
  title: "Hillcrest / Kennedy Cannabis Delivery | Kennedy Loud",
  h1: "Hillcrest / Kennedy Cannabis Delivery in Central Brampton",
  metaDescription:
    "Cannabis delivery from Kennedy Loud at 49 Hillcrest Ave Unit 104, central Brampton. Dispatcher confirms hours — not 24/7. Call +1 (289) 206-1181. Adults 19+.",
  eyebrow: "Hillcrest / Kennedy delivery · Adults 19+",
  catalogHref: "/delivery",
  liveOrderHref: "/delivery?liveOrder=1",
  minimum: "$60 product minimum",
  walkInHours: NAP.hours,
  deliveryHours:
    "Confirmed by the Kennedy Loud dispatcher before an order is accepted — not listed as 24/7",
} as const;

export const HILLCREST_DELIVERY_FAQS = [
  {
    q: "Does Kennedy Loud deliver cannabis around Hillcrest / Kennedy in central Brampton?",
    a: `Yes. Kennedy Loud Cannabis runs cannabis delivery from ${NAP.address}. This page is the Hillcrest Ave / Kennedy Road delivery pin — not a Queen Street West downtown door. The dispatcher confirms whether a specific drop is in range.`,
  },
  {
    q: "What are Kennedy Loud delivery hours versus the 24-hour walk-in?",
    a: `The Unit 104 walk-in lists ${NAP.hours}. Delivery is a separate channel. The live delivery menu does not publish a 24/7 delivery clock; the dispatcher confirms current availability and delivery details before an order is accepted.`,
  },
  {
    q: "How do I order Hillcrest cannabis delivery from Kennedy Loud?",
    a: "Browse the delivery catalog, note product names and weights, then start LIVE ORDER in Web Chat. New customers complete a private selfie-with-ID step. The dispatcher confirms availability, the drop, and next steps. There is a $60 product minimum.",
  },
  {
    q: "Is this the Queen Street West downtown cannabis delivery shop?",
    a: `No. Kennedy Loud Cannabis delivers from the Hillcrest Ave / Kennedy Road walk-in at ${NAP.address}. Queen Street West downtown is a different licensed door. Keep this page for Unit 104.`,
  },
  {
    q: "Can I still walk in if I do not want delivery?",
    a: `Yes. The counter at ${NAP.address} lists ${NAP.hours} for walk-in, with no appointment. Bring valid 19+ government photo ID. Call ${NAP.phone} if you need the Unit 104 door talked through.`,
  },
  {
    q: "What is the Kennedy Loud delivery minimum?",
    a: "The posted delivery catalog lists a $60 product minimum. The dispatcher confirms current availability, the drop, and any other details before an order is accepted.",
  },
] as const;

export const HILLCREST_DELIVERY_INTERNAL_LINKS = [
  { href: "/", label: "Homepage NAP and menu" },
  { href: "/visit", label: "How to find Unit 104" },
  { href: "/24-hour-dispensary-brampton", label: "24-hour / open-now FAQ" },
  { href: "/cannabis-store-brampton", label: "Central Brampton cannabis store" },
  { href: "/weed-dispensary-brampton/", label: "Hillcrest / Kennedy weed dispensary" },
  { href: "/delivery", label: "Delivery catalog / LIVE ORDER" },
  { href: "/exotic-weed", label: "Exotic Weed" },
  { href: "/premium-weed", label: "Premium Weed" },
  { href: "/aaa-weed", label: "AAA+ Weed" },
  { href: "/aa-weed", label: "AA Weed" },
  { href: "/budget-weed", label: "Budget Weed" },
] as const;
