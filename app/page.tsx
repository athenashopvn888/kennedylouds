"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FlowerCard from "./components/FlowerCard";
import { allFlowers } from "./lib/products";

/* -- Bento Mosaic Config -- */
const BENTO_TIERS = [
  {
    name: "EXOTICS",
    slug: "exotic",
    price: "$10-$12/g",
    banner: "/banners/KennedyLoud_Exotic.webp",
    className: styles.bentoExotic,
  },
  {
    name: "PREMIUM",
    slug: "premium",
    price: "$7-$10/g",
    banner: "/banners/KennedyLoud_Premium.webp",
    className: styles.bentoPremium,
    bgPos: "center center",
  },
  {
    name: "AAA+",
    slug: "aaa",
    price: "$5-$6/g",
    banner: "/banners/KennedyLoud_AAA_Plus.webp",
    className: styles.bentoTile,
  },
  {
    name: "AA",
    slug: "aa",
    price: "$4/g",
    banner: "/banners/KennedyLoud_AA.webp",
    className: styles.bentoTile,
  },
  {
    name: "BUDGET",
    slug: "budget",
    price: "$3/g",
    banner: "/banners/KennedyLoud_Budget.webp",
    className: styles.bentoTile,
  },
  {
    name: "EDIBLES - PREROLLS - MORE",
    slug: "items/edibles",
    price: "Shop Tiers",
    banner: "/banners/KennedyLoud_Edibles_Concentrates_More.webp",
    className: styles.bentoEdibles,
  },
];

/* -- Explore Categories Config (New Banners) -- */
const EXPLORE_CATEGORIES = [
  { name: "THC Vape", slug: "items/vapes", banner: "/banners/KennedyLoud_THC_Vape.webp" },
  { name: "Nic Vape", slug: "items/vape-disposables", banner: "/banners/KennedyLoud_Nic_Vape.webp" },
  { name: "Concentrates", slug: "items/concentrates", banner: "/banners/KennedyLoud_Concentrates.webp" },
  { name: "Pre-Rolls", slug: "items/prerolls", banner: "/banners/KennedyLoud_Pre_Rolls.webp" },
  { name: "Accessories", slug: "items/add-ons", banner: "/banners/KennedyLoud_Accessories.webp" },
  { name: "Cigarettes", slug: "items/cigarettes", banner: "/banners/KennedyLoud_Cigarettes.webp" },
  { name: "Magic Stuff", slug: "items/magic", banner: "/banners/KennedyLoud_Magic_Stuff.webp" },
  { name: "Games Arcade", slug: "games", banner: "/banners/KennedyLoud_Games_Arcade.webp" },
];

const RESOURCE_LINKS = [
  {
    href: "/resources/hillcrest-ave-visit-guide",
    label: "Hillcrest visit",
    title: "Hillcrest Ave pull-up guide",
    body: "Menu-first notes for late-night, early-morning, and regular Brampton visits.",
  },
  {
    href: "/resources/flower-tier-guide",
    label: "Flower tiers",
    title: "Pick the loud shelf faster",
    body: "Exotic, Premium, AAA+, AA, and Budget explained without the maze.",
  },
  {
    href: "/resources/vapes-concentrates-guide",
    label: "Format guide",
    title: "Vapes and concentrates",
    body: "Shortcuts for THC vapes, concentrates, accessories, and stronger format browsing.",
  },
];

/* -- Local FAQs for Hillcrest Ave -- */
const LOCAL_FAQS = [
  {
    q: "What are the hours for Kennedy Loud Cannabis?",
    a: "Kennedy Loud Cannabis at 49 Hillcrest Ave, Unit 104, Brampton is Open 24 Hours a day, 7 days a week. Walk in anytime - no appointment needed.",
  },
  {
    q: "What cannabis products do you carry?",
    a: "The site organizes menu categories for flower tiers, edibles, pre-rolls, vapes, concentrates, accessories, cigarettes, and specialty items. Confirm current product details before visiting.",
  },
  {
    q: "Where is Kennedy Loud Cannabis located?",
    a: "We are located at 49 Hillcrest Ave, Unit 104, Brampton, ON L6W 1Y7. Visit us in person or call us at (437) 237-2286. Check posted signs or the map listing for parking details.",
  },
  {
    q: "What is the cheapest weed at Kennedy Loud Cannabis?",
    a: "Budget flower is shown from $3/g, with AA and AAA+ tiers listed separately. Confirm current pricing and availability on the menu before visiting.",
  },
];

interface Review {
  name: string;
  comment: string;
  date: string;
}

interface ReviewStats {
  total: number;
  avg: number;
}

export default function HomePage() {
  const [featuredStrains, setFeaturedStrains] = useState<any[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewsStats, setReviewsStats] = useState<ReviewStats | null>(null);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  /* -- 1. Fetch Client-Side Google Reviews -- */
  useEffect(() => {
    const STORE_KEY = "KLC01";
    const SHEET_ID = "1-KeuyKFKprbU-Vl_qVQiZkEKMX_i5CmdScTToNTdkUY";
    const SHEET_NAME = "WEBSITE_REVIEWS";
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME)}`;

    fetch(url)
      .then((r) => r.text())
      .then((raw) => {
        const jsonStart = raw.indexOf("{");
        const jsonEnd = raw.lastIndexOf("}");
        const jsonString = raw.substring(jsonStart, jsonEnd + 1);
        const json = JSON.parse(jsonString);
        const rows = json.table.rows;
        const cols = json.table.cols;

        const colMap: Record<string, number> = {};
        cols.forEach((col: any, idx: number) => {
          if (col.label) colMap[col.label.trim()] = idx;
        });

        const skIdx = colMap["StoreKey"] !== undefined ? colMap["StoreKey"] : 0;
        const rnIdx = colMap["ReviewerName"] !== undefined ? colMap["ReviewerName"] : 1;
        const cmIdx = colMap["Comment"] !== undefined ? colMap["Comment"] : 2;
        const dtIdx = colMap["CreateTime"] !== undefined ? colMap["CreateTime"] : 3;

        const reviewsPool: Review[] = [];
        let totalVal: number | null = null;
        let avgVal: number | null = null;
        let hasStats = false;

        rows.forEach((row: any) => {
          if (!row.c) return;
          const sk = row.c[skIdx] ? row.c[skIdx].v || "" : "";
          if (sk !== STORE_KEY) return;

          const rn = row.c[rnIdx] ? row.c[rnIdx].v || "" : "";
          if (rn === "__STATS__") {
            const parsedTotal = parseInt(row.c[cmIdx] ? row.c[cmIdx].v : "", 10);
            const parsedAvg = parseFloat(row.c[dtIdx] ? row.c[dtIdx].v : "");
            if (Number.isFinite(parsedTotal) && Number.isFinite(parsedAvg)) {
              totalVal = parsedTotal;
              avgVal = parsedAvg;
              hasStats = true;
            }
            return;
          }

          const comment = row.c[cmIdx] ? row.c[cmIdx].v || "" : "";
          if (!comment || comment.length < 10) return;
          const name = rn || "Customer";
          const dateStr = row.c[dtIdx] ? row.c[dtIdx].v || "" : "";
          reviewsPool.push({ name, comment, date: dateStr });
        });

        setReviews(reviewsPool.slice(0, 6));
        if (hasStats && totalVal !== null && avgVal !== null) {
          setReviewsStats({ total: totalVal, avg: avgVal });
        }
        setReviewsLoading(false);
      })
      .catch((err) => {
        console.warn("Reviews fetch failed:", err);
        setReviewsLoading(false);
      });
  }, []);

  /* -- 2. Build Featured Strains -- */
  useEffect(() => {
    const pool = [...allFlowers].filter((f) => f.image);
    // Shuffle pool securely
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const picked: typeof pool = [];
    const tierCounts: Record<string, number> = {};

    for (const f of pool) {
      if (picked.length >= 8) break;
      const tc = tierCounts[f.tier] || 0;
      if (tc >= 2) continue; // max 2 per tier
      if (picked.some((p) => p.name === f.name)) continue; // avoid exact duplicates
      picked.push(f);
      tierCounts[f.tier] = tc + 1;
    }

    setFeaturedStrains(picked);
  }, []);

  return (
    <main className={styles.main}>
      {/* NAVBAR */}
      <Navbar />

      {/* -- WELCOME BANNER -- */}
      <section className={styles.welcomeBannerSection}>
        <div className={styles.welcomeBannerContainer}>
          <img
            src="/banners/KennedyLoud_Welcome_Banner.webp"
            alt="Welcome to Kennedy Loud Cannabis - Premium Brampton Cannabis Dispensary"
            className={styles.welcomeBannerImg}
          />
        </div>
      </section>

      {/* -- BENTO MOSAIC HERO -- */}
      <section className={styles.hiringCallout} aria-label="Hiring at Kennedy Loud Cannabis" style={{ "--hire-accent": "#9DFF20", "--hire-accent-soft": "rgba(157, 255, 32, 0.14)", "--hire-accent-border": "rgba(157, 255, 32, 0.34)" } as React.CSSProperties}>
        <div className={styles.hiringCalloutInner}>
          <div>
            <span className={styles.hiringEyebrow}>Budtenders / Managers Wanted</span>
            <h2>Join Kennedy Loud</h2>
            <p>Hillcrest Ave needs loud energy in the best way: motivated, reliable, and ready to learn. Online applications only. Please do not call the store about hiring.</p>
          </div>
          <Link href="/careers/budtender" className={styles.hiringButton}>Apply Online</Link>
        </div>
      </section>

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroStars} />

        <div className={styles.heroContent}>
          {/* Brand branding */}
          <div className={styles.brandBlock}>
            <h1 className={styles.brandTitle}>KENNEDY LOUD CANNABIS</h1>
            <p className={styles.brandSub}>Premium Cannabis Dispensary</p>
            <div className={styles.brandBadge}>Open 24 Hours</div>
          </div>

          {/* Sound wave equalizer - KLC signature */}
          <div className={styles.soundWaveBar}>
            {[...Array(10)].map((_, i) => <span key={i} />)}
          </div>
          <div className={styles.bentoGrid}>
            {BENTO_TIERS.map((tier) => (
              <Link
                key={tier.slug}
                href={`/${tier.slug}`}
                className={`${styles.bentoTile} ${tier.className}`}
              >
                <div
                  className={styles.bentoTileBg}
                  style={{ backgroundImage: `url('${tier.banner}')` }}
                />
                <div className={styles.bentoTileOverlay} />
                <div className={styles.bentoTileContent}>
                  <span className={styles.bentoLabel}>{tier.name}</span>
                  <span className={styles.bentoPrice}>{tier.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- EXPLORE CATEGORIES -- */}
      <section className={styles.categoriesSection} id="menu">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Explore Categories</h2>
            <p className={styles.sectionSubtitle}>
              From custom disposable vapes and concentrates to accessories and cigarettes.
            </p>
          </div>

          <div className={styles.categoriesGrid}>
            {EXPLORE_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className={styles.categoryCard}
              >
                <div
                  className={styles.categoryCardBg}
                  style={{ backgroundImage: `url('${cat.banner}')` }}
                />
                <div className={styles.categoryCardOverlay} />
                <div className={styles.categoryCardContent}>
                  <h3 className={styles.categoryCardName}>
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- FEATURED PRODUCTS -- */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Strains</h2>
            <p className={styles.sectionSubtitle}>
              Featured menu entries from the current Kennedy Loud Cannabis flower list.
            </p>
          </div>

          <div className={styles.featuredScroll}>
            {featuredStrains.map((strain, i) => (
              <div key={`${strain.sku}-${i}`} className={styles.scrollItem}>
                <FlowerCard flower={strain} tierKey={strain.tier} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- SEO PANEL WRITE-UP -- */}
      <section className={styles.seoSection}>
        <div className={styles.container}>
          <div className={styles.seoPanel}>
            <h2 className={styles.seoPanelTitle}>Kennedy Loud Cannabis In Brampton - Open 24 Hours</h2>
            <p className={styles.seoPanelText}>
              <strong>Kennedy Loud Cannabis</strong> is listed at 49 Hillcrest Ave, Unit 104 in Brampton. The site is organized around flower tiers, edibles, pre-rolls, vapes, concentrates, cigarettes, accessories, and specialty categories.
            </p>
            <p className={styles.seoPanelText}>
              The store lists Open 24 Hours. Use the current category pages to compare posted product details before visiting, especially if you are looking for a specific flower tier or format.
            </p>
            <p className={styles.seoPanelText}>
              Shoppers around Hillcrest Ave, Kennedy Road, Downtown Brampton, Queen Street, Main Street, and Bramalea can use the resource pages for visit planning and category shortcuts.
            </p>
          </div>
        </div>
      </section>

      {/* -- RESOURCE SIGNAL BOARD -- */}
      <section className={styles.resourceSignal}>
        <div className={styles.resourceSignalInner}>
          <div className={styles.resourceCopy}>
            <span className={styles.resourceEyebrow}>KLC resources</span>
            <h2>Local guides tuned for the Hillcrest Ave shop.</h2>
            <p>
              Built for shoppers who want the useful page fast: visit planning, flower tier logic,
              native smokes, vapes, concentrates, and the Brampton visit page.
            </p>
            <Link href="/resources" className={styles.resourceMainLink}>Open Resource Hub</Link>
          </div>
          <div className={styles.resourceCards}>
            {RESOURCE_LINKS.map((resource) => (
              <Link key={resource.href} href={resource.href} className={styles.resourceCard}>
                <span>{resource.label}</span>
                <h3>{resource.title}</h3>
                <p>{resource.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- CLIENT-SIDE GOOGLE REVIEWS SHOWCASE -- */}
      <section className={styles.reviewsSection}>
        <div className={styles.container}>
          <div className={styles.reviewsHeader}>
            <h2 className={styles.sectionTitle}>Customer Feedback</h2>
            {reviewsStats && (
              <div className={styles.reviewsStarsSummary}>
                <span className={styles.reviewsStars}>{"\u2605\u2605\u2605\u2605\u2605"}</span>
                <span className={styles.reviewsAvg}>
                  {reviewsStats.avg.toFixed(1)}
                </span>
                <span className={styles.reviewsCount}>
                  ({reviewsStats.total} reviews)
                </span>
              </div>
            )}
          </div>

          <div className={styles.reviewsGrid}>
            {reviewsLoading ? (
              <div className={styles.reviewsLoading}>Loading customer feedback...</div>
            ) : reviews.length === 0 ? (
              <div className={styles.reviewsLoading}>
                Customer feedback is unavailable right now.
              </div>
            ) : (
              reviews.map((rv, idx) => (
                <div key={idx} className={styles.rvCard}>
                  <div className={styles.rvTop}>
                    <div className={styles.rvAvatar}>
                      {rv.name.charAt(0).toUpperCase()}
                    </div>
                    <div className={styles.rvMeta}>
                      <span className={styles.rvName}>{rv.name}</span>
                      {rv.date && (
                        <span className={styles.rvDate}>
                          {new Date(rv.date).toLocaleDateString("en-CA", {
                            year: "numeric",
                            month: "short",
                          })}
                        </span>
                      )}
                    </div>
                    <span className={styles.rvStars}>*****</span>
                  </div>
                  <p className={styles.rvText}>
                    {rv.comment.length > 180 ? `${rv.comment.substring(0, 177)}...` : rv.comment}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className={styles.reviewCtaRow}>
          </div>
        </div>
      </section>

      {/* -- FAQS SECTION -- */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "32px" }}>
            Frequently Asked Questions
          </h2>
          {LOCAL_FAQS.map((faq, i) => (
            <details key={i} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{faq.q}</summary>
              <p className={styles.faqAnswer}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* -- STORE LOCATION GRID -- */}
      <section className={styles.storeSection} id="contact">
        <div className={styles.container}>
          <div className={styles.storeGrid}>
            <div className={styles.storeCard}>
              <h3 className={styles.storeCardTitle}>Location</h3>
              <p className={styles.storeCardText}>
                49 Hillcrest Ave, Unit 104
                <br />
                Brampton, ON L6W 1Y7
                <br />
              </p>
            </div>
            <div className={styles.storeCard}>
              <h3 className={styles.storeCardTitle}>Hours</h3>
              <p className={styles.storeCardText}>
                Open 7 Days a Week
                <br />
                <span className={styles.storeHighlight}>Open 24 Hours</span>
              </p>
            </div>
            <div className={styles.storeCard}>
              <h3 className={styles.storeCardTitle}>Walk In</h3>
              <p className={styles.storeCardText}>
                No appointment needed
                <br />
                <span className={styles.storeHighlight}>Hillcrest Ave, Brampton</span>
              </p>
            </div>
          </div>

          {/* Map wrapper */}
          <div className={styles.mapWrap}>
          </div>
        </div>
      </section>

      {/* -- FOOTER -- */}
      <Footer />
    </main>
  );
}

