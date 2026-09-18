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
  heading: "Compare Kennedy Loud Weed & Flower Tiers",
  body: "Kennedy Loud Cannabis organizes Cannabis Flower into Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed at the Hillcrest / Kennedy walk-in. Explore one collection or compare several based on the product information shown while you browse.",
  ownerSentence: "Want the Hillcrest / Kennedy weed hub instead of one flower collection?",
  ownerAnchor: "Hillcrest / Kennedy weed dispensary in central Brampton",
  ownerHref: "/weed-dispensary-brampton/",
} as const;

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed & Cannabis Flower Brampton | Kennedy Loud Cannabis",
    metaDescription: "Exotic Weed at Kennedy Loud, 49 Hillcrest Ave Unit 104 in central Brampton. Compare this collection with four other flower tiers. Adults 19+.",
    socialTitle: "Exotic Weed & Cannabis Flower | Kennedy Loud Cannabis",
    socialDescription: "Explore Kennedy Loud Cannabis Exotic Weed and Cannabis Flower in Brampton.",
    h1: "Exotic Weed & Cannabis Flower in Brampton",
    imageAlt: "Exotic Weed and Cannabis Flower at Kennedy Loud Cannabis",
    strainHeading: "Explore Exotic Weed Strains",
    seoIntro: "Kennedy Loud Cannabis presents Exotic Weed as one of its Cannabis Flower collections at 49 Hillcrest Ave Unit 104 on the Hillcrest / Kennedy side of central Brampton. Browse the products shown within this collection and compare Exotic Weed with other Kennedy Loud flower selections that catch your interest.",
    sections: [
      { heading: "Explore Exotic Weed at Kennedy Loud Cannabis", body: "Exotic Weed gives shoppers a focused Cannabis Flower collection to browse at Kennedy Loud Cannabis. Explore the products presented within this tier and use the information shown with individual items to learn more as you browse." },
      { heading: "Compare Exotic Weed with Other Flower Collections", body: "Kennedy Loud Cannabis also organizes flower into Premium Weed, AAA+ Weed, AA Weed and Budget Weed. Exploring more than one collection can help shoppers compare different parts of the flower selection without suggesting that one tier is automatically the right choice for everyone." },
    ],
    faqs: [
      { q: "What is Exotic Weed at the Hillcrest Unit 104 counter?", a: "Exotic Weed is the high-end Cannabis Flower collection at Kennedy Loud Cannabis, 49 Hillcrest Ave Unit 104 in central Brampton." },
      { q: "Is Exotic Weed the main Hillcrest / Kennedy weed destination?", a: "No. Exotic Weed stays a narrow collection. The Hillcrest / Kennedy weed hub is the broader starting point before you pick a tier." },
      { q: "Can I walk in for Exotic Weed on the Kennedy Road corridor after hours?", a: "Yes. Kennedy Loud lists Open 24 Hours at Unit 104. Confirm the labelled name on this collection, then finish at 49 Hillcrest Ave Unit 104." },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed & Cannabis Flower Brampton | Kennedy Loud Cannabis",
    metaDescription: "Premium Weed at Kennedy Loud on Hillcrest Ave / Kennedy Road in central Brampton. Compare this collection with Exotic, AAA+, AA, and Budget. Adults 19+.",
    socialTitle: "Premium Weed & Cannabis Flower | Kennedy Loud Cannabis",
    socialDescription: "Explore Kennedy Loud Cannabis Premium Weed and Cannabis Flower in Brampton.",
    h1: "Premium Weed & Cannabis Flower in Brampton",
    imageAlt: "Premium Weed and Cannabis Flower at Kennedy Loud Cannabis",
    strainHeading: "Explore Premium Weed Strains",
    seoIntro: "Premium Weed is a Kennedy Loud Cannabis Flower collection for shoppers walking into 49 Hillcrest Ave Unit 104. Browse the products presented within the collection and compare Premium Weed with other Kennedy Loud flower collections as you explore the Hillcrest / Kennedy counter.",
    sections: [
      { heading: "Browse Premium Weed at Kennedy Loud Cannabis", body: "Premium Weed brings together one part of the Kennedy Loud Cannabis Flower selection. Shoppers can explore the products presented within this collection and review the information shown with individual items." },
      { heading: "Explore Premium Weed Alongside Other Weed Collections", body: "Premium Weed can be explored alongside Exotic Weed, AAA+ Weed, AA Weed and Budget Weed. Each collection gives shoppers another part of the Kennedy Loud flower selection to consider without treating one tier as inherently better than another." },
    ],
    faqs: [
      { q: "What does Premium Weed mean at Kennedy Loud on Hillcrest Ave?", a: "Premium Weed is the positioned-above-standard flower collection at the Hillcrest Ave / Kennedy Road walk-in. It is a menu grouping, not a government grade." },
      { q: "Where should I confirm Premium Weed before travelling to Unit 104?", a: "Scan the Premium Weed listings here, then keep 49 Hillcrest Ave Unit 104 as the pin. Call +1 (289) 206-1181 if one labelled name is the reason for the trip." },
      { q: "How is Premium Weed different from Exotic and AAA+ at this central Brampton shop?", a: "Premium Weed sits between Exotic Weed and AAA+ Weed on the Kennedy Loud menu. Open each collection separately rather than treating them as one Hillcrest shelf." },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed & Cannabis Flower Brampton | Kennedy Loud Cannabis",
    metaDescription: "AAA+ Weed at Kennedy Loud Unit 104, 49 Hillcrest Ave in central Brampton. Compare this collection with Exotic, Premium, AA, and Budget. Adults 19+.",
    socialTitle: "AAA+ Weed & Cannabis Flower | Kennedy Loud Cannabis",
    socialDescription: "Explore Kennedy Loud Cannabis AAA+ Weed and Cannabis Flower in Brampton.",
    h1: "AAA+ Weed & Cannabis Flower in Brampton",
    imageAlt: "AAA+ Weed and Cannabis Flower at Kennedy Loud Cannabis",
    strainHeading: "Explore AAA+ Weed Strains",
    seoIntro: "Kennedy Loud Cannabis AAA+ Weed gives shoppers a focused Cannabis Flower collection at the Hillcrest / Kennedy walk-in. Browse the products presented in this collection, compare them with other Kennedy Loud flower selections, and use the information shown with individual items before you arrive at Unit 104.",
    sections: [
      { heading: "Explore AAA+ Weed at Kennedy Loud Cannabis", body: "AAA+ Weed brings together a distinct part of the Kennedy Loud Cannabis Flower selection. Explore the products presented within the collection and review the information shown with each item." },
      { heading: "Compare AAA+ Weed with Other Kennedy Loud Flower Collections", body: "AAA+ Weed can be explored alongside Exotic Weed, Premium Weed, AA Weed and Budget Weed. Moving between several collections gives shoppers more of the Kennedy Loud flower selection to consider without assigning a universal ranking between them." },
    ],
    faqs: [
      { q: "What is AAA+ Weed at Kennedy Loud Cannabis in central Brampton?", a: "AAA+ Weed is a familiar Canadian retail grouping on the Kennedy Loud menu at 49 Hillcrest Ave Unit 104. It is not a regulated national grade." },
      { q: "Does AAA+ Weed replace the Hillcrest / Kennedy weed hub?", a: "No. AAA+ Weed stays a narrow collection. Use the Hillcrest / Kennedy weed hub when you want the broader Unit 104 starting point." },
      { q: "Can I compare AAA+ Weed with AA and Budget at Unit 104?", a: "Yes. AAA+ Weed, AA Weed, and Budget Weed are separate collections at the same Hillcrest counter. Open each one, then match labelled jars in store." },
    ],
  },
  AA: {
    seoTitle: "AA Weed & Cannabis Flower Brampton | Kennedy Loud Cannabis",
    metaDescription: "AA Weed at the Hillcrest / Kennedy walk-in, 49 Hillcrest Ave Unit 104 in central Brampton. Compare this collection with Budget, AAA+, Premium, and Exotic.",
    socialTitle: "AA Weed & Cannabis Flower | Kennedy Loud Cannabis",
    socialDescription: "Explore Kennedy Loud Cannabis AA Weed and Cannabis Flower in Brampton.",
    h1: "AA Weed & Cannabis Flower in Brampton",
    imageAlt: "AA Weed and Cannabis Flower at Kennedy Loud Cannabis",
    strainHeading: "Explore AA Weed Strains",
    seoIntro: "AA Weed is one of Kennedy Loud Cannabis’s Cannabis Flower collections at the Hillcrest Ave / Kennedy Road walk-in. Browse the collection, review the information presented with individual products, and compare AA Weed with other flower collections before you pin Unit 104.",
    sections: [
      { heading: "Explore AA Weed Cannabis Flower", body: "Kennedy Loud Cannabis presents AA Weed as one part of its broader Cannabis Flower selection. Shoppers can explore the products shown within this collection and continue comparing other flower selections as they browse." },
      { heading: "Compare AA Weed with Other Flower Collections", body: "AA Weed can be explored alongside Budget Weed, AAA+ Weed, Premium Weed and Exotic Weed. These collections give shoppers several ways to explore Kennedy Loud Cannabis Flower without treating one tier as automatically preferable." },
    ],
    faqs: [
      { q: "What is AA Weed at the Kennedy Road / Hillcrest walk-in?", a: "AA Weed is a mid-value Cannabis Flower grouping at Kennedy Loud Cannabis, 49 Hillcrest Ave Unit 104. The label helps narrow the browse; it does not lock one THC number." },
      { q: "Is AA Weed the value starting point at Kennedy Loud?", a: "Not by itself. Budget Weed is the value-oriented collection. AA Weed sits above that grouping on the same Hillcrest menu." },
      { q: "How do I get to AA Weed from the central Brampton visit guides?", a: "Use the Unit 104 walk-in guide or the Hillcrest / Kennedy weed hub, then open AA Weed. Queen Street is a starting corridor, not this shop’s downtown door." },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed & Cannabis Flower Brampton | Kennedy Loud Cannabis",
    metaDescription: "Budget Weed at 49 Hillcrest Ave Unit 104, Kennedy Loud in central Brampton. Compare this value collection with AA, AAA+, Premium, and Exotic. Adults 19+.",
    socialTitle: "Budget Weed & Cannabis Flower | Kennedy Loud Cannabis",
    socialDescription: "Explore Kennedy Loud Cannabis Budget Weed and Cannabis Flower in Brampton.",
    h1: "Budget Weed & Cannabis Flower in Brampton",
    imageAlt: "Budget Weed and Cannabis Flower at Kennedy Loud Cannabis",
    strainHeading: "Explore Budget Weed Strains",
    seoIntro: "Kennedy Loud Cannabis Budget Weed is a Cannabis Flower collection for shoppers who want the value grouping at 49 Hillcrest Ave Unit 104. Browse the products presented within the collection and compare Budget Weed with other Kennedy Loud flower selections at the Hillcrest / Kennedy counter.",
    sections: [
      { heading: "Explore Budget Weed at Kennedy Loud Cannabis", body: "Budget Weed brings together a focused part of the Kennedy Loud Cannabis Flower selection. Explore the products presented within the collection and use the information shown with individual items as you browse." },
      { heading: "Compare Budget Weed with Other Weed Flower Collections", body: "Kennedy Loud Cannabis also organizes flower into AA Weed, AAA+ Weed, Premium Weed and Exotic Weed. Shoppers can explore more than one collection and compare the sections that interest them without assuming that one tier is inherently better than another." },
    ],
    faqs: [
      { q: "What is Budget Weed at 49 Hillcrest Ave Unit 104?", a: "Budget Weed is the value-oriented Cannabis Flower collection at Kennedy Loud Cannabis in central Brampton. It is a menu grouping, not a claim that the flower is weak or stale." },
      { q: "Does Budget Weed mean the Hillcrest shop only sells value flower?", a: "No. The same Unit 104 counter also lists AA Weed, AAA+ Weed, Premium Weed, and Exotic Weed. Budget Weed is only one of the five collections." },
      { q: "Where do I start if I want more than Budget Weed in central Brampton?", a: "Open the Hillcrest / Kennedy weed hub for the broader walk-in, or jump to another flower collection. Keep 49 Hillcrest Ave Unit 104 as the pin." },
    ],
  },
};


const PINKY_KLC01_TIER_ADDITIONS = {
  "EXOTIC": {
    "heading": "What “Exotic Weed” Means on the Kennedy Loud Menu",
    "body": "Exotic is broad cannabis culture and retail language. It can point toward unusual genetics, distinctive aroma, rarity, strong bag appeal or high-end positioning. It is not a regulated government grade and it does not guarantee one THC range. At Kennedy Loud Cannabis, Exotic Weed is a protected flower owner. Use the Exotic collection to narrow the browse, then read the actual product information inside the current listing. A product can look exotic because of: cultivar; aroma; trichomes; bud structure; colour; presentation. Those clues still need context."
  },
  "PREMIUM": {
    "heading": "Premium Weed Is Positioning, Not One Formula",
    "body": "Premium usually means a product or collection is positioned above a standard/value starting point. In cannabis, that positioning may reflect a mix of: producer; genetics; aroma; trim; cure; freshness; presentation. There is no universal rule saying Premium Weed must have one exact THC percentage, one exact bud size or one exact grow method. At Kennedy Loud, Premium Weed remains the protected owner for the current Premium collection. Use the resource guides for the quality language and the current Premium page for the actual products."
  },
  "AAA+": {
    "heading": "What AAA+ Weed Means as a Kennedy Loud Tier",
    "body": "AAA and AAA+ are familiar Canadian cannabis retail shorthand. They are not one regulated national grading system. The plus sign generally suggests positioning above a basic AAA label, but there is no universal formula requiring one potency, aroma or visual score. At Kennedy Loud, AAA+ Weed is the established owner. Use the tier to narrow the flower menu, then compare the actual product information."
  },
  "AA": {
    "heading": "AA Weed as a Browsing Category",
    "body": "AA is familiar cannabis grade shorthand. It is not a government laboratory grade. At Kennedy Loud, AA Weed is a protected menu owner. The label helps narrow the browse. It does not promise: one THC range; one aroma; one bud size; one cultivation method. Use the current AA Weed page for current products and the Resource Centre for the broader grade language."
  },
  "BUDGET": {
    "heading": "Budget Weed Means Value Positioning",
    "body": "Budget is a value-oriented browsing term. It should not be used as shorthand for: unsafe; automatically weak; automatically stale; automatically low quality. Kennedy Loud's Budget Weed page is the protected owner for adults who want to begin with value. The current products inside it still have their own legal labels, cultivars, producers and current menu details. Price positioning and quality overlap imperfectly. Use the current listing for today's price. Use the educational guides for the quality language."
  }
};
for (const [key, section] of Object.entries(PINKY_KLC01_TIER_ADDITIONS)) TIER_SEO[key].sections.push(section);
