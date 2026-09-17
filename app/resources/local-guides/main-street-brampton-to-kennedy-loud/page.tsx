import type { Metadata } from "next";
import { GeneratedGuidePage } from "../../../components/GeneratedGuidePage";

export const metadata: Metadata = {
  title: "Main Street Brampton to Kennedy Loud | Visit Guide",
  description: "Plan a trip from Main Street and Garden Square to Kennedy Loud Cannabis at 49 Hillcrest Ave Unit 104.",
  alternates: { canonical: "/resources/local-guides/main-street-brampton-to-kennedy-loud" },
};

export default function Page() {
  return <GeneratedGuidePage guideKey="Main Street / Garden Square to Hillcrest" eyebrow="Downtown Brampton route guide" h1="Main Street Brampton to Kennedy Loud on Hillcrest" />;
}

