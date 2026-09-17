import type { Metadata } from "next";
import { GeneratedGuidePage } from "../../../components/GeneratedGuidePage";

export const metadata: Metadata = {
  title: "Züm and Kennedy Road Transit | Kennedy Loud Cannabis",
  description: "Plan a current transit trip along the Kennedy corridor to Kennedy Loud Cannabis at 49 Hillcrest Ave Unit 104.",
  alternates: { canonical: "/resources/local-guides/zum-kennedy-dispensary" },
};

export default function Page() {
  return <GeneratedGuidePage guideKey="Züm / Kennedy corridor to Unit 104" eyebrow="Kennedy Road transit guide" h1="Züm and Kennedy Road Transit to Kennedy Loud Cannabis" />;
}

