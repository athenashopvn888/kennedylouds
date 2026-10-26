import { Metadata } from "next";
import { GBPLandingPage } from "@/app/components/GBPLandingPage";
import { gbpLocation } from "@/app/lib/gbp-location";
import { HILLCREST_WEED_DISPENSARY } from "@/app/lib/hillcrestWeedDispensary";

export const metadata: Metadata = {
  title: { absolute: gbpLocation.seoTitle },
  description: gbpLocation.metaDescription,
  alternates: {
    canonical: HILLCREST_WEED_DISPENSARY.canonical,
  },
  openGraph: {
    title: gbpLocation.seoTitle,
    description: gbpLocation.metaDescription,
    url: HILLCREST_WEED_DISPENSARY.canonical,
    siteName: gbpLocation.storeName,
  },
  twitter: {
    card: "summary_large_image",
    title: gbpLocation.seoTitle,
    description: gbpLocation.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <GBPLandingPage />;
}
