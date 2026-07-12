import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { RESOURCE_BANNER, RESOURCE_CANONICAL, RESOURCE_PAGES } from "./resourceData";
import styles from "./resources.module.css";

export const metadata: Metadata = {
  title: "Kennedy Loud Cannabis Resources | Brampton Menu And Visit Guides",
  description: "Kennedy Loud Cannabis resources for Hillcrest Ave visits, flower tiers, vapes, concentrates, cigarettes, and 24-hour Brampton shopping.",
  alternates: { canonical: RESOURCE_CANONICAL },
};

export default function ResourcesPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.hero}>
        <img src={RESOURCE_BANNER} alt="Kennedy Loud Cannabis resource hub" className={styles.heroImage} />
        <div className={styles.heroText}>
          <span className={styles.eyebrow}>KLC resource hub</span>
          <h1>Kennedy Loud Cannabis Resources</h1>
          <p>Hillcrest Ave visit planning, loud flower tiers, format shortcuts, and Brampton menu paths in one place.</p>
        </div>
      </section>
      <section className={styles.gridWrap}>
        <div className={styles.grid}>
          {RESOURCE_PAGES.map((page) => (
            <Link key={page.slug} href={`/resources/${page.slug}`} className={styles.card}>
              <span>{page.eyebrow}</span>
              <h2>{page.title}</h2>
              <p>{page.summary}</p>
              <b>Read guide</b>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
