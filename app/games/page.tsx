import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games — Kennedy Loud Cannabis | Brampton",
  description: "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at Kennedy Loud Cannabis.",
  alternates: {
    canonical: "https://kennedyloudcannabis.com/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
