import Link from "next/link";
import styles from "./GBPLandingPage.module.css";
import { categoryLinks, gbpLocation } from "../lib/gbp-location";
import {
  HILLCREST_WEED_DISPENSARY,
  HILLCREST_WEED_DISPENSARY_FAQS,
  HILLCREST_WEED_DISPENSARY_INTERNAL_LINKS,
} from "../lib/hillcrestWeedDispensary";
import { TIER_HUB_LINKS } from "../lib/sccParityHub";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ParityHubNav } from "./ParityHubNav";

export function GBPLandingPage() {
  const nearbyAreaList = gbpLocation.nearbyAreas.slice(0, 5).join(", ");

  const storeJsonLd = {
    "@context": "https://schema.org",
    "@type": "CannabisStore",
    "@id": `${gbpLocation.websiteUrl}#store`,
    name: gbpLocation.storeName,
    url: gbpLocation.websiteUrl,
    telephone: gbpLocation.phoneIntl,
    image: "https://kennedyloudcannabis.com/wp-content/uploads/2026/04/7Clmh.jpg",
    priceRange: "$3 - $12/g",
    address: {
      "@type": "PostalAddress",
      streetAddress: gbpLocation.streetAddress,
      addressLocality: gbpLocation.city,
      addressRegion: gbpLocation.province,
      postalCode: gbpLocation.postalCode,
      addressCountry: gbpLocation.country,
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
    areaServed: gbpLocation.nearbyAreas,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HILLCREST_WEED_DISPENSARY_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([storeJsonLd, faqJsonLd]) }}
      />
      <Navbar />
      <main className={styles.page}>
        <div className={styles.container}>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>{HILLCREST_WEED_DISPENSARY.eyebrow}</p>
            <h1 className={styles.h1}>{HILLCREST_WEED_DISPENSARY.h1}</h1>
            <p className={styles.heroTagline}>{gbpLocation.address}</p>
            <p className={styles.heroHours}>{gbpLocation.hours[0]} · Walk-in · No appointment</p>
            <p className={styles.heroPhone}>
              <a href={`tel:${gbpLocation.phoneIntl}`}>{gbpLocation.phone}</a>
            </p>
            <div className={styles.areaList}>
              {gbpLocation.localLandmarks.map((area) => (
                <span key={area} className={styles.areaTag}>
                  {area}
                </span>
              ))}
            </div>
          </header>

          <div className={styles.btnRow}>
            <Link href={gbpLocation.menuUrl} className={`${styles.btn} ${styles.btnPrimary}`}>
              View Menu
            </Link>
            <a href={`tel:${gbpLocation.phoneIntl}`} className={`${styles.btn} ${styles.btnSecondary}`}>
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
            <h2 className={styles.h2}>Neighbourhood weed dispensary: Hillcrest / Kennedy / Unit 104</h2>
            <p className={styles.introText}>{gbpLocation.introVariant}</p>
            <p className={styles.infoText}>
              This is the Hillcrest Ave / Kennedy Road weed hub at Unit 104 — not a Queen Street West downtown
              door. Shoppers around {nearbyAreaList} can confirm the pin here, then open visit, 24-hour, delivery,
              cigarette, nicotine, corridor, or flower-tier pages.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Five Flower Tiers at Unit 104</h2>
            <p className={styles.infoText}>
              Flower at the Hillcrest / Kennedy counter is grouped into five collections. Open a tier after you confirm the Unit 104 pin — these collections do not replace this weed hub.
            </p>
            <div className={styles.productGrid}>
              {TIER_HUB_LINKS.map((tier) => (
                <Link key={tier.href} href={tier.href} className={styles.productCard}>
                  {tier.label}
                </Link>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Weed and Cannabis Menu Categories</h2>
            <p className={styles.infoText}>
              Adults 19+ can review the main Kennedy Loud menu categories before visiting Brampton. Confirm current product details before making a special trip.
            </p>
            <div className={styles.productGrid}>
              {gbpLocation.products.map((product) => {
                const href = categoryLinks[product] || "/";
                return (
                  <Link key={product} href={href} className={styles.productCard}>
                    {product}
                  </Link>
                );
              })}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Plan a Visit Near {gbpLocation.neighborhood}</h2>
            <p className={styles.infoText}>
              Planning a visit is easier when the local details are in one place: address, Open 24 Hours hours, phone, nearby areas, and category links for adults 19+.
            </p>
            <p className={styles.infoText}>
              Coming from Kennedy Road, Queen Street, Main Street, or Downtown Brampton? Keep Unit 104 on Hillcrest Ave as the final pin, then review the current menu. For entrance, directory, and corridor directions, use the{" "}
              <Link href="/visit">How to find Kennedy Loud at Unit 104</Link> walk-in guide. For listed hours and late-night open-now questions, use the{" "}
              <Link href="/24-hour-dispensary-brampton">24-hour Brampton FAQ</Link>. For the city-level Kennedy / Queen / Main corridor note, use the{" "}
              <Link href="/cannabis-store-brampton">central Brampton cannabis store guide</Link>. For dispatcher delivery from this same Hillcrest / Kennedy pin, use{" "}
              <Link href="/cannabis-delivery-hillcrest-brampton">Hillcrest cannabis delivery</Link>. For native
              cigarettes and nicotine vape at this same Hillcrest / Kennedy counter, use{" "}
              <Link href="/native-cigarettes-hillcrest-brampton">Hillcrest native cigarettes</Link> and{" "}
              <Link href="/nicotine-vape-kennedy-brampton">Kennedy nicotine vape</Link>. Flower collections stay
              on{" "}
              <Link href="/exotic-weed">Exotic</Link>, <Link href="/premium-weed">Premium</Link>,{" "}
              <Link href="/aaa-weed">AAA+</Link>, <Link href="/aa-weed">AA</Link>, and{" "}
              <Link href="/budget-weed">Budget</Link> — they do not replace this neighbourhood weed hub.
            </p>
            <div className={styles.btnRow}>
              <Link href={gbpLocation.menuUrl} className={`${styles.btn} ${styles.btnPrimary}`}>
                Start With Menu Categories
              </Link>
              <Link href="/visit" className={`${styles.btn} ${styles.btnSecondary}`}>
                How to find Unit 104
              </Link>
              <Link href="/24-hour-dispensary-brampton" className={`${styles.btn} ${styles.btnSecondary}`}>
                Open now FAQ
              </Link>
              <Link href="/cannabis-store-brampton" className={`${styles.btn} ${styles.btnSecondary}`}>
                Cannabis store Brampton
              </Link>
              <Link href="/cannabis-delivery-hillcrest-brampton" className={`${styles.btn} ${styles.btnSecondary}`}>
                Hillcrest delivery
              </Link>
              <Link href="/native-cigarettes-hillcrest-brampton" className={`${styles.btn} ${styles.btnSecondary}`}>
                Hillcrest native cigarettes
              </Link>
              <Link href="/nicotine-vape-kennedy-brampton" className={`${styles.btn} ${styles.btnSecondary}`}>
                Kennedy nicotine vape
              </Link>
              <Link href="#faq" className={`${styles.btn} ${styles.btnSecondary}`}>
                Read weed-dispensary FAQs
              </Link>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Visit {gbpLocation.storeName} in {gbpLocation.city}</h2>
            <div className={styles.napGrid}>
              <div className={styles.napDetails}>
                <div className={styles.napItem}>
                  <span className={styles.napLabel}>Store Name</span>
                  <strong>{gbpLocation.storeName}</strong>
                </div>
                <div className={styles.napItem}>
                  <span className={styles.napLabel}>Address</span>
                  <span>{gbpLocation.address}</span>
                </div>
                <div className={styles.napItem}>
                  <span className={styles.napLabel}>Phone</span>
                  <span>
                    <a href={`tel:${gbpLocation.phoneIntl}`} style={{ color: "inherit" }}>
                      {gbpLocation.phone}
                    </a>
                  </span>
                </div>
                <div className={styles.napItem}>
                  <span className={styles.napLabel}>Website</span>
                  <span>
                    <a href={gbpLocation.websiteUrl} style={{ color: "inherit" }}>
                      {gbpLocation.websiteUrl}
                    </a>
                  </span>
                </div>
                <div className={styles.napItem}>
                  <span className={styles.napLabel}>Store Hours</span>
                  {gbpLocation.hours.map((line) => (
                    <span key={line} style={{ fontSize: "0.95rem" }}>{line}</span>
                  ))}
                </div>
                <p className={styles.infoBlock} style={{ fontSize: "0.9rem", margin: "10px 0 0" }}>
                  {HILLCREST_WEED_DISPENSARY.napDisplay}
                </p>
                <p className={styles.infoBlock} style={{ fontSize: "0.9rem", fontStyle: "italic", margin: "10px 0 0" }}>
                  {gbpLocation.parkingNote}.
                </p>
              </div>
              <div className={styles.mapWrapper}>
                <iframe
                  title={`Map of ${gbpLocation.storeName}`}
                  src={gbpLocation.mapEmbedUrl}
                  className={styles.mapIframe}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <p className={styles.mapFallback}>
                  <a href={gbpLocation.directionsUrl} target="_blank" rel="noreferrer">
                    Open {gbpLocation.storeName} in Google Maps
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>{gbpLocation.sectionTitle}</h2>
            <p className={styles.infoText}>
              {gbpLocation.neighborhoodDescription} {gbpLocation.transitNote}.
            </p>
            <div className={styles.areaList}>
              {gbpLocation.nearbyAreas.map((area) => (
                <span key={area} className={styles.areaTag}>
                  {area}
                </span>
              ))}
            </div>
            <div className={styles.guideList}>
              {HILLCREST_WEED_DISPENSARY_INTERNAL_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className={styles.guideLink}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className={styles.guideList}>
              {gbpLocation.localGuides.map((guide) => (
                <Link key={guide.href} href={guide.href} className={styles.guideLink}>
                  {guide.label}
                </Link>
              ))}
            </div>
            <ParityHubNav currentPath="/weed-dispensary-brampton/" showGeoNote />
          </section>

          <section id="faq" className={styles.section}>
            <h2 className={styles.h2}>FAQ: Hillcrest / Kennedy / Unit 104 weed dispensary</h2>
            <div className={styles.faqList}>
              {HILLCREST_WEED_DISPENSARY_FAQS.map((faq) => (
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
