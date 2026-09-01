import Link from "next/link";
import styles from "./GBPLandingPage.module.css";
import { gbpLocation } from "../lib/gbp-location";
import {
  FindYourWeed,
  type WeedDiscoveryGroup,
} from "./weed-seo/FindYourWeed";

const discoveryGroups: WeedDiscoveryGroup[] = [
  {
    heading: "Browse Flower by Tier",
    items: [
      { label: "Budget", description: "Start with the Budget flower section.", href: "/budget" },
      { label: "AA", description: "Browse the AA flower section.", href: "/aa" },
      { label: "AAA+", description: "Explore the AAA+ flower section.", href: "/aaa" },
      { label: "Premium", description: "Browse the Premium flower section.", href: "/premium" },
      { label: "Exotic", description: "Explore the Exotic flower section.", href: "/exotic" },
    ],
  },
  {
    heading: "Browse Other Cannabis Categories",
    items: [
      { label: "Pre-Rolls", description: "Browse the Pre-Rolls section.", href: "/items/prerolls" },
      { label: "Edibles", description: "Explore the Edibles section.", href: "/items/edibles" },
      { label: "THC Vape", description: "Browse the THC Vape section.", href: "/items/vape-disposables" },
      { label: "Concentrates", description: "Explore the Concentrates section.", href: "/items/concentrates" },
      { label: "Accessories", description: "Browse the Accessories section.", href: "/items/add-ons" },
    ],
  },
];

type StoreSchemaMarkup = {
  "@context": "https://schema.org";
  "@type": "Store";
  name: string;
  url: string;
  telephone: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  priceRange: string;
  openingHours?: string[];
  geo?: {
    "@type": "GeoCoordinates";
    latitude: number;
    longitude: number;
  };
};

const faqs = [
  {
    question: "Where is Kennedy Loud Cannabis in Brampton?",
    answer: (
      <>
        Kennedy Loud Cannabis is located at <strong>49 Hillcrest Ave Unit 104, Brampton, ON L6W 1Y7</strong>.
      </>
    ),
  },
  {
    question: "Is Kennedy Loud Cannabis open 24 hours?",
    answer: <>Yes. The verified Kennedy Loud Cannabis store hours are <strong>24 hours a day, seven days a week</strong>.</>,
  },
  {
    question: "What can I browse before visiting Kennedy Loud Cannabis?",
    answer: (
      <>
        The Kennedy Loud Cannabis website includes sections for flower tiers, pre-rolls, edibles,
        THC vapes, concentrates, accessories and other categories. Use the <strong>Find Your Weed</strong>{" "}
        section on this page for direct links into the main verified category routes. Specific
        products, prices and availability should be confirmed through the current menu rather than
        assumed from this page.
      </>
    ),
  },
  {
    question: "What is the difference between weed and cannabis?",
    answer: (
      <>
        <strong>Weed</strong> is common everyday terminology for cannabis. <strong>Cannabis</strong>{" "}
        is the broader and more formal term and can describe several menu categories, including
        flower, pre-rolls, edibles, THC vapes and concentrates. Kennedy Loud Cannabis uses both
        terms because people search and shop using both kinds of language.
      </>
    ),
  },
  {
    question: "What is the difference between bud and flower?",
    answer: (
      <>
        <strong>Flower</strong> is the menu/category term for dried cannabis flower. <strong>Bud</strong>{" "}
        is a common informal word people use for flower. The Kennedy Loud Cannabis website
        organizes flower browsing into Budget, AA, AAA+, Premium and Exotic sections.
      </>
    ),
  },
  {
    question: "Do I need to be 19+ to visit Kennedy Loud Cannabis?",
    answer: <>Yes. Kennedy Loud Cannabis is for <strong>adults 19+</strong>.</>,
  },
  {
    question: "How can I check product details before making a special trip?",
    answer: (
      <>
        Use the current Kennedy Loud Cannabis menu and the relevant category page to check specific
        product information before visiting. This Weed Dispensary in Brampton page is intended as a
        store, category and navigation guide and does not make current stock or availability claims.
      </>
    ),
  },
];

export function GBPLandingPage() {
  const schemaMarkup: StoreSchemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: gbpLocation.storeName,
    url: `https://${gbpLocation.domain}/${gbpLocation.slug}/`,
    telephone: gbpLocation.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: gbpLocation.streetAddress,
      addressLocality: gbpLocation.city,
      addressRegion: gbpLocation.province,
      postalCode: gbpLocation.postalCode,
      addressCountry: gbpLocation.country,
    },
    priceRange: "$$",
  };

  if (gbpLocation.hours.length > 0) {
    schemaMarkup.openingHours = gbpLocation.hours;
  }

  if (gbpLocation.latitude && gbpLocation.longitude) {
    schemaMarkup.geo = {
      "@type": "GeoCoordinates",
      latitude: Number(gbpLocation.latitude),
      longitude: Number(gbpLocation.longitude),
    };
  }

  return (
    <main className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <header className={styles.hero}>
        <h1 className={styles.h1}>Kennedy Loud Cannabis — Weed Dispensary in Brampton</h1>
        <p className={styles.heroAddress}>49 Hillcrest Ave Unit 104, Brampton, ON L6W 1Y7</p>
        <p className={styles.heroTagline}>Open 24 Hours · Adults 19+</p>
        <div className={styles.btnRow}>
          <Link href="#find-your-weed" className={`${styles.btn} ${styles.btnPrimary}`}>
            Browse Categories
          </Link>
          <Link href="#visit" className={`${styles.btn} ${styles.btnSecondary}`}>
            Plan Your Visit
          </Link>
        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.h2}>Local Weed Dispensary Information in Brampton</h2>
        <p className={styles.introText}>
          Kennedy Loud Cannabis is located at <strong>49 Hillcrest Ave Unit 104 in Brampton</strong>{" "}
          and is open <strong>24 hours</strong>.
        </p>
        <p className={styles.infoText}>
          If you call it <strong>weed</strong>, <strong>cannabis</strong>, <strong>bud</strong> or{" "}
          <strong>flower</strong>, this page is designed to make the store easier to understand
          before you visit. Adults 19+ can use the links below to explore the main cannabis
          categories available across the Kennedy Loud Cannabis website, learn how the menu is
          organized and find useful visit information in one place.
        </p>
        <p className={styles.infoText}>
          The site includes dedicated sections for flower, pre-rolls, edibles, THC vapes,
          concentrates and other cannabis-related categories. If you are looking for a particular
          format, start with <strong>Find Your Weed</strong> below and follow the category that
          matches what you want to browse.
        </p>
        <p className={styles.infoText}>
          Because individual product details can change, use the current menu and category pages to
          confirm specific product information before making a special trip.
        </p>
      </section>

      <FindYourWeed
        storeName="Kennedy Loud Cannabis"
        groups={discoveryGroups}
        guide={{
          label: "Read the Flower Tier Guide",
          description: "Learn how the flower sections are organized.",
          href: "/resources/flower-tier-guide",
        }}
      />

      <section className={styles.section}>
        <h2 className={styles.h2}>Weed, Cannabis, Bud and Flower: What Do the Terms Mean?</h2>
        <p className={styles.infoText}>
          People use several different words when talking about cannabis. They overlap, but they are
          not always describing exactly the same thing.
        </p>
        <div className={styles.termGrid}>
          <article>
            <h3 className={styles.h3}>Weed</h3>
            <p className={styles.infoText}>
              <strong>Weed</strong> is common everyday language for cannabis. Someone looking for a
              weed dispensary, weed store or weed in Brampton may simply be using a more casual term
              for the same general category of products found on a cannabis menu.
            </p>
            <p className={styles.infoText}>
              That is why Kennedy Loud Cannabis uses both <strong>weed</strong> and{" "}
              <strong>cannabis</strong> naturally throughout this page rather than treating them as
              completely separate subjects.
            </p>
          </article>
          <article>
            <h3 className={styles.h3}>Cannabis</h3>
            <p className={styles.infoText}><strong>Cannabis</strong> is the broader and more formal term.</p>
            <p className={styles.infoText}>
              A cannabis menu can include several formats, including flower, pre-rolls, edibles,
              THC vapes and concentrates. When this site refers to cannabis categories, it is
              talking about that broader menu rather than only dried flower.
            </p>
          </article>
          <article>
            <h3 className={styles.h3}>Flower</h3>
            <p className={styles.infoText}><strong>Flower</strong> refers specifically to the dried cannabis flower category.</p>
            <p className={styles.infoText}>
              Kennedy Loud Cannabis organizes its flower browsing into several tier sections,
              including Budget, AA, AAA+, Premium and Exotic. Those sections are navigation
              categories; the current menu should be used for specific product details.
            </p>
            <Link href="/resources/flower-tier-guide" className={styles.textLink}>
              Explore the Flower Tier Guide
            </Link>
          </article>
          <article>
            <h3 className={styles.h3}>Bud</h3>
            <p className={styles.infoText}><strong>Bud</strong> is an informal word commonly used for cannabis flower.</p>
            <p className={styles.infoText}>
              So a person talking about <strong>weed</strong>, <strong>bud</strong> or{" "}
              <strong>flower</strong> may sometimes be looking for the same general type of product,
              while <strong>cannabis</strong> can describe the broader range of categories across the
              menu.
            </p>
            <p className={styles.infoText}>
              Whatever terminology you use, the category links on this page are intended to give
              you a clear starting point.
            </p>
          </article>
        </div>
      </section>

      <section id="visit" className={styles.section}>
        <h2 className={styles.h2}>Plan Your Visit to Kennedy Loud Cannabis</h2>
        <div className={styles.visitGrid}>
          <div className={styles.napDetails}>
            <strong>Kennedy Loud Cannabis</strong>
            <span>49 Hillcrest Ave Unit 104</span>
            <span>Brampton, ON L6W 1Y7</span>
            <span>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${gbpLocation.phoneIntl}`}>+1 (289) 206-1181</a>
            </span>
            <span><strong>Hours:</strong> Open 24 Hours</span>
            <span><strong>Adults 19+</strong></span>
          </div>
          <div>
            <p className={styles.infoText}>
              Before making a special trip for a particular product, use the current menu or
              relevant category page to review the latest product information.
            </p>
            <p className={styles.infoText}>
              For more store and site information, visit the{" "}
              <Link href="/resources" className={styles.textLink}>Kennedy Loud Cannabis Resources</Link>{" "}
              section.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Helpful Guides Before You Visit</h2>
        <p className={styles.infoText}>
          The Kennedy Loud Cannabis resource section contains additional information for adults 19+
          who want to understand the store, its categories or the way the website is organized.
        </p>
        <div className={styles.guideGrid}>
          <article>
            <h3 className={styles.h3}>Hillcrest Ave Visit Guide</h3>
            <p className={styles.infoText}>Use the store-specific visit guide for additional planning information.</p>
            <Link href="/resources/hillcrest-ave-visit-guide" className={styles.textLink}>Read the Hillcrest Ave Visit Guide</Link>
          </article>
          <article>
            <h3 className={styles.h3}>Kennedy Road Brampton Menu Map</h3>
            <p className={styles.infoText}>Use the menu map to understand the main parts of the Kennedy Loud Cannabis website.</p>
            <Link href="/resources/kennedy-road-menu-map" className={styles.textLink}>Open the Menu Map</Link>
          </article>
          <article>
            <h3 className={styles.h3}>Flower Tier Guide</h3>
            <p className={styles.infoText}>Learn how the site&apos;s flower sections are organized before browsing.</p>
            <Link href="/resources/flower-tier-guide" className={styles.textLink}>Explore the Flower Tier Guide</Link>
          </article>
          <article>
            <h3 className={styles.h3}>24-Hour Brampton Dispensary Guide</h3>
            <p className={styles.infoText}>For additional information related to Kennedy Loud Cannabis and its 24-hour schedule:</p>
            <Link href="/resources/24-hour-brampton-dispensary-guide" className={styles.textLink}>Read the 24-Hour Brampton Dispensary Guide</Link>
          </article>
        </div>
      </section>

      <section id="faq" className={styles.section}>
        <h2 className={styles.h2}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqs.map((faq) => (
            <article key={faq.question} className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>{faq.question}</h3>
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
