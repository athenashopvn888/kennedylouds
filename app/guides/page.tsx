import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { getGuidesByLane, type GuideLane } from "../lib/guideRegistry";
import styles from "./guides.module.css";

const SITE = "https://kennedyloudcannabis.com";
const CANONICAL = `${SITE}/guides`;

export const metadata: Metadata = {
  title: { absolute: "Guides | Kennedy Loud Cannabis" },
  description:
    "Browse Kennedy Loud Cannabis name guides for strains, Native Cigarettes, Nicotine Vape, and THC Vape, with links to today's menu categories.",
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
};

const lanes: { lane: GuideLane; title: string; description: string; categoryPath: string; categoryLabel: string }[] = [
  {
    lane: "strain",
    title: "Strains",
    description: "Find a flower name, then use its guide to reach the current flower listing or the right tier board when that name rotates.",
    categoryPath: "/#menu",
    categoryLabel: "View flower tiers",
  },
  {
    lane: "native_cig",
    title: "Native Cigarettes",
    description: "Check cigarette names and variants without treating an evergreen guide as a promise of today's counter stock.",
    categoryPath: "/items/cigarettes",
    categoryLabel: "View today's cigarette board",
  },
  {
    lane: "nic_vape",
    title: "Nicotine Vape",
    description: "Browse nicotine-device names on their own shelf, clearly separated from cannabis vape products.",
    categoryPath: "/items/vapes",
    categoryLabel: "View today's nicotine vape board",
  },
  {
    lane: "thc_vape",
    title: "THC Vape",
    description: "Browse cannabis vape names on the THC Vape shelf, separate from nicotine devices and their guides.",
    categoryPath: "/items/vape-disposables",
    categoryLabel: "View today's THC vape board",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: "Guides | Kennedy Loud Cannabis",
      description: "Kennedy Loud Cannabis name guides organized by shopping lane.",
      isPartOf: { "@id": `${SITE}/#website` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Guides", item: CANONICAL },
      ],
    },
  ],
};

export default function GuidesPage() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <article>
        <header className={styles.hero}>
          <div className={styles.shell}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Guides</span>
            </nav>
            <span className={styles.eyebrow}>Kennedy Loud name guides</span>
            <h1>Guides | Kennedy Loud Cannabis</h1>
            <p>
              Start with the name you recognize, confirm its shelf, and continue to today&apos;s menu. These guides keep
              Strains, Native Cigarettes, Nicotine Vape, and THC Vape in separate lanes so similar names and formats do
              not blur together.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primary} href="/#menu">Open the live menu</Link>
              <Link className={styles.secondary} href="/resources">Browse store resources</Link>
            </div>
          </div>
        </header>

        <section className={`${styles.shell} ${styles.intro}`} aria-labelledby="how-to-use-guides">
          <h2 id="how-to-use-guides">Use a stable name route, then check today&apos;s board</h2>
          <p>
            A guide explains where a name belongs and links to the closest current menu path. Products can rotate, so
            an older name page is not an availability claim. When an exact listing is not on the menu, the guide sends
            you softly to its category or flower tier instead of inventing a product page.
          </p>
        </section>

        <div className={`${styles.shell} ${styles.lanes}`}>
          {lanes.map((lane) => {
            const guides = getGuidesByLane(lane.lane);
            return (
              <section key={lane.lane} className={styles.lane} aria-labelledby={`${lane.lane}-heading`}>
                <div className={styles.laneHeader}>
                  <div>
                    <span>{guides.length} name guides</span>
                    <h2 id={`${lane.lane}-heading`}>{lane.title}</h2>
                    <p>{lane.description}</p>
                  </div>
                  <Link href={lane.categoryPath}>{lane.categoryLabel}</Link>
                </div>
                <div className={styles.guideGrid}>
                  {guides.map((guide) => (
                    <Link key={guide.slug} href={`/guides/${guide.slug}`} className={styles.guideCard}>
                      <strong>{guide.name}</strong>
                      <span>Read {lane.title} guide</span>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <aside className={`${styles.shell} ${styles.finalCta}`}>
          <h2>Shopping today?</h2>
          <p>Use the current menu for published listings and the visit page for Kennedy Loud store information.</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/#menu">Check today&apos;s menu</Link>
            <Link className={styles.secondary} href="/visit">Plan your visit</Link>
          </div>
        </aside>
      </article>
      <Footer />
    </main>
  );
}
