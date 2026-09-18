import { NAP } from "./gbp-location";

export const VISIT_GUIDE = {
  path: "/visit",
  canonical: `${NAP.website.replace(/\/$/, "")}/visit`,
  title: "How to Find Kennedy Loud at 49 Hillcrest Ave Unit 104",
  h1: "How to Find Kennedy Loud at 49 Hillcrest Ave Unit 104 (Central Brampton Walk-In)",
  metaDescription:
    "Dispensary near me in central Brampton: Kennedy Loud walk-in at 49 Hillcrest Ave Unit 104, ON L6W 1Y7. Open 24 Hours. Call +1 (289) 206-1181.",
  eyebrow: "Central Brampton walk-in · Adults 19+",
  primaryKeyword: "dispensary near me",
} as const;

export const VISIT_FAQS = [
  {
    q: "Is there a dispensary near me in central Brampton?",
    a: `Kennedy Loud Cannabis is the walk-in dispensary at ${NAP.address}. Use Unit 104 as the map pin, not a generic Brampton cannabis search.`,
  },
  {
    q: "Is the Kennedy Loud Brampton dispensary open now?",
    a: `The listed hours are ${NAP.hours}. If a search for a dispensary near me or a dispensary Brampton open result shows this shop, the hours on this page match that 24-hour listing. Call ${NAP.phone} if you need the door talked through before you arrive.`,
  },
  {
    q: "How do I find Unit 104 at 49 Hillcrest Ave?",
    a: "49 Hillcrest Ave is a multi-unit address. Look for posted unit numbers or the building directory and finish at Unit 104. If the door is not obvious from the street, call +1 (289) 206-1181 rather than guessing another unit.",
  },
  {
    q: "What should I bring to this cannabis store near me?",
    a: "Bring valid government-issued photo ID. Kennedy Loud serves adults 19+. No appointment is required for a walk-in. Confirm current menu details on the homepage before a special-item trip.",
  },
  {
    q: "How do I get to Kennedy Loud from Kennedy Road or Queen Street?",
    a: "From Kennedy Road, stay on the Kennedy corridor until Hillcrest Ave, then pin Unit 104. From Queen Street or Main Street, set the destination to 49 Hillcrest Ave Unit 104 instead of a generic downtown dispensary pin.",
  },
] as const;

export const VISIT_INTERNAL_LINKS = [
  { href: "/", label: "Homepage NAP and menu" },
  { href: "/weed-dispensary-brampton/", label: "Brampton dispensary landing" },
  { href: "/cannabis-store-brampton", label: "Central Brampton cannabis store" },
  { href: "/info/native-cigarettes-brampton", label: "Native Cigarettes Brampton" },
  { href: "/resources/local-guides/queen-street-to-hillcrest-brampton", label: "Queen Street to Hillcrest" },
  { href: "/resources/local-guides/zum-kennedy-dispensary", label: "Kennedy Road transit" },
  { href: "/contact", label: "Contact and hours" },
] as const;
