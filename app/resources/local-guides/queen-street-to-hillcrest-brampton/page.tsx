import type { Metadata } from "next";
import { GeneratedGuidePage } from "../../../components/GeneratedGuidePage";

export const metadata: Metadata = {
  title: "Queen Street to Hillcrest Kennedy | Brampton Visit Guide",
  description: "Plan a trip from Queen Street to Kennedy Loud Cannabis at 49 Hillcrest Ave Unit 104 in Brampton.",
  alternates: { canonical: "/resources/local-guides/queen-street-to-hillcrest-brampton" },
};

export default function Page() {
  return <GeneratedGuidePage guideKey="Queen Street to Hillcrest / Kennedy" eyebrow="Brampton route guide" h1="Coming From Queen Street to the Hillcrest / Kennedy Dispensary" />;
}

