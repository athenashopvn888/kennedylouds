import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ParityHubNav } from "../components/ParityHubNav";
import styles from "../components/GBPLandingPage.module.css";
import { NAP, gbpLocation } from "../lib/gbp-location";
import {
  CANNABIS_STORE_FAQS,
  CANNABIS_STORE_GUIDE,
  CANNABIS_STORE_INTERNAL_LINKS,
} from "../lib/cannabisStoreGuide";

export const metadata: Metadata = {
  title: { absolute: CANNABIS_STORE_GUIDE.title },
  description: CANNABIS_STORE_GUIDE.metaDescription,
  alternates: {
    canonical: CANNABIS_STORE_GUIDE.canonical,
  },
  openGraph: {
    title: CANNABIS_STORE_GUIDE.title,
    description: CANNABIS_STORE_GUIDE.metaDescription,
    url: CANNABIS_STORE_GUIDE.canonical,
    siteName: NAP.storeName,
  },
  twitter: {
    card: "summary_large_image",
    title: CANNABIS_STORE_GUIDE.title,
    description: CANNABIS_STORE_GUIDE.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CannabisStoreBramptonPage() {
  const storeJsonLd = {
    "@context": "https://schema.org",
    "@type": "CannabisStore",
    "@id": `${NAP.website}#store`,
    name: NAP.storeName,
    url: NAP.website,
    telephone: NAP.phoneIntl,
    image: "https://kennedyloudcannabis.com/wp-content/uploads/2026/04/7Clmh.jpg",
    priceRange: "$3 - $12/g",
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.streetAddress,
      addressLocality: NAP.city,
      addressRegion: NAP.province,
      postalCode: NAP.postalCode,
      addressCountry: NAP.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: Number(gbpLocation.latitude),
      longitude: Number(gbpLocation.longitude),
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: ["Brampton", "Hillcrest Ave", "Kennedy Road", "Queen Street", "Main Street", "Downtown Brampton"],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CANNABIS_STORE_FAQS.map((faq) => ({
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
        name: "Cannabis store Brampton",
        item: CANNABIS_STORE_GUIDE.canonical,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([storeJsonLd, faqJsonLd, breadcrumbJsonLd]).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main className={styles.page}>
        <div className={styles.container}>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>{CANNABIS_STORE_GUIDE.eyebrow}</p>
            <h1 className={styles.h1}>{CANNABIS_STORE_GUIDE.h1}</h1>
            <p className={styles.heroTagline}>{NAP.address}</p>
            <p className={styles.heroHours}>{NAP.hours} · Walk-in · No appointment</p>
            <p className={styles.heroPhone}>
              <a href={`tel:${NAP.phoneIntl}`}>{NAP.phone}</a>
            </p>
            <div className={styles.areaList}>
              {["Cannabis store Brampton", "Kennedy Road", "Queen Street", "Main Street", "Unit 104"].map((area) => (
                <span key={area} className={styles.areaTag}>
                  {area}
                </span>
              ))}
            </div>
          </header>

          <div className={styles.btnRow}>
            <Link href="/" className={`${styles.btn} ${styles.btnPrimary}`}>
              Homepage menu
            </Link>
            <a href={`tel:${NAP.phoneIntl}`} className={`${styles.btn} ${styles.btnSecondary}`}>
              Call Store
            </a>
            <a
              href={gbpLocation.directionsUrl}
              className={`${styles.btn} ${styles.btnTertiary}`}
              target="_blank"
              rel="noreferrer"
            >
              Directions
            </a>
          </div>

          <section className={styles.section}>
            <h2 className={styles.h2}>Corridors we serve</h2>
            <p className={styles.introText}>
              A cannabis store Brampton search should resolve to one licensed counter: Kennedy Loud Cannabis at{" "}
              {NAP.address}. This page is the city-level guide for shoppers moving through central Brampton on
              Kennedy Road, Queen Street, or Main Street — three corridors that feed Hillcrest Ave, not three
              different Kennedy Loud addresses.
            </p>
            <p className={styles.infoText}>
              Kennedy Road is the north–south spine. Hillcrest Ave is the last street. If you are already on the
              Kennedy corridor, stay on it until Hillcrest, then finish at Unit 104. That is the cannabis Brampton
              pin for this shop: Kennedy Loud Cannabis, not a generic “brampton dispensary” drop that can stop a
              block early.
            </p>
            <p className={styles.infoText}>
              Queen Street is the east–west crossing most people already know. Use it as a starting corridor, then
              name the end point early — Hillcrest and Kennedy, Unit 104 — so a rideshare or walking map does not
              park you on a downtown storefront that is not this one. Main Street and the Garden Square side of
              downtown work the same way: useful for getting into central Brampton, then leave you on Hillcrest
              for the Kennedy Loud door.
            </p>
            <p className={styles.infoText}>
              The website for this store listing stays at{" "}
              <a href={NAP.website}>{NAP.website}</a>. That homepage root is the NAP hub. City landings and this
              guide point back to it; they do not replace it.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Unit 104 findability</h2>
            <p className={styles.infoText}>
              49 Hillcrest Ave is a multi-unit building. The cannabis store in Brampton that this site describes
              is Unit 104. Look for posted unit numbers or the building directory and stop there. This page does
              not publish a public buzzer code, because access details can change. If an intercom is posted, ask
              for Unit 104. If the entrance is not obvious from the street, call{" "}
              <a href={`tel:${NAP.phoneIntl}`}>{NAP.phone}</a> and staff can talk you to the correct door.
            </p>
            <p className={styles.infoText}>
              Parking is not a reserved-lot promise here. Check the current map listing, posted signs on Hillcrest
              Ave, or call before you leave. Listed hours are {NAP.hours}. Walk-in is the model — no appointment —
              and visitors must be 19+ with valid government-issued photo ID.
            </p>
            <p className={styles.infoText}>
              For entrance notes, corridor directions from Kennedy Road or Queen Street, and the full Unit 104
              walk-in, use the{" "}
              <Link href="/visit">How to find Kennedy Loud at 49 Hillcrest Ave Unit 104</Link> guide. For the
              broader visit snapshot — menu categories, nearby areas, and the same NAP — use the{" "}
              <Link href="/weed-dispensary-brampton/">Hillcrest / Kennedy weed dispensary</Link>. For dispatcher
              delivery from this same Unit 104 pin, use{" "}
              <Link href="/cannabis-delivery-hillcrest-brampton">Hillcrest / Kennedy cannabis delivery</Link>. For
              native cigarettes and nicotine vape at this Hillcrest / Kennedy counter, use{" "}
              <Link href="/native-cigarettes-hillcrest-brampton">Hillcrest native cigarettes</Link> and{" "}
              <Link href="/nicotine-vape-kennedy-brampton">Kennedy nicotine vape</Link>. For listed Open 24 Hours
              hours, use the{" "}
              <Link href="/24-hour-dispensary-brampton">24-hour Hillcrest / Kennedy FAQ</Link>.
            </p>
            <div className={styles.guideList}>
              {CANNABIS_STORE_INTERNAL_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className={styles.guideLink}>
                  {link.label}
                </Link>
              ))}
            </div>
            <ParityHubNav currentPath="/cannabis-store-brampton" showGeoNote />
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Hillcrest / Kennedy is not the Queen Street West storefront</h2>
            <p className={styles.infoText}>
              Keep this Brampton dispensary distinct. Kennedy Loud Cannabis is the Hillcrest Ave / Kennedy Road
              cannabis store at Unit 104. Queen Street West downtown is a different licensed door with its own map
              pin. This guide does not treat that downtown storefront as Kennedy Loud, and it does not list other
              Brampton cannabis brands as locations of this shop.
            </p>
            <p className={styles.infoText}>
              If your map already says Queen Street West, you are looking at that downtown storefront, not Unit
              104. If you searched cannabis store Brampton, cannabis Brampton, or Brampton dispensary and landed
              here, stay on the Hillcrest / Kennedy side: {NAP.address}. Do not merge the two pins, and do not
              assume one menu, phone, or door covers both.
            </p>
            <p className={styles.infoText}>
              Shoppers comparing walk-ins should check the name, address, and hours on the listing they intend to
              visit. For Kennedy Loud that means {NAP.storeName}, {NAP.address}, {NAP.phone}, {NAP.hours}, and{" "}
              <a href={NAP.website}>{NAP.website}</a>. This page does not invent review scores or ranking claims.
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
                  <span className={styles.napLabel}>Store Hours</span>
                  <span>{NAP.hours}</span>
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
          </section>

          <section id="faq" className={styles.section}>
            <h2 className={styles.h2}>FAQ: cannabis store Brampton</h2>
            <div className={styles.faqList}>
              {CANNABIS_STORE_FAQS.map((faq) => (
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
