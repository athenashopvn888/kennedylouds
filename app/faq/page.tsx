import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: { absolute: "FAQ | Kennedy Loud Cannabis Brampton Dispensary" },
  description:
    "Frequently asked questions about Kennedy Loud Cannabis in Brampton. Hours, location, menu categories, pricing notes, delivery updates, and visit basics.",
  alternates: {
    canonical: "https://kennedyloudcannabis.com/faq",
  },
};

const FAQ_CATEGORIES = [
  {
    title: "Location & Hours",
    faqs: [
      { q: "Where is Kennedy Loud Cannabis located?", a: "Kennedy Loud Cannabis is located at 49 Hillcrest Ave Unit 104, Brampton, ON L6W 1Y7." },
      { q: "What are your hours?", a: "The store lists Open 24 Hours. Bring valid 19+ government ID when visiting. For 24 hour dispensary Brampton and open-now questions, use the dedicated 24-hour FAQ." },
      { q: "Is there parking nearby?", a: "For parking or transit details, use the current map listing or contact the store before visiting." },
      { q: "What nearby areas are useful for this location?", a: "This Brampton location is useful for shoppers around Hillcrest Ave, Kennedy Road, Queen Street, Main Street, Downtown Brampton, and Bramalea." },
      { q: "What's the simplest way to get to Kennedy Loud Cannabis?", a: "Confirm your route with the current map listing before visiting, especially if you are coming from outside Brampton." },
    ],
  },
  {
    title: "Products & Menu",
    faqs: [
      { q: "What products are on the site?", a: "The site includes category information for flower tiers, edibles, vape pens, disposable vapes, concentrates, pre-rolls, native cigarettes, accessories, and specialty items. Current menu details can change." },
      { q: "Do you have a menu online?", a: "Yes. You can browse menu and category information online before visiting. Confirm current details before making a special trip." },
      { q: "What are your flower tiers?", a: "The flower menu is organized into tiers such as Exotic, Premium, AAA+, AA, and Budget so shoppers can compare posted product levels more easily." },
      { q: "Do you sell edibles?", a: "The site includes an edibles category. Check current category details before visiting for a specific edible product." },
      { q: "Do you sell vapes?", a: "The site includes THC Vape and Nic Vape categories. Check current category pages for listed items." },
      { q: "Do you sell native cigarettes?", a: "The site includes a cigarettes category. Check the current brand mix before visiting Hillcrest Ave." },
    ],
  },
  {
    title: "Pricing & Bundle Notes",
    faqs: [
      { q: "What is the cheapest weed you sell?", a: "Budget-oriented flower options are listed in the menu when available. Check current pricing and menu details before visiting." },
      { q: "What bundle pricing do you show?", a: "Flower bundle pricing is shown by tier where listed. The Exotic, Premium, and AAA+ tiers show 3g and 6g bundle pricing in the current tier setup." },
      { q: "Do you have ounce deals?", a: "Ounce and bundle details can change as stock rotates. Check the current menu for the latest pricing information." },
      { q: "How does tier pricing work?", a: "Flower is organized into tier pages so shoppers can compare posted per-gram pricing and bundle information before visiting." },
    ],
  },
  {
    title: "Shopping & Delivery",
    faqs: [
      { q: "Do I need an appointment?", a: "No appointment is listed as required. Bring valid 19+ government ID when visiting." },
      { q: "Can I order online?", a: "You can browse the walk-in menu online, then visit Unit 104, or start a LIVE ORDER on the delivery catalog. The dispatcher confirms availability and delivery details before an order is accepted." },
      { q: "Do you offer delivery?", a: "Yes. Kennedy Loud Cannabis offers Hillcrest / Kennedy cannabis delivery from 49 Hillcrest Ave Unit 104. Delivery hours are confirmed by the dispatcher and are not listed as 24/7. The walk-in counter remains Open 24 Hours." },
      { q: "What payment methods do you accept?", a: "The site lists cash and debit. Contact the store before visiting if payment details are important for your trip." },
      { q: "Can staff help me choose?", a: "Staff can help adult 19+ shoppers compare menu categories, product styles, and budget ranges during posted store hours." },
    ],
  },
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
      cat.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={styles.main}>
        <Navbar />

        <section style={{ width: "100%", overflow: "hidden", marginTop: "92px" }}>
          <img
            src="/banners/KennedyLoud_FAQ_Info.webp"
            alt="Kennedy Loud Cannabis FAQ"
            style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
          />
        </section>

        <div className={styles.content}>
          <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
          <p className={styles.pageSubtitle}>
            Everything you need to know about Kennedy Loud Cannabis at 49 Hillcrest Ave Unit 104 in Brampton.
            For listed hours and late-night arrival, see the{" "}
            <Link href="/24-hour-dispensary-brampton">24-hour / open-now Brampton FAQ</Link>. For the Unit 104
            door, see{" "}
            <Link href="/visit">how to find Kennedy Loud</Link>. For the Kennedy / Queen / Main corridor note, see
            the{" "}
            <Link href="/cannabis-store-brampton">central Brampton cannabis store</Link>. For the Hillcrest /
            Kennedy weed hub, see the{" "}
            <Link href="/weed-dispensary-brampton/">central Brampton weed dispensary</Link>. For dispatcher delivery
            from Unit 104, see{" "}
            <Link href="/cannabis-delivery-hillcrest-brampton">Hillcrest / Kennedy cannabis delivery</Link>. Flower collections:{" "}
            <Link href="/exotic-weed">Exotic</Link>,{" "}
            <Link href="/premium-weed">Premium</Link>,{" "}
            <Link href="/aaa-weed">AAA+</Link>,{" "}
            <Link href="/aa-weed">AA</Link>, and{" "}
            <Link href="/budget-weed">Budget</Link>.
          </p>

          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.title} className={styles.category}>
              <h2 className={styles.categoryTitle}>{cat.title}</h2>
              {cat.faqs.map((faq) => (
                <details key={faq.q} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.q}</summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </div>
          ))}

          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Still have questions?</h2>
            <p className={styles.ctaText}>
              Call Kennedy Loud Cannabis at <a href="tel:+12892061181">+1 (289) 206-1181</a> or visit 49 Hillcrest Ave Unit 104 in Brampton.
            </p>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
