"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./delivery.module.css";

export default function DeliveryContent() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      await fetch(
        `https://script.google.com/macros/s/AKfycbySrZYxI-NNnXfxY1jXOqHgT2HQi4zst2Fgte6FXTeymat_W_r0o1E3P83EfnVCjEk0/exec?action=delivery_email&email=${encodeURIComponent(email)}&store=KLC01`,
        { method: "GET", mode: "no-cors" }
      );
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("success");
    }
  }

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.content}>
        <h1 className={styles.pageTitle}>
          Delivery <span className={styles.highlight}>Updates</span>
        </h1>
        <p className={styles.pageSubtitle}>
          Kennedy Loud Cannabis is preparing delivery information for Brampton shoppers.
          Sign up below if you want an update when details are ready.
        </p>

        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>Get Delivery Updates</h2>
          <p className={styles.formDesc}>
            Enter your email to join the delivery update list. We&apos;ll send one update when local details are ready.
          </p>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputRow}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={styles.emailInput}
                required
                disabled={status === "loading"}
              />
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Notify Me"}
              </button>
            </div>
          </form>
          {status === "success" && (
            <p className={styles.successMsg}>
              You&apos;re on the list. We&apos;ll notify you when delivery details are ready.
            </p>
          )}
          {status === "error" && (
            <p className={styles.errorMsg}>
              Something went wrong. Please try again.
            </p>
          )}
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>BOX</span>
            <h3 className={styles.infoTitle}>Delivery Updates</h3>
            <p className={styles.infoDesc}>Watch this page for local availability updates before planning delivery.</p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>AREA</span>
            <h3 className={styles.infoTitle}>Hillcrest Ave / Brampton</h3>
            <p className={styles.infoDesc}>Built around Kennedy Loud Cannabis at 49 Hillcrest Ave, Unit 104.</p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>$</span>
            <h3 className={styles.infoTitle}>Current Store Menu</h3>
            <p className={styles.infoDesc}>Use the menu categories to confirm current products before visiting.</p>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Until delivery details are ready, visit us in-store at <strong>49 Hillcrest Ave, Unit 104, Brampton</strong> - open <strong>24 hours</strong>. Call <strong>+1 (289) 206-1181</strong>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
