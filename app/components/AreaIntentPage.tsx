import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "./GBPLandingPage.module.css";
import { NAP } from "../lib/gbp-location";

export type AreaIntentPageProps = {
  eyebrow: string;
  h1: string;
  addressLine: string;
  intro: string[];
  sections?: Array<{ heading: string; paragraphs: string[] }>;
  storeHref: string;
  storeLabel: string;
  menuHref?: string;
  mapAddress?: string;
  faq?: string;
  relatedLinks?: Array<{ href: string; label: string }>;
};

export function AreaIntentPage({
  eyebrow,
  h1,
  addressLine,
  intro,
  sections = [],
  storeHref,
  storeLabel,
  menuHref = "/",
  mapAddress,
  faq,
  relatedLinks = [],
}: AreaIntentPageProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine)}`;

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.h1}>{h1}</h1>
          <p className={styles.heroAddress}>{addressLine}</p>
          <p className={styles.heroHours}>{NAP.hours} · Adults 19+</p>
          <p className={styles.heroPhone}>
            <a href={`tel:${NAP.phoneIntl}`}>{NAP.phone}</a>
          </p>
          <div className={styles.actions}>
            <Link href={menuHref} className={styles.primaryAction}>Check the Current Menu</Link>
            <Link href={storeHref} className={styles.secondaryAction}>{storeLabel}</Link>
            <a href={mapsUrl} className={styles.secondaryAction} target="_blank" rel="noreferrer">Directions</a>
          </div>
        </section>
        <section className={styles.section}>
          {intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
        {sections.map((section) => (
          <section className={styles.section} key={section.heading}>
            <h2 className={styles.h2}>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
        {mapAddress ? (
          <section className={styles.section}>
            <h2 className={styles.h2}>Map and Address</h2>
            <p>{mapAddress}</p>
            <p><a href={mapsUrl} target="_blank" rel="noreferrer">Open this destination in Google Maps</a></p>
            <p>Phone: <a href={`tel:${NAP.phoneIntl}`}>{NAP.phone}</a> · {NAP.hours}</p>
          </section>
        ) : null}
        {faq ? (
          <section className={styles.section}>
            <h2 className={styles.h2}>Frequently Asked Question</h2>
            <p>{faq}</p>
          </section>
        ) : null}
        {relatedLinks.length ? (
          <section className={styles.section}>
            <h2 className={styles.h2}>Explore the Current Flower Tiers</h2>
            <p>{relatedLinks.map((link, index) => <span key={link.href}>{index ? " · " : ""}<Link href={link.href}>{link.label}</Link></span>)}</p>
          </section>
        ) : null}
        <section className={styles.section}>
          <h2 className={styles.h2}>Before You Travel</h2>
          <p>Adults 19+ only. Bring valid government photo ID. Product listings and posted prices can change, so use the current menu and call {NAP.phone} when one specific item is the reason for the trip.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
