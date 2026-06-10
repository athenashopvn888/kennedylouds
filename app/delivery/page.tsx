import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — Kennedy Loud Cannabis | Brampton",
  description: "Get notified when Kennedy Loud Cannabis launches same-day weed delivery across Brampton and surrounding areas.",
  alternates: {
    canonical: "https://kennedyloudcannabis.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
