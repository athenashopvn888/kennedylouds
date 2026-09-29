import { HOME_TITLE } from "./lib/homeDelivery";
import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

const TITLE = "Kennedy Loud Cannabis | 24 Hour Weed Dispensary Brampton";
const DESCRIPTION =
  "Kennedy Loud Cannabis is a 24-hour weed dispensary at 49 Hillcrest Ave Unit 104, Brampton, near Kennedy Rd. Flower, vapes, edibles. Call +1 (289) 206-1181. Adults 19+.";

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: "https://kennedyloudcannabis.com",
  },
  openGraph: {
    title: HOME_TITLE,
    description: DESCRIPTION,
    url: "https://kennedyloudcannabis.com",
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: DESCRIPTION,
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
