import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ParityHubNav } from "../components/ParityHubNav";
import styles from "../components/GBPLandingPage.module.css";
import { NAP, gbpLocation } from "../lib/gbp-location";
import { OPEN_NOW_FAQ, OPEN_NOW_FAQS, OPEN_NOW_INTERNAL_LINKS } from "../lib/openNowFaq";

export const metadata: Metadata = {
  title: { absolute: OPEN_NOW_FAQ.title },
  description: OPEN_NOW_FAQ.metaDescription,
  alternates: {
    canonical: OPEN_NOW_FAQ.canonical,
  },
  openGraph: {
    title: OPEN_NOW_FAQ.title,
    description: OPEN_NOW_FAQ.metaDescription,
    url: OPEN_NOW_FAQ.canonical,
    siteName: NAP.storeName,
  },
  twitter: {
    card: "summary_large_image",
    title: OPEN_NOW_FAQ.title,
    description: OPEN_NOW_FAQ.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OpenNowFaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: OPEN_NOW_FAQS.map((faq) => ({
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
      { "@type": "ListItem", position: 2, name: "24-hour Brampton FAQ", item: OPEN_NOW_FAQ.canonical },
    ],
  };

  const hoursJsonLd = {
    "@context": "https://schema.org",
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
    openingHours: "Mo-Su 00:00-23:59",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqJsonLd, breadcrumbJsonLd, hoursJsonLd]).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <main className={styles.page}>
        <div className={styles.container}>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>{OPEN_NOW_FAQ.eyebrow}</p>
            <h1 className={styles.h1}>{OPEN_NOW_FAQ.h1}</h1>
            <p className={styles.heroTagline}>{NAP.address}</p>
            <p className={styles.heroHours}>{NAP.hours} · Walk-in · No appointment</p>
            <p className={styles.heroPhone}>
              <a href={`tel:${NAP.phoneIntl}`}>{NAP.phone}</a>
            </p>
            <div className={styles.areaList}>
              {["Open 24 Hours", "Open now", "Unit 104", "Hillcrest Ave", "Kennedy Road"].map((area) => (
                <span key={area} className={styles.areaTag}>
                  {area}
                </span>
              ))}
            </div>
          </header>

          <div className={styles.btnRow}>
            <Link href="/#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
              Homepage map
            </Link>
            <Link href="/visit" className={`${styles.btn} ${styles.btnSecondary}`}>
              Find Unit 104
            </Link>
            <a href={`tel:${NAP.phoneIntl}`} className={`${styles.btn} ${styles.btnTertiary}`}>
              Call Store
            </a>
          </div>

          <section className={styles.section}>
            <h2 className={styles.h2}>GBP hours truth</h2>
            <p className={styles.introText}>
              Kennedy Loud Cannabis lists {NAP.hours} at the Hillcrest / Kennedy walk-in. That is the hours fact on
              this 24 hour dispensary Brampton FAQ. It matches the current store listing used for the homepage
              website <a href={NAP.website}>{NAP.website}</a> — not a city landing URL, and not a renamed Google
              listing. The Hillcrest 24-hour slug {OPEN_NOW_FAQ.hillcrestAlias} stays a 301 into this B07 page.
            </p>
            <p className={styles.infoText}>
              Monday through Sunday is the same listed fact: {NAP.hours}. If a search result for a 24 hour
              dispensary, a 24 hour Hillcrest / Kennedy dispensary, a 24 hour dispensary near me, or a dispensary
              Brampton open query shows this shop, the hours on this page are that Unit 104 listing — not a Queen
              Street West downtown clock, and not a 24/7 delivery claim.
            </p>
            <table className={styles.hoursTable}>
              <caption className={styles.hoursCaption}>Listed hours at {NAP.streetAddress}</caption>
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Hours</th>
                </tr>
              </thead>
              <tbody>
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                  <tr key={day}>
                    <th scope="row">{day}</th>
                    <td>{NAP.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>When “open now” applies</h2>
            <p className={styles.infoText}>
              “Open now” applies because the listed hours are {NAP.hours}. A cannabis store near me open now search
              in central Brampton can still finish at Unit 104 at 2 a.m. or 2 p.m. The shop is a walk-in. No
              appointment is required. Open 24 Hours describes the door, not cannabis delivery. Delivery hours are
              confirmed by the dispatcher on the{" "}
              <Link href="/cannabis-delivery-hillcrest-brampton">Hillcrest / Kennedy delivery</Link> page and are
              not listed as 24/7.
            </p>
            <p className={styles.infoText}>
              Open now describes the door, not the shelf. Confirm current menu details on the{" "}
              <Link href="/">homepage</Link> before a special-item trip, or call {NAP.phone}. Adults must be 19+
              with valid government-issued photo ID. If the ID is expired, missing, or does not match the visitor,
              the counter cannot complete the sale. Native cigarettes and nicotine vape sold at this same Unit 104
              counter are on{" "}
              <Link href="/native-cigarettes-hillcrest-brampton">Hillcrest / Kennedy native cigarettes</Link> and{" "}
              <Link href="/nicotine-vape-kennedy-brampton">Kennedy / Hillcrest nicotine vape</Link>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Hillcrest Unit 104 late arrival</h2>
            <p className={styles.infoText}>
              Late arrival uses the same pin as daytime: {NAP.address}. 49 Hillcrest Ave is a multi-unit building.
              Finish at Unit 104. Do not guess another unit from the street. If the entrance or directory is not
              obvious after dark, call <a href={`tel:${NAP.phoneIntl}`}>{NAP.phone}</a> and staff can talk you to
              the correct door.
            </p>
            <p className={styles.infoText}>
              Parking is not a reserved-lot promise on this page. Check the current map listing, posted signs, or
              call before you leave. For entrance, directory, and Kennedy–Queen–Main corridor notes, use the{" "}
              <Link href="/visit">Unit 104 walk-in guide</Link>. For the broader Brampton visit snapshot, use the{" "}
              <Link href="/weed-dispensary-brampton/">Hillcrest / Kennedy weed dispensary</Link>. A 24-hour
              Hillcrest Brampton dispensary search should finish here, not at a downtown Queen Street West pin.
            </p>
          </section>

          <section id="faq" className={styles.section}>
            <h2 className={styles.h2}>FAQ table</h2>
            <p className={styles.infoText}>
              Short answers for 24 hour dispensary Brampton, dispensary Brampton open, 24 hour dispensary near me,
              24 hour dispensary open near me, and cannabis store near me open now.
            </p>
            <div className={styles.tableWrap}>
              <table className={styles.faqTable}>
                <caption className={styles.hoursCaption}>24 hour / open-now questions for Kennedy Loud Cannabis</caption>
                <thead>
                  <tr>
                    <th scope="col">Question</th>
                    <th scope="col">Answer</th>
                  </tr>
                </thead>
                <tbody>
                  {OPEN_NOW_FAQS.map((faq) => (
                    <tr key={faq.q}>
                      <th scope="row">{faq.q}</th>
                      <td>{faq.a}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="map" className={styles.section}>
            <h2 className={styles.h2}>CTA to homepage map</h2>
            <p className={styles.infoText}>
                  The store listing website stays on the homepage: <a href={NAP.website}>{NAP.website}</a>. Use that
                  page for the live menu and the embedded map pin, then walk in at Unit 104. This FAQ does not replace the homepage as the Google Business Profile website.
            </p>
            <div className={styles.btnRow}>
              <Link href="/#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
                Open homepage map
              </Link>
              <Link href="/visit" className={`${styles.btn} ${styles.btnSecondary}`}>
                How to find Unit 104
              </Link>
              <Link href="/weed-dispensary-brampton/" className={`${styles.btn} ${styles.btnSecondary}`}>
                Hillcrest / Kennedy weed
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
            </div>
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
            <div className={styles.guideList}>
              {OPEN_NOW_INTERNAL_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className={styles.guideLink}>
                  {link.label}
                </Link>
              ))}
            </div>
            <ParityHubNav currentPath="/24-hour-dispensary-brampton" />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
