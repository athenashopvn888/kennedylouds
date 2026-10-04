import type { Metadata } from "next";
import TvReviewQr from "../TvReviewQr";

export const metadata: Metadata = {
  title: "Kennedy Loud In-Store Flower Display",
  description: "Operational in-store flower menu display for Kennedy Loud Cannabis.",
  robots: { index: false, follow: false },
};

export default function TvLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <TvReviewQr storeName="Kennedy Loud Cannabis" />
    </>
  );
}
