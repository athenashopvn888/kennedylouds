import type { Metadata } from "next";
import { GeneratedGuidePage } from "../../../components/GeneratedGuidePage";

export const metadata: Metadata = {
  title: { absolute: "Kennedy Road Transit to Brampton Weed Dispensary | Open 24 Hours" },
  description: "Plan a Kennedy Road / Züm trip to Kennedy Loud Cannabis at 49 Hillcrest Ave Unit 104 in Brampton. Open 24 Hours. Adults 19+.",
  alternates: { canonical: "/resources/local-guides/zum-kennedy-dispensary" },
};

export default function Page() {
  return <GeneratedGuidePage guideKey="Züm / Kennedy corridor to Unit 104" eyebrow="Kennedy Road transit guide" h1="Züm and Kennedy Road Transit to Kennedy Loud Cannabis" />;
}

