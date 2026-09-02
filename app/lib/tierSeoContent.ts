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
  body: "Kennedy Loud Cannabis organizes Cannabis Flower into Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed. Explore one collection or compare several based on the product information shown while you browse.",
  ownerSentence: "Want to explore beyond one flower collection?",
  ownerAnchor: "Browse Kennedy Loud Cannabis Weed in Brampton",
  ownerHref: "/weed-dispensary-brampton/",
} as const;

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed & Cannabis Flower Brampton | Kennedy Loud Cannabis",
    metaDescription: "Explore the Exotic Weed and Cannabis Flower collection at Kennedy Loud Cannabis in Brampton and compare it with four other Weed flower tiers.",
    socialTitle: "Exotic Weed & Cannabis Flower | Kennedy Loud Cannabis",
    socialDescription: "Explore Kennedy Loud Cannabis Exotic Weed and Cannabis Flower in Brampton.",
    h1: "Exotic Weed & Cannabis Flower in Brampton",
    imageAlt: "Exotic Weed and Cannabis Flower at Kennedy Loud Cannabis",
    strainHeading: "Explore Exotic Weed Strains",
    seoIntro: "Kennedy Loud Cannabis presents Exotic Weed as one of its Cannabis Flower collections for shoppers exploring the wider Weed selection in Brampton. Browse the products shown within this collection and compare Exotic Weed with other Kennedy Loud flower selections that catch your interest.",
    sections: [
      { heading: "Explore Exotic Weed at Kennedy Loud Cannabis", body: "Exotic Weed gives shoppers a focused Cannabis Flower collection to browse at Kennedy Loud Cannabis. Explore the products presented within this tier and use the information shown with individual items to learn more as you browse." },
      { heading: "Compare Exotic Weed with Other Flower Collections", body: "Kennedy Loud Cannabis also organizes flower into Premium Weed, AAA+ Weed, AA Weed and Budget Weed. Exploring more than one collection can help shoppers compare different parts of the flower selection without suggesting that one tier is automatically the right choice for everyone." },
    ],
    faqs: [
      { q: "What is Exotic Weed at Kennedy Loud Cannabis?", a: "Exotic Weed is one of Kennedy Loud Cannabis’s Cannabis Flower collections." },
      { q: "Can I compare Exotic Weed with other Kennedy Loud flower collections?", a: "Yes. You can also explore Premium Weed, AAA+ Weed, AA Weed and Budget Weed." },
      { q: "Where can I start if I want broader Weed browsing?", a: "Use Kennedy Loud Cannabis’s broader Brampton Weed selection, then explore a specific flower collection when one interests you." },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed & Cannabis Flower Brampton | Kennedy Loud Cannabis",
    metaDescription: "Explore the Premium Weed and Cannabis Flower collection at Kennedy Loud Cannabis in Brampton and compare all five Weed flower tiers.",
    socialTitle: "Premium Weed & Cannabis Flower | Kennedy Loud Cannabis",
    socialDescription: "Explore Kennedy Loud Cannabis Premium Weed and Cannabis Flower in Brampton.",
    h1: "Premium Weed & Cannabis Flower in Brampton",
    imageAlt: "Premium Weed and Cannabis Flower at Kennedy Loud Cannabis",
    strainHeading: "Explore Premium Weed Strains",
    seoIntro: "Premium Weed is a Kennedy Loud Cannabis Flower collection for shoppers who want to explore this part of the wider Weed selection. Browse the products presented within the collection and compare Premium Weed with other Kennedy Loud flower collections as you explore.",
    sections: [
      { heading: "Browse Premium Weed at Kennedy Loud Cannabis", body: "Premium Weed brings together one part of the Kennedy Loud Cannabis Flower selection. Shoppers can explore the products presented within this collection and review the information shown with individual items." },
      { heading: "Explore Premium Weed Alongside Other Weed Collections", body: "Premium Weed can be explored alongside Exotic Weed, AAA+ Weed, AA Weed and Budget Weed. Each collection gives shoppers another part of the Kennedy Loud flower selection to consider without treating one tier as inherently better than another." },
    ],
    faqs: [
      { q: "What can I explore in Premium Weed?", a: "Premium Weed brings together the Cannabis Flower products presented within Kennedy Loud Cannabis’s Premium collection." },
      { q: "What other Weed flower collections can I browse?", a: "You can also explore Exotic Weed, AAA+ Weed, AA Weed and Budget Weed." },
      { q: "Can I browse more broadly before choosing a flower collection?", a: "Yes. Kennedy Loud Cannabis’s broader Brampton Weed selection gives shoppers a wider starting point before narrowing their browsing." },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed & Cannabis Flower Brampton | Kennedy Loud Cannabis",
    metaDescription: "Explore the AAA+ Weed and Cannabis Flower collection at Kennedy Loud Cannabis in Brampton and compare all five Weed flower tiers.",
    socialTitle: "AAA+ Weed & Cannabis Flower | Kennedy Loud Cannabis",
    socialDescription: "Explore Kennedy Loud Cannabis AAA+ Weed and Cannabis Flower in Brampton.",
    h1: "AAA+ Weed & Cannabis Flower in Brampton",
    imageAlt: "AAA+ Weed and Cannabis Flower at Kennedy Loud Cannabis",
    strainHeading: "Explore AAA+ Weed Strains",
    seoIntro: "Kennedy Loud Cannabis AAA+ Weed gives shoppers a focused Cannabis Flower collection to explore within the broader Weed selection. Browse the products presented in this collection, compare them with other Kennedy Loud flower selections and use the information shown with individual items as you explore.",
    sections: [
      { heading: "Explore AAA+ Weed at Kennedy Loud Cannabis", body: "AAA+ Weed brings together a distinct part of the Kennedy Loud Cannabis Flower selection. Explore the products presented within the collection and review the information shown with each item." },
      { heading: "Compare AAA+ Weed with Other Kennedy Loud Flower Collections", body: "AAA+ Weed can be explored alongside Exotic Weed, Premium Weed, AA Weed and Budget Weed. Moving between several collections gives shoppers more of the Kennedy Loud flower selection to consider without assigning a universal ranking between them." },
    ],
    faqs: [
      { q: "What is AAA+ Weed at Kennedy Loud Cannabis?", a: "AAA+ Weed is one of Kennedy Loud Cannabis’s Cannabis Flower collections." },
      { q: "Can I compare AAA+ Weed with other flower collections?", a: "Yes. You can also explore Exotic Weed, Premium Weed, AA Weed and Budget Weed." },
      { q: "Where can I browse Kennedy Loud Cannabis Weed more broadly?", a: "Use the broader Brampton Weed selection when you want to explore beyond one specific flower collection." },
    ],
  },
  AA: {
    seoTitle: "AA Weed & Cannabis Flower Brampton | Kennedy Loud Cannabis",
    metaDescription: "Explore the AA Weed and Cannabis Flower collection at Kennedy Loud Cannabis in Brampton and compare all five Weed flower tiers.",
    socialTitle: "AA Weed & Cannabis Flower | Kennedy Loud Cannabis",
    socialDescription: "Explore Kennedy Loud Cannabis AA Weed and Cannabis Flower in Brampton.",
    h1: "AA Weed & Cannabis Flower in Brampton",
    imageAlt: "AA Weed and Cannabis Flower at Kennedy Loud Cannabis",
    strainHeading: "Explore AA Weed Strains",
    seoIntro: "AA Weed is one of Kennedy Loud Cannabis’s Cannabis Flower collections, giving shoppers a focused way to explore this part of the Weed selection. Browse the collection, review the information presented with individual products and compare AA Weed with other flower collections that interest you.",
    sections: [
      { heading: "Explore AA Weed Cannabis Flower", body: "Kennedy Loud Cannabis presents AA Weed as one part of its broader Cannabis Flower selection. Shoppers can explore the products shown within this collection and continue comparing other flower selections as they browse." },
      { heading: "Compare AA Weed with Other Flower Collections", body: "AA Weed can be explored alongside Budget Weed, AAA+ Weed, Premium Weed and Exotic Weed. These collections give shoppers several ways to explore Kennedy Loud Cannabis Flower without treating one tier as automatically preferable." },
    ],
    faqs: [
      { q: "What is AA Weed at Kennedy Loud Cannabis?", a: "AA Weed is one of Kennedy Loud Cannabis’s Cannabis Flower collections." },
      { q: "What other flower collections can I compare with AA Weed?", a: "You can also explore Budget Weed, AAA+ Weed, Premium Weed and Exotic Weed." },
      { q: "Can I start with broader Weed browsing first?", a: "Yes. Kennedy Loud Cannabis’s broader Brampton Weed selection gives you a wider starting point before exploring a particular flower collection." },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed & Cannabis Flower Brampton | Kennedy Loud Cannabis",
    metaDescription: "Explore the Budget Weed and Cannabis Flower collection at Kennedy Loud Cannabis in Brampton and compare all five Weed flower tiers.",
    socialTitle: "Budget Weed & Cannabis Flower | Kennedy Loud Cannabis",
    socialDescription: "Explore Kennedy Loud Cannabis Budget Weed and Cannabis Flower in Brampton.",
    h1: "Budget Weed & Cannabis Flower in Brampton",
    imageAlt: "Budget Weed and Cannabis Flower at Kennedy Loud Cannabis",
    strainHeading: "Explore Budget Weed Strains",
    seoIntro: "Kennedy Loud Cannabis Budget Weed is a Cannabis Flower collection for shoppers who want to explore this part of the wider Weed selection. Browse the products presented within the collection and compare Budget Weed with other Kennedy Loud flower selections as you explore.",
    sections: [
      { heading: "Explore Budget Weed at Kennedy Loud Cannabis", body: "Budget Weed brings together a focused part of the Kennedy Loud Cannabis Flower selection. Explore the products presented within the collection and use the information shown with individual items as you browse." },
      { heading: "Compare Budget Weed with Other Weed Flower Collections", body: "Kennedy Loud Cannabis also organizes flower into AA Weed, AAA+ Weed, Premium Weed and Exotic Weed. Shoppers can explore more than one collection and compare the sections that interest them without assuming that one tier is inherently better than another." },
    ],
    faqs: [
      { q: "What is Budget Weed at Kennedy Loud Cannabis?", a: "Budget Weed is one of Kennedy Loud Cannabis’s Cannabis Flower collections within the broader Weed selection." },
      { q: "Can I compare Budget Weed with other Kennedy Loud flower collections?", a: "Yes. Budget Weed can be explored alongside AA Weed, AAA+ Weed, Premium Weed and Exotic Weed." },
      { q: "Where can I browse more than one type of Weed at Kennedy Loud Cannabis?", a: "Use Kennedy Loud Cannabis’s broader Brampton Weed selection for a wider starting point, then explore any flower collection that interests you." },
    ],
  },
};
