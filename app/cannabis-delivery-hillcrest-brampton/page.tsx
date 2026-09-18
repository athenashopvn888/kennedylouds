import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ParityHubNav } from "../components/ParityHubNav";
import styles from "../components/GBPLandingPage.module.css";
import { NAP, gbpLocation } from "../lib/gbp-location";
import {
  HILLCREST_DELIVERY,
  HILLCREST_DELIVERY_FAQS,
  HILLCREST_DELIVERY_INTERNAL_LINKS,
} from "../lib/hillcrestDelivery";

export const metadata: Metadata = {
  title: { absolute: HILLCREST_DELIVERY.title },
  description: HILLCREST_DELIVERY.metaDescription,
  alternates: {
    canonical: HILLCREST_DELIVERY.canonical,
  },
  openGraph: {
    title: HILLCREST_DELIVERY.title,
    description: HILLCREST_DELIVERY.metaDescription,
    url: HILLCREST_DELIVERY.canonical,
    siteName: NAP.storeName,
  },
  twitter: {
    card: "summary_large_image",
    title: HILLCREST_DELIVERY.title,
    description: HILLCREST_DELIVERY.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HillcrestDeliveryPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HILLCREST_DELIVERY_FAQS.map((faq) => ({
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
        name: "Hillcrest / Kennedy delivery",
        item: HILLCREST_DELIVERY.canonical,
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hillcrest / Kennedy cannabis delivery",
    serviceType: "Cannabis delivery",
    provider: {
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
    areaServed: ["Hillcrest Ave", "Kennedy Road", "central Brampton"],
    url: HILLCREST_DELIVERY.canonical,
    description: HILLCREST_DELIVERY.metaDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqJsonLd, breadcrumbJsonLd, serviceJsonLd]).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main className={styles.page}>
        <div className={styles.container}>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>{HILLCREST_DELIVERY.eyebrow}</p>
            <h1 className={styles.h1}>{HILLCREST_DELIVERY.h1}</h1>
            <p className={styles.heroTagline}>{NAP.address}</p>
            <p className={styles.heroHours}>
              Walk-in {HILLCREST_DELIVERY.walkInHours} · Delivery hours confirmed by dispatcher
            </p>
            <p className={styles.heroPhone}>
              <a href={`tel:${NAP.phoneIntl}`}>{NAP.phone}</a>
            </p>
            <div className={styles.areaList}>
              {["Hillcrest Ave", "Kennedy Road", "Unit 104", "Central Brampton", "LIVE ORDER"].map((area) => (
                <span key={area} className={styles.areaTag}>
                  {area}
                </span>
              ))}
            </div>
          </header>

          <div className={styles.btnRow}>
            <Link href={HILLCREST_DELIVERY.liveOrderHref} className={`${styles.btn} ${styles.btnPrimary}`}>
              Start LIVE ORDER
            </Link>
            <Link href={HILLCREST_DELIVERY.catalogHref} className={`${styles.btn} ${styles.btnSecondary}`}>
              Delivery catalog
            </Link>
            <a href={`tel:${NAP.phoneIntl}`} className={`${styles.btn} ${styles.btnTertiary}`}>
              Call Store
            </a>
          </div>

          <section className={styles.section}>
            <h2 className={styles.h2}>Hillcrest / Kennedy delivery area</h2>
            <p className={styles.introText}>
              Cannabis delivery from Kennedy Loud Cannabis starts at one licensed counter: {NAP.address}. This is
              the Hillcrest Ave / Kennedy Road shop in central Brampton — not a Queen Street West downtown door.
              Queen Street and Main Street can be useful starting corridors into central Brampton; they are not
              this shop’s delivery pin.
            </p>
            <p className={styles.infoText}>
              Keep Unit 104 as the origin. The dispatcher confirms whether a specific Hillcrest / Kennedy / central
              Brampton drop is in range before an order is accepted. This page does not publish a city-wide
              Brampton coverage map, and it does not treat another licensed door as Kennedy Loud.
            </p>
            <p className={styles.infoText}>
              The store listing website stays on the homepage:{" "}
              <a href={NAP.website}>{NAP.website}</a>. Use that hub for the live walk-in menu, then open the{" "}
              <Link href={HILLCREST_DELIVERY.catalogHref}>delivery catalog</Link> when you want a drop instead of
              the counter.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Delivery hours vs 24-hour walk-in</h2>
            <p className={styles.infoText}>
              Do not mix the two clocks. The Unit 104 walk-in lists {HILLCREST_DELIVERY.walkInHours}. That 24-hour
              fact is for people who go to the door. Cannabis delivery is a separate channel. The live delivery
              menu does not list a 24/7 delivery window. The dispatcher confirms current availability and delivery
              details before an order is accepted.
            </p>
            <table className={styles.hoursTable}>
              <caption className={styles.hoursCaption}>Walk-in hours and delivery hours at {NAP.streetAddress}</caption>
              <thead>
                <tr>
                  <th scope="col">Channel</th>
                  <th scope="col">Hours truth on this site</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Walk-in at Unit 104</th>
                  <td>{HILLCREST_DELIVERY.walkInHours}</td>
                </tr>
                <tr>
                  <th scope="row">Hillcrest / Kennedy cannabis delivery</th>
                  <td>{HILLCREST_DELIVERY.deliveryHours}</td>
                </tr>
                <tr>
                  <th scope="row">Product minimum</th>
                  <td>{HILLCREST_DELIVERY.minimum}</td>
                </tr>
              </tbody>
            </table>
            <p className={styles.infoText}>
              Late-night or open-now questions about the door belong on the{" "}
              <Link href="/24-hour-dispensary-brampton">24-hour / open-now FAQ</Link>. Delivery questions stay here
              and on the catalog. If you need the multi-unit entrance talked through for a walk-in, use{" "}
              <Link href="/visit">how to find Unit 104</Link> or call{" "}
              <a href={`tel:${NAP.phoneIntl}`}>{NAP.phone}</a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>How to order</h2>
            <p className={styles.infoText}>
              LIVE ORDER on the Kennedy Loud delivery catalog connects you with the dispatcher. Adults 19+ only.
              Availability, the drop, and checkout details are confirmed in chat — they are not a self-serve cart
              promise.
            </p>
            <ol className={styles.steps}>
              <li>
                <strong>Browse the delivery catalog.</strong> Open the{" "}
                <Link href={HILLCREST_DELIVERY.catalogHref}>Hillcrest delivery menu</Link> and note product names
                and weights.
              </li>
              <li>
                <strong>Start LIVE ORDER.</strong> Use{" "}
                <Link href={HILLCREST_DELIVERY.liveOrderHref}>Web Chat on the delivery page</Link> and send your
                choices.
              </li>
              <li>
                <strong>Verify privately if you are new.</strong> New customers complete the private selfie-with-ID
                step in Web Chat.
              </li>
              <li>
                <strong>Confirm with the dispatcher.</strong> The Kennedy Loud dispatcher confirms availability,
                whether the Hillcrest / Kennedy drop is in range, the {HILLCREST_DELIVERY.minimum}, and next steps.
              </li>
            </ol>
            <div className={styles.btnRow}>
              <Link href={HILLCREST_DELIVERY.liveOrderHref} className={`${styles.btn} ${styles.btnPrimary}`}>
                Order with the dispatcher
              </Link>
              <Link href="/" className={`${styles.btn} ${styles.btnSecondary}`}>
                Homepage walk-in menu
              </Link>
              <Link href="/visit" className={`${styles.btn} ${styles.btnSecondary}`}>
                Walk in at Unit 104
              </Link>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>NAP for the Hillcrest delivery counter</h2>
            <p className={styles.infoText}>
              Delivery copy still uses the locked Kennedy Loud listing: {NAP.storeName}, {NAP.address},{" "}
              {NAP.phone}, and <a href={NAP.website}>{NAP.website}</a>. Flower collections at the same counter are{" "}
              <Link href="/exotic-weed">Exotic</Link>, <Link href="/premium-weed">Premium</Link>,{" "}
              <Link href="/aaa-weed">AAA+</Link>, <Link href="/aa-weed">AA</Link>, and{" "}
              <Link href="/budget-weed">Budget</Link>. For the broader Hillcrest / Kennedy weed hub, use the{" "}
              <Link href="/weed-dispensary-brampton/">central Brampton weed dispensary</Link>. For the Kennedy /
              Queen / Main corridor note, use the{" "}
              <Link href="/cannabis-store-brampton">central Brampton cannabis store guide</Link>.
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
                  <span>{HILLCREST_DELIVERY.walkInHours}</span>
                </div>
                <div className={styles.napItem}>
                  <span className={styles.napLabel}>Delivery hours</span>
                  <span>{HILLCREST_DELIVERY.deliveryHours}</span>
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
              {HILLCREST_DELIVERY_INTERNAL_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className={styles.guideLink}>
                  {link.label}
                </Link>
              ))}
            </div>
            <ParityHubNav currentPath="/cannabis-delivery-hillcrest-brampton" showGeoNote />
          </section>

          <section id="faq" className={styles.section}>
            <h2 className={styles.h2}>FAQ: Hillcrest / Kennedy cannabis delivery</h2>
            <div className={styles.faqList}>
              {HILLCREST_DELIVERY_FAQS.map((faq) => (
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
