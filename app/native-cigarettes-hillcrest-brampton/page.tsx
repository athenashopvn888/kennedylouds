import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ParityHubNav } from "../components/ParityHubNav";
import styles from "../components/GBPLandingPage.module.css";
import { NAP, gbpLocation } from "../lib/gbp-location";
import {
  HILLCREST_NATIVE_CIGARETTES,
  HILLCREST_NATIVE_CIGARETTES_FAQS,
  HILLCREST_NATIVE_CIGARETTES_INTERNAL_LINKS,
} from "../lib/hillcrestNativeCigarettes";

export const metadata: Metadata = {
  title: { absolute: HILLCREST_NATIVE_CIGARETTES.title },
  description: HILLCREST_NATIVE_CIGARETTES.metaDescription,
  alternates: {
    canonical: HILLCREST_NATIVE_CIGARETTES.canonical,
  },
  openGraph: {
    title: HILLCREST_NATIVE_CIGARETTES.title,
    description: HILLCREST_NATIVE_CIGARETTES.metaDescription,
    url: HILLCREST_NATIVE_CIGARETTES.canonical,
    siteName: NAP.storeName,
  },
  twitter: {
    card: "summary_large_image",
    title: HILLCREST_NATIVE_CIGARETTES.title,
    description: HILLCREST_NATIVE_CIGARETTES.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HillcrestNativeCigarettesPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HILLCREST_NATIVE_CIGARETTES_FAQS.map((faq) => ({
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
        name: "Hillcrest / Kennedy native cigarettes",
        item: HILLCREST_NATIVE_CIGARETTES.canonical,
      },
    ],
  };

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: HILLCREST_NATIVE_CIGARETTES.h1,
    url: HILLCREST_NATIVE_CIGARETTES.canonical,
    description: HILLCREST_NATIVE_CIGARETTES.metaDescription,
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
            <p className={styles.eyebrow}>{HILLCREST_NATIVE_CIGARETTES.eyebrow}</p>
            <h1 className={styles.h1}>{HILLCREST_NATIVE_CIGARETTES.h1}</h1>
            <p className={styles.heroTagline}>{NAP.address}</p>
            <p className={styles.heroHours}>
              Walk-in {HILLCREST_NATIVE_CIGARETTES.hours} · Adults 19+ · Check current cigarette menu
            </p>
            <p className={styles.heroPhone}>
              <a href={`tel:${NAP.phoneIntl}`}>{NAP.phone}</a>
            </p>
            <div className={styles.areaList}>
              {["Hillcrest Ave", "Kennedy Road", "Unit 104", "Central Brampton", "Adults 19+"].map((area) => (
                <span key={area} className={styles.areaTag}>
                  {area}
                </span>
              ))}
            </div>
          </header>

          <div className={styles.btnRow}>
            <Link href={HILLCREST_NATIVE_CIGARETTES.menuHref} className={`${styles.btn} ${styles.btnPrimary}`}>
              Current cigarette menu
            </Link>
            <Link href="/visit" className={`${styles.btn} ${styles.btnSecondary}`}>
              Find Unit 104
            </Link>
            <a href={`tel:${NAP.phoneIntl}`} className={`${styles.btn} ${styles.btnTertiary}`}>
              Call Store
            </a>
          </div>

          <section className={styles.section}>
            <h2 className={styles.h2}>Hillcrest / Kennedy cigarette counter</h2>
            <p className={styles.introText}>
              Native cigarettes at Kennedy Loud Cannabis are sold at one licensed counter: {NAP.address}. This is
              the Hillcrest Ave / Kennedy Road shop in central Brampton — not a Queen Street West downtown door.
              Queen Street and Main Street can be useful starting corridors into central Brampton; they are not
              this shop’s cigarette pin.
            </p>
            <p className={styles.infoText}>
              This page is neighbourhood-scoped menu navigation for adults 19+. It does not rank brands, invent
              reviews, or make medical claims. Tobacco products are for adults. Confirm current listings on the{" "}
              <Link href={HILLCREST_NATIVE_CIGARETTES.menuHref}>cigarettes category</Link> before a special-item
              trip.
            </p>
            <p className={styles.infoText}>
              The store listing website stays on the homepage:{" "}
              <a href={NAP.website}>{NAP.website}</a>. Use that hub for the live walk-in menu, then open this
              Hillcrest / Kennedy native-cigarettes page when the trip is about the cigarette counter at Unit 104.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>How to shop native cigarettes at Unit 104</h2>
            <p className={styles.infoText}>
              Walk-in is the default. The Unit 104 door lists {HILLCREST_NATIVE_CIGARETTES.hours}. That 24-hour
              fact is for the counter, not a promise that one named cigarette is in stock at that minute. Bring
              valid 19+ government photo ID. No appointment is required.
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
                <strong>Check the current cigarette menu.</strong> Open the{" "}
                <Link href={HILLCREST_NATIVE_CIGARETTES.menuHref}>Hillcrest cigarettes category</Link> and note
                names and package details. Selection can rotate.
              </li>
              <li>
                <strong>Pin Unit 104.</strong> Use{" "}
                <Link href="/visit">how to find Unit 104</Link> so a Hillcrest / Kennedy search does not stop at
                a downtown door.
              </li>
              <li>
                <strong>Walk in with 19+ ID.</strong> Staff can point you to the current cigarette listings at the
                same Hillcrest counter as flower and nicotine vape.
              </li>
            </ol>
            <div className={styles.btnRow}>
              <Link href={HILLCREST_NATIVE_CIGARETTES.menuHref} className={`${styles.btn} ${styles.btnPrimary}`}>
                Browse cigarettes
              </Link>
              <Link href="/nicotine-vape-kennedy-brampton" className={`${styles.btn} ${styles.btnSecondary}`}>
                Kennedy nicotine vape
              </Link>
              <Link href="/" className={`${styles.btn} ${styles.btnSecondary}`}>
                Homepage walk-in menu
              </Link>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>NAP for the Hillcrest cigarette counter</h2>
            <p className={styles.infoText}>
              Cigarette copy still uses the locked Kennedy Loud listing: {NAP.storeName}, {NAP.address},{" "}
              {NAP.phone}, and <a href={NAP.website}>{NAP.website}</a>. For a broader brand-preview page, use{" "}
              <Link href="/info/native-cigarettes-brampton">Native Cigarettes Brampton</Link>. Flower collections
              at the same counter are <Link href="/exotic-weed">Exotic</Link>,{" "}
              <Link href="/premium-weed">Premium</Link>, <Link href="/aaa-weed">AAA+</Link>,{" "}
              <Link href="/aa-weed">AA</Link>, and <Link href="/budget-weed">Budget</Link>.
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
                  <span>{HILLCREST_NATIVE_CIGARETTES.hours}</span>
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
              {HILLCREST_NATIVE_CIGARETTES_INTERNAL_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className={styles.guideLink}>
                  {link.label}
                </Link>
              ))}
            </div>
            <ParityHubNav currentPath="/native-cigarettes-hillcrest-brampton" showGeoNote />
          </section>

          <section id="faq" className={styles.section}>
            <h2 className={styles.h2}>FAQ: Hillcrest / Kennedy native cigarettes</h2>
            <div className={styles.faqList}>
              {HILLCREST_NATIVE_CIGARETTES_FAQS.map((faq) => (
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
