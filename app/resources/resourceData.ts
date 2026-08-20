export type ResourceSection = {
  heading: string;
  body: string;
};

export type ResourceLink = {
  label: string;
  href: string;
};

export type ResourceArticle = {
  path: string;
  slug: string[];
  title: string;
  metaDescription: string;
  eyebrow: string;
  summary: string;
  sections: ResourceSection[];
  quickLinks: ResourceLink[];
};

export const RESOURCE_BANNER = "/banners/KennedyLoud_Welcome_Banner.webp";
export const RESOURCE_SITE = "https://kennedyloudcannabis.com";
export const RESOURCE_CANONICAL = `${RESOURCE_SITE}/resources`;

export const RESOURCE_HUB: ResourceArticle = {
  path: "/resources",
  slug: [],
  title: "Kennedy Loud Cannabis Resources",
  metaDescription:
    "Kennedy Loud Cannabis resources for Hillcrest Ave visits, Kennedy Road menu planning, flower tiers, 24-hour Brampton shopping, vapes, concentrates, native smokes, and Magic Stuff.",
  eyebrow: "KLC resource centre",
  summary:
    "A Hillcrest Ave resource centre for Brampton shoppers who want the right Kennedy Loud menu category before they pull up.",
  sections: [
    {
      heading: "Start With The KLC Signal",
      body:
        "Kennedy Loud Cannabis is built around a loud, easy-to-read menu: flower tiers for the shelf shoppers, format categories for the quick-stop crowd, and a Brampton visit page for anyone checking the address before heading to Hillcrest Ave.",
    },
    {
      heading: "Use The Route That Matches The Trip",
      body:
        "A late-night visit, a Kennedy Road menu check, a value flower run, a vape stop, and a cigarette counter visit all need different shortcuts. These guides keep the paths separate so shoppers do not have to dig through the whole site every time.",
    },
    {
      heading: "Check Current Category Pages",
      body:
        "Products, brands, flavours, and flower strains can rotate. The guides below explain how to shop the Kennedy Loud menu, then point back to category pages for the current selection.",
    },
  ],
  quickLinks: [
    { label: "Brampton visit page", href: "/weed-dispensary-brampton/" },
    { label: "Flower tiers", href: "/#menu" },
    { label: "Contact", href: "/contact" },
  ],
};

export const RESOURCE_PAGES: ResourceArticle[] = [
  {
    path: "/resources/hillcrest-ave-visit-guide",
    slug: ["hillcrest-ave-visit-guide"],
    title: "Hillcrest Ave Visit Guide For Kennedy Loud Cannabis",
    metaDescription:
      "Plan a Kennedy Loud Cannabis visit at 49 Hillcrest Ave Unit 104 in Brampton with menu categories for flower, vapes, edibles, cigarettes, accessories, and 24-hour shopping.",
    eyebrow: "Hillcrest visit",
    summary:
      "A practical walk-in guide for Kennedy Loud shoppers heading to 49 Hillcrest Ave Unit 104 in Brampton.",
    sections: [
      {
        heading: "Know The Stop Before You Go",
        body:
          "Kennedy Loud Cannabis is at 49 Hillcrest Ave Unit 104 in Brampton, close to Kennedy Road, Queen Street, Main Street, and Brampton Transit connections. Bring valid 19+ ID, pick your category path, and keep one backup category in mind in case the menu rotated since your last visit.",
      },
      {
        heading: "Choose Flower By Tier",
        body:
          "Flower shoppers can start with the tier ladder: Exotic, Premium, AAA+, AA, and Budget. That keeps the first decision simple before comparing current flower listings.",
      },
      {
        heading: "Use Format Paths When Flower Is Not The Plan",
        body:
          "The site separates pre-rolls, edibles, THC vapes, concentrates, accessories, cigarettes, Nic Vape, and Magic Stuff so a shopper can jump straight to the right section instead of sorting through every flower page.",
      },
      {
        heading: "Keep The Visit Clean",
        body:
          "For late-night, early-morning, and regular visits, check the category first, scan the current page for details, and use the FAQ or contact page for basic store questions before leaving.",
      },
    ],
    quickLinks: [
      { label: "Brampton visit page", href: "/weed-dispensary-brampton/" },
      { label: "Menu", href: "/#menu" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    path: "/resources/kennedy-road-menu-map",
    slug: ["kennedy-road-menu-map"],
    title: "Kennedy Road Brampton Menu Map",
    metaDescription:
      "Use the Kennedy Loud Cannabis menu map for Brampton shoppers near Kennedy Road and Hillcrest Ave looking for flower, pre-rolls, edibles, vapes, concentrates, cigarettes, and accessories.",
    eyebrow: "Menu map",
    summary:
      "A Kennedy Road and Hillcrest Ave shortcut for shoppers who want the right KLC category fast.",
    sections: [
      {
        heading: "Choose What You Came For",
        body:
          "Some shoppers want cheap flower, some want a THC vape, some want cigarettes, and some want one quick route to edibles or pre-rolls. The menu map keeps each intent close instead of forcing every visit through one broad cannabis page.",
      },
      {
        heading: "Flower First, Format First, Or Counter First",
        body:
          "If flower is the priority, start with Exotic, Premium, AAA+, AA, or Budget. If format matters more, jump to pre-rolls, edibles, THC vapes, concentrates, accessories, Nic Vape, Magic Stuff, or cigarettes.",
      },
      {
        heading: "Use KLC Banners As The Shelf Map",
        body:
          "Kennedy Loud uses store-branded category banners across the site, so the menu feels like a clear shelf map: flower tiers, vape categories, cigarette counter, accessories, and specialty products each get their own section.",
      },
      {
        heading: "Let Product Pages Handle Rotation",
        body:
          "Exact strains, flavours, brands, and prices can change. This guide explains the route, while category and product pages carry the current product details.",
      },
    ],
    quickLinks: [
      { label: "THC Vape", href: "/items/vape-disposables" },
      { label: "Pre-rolls", href: "/items/prerolls" },
      { label: "Cigarettes", href: "/items/cigarettes" },
    ],
  },
  {
    path: "/resources/flower-tier-guide",
    slug: ["flower-tier-guide"],
    title: "Kennedy Loud Flower Tier Guide",
    metaDescription:
      "Compare Kennedy Loud Cannabis flower tiers in Brampton, including Exotic, Premium, AAA+, AA, and Budget menu categories.",
    eyebrow: "Flower tiers",
    summary:
      "A plain-English guide to the Kennedy Loud flower shelf for shoppers comparing tier, price range, and menu style.",
    sections: [
      {
        heading: "Exotic And Premium",
        body:
          "Exotic and Premium are the higher-tier shelf signals on the KLC menu. These are the categories to start with when a shopper wants higher-tier flower browsing.",
      },
      {
        heading: "AAA+ And AA",
        body:
          "AAA+ and AA sit in the practical middle of the menu. They help regular shoppers compare quality and spend without turning the visit into homework.",
      },
      {
        heading: "Budget Flower",
        body:
          "Budget is the value category for shoppers looking for the lowest-price flower path at Kennedy Loud. The page points shoppers to current listings instead of promising a fixed strain or batch.",
      },
      {
        heading: "Why Tiers Make KLC Easier",
        body:
          "A tiered flower menu lets shoppers pick the shelf first, then compare listings inside that shelf without mixing every category into one list.",
      },
    ],
    quickLinks: [
      { label: "Exotic flower", href: "/exotic" },
      { label: "AAA+ flower", href: "/aaa" },
      { label: "Budget flower", href: "/budget" },
    ],
  },
  {
    path: "/resources/24-hour-brampton-dispensary-guide",
    slug: ["24-hour-brampton-dispensary-guide"],
    title: "24-Hour Brampton Dispensary Guide",
    metaDescription:
      "A 24-hour Brampton dispensary guide for Kennedy Loud Cannabis shoppers looking for flower tiers, vapes, pre-rolls, edibles, cigarettes, accessories, and late-night menu planning.",
    eyebrow: "24-hour visits",
    summary:
      "Built for night-shift shoppers, early starts, after-hours errands, and anyone checking Kennedy Loud outside regular retail hours.",
    sections: [
      {
        heading: "Pick Before You Leave",
        body:
          "A 24-hour visit is easier when the first choice is already made. Flower shoppers can pick a tier, vape shoppers can open the vape category, and cigarette shoppers can head straight to the cigarette category.",
      },
      {
        heading: "Keep One Backup Category",
        body:
          "Menus rotate. A simple backup plan keeps the trip smooth: Premium if Exotic is not the move, AA if Budget is picked over, pre-rolls if flower comparison feels too slow, or accessories if the visit is about support gear.",
      },
      {
        heading: "Use The Store Basics",
        body:
          "The FAQ, contact page, and Brampton visit page support the late-night flow without making shoppers hunt for the basics. Keep ID ready and use the menu categories before heading to Hillcrest Ave.",
      },
      {
        heading: "Adult-Use Rules Still Apply",
        body:
          "Open 24 hours does not change age-gated retail basics. Kennedy Loud is for adults 19+, and shoppers should follow the current store, product, and local requirements when visiting.",
      },
    ],
    quickLinks: [
      { label: "Menu", href: "/#menu" },
      { label: "Pre-rolls", href: "/items/prerolls" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    path: "/resources/vapes-concentrates-guide",
    slug: ["vapes-concentrates-guide"],
    title: "Brampton THC Vapes And Concentrates Guide",
    metaDescription:
      "Compare Kennedy Loud Cannabis THC vapes, Nic Vape, disposable vape paths, concentrates, hash, resin-style extracts, and accessories before visiting in Brampton.",
    eyebrow: "Vapes and extracts",
    summary:
      "A format guide for shoppers who want vape, concentrate, and accessory paths without walking through every flower tier first.",
    sections: [
      {
        heading: "THC Vape Path",
        body:
          "The THC Vape category is for shoppers looking for cannabis vape formats such as vape pens, cartridge-style options, and vape-first browsing. Keeping this path separate from flower makes the site faster for shoppers who already know the format they want.",
      },
      {
        heading: "Nic Vape And Pouches",
        body:
          "Kennedy Loud menu categories include Nic Vape and nicotine pouch listings for adults 19+. Use this guide for menu location, then review the current listing and package details before choosing.",
      },
      {
        heading: "Concentrates Path",
        body:
          "Concentrates deserve their own category because hash, shatter-style products, resin-style extracts, and similar formats are a different shopping decision than flower or edibles. The category page is where current options belong.",
      },
      {
        heading: "Accessories Close The Loop",
        body:
          "If a shopper needs support gear, the accessories page should be close to the vape and concentrate paths. That makes the site useful for a complete Hillcrest Ave stop.",
      },
    ],
    quickLinks: [
      { label: "THC Vape", href: "/items/vape-disposables" },
      { label: "Nic Vape", href: "/items/vapes" },
      { label: "Concentrates", href: "/items/concentrates" },
    ],
  },
  {
    path: "/resources/native-smokes-brampton-guide",
    slug: ["native-smokes-brampton-guide"],
    title: "Native Smokes And Cigarettes Guide At Kennedy Loud",
    metaDescription:
      "Find Kennedy Loud Cannabis cigarette and native smoke menu categories in Brampton with Canadian, Canadian Goose, Canadian Classics, Putters, Nexus, Time, Backwoods, Grabba, and nicotine pouch notes.",
    eyebrow: "Cigarettes",
    summary:
      "A cigarette counter guide using the brands and price ranges present on the Kennedy Loud menu.",
    sections: [
      {
        heading: "Cigarette Brands On The Menu",
        body:
          "The Kennedy Loud menu lists cigarette options including Canadian Lights, Canadian Full, Canadian Menthol, Canadian Goose Full, Canadian Goose Lights, Canadian Classics Original, Canadian Classics Silver, Putters, Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full.",
      },
      {
        heading: "Listed Price Ranges",
        body:
          "Many native cigarette pack listings on the current menu show $25. The menu also includes 10 x Premium Mix Cigarettes at $3, nicotine pouches, Grabba, Grabba Shaker, and Backwoods listings with their own prices.",
      },
      {
        heading: "Adult Tobacco Boundary",
        body:
          "This page gives adults 19+ menu and store-navigation guidance. Check the current cigarette category for listed brands and review the package details before choosing.",
      },
      {
        heading: "Pair With The Right Store Path",
        body:
          "Cigarette shoppers may also need accessories, papers, flower, pre-rolls, or vape paths. Keeping those links nearby makes Kennedy Loud easier to shop in one Hillcrest Ave stop.",
      },
    ],
    quickLinks: [
      { label: "Cigarettes", href: "/items/cigarettes" },
      { label: "Accessories", href: "/items/add-ons" },
      { label: "Brampton visit page", href: "/weed-dispensary-brampton/" },
    ],
  },
  {
    path: "/resources/magic-stuff-menu-guide",
    slug: ["magic-stuff-menu-guide"],
    title: "Magic Stuff Menu Guide At Kennedy Loud",
    metaDescription:
      "Use the Kennedy Loud Cannabis Magic Stuff guide to find the specialty product category, read labels, and check current menu listings before visiting in Brampton.",
    eyebrow: "Magic Stuff",
    summary:
      "A careful category guide for Kennedy Loud specialty listings, focused on labels, menu categories, and current product checks.",
    sections: [
      {
        heading: "Use The Specialty Category",
        body:
          "Kennedy Loud has Magic Stuff listings under the specialty category. This guide points shoppers to the category path and keeps product-specific details on the current menu page.",
      },
      {
        heading: "Read Labels And Names Carefully",
        body:
          "Specialty listings can use brand names, package sizes, and item labels that look similar at a glance. Check the product page, package label, and counter details so the item name matches what you meant to browse.",
      },
      {
        heading: "Keep It Menu-Focused",
        body:
          "Use the specialty category to compare product names, package sizes, posted details, and related menu links before visiting.",
      },
      {
        heading: "Check Current Selection",
        body:
          "Brands and specialty items can rotate. Use the Magic Stuff category page for current listings, and use the contact or FAQ pages for store basics before heading to Hillcrest Ave.",
      },
    ],
    quickLinks: [
      { label: "Magic Stuff", href: "/items/magic" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const ALL_RESOURCE_PAGES: ResourceArticle[] = [RESOURCE_HUB, ...RESOURCE_PAGES];
export const RESOURCE_PATHS = ALL_RESOURCE_PAGES.map((page) => page.path);

export function getResourceBySegments(slug: string[] = []) {
  if (slug.length === 0) return RESOURCE_HUB;
  const path = `/resources/${slug.join("/")}`;
  return RESOURCE_PAGES.find((page) => page.path === path);
}

export function getResourceByPath(path: string) {
  return ALL_RESOURCE_PAGES.find((page) => page.path === path);
}
