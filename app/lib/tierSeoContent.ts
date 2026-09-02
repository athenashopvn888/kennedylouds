export interface TierSeoData {
  seoTitle: string;
  metaDescription: string;
  socialTitle: string;
  socialDescription: string;
  h1: string;
  imageAlt: string;
  strainHeading: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_COMPARE = {
  heading: "Compare Kennedy Loud Cannabis Flower Tiers",
  body: "Kennedy Loud Cannabis separates flower into Exotic, Premium, AAA+, AA and Budget tier pages. Use the individual tier routes for focused browsing, or return to the broader Weed page for the wider Kennedy Loud Cannabis Weed overview.",
  ownerSentence: "Want the wider Kennedy Loud Cannabis Weed overview instead of a single flower tier? Visit the broad Weed Dispensary in Brampton page.",
  ownerAnchor: "Kennedy Loud Cannabis Weed Dispensary in Brampton",
  ownerHref: "/weed-dispensary-brampton/",
} as const;

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed & Cannabis Flower in Brampton | Kennedy Loud Cannabis",
    metaDescription: "Explore the Exotic weed and cannabis flower tier at Kennedy Loud Cannabis in Brampton as one distinct part of its five-tier flower structure.",
    socialTitle: "Exotic Weed & Cannabis Flower | Kennedy Loud Cannabis",
    socialDescription: "Explore Kennedy Loud Cannabis's dedicated Exotic weed and cannabis flower tier in Brampton.",
    h1: "Exotic Weed & Cannabis Flower in Brampton",
    imageAlt: "Exotic weed and cannabis flower tier at Kennedy Loud Cannabis",
    strainHeading: "Explore the Exotic Flower Tier",
    seoIntro: "Kennedy Loud Cannabis keeps Exotic on its own dedicated flower route as part of a five-tier browsing structure. This page is specifically about the Exotic tier, while the broader Weed Dispensary in Brampton page continues to cover the wider Weed topic.",
    sections: [
      { heading: "Exotic Has a Dedicated Place at Kennedy Loud", body: "Rather than combining every flower tier into one page, Kennedy Loud Cannabis gives Exotic its own focused destination alongside Premium, AAA+, AA and Budget. That separation keeps the page useful for tier-specific browsing." },
      { heading: "Move Between Kennedy Loud Flower Tiers", body: "The Exotic route is one entry point into Kennedy Loud Cannabis's wider flower structure. Shoppers comparing category paths can move directly between the five existing tier pages without turning this page into another broad Weed landing page." },
    ],
    faqs: [
      { q: "What is the Exotic tier at Kennedy Loud Cannabis?", a: "Exotic is one of five dedicated cannabis flower tiers used on the Kennedy Loud Cannabis site." },
      { q: "Is the Exotic page the main Kennedy Loud Weed page?", a: "No. The Exotic page is tier-specific, while the Weed Dispensary in Brampton page remains the broad Weed owner." },
      { q: "Which Kennedy Loud flower tiers can I compare with Exotic?", a: "Kennedy Loud Cannabis also has dedicated Premium, AAA+, AA and Budget tier pages." },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed & Cannabis Flower in Brampton | Kennedy Loud Cannabis",
    metaDescription: "Explore the Premium weed and cannabis flower tier at Kennedy Loud Cannabis in Brampton through its dedicated tier page.",
    socialTitle: "Premium Weed & Cannabis Flower | Kennedy Loud Cannabis",
    socialDescription: "Explore Kennedy Loud Cannabis's dedicated Premium cannabis flower tier in Brampton.",
    h1: "Premium Weed & Cannabis Flower in Brampton",
    imageAlt: "Premium weed and cannabis flower tier at Kennedy Loud Cannabis",
    strainHeading: "Browse the Premium Flower Tier",
    seoIntro: "Premium has its own dedicated route within Kennedy Loud Cannabis's existing flower system. The page stays centered on this tier instead of repeating the broader Brampton Weed content already owned by the main Weed landing page.",
    sections: [
      { heading: "A Separate Route for the Premium Tier", body: "Kennedy Loud Cannabis treats Premium as its own flower category rather than folding it into Exotic, AAA+, AA or Budget. The dedicated route gives this tier a clear role in the site's browsing structure." },
      { heading: "Premium Within the Five-Tier Menu", body: "Premium is one of five established flower paths at Kennedy Loud Cannabis. Keeping each path distinct makes it easier to move between tiers while preserving the broad Weed page for general store-level intent." },
    ],
    faqs: [
      { q: "What is the Premium tier at Kennedy Loud Cannabis?", a: "Premium is one of Kennedy Loud Cannabis's five dedicated cannabis flower tiers." },
      { q: "Does the Premium page replace the main Weed page?", a: "No. Premium serves a specific flower-tier intent, while the Weed Dispensary in Brampton page remains the broader Weed destination." },
      { q: "What other flower tiers are separate from Premium?", a: "Exotic, AAA+, AA and Budget each have their own dedicated Kennedy Loud Cannabis tier pages." },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed & Cannabis Flower in Brampton | Kennedy Loud Cannabis",
    metaDescription: "Explore the AAA+ weed and cannabis flower tier at Kennedy Loud Cannabis in Brampton as its own focused flower category.",
    socialTitle: "AAA+ Weed & Cannabis Flower | Kennedy Loud Cannabis",
    socialDescription: "Explore the dedicated AAA+ cannabis flower tier at Kennedy Loud Cannabis in Brampton.",
    h1: "AAA+ Weed & Cannabis Flower in Brampton",
    imageAlt: "AAA+ weed and cannabis flower tier at Kennedy Loud Cannabis",
    strainHeading: "Explore the AAA+ Flower Category",
    seoIntro: "Kennedy Loud Cannabis separates AAA+ into a dedicated flower page so this tier has a clear destination of its own. The page supports AAA+-specific browsing while remaining subordinate to the site's established broad Weed owner.",
    sections: [
      { heading: "AAA+ as Its Own Kennedy Loud Category", body: "AAA+ is not merged into the other Kennedy Loud flower tiers. Its dedicated route keeps the category distinct from Exotic, Premium, AA and Budget within the existing five-tier system." },
      { heading: "Use AAA+ as a Tier-Specific Starting Point", body: "This page is designed for visitors beginning with the AAA+ category rather than with a general Weed search. The wider Weed Dispensary in Brampton page continues to handle broad store-level Weed intent." },
    ],
    faqs: [
      { q: "What does AAA+ identify on the Kennedy Loud site?", a: "AAA+ identifies one of Kennedy Loud Cannabis's dedicated cannabis flower tiers." },
      { q: "Why does AAA+ have a separate page?", a: "The separate route keeps AAA+-specific flower browsing distinct from the site's other four tier categories." },
      { q: "Can I browse other Kennedy Loud flower tiers from here?", a: "Yes. Exotic, Premium, AA and Budget each have their own dedicated tier routes." },
    ],
  },
  AA: {
    seoTitle: "AA Weed & Cannabis Flower in Brampton | Kennedy Loud Cannabis",
    metaDescription: "Explore the AA weed and cannabis flower tier at Kennedy Loud Cannabis in Brampton on its dedicated flower category page.",
    socialTitle: "AA Weed & Cannabis Flower | Kennedy Loud Cannabis",
    socialDescription: "Explore Kennedy Loud Cannabis's dedicated AA cannabis flower tier in Brampton.",
    h1: "AA Weed & Cannabis Flower in Brampton",
    imageAlt: "AA weed and cannabis flower tier at Kennedy Loud Cannabis",
    strainHeading: "Browse the AA Flower Category",
    seoIntro: "The AA route gives Kennedy Loud Cannabis a focused page for this individual cannabis flower tier. It stays deliberately narrow so the site's broader Weed Dispensary in Brampton page can retain the general Weed role.",
    sections: [
      { heading: "AA Has Its Own Tier Destination", body: "Kennedy Loud Cannabis separates AA from Exotic, Premium, AAA+ and Budget instead of presenting every flower category through the same page. That gives AA its own defined place in the site structure." },
      { heading: "Keep Broad Weed and AA Intent Separate", body: "Visitors interested specifically in the AA category can use this tier page, while broader Weed browsing remains on the main Kennedy Loud Cannabis Weed page. The two pages therefore serve different search and browsing purposes." },
    ],
    faqs: [
      { q: "What is the AA tier at Kennedy Loud Cannabis?", a: "AA is one of the five dedicated cannabis flower tiers used by Kennedy Loud Cannabis." },
      { q: "Is the AA page Kennedy Loud's broad Weed landing page?", a: "No. AA is a narrow tier page; the Weed Dispensary in Brampton page remains the broad Weed owner." },
      { q: "Which other Kennedy Loud flower tiers have their own pages?", a: "Kennedy Loud Cannabis has separate pages for Exotic, Premium, AAA+ and Budget." },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed & Cannabis Flower in Brampton | Kennedy Loud Cannabis",
    metaDescription: "Explore the Budget cannabis flower tier at Kennedy Loud Cannabis in Brampton without implying current prices, promotions or availability.",
    socialTitle: "Budget Weed & Cannabis Flower | Kennedy Loud Cannabis",
    socialDescription: "Explore Kennedy Loud Cannabis's dedicated Budget cannabis flower tier in Brampton.",
    h1: "Budget Weed & Cannabis Flower in Brampton",
    imageAlt: "Budget weed and cannabis flower tier at Kennedy Loud Cannabis",
    strainHeading: "Explore the Budget Flower Tier",
    seoIntro: "Budget is an established category name within Kennedy Loud Cannabis's five-tier flower structure. This dedicated page identifies that tier without making claims about current prices, deals, products, stock or availability.",
    sections: [
      { heading: "Budget as a Defined Flower Category", body: "Kennedy Loud Cannabis keeps Budget separate from Exotic, Premium, AAA+ and AA within its existing flower architecture. The category therefore has a dedicated route and a distinct browsing role." },
      { heading: "Browse Budget Without Changing the Broad Weed Owner", body: "The Budget page handles tier-specific browsing only. Visitors looking for the wider Kennedy Loud Cannabis Weed experience can return to the established Weed Dispensary in Brampton page." },
    ],
    faqs: [
      { q: "What does Budget mean on the Kennedy Loud Cannabis site?", a: "Budget is the name of one of Kennedy Loud Cannabis's five dedicated cannabis flower tiers." },
      { q: "Does the Budget label confirm a current price or deal?", a: "No. The category name does not establish any current price, deal, promotion, stock or availability." },
      { q: "What other flower tiers can I browse at Kennedy Loud Cannabis?", a: "The other dedicated tier pages are Exotic, Premium, AAA+ and AA." },
    ],
  },
};
