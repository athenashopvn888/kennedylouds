import { Metadata } from "next";
import { GBPLandingPage } from "@/app/components/GBPLandingPage";
import { gbpLocation } from "@/app/lib/gbp-location";

export const metadata: Metadata = {
  title: { absolute: "Weed Dispensary in Brampton | Kennedy Loud Cannabis" },
  description:
    "Kennedy Loud Cannabis is a weed dispensary in Brampton at 49 Hillcrest Ave Unit 104, open 24 hours. Adults 19+ can browse cannabis categories and plan a visit.",
  alternates: {
    canonical: `https://${gbpLocation.domain}/${gbpLocation.slug}/`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <GBPLandingPage />;
}
