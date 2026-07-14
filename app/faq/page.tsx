import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "FAQ - Kennedy Loud Cannabis | Brampton Dispensary Questions",
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
      { q: "Where is Kennedy Loud Cannabis located?", a: "Kennedy Loud Cannabis is located at 49 Hillcrest Ave, Unit 104, Brampton, ON L6W 1Y7." },
      { q: "What are your hours?", a: "The store lists Open 24 Hours. Bring valid 19+ government ID when visiting." },
      { q: "Is there parking nearby?", a: "For parking or transit details, use the current map listing or contact the store before visiting." },
      { q: "What nearby areas are useful for this location?", a: "This Brampton location is useful for shoppers around Hillcrest Ave, Kennedy Road, Queen Street, Main Street, Downtown Brampton, and Bramalea." },
      { q: "What's the best way to get to Kennedy Loud Cannabis?", a: "Confirm your route with the current map listing before visiting, especially if you are coming from outside Brampton." },
    ],
  },
  {
    title: "Products & Menu",
    faqs: [
      { q: "What products are on the site?", a: "The site includes category information for flower tiers, edibles, vape pens, disposable vapes, concentrates, pre-rolls, native cigarettes, accessories, and specialty items. Current availability can change." },
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
      { q: "What is the cheapest weed you sell?", a: "Budget-oriented flower options are listed in the menu when available. Check current pricing and availability before visiting." },
      { q: "What bundle pricing do you show?", a: "Flower bundle pricing is shown by tier where listed. The Exotic, Premium, and AAA+ tiers show 3g and 6g bundle pricing in the current tier setup." },
      { q: "Do you have ounce deals?", a: "Ounce and bundle details can change as stock rotates. Check the current menu for the latest pricing information." },
      { q: "How does tier pricing work?", a: "Flower is organized into tier pages so shoppers can compare posted per-gram pricing and bundle information before visiting." },
    ],
  },
  {
    title: "Shopping & Delivery",
    faqs: [
      { q: "Do I need an appointment?", a: "No appointment is listed as required. Bring valid 19+ government ID when visiting." },
      { q: "Can I order online?", a: "Currently, Kennedy Loud Cannabis is an in-store shopping experience. You can browse menu and category information online before visiting." },
      { q: "Do you offer delivery?", a: "Delivery information is being prepared. Visit the delivery page for updates." },
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
            Everything you need to know about Kennedy Loud Cannabis at 49 Hillcrest Ave, Unit 104 in Brampton.
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
              Call Kennedy Loud Cannabis at <a href="tel:+14372372286">(437) 237-2286</a> or visit 49 Hillcrest Ave, Unit 104 in Brampton.
            </p>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
