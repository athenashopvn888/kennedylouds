import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: { absolute: "Contact Kennedy Loud Cannabis | 49 Hillcrest Ave Unit 104, Brampton" },
  description:
    "Visit Kennedy Loud Cannabis at 49 Hillcrest Ave Unit 104, Brampton, ON L6W 1Y7. Open 24 Hours. Call +1 (289) 206-1181. Walk-ins welcome. Adults 19+.",
  alternates: {
    canonical: "https://kennedyloudcannabis.com/contact",
  },
  openGraph: {
    title: "Contact Kennedy Loud Cannabis | Brampton Dispensary",
    description:
      "49 Hillcrest Ave Unit 104, Brampton. Open 24 Hours. Call +1 (289) 206-1181. Check current menu categories before visiting.",
  },
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* ── Hero ── */}
      <section className={styles.hero} style={{ paddingTop: "92px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <h1 className={styles.heroTitle}>Contact Kennedy Loud Cannabis in Brampton</h1>
          <img src="/banners/KennedyLoud_Contact_Us.webp" alt="Contact Us" style={{ width: "100%", height: "auto", display: "block", borderRadius: "var(--radius-lg)" }} />
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            {/* Location */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📍</div>
              <h2 className={styles.infoTitle}>Location</h2>
              <p className={styles.infoText}>
                49 Hillcrest Ave Unit 104
                <br />
                Brampton, ON L6W 1Y7
                <br />
                <a href="tel:+12892061181" className={styles.infoMuted}>+1 (289) 206-1181</a>
                <br />
                <a href="https://www.google.com/maps/search/?api=1&query=49%20Hillcrest%20Ave%20Unit%20104%2C%20Brampton%2C%20ON%20L6W%201Y7" target="_blank" rel="noreferrer">
                  Open in Google Maps
                </a>
              </p>
            </div>

            {/* Hours */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🕒</div>
              <h2 className={styles.infoTitle}>Hours</h2>
              <div className={styles.hoursTable}>
                <div className={styles.hoursRow}>
                  <span>Monday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Tuesday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Wednesday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Thursday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Friday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Saturday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Sunday</span>
                  <span className={styles.hoursTime}>24 Hours</span>
                </div>
              </div>
              <div className={styles.openBadge}>
                <span className={styles.openDot}></span>
                Open 24 Hours
              </div>
            </div>

            {/* Walk-in */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🔥</div>
              <h2 className={styles.infoTitle}>Walk In</h2>
              <p className={styles.infoText}>
                No appointment needed.
                <br />
                Just walk in and staff can
                <br />
                help with current menu questions.
              </p>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Flower tiers and menu categories
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Current product details
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Adult 19+ store support
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Debit &amp; cash accepted
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapSection}>
            <iframe
              title="Map of Kennedy Loud Cannabis at 49 Hillcrest Ave Unit 104, Brampton"
              src="https://maps.google.com/maps?q=49%20Hillcrest%20Ave%20Unit%20104%2C%20Brampton%2C%20ON%20L6W%201Y7&z=16&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ width: "100%", minHeight: 320, border: 0, display: "block", borderRadius: 16 }}
            />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}
