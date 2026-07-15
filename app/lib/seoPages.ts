export interface SeoPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  banner?: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "brampton-weed-dispensary",
    title: "Brampton Weed Dispensary | Kennedy Loud Cannabis | 24 Hours",
    metaDescription:
      "Kennedy Loud Cannabis is a 24-hour Brampton weed dispensary at 49 Hillcrest Ave, Unit 104 with flower tiers, edibles, vapes, concentrates, cigarettes, accessories, and more.",
    h1: "Brampton Weed Dispensary",
    icon: "KLC",
    heroTagline: "Hillcrest Ave cannabis shop with loud flower tiers and 24-hour access.",
    banner: "/banners/KennedyLoud_Homepage_Hero.webp",
    sections: [
      {
        heading: "Kennedy Loud On Hillcrest Ave",
        body:
          "Kennedy Loud Cannabis is located at 49 Hillcrest Ave, Unit 104 in Brampton. The site is built around quick customer visit steps: flower tiers, edibles, pre-rolls, THC Vape, Nic Vape, concentrates, cigarettes, accessories, Magic Stuff, and the Brampton visit page.",
      },
      {
        heading: "A Menu Built Around Loud Choices",
        body:
          "Flower shoppers can start with Exotic, Premium, AAA+, AA, or Budget. Format-first shoppers can jump straight to edibles, pre-rolls, vapes, concentrates, cigarettes, accessories, or specialty categories without sorting through every flower page.",
      },
      {
        heading: "Open 24 Hours",
        body:
          "Kennedy Loud lists 24-hour access for Brampton shoppers. Late-night and early-morning visitors can check the menu category, bring valid 19+ ID, and use the FAQ or contact page for store basics.",
      },
      {
        heading: "Brampton And Hillcrest Ave Visits",
        body:
          "The Hillcrest Ave shop is positioned for shoppers around Kennedy Road, Queen Street, Main Street, central Brampton, Downtown Brampton, and Bramalea. Category pages carry current products and prices as the menu rotates.",
      },
    ],
    faqs: [
      {
        q: "Where is Kennedy Loud Cannabis located?",
        a: "Kennedy Loud Cannabis is at 49 Hillcrest Ave, Unit 104, Brampton, ON L6W 1Y7.",
      },
      {
        q: "What are the hours for Kennedy Loud Cannabis?",
        a: "The store lists Open 24 Hours. Bring valid 19+ government ID when visiting.",
      },
      {
        q: "What menu categories does Kennedy Loud Cannabis carry?",
        a: "The site includes flower tiers, edibles, pre-rolls, THC Vape, Nic Vape, concentrates, cigarettes, accessories, and Magic Stuff.",
      },
      {
        q: "How should I choose a flower tier?",
        a: "Start with the shelf that matches the trip: Exotic or Premium for higher-tier browsing, AAA+ or AA for everyday value, and Budget for the lowest-price flower path.",
      },
    ],
  },
  {
    slug: "cheap-weed-brampton",
    title: "Cheap Weed Brampton | Kennedy Loud Cannabis Budget Flower",
    metaDescription:
      "Looking for cheap weed in Brampton? Kennedy Loud Cannabis has Budget, AA, AAA+, Premium, and Exotic flower paths at 49 Hillcrest Ave, Unit 104. Open 24 Hours.",
    h1: "Cheap Weed Brampton",
    icon: "$",
    heroTagline: "Budget flower paths and clear tier shopping on Hillcrest Ave.",
    banner: "/banners/KennedyLoud_Budget.webp",
    sections: [
      {
        heading: "Start With Budget And AA",
        body:
          "Kennedy Loud separates value flower categories so shoppers can compare Budget and AA without digging through higher-tier shelves first. That makes the cheap weed path easier to use from a phone before visiting.",
      },
      {
        heading: "Compare Up The Tier Ladder",
        body:
          "If the value category is not the move, shoppers can step up into AAA+, Premium, or Exotic. The point is simple: choose the shelf first, then compare the current strains inside that shelf.",
      },
      {
        heading: "Use Current Menu Pages",
        body:
          "Flower batches, strain names, and prices can rotate. The Budget, AA, AAA+, Premium, and Exotic pages should be checked for current product details before heading to Hillcrest Ave.",
      },
      {
        heading: "A 24-Hour Brampton Stop",
        body:
          "Because Kennedy Loud lists 24-hour access, the value flower path works for regular daytime visits, night-shift shoppers, and early-morning errands.",
      },
    ],
    faqs: [
      {
        q: "Where can I find Budget flower at Kennedy Loud?",
        a: "Use the Budget Flower page from the menu or footer, then check the current listings before visiting.",
      },
      {
        q: "Does Kennedy Loud have more than Budget flower?",
        a: "Yes. The flower menu is organized into Exotic, Premium, AAA+, AA, and Budget paths.",
      },
      {
        q: "Is Kennedy Loud open late for value flower shoppers?",
        a: "Kennedy Loud lists Open 24 Hours at 49 Hillcrest Ave, Unit 104 in Brampton.",
      },
    ],
  },
  {
    slug: "native-cigarettes-brampton",
    title: "Native Cigarettes Brampton | Kennedy Loud Cannabis",
    metaDescription:
      "Kennedy Loud Cannabis lists native cigarettes and tobacco add-ons in Brampton, including Canadian, Canadian Goose, Canadian Classics, Putters, Nexus, Time, Backwoods, Grabba, and nicotine pouches.",
    h1: "Native Cigarettes Brampton",
    icon: "19+",
    heroTagline: "Cigarette, tobacco, and nicotine menu categories at the Hillcrest Ave shop.",
    banner: "/banners/KennedyLoud_Cigarettes.webp",
    sections: [
      {
        heading: "Brands Listed On The Menu",
        body:
          "The Kennedy Loud menu includes cigarette listings such as Canadian Lights, Canadian Full, Canadian Menthol, Canadian Goose Full, Canadian Goose Lights, Canadian Classics Original, Canadian Classics Silver, Putters, Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full.",
      },
      {
        heading: "Price Ranges From Current Listings",
        body:
          "Many native cigarette pack listings show $25. The menu also includes 10 x Premium Mix Cigarettes at $3, nicotine pouches, Grabba, Grabba Shaker, and Backwoods listings with their own menu prices.",
      },
      {
        heading: "Adult Tobacco Boundary",
        body:
          "Smoking and nicotine use carry serious health risks. This page is for adult 19+ menu navigation only. Brand mix, flavours, and prices can rotate, so check the cigarette category before visiting.",
      },
      {
        heading: "One Hillcrest Ave Stop",
        body:
          "Cigarette shoppers can also use the accessories, flower, pre-roll, THC Vape, and Nic Vape paths from the same menu, which keeps the store easier to shop in one visit.",
      },
    ],
    faqs: [
      {
        q: "Does Kennedy Loud sell cigarettes?",
        a: "The Kennedy Loud menu includes a cigarettes category with native cigarette and tobacco-related listings.",
      },
      {
        q: "Which cigarette brands are listed?",
        a: "Current menu listings include Canadian, Canadian Goose, Canadian Classics, Putters, Rolled Gold, Nexus, and Time.",
      },
      {
        q: "Are prices fixed?",
        a: "Prices and brand mix can rotate. Check the cigarette category for current listings before visiting Hillcrest Ave.",
      },
    ],
  },
  {
    slug: "weed-store-near-hillcrest-ave",
    title: "Weed Store Near Hillcrest Ave | Kennedy Loud Cannabis Brampton",
    metaDescription:
      "Kennedy Loud Cannabis is a 24-hour Brampton weed store at 49 Hillcrest Ave, Unit 104, near Kennedy Road, Queen Street, Main Street, and Downtown Brampton.",
    h1: "Weed Store Near Hillcrest Ave",
    icon: "KLC",
    heroTagline: "A Brampton cannabis stop at 49 Hillcrest Ave, Unit 104.",
    banner: "/banners/KennedyLoud_Homepage_Hero.webp",
    sections: [
      {
        heading: "Brampton Stop On Hillcrest Ave",
        body:
          "Kennedy Loud Cannabis sits at 49 Hillcrest Ave, Unit 104 in Brampton. The site keeps flower, edibles, vapes, concentrates, cigarettes, accessories, and specialty paths easy to scan before visiting.",
      },
      {
        heading: "Use The Menu Before The Drive",
        body:
          "A quick menu check helps shoppers decide whether the trip is about Budget flower, a Premium or Exotic shelf, pre-rolls, edibles, THC Vape, Nic Vape, concentrates, cigarettes, or accessories.",
      },
      {
        heading: "24-Hour Access",
        body:
          "Kennedy Loud lists Open 24 Hours, which helps shoppers who are timing a visit around work, errands, or a late drive. Bring valid 19+ ID and check the category page before heading out.",
      },
      {
        heading: "Current Listings Belong On Product Pages",
        body:
          "This Hillcrest Ave guide explains the local shopping flow. Current strains, flavours, brands, and prices belong on the category and product pages because the menu can rotate.",
      },
    ],
    faqs: [
      {
        q: "Where is Kennedy Loud Cannabis?",
        a: "Kennedy Loud Cannabis is at 49 Hillcrest Ave, Unit 104, Brampton, ON L6W 1Y7.",
      },
      {
        q: "Is Kennedy Loud Cannabis on Hillcrest Ave?",
        a: "Yes. Kennedy Loud Cannabis is listed at 49 Hillcrest Ave, Unit 104 in Brampton.",
      },
      {
        q: "What should I check before visiting Hillcrest Ave?",
        a: "Check the category page that matches your trip: flower tier, edibles, pre-rolls, vapes, concentrates, cigarettes, accessories, or Magic Stuff.",
      },
    ],
  },
  {
    slug: "dispensary-near-me-brampton",
    title: "Cannabis Dispensary Near Me Brampton | Kennedy Loud Cannabis",
    metaDescription:
      "Find Kennedy Loud Cannabis at 49 Hillcrest Ave, Unit 104 in Brampton. Open 24 Hours with flower tiers, edibles, vapes, concentrates, cigarettes, accessories, and Magic Stuff paths.",
    h1: "Cannabis Dispensary Near Me In Brampton",
    icon: "K",
    heroTagline: "A 24-hour Hillcrest Ave dispensary path for nearby Brampton shoppers.",
    banner: "/banners/KennedyLoud_Homepage_Hero.webp",
    sections: [
      {
        heading: "Find The Hillcrest Ave Shop",
        body:
          "Kennedy Loud Cannabis is located at 49 Hillcrest Ave, Unit 104 in Brampton. Nearby shoppers can use the menu to pick a flower tier or format category before visiting.",
      },
      {
        heading: "Start With A Matching Category",
        body:
          "The site is organized for fast decisions: Exotic, Premium, AAA+, AA, Budget, edibles, pre-rolls, THC Vape, Nic Vape, concentrates, cigarettes, accessories, and Magic Stuff.",
      },
      {
        heading: "Open 24 Hours",
        body:
          "Kennedy Loud lists 24-hour access, so shoppers can plan around regular hours, late shifts, early errands, and weekend visits. Adult 19+ ID is required.",
      },
      {
        heading: "Brampton Resource Centre",
        body:
          "The Resource centre adds guides for Hillcrest Ave visits, Kennedy Road menu planning, flower tiers, late-night shopping, vapes, native smokes, and Magic Stuff.",
      },
    ],
    faqs: [
      {
        q: "What is the address?",
        a: "49 Hillcrest Ave, Unit 104, Brampton, ON L6W 1Y7.",
      },
      {
        q: "Is Kennedy Loud Cannabis walk-in friendly?",
        a: "The site presents Kennedy Loud as a 24-hour Brampton dispensary. Bring valid 19+ ID and check the menu before visiting.",
      },
      {
        q: "Where are the Resource pages?",
        a: "Use /resources for Kennedy Loud guides covering visits, flower tiers, 24-hour shopping, vapes, cigarettes, and specialty categories.",
      },
    ],
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}

const LEGACY_SEO_REDIRECTS: Record<string, string> = {
  "york-weed-dispensary": "brampton-weed-dispensary",
  "cheap-weed-york": "cheap-weed-brampton",
  "native-cigarettes-york": "native-cigarettes-brampton",
  "dispensary-near-me-york": "dispensary-near-me-brampton",
  "weed-store-near-mississauga": "weed-store-near-hillcrest-ave",
};

export function getLegacySeoRedirect(slug: string): string | undefined {
  return LEGACY_SEO_REDIRECTS[slug];
}
