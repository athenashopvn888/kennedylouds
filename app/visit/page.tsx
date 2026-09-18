import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ParityHubNav } from "../components/ParityHubNav";
import styles from "../components/GBPLandingPage.module.css";
import { NAP, gbpLocation } from "../lib/gbp-location";
import { VISIT_FAQS, VISIT_GUIDE, VISIT_INTERNAL_LINKS } from "../lib/visitGuide";

export const metadata: Metadata = {
  title: { absolute: VISIT_GUIDE.title },
  description: VISIT_GUIDE.metaDescription,
  alternates: {
    canonical: VISIT_GUIDE.canonical,
  },
  openGraph: {
    title: VISIT_GUIDE.title,
    description: VISIT_GUIDE.metaDescription,
    url: VISIT_GUIDE.canonical,
    siteName: NAP.storeName,
  },
  twitter: {
    card: "summary_large_image",
    title: VISIT_GUIDE.title,
    description: VISIT_GUIDE.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function VisitPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: VISIT_FAQS.map((faq) => ({
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
      { "@type": "ListItem", position: 2, name: "Visit Unit 104", item: VISIT_GUIDE.canonical },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqJsonLd, breadcrumbJsonLd]).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <main className={styles.page}>
        <div className={styles.container}>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>{VISIT_GUIDE.eyebrow}</p>
            <h1 className={styles.h1}>{VISIT_GUIDE.h1}</h1>
            <p className={styles.heroTagline}>{NAP.address}</p>
            <p className={styles.heroHours}>{NAP.hours} · Walk-in · No appointment</p>
            <p className={styles.heroPhone}>
              <a href={`tel:${NAP.phoneIntl}`}>{NAP.phone}</a>
            </p>
            <div className={styles.areaList}>
              {["Unit 104", "Hillcrest Ave", "Kennedy Road", "Queen Street", "Main Street"].map((area) => (
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
            <h2 className={styles.h2}>Where we are (Hillcrest Ave Unit 104 — entrance, directory, and parking)</h2>
            <p className={styles.introText}>
              Searching for a dispensary near me in central Brampton should finish at one pin: {NAP.address}.
              Kennedy Loud Cannabis is a walk-in shop inside a multi-unit building. The detail that matters is
              Unit 104, not a generic “Brampton dispensary” or “cannabis near me” drop that can land on the wrong
              door.
            </p>
            <p className={styles.infoText}>
              From the street, look for 49 Hillcrest Ave first, then the posted unit numbers or building directory.
              Finish at Unit 104. This page does not publish a public buzzer code, because building access details
              can change. If an intercom or directory is posted, use Unit 104. If the entrance is not obvious, call{" "}
              <a href={`tel:${NAP.phoneIntl}`}>{NAP.phone}</a> and staff can talk you to the correct door.
            </p>
            <p className={styles.infoText}>
              Parking is not a reserved-lot promise on this page. Check the current map listing, posted signs on
              Hillcrest Ave, or call the store before you leave. Keep the homepage website as{" "}
              <a href={NAP.website}>{NAP.website}</a> — that is the store listing, not a city landing URL.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Kennedy–Queen–Main corridor landmarks</h2>
            <p className={styles.infoText}>
              The Kennedy Loud dispensary sits on the Hillcrest Ave / Kennedy Road side of central Brampton. Kennedy
              Road is the broad landmark. Hillcrest Ave is the last street. Unit 104 is the door. Queen Street and
              Main Street are useful starting corridors, not substitute addresses.
            </p>
            <p className={styles.infoText}>
              If you are already on Queen Street, set the destination to 49 Hillcrest Ave Unit 104 rather than
              searching “dispensary Brampton” again. If you are on Main Street or around Garden Square, do the same:
              keep Kennedy Road as the wider landmark, then finish on Hillcrest at Unit 104. That is how a cannabis
              store near me search becomes a walk-in instead of a wrong-pin loop.
            </p>
            <div className={styles.guideList}>
              {VISIT_INTERNAL_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className={styles.guideLink}>
                  {link.label}
                </Link>
              ))}
            </div>
            <ParityHubNav currentPath="/visit" />
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Hours and what “open now” means</h2>
            <p className={styles.infoText}>
              Kennedy Loud lists {NAP.hours}. That is the hours fact used on this visit guide. A late-night or
              early-morning “dispensary near me” or “dispensary Brampton open” search can still point here because
              the shop is listed 24 hours, seven days a week. For the dedicated 24 hour dispensary Brampton
              questions, use the{" "}
              <Link href="/24-hour-dispensary-brampton">open-now FAQ</Link>.
            </p>
            <p className={styles.infoText}>
              “Open now” describes the listed store hours, not a guarantee that one named flower, vape, or cigarette
              is on the shelf at that minute. Check the{" "}
              <Link href="/">homepage menu</Link> before a special-item trip, or call {NAP.phone}. Walk-in is the
              shopping model — no appointment is required.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>What to bring (19+ ID)</h2>
            <p className={styles.infoText}>
              Bring valid government-issued photo ID. Kennedy Loud Cannabis serves adults 19 and older. If the ID
              is expired, missing, or does not match the visitor, the counter cannot complete the sale.
            </p>
            <p className={styles.infoText}>
              Have the Unit 104 address visible on your phone before the last turn. If the trip is for cigarettes
              rather than flower, start with the{" "}
              <Link href="/info/native-cigarettes-brampton">Native Cigarettes Brampton</Link> page, then confirm
              current listings. For the broader Brampton visit snapshot — menu categories, nearby areas, and the
              same NAP — use the{" "}
              <Link href="/weed-dispensary-brampton/">Hillcrest / Kennedy weed dispensary</Link>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.h2}>Map and directions from Kennedy Rd / Queen St</h2>
            <p className={styles.infoText}>
              From Kennedy Road: stay on the Kennedy corridor until Hillcrest Ave, then pin Unit 104. From Queen
              Street: name the end point early — “Hillcrest and Kennedy, Unit 104” — so a rideshare or walking
              map does not stop at a generic downtown pin. The{" "}
              <Link href="/resources/local-guides/queen-street-to-hillcrest-brampton">Queen Street route guide</Link>{" "}
              and{" "}
              <Link href="/resources/local-guides/zum-kennedy-dispensary">Kennedy Road transit guide</Link> cover
              those last kilometres without inventing route numbers.
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
            <h2 className={styles.h2}>FAQ: dispensary near me / Brampton open</h2>
            <div className={styles.faqList}>
              {VISIT_FAQS.map((faq) => (
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
