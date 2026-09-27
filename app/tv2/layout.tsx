import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kennedy Loud In-Store Accessories Display",
  description: "Operational in-store accessories menu display for Kennedy Loud Cannabis.",
  robots: { index: false, follow: false },
};

export default function TvTwoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
