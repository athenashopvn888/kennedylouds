import { Metadata } from "next";
import { GBPLandingPage } from "@/app/components/GBPLandingPage";
import { gbpLocation } from "@/app/lib/gbp-location";

export const metadata: Metadata = {
  title: { absolute: gbpLocation.seoTitle },
  description: gbpLocation.metaDescription,
  alternates: {
    canonical: `https://${gbpLocation.domain}/${gbpLocation.slug}/`,
  },
  openGraph: {
    title: gbpLocation.seoTitle,
    description: gbpLocation.metaDescription,
    url: `https://${gbpLocation.domain}/${gbpLocation.slug}/`,
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
