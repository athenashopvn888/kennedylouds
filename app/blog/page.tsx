import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Cannabis Blog & Guides — Kennedy Loud Cannabis | Brampton",
  description: "Read the latest strain reviews, dosing guides, and cannabis news from Kennedy Loud Cannabis in Brampton.",
  alternates: {
    canonical: "https://kennedyloudcannabis.com/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
