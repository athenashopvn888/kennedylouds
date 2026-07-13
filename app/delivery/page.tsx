import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Updates - Kennedy Loud Cannabis | Brampton",
  description:
    "Kennedy Loud Cannabis delivery updates for Brampton shoppers. Check this page for local delivery information as details are prepared.",
  alternates: {
    canonical: "https://kennedyloudcannabis.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
