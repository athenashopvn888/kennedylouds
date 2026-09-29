import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ParityHubNav } from "../components/ParityHubNav";
import styles from "../components/GBPLandingPage.module.css";
import { NAP, gbpLocation } from "../lib/gbp-location";
import {
  KENNEDY_NICOTINE_VAPE,
  KENNEDY_NICOTINE_VAPE_FAQS,
  KENNEDY_NICOTINE_VAPE_INTERNAL_LINKS,
} from "../lib/kennedyNicotineVape";

export const metadata: Metadata = {
  title: { absolute: KENNEDY_NICOTINE_VAPE.title },
  description: KENNEDY_NICOTINE_VAPE.metaDescription,
  alternates: {
    canonical: KENNEDY_NICOTINE_VAPE.canonical,
  },
  openGraph: {
    title: KENNEDY_NICOTINE_VAPE.title,
    description: KENNEDY_NICOTINE_VAPE.metaDescription,
    url: KENNEDY_NICOTINE_VAPE.canonical,
    siteName: NAP.storeName,
  },
  twitter: {
    card: "summary_large_image",
    title: KENNEDY_NICOTINE_VAPE.title,
    description: KENNEDY_NICOTINE_VAPE.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KennedyNicotineVapePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: KENNEDY_NICOTINE_VAPE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: NAP.website },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kennedy / Hillcrest nicotine vape",
        item: KENNEDY_NICOTINE_VAPE.canonical,
      },
    ],
  };

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: KENNEDY_NICOTINE_VAPE.h1,
    url: KENNEDY_NICOTINE_VAPE.canonical,
    description: KENNEDY_NICOTINE_VAPE.metaDescription,
    isPartOf: { "@type": "WebSite", name: NAP.storeName, url: NAP.website },
    about: {
      "@type": "CannabisStore",
      "@id": `${NAP.website}#store`,
      name: NAP.storeName,
      url: NAP.website,
      telephone: NAP.phoneIntl,
      address: {
        "@type": "PostalAddress",
        streetAddress: NAP.streetAddress,
        addressLocality: NAP.city,
        addressRegion: NAP.province,
        postalCode: NAP.postalCode,
        addressCountry: NAP.country,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqJsonLd, breadcrumbJsonLd, pageJsonLd]).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main className={styles.page}>
        <div className={styles.container}>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>{KENNEDY_NICOTINE_VAPE.eyebrow}</p>
            <h1 className={styles.h1}>{KENNEDY_NICOTINE_VAPE.h1}</h1>
            <p className={styles.heroTagline}>{NAP.address}</p>
            <p className={styles.heroHours}>
              Walk-in {KENNEDY_NICOTINE_VAPE.hours} · Adults 19+ · Nicotine is addictive
            </p>
            <p className={styles.heroPhone}>
              <a href={`tel:${NAP.phoneIntl}`}>{NAP.phone}</a>
            </p>
            <div className={styles.areaList}>
              {["Kennedy Road", "Hillcrest Ave", "Unit 104", "Central Brampton", "Adults 19+"].map((area) => (
                <span key={area} className={styles.areaTag}>
                  {area}
                </span>
              ))}
            </div>
          </header>

          <div className={styles.btnRow}>
            <Link href={KENNEDY_NICOTINE_VAPE.menuHref} className={`${styles.btn} ${styles.btnPrimary}`}>
              Current Nic Vape menu
            </Link>
            <Link href="/visit" className={`${styles.btn} ${styles.btnSecondary}`}>
              Find Unit 104
            </Link>
            <a href={`tel:${NAP.phoneIntl}`} className={`${styles.btn} ${styles.btnTertiary}`}>
              Call Store
            </a>
          </div>

          <section className={styles.section}>
            <h2 className={styles.h2}>Kennedy / Hillcrest nicotine vape counter</h2>
            <p className={styles.introText}>
              Nicotine vape at Kennedy Loud Cannabis is sold at one licensed counter: {NAP.address}. This is the
              Kennedy Road / Hillcrest Ave shop in central Brampton — not a Queen Street West downtown door. Queen
              Street and Main Street can be useful starting corridors into central Brampton; they are not this
              shop’s nicotine-vape pin.
            </p>
            <p className={styles.infoText}>
              Adults 19+ only. Nicotine is addictive. This page is neighbourhood-scoped menu navigation. It does
              not rank devices, invent reviews, or make medical claims. Keep nicotine vape on the{" "}
              <Link href={KENNEDY_NICOTINE_VAPE.menuHref}>Nic Vape category</Link>. Keep cannabis vape on the{" "}
              <Link href={KENNEDY_NICOTINE_VAPE.thcVapeHref}>THC Vape category</Link>.
            </p>
            <p className={styles.infoText}>
              The store listing website stays on the homepage:{" "}
              <a href={NAP.website}>{NAP.website}</a>. Use that hub for the live walk-in menu, then open this
              Kennedy / Hillcrest nicotine-vape page when the trip is about the Nic Vape counter at Unit 104.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>How to shop nicotine vape at Unit 104</h2>
            <p className={styles.infoText}>
              Walk-in is the default. The Unit 104 door lists {KENNEDY_NICOTINE_VAPE.hours}. That 24-hour fact is
              for the counter, not a promise that one named nicotine vape is in stock at that minute. Bring valid
              19+ government photo ID. No appointment is required.
            </p>
            <p className={styles.infoText}>
              If you want a drop instead of the counter, use{" "}
              <Link href="/cannabis-delivery-hillcrest-brampton">Hillcrest / Kennedy cannabis delivery</Link>.
              Delivery hours are confirmed by the dispatcher and are not listed as 24/7. For late-night door
              questions, stay on the{" "}
              <Link href="/24-hour-dispensary-brampton">24-hour / open-now FAQ</Link>.
            </p>
            <ol className={styles.steps}>
              <li>
                <strong>Check the current Nic Vape menu.</strong> Open the{" "}
                <Link href={KENNEDY_NICOTINE_VAPE.menuHref}>Kennedy Nic Vape category</Link> and note names and
                package details. Selection can rotate.
              </li>
              <li>
                <strong>Keep THC vape separate.</strong> If the trip is cannabis vape, use{" "}
                <Link href={KENNEDY_NICOTINE_VAPE.thcVapeHref}>THC Vape</Link> instead of this page.
              </li>
              <li>
                <strong>Pin Unit 104.</strong> Use{" "}
                <Link href="/visit">how to find Unit 104</Link> so a Kennedy Road search does not stop at a
                downtown door.
              </li>
            </ol>
            <div className={styles.btnRow}>
              <Link href={KENNEDY_NICOTINE_VAPE.menuHref} className={`${styles.btn} ${styles.btnPrimary}`}>
                Browse Nic Vape
              </Link>
              <Link href="/native-cigarettes-hillcrest-brampton" className={`${styles.btn} ${styles.btnSecondary}`}>
                Hillcrest native cigarettes
              </Link>
              <Link href="/" className={`${styles.btn} ${styles.btnSecondary}`}>
                Homepage walk-in menu
              </Link>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>NAP for the Kennedy nicotine vape counter</h2>
            <p className={styles.infoText}>
              Nicotine-vape copy still uses the locked Kennedy Loud listing: {NAP.storeName}, {NAP.address},{" "}
              {NAP.phone}, and <a href={NAP.website}>{NAP.website}</a>. For a featured-card preview page, use{" "}
              <Link href="/info/nicotine-vapes-brampton">Nicotine Vapes Brampton</Link>. Flower collections at the
              same counter are <Link href="/exotic-weed">Exotic</Link>, <Link href="/premium-weed">Premium</Link>,{" "}
              <Link href="/aaa-weed">AAA+</Link>, <Link href="/aa-weed">AA</Link>, and{" "}
              <Link href="/budget-weed">Budget</Link>.
            </p>
            <div className={styles.napGrid}>
              <div className={styles.napDetails}>
                <div className={styles.napItem}>
                  <span className={styles.napLabel}>Store Name</span>
                  <strong>{NAP.storeName}</strong>
                </div>
                <div className={styles.napItem}>
                  <span className={styles.napLabel}>Address</span>
                  <span>{NAP.address}</span>
                </div>
                <div className={styles.napItem}>
                  <span className={styles.napLabel}>Phone</span>
                  <span>
                    <a href={`tel:${NAP.phoneIntl}`} style={{ color: "inherit" }}>
                      {NAP.phone}
                    </a>
                  </span>
                </div>
                <div className={styles.napItem}>
                  <span className={styles.napLabel}>Website</span>
                  <span>
                    <a href={NAP.website} style={{ color: "inherit" }}>
                      {NAP.website}
                    </a>
                  </span>
                </div>
                <div className={styles.napItem}>
                  <span className={styles.napLabel}>Walk-in hours</span>
                  <span>{KENNEDY_NICOTINE_VAPE.hours}</span>
                </div>
              </div>
              <div className={styles.mapWrapper}>
                <iframe
                  title="Map of Kennedy Loud Cannabis at 49 Hillcrest Ave Unit 104, Brampton"
                  src={gbpLocation.mapEmbedUrl}
                  className={styles.mapIframe}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <p className={styles.mapFallback}>
                  <a href={gbpLocation.directionsUrl} target="_blank" rel="noreferrer">
                    Open Kennedy Loud Cannabis in Google Maps
                  </a>
                </p>
              </div>
            </div>
            <div className={styles.guideList}>
              {KENNEDY_NICOTINE_VAPE_INTERNAL_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className={styles.guideLink}>
                  {link.label}
                </Link>
              ))}
            </div>
            <ParityHubNav currentPath="/nicotine-vape-kennedy-brampton" showGeoNote />
          </section>

          <section id="faq" className={styles.section}>
            <h2 className={styles.h2}>FAQ: Kennedy / Hillcrest nicotine vape</h2>
            <div className={styles.faqList}>
              {KENNEDY_NICOTINE_VAPE_FAQS.map((faq) => (
                <div key={faq.q} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{faq.q}</h3>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
