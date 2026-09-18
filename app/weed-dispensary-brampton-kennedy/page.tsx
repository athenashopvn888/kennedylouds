import type { Metadata } from "next";
import { AreaIntentPage } from "../components/AreaIntentPage";
import { NAP } from "../lib/gbp-location";

export const metadata: Metadata = {
  title: { absolute: "Kennedy Road Weed Dispensary | Open 24 Hours | Brampton" },
  description:
    "Kennedy Loud Cannabis is the 24-hour weed dispensary at 49 Hillcrest Ave Unit 104 in Brampton, on the Kennedy Road corridor. Call +1 (289) 206-1181. Adults 19+.",
  alternates: { canonical: "/weed-dispensary-brampton-kennedy" },
  openGraph: {
    title: "Kennedy Road Weed Dispensary | Open 24 Hours | Brampton",
    description:
      "Walk-in Brampton dispensary on the Kennedy Road corridor at 49 Hillcrest Ave Unit 104. Open 24 hours. Adults 19+.",
  },
};

export default function Page() {
  return (
    <AreaIntentPage
      eyebrow="Kennedy Road and Hillcrest Ave"
      h1="Kennedy Road Weed Dispensary in Brampton"
      addressLine={NAP.address}
      storeHref="/weed-dispensary-brampton/"
      storeLabel="Brampton visit details"
      intro={[
        "Kennedy Loud Cannabis is the walk-in Brampton dispensary at 49 Hillcrest Ave Unit 104. The counter sits on the Hillcrest Ave / Kennedy Road side of central Brampton — not a Queen Street West downtown door.",
        "The store is Open 24 Hours. Adults 19+ can compare five posted flower tiers from Budget through Exotic, plus separate pages for vapes, edibles, concentrates, pre-rolls, cigarettes, and accessories.",
        `Use the current category pages before travelling. Call ${NAP.phone} if one listed item is the reason for your visit, because product availability and posted prices can change.`,
      ]}
      mapAddress={NAP.address}
      faq={`Kennedy Loud Cannabis is at ${NAP.address}. Open 24 Hours. Adults 19+ with valid government photo ID.`}
      relatedLinks={[
        { href: "/visit", label: "Find Unit 104" },
        { href: "/24-hour-dispensary-brampton", label: "24-hour / open-now FAQ" },
        { href: "/cannabis-store-brampton", label: "Central Brampton cannabis store" },
        { href: "/weed-dispensary-brampton/", label: "Hillcrest / Kennedy weed dispensary" },
        { href: "/cannabis-delivery-hillcrest-brampton", label: "Hillcrest / Kennedy delivery" },
        { href: "/exotic-weed", label: "Exotic Weed" },
        { href: "/premium-weed", label: "Premium Weed" },
        { href: "/aaa-weed", label: "AAA+ Weed" },
        { href: "/aa-weed", label: "AA Weed" },
        { href: "/budget-weed", label: "Budget Weed" },
      ]}
    />
  );
}
