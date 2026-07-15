/* Tier-specific SEO content for below-the-fold sections */

export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Cannabis Flower Brampton | Kennedy Loud Cannabis",
    seoIntro:
      "Review Exotic flower category information at Kennedy Loud Cannabis in Brampton. Confirm current strains, pricing, and menu details before visiting Hillcrest Ave.",
    sections: [
      {
        heading: "Exotic Flower Category",
        body:
          "The Exotic tier is used for higher-end flower options on the Kennedy Loud Cannabis menu. Product names, item details, and menu details can rotate, so use the current tier page before visiting.",
      },
      {
        heading: "Posted Exotic Tier Math",
        body:
          "The current tier setup lists Exotic at $20/g, with 3g bundle pricing at $40 and 6g bundle pricing at $60 where listed. Confirm the current product page before making a special trip.",
      },
      {
        heading: "Hillcrest Ave Flower Path",
        body:
          "Use the Exotic page when the visit is focused on the higher-end shelf, then compare it with Premium, AAA+, AA, or Budget if the trip is more price-driven.",
      },
    ],
    faqs: [
      { q: "What is Exotic cannabis flower?", a: "Exotic is a higher-end flower tier on the Kennedy Loud Cannabis menu." },
      { q: "How much does Exotic flower cost?", a: "The tier setup lists Exotic at $20/g, with 3g and 6g bundle pricing where listed. Confirm current product details before visiting." },
      { q: "Does Exotic menu details change?", a: "Yes. Strain names, item details, pricing, and menu details can rotate." },
    ],
  },

  PREMIUM: {
    seoTitle: "Premium Cannabis Flower Brampton | Kennedy Loud Cannabis",
    seoIntro:
      "Review Premium flower category information for Kennedy Loud Cannabis in Brampton. Confirm current products and pricing before visiting 49 Hillcrest Ave.",
    sections: [
      {
        heading: "Premium Flower Category",
        body:
          "The Premium tier helps shoppers compare higher-tier flower options without mixing them into the value categories. Menu details and pricing can change as the menu rotates.",
      },
      {
        heading: "Posted Premium Tier Math",
        body:
          "The current tier setup lists Premium at $15/g, with 3g bundle pricing at $30 and 6g bundle pricing at $45 where listed.",
      },
      {
        heading: "Compare Before Visiting",
        body:
          "Use the Premium page beside Exotic, AAA+, AA, and Budget to decide which shelf fits the visit before heading to Kennedy Loud Cannabis.",
      },
    ],
    faqs: [
      { q: "What is Premium cannabis flower?", a: "Premium is a flower tier used on the Kennedy Loud Cannabis menu." },
      { q: "How much does Premium flower cost?", a: "The tier setup lists Premium at $15/g, with 3g and 6g bundle pricing where listed." },
      { q: "Should I confirm Premium menu details?", a: "Yes. Current product details should be confirmed before visiting." },
    ],
  },

  "AAA+": {
    seoTitle: "AAA+ Cannabis Flower Brampton | Kennedy Loud Cannabis",
    seoIntro:
      "Browse AAA+ flower category information for Kennedy Loud Cannabis in Brampton. Confirm current strains, prices, and menu details before visiting.",
    sections: [
      {
        heading: "AAA+ Flower Category",
        body:
          "AAA+ is one of the flower tiers used to help shoppers compare product levels on the Kennedy Loud Cannabis menu. Current strain menu details and pricing can change.",
      },
      {
        heading: "Posted AAA+ Tier Math",
        body:
          "The current tier setup lists AAA+ at $10/g, with 3g bundle pricing at $20 and 6g bundle pricing at $30 where listed.",
      },
      {
        heading: "Use The Current Tier Page",
        body:
          "Use the AAA+ page to compare listed products with Budget, AA, Premium, and Exotic before visiting the Brampton store.",
      },
    ],
    faqs: [
      { q: "What is AAA+ cannabis flower?", a: "AAA+ is a flower tier used for menu organization at Kennedy Loud Cannabis." },
      { q: "How much does AAA+ flower cost?", a: "The tier setup lists AAA+ at $10/g, with 3g and 6g bundle pricing where listed." },
      { q: "Does AAA+ menu details change?", a: "Yes. Flower menu details can rotate, so check the current page before visiting." },
    ],
  },

  AA: {
    seoTitle: "AA Cannabis Flower Brampton | Kennedy Loud Cannabis",
    seoIntro:
      "Review AA flower category information at Kennedy Loud Cannabis in Brampton. Confirm current menu details before visiting Hillcrest Ave.",
    sections: [
      {
        heading: "AA Flower Category",
        body:
          "AA is a flower tier used for shoppers comparing value-oriented flower options. Current product details can rotate with the menu.",
      },
      {
        heading: "Posted AA Tier Math",
        body:
          "The current tier setup lists AA at $4/g. Check the AA page for current products and any listed bundle or ounce details before visiting.",
      },
    ],
    faqs: [
      { q: "What is AA cannabis flower?", a: "AA is a flower tier used on the Kennedy Loud Cannabis menu." },
      { q: "How much does AA flower cost?", a: "The tier setup lists AA at $4/g. Confirm current listings before visiting." },
    ],
  },

  BUDGET: {
    seoTitle: "Budget Cannabis Brampton | Kennedy Loud Cannabis",
    seoIntro:
      "Browse budget flower category information at Kennedy Loud Cannabis in Brampton. Confirm current value options and menu details before visiting.",
    sections: [
      {
        heading: "Budget Flower Category",
        body:
          "The Budget tier helps shoppers find value-oriented flower options when they are listed. Product details, pricing, and menu details can change as the menu rotates.",
      },
      {
        heading: "Posted Budget Tier Math",
        body:
          "The current tier setup lists Budget at $3/g and includes a $10 / 3g special where listed. Use the Budget page for current product details before visiting.",
      },
    ],
    faqs: [
      { q: "What is Budget flower?", a: "Budget is a value-oriented flower tier on the Kennedy Loud Cannabis menu." },
      { q: "How much does Budget flower cost?", a: "The tier setup lists Budget at $3/g, with a $10 / 3g special where listed." },
      { q: "Does Budget menu details change?", a: "Yes. Check the current Budget page before visiting Kennedy Loud Cannabis." },
    ],
  },
};
