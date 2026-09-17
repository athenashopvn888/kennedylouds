import type { Metadata } from "next";
import { AreaIntentPage } from "../components/AreaIntentPage";

export const metadata: Metadata = {
  title: "Kennedy Road Brampton Dispensary | Kennedy Loud Cannabis 24/7",
  description: "Walk-in Brampton dispensary at 49 Hillcrest Ave Unit 104, near Kennedy Rd. Open 24/7. Flower from $3/g. Call (289) 206-1181. Adults 19+.",
  alternates: { canonical: "/weed-dispensary-brampton-kennedy" },
};

export default function Page() {
  return <AreaIntentPage eyebrow="Kennedy Road and Hillcrest" h1="Brampton Weed Dispensary on the Kennedy Road Corridor" addressLine="49 Hillcrest Ave Unit 104, Brampton, ON L6W 1Y7" storeHref="/contact" storeLabel="Contact and Directions" intro={[
    "Kennedy Loud Cannabis is the walk-in Brampton dispensary at 49 Hillcrest Avenue, Unit 104. The store sits on the Kennedy Road corridor rather than on Queen Street West. That distinction matters: Kennedy Loud serves Hillcrest, Kennedy, and the blocks that feed Downtown Brampton from the south and east.",
    "The counter is open 24 hours. Adults 19+ can compare five posted flower tiers from Budget through Exotic, along with separate pages for vapes, edibles, concentrates, pre-rolls, cigarettes, and accessories.",
    "Use the current category pages before travelling. Call +1 (289) 206-1181 if one listed item is the reason for your visit because product availability and posted prices can change.",
  ]} />;
}
