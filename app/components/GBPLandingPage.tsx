import Link from "next/link";
import styles from "./GBPLandingPage.module.css";
import { categoryLinks, gbpLocation } from "../lib/gbp-location";
import { TIER_HUB_LINKS } from "../lib/sccParityHub";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ParityHubNav } from "./ParityHubNav";

const LOCAL_FAQS = [
  {
    q: `Where is ${gbpLocation.storeName} located?`,
    a: `${gbpLocation.storeName} is at ${gbpLocation.address}.`,
  },
  {
    q: `Is ${gbpLocation.storeName} a weed dispensary in ${gbpLocation.city}?`,
    a: `Yes. ${gbpLocation.storeName} is a walk-in weed dispensary in ${gbpLocation.city} for adults 19+ with valid government photo ID.`,
  },
  {
    q: `What are the hours at ${gbpLocation.storeName}?`,
    a: `${gbpLocation.storeName} is Open 24 Hours. Walk in anytime — no appointment needed.`,
  },
  {
    q: `What menu categories does ${gbpLocation.storeName} show?`,
    a: "The site organizes flower tiers, pre-rolls, edibles, THC vapes, concentrates, Nic Vape, cigarettes, and accessories. Confirm current product details before visiting.",
  },
  {
    q: `How should I plan a visit to ${gbpLocation.storeName}?`,
    a: "Confirm the Hillcrest Ave address, Open 24 Hours hours, and phone number on this page. Then use the category links to review the current menu before you travel.",
  },
  {
    q: `Do I need to be 19+ to shop at ${gbpLocation.storeName}?`,
    a: "Yes. You must be at least 19 years of age. Valid government-issued photo ID is required.",
  },
  {
    q: `Is ${gbpLocation.storeName} near ${gbpLocation.neighborhood}?`,
    a: `Yes. ${gbpLocation.storeName} is at 49 Hillcrest Ave Unit 104, near Kennedy Road, with useful routes from Downtown Brampton, Queen Street, Main Street, and Bramalea.`,
  },
  {
    q: `Is ${gbpLocation.storeName} the Queen Street West downtown dispensary?`,
    a: `No. ${gbpLocation.storeName} is the Hillcrest Ave / Kennedy Road walk-in at ${gbpLocation.address}. Queen Street West downtown is a different licensed door. Keep this hub for Unit 104.`,
  },
  {
    q: `Which flower tiers can I browse before visiting Hillcrest?`,
    a: "Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed. Start on this Hillcrest / Kennedy hub, then open one collection.",
  },
  {
    q: `Does ${gbpLocation.storeName} deliver cannabis around Hillcrest / Kennedy?`,
    a: "Yes. Delivery from 49 Hillcrest Ave Unit 104 is confirmed by the dispatcher and is not listed as 24/7. The Unit 104 walk-in remains Open 24 Hours. Use the Hillcrest / Kennedy cannabis delivery page to order.",
  },
];

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
    mainEntity: LOCAL_FAQS.map((faq) => ({
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
            <p className={styles.eyebrow}>Kennedy Loud Cannabis · Adults 19+</p>
            <h1 className={styles.h1}>{gbpLocation.h1}</h1>
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
            <h2 className={styles.h2}>Local Weed Dispensary on Hillcrest Ave / Kennedy Road</h2>
            <p className={styles.introText}>{gbpLocation.introVariant}</p>
            <p className={styles.infoText}>
              Shoppers around {nearbyAreaList} can use this page to confirm the door, then jump to a menu category before they pull up.
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
              <Link href="/cannabis-delivery-hillcrest-brampton">Hillcrest cannabis delivery</Link>.
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
              <Link href="#faq" className={`${styles.btn} ${styles.btnSecondary}`}>
                Read Visit FAQs
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
              {gbpLocation.localGuides.map((guide) => (
                <Link key={guide.href} href={guide.href} className={styles.guideLink}>
                  {guide.label}
                </Link>
              ))}
            </div>
            <ParityHubNav currentPath="/weed-dispensary-brampton/" showGeoNote />
          </section>

          <section id="faq" className={styles.section}>
            <h2 className={styles.h2}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              {LOCAL_FAQS.map((faq) => (
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
