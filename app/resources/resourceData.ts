export type ResourceSection = {
  heading: string;
  body: string;
};

export type ResourceLink = {
  label: string;
  href: string;
};

export type ResourceBlock =
  | { type: "h2" | "h3" | "p"; text: string }
  | { type: "list"; items: string[] };

export type ResourceFaq = { question: string; answer: string };

export type ResourceArticle = {
  path: string;
  slug: string[];
  title: string;
  seoTitle?: string;
  metaDescription: string;
  eyebrow: string;
  summary: string;
  sections: ResourceSection[];
  quickLinks: ResourceLink[];
  blocks?: ResourceBlock[];
  faqs?: ResourceFaq[];
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
    path: "/resources/weed-flower-tier-guide",
    slug: ["weed-flower-tier-guide"],
    title: "Kennedy Loud Weed & Flower Tier Guide",
    metaDescription:
      "Compare Kennedy Loud Cannabis flower tiers in Brampton, including Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed.",
    eyebrow: "Weed flower tiers",
    summary:
      "A clear guide to Kennedy Loud Cannabis Flower collections for shoppers comparing five established Weed tiers.",
    sections: [
      {
        heading: "Exotic Weed And Premium Weed",
        body:
          "Exotic Weed and Premium Weed offer two distinct Kennedy Loud Cannabis Flower collections to explore. Browse either collection, then compare the product information presented with individual items.",
      },
      {
        heading: "AAA+ Weed And AA Weed",
        body:
          "AAA+ Weed and AA Weed provide two more Cannabis Flower collections within the Kennedy Loud selection. Explore both when you want to compare different parts of the flower menu.",
      },
      {
        heading: "Budget Weed Flower",
        body:
          "Budget Weed is another established Kennedy Loud Cannabis Flower collection. Use the product information shown while browsing to learn more about individual items.",
      },
      {
        heading: "Compare Five Kennedy Loud Weed Tiers",
        body:
          "Kennedy Loud organizes Cannabis Flower into Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed. Start with the collection that interests you, or compare more than one.",
      },
    ],
    quickLinks: [
      { label: "Exotic Weed", href: "/exotic-weed" },
      { label: "Premium Weed", href: "/premium-weed" },
      { label: "AAA+ Weed", href: "/aaa-weed" },
      { label: "AA Weed", href: "/aa-weed" },
      { label: "Budget Weed", href: "/budget-weed" },
      { label: "Kennedy Loud Weed in Brampton", href: "/weed-dispensary-brampton/" },
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
    path: "/resources/cannabis-dispensary-vs-weed-dispensary",
    slug: ["cannabis-dispensary-vs-weed-dispensary"],
    title: "Weed Dispensary vs. Cannabis Dispensary: Two Searches, Similar Intent",
    seoTitle: "Weed vs Cannabis Dispensary | Kennedy Loud Brampton",
    metaDescription:
      "Weed dispensary or cannabis dispensary? Learn why people use both phrases when searching for a dispensary near them in Brampton.",
    eyebrow: "Dispensary search terminology",
    summary:
      "Customers do not always use formal industry terminology when searching locally. Some people naturally search for a cannabis dispensary. Others search for a weed dispensary. And someone trying to find a nearby location quickly may simply type “dispensary near me.”",
    sections: [
      {
        heading: "Why Weed Dispensary and Cannabis Dispensary Overlap",
        body:
          "Cannabis is the more formal terminology. Weed is common conversational terminology. Adding the word dispensary makes the local-business intent much clearer. That creates related searches including weed dispensary near me, cannabis dispensary near me, dispensary near me, cannabis store near me, weed near me and cannabis near me. These remain separate search queries, but they can communicate very similar intent.",
      },
      {
        heading: "What Matters After the Search?",
        body:
          "After someone identifies a nearby cannabis business, practical store information becomes more important than the exact words originally typed. Customers may want to confirm store identity, address, location, current hours, directions and website information. Kennedy Loud Cannabis is located at 49 Hillcrest Ave, Unit 104 in Brampton. Its existing Brampton dispensary page remains the primary local resource for visit intent.",
      },
      {
        heading: "One Business, Several Ways to Search",
        body:
          "A strong local website does not need to force every keyword into every paragraph. Instead, it should clearly establish that Kennedy Loud Cannabis is a Brampton cannabis dispensary while naturally connecting cannabis, weed, dispensary and cannabis-store terminology.",
      },
      {
        heading: "Why do people say weed dispensary instead of cannabis dispensary?",
        body: "Weed is common conversational language, while cannabis is the more formal term.",
      },
      {
        heading: "Does Google treat these as exactly the same keyword?",
        body: "No. They are distinct queries, but they can express closely related search intent.",
      },
      {
        heading: "What does “dispensary near me” communicate?",
        body: "It tells the search engine that the user is looking for a nearby dispensary and that location matters.",
      },
      {
        heading: "Where is Kennedy Loud Cannabis?",
        body: "Kennedy Loud Cannabis is at 49 Hillcrest Ave, Unit 104 in Brampton.",
      },
    ],
    quickLinks: [
      { label: "Cannabis Dispensary Near Me in Brampton", href: "/info/dispensary-near-me-brampton" },
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

const PINKY_KLC01_OVERRIDES: Record<string, Partial<ResourceArticle>> = {
  "/resources/cannabis-dispensary-vs-weed-dispensary": {
    "title": "Weed Dispensary vs Cannabis Dispensary: Same Local Goal, Different Words",
    "seoTitle": "Weed vs Cannabis Dispensary in Brampton | Kennedy Loud",
    "metaDescription": "Learn why adults use weed dispensary, cannabis dispensary, cannabis store and dispensary near me for closely related local searches in Brampton.",
    "summary": "Learn why adults use weed dispensary, cannabis dispensary, cannabis store and dispensary near me for closely related local searches in Brampton.",
    "blocks": [
      {
        "type": "h2",
        "text": "Cannabis Is the Formal Word; Weed Is the Everyday Word"
      },
      {
        "type": "p",
        "text": "Adults do not all use the same vocabulary when they look for a local cannabis store."
      },
      {
        "type": "p",
        "text": "“Cannabis” is the formal term used in Canadian law, regulated product information and most health guidance. “Weed” is ordinary conversational language. “Dispensary” is a common retail word people use when they mean a cannabis store."
      },
      {
        "type": "p",
        "text": "That is why phrases such as cannabis dispensary, weed dispensary, cannabis store and weed store can point toward the same kind of local goal without being identical phrases."
      },
      {
        "type": "p",
        "text": "Kennedy Loud Cannabis does not need to force one version into every sentence. The useful job of this page is to translate the wording, then send visit intent to the real Brampton store page."
      },
      {
        "type": "h2",
        "text": "What “Near Me” Adds"
      },
      {
        "type": "p",
        "text": "“Near me” does not create a different kind of cannabis business."
      },
      {
        "type": "p",
        "text": "It adds location intent."
      },
      {
        "type": "p",
        "text": "Someone searching “dispensary near me” is usually trying to identify a nearby place, then confirm practical details such as the exact business name, address, hours, directions and website."
      },
      {
        "type": "p",
        "text": "For Kennedy Loud Cannabis, the local owner remains the Brampton store page at /weed-dispensary-brampton."
      },
      {
        "type": "p",
        "text": "This resource explains the wording. The local page handles the visit."
      },
      {
        "type": "h2",
        "text": "One Store Can Be Described Several Ways"
      },
      {
        "type": "p",
        "text": "A person might say:"
      },
      {
        "type": "p",
        "text": "cannabis dispensary;"
      },
      {
        "type": "p",
        "text": "weed dispensary;"
      },
      {
        "type": "p",
        "text": "cannabis store;"
      },
      {
        "type": "p",
        "text": "weed store;"
      },
      {
        "type": "p",
        "text": "dispensary;"
      },
      {
        "type": "p",
        "text": "local cannabis shop."
      },
      {
        "type": "p",
        "text": "Those phrases overlap in normal speech."
      },
      {
        "type": "p",
        "text": "The important part is the real-world identity behind them."
      },
      {
        "type": "p",
        "text": "Kennedy Loud Cannabis is the same Brampton business whether a shopper begins with the formal word “cannabis” or the everyday word “weed.”"
      },
      {
        "type": "h2",
        "text": "Do Not Rename the Business to Match a Search Phrase"
      },
      {
        "type": "p",
        "text": "A local business name should stay accurate."
      },
      {
        "type": "p",
        "text": "Search language is useful because it shows how people talk. It is not a reason to stuff extra phrases into the business name or turn every heading into a list of synonyms."
      },
      {
        "type": "p",
        "text": "The cleaner approach is:"
      },
      {
        "type": "p",
        "text": "keep the exact public business identity;"
      },
      {
        "type": "p",
        "text": "use natural language in educational content;"
      },
      {
        "type": "p",
        "text": "keep one strong local visit owner;"
      },
      {
        "type": "p",
        "text": "connect supporting guides back to that owner."
      },
      {
        "type": "p",
        "text": "That makes the site easier to understand for people and keeps the real business identity clear."
      },
      {
        "type": "h2",
        "text": "Where Kennedy Loud Fits in Brampton"
      },
      {
        "type": "p",
        "text": "Kennedy Loud Cannabis is at 49 Hillcrest Ave, Unit 104 in Brampton."
      },
      {
        "type": "p",
        "text": "People around Hillcrest Ave and the Kennedy Road area may arrive at the site through different wording, but the next step is the same: use the local Brampton page for the current visit details, then use the Resource Centre when a menu term or category needs explanation."
      }
    ],
    "faqs": [
      {
        "question": "Is a weed dispensary different from a cannabis dispensary?",
        "answer": "Usually the difference is wording. Cannabis is the formal term; weed is common everyday language."
      },
      {
        "question": "What does “dispensary near me” mean?",
        "answer": "It signals local intent. The person is trying to find a nearby dispensary and then confirm real store details."
      },
      {
        "question": "Is a cannabis store the same thing as a cannabis dispensary?",
        "answer": "In normal retail conversation, the phrases can describe the same kind of adult-use cannabis business."
      },
      {
        "question": "Should Kennedy Loud change its business name to include more search phrases?",
        "answer": "No. The exact public business identity should stay accurate. Supporting pages can explain the terminology naturally."
      },
      {
        "question": "Where should I check Kennedy Loud visit details?",
        "answer": "Use the Kennedy Loud Brampton store page for current local information."
      }
    ],
    "quickLinks": [
      {
        "label": "Kennedy Loud Cannabis in Brampton",
        "href": "/weed-dispensary-brampton"
      },
      {
        "label": "Hillcrest Ave first-visit guide",
        "href": "/resources/hillcrest-ave-visit-guide"
      },
      {
        "label": "Cannabis 101",
        "href": "/resources/cannabis-101"
      },
      {
        "label": "Kennedy Loud Resources",
        "href": "/resources"
      }
    ]
  },
  "/resources/hillcrest-ave-visit-guide": {
    "title": "First Visit to Kennedy Loud Cannabis: Hillcrest Ave Guide",
    "seoTitle": "First Cannabis Store Visit on Hillcrest Ave | Kennedy Loud",
    "metaDescription": "Planning a first Kennedy Loud visit? Learn what adults 19+ can expect, what to bring and how to read the menu before heading to Hillcrest Ave.",
    "summary": "Planning a first Kennedy Loud visit? Learn what adults 19+ can expect, what to bring and how to read the menu before heading to Hillcrest Ave.",
    "blocks": [
      {
        "type": "p",
        "text": "Replace/expand the current brief guide with the following copy."
      },
      {
        "type": "p",
        "text": "A first cannabis-store visit does not need to feel like an exam."
      },
      {
        "type": "p",
        "text": "Kennedy Loud Cannabis is at 49 Hillcrest Ave, Unit 104 in Brampton. Adults 19+ can make the visit easier by checking the current store information, choosing one menu lane and knowing a few basic words before heading out."
      },
      {
        "type": "p",
        "text": "The goal is not to memorize the whole site."
      },
      {
        "type": "p",
        "text": "The goal is to arrive knowing what kind of question you want answered."
      },
      {
        "type": "h2",
        "text": "Check the Store Details Before You Leave"
      },
      {
        "type": "p",
        "text": "Use the protected Brampton store page for the current visit details."
      },
      {
        "type": "p",
        "text": "That page should remain the practical owner for:"
      },
      {
        "type": "p",
        "text": "exact store identity;"
      },
      {
        "type": "p",
        "text": "address;"
      },
      {
        "type": "p",
        "text": "current listed hours;"
      },
      {
        "type": "p",
        "text": "contact information;"
      },
      {
        "type": "p",
        "text": "visit information."
      },
      {
        "type": "p",
        "text": "This guide explains how to use the menu. It should not replace the live local page."
      },
      {
        "type": "h2",
        "text": "Bring Valid 19+ Identification"
      },
      {
        "type": "p",
        "text": "Ontario's legal age for recreational cannabis is 19."
      },
      {
        "type": "p",
        "text": "Adults should be prepared to show valid identification."
      },
      {
        "type": "p",
        "text": "A 24-hour schedule does not change the age requirement."
      },
      {
        "type": "h2",
        "text": "Pick One Lane Before You Read the Whole Menu"
      },
      {
        "type": "p",
        "text": "The fastest first visit starts with format."
      },
      {
        "type": "h3",
        "text": "If You Want Flower"
      },
      {
        "type": "p",
        "text": "Open the flower guide or one of the five Weed owners:"
      },
      {
        "type": "p",
        "text": "Exotic Weed;"
      },
      {
        "type": "p",
        "text": "Premium Weed;"
      },
      {
        "type": "p",
        "text": "AAA+ Weed;"
      },
      {
        "type": "p",
        "text": "AA Weed;"
      },
      {
        "type": "p",
        "text": "Budget Weed."
      },
      {
        "type": "p",
        "text": "Use the tier as the first filter."
      },
      {
        "type": "p",
        "text": "Then compare the actual products shown inside it."
      },
      {
        "type": "h3",
        "text": "If You Want Pre-Rolls"
      },
      {
        "type": "p",
        "text": "Use the pre-roll category."
      },
      {
        "type": "p",
        "text": "Do not spend ten minutes comparing loose-flower tiers if the visit is really about a prepared pre-roll."
      },
      {
        "type": "h3",
        "text": "If You Want Edibles, THC Vapes or Concentrates"
      },
      {
        "type": "p",
        "text": "Use the matching format category."
      },
      {
        "type": "p",
        "text": "Each one has different label information and different comparison questions."
      },
      {
        "type": "h3",
        "text": "If the Stop Includes Cigarettes"
      },
      {
        "type": "p",
        "text": "Keep that decision in the cigarette/tobacco lane."
      },
      {
        "type": "p",
        "text": "Cannabis and commercial tobacco are different categories and should stay separate in the Resource Centre."
      },
      {
        "type": "h2",
        "text": "You Do Not Need to Know Every Strain Name"
      },
      {
        "type": "p",
        "text": "A familiar strain or cultivar name can be useful, but it is not a requirement for a good first visit."
      },
      {
        "type": "p",
        "text": "Start with something simpler:"
      },
      {
        "type": "p",
        "text": "What format am I looking for?"
      },
      {
        "type": "p",
        "text": "What does this tier mean?"
      },
      {
        "type": "p",
        "text": "What does this label say?"
      },
      {
        "type": "p",
        "text": "What does “gas” mean in this description?"
      },
      {
        "type": "p",
        "text": "Why is this product in this flower collection?"
      },
      {
        "type": "p",
        "text": "Those are normal questions."
      },
      {
        "type": "h2",
        "text": "Flower Tiers Are Navigation, Not a Universal Score"
      },
      {
        "type": "p",
        "text": "Kennedy Loud's five Weed owners are built to make flower browsing faster."
      },
      {
        "type": "p",
        "text": "They are not one regulated national grading table."
      },
      {
        "type": "p",
        "text": "Exotic, Premium, AAA+, AA and Budget should be read as store categories first."
      },
      {
        "type": "p",
        "text": "The product inside the category still has its own legal label, producer, cultivar and current listing information."
      },
      {
        "type": "h2",
        "text": "Do Not Let THC Make the Entire Decision"
      },
      {
        "type": "p",
        "text": "THC is important."
      },
      {
        "type": "p",
        "text": "It is not the whole product."
      },
      {
        "type": "p",
        "text": "For flower, adults may also care about:"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "visible trichomes;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "bud structure;"
      },
      {
        "type": "p",
        "text": "moisture;"
      },
      {
        "type": "p",
        "text": "cure;"
      },
      {
        "type": "p",
        "text": "freshness;"
      },
      {
        "type": "p",
        "text": "producer;"
      },
      {
        "type": "p",
        "text": "cultivar."
      },
      {
        "type": "p",
        "text": "A bigger number does not automatically answer those questions."
      },
      {
        "type": "h2",
        "text": "Translate the Slang"
      },
      {
        "type": "p",
        "text": "If someone says:"
      },
      {
        "type": "p",
        "text": "“This one is loud.”"
      },
      {
        "type": "p",
        "text": "ask whether they mean the aroma is strong."
      },
      {
        "type": "p",
        "text": "If they say:"
      },
      {
        "type": "p",
        "text": "“It looks frosty.”"
      },
      {
        "type": "p",
        "text": "they are probably pointing to visible trichomes."
      },
      {
        "type": "p",
        "text": "If they say:"
      },
      {
        "type": "p",
        "text": "“That is top shelf.”"
      },
      {
        "type": "p",
        "text": "ask what characteristic is making them say that."
      },
      {
        "type": "p",
        "text": "Street language is useful when it gets translated into something specific."
      },
      {
        "type": "h2",
        "text": "Check the Current Page for Anything That Can Change"
      },
      {
        "type": "p",
        "text": "Product names, strains, prices, flavours, package formats and availability can rotate."
      },
      {
        "type": "p",
        "text": "An educational visit guide should stay useful even when the menu changes."
      },
      {
        "type": "p",
        "text": "Use the current category or product page for the changing details."
      },
      {
        "type": "h2",
        "text": "A First Visit Can Be Simple"
      },
      {
        "type": "p",
        "text": "The Kennedy Loud first-visit formula is:"
      },
      {
        "type": "p",
        "text": "check the local store page;"
      },
      {
        "type": "p",
        "text": "bring valid ID;"
      },
      {
        "type": "p",
        "text": "pick one product lane;"
      },
      {
        "type": "p",
        "text": "read the actual label;"
      },
      {
        "type": "p",
        "text": "ask one clear question if something is unclear."
      },
      {
        "type": "p",
        "text": "That is enough."
      }
    ],
    "faqs": [
      {
        "question": "How old do I need to be to visit Kennedy Loud Cannabis?",
        "answer": "Adults must be 19+ for recreational cannabis in Ontario."
      },
      {
        "question": "Do I need to know which strain I want?",
        "answer": "No. Starting with product format and the current menu is enough."
      },
      {
        "question": "Are Kennedy Loud's Weed tiers official grades?",
        "answer": "They are store browsing owners, not one universal government grading system."
      },
      {
        "question": "Should I choose the highest THC product?",
        "answer": "Not automatically. THC matters, but it does not describe every product characteristic."
      },
      {
        "question": "Where do I check current hours and menu details?",
        "answer": "Use the current Kennedy Loud local page and current category/product pages."
      }
    ],
    "quickLinks": [
      {
        "label": "Kennedy Loud Cannabis in Brampton",
        "href": "/weed-dispensary-brampton"
      },
      {
        "label": "Cannabis 101",
        "href": "/resources/cannabis-101"
      },
      {
        "label": "Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-tier-guide"
      },
      {
        "label": "THC vs Weed Quality",
        "href": "/resources/flower-guides/thc-vs-weed-quality"
      },
      {
        "label": "Weed Slang Explained",
        "href": "/resources/cannabis-101/weed-slang-glossary"
      },
      {
        "label": "FAQ",
        "href": "/faq"
      }
    ]
  },
  "/resources/weed-flower-tier-guide": {
    "title": "Kennedy Loud Weed & Flower Quality Guide",
    "seoTitle": "Weed & Cannabis Flower Quality Guide | Kennedy Loud Brampton",
    "metaDescription": "Understand Kennedy Loud's Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed tiers plus the quality language behind them.",
    "summary": "Understand Kennedy Loud's Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed tiers plus the quality language behind them.",
    "blocks": [
      {
        "type": "p",
        "text": "This page remains the main flower-education hub and the owner for both the tier explanation and the broader flower-guide subject."
      },
      {
        "type": "h2",
        "text": "Five Weed Collections, Five Starting Points"
      },
      {
        "type": "p",
        "text": "Kennedy Loud Cannabis keeps its flower menu organized around five protected Weed owners:"
      },
      {
        "type": "p",
        "text": "Exotic Weed;"
      },
      {
        "type": "p",
        "text": "Premium Weed;"
      },
      {
        "type": "p",
        "text": "AAA+ Weed;"
      },
      {
        "type": "p",
        "text": "AA Weed;"
      },
      {
        "type": "p",
        "text": "Budget Weed."
      },
      {
        "type": "p",
        "text": "Use the collection name to narrow the shelf."
      },
      {
        "type": "p",
        "text": "Then use the current product information to understand what is actually inside it."
      },
      {
        "type": "p",
        "text": "The tier is the map, not the laboratory report."
      },
      {
        "type": "h2",
        "text": "Why the Tier Name Does Not Tell the Whole Story"
      },
      {
        "type": "p",
        "text": "Cannabis quality language combines several different ideas:"
      },
      {
        "type": "p",
        "text": "retail positioning;"
      },
      {
        "type": "p",
        "text": "appearance;"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "genetics;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "cure;"
      },
      {
        "type": "p",
        "text": "freshness;"
      },
      {
        "type": "p",
        "text": "price;"
      },
      {
        "type": "p",
        "text": "personal preference."
      },
      {
        "type": "p",
        "text": "That is why two products in the same broad tier can still look, smell and handle differently."
      },
      {
        "type": "p",
        "text": "It is also why a higher-sounding tier does not automatically equal one specific THC percentage."
      },
      {
        "type": "h2",
        "text": "What Can Make Flower Feel Better Finished?\nH3 — Genetics and cultivar"
      },
      {
        "type": "p",
        "text": "Genetics set the plant's potential."
      },
      {
        "type": "p",
        "text": "A cultivar name helps identify the product, but the same familiar name is not a guarantee that every producer or batch will be identical."
      },
      {
        "type": "h3",
        "text": "Cultivation"
      },
      {
        "type": "p",
        "text": "Indoor, outdoor, greenhouse and hydroponic growing describe different parts of the cultivation story."
      },
      {
        "type": "p",
        "text": "No method automatically guarantees the final result."
      },
      {
        "type": "h3",
        "text": "Harvest timing"
      },
      {
        "type": "p",
        "text": "Harvest decisions affect the plant material that enters drying and curing."
      },
      {
        "type": "p",
        "text": "The finished product still depends on everything that happens after the plant is cut."
      },
      {
        "type": "h3",
        "text": "Drying and curing"
      },
      {
        "type": "p",
        "text": "Drying removes moisture."
      },
      {
        "type": "p",
        "text": "Curing is part of controlled post-harvest conditioning."
      },
      {
        "type": "p",
        "text": "Poor handling can change texture, aroma and storage quality."
      },
      {
        "type": "h3",
        "text": "Trichomes"
      },
      {
        "type": "p",
        "text": "Trichomes are resin-producing structures on the plant."
      },
      {
        "type": "p",
        "text": "Strong visible coverage can create the frosty look people like, but visible frost is not an exact THC meter."
      },
      {
        "type": "h3",
        "text": "Trim and bud structure"
      },
      {
        "type": "p",
        "text": "Shape, density and trim influence bag appeal."
      },
      {
        "type": "p",
        "text": "They are useful visual clues, not full quality scores."
      },
      {
        "type": "h3",
        "text": "Aroma"
      },
      {
        "type": "p",
        "text": "People describe cannabis aroma with words such as gas, skunky, fruity, earthy, floral, piney, sweet and loud."
      },
      {
        "type": "p",
        "text": "Aroma is a real sensory characteristic, but the slang is not an official grade."
      },
      {
        "type": "h3",
        "text": "Freshness and storage"
      },
      {
        "type": "p",
        "text": "Heat, light, oxygen, time and handling can affect finished flower after packaging."
      },
      {
        "type": "p",
        "text": "Good cultivation can still be weakened by poor storage."
      },
      {
        "type": "h2",
        "text": "THC Is Not the Tier"
      },
      {
        "type": "p",
        "text": "THC is one important cannabinoid measurement."
      },
      {
        "type": "p",
        "text": "It is not a complete grading system."
      },
      {
        "type": "p",
        "text": "Two products can show similar THC numbers and still differ in:"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "moisture;"
      },
      {
        "type": "p",
        "text": "cure;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "trichome appearance;"
      },
      {
        "type": "p",
        "text": "cultivar;"
      },
      {
        "type": "p",
        "text": "freshness;"
      },
      {
        "type": "p",
        "text": "structure."
      },
      {
        "type": "p",
        "text": "Do not convert Kennedy Loud's five Weed owners into five THC brackets."
      },
      {
        "type": "h2",
        "text": "Top Shelf, Mids and Quads Are a Different Language Layer"
      },
      {
        "type": "p",
        "text": "Retail tiers and street slang overlap, but they are not identical."
      },
      {
        "type": "p",
        "text": "Top shelf generally means premium positioning."
      },
      {
        "type": "p",
        "text": "Mids means someone considers a product middle-of-the-road."
      },
      {
        "type": "p",
        "text": "Quads is common Canadian slang for AAAA."
      },
      {
        "type": "p",
        "text": "AAA and AA are familiar informal grade shorthand."
      },
      {
        "type": "p",
        "text": "Those terms do not come from one regulated national scorecard."
      },
      {
        "type": "p",
        "text": "Use the separate slang/grade guide when the wording itself is the question."
      },
      {
        "type": "h2",
        "text": "Budget Is a Value Owner, Not an Insult"
      },
      {
        "type": "p",
        "text": "Budget Weed is a real browsing intent."
      },
      {
        "type": "p",
        "text": "The word Budget should not automatically be read as unsafe, weak or unusable."
      },
      {
        "type": "p",
        "text": "It means the store has a value-positioned flower owner."
      },
      {
        "type": "p",
        "text": "The actual product still has to be read from its own listing and legal package."
      },
      {
        "type": "h2",
        "text": "Use the Hub, Then Go Deeper"
      },
      {
        "type": "p",
        "text": "This flower guide should point adults toward the deeper questions:"
      },
      {
        "type": "p",
        "text": "Quality"
      },
      {
        "type": "p",
        "text": "What does good weed mean?"
      },
      {
        "type": "p",
        "text": "THC vs quality"
      },
      {
        "type": "p",
        "text": "top shelf vs mids vs quads"
      },
      {
        "type": "p",
        "text": "Appearance"
      },
      {
        "type": "p",
        "text": "bag appeal"
      },
      {
        "type": "p",
        "text": "trichomes"
      },
      {
        "type": "p",
        "text": "smalls vs big buds"
      },
      {
        "type": "p",
        "text": "Aroma and freshness"
      },
      {
        "type": "p",
        "text": "terpenes, gas and loud"
      },
      {
        "type": "p",
        "text": "drying, curing and freshness"
      },
      {
        "type": "p",
        "text": "Growing and genetics"
      },
      {
        "type": "p",
        "text": "BC grown vs indoor/hydro/outdoor"
      },
      {
        "type": "p",
        "text": "craft vs commercial"
      },
      {
        "type": "p",
        "text": "Indica/Sativa/Hybrid"
      },
      {
        "type": "p",
        "text": "strain vs cultivar"
      },
      {
        "type": "p",
        "text": "landrace vs hybrid"
      },
      {
        "type": "p",
        "text": "That creates depth without turning the five protected tier owners into long encyclopedia pages."
      }
    ],
    "faqs": [
      {
        "question": "Are Exotic, Premium, AAA+, AA and Budget official government grades?",
        "answer": "No single Canadian government grading system defines those tier labels as universal grades."
      },
      {
        "question": "Does Exotic always mean higher THC?",
        "answer": "No. Exotic is retail/culture positioning and does not guarantee one THC range."
      },
      {
        "question": "What are quads?",
        "answer": "Quads is common Canadian slang for AAAA, usually implying premium positioning."
      },
      {
        "question": "Can Budget Weed still have a high THC number?",
        "answer": "A tier name and THC are different pieces of information. Use the actual product label for THC."
      },
      {
        "question": "What should I compare besides tier?",
        "answer": "Depending on what is available, adults may compare cultivar, producer, THC/CBD, aroma, trim, structure, trichomes, moisture, cure and freshness."
      }
    ],
    "quickLinks": [
      {
        "label": "Exotic Weed",
        "href": "/exotic-weed"
      },
      {
        "label": "Premium Weed",
        "href": "/premium-weed"
      },
      {
        "label": "AAA+ Weed",
        "href": "/aaa-weed"
      },
      {
        "label": "AA Weed",
        "href": "/aa-weed"
      },
      {
        "label": "Budget Weed",
        "href": "/budget-weed"
      },
      {
        "label": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean"
      },
      {
        "label": "Top Shelf, Mids & Quads",
        "href": "/resources/flower-guides/top-shelf-mids-quads"
      },
      {
        "label": "THC vs Weed Quality",
        "href": "/resources/flower-guides/thc-vs-weed-quality"
      },
      {
        "label": "Bag Appeal",
        "href": "/resources/flower-guides/bag-appeal"
      },
      {
        "label": "Frosty Weed & Trichomes",
        "href": "/resources/flower-guides/trichomes-frosty-weed"
      },
      {
        "label": "Gas, Loud & Terpy",
        "href": "/resources/flower-guides/terpenes-gas-loud-aroma"
      },
      {
        "label": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness"
      },
      {
        "label": "Smalls vs Big Buds",
        "href": "/resources/flower-guides/smalls-vs-big-buds"
      },
      {
        "label": "BC Grown / Indoor / Hydro / Outdoor",
        "href": "/resources/flower-guides/bc-grown-indoor-hydro-outdoor"
      },
      {
        "label": "Craft vs Commercial Cannabis",
        "href": "/resources/flower-guides/craft-vs-commercial-cannabis"
      }
    ]
  },
  "/resources/native-smokes-brampton-guide": {
    "title": "Native Cigarettes in Ontario: Terms, Brands and What to Know",
    "seoTitle": "Native Cigarettes in Ontario | Kennedy Loud Tobacco Guide",
    "metaDescription": "Learn what “Native cigarettes” can mean in Ontario, how brand identity differs from tax status, and how to read cigarette terminology more carefully.",
    "summary": "Learn what “Native cigarettes” can mean in Ontario, how brand identity differs from tax status, and how to read cigarette terminology more carefully.",
    "blocks": [
      {
        "type": "p",
        "text": "“Native cigarettes” is common consumer language in Ontario."
      },
      {
        "type": "p",
        "text": "The phrase is also broad enough to cause confusion."
      },
      {
        "type": "p",
        "text": "People may use it when talking about:"
      },
      {
        "type": "p",
        "text": "cigarettes associated with First Nations manufacturers;"
      },
      {
        "type": "p",
        "text": "brands commonly sold through Indigenous retail channels;"
      },
      {
        "type": "p",
        "text": "cigarettes sold on reserve;"
      },
      {
        "type": "p",
        "text": "tax-exempt allocation cigarettes;"
      },
      {
        "type": "p",
        "text": "cigarette shopping at a store that carries Native-smoke categories."
      },
      {
        "type": "p",
        "text": "Those ideas can overlap."
      },
      {
        "type": "p",
        "text": "They are not automatically the same thing."
      },
      {
        "type": "h2",
        "text": "“Native Cigarettes” Is Consumer Language, Not One Legal Product Category"
      },
      {
        "type": "p",
        "text": "There is no single product category where the phrase “Native cigarettes” automatically tells you:"
      },
      {
        "type": "p",
        "text": "the manufacturer;"
      },
      {
        "type": "p",
        "text": "the brand owner;"
      },
      {
        "type": "p",
        "text": "Indigenous ownership;"
      },
      {
        "type": "p",
        "text": "the package's tax status;"
      },
      {
        "type": "p",
        "text": "where it may legally be sold;"
      },
      {
        "type": "p",
        "text": "who may purchase it tax-exempt."
      },
      {
        "type": "p",
        "text": "The phrase is useful because people understand it."
      },
      {
        "type": "p",
        "text": "The details still need to be separated."
      },
      {
        "type": "h2",
        "text": "Traditional or Sacred Tobacco Is Different From Commercial Cigarettes"
      },
      {
        "type": "p",
        "text": "Tobacco has cultural and ceremonial significance in many Indigenous communities."
      },
      {
        "type": "p",
        "text": "Traditional or sacred tobacco practices should not be treated as the same thing as modern commercial cigarette smoking."
      },
      {
        "type": "p",
        "text": "This guide is about commercial cigarette terminology and store-navigation language."
      },
      {
        "type": "p",
        "text": "It does not describe ceremonial tobacco practices."
      },
      {
        "type": "h2",
        "text": "Manufacturer Identity and Tax Status Are Different Questions"
      },
      {
        "type": "p",
        "text": "A cigarette can be associated with an Indigenous-owned or First Nations-connected manufacturer without every package being tax-exempt."
      },
      {
        "type": "p",
        "text": "Likewise, seeing a cigarette sold through a particular retail channel does not automatically establish the manufacturer or ownership."
      },
      {
        "type": "p",
        "text": "A clean way to read the topic is to ask separate questions:"
      },
      {
        "type": "p",
        "text": "What is the exact brand?"
      },
      {
        "type": "p",
        "text": "Who is the verified manufacturer or brand owner?"
      },
      {
        "type": "p",
        "text": "What package markings are present?"
      },
      {
        "type": "p",
        "text": "Where is the product being sold?"
      },
      {
        "type": "p",
        "text": "Which tax/distribution rules apply to that package and transaction?"
      },
      {
        "type": "p",
        "text": "Do not collapse those questions into one nickname."
      },
      {
        "type": "h2",
        "text": "Ontario's First Nations Cigarette Allocation System Is a Specific Framework"
      },
      {
        "type": "p",
        "text": "Ontario has a First Nations Cigarette Allocation System under provincial tobacco-tax rules."
      },
      {
        "type": "p",
        "text": "The allocation system is not a general label for every Indigenous-manufactured cigarette."
      },
      {
        "type": "p",
        "text": "Allocation cigarettes have specific distribution and eligibility rules."
      },
      {
        "type": "p",
        "text": "That is why “Native-made” and “tax free” should never be treated as automatic synonyms."
      },
      {
        "type": "h2",
        "text": "What the Peach-Coloured Stamp Means"
      },
      {
        "type": "p",
        "text": "Ontario's allocation-cigarette framework uses a federal peach-coloured stamp for allocation cigarettes."
      },
      {
        "type": "p",
        "text": "The stamp is connected to the allocation/tax framework."
      },
      {
        "type": "p",
        "text": "It does not mean every cigarette associated with an Indigenous business is automatically an allocation cigarette."
      },
      {
        "type": "p",
        "text": "The package itself matters."
      },
      {
        "type": "h2",
        "text": "Ontario-Marked Cigarettes Are a Different Tax Context"
      },
      {
        "type": "p",
        "text": "Ontario-marked cigarettes sold through ordinary taxable retail channels use the applicable Ontario/federal marking framework."
      },
      {
        "type": "p",
        "text": "Again, the key lesson is separation:"
      },
      {
        "type": "p",
        "text": "brand/manufacturer identity ≠ tax status."
      },
      {
        "type": "h2",
        "text": "Brand Names Seen in Kennedy Loud's Cigarette Catalog"
      },
      {
        "type": "p",
        "text": "The Kennedy Loud cigarette guide includes names such as:"
      },
      {
        "type": "p",
        "text": "Canadian Lights;"
      },
      {
        "type": "p",
        "text": "Canadian Full;"
      },
      {
        "type": "p",
        "text": "Canadian Menthol;"
      },
      {
        "type": "p",
        "text": "Canadian Goose Full;"
      },
      {
        "type": "p",
        "text": "Canadian Goose Lights;"
      },
      {
        "type": "p",
        "text": "Canadian Classics Original;"
      },
      {
        "type": "p",
        "text": "Canadian Classics Silver;"
      },
      {
        "type": "p",
        "text": "Putter's;"
      },
      {
        "type": "p",
        "text": "Rolled Gold Lights;"
      },
      {
        "type": "p",
        "text": "Nexus Full;"
      },
      {
        "type": "p",
        "text": "Nexus Lights;"
      },
      {
        "type": "p",
        "text": "Time Full."
      },
      {
        "type": "p",
        "text": "These names are included here only as catalog terminology."
      },
      {
        "type": "p",
        "text": "They are not a claim that every listed name is:"
      },
      {
        "type": "p",
        "text": "Indigenous-owned;"
      },
      {
        "type": "p",
        "text": "Indigenous-manufactured;"
      },
      {
        "type": "p",
        "text": "Native-manufactured;"
      },
      {
        "type": "p",
        "text": "tax-exempt;"
      },
      {
        "type": "p",
        "text": "currently available."
      },
      {
        "type": "p",
        "text": "Do not add manufacturer or ownership statements without exact supporting evidence."
      },
      {
        "type": "h2",
        "text": "Backwoods, Grabba and Nicotine Pouches Are Separate Product Types"
      },
      {
        "type": "p",
        "text": "The cigarette category may also contain other tobacco/nicotine-related product names."
      },
      {
        "type": "p",
        "text": "That does not turn them into cigarettes."
      },
      {
        "type": "p",
        "text": "Keep terminology clear."
      },
      {
        "type": "p",
        "text": "A cigarette guide should not blur:"
      },
      {
        "type": "p",
        "text": "cigarettes;"
      },
      {
        "type": "p",
        "text": "cigar products;"
      },
      {
        "type": "p",
        "text": "grabba;"
      },
      {
        "type": "p",
        "text": "nicotine pouches;"
      },
      {
        "type": "p",
        "text": "cannabis."
      },
      {
        "type": "p",
        "text": "Each category has its own product identity and package information."
      },
      {
        "type": "h2",
        "text": "Packs, Cartons and Mixed Listings Need Exact Reading"
      },
      {
        "type": "p",
        "text": "Pack and carton describe packaging quantity."
      },
      {
        "type": "p",
        "text": "They do not determine:"
      },
      {
        "type": "p",
        "text": "manufacturer identity;"
      },
      {
        "type": "p",
        "text": "tax status;"
      },
      {
        "type": "p",
        "text": "Indigenous ownership;"
      },
      {
        "type": "p",
        "text": "current price."
      },
      {
        "type": "p",
        "text": "If a current listing matters, use the current cigarette category and the actual package information."
      },
      {
        "type": "p",
        "text": "Do not carry an old price or package assumption into an evergreen educational guide."
      },
      {
        "type": "h2",
        "text": "Commercial Tobacco Has Serious Health Risks"
      },
      {
        "type": "p",
        "text": "Words such as:"
      },
      {
        "type": "p",
        "text": "Native;"
      },
      {
        "type": "p",
        "text": "natural;"
      },
      {
        "type": "p",
        "text": "traditional;"
      },
      {
        "type": "p",
        "text": "premium;"
      },
      {
        "type": "p",
        "text": "should not be interpreted as evidence that a commercial cigarette is safe."
      },
      {
        "type": "p",
        "text": "Commercial cigarette smoking carries serious health risks."
      },
      {
        "type": "p",
        "text": "Traditional/sacred tobacco and commercial tobacco smoking should not be presented as the same practice."
      },
      {
        "type": "h2",
        "text": "How to Read a Cigarette Listing More Carefully"
      },
      {
        "type": "p",
        "text": "Before relying on a listing, separate:"
      },
      {
        "type": "h3",
        "text": "Brand"
      },
      {
        "type": "p",
        "text": "What is the exact product/brand name?"
      },
      {
        "type": "h3",
        "text": "Variant"
      },
      {
        "type": "p",
        "text": "Is it Full, Lights, Silver, Menthol or another named variant?"
      },
      {
        "type": "h3",
        "text": "Package"
      },
      {
        "type": "p",
        "text": "Is the listing a pack, carton or another quantity?"
      },
      {
        "type": "h3",
        "text": "Manufacturer"
      },
      {
        "type": "p",
        "text": "Is the manufacturer actually verified?"
      },
      {
        "type": "h3",
        "text": "Tax status"
      },
      {
        "type": "p",
        "text": "What does the package marking and legal sale context indicate?"
      },
      {
        "type": "h3",
        "text": "Current availability"
      },
      {
        "type": "p",
        "text": "Is the product actually shown in the current live category?"
      },
      {
        "type": "p",
        "text": "That sequence is more reliable than treating “Native cigarettes” as a complete answer."
      },
      {
        "type": "h2",
        "text": "Kennedy Loud and This Educational Guide"
      },
      {
        "type": "p",
        "text": "This page is an informational resource."
      },
      {
        "type": "p",
        "text": "It does not promise:"
      },
      {
        "type": "p",
        "text": "current cigarette stock;"
      },
      {
        "type": "p",
        "text": "a current brand list;"
      },
      {
        "type": "p",
        "text": "a current price;"
      },
      {
        "type": "p",
        "text": "a particular pack/carton quantity;"
      },
      {
        "type": "p",
        "text": "a particular tax treatment."
      },
      {
        "type": "p",
        "text": "Use the live category and actual package for current product-specific information."
      }
    ],
    "faqs": [
      {
        "question": "Are all Native cigarettes tax free?",
        "answer": "No. Manufacturer/brand identity and tax-exempt allocation status are separate questions."
      },
      {
        "question": "Does “Native cigarette” identify the manufacturer?",
        "answer": "Not reliably. It is broad consumer language. Manufacturer and ownership should be verified for the exact brand."
      },
      {
        "question": "What is Ontario's First Nations Cigarette Allocation System?",
        "answer": "It is a specific provincial tobacco-tax/distribution framework for allocation cigarettes involving authorized distribution and eligible on-reserve sales."
      },
      {
        "question": "What does a peach-coloured cigarette stamp indicate?",
        "answer": "It is associated with Ontario's allocation-cigarette framework. Package and sale context still matter."
      },
      {
        "question": "Are traditional sacred tobacco and commercial cigarettes the same thing?",
        "answer": "No. Traditional/sacred tobacco practices should be distinguished from modern commercial cigarette smoking."
      },
      {
        "question": "Does this page show Kennedy Loud's current cigarette inventory or prices?",
        "answer": "No. It is educational. Current product details belong on the current category/package."
      },
      {
        "question": "Exact internal links — informational only",
        "answer": "Kennedy Loud Resources → /resources"
      },
      {
        "question": "Hillcrest Ave Visit Guide → /resources/hillcrest-ave-visit-guide",
        "answer": "Kennedy Loud Cannabis in Brampton → /weed-dispensary-brampton"
      },
      {
        "question": "Do not place a direct /items/cigarettes Buy/Shop-style CTA inside the GBP-linked educational article.",
        "answer": "A neutral related-link card to current store information is acceptable; current commerce belongs outside the educational CTA."
      }
    ],
    "quickLinks": []
  }
};
const PINKY_KLC01_ADDITIONS: ResourceArticle[] = [
  {
    "path": "/resources/cannabis-101",
    "slug": [
      "cannabis-101"
    ],
    "eyebrow": "Cannabis 101",
    "sections": [],
    "title": "Cannabis 101: Read the Menu Without the Noise",
    "seoTitle": "Cannabis 101 in Brampton | Kennedy Loud Cannabis",
    "metaDescription": "A practical Cannabis 101 guide to menu formats, flower tiers, THC, genetics, labels and common weed terminology for adults 19+.",
    "summary": "A practical Cannabis 101 guide to menu formats, flower tiers, THC, genetics, labels and common weed terminology for adults 19+.",
    "blocks": [
      {
        "type": "p",
        "text": "Cannabis menus get noisy fast."
      },
      {
        "type": "p",
        "text": "Flower, pre-rolls, edibles, THC vapes, concentrates, five Weed tiers, THC numbers, Indica/Sativa/Hybrid labels and a pile of slang can all appear on the same site."
      },
      {
        "type": "p",
        "text": "Kennedy Loud's version of Cannabis 101 is simple:"
      },
      {
        "type": "p",
        "text": "pick the lane first, then read the details that belong to that lane."
      },
      {
        "type": "h2",
        "text": "Start With the Product Format"
      },
      {
        "type": "p",
        "text": "The first useful question is not “What is the best thing on the whole menu?”"
      },
      {
        "type": "p",
        "text": "It is:"
      },
      {
        "type": "p",
        "text": "What kind of product am I actually comparing?"
      },
      {
        "type": "h3",
        "text": "Flower"
      },
      {
        "type": "p",
        "text": "Flower, bud and weed are common ways people talk about dried cannabis flower."
      },
      {
        "type": "p",
        "text": "Kennedy Loud organizes flower into five protected Weed collections:"
      },
      {
        "type": "p",
        "text": "Exotic Weed;"
      },
      {
        "type": "p",
        "text": "Premium Weed;"
      },
      {
        "type": "p",
        "text": "AAA+ Weed;"
      },
      {
        "type": "p",
        "text": "AA Weed;"
      },
      {
        "type": "p",
        "text": "Budget Weed."
      },
      {
        "type": "p",
        "text": "Those sections help narrow the menu before someone looks at individual products."
      },
      {
        "type": "h3",
        "text": "Pre-Rolls"
      },
      {
        "type": "p",
        "text": "Pre-rolls are prepared rolls containing cannabis."
      },
      {
        "type": "p",
        "text": "They belong in their own format lane because package count, total weight and whether a listing is a single or multipack are different comparison questions from loose flower."
      },
      {
        "type": "h3",
        "text": "Edibles"
      },
      {
        "type": "p",
        "text": "Edibles are cannabis-containing food or beverage products."
      },
      {
        "type": "p",
        "text": "Read the legal package carefully because amount-per-unit and total package information matter."
      },
      {
        "type": "h3",
        "text": "THC Vapes"
      },
      {
        "type": "p",
        "text": "THC vape products use a vaporizer format."
      },
      {
        "type": "p",
        "text": "They should not be confused with Kennedy Loud's separate nicotine-vape category."
      },
      {
        "type": "h3",
        "text": "Concentrates"
      },
      {
        "type": "p",
        "text": "Concentrates are cannabis products in which cannabis constituents are present in a more concentrated form than dried flower."
      },
      {
        "type": "p",
        "text": "They belong in a separate lane because the format and label information are different from flower."
      },
      {
        "type": "h2",
        "text": "Weed, Cannabis, Bud and Flower Are Not Quality Grades"
      },
      {
        "type": "p",
        "text": "“Cannabis” is the formal word."
      },
      {
        "type": "p",
        "text": "“Weed” is the everyday word."
      },
      {
        "type": "p",
        "text": "“Bud” and “flower” usually point toward dried cannabis flower."
      },
      {
        "type": "p",
        "text": "“Nug” is slang for an individual piece of dried flower."
      },
      {
        "type": "p",
        "text": "None of those words tells you whether a product is better, stronger or fresher."
      },
      {
        "type": "p",
        "text": "They describe what someone is talking about, not how good it is."
      },
      {
        "type": "h2",
        "text": "Flower Tiers Are the Shelf Map"
      },
      {
        "type": "p",
        "text": "Kennedy Loud uses Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed as five clear flower owners."
      },
      {
        "type": "p",
        "text": "Use them like shelf signs."
      },
      {
        "type": "p",
        "text": "A tier tells you where you are in the site's browsing structure. It is not one universal Canadian government grading system."
      },
      {
        "type": "p",
        "text": "Two useful rules:"
      },
      {
        "type": "p",
        "text": "use the tier to narrow the menu;"
      },
      {
        "type": "p",
        "text": "use the actual product information to understand the product."
      },
      {
        "type": "p",
        "text": "Do not let the tier name do all the thinking."
      },
      {
        "type": "h2",
        "text": "THC Matters, but It Is Not the Whole Flower"
      },
      {
        "type": "p",
        "text": "THC is important regulated product information and it matters to intoxicating potency."
      },
      {
        "type": "p",
        "text": "It does not directly score:"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "cure;"
      },
      {
        "type": "p",
        "text": "moisture;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "bud structure;"
      },
      {
        "type": "p",
        "text": "visible trichomes;"
      },
      {
        "type": "p",
        "text": "freshness;"
      },
      {
        "type": "p",
        "text": "personal preference."
      },
      {
        "type": "p",
        "text": "A high THC number may matter to someone, but it cannot answer every quality question."
      },
      {
        "type": "h2",
        "text": "Indica, Sativa and Hybrid Are Starting Labels"
      },
      {
        "type": "p",
        "text": "Indica, Sativa and Hybrid are familiar because they give people a quick menu shorthand."
      },
      {
        "type": "p",
        "text": "Modern commercial cannabis has a long history of crossbreeding, so the simple three-box story is imperfect."
      },
      {
        "type": "p",
        "text": "Use the label as one piece of information."
      },
      {
        "type": "p",
        "text": "Do not turn it into a promise such as:"
      },
      {
        "type": "p",
        "text": "“Indica always means sleepy.”"
      },
      {
        "type": "p",
        "text": "or:"
      },
      {
        "type": "p",
        "text": "“Sativa always means energetic.”"
      },
      {
        "type": "p",
        "text": "Real products and individual responses are more complicated."
      },
      {
        "type": "h2",
        "text": "Learn the Slang Without Treating It Like Science"
      },
      {
        "type": "p",
        "text": "Kennedy Loud can speak normal weed language and still stay accurate."
      },
      {
        "type": "p",
        "text": "Gas usually describes a fuel-like aroma."
      },
      {
        "type": "p",
        "text": "Loud means the smell is pronounced."
      },
      {
        "type": "p",
        "text": "Frosty points toward visible trichomes."
      },
      {
        "type": "p",
        "text": "Fire means someone thinks the product is very good."
      },
      {
        "type": "p",
        "text": "Mids means someone considers it middle-of-the-road."
      },
      {
        "type": "p",
        "text": "Top shelf and quads usually signal premium positioning."
      },
      {
        "type": "p",
        "text": "Zaza is newer slang often associated with expensive, rare or exotic-positioned weed."
      },
      {
        "type": "p",
        "text": "Those words become useful when you translate them into a real characteristic."
      },
      {
        "type": "h2",
        "text": "Read the Legal Package"
      },
      {
        "type": "p",
        "text": "The legal package is where product-specific regulated information belongs."
      },
      {
        "type": "p",
        "text": "Use it for the actual product identity, THC/CBD information, warnings and other required details."
      },
      {
        "type": "p",
        "text": "A nickname, menu photo, tier label or old memory should not replace the package."
      },
      {
        "type": "h2",
        "text": "Use the Resource Centre as the Deeper Map"
      },
      {
        "type": "p",
        "text": "Cannabis 101 is the front door."
      },
      {
        "type": "p",
        "text": "From here, move into the question you actually have:"
      },
      {
        "type": "p",
        "text": "first visit;"
      },
      {
        "type": "p",
        "text": "flower quality;"
      },
      {
        "type": "p",
        "text": "top shelf vs mids vs quads;"
      },
      {
        "type": "p",
        "text": "THC;"
      },
      {
        "type": "p",
        "text": "bag appeal;"
      },
      {
        "type": "p",
        "text": "trichomes;"
      },
      {
        "type": "p",
        "text": "aroma and terpenes;"
      },
      {
        "type": "p",
        "text": "drying and curing;"
      },
      {
        "type": "p",
        "text": "smalls vs big buds;"
      },
      {
        "type": "p",
        "text": "cultivation methods;"
      },
      {
        "type": "p",
        "text": "genetics;"
      },
      {
        "type": "p",
        "text": "weed slang."
      },
      {
        "type": "p",
        "text": "That keeps the site useful without turning one page into a giant wall of information."
      }
    ],
    "faqs": [
      {
        "question": "Is weed the same thing as cannabis?",
        "answer": "Weed is common informal language for cannabis. Cannabis is the formal term."
      },
      {
        "question": "Are Exotic, Premium, AAA+, AA and Budget official government grades?",
        "answer": "No single Canadian government grading system defines those retail tier names. Kennedy Loud uses them as clear menu owners."
      },
      {
        "question": "Does higher THC automatically mean better flower?",
        "answer": "No. THC is one important measurement but it does not describe every quality characteristic."
      },
      {
        "question": "Are Indica and Sativa guaranteed effect categories?",
        "answer": "No. They remain common menu labels, but modern cannabis is heavily crossbred and individual response varies."
      },
      {
        "question": "Where should I check current products and prices?",
        "answer": "Use Kennedy Loud's current category and product pages. Educational resources should not be treated as current inventory or price promises."
      }
    ],
    "quickLinks": [
      {
        "label": "First Visit to Kennedy Loud",
        "href": "/resources/hillcrest-ave-visit-guide"
      },
      {
        "label": "Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-tier-guide"
      },
      {
        "label": "Indica vs Sativa vs Hybrid",
        "href": "/resources/cannabis-101/indica-sativa-hybrid"
      },
      {
        "label": "Strain vs Cultivar",
        "href": "/resources/cannabis-101/strain-vs-cultivar"
      },
      {
        "label": "Landrace vs Hybrid",
        "href": "/resources/cannabis-101/landrace-vs-hybrid"
      },
      {
        "label": "Weed Slang Explained",
        "href": "/resources/cannabis-101/weed-slang-glossary"
      },
      {
        "label": "Kennedy Loud Brampton store page",
        "href": "/weed-dispensary-brampton"
      }
    ]
  },
  {
    "path": "/resources/flower-guides/what-does-good-weed-mean",
    "slug": [
      "flower-guides",
      "what-does-good-weed-mean"
    ],
    "eyebrow": "Flower guide",
    "sections": [],
    "title": "What Does “Good Weed” Actually Mean?",
    "seoTitle": "What Does Good Weed Mean? | Kennedy Loud Brampton",
    "metaDescription": "Good weed is more than one number. Learn how aroma, cure, trichomes, freshness, structure and preference shape flower quality.",
    "summary": "Good weed is more than one number. Learn how aroma, cure, trichomes, freshness, structure and preference shape flower quality.",
    "blocks": [
      {
        "type": "p",
        "text": "“Good weed” sounds like one question."
      },
      {
        "type": "p",
        "text": "It is really a bundle of questions."
      },
      {
        "type": "p",
        "text": "One adult may mean:"
      },
      {
        "type": "p",
        "text": "strong aroma;"
      },
      {
        "type": "p",
        "text": "clean-looking trim;"
      },
      {
        "type": "p",
        "text": "visible frost;"
      },
      {
        "type": "p",
        "text": "fresh-feeling flower;"
      },
      {
        "type": "p",
        "text": "a cultivar they already like;"
      },
      {
        "type": "p",
        "text": "good value;"
      },
      {
        "type": "p",
        "text": "a well-finished cure."
      },
      {
        "type": "p",
        "text": "Another person may care about something completely different."
      },
      {
        "type": "p",
        "text": "That is why the useful move is to stop treating “good” like one official grade and start asking what characteristic the word is trying to summarize."
      },
      {
        "type": "h2",
        "text": "Good Weed Is Not One Government Score"
      },
      {
        "type": "p",
        "text": "There is no single Canadian government grade called:"
      },
      {
        "type": "p",
        "text": "good weed;"
      },
      {
        "type": "p",
        "text": "fire;"
      },
      {
        "type": "p",
        "text": "top shelf;"
      },
      {
        "type": "p",
        "text": "quads;"
      },
      {
        "type": "p",
        "text": "loud;"
      },
      {
        "type": "p",
        "text": "exotic."
      },
      {
        "type": "p",
        "text": "Those are consumer and retail terms."
      },
      {
        "type": "p",
        "text": "They can still be useful."
      },
      {
        "type": "p",
        "text": "They just need translation."
      },
      {
        "type": "p",
        "text": "If someone says a product is “fire,” ask why."
      },
      {
        "type": "p",
        "text": "If someone says it is “loud,” they may be talking about aroma."
      },
      {
        "type": "p",
        "text": "If someone says it is “frosty,” they are probably pointing to trichomes."
      },
      {
        "type": "p",
        "text": "If someone says “top shelf,” they may be combining appearance, aroma, cure, rarity, price or overall presentation."
      },
      {
        "type": "h2",
        "text": "Aroma Is One Part of Quality"
      },
      {
        "type": "p",
        "text": "Cannabis aroma comes from volatile compounds, including terpenes."
      },
      {
        "type": "p",
        "text": "People describe those aromas in normal language:"
      },
      {
        "type": "p",
        "text": "gas;"
      },
      {
        "type": "p",
        "text": "skunk;"
      },
      {
        "type": "p",
        "text": "citrus;"
      },
      {
        "type": "p",
        "text": "fruit;"
      },
      {
        "type": "p",
        "text": "pine;"
      },
      {
        "type": "p",
        "text": "earth;"
      },
      {
        "type": "p",
        "text": "floral;"
      },
      {
        "type": "p",
        "text": "spice;"
      },
      {
        "type": "p",
        "text": "sweet;"
      },
      {
        "type": "p",
        "text": "creamy."
      },
      {
        "type": "p",
        "text": "A memorable aroma can make a flower stand out."
      },
      {
        "type": "p",
        "text": "It does not automatically prove higher THC."
      },
      {
        "type": "p",
        "text": "It also does not guarantee that every person will describe the smell the same way."
      },
      {
        "type": "h2",
        "text": "Trichomes Explain the Frost"
      },
      {
        "type": "p",
        "text": "Trichomes are small resin-producing structures on the cannabis plant."
      },
      {
        "type": "p",
        "text": "Visible trichome coverage can make flower look frosted, dusty or sparkly."
      },
      {
        "type": "p",
        "text": "That is one reason frosty flower gets attention."
      },
      {
        "type": "p",
        "text": "But there are limits to what the eye can tell you."
      },
      {
        "type": "p",
        "text": "Lighting can exaggerate the look."
      },
      {
        "type": "p",
        "text": "Macro photography can make every trichome seem larger."
      },
      {
        "type": "p",
        "text": "Handling can damage them."
      },
      {
        "type": "p",
        "text": "A photo cannot give you an exact THC result."
      },
      {
        "type": "p",
        "text": "Treat frost as one visible clue."
      },
      {
        "type": "h2",
        "text": "Trim and Structure Affect Bag Appeal"
      },
      {
        "type": "p",
        "text": "“Bag appeal” is the cannabis phrase for first visual impression."
      },
      {
        "type": "p",
        "text": "People may notice:"
      },
      {
        "type": "p",
        "text": "bud size;"
      },
      {
        "type": "p",
        "text": "bud shape;"
      },
      {
        "type": "p",
        "text": "density;"
      },
      {
        "type": "p",
        "text": "colour;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "visible trichomes;"
      },
      {
        "type": "p",
        "text": "how intact the flower looks."
      },
      {
        "type": "p",
        "text": "Those characteristics can make a product look carefully finished."
      },
      {
        "type": "p",
        "text": "They do not settle every quality question."
      },
      {
        "type": "p",
        "text": "A large photogenic bud can still be too dry."
      },
      {
        "type": "p",
        "text": "A smaller bud can come from the same plant or batch as a larger one."
      },
      {
        "type": "h2",
        "text": "Drying and Curing Matter After Harvest"
      },
      {
        "type": "p",
        "text": "Quality does not stop when the plant is cut."
      },
      {
        "type": "p",
        "text": "Drying removes moisture."
      },
      {
        "type": "p",
        "text": "Curing is part of controlled post-harvest conditioning."
      },
      {
        "type": "p",
        "text": "Storage keeps mattering afterward."
      },
      {
        "type": "p",
        "text": "Heat, light, oxygen, time and handling can influence finished flower."
      },
      {
        "type": "p",
        "text": "That is why a well-grown product can still lose desirable characteristics through poor post-harvest handling."
      },
      {
        "type": "h2",
        "text": "Freshness Is Not the Same Thing as Wetness"
      },
      {
        "type": "p",
        "text": "People often use “fresh” as a compliment."
      },
      {
        "type": "p",
        "text": "That does not mean wetter is automatically better."
      },
      {
        "type": "p",
        "text": "Flower needs appropriate moisture management."
      },
      {
        "type": "p",
        "text": "Overly dry flower can become brittle and lose aromatic intensity."
      },
      {
        "type": "p",
        "text": "Excess moisture creates a different set of storage and handling concerns."
      },
      {
        "type": "p",
        "text": "The better word is balance."
      },
      {
        "type": "h2",
        "text": "THC Is Important but Incomplete"
      },
      {
        "type": "p",
        "text": "THC is important regulated information."
      },
      {
        "type": "p",
        "text": "It matters to intoxicating potency."
      },
      {
        "type": "p",
        "text": "It does not directly score:"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "cure;"
      },
      {
        "type": "p",
        "text": "moisture;"
      },
      {
        "type": "p",
        "text": "bud structure;"
      },
      {
        "type": "p",
        "text": "freshness;"
      },
      {
        "type": "p",
        "text": "visual trichome preservation;"
      },
      {
        "type": "p",
        "text": "personal preference."
      },
      {
        "type": "p",
        "text": "That is why a higher THC number should not automatically be called “better weed.”"
      },
      {
        "type": "h2",
        "text": "Cultivar Names Help, but They Do Not Guarantee the Whole Experience"
      },
      {
        "type": "p",
        "text": "Cannabis culture relies heavily on cultivar or strain names."
      },
      {
        "type": "p",
        "text": "They are useful for identifying products."
      },
      {
        "type": "p",
        "text": "They are not perfect genetic barcodes."
      },
      {
        "type": "p",
        "text": "Different producers may work with different cuts or breeding lines under familiar names, and cultivation/post-harvest conditions can change how the finished flower presents."
      },
      {
        "type": "p",
        "text": "Read the product in front of you."
      },
      {
        "type": "p",
        "text": "Do not let the name do all the thinking."
      },
      {
        "type": "h2",
        "text": "Good Weed Depends on What You Actually Care About"
      },
      {
        "type": "p",
        "text": "There is no need to turn every flower comparison into a contest."
      },
      {
        "type": "p",
        "text": "Someone looking for value may prioritize the Budget Weed owner."
      },
      {
        "type": "p",
        "text": "Someone else may care more about aroma."
      },
      {
        "type": "p",
        "text": "Someone else may be curious about a cultivar."
      },
      {
        "type": "p",
        "text": "Someone else may care about appearance and freshness."
      },
      {
        "type": "p",
        "text": "The useful habit is to identify the characteristics that matter, then compare the actual product information."
      }
    ],
    "faqs": [
      {
        "question": "Does high THC mean good weed?",
        "answer": "Not by itself. THC is one important measurement and does not describe every quality characteristic."
      },
      {
        "question": "What does “fire weed” mean?",
        "answer": "It is slang for cannabis someone considers very good. The exact reason is subjective."
      },
      {
        "question": "Does frosty weed mean stronger weed?",
        "answer": "Visible frost usually points to trichomes, but appearance alone does not provide an exact potency reading."
      },
      {
        "question": "Is expensive weed always better?",
        "answer": "No. Price can reflect many factors and is not a universal quality score."
      },
      {
        "question": "What should I compare when looking at flower?",
        "answer": "Adults may compare the legal label, cultivar, producer, THC/CBD, aroma, trim, structure, trichomes, moisture, cure and freshness where information is available."
      }
    ],
    "quickLinks": [
      {
        "label": "Kennedy Loud Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-tier-guide"
      },
      {
        "label": "THC vs Weed Quality",
        "href": "/resources/flower-guides/thc-vs-weed-quality"
      },
      {
        "label": "Bag Appeal",
        "href": "/resources/flower-guides/bag-appeal"
      },
      {
        "label": "Frosty Weed & Trichomes",
        "href": "/resources/flower-guides/trichomes-frosty-weed"
      },
      {
        "label": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness"
      }
    ]
  },
  {
    "path": "/resources/flower-guides/top-shelf-mids-quads",
    "slug": [
      "flower-guides",
      "top-shelf-mids-quads"
    ],
    "eyebrow": "Flower guide",
    "sections": [],
    "title": "Top Shelf, Mids, Quads, AAAA and AAA: Translate the Grade",
    "seoTitle": "Top Shelf vs Mids vs Quads | Weed Grades Explained",
    "metaDescription": "Top shelf, mids, quads, AAAA, AAA and AA are common weed terms, not one official grading system. Learn what they usually describe.",
    "summary": "Top shelf, mids, quads, AAAA, AAA and AA are common weed terms, not one official grading system. Learn what they usually describe.",
    "blocks": [
      {
        "type": "p",
        "text": "Weed quality language can sound more official than it really is."
      },
      {
        "type": "p",
        "text": "Top shelf."
      },
      {
        "type": "p",
        "text": "Mids."
      },
      {
        "type": "p",
        "text": "Quads."
      },
      {
        "type": "p",
        "text": "AAAA."
      },
      {
        "type": "p",
        "text": "AAA."
      },
      {
        "type": "p",
        "text": "AA."
      },
      {
        "type": "p",
        "text": "Premium."
      },
      {
        "type": "p",
        "text": "Exotic."
      },
      {
        "type": "p",
        "text": "Those words can all appear in cannabis conversations, but they do not come from one universal Canadian scorecard."
      },
      {
        "type": "p",
        "text": "The smart move is not to throw the words away."
      },
      {
        "type": "p",
        "text": "It is to translate them."
      },
      {
        "type": "h2",
        "text": "What “Top Shelf” Usually Means"
      },
      {
        "type": "p",
        "text": "Top shelf generally means premium positioning."
      },
      {
        "type": "p",
        "text": "The phrase comes from retail language: the products considered more desirable or premium are imagined as sitting on the higher shelf."
      },
      {
        "type": "p",
        "text": "In cannabis, “top shelf” may refer to a mix of:"
      },
      {
        "type": "p",
        "text": "appearance;"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "genetics;"
      },
      {
        "type": "p",
        "text": "cure;"
      },
      {
        "type": "p",
        "text": "freshness;"
      },
      {
        "type": "p",
        "text": "rarity;"
      },
      {
        "type": "p",
        "text": "producer reputation;"
      },
      {
        "type": "p",
        "text": "price positioning."
      },
      {
        "type": "p",
        "text": "The exact mix changes depending on who is speaking."
      },
      {
        "type": "p",
        "text": "That is why top shelf is useful as a broad signal, not a precise technical definition."
      },
      {
        "type": "h2",
        "text": "What “Mids” Usually Means"
      },
      {
        "type": "p",
        "text": "Mids is casual slang for something a person considers middle-of-the-road."
      },
      {
        "type": "p",
        "text": "The problem is that people use it for different reasons."
      },
      {
        "type": "p",
        "text": "Someone may call flower mids because:"
      },
      {
        "type": "p",
        "text": "the aroma is mild;"
      },
      {
        "type": "p",
        "text": "the trim looks average;"
      },
      {
        "type": "p",
        "text": "the bag appeal is ordinary;"
      },
      {
        "type": "p",
        "text": "the cure feels unremarkable;"
      },
      {
        "type": "p",
        "text": "the price sits in the middle;"
      },
      {
        "type": "p",
        "text": "it simply does not match their preference."
      },
      {
        "type": "p",
        "text": "Because the term is subjective, it should not be used as a factual defect claim without explaining the reason."
      },
      {
        "type": "h2",
        "text": "What “Quads” Means in Canadian Weed Slang"
      },
      {
        "type": "p",
        "text": "“Quads” is common Canadian shorthand for AAAA."
      },
      {
        "type": "p",
        "text": "It usually signals premium positioning."
      },
      {
        "type": "p",
        "text": "The term is widely understood in cannabis culture."
      },
      {
        "type": "p",
        "text": "It is not a government grade with one mandatory scoring formula."
      },
      {
        "type": "p",
        "text": "One seller's AAAA may not match another seller's AAAA exactly."
      },
      {
        "type": "p",
        "text": "That is why the useful question is:"
      },
      {
        "type": "p",
        "text": "What characteristics are being used to justify the label?"
      },
      {
        "type": "h2",
        "text": "AAA and AAA+"
      },
      {
        "type": "p",
        "text": "AAA is another familiar cannabis retail shorthand."
      },
      {
        "type": "p",
        "text": "AAA+ suggests something positioned slightly above a basic AAA label."
      },
      {
        "type": "p",
        "text": "Again, there is no national rule tying AAA or AAA+ to one THC range, one bud size or one exact terpene level."
      },
      {
        "type": "p",
        "text": "Kennedy Loud's protected commercial owner is:"
      },
      {
        "type": "p",
        "text": "AAA+ Weed → /aaa-weed"
      },
      {
        "type": "p",
        "text": "That owner should remain the store's source for the current AAA+ collection."
      },
      {
        "type": "p",
        "text": "The Resource Centre explains the terminology."
      },
      {
        "type": "h2",
        "text": "AA"
      },
      {
        "type": "p",
        "text": "AA is another informal retail tier."
      },
      {
        "type": "p",
        "text": "It is commonly positioned below AAA-style labels, but the exact definition can vary."
      },
      {
        "type": "p",
        "text": "Kennedy Loud's owner is:"
      },
      {
        "type": "p",
        "text": "AA Weed → /aa-weed"
      },
      {
        "type": "p",
        "text": "The letter grade helps organize the browse."
      },
      {
        "type": "p",
        "text": "The actual product information still matters."
      },
      {
        "type": "h2",
        "text": "Premium and Exotic Are Different Words, Not Scientific Scores"
      },
      {
        "type": "p",
        "text": "Premium is broad positioning language."
      },
      {
        "type": "p",
        "text": "Exotic often carries an extra idea of unusual genetics, distinctive aroma, rarity, visual presentation or high-end positioning."
      },
      {
        "type": "p",
        "text": "Both are useful retail words."
      },
      {
        "type": "p",
        "text": "Neither is one official government cannabis grade."
      },
      {
        "type": "p",
        "text": "At Kennedy Loud, Premium Weed and Exotic Weed are protected commercial owners."
      },
      {
        "type": "p",
        "text": "Their store-specific meaning should come from the site structure, not from pretending every retailer uses the same formula."
      },
      {
        "type": "h2",
        "text": "Why People Still Like Grade Language"
      },
      {
        "type": "p",
        "text": "Because it is fast."
      },
      {
        "type": "p",
        "text": "A shopper can say:"
      },
      {
        "type": "p",
        "text": "“Show me the higher-tier lane.”"
      },
      {
        "type": "p",
        "text": "or:"
      },
      {
        "type": "p",
        "text": "“I am comparing AA and AAA+.”"
      },
      {
        "type": "p",
        "text": "and immediately narrow the conversation."
      },
      {
        "type": "p",
        "text": "That efficiency is real."
      },
      {
        "type": "p",
        "text": "The mistake is believing the shortcut replaces the product information."
      },
      {
        "type": "h2",
        "text": "THC Should Not Become the Grade"
      },
      {
        "type": "p",
        "text": "A common shortcut is:"
      },
      {
        "type": "p",
        "text": "higher THC = higher grade."
      },
      {
        "type": "p",
        "text": "That is too simple."
      },
      {
        "type": "p",
        "text": "THC is one important cannabinoid measurement."
      },
      {
        "type": "p",
        "text": "Quality language often includes things THC does not directly measure:"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "trichome preservation;"
      },
      {
        "type": "p",
        "text": "bud structure;"
      },
      {
        "type": "p",
        "text": "moisture;"
      },
      {
        "type": "p",
        "text": "cure;"
      },
      {
        "type": "p",
        "text": "freshness;"
      },
      {
        "type": "p",
        "text": "consistency."
      },
      {
        "type": "p",
        "text": "Two products with similar THC can still differ across all of those characteristics."
      },
      {
        "type": "h2",
        "text": "Use Kennedy Loud's Five Owners as the Store Map"
      },
      {
        "type": "p",
        "text": "For Kennedy Loud, the clean browse is:"
      },
      {
        "type": "p",
        "text": "Exotic Weed;"
      },
      {
        "type": "p",
        "text": "Premium Weed;"
      },
      {
        "type": "p",
        "text": "AAA+ Weed;"
      },
      {
        "type": "p",
        "text": "AA Weed;"
      },
      {
        "type": "p",
        "text": "Budget Weed."
      },
      {
        "type": "p",
        "text": "Then use the educational pages to understand the language behind the shelf."
      },
      {
        "type": "p",
        "text": "That keeps the menu simple without pretending the labels are scientific grades."
      }
    ],
    "faqs": [
      {
        "question": "What are quads?",
        "answer": "Quads is common Canadian slang for AAAA and usually implies premium positioning."
      },
      {
        "question": "What does mids mean?",
        "answer": "Mids is informal language for cannabis someone considers average or middle-tier."
      },
      {
        "question": "Is top shelf the same as Exotic Weed?",
        "answer": "Not necessarily. They can overlap in premium positioning, but the terms are not identical."
      },
      {
        "question": "Does AAAA require a certain THC percentage?",
        "answer": "No universal rule ties AAAA to one THC percentage."
      },
      {
        "question": "Are Kennedy Loud's tier names changing?",
        "answer": "No. Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed remain the protected store owners."
      }
    ],
    "quickLinks": [
      {
        "label": "Exotic Weed",
        "href": "/exotic-weed"
      },
      {
        "label": "Premium Weed",
        "href": "/premium-weed"
      },
      {
        "label": "AAA+ Weed",
        "href": "/aaa-weed"
      },
      {
        "label": "AA Weed",
        "href": "/aa-weed"
      },
      {
        "label": "Budget Weed",
        "href": "/budget-weed"
      },
      {
        "label": "Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-tier-guide"
      },
      {
        "label": "Weed Slang Explained",
        "href": "/resources/cannabis-101/weed-slang-glossary"
      }
    ]
  },
  {
    "path": "/resources/flower-guides/thc-vs-weed-quality",
    "slug": [
      "flower-guides",
      "thc-vs-weed-quality"
    ],
    "eyebrow": "Flower guide",
    "sections": [],
    "title": "Does Higher THC Mean Better Weed?",
    "seoTitle": "THC vs Weed Quality | Kennedy Loud Cannabis",
    "metaDescription": "THC matters, but it is not a complete flower-quality score. Learn what else adults may compare when reading cannabis flower.",
    "summary": "THC matters, but it is not a complete flower-quality score. Learn what else adults may compare when reading cannabis flower.",
    "blocks": [
      {
        "type": "p",
        "text": "THC is the easiest cannabis number to compare."
      },
      {
        "type": "p",
        "text": "That is exactly why it gets asked to do too much."
      },
      {
        "type": "p",
        "text": "THC matters."
      },
      {
        "type": "p",
        "text": "It is important regulated product information."
      },
      {
        "type": "p",
        "text": "It is relevant to intoxicating potency."
      },
      {
        "type": "p",
        "text": "It is not a complete quality score for cannabis flower."
      },
      {
        "type": "h2",
        "text": "What THC Tells You"
      },
      {
        "type": "p",
        "text": "The legal product information tells you the amount or concentration of THC in the product."
      },
      {
        "type": "p",
        "text": "That helps adults understand potency-related information."
      },
      {
        "type": "p",
        "text": "It does not directly tell you:"
      },
      {
        "type": "p",
        "text": "how the flower was trimmed;"
      },
      {
        "type": "p",
        "text": "how dry or fresh it feels;"
      },
      {
        "type": "p",
        "text": "what the aroma is like;"
      },
      {
        "type": "p",
        "text": "how intact the trichomes look;"
      },
      {
        "type": "p",
        "text": "how the buds are structured;"
      },
      {
        "type": "p",
        "text": "how the product was cured;"
      },
      {
        "type": "p",
        "text": "whether you personally like the cultivar."
      },
      {
        "type": "p",
        "text": "Those are separate questions."
      },
      {
        "type": "h2",
        "text": "Why the Biggest Number Gets Too Much Attention"
      },
      {
        "type": "p",
        "text": "Numbers feel clean."
      },
      {
        "type": "p",
        "text": "If one product shows a bigger number than another, it is tempting to assume the comparison is finished."
      },
      {
        "type": "p",
        "text": "Cannabis flower is not that simple."
      },
      {
        "type": "p",
        "text": "It is a plant product with many observable and sensory characteristics."
      },
      {
        "type": "p",
        "text": "The legal THC value is useful."
      },
      {
        "type": "p",
        "text": "It should not be stretched into a score for things it does not measure."
      },
      {
        "type": "h2",
        "text": "Aroma Is Different From THC"
      },
      {
        "type": "p",
        "text": "A flower can have a strong aroma without having the highest THC number in a menu."
      },
      {
        "type": "p",
        "text": "A flower can have a high THC number without being the most aromatic product."
      },
      {
        "type": "p",
        "text": "Those are not contradictions."
      },
      {
        "type": "p",
        "text": "They are different characteristics."
      },
      {
        "type": "p",
        "text": "People may describe aroma as:"
      },
      {
        "type": "p",
        "text": "gassy;"
      },
      {
        "type": "p",
        "text": "citrusy;"
      },
      {
        "type": "p",
        "text": "fruity;"
      },
      {
        "type": "p",
        "text": "skunky;"
      },
      {
        "type": "p",
        "text": "earthy;"
      },
      {
        "type": "p",
        "text": "piney;"
      },
      {
        "type": "p",
        "text": "sweet;"
      },
      {
        "type": "p",
        "text": "floral."
      },
      {
        "type": "p",
        "text": "Those descriptions come from what people smell, not from the THC number."
      },
      {
        "type": "h2",
        "text": "Trichomes Are Different From a Label Number"
      },
      {
        "type": "p",
        "text": "Visible trichomes can make flower look frosty."
      },
      {
        "type": "p",
        "text": "They are associated with resin production on the plant."
      },
      {
        "type": "p",
        "text": "You still cannot look at a photograph and read an exact THC percentage."
      },
      {
        "type": "p",
        "text": "Use the legal product information for the number."
      },
      {
        "type": "p",
        "text": "Use the flower itself for the visible characteristic."
      },
      {
        "type": "h2",
        "text": "Post-Harvest Handling Is a Different Quality Layer"
      },
      {
        "type": "p",
        "text": "Drying, curing, packaging and storage all happen after cultivation."
      },
      {
        "type": "p",
        "text": "They can influence:"
      },
      {
        "type": "p",
        "text": "moisture;"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "texture;"
      },
      {
        "type": "p",
        "text": "how intact the flower remains;"
      },
      {
        "type": "p",
        "text": "how the product handles over time."
      },
      {
        "type": "p",
        "text": "A high THC number cannot tell you whether the flower was stored well."
      },
      {
        "type": "h2",
        "text": "Higher THC Is Not Automatically the Better Goal"
      },
      {
        "type": "p",
        "text": "More THC is not automatically the goal for every adult."
      },
      {
        "type": "p",
        "text": "Higher-potency cannabis can also increase the chance of unwanted effects."
      },
      {
        "type": "p",
        "text": "That is another reason the site should not present maximum THC as the default best choice."
      },
      {
        "type": "p",
        "text": "The useful job of an educational guide is to help adults read information, not to push them toward the biggest number."
      },
      {
        "type": "h2",
        "text": "Tier and THC Are Different Things"
      },
      {
        "type": "p",
        "text": "Kennedy Loud's five Weed owners organize flower browsing."
      },
      {
        "type": "p",
        "text": "THC is product-specific regulated information."
      },
      {
        "type": "p",
        "text": "Do not collapse those two systems."
      },
      {
        "type": "p",
        "text": "A product should not automatically move into a higher tier just because it shows a higher THC number."
      },
      {
        "type": "p",
        "text": "A higher tier should not be treated as a promise of one THC range."
      },
      {
        "type": "h2",
        "text": "A Better Flower Checklist"
      },
      {
        "type": "p",
        "text": "When comparing flower, adults can look at:"
      },
      {
        "type": "p",
        "text": "exact product name;"
      },
      {
        "type": "p",
        "text": "producer;"
      },
      {
        "type": "p",
        "text": "cultivar;"
      },
      {
        "type": "p",
        "text": "THC and CBD information;"
      },
      {
        "type": "p",
        "text": "package amount;"
      },
      {
        "type": "p",
        "text": "any provided aroma/terpene information;"
      },
      {
        "type": "p",
        "text": "visible structure and trim;"
      },
      {
        "type": "p",
        "text": "trichome appearance;"
      },
      {
        "type": "p",
        "text": "freshness/moisture clues;"
      },
      {
        "type": "p",
        "text": "the current tier/listing context."
      },
      {
        "type": "p",
        "text": "That is a fuller picture than sorting by one number."
      }
    ],
    "faqs": [
      {
        "question": "Does higher THC mean stronger cannabis?",
        "answer": "THC is the main intoxicating cannabinoid, so THC amount is relevant to potency. It still does not describe every quality characteristic."
      },
      {
        "question": "Does higher THC mean a higher flower tier?",
        "answer": "Not automatically. Retail tiers and product-specific THC are different pieces of information."
      },
      {
        "question": "Can two products with similar THC feel different?",
        "answer": "Yes. Products can differ in other cannabinoids, terpene profiles, format and individual response."
      },
      {
        "question": "Should a beginner choose the highest THC?",
        "answer": "No. Maximum potency should not be treated as the default goal."
      },
      {
        "question": "Where do I find the actual THC number?",
        "answer": "Use the legal product information for the specific package."
      }
    ],
    "quickLinks": [
      {
        "label": "Cannabis 101",
        "href": "/resources/cannabis-101"
      },
      {
        "label": "Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-tier-guide"
      },
      {
        "label": "Gas, Loud & Terpy",
        "href": "/resources/flower-guides/terpenes-gas-loud-aroma"
      },
      {
        "label": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness"
      }
    ]
  },
  {
    "path": "/resources/flower-guides/bag-appeal",
    "slug": [
      "flower-guides",
      "bag-appeal"
    ],
    "eyebrow": "Flower guide",
    "sections": [],
    "title": "Bag Appeal: What the First Look Can Tell You",
    "seoTitle": "Cannabis Bag Appeal Explained | Kennedy Loud Brampton",
    "metaDescription": "Learn what bag appeal means, which visual clues people notice in weed, and why looks alone cannot prove flower quality.",
    "summary": "Learn what bag appeal means, which visual clues people notice in weed, and why looks alone cannot prove flower quality.",
    "blocks": [
      {
        "type": "p",
        "text": "Bag appeal is weed slang for first visual impression."
      },
      {
        "type": "p",
        "text": "Before someone thinks about cure, THC or aroma, they see the flower."
      },
      {
        "type": "p",
        "text": "That first look can be useful."
      },
      {
        "type": "p",
        "text": "It can also fool you if you ask it to answer too many questions."
      },
      {
        "type": "h2",
        "text": "What People Notice First"
      },
      {
        "type": "p",
        "text": "Bag appeal often includes:"
      },
      {
        "type": "p",
        "text": "bud shape;"
      },
      {
        "type": "p",
        "text": "density;"
      },
      {
        "type": "p",
        "text": "colour;"
      },
      {
        "type": "p",
        "text": "visible trichomes;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "bud size;"
      },
      {
        "type": "p",
        "text": "how intact the flower looks;"
      },
      {
        "type": "p",
        "text": "how consistent the pieces appear."
      },
      {
        "type": "p",
        "text": "Large, tidy, frosty buds usually photograph well."
      },
      {
        "type": "p",
        "text": "That does not mean every smaller or less-perfect-looking bud is low quality."
      },
      {
        "type": "h2",
        "text": "Colour Is Not a Grade"
      },
      {
        "type": "p",
        "text": "Cannabis flower can show different shades of:"
      },
      {
        "type": "p",
        "text": "green;"
      },
      {
        "type": "p",
        "text": "purple;"
      },
      {
        "type": "p",
        "text": "orange;"
      },
      {
        "type": "p",
        "text": "red;"
      },
      {
        "type": "p",
        "text": "brown-toned plant material."
      },
      {
        "type": "p",
        "text": "Colour can reflect genetics, plant pigments, growing conditions and maturity."
      },
      {
        "type": "p",
        "text": "Purple does not automatically mean stronger."
      },
      {
        "type": "p",
        "text": "Bright green does not automatically mean fresher."
      },
      {
        "type": "p",
        "text": "Orange hairs do not automatically mean premium."
      },
      {
        "type": "p",
        "text": "Colour is a description, not a score."
      },
      {
        "type": "h2",
        "text": "Frost Can Look Different Under Different Lighting"
      },
      {
        "type": "p",
        "text": "Trichomes can create a sparkling or dusty surface."
      },
      {
        "type": "p",
        "text": "Close-up photography, bright lighting and image sharpening can make them look more dramatic."
      },
      {
        "type": "p",
        "text": "That is why a product photo is helpful for presentation but not a replacement for regulated product information."
      },
      {
        "type": "h2",
        "text": "Trim Changes the First Impression"
      },
      {
        "type": "p",
        "text": "Trim refers to how much surrounding leaf material remains around the flower after processing."
      },
      {
        "type": "p",
        "text": "A tighter trim can make the bud structure look cleaner."
      },
      {
        "type": "p",
        "text": "A looser trim may leave more small leaf material."
      },
      {
        "type": "p",
        "text": "Neither appearance directly tells you the exact THC level."
      },
      {
        "type": "h2",
        "text": "Bigger Buds Win the Beauty Contest More Often"
      },
      {
        "type": "p",
        "text": "Large buds usually make a stronger visual impression."
      },
      {
        "type": "p",
        "text": "They can show the flower structure more clearly."
      },
      {
        "type": "p",
        "text": "Smalls are easier to dismiss because they are less dramatic."
      },
      {
        "type": "p",
        "text": "That is a presentation difference."
      },
      {
        "type": "p",
        "text": "Bud size alone is not a potency grade."
      },
      {
        "type": "h2",
        "text": "Bag Appeal Cannot Show Moisture"
      },
      {
        "type": "p",
        "text": "A photo cannot reliably tell you how dry a product feels."
      },
      {
        "type": "p",
        "text": "A flower can look excellent and still be brittle."
      },
      {
        "type": "p",
        "text": "That is why bag appeal needs to be paired with the broader quality conversation around drying, curing, freshness and storage."
      },
      {
        "type": "h2",
        "text": "Use the Visual as a Starting Question"
      },
      {
        "type": "p",
        "text": "Instead of:"
      },
      {
        "type": "p",
        "text": "“That looks good, so it must be the best.”"
      },
      {
        "type": "p",
        "text": "try:"
      },
      {
        "type": "p",
        "text": "“What am I actually noticing?”"
      },
      {
        "type": "p",
        "text": "Maybe it is:"
      },
      {
        "type": "p",
        "text": "trichome coverage;"
      },
      {
        "type": "p",
        "text": "colour;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "bud size;"
      },
      {
        "type": "p",
        "text": "structure."
      },
      {
        "type": "p",
        "text": "Once you name the characteristic, the comparison gets clearer."
      }
    ],
    "faqs": [
      {
        "question": "What does bag appeal mean?",
        "answer": "It means the visual first impression of cannabis flower."
      },
      {
        "question": "Do purple buds mean better weed?",
        "answer": "No. Colour is not a universal quality grade."
      },
      {
        "question": "Are large buds stronger than small buds?",
        "answer": "Bud size alone does not prove potency."
      },
      {
        "question": "Does more visible frost always mean higher THC?",
        "answer": "No. Visible trichomes are one clue, not an exact potency measurement."
      },
      {
        "question": "Can product photos be misleading?",
        "answer": "Lighting, magnification and editing can change how colour and trichomes appear."
      }
    ],
    "quickLinks": [
      {
        "label": "Frosty Weed & Trichomes",
        "href": "/resources/flower-guides/trichomes-frosty-weed"
      },
      {
        "label": "Smalls vs Big Buds",
        "href": "/resources/flower-guides/smalls-vs-big-buds"
      },
      {
        "label": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean"
      },
      {
        "label": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness"
      }
    ]
  },
  {
    "path": "/resources/flower-guides/trichomes-frosty-weed",
    "slug": [
      "flower-guides",
      "trichomes-frosty-weed"
    ],
    "eyebrow": "Flower guide",
    "sections": [],
    "title": "Frosty Weed: What Are Those Crystals?",
    "seoTitle": "Frosty Weed & Trichomes Explained | Kennedy Loud",
    "metaDescription": "What makes weed look frosty? Learn what cannabis trichomes are, why they matter to the plant and why visible frost is only one clue.",
    "summary": "What makes weed look frosty? Learn what cannabis trichomes are, why they matter to the plant and why visible frost is only one clue.",
    "blocks": [
      {
        "type": "p",
        "text": "When people say a bud looks frosty, they are usually talking about trichomes."
      },
      {
        "type": "p",
        "text": "Trichomes are tiny structures on the cannabis plant associated with resin production."
      },
      {
        "type": "p",
        "text": "Under magnification, many glandular trichomes look like small stalks with rounded heads."
      },
      {
        "type": "p",
        "text": "To the naked eye, dense coverage can create the glittery, dusty or crystal-like surface people call frost."
      },
      {
        "type": "h2",
        "text": "Why Trichomes Get So Much Attention"
      },
      {
        "type": "p",
        "text": "They are easy to see."
      },
      {
        "type": "p",
        "text": "They photograph well."
      },
      {
        "type": "p",
        "text": "They are associated with compounds people care about in cannabis."
      },
      {
        "type": "p",
        "text": "That makes trichomes a strong visual symbol of flower quality."
      },
      {
        "type": "p",
        "text": "The problem starts when the symbol gets turned into a complete score."
      },
      {
        "type": "h2",
        "text": "Frosty Does Not Mean “Automatically Better”"
      },
      {
        "type": "p",
        "text": "A frosty-looking bud may be visually impressive."
      },
      {
        "type": "p",
        "text": "It still has:"
      },
      {
        "type": "p",
        "text": "a cultivar;"
      },
      {
        "type": "p",
        "text": "a producer;"
      },
      {
        "type": "p",
        "text": "a cure;"
      },
      {
        "type": "p",
        "text": "a moisture level;"
      },
      {
        "type": "p",
        "text": "a storage history;"
      },
      {
        "type": "p",
        "text": "a legal THC/CBD label;"
      },
      {
        "type": "p",
        "text": "an aroma profile."
      },
      {
        "type": "p",
        "text": "The visible frost is one layer."
      },
      {
        "type": "p",
        "text": "It is not the whole product."
      },
      {
        "type": "h2",
        "text": "Trichome Coverage and Trichome Condition Are Different"
      },
      {
        "type": "p",
        "text": "Two buds can both look frosty but have been handled very differently."
      },
      {
        "type": "p",
        "text": "Trichomes can be damaged or lost through:"
      },
      {
        "type": "p",
        "text": "rough handling;"
      },
      {
        "type": "p",
        "text": "processing;"
      },
      {
        "type": "p",
        "text": "repeated movement;"
      },
      {
        "type": "p",
        "text": "time."
      },
      {
        "type": "p",
        "text": "A product can begin with strong trichome development and still lose some visible quality later."
      },
      {
        "type": "h2",
        "text": "A Photo Is Not a THC Test"
      },
      {
        "type": "p",
        "text": "Trichomes are associated with cannabinoid production."
      },
      {
        "type": "p",
        "text": "That does not mean visible trichome coverage tells you the exact THC value."
      },
      {
        "type": "p",
        "text": "Use the legal product information for the actual number."
      },
      {
        "type": "p",
        "text": "A close-up image cannot replace it."
      },
      {
        "type": "h2",
        "text": "Trichomes Also Connect to Aroma"
      },
      {
        "type": "p",
        "text": "Aromatic compounds, including terpenes, are associated with glandular structures on the plant."
      },
      {
        "type": "p",
        "text": "That helps explain why trichomes, aroma and freshness are often discussed together."
      },
      {
        "type": "p",
        "text": "It still does not mean the frostiest-looking bud must have the strongest smell."
      },
      {
        "type": "h2",
        "text": "Handling and Storage Keep Mattering"
      },
      {
        "type": "p",
        "text": "Heat, light, air, dryness and handling can influence the finished product after harvest."
      },
      {
        "type": "p",
        "text": "The plant may have been grown well, but quality preservation is still a post-harvest job."
      },
      {
        "type": "p",
        "text": "That is why the trichome discussion belongs next to drying, curing and storage."
      },
      {
        "type": "h2",
        "text": "Frosty Is Good Slang When You Know What It Means"
      },
      {
        "type": "p",
        "text": "“Frosty” is useful because it points toward something visible."
      },
      {
        "type": "p",
        "text": "Use it accurately:"
      },
      {
        "type": "p",
        "text": "“This flower shows visible trichome coverage.”"
      },
      {
        "type": "p",
        "text": "Do not stretch it into:"
      },
      {
        "type": "p",
        "text": "“This must be the strongest product.”"
      },
      {
        "type": "p",
        "text": "That second claim needs actual product information."
      }
    ],
    "faqs": [
      {
        "question": "What are cannabis trichomes?",
        "answer": "They are small resin-producing structures on the cannabis plant."
      },
      {
        "question": "Does frosty weed always have higher THC?",
        "answer": "No. Visible trichomes do not provide an exact THC measurement."
      },
      {
        "question": "Can trichomes be damaged?",
        "answer": "Yes. Handling and processing can damage or remove some trichomes."
      },
      {
        "question": "Do trichomes relate to cannabis aroma?",
        "answer": "Aromatic compounds including terpenes are associated with glandular structures on the plant, but aroma depends on the full product and its handling."
      },
      {
        "question": "How do I know the actual THC amount?",
        "answer": "Read the legal product information for the specific package."
      }
    ],
    "quickLinks": [
      {
        "label": "Bag Appeal",
        "href": "/resources/flower-guides/bag-appeal"
      },
      {
        "label": "Gas, Loud & Terpy",
        "href": "/resources/flower-guides/terpenes-gas-loud-aroma"
      },
      {
        "label": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness"
      },
      {
        "label": "THC vs Weed Quality",
        "href": "/resources/flower-guides/thc-vs-weed-quality"
      }
    ]
  },
  {
    "path": "/resources/flower-guides/terpenes-gas-loud-aroma",
    "slug": [
      "flower-guides",
      "terpenes-gas-loud-aroma"
    ],
    "eyebrow": "Flower guide",
    "sections": [],
    "title": "Gas, Loud, Terpy: Understanding Cannabis Aroma",
    "seoTitle": "Gas, Loud & Terpy Weed | Cannabis Aroma Explained",
    "metaDescription": "Learn what terpenes are and what weed slang such as gas, loud, skunky, fruity and terpy usually says about cannabis aroma.",
    "summary": "Learn what terpenes are and what weed slang such as gas, loud, skunky, fruity and terpy usually says about cannabis aroma.",
    "blocks": [
      {
        "type": "p",
        "text": "Cannabis aroma has its own dictionary."
      },
      {
        "type": "p",
        "text": "Gas."
      },
      {
        "type": "p",
        "text": "Loud."
      },
      {
        "type": "p",
        "text": "Skunky."
      },
      {
        "type": "p",
        "text": "Fruity."
      },
      {
        "type": "p",
        "text": "Earthy."
      },
      {
        "type": "p",
        "text": "Piney."
      },
      {
        "type": "p",
        "text": "Sweet."
      },
      {
        "type": "p",
        "text": "Terpy."
      },
      {
        "type": "p",
        "text": "Those words are useful because they help people describe smell quickly."
      },
      {
        "type": "p",
        "text": "They are not official quality grades."
      },
      {
        "type": "h2",
        "text": "What Are Terpenes?"
      },
      {
        "type": "p",
        "text": "Terpenes are aromatic compounds found in many plants, including cannabis."
      },
      {
        "type": "p",
        "text": "They contribute to smell and flavour."
      },
      {
        "type": "p",
        "text": "Different products can contain different terpene profiles and different amounts of those compounds."
      },
      {
        "type": "p",
        "text": "When a producer or product description actually provides terpene information, it can add context to the aroma."
      },
      {
        "type": "p",
        "text": "Do not guess an exact terpene profile just from a cultivar name."
      },
      {
        "type": "h2",
        "text": "What Does “Gas” Mean?"
      },
      {
        "type": "p",
        "text": "Gas usually describes a fuel-like, diesel-like or sharp chemical-leaning aroma."
      },
      {
        "type": "p",
        "text": "Some adults use the word more broadly for any strong, pungent cannabis smell."
      },
      {
        "type": "p",
        "text": "There is no official gas score."
      },
      {
        "type": "p",
        "text": "It is sensory slang."
      },
      {
        "type": "p",
        "text": "If someone says:"
      },
      {
        "type": "p",
        "text": "“That smells like gas.”"
      },
      {
        "type": "p",
        "text": "they are describing aroma, not reporting a laboratory grade."
      },
      {
        "type": "h2",
        "text": "What Does “Loud” Mean?"
      },
      {
        "type": "p",
        "text": "Loud usually means the aroma is pronounced."
      },
      {
        "type": "p",
        "text": "It is about intensity more than one exact scent family."
      },
      {
        "type": "p",
        "text": "A loud flower might smell:"
      },
      {
        "type": "p",
        "text": "gassy;"
      },
      {
        "type": "p",
        "text": "fruity;"
      },
      {
        "type": "p",
        "text": "skunky;"
      },
      {
        "type": "p",
        "text": "sweet;"
      },
      {
        "type": "p",
        "text": "earthy;"
      },
      {
        "type": "p",
        "text": "floral."
      },
      {
        "type": "p",
        "text": "The key idea is that the aroma stands out."
      },
      {
        "type": "h2",
        "text": "What Does “Terpy” Mean?"
      },
      {
        "type": "p",
        "text": "Terpy is slang suggesting a noticeable aroma or flavour profile associated with terpenes."
      },
      {
        "type": "p",
        "text": "People often use it as a compliment."
      },
      {
        "type": "p",
        "text": "That does not tell you which terpenes are present."
      },
      {
        "type": "p",
        "text": "It also does not prove one specific effect."
      },
      {
        "type": "p",
        "text": "If exact terpene information matters, use information actually provided for the product."
      },
      {
        "type": "h2",
        "text": "Common Aroma Words\nH3 — Citrus"
      },
      {
        "type": "p",
        "text": "Used for lemon, lime, orange or grapefruit-like impressions."
      },
      {
        "type": "h3",
        "text": "Fruity"
      },
      {
        "type": "p",
        "text": "A broad word covering berry, grape, tropical and other fruit-like impressions."
      },
      {
        "type": "h3",
        "text": "Skunky"
      },
      {
        "type": "p",
        "text": "A sharp, pungent descriptor deeply associated with cannabis culture."
      },
      {
        "type": "h3",
        "text": "Earthy"
      },
      {
        "type": "p",
        "text": "Used for soil-like, woody, herbal or musky notes."
      },
      {
        "type": "h3",
        "text": "Pine"
      },
      {
        "type": "p",
        "text": "Used for resinous, forest-like or needle-like aromas."
      },
      {
        "type": "h3",
        "text": "Sweet or creamy"
      },
      {
        "type": "p",
        "text": "Used for dessert-like, soft or sugary aromatic impressions."
      },
      {
        "type": "p",
        "text": "These are descriptions."
      },
      {
        "type": "p",
        "text": "They are not guaranteed effect claims."
      },
      {
        "type": "h2",
        "text": "Aroma Can Change After Harvest"
      },
      {
        "type": "p",
        "text": "Cannabis aroma is not frozen in time."
      },
      {
        "type": "p",
        "text": "Drying, curing, packaging, storage temperature, exposure to air and time can all influence volatile aromatic compounds."
      },
      {
        "type": "p",
        "text": "That is why two batches with the same familiar cultivar name may not smell identical."
      },
      {
        "type": "h2",
        "text": "Strong Smell Does Not Equal High THC"
      },
      {
        "type": "p",
        "text": "A very aromatic flower does not automatically have the highest THC number."
      },
      {
        "type": "p",
        "text": "A high-THC flower does not automatically have the strongest aroma."
      },
      {
        "type": "p",
        "text": "Those are different characteristics."
      },
      {
        "type": "p",
        "text": "Use the legal product information for THC."
      },
      {
        "type": "p",
        "text": "Use the sensory description for aroma."
      },
      {
        "type": "h2",
        "text": "Let the Slang Do One Job"
      },
      {
        "type": "p",
        "text": "Street-smart language works best when it stays in its lane."
      },
      {
        "type": "p",
        "text": "Gas = aroma."
      },
      {
        "type": "p",
        "text": "Loud = aroma intensity."
      },
      {
        "type": "p",
        "text": "Terpy = noticeable aroma/flavour character."
      },
      {
        "type": "p",
        "text": "Once the word is translated, the menu gets easier to read."
      }
    ],
    "faqs": [
      {
        "question": "What does gas mean in weed slang?",
        "answer": "Usually a fuel-like, diesel-like or sharp pungent aroma impression."
      },
      {
        "question": "What does loud mean?",
        "answer": "Usually that the cannabis aroma is pronounced or easy to notice."
      },
      {
        "question": "What does terpy mean?",
        "answer": "Slang for a noticeable aroma or flavour profile associated with terpenes."
      },
      {
        "question": "Does strong smell mean high THC?",
        "answer": "No. Aroma intensity and THC are different characteristics."
      },
      {
        "question": "Do terpene names guarantee effects?",
        "answer": "No. This guide uses terpene information to explain aroma language, not to promise effects."
      }
    ],
    "quickLinks": [
      {
        "label": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness"
      },
      {
        "label": "Frosty Weed & Trichomes",
        "href": "/resources/flower-guides/trichomes-frosty-weed"
      },
      {
        "label": "THC vs Weed Quality",
        "href": "/resources/flower-guides/thc-vs-weed-quality"
      },
      {
        "label": "Weed Slang Explained",
        "href": "/resources/cannabis-101/weed-slang-glossary"
      }
    ]
  },
  {
    "path": "/resources/flower-guides/drying-curing-freshness",
    "slug": [
      "flower-guides",
      "drying-curing-freshness"
    ],
    "eyebrow": "Flower guide",
    "sections": [],
    "title": "Drying, Curing and Freshness: Quality After Harvest",
    "seoTitle": "Drying, Curing & Cannabis Freshness | Kennedy Loud",
    "metaDescription": "Learn how drying, curing, moisture, packaging, storage and time can change the way cannabis flower feels and smells after harvest.",
    "summary": "Learn how drying, curing, moisture, packaging, storage and time can change the way cannabis flower feels and smells after harvest.",
    "blocks": [
      {
        "type": "p",
        "text": "Growing cannabis is only part of the flower story."
      },
      {
        "type": "p",
        "text": "Once the plant is harvested, the material still has to be dried, conditioned, packaged and stored."
      },
      {
        "type": "p",
        "text": "That post-harvest work can influence:"
      },
      {
        "type": "p",
        "text": "moisture;"
      },
      {
        "type": "p",
        "text": "texture;"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "how intact the flower remains;"
      },
      {
        "type": "p",
        "text": "how the product handles over time."
      },
      {
        "type": "p",
        "text": "Good growing can be weakened by poor handling after harvest."
      },
      {
        "type": "h2",
        "text": "Drying Reduces Moisture"
      },
      {
        "type": "p",
        "text": "Freshly harvested cannabis contains substantial moisture."
      },
      {
        "type": "p",
        "text": "Drying reduces that moisture so the flower can be processed and stored appropriately."
      },
      {
        "type": "p",
        "text": "The job is not simply:"
      },
      {
        "type": "p",
        "text": "“Make it dry.”"
      },
      {
        "type": "p",
        "text": "The job is controlled moisture reduction."
      },
      {
        "type": "p",
        "text": "Too fast, too hot or poorly managed post-harvest conditions can affect the finished product."
      },
      {
        "type": "h2",
        "text": "Curing Is Controlled Conditioning"
      },
      {
        "type": "p",
        "text": "Curing is a broad industry term for controlled conditioning after initial drying."
      },
      {
        "type": "p",
        "text": "Exact methods vary."
      },
      {
        "type": "p",
        "text": "There is no need to turn curing into magic."
      },
      {
        "type": "p",
        "text": "The useful point is that cannabis flower continues changing after harvest, and careful conditioning can help preserve desirable characteristics."
      },
      {
        "type": "h2",
        "text": "Too Dry Is a Real Quality Problem"
      },
      {
        "type": "p",
        "text": "Overly dry flower can:"
      },
      {
        "type": "p",
        "text": "become brittle;"
      },
      {
        "type": "p",
        "text": "crumble easily;"
      },
      {
        "type": "p",
        "text": "feel rougher to handle;"
      },
      {
        "type": "p",
        "text": "lose aromatic intensity faster."
      },
      {
        "type": "p",
        "text": "That does not mean every dry-feeling product is unsafe."
      },
      {
        "type": "p",
        "text": "It means moisture is a real quality characteristic."
      },
      {
        "type": "h2",
        "text": "Too Much Moisture Is Not the Goal"
      },
      {
        "type": "p",
        "text": "Freshness does not mean wetness."
      },
      {
        "type": "p",
        "text": "Excess moisture creates different storage and handling concerns."
      },
      {
        "type": "p",
        "text": "The right conversation is not:"
      },
      {
        "type": "p",
        "text": "wet vs dry"
      },
      {
        "type": "p",
        "text": "It is:"
      },
      {
        "type": "p",
        "text": "appropriate moisture management."
      },
      {
        "type": "h2",
        "text": "Aroma Can Fade"
      },
      {
        "type": "p",
        "text": "Terpenes and other aromatic compounds are volatile."
      },
      {
        "type": "p",
        "text": "That means heat, air, time and storage conditions matter."
      },
      {
        "type": "p",
        "text": "A product can begin with a strong aroma and lose some intensity later."
      },
      {
        "type": "p",
        "text": "That is why the aroma conversation belongs next to the freshness conversation."
      },
      {
        "type": "h2",
        "text": "Packaging and Storage Keep Matter"
      },
      {
        "type": "p",
        "text": "Once a product is packaged, time still passes."
      },
      {
        "type": "p",
        "text": "Heat, light, oxygen and repeated opening can influence the finished material."
      },
      {
        "type": "p",
        "text": "Adults should follow the storage guidance provided with the product and keep cannabis secured away from children and pets."
      },
      {
        "type": "h2",
        "text": "A Menu Photo Cannot Show Freshness"
      },
      {
        "type": "p",
        "text": "A photo can show:"
      },
      {
        "type": "p",
        "text": "colour;"
      },
      {
        "type": "p",
        "text": "shape;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "visible trichomes."
      },
      {
        "type": "p",
        "text": "It cannot reliably show:"
      },
      {
        "type": "p",
        "text": "moisture;"
      },
      {
        "type": "p",
        "text": "how brittle the flower feels;"
      },
      {
        "type": "p",
        "text": "how recently it was packaged;"
      },
      {
        "type": "p",
        "text": "the complete storage history."
      },
      {
        "type": "p",
        "text": "That is why bag appeal and freshness are separate questions."
      },
      {
        "type": "h2",
        "text": "“Sticky,” “Dry,” “Fresh” and “Smooth” Are Descriptions, Not Lab Grades"
      },
      {
        "type": "p",
        "text": "Cannabis culture has plenty of post-harvest language."
      },
      {
        "type": "p",
        "text": "Some of it is useful."
      },
      {
        "type": "p",
        "text": "The key is not to turn subjective descriptions into guaranteed product claims."
      },
      {
        "type": "p",
        "text": "If someone says flower feels dry, that is a physical observation."
      },
      {
        "type": "p",
        "text": "If they say it smells fresh, that is a sensory observation."
      },
      {
        "type": "p",
        "text": "Neither replaces the regulated product information."
      },
      {
        "type": "h2",
        "text": "Quality Is a Chain"
      },
      {
        "type": "p",
        "text": "A simple way to think about finished flower:"
      },
      {
        "type": "p",
        "text": "genetics → cultivation → harvest → drying → curing → packaging → storage"
      },
      {
        "type": "p",
        "text": "A weak point late in the chain can change the final product even when the early stages were strong."
      }
    ],
    "faqs": [
      {
        "question": "What is cannabis drying?",
        "answer": "It is the post-harvest process of reducing moisture in harvested cannabis."
      },
      {
        "question": "What is curing?",
        "answer": "Curing is a broad term for controlled post-drying conditioning. Exact methods vary."
      },
      {
        "question": "Can drying affect aroma?",
        "answer": "Yes. Post-harvest conditions can influence volatile aromatic compounds."
      },
      {
        "question": "Does fresh weed mean wet weed?",
        "answer": "No. Freshness and excessive moisture are not the same thing."
      },
      {
        "question": "Can a photo show freshness?",
        "answer": "Not reliably. Photos cannot measure moisture or show the full storage history."
      }
    ],
    "quickLinks": [
      {
        "label": "Gas, Loud & Terpy",
        "href": "/resources/flower-guides/terpenes-gas-loud-aroma"
      },
      {
        "label": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean"
      },
      {
        "label": "Bag Appeal",
        "href": "/resources/flower-guides/bag-appeal"
      },
      {
        "label": "BC Grown / Indoor / Hydro / Outdoor",
        "href": "/resources/flower-guides/bc-grown-indoor-hydro-outdoor"
      }
    ]
  },
  {
    "path": "/resources/flower-guides/smalls-vs-big-buds",
    "slug": [
      "flower-guides",
      "smalls-vs-big-buds"
    ],
    "eyebrow": "Flower guide",
    "sections": [],
    "title": "Smalls vs Big Buds: Is Bigger Automatically Better?",
    "seoTitle": "Smalls vs Big Buds | Does Weed Bud Size Matter?",
    "metaDescription": "Smalls and larger buds can come from the same plant or batch. Learn what bud size can tell you—and what it cannot.",
    "summary": "Smalls and larger buds can come from the same plant or batch. Learn what bud size can tell you—and what it cannot.",
    "blocks": [
      {
        "type": "p",
        "text": "Big buds get attention."
      },
      {
        "type": "p",
        "text": "They look good in photos."
      },
      {
        "type": "p",
        "text": "They show the flower structure clearly."
      },
      {
        "type": "p",
        "text": "Smalls are easier to dismiss because the pieces are smaller."
      },
      {
        "type": "p",
        "text": "That does not make bud size a complete quality grade."
      },
      {
        "type": "h2",
        "text": "Why Bud Sizes Differ"
      },
      {
        "type": "p",
        "text": "A cannabis plant does not produce identical flowers in every position."
      },
      {
        "type": "p",
        "text": "Bud size can be influenced by:"
      },
      {
        "type": "p",
        "text": "genetics;"
      },
      {
        "type": "p",
        "text": "plant structure;"
      },
      {
        "type": "p",
        "text": "position on the plant;"
      },
      {
        "type": "p",
        "text": "light exposure;"
      },
      {
        "type": "p",
        "text": "cultivation conditions;"
      },
      {
        "type": "p",
        "text": "trimming;"
      },
      {
        "type": "p",
        "text": "handling;"
      },
      {
        "type": "p",
        "text": "packaging."
      },
      {
        "type": "p",
        "text": "That means a package of smaller buds is not automatically a different cultivar or lower-potency product."
      },
      {
        "type": "h2",
        "text": "Smalls Can Come From the Same Batch"
      },
      {
        "type": "p",
        "text": "Smaller buds can come from the same plant or batch as larger flower."
      },
      {
        "type": "p",
        "text": "That matters because people often assume:"
      },
      {
        "type": "p",
        "text": "small = weaker."
      },
      {
        "type": "p",
        "text": "The size alone does not prove that."
      },
      {
        "type": "p",
        "text": "Use the actual product information for the actual product."
      },
      {
        "type": "h2",
        "text": "Why Large Buds Have More Bag Appeal"
      },
      {
        "type": "p",
        "text": "Large buds often preserve a more complete visible structure."
      },
      {
        "type": "p",
        "text": "That makes them visually impressive."
      },
      {
        "type": "p",
        "text": "They can show:"
      },
      {
        "type": "p",
        "text": "shape;"
      },
      {
        "type": "p",
        "text": "calyx structure;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "trichome coverage;"
      },
      {
        "type": "p",
        "text": "colour."
      },
      {
        "type": "p",
        "text": "That visual advantage is real."
      },
      {
        "type": "p",
        "text": "It is still a presentation advantage."
      },
      {
        "type": "p",
        "text": "It does not automatically prove better cure, stronger aroma or higher THC."
      },
      {
        "type": "h2",
        "text": "Small Buds Can Still Be Frosty"
      },
      {
        "type": "p",
        "text": "Bud size and trichome coverage are different characteristics."
      },
      {
        "type": "p",
        "text": "A smaller bud can show visible resin."
      },
      {
        "type": "p",
        "text": "A large bud can have less dramatic visible frost."
      },
      {
        "type": "p",
        "text": "Those observations can coexist."
      },
      {
        "type": "h2",
        "text": "A Large Bud Can Still Be Too Dry"
      },
      {
        "type": "p",
        "text": "Size does not tell you moisture."
      },
      {
        "type": "p",
        "text": "A large photogenic bud can still be brittle."
      },
      {
        "type": "p",
        "text": "A smaller bud can still be well preserved."
      },
      {
        "type": "p",
        "text": "That is why bud size belongs next to the drying/curing discussion, not above it."
      },
      {
        "type": "h2",
        "text": "Price Positioning Is a Separate Question"
      },
      {
        "type": "p",
        "text": "Some menus position smalls differently."
      },
      {
        "type": "p",
        "text": "That can affect value."
      },
      {
        "type": "p",
        "text": "Do not hard-code a pricing rule into an educational guide."
      },
      {
        "type": "p",
        "text": "Current price and package information belong on the current product/category pages."
      },
      {
        "type": "p",
        "text": "The resource should explain size."
      },
      {
        "type": "p",
        "text": "The live menu should explain today's price."
      },
      {
        "type": "h2",
        "text": "Use Size for What It Actually Tells You"
      },
      {
        "type": "p",
        "text": "Bud size can tell you something about presentation."
      },
      {
        "type": "p",
        "text": "It may tell you something about how the batch was sorted."
      },
      {
        "type": "p",
        "text": "It does not directly tell you:"
      },
      {
        "type": "p",
        "text": "exact THC;"
      },
      {
        "type": "p",
        "text": "exact terpene content;"
      },
      {
        "type": "p",
        "text": "freshness;"
      },
      {
        "type": "p",
        "text": "cure quality;"
      },
      {
        "type": "p",
        "text": "whether you will prefer the product."
      },
      {
        "type": "p",
        "text": "Keep the clue in its lane."
      }
    ],
    "faqs": [
      {
        "question": "Are small buds weaker?",
        "answer": "Bud size alone does not prove one potency level."
      },
      {
        "question": "Can smalls come from the same plant as larger buds?",
        "answer": "Yes. They can come from the same plant, cultivar or batch."
      },
      {
        "question": "Are big buds always premium?",
        "answer": "No. Large size can improve presentation but does not guarantee every quality characteristic."
      },
      {
        "question": "Can small buds still be frosty?",
        "answer": "Yes. Bud size and visible trichome coverage are different characteristics."
      },
      {
        "question": "Should this guide include current smalls prices?",
        "answer": "No. Current price and package information belong on the current menu/product pages."
      }
    ],
    "quickLinks": [
      {
        "label": "Bag Appeal",
        "href": "/resources/flower-guides/bag-appeal"
      },
      {
        "label": "Frosty Weed & Trichomes",
        "href": "/resources/flower-guides/trichomes-frosty-weed"
      },
      {
        "label": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean"
      },
      {
        "label": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness"
      }
    ]
  },
  {
    "path": "/resources/flower-guides/bc-grown-indoor-hydro-outdoor",
    "slug": [
      "flower-guides",
      "bc-grown-indoor-hydro-outdoor"
    ],
    "eyebrow": "Flower guide",
    "sections": [],
    "title": "BC Grown, Indoor, Hydro, Greenhouse and Outdoor: Different Labels, Different Jobs",
    "seoTitle": "BC Grown vs Indoor, Hydro, Greenhouse & Outdoor Weed",
    "metaDescription": "BC grown describes origin; indoor, outdoor and greenhouse describe environments; hydroponic describes a method. Learn the difference.",
    "summary": "BC grown describes origin; indoor, outdoor and greenhouse describe environments; hydroponic describes a method. Learn the difference.",
    "blocks": [
      {
        "type": "p",
        "text": "Cannabis growing terms get mixed together because they often appear in the same sentence."
      },
      {
        "type": "p",
        "text": "They are not always answering the same question."
      },
      {
        "type": "p",
        "text": "BC grown = where it was grown."
      },
      {
        "type": "p",
        "text": "Indoor / outdoor / greenhouse = growing environment."
      },
      {
        "type": "p",
        "text": "Hydroponic = cultivation method."
      },
      {
        "type": "p",
        "text": "One crop can fit more than one label at the same time."
      },
      {
        "type": "h2",
        "text": "BC Grown Is About Origin"
      },
      {
        "type": "p",
        "text": "BC-grown cannabis means cannabis grown in British Columbia."
      },
      {
        "type": "p",
        "text": "That tells you location."
      },
      {
        "type": "p",
        "text": "It does not automatically tell you:"
      },
      {
        "type": "p",
        "text": "indoor or outdoor;"
      },
      {
        "type": "p",
        "text": "hydroponic or soil-based;"
      },
      {
        "type": "p",
        "text": "small scale or large scale;"
      },
      {
        "type": "p",
        "text": "THC level;"
      },
      {
        "type": "p",
        "text": "flower tier;"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "cure."
      },
      {
        "type": "p",
        "text": "British Columbia has a strong cannabis-growing reputation."
      },
      {
        "type": "p",
        "text": "Origin is still only one part of the product story."
      },
      {
        "type": "h2",
        "text": "Indoor Describes the Environment"
      },
      {
        "type": "p",
        "text": "Indoor cultivation happens inside a controlled building."
      },
      {
        "type": "p",
        "text": "Growers can manage:"
      },
      {
        "type": "p",
        "text": "light;"
      },
      {
        "type": "p",
        "text": "temperature;"
      },
      {
        "type": "p",
        "text": "humidity;"
      },
      {
        "type": "p",
        "text": "airflow;"
      },
      {
        "type": "p",
        "text": "other environmental conditions."
      },
      {
        "type": "p",
        "text": "That control can support consistency."
      },
      {
        "type": "p",
        "text": "It does not guarantee premium flower."
      },
      {
        "type": "p",
        "text": "Genetics, plant health, harvest timing and post-harvest handling still matter."
      },
      {
        "type": "h2",
        "text": "Outdoor Uses Natural Conditions"
      },
      {
        "type": "p",
        "text": "Outdoor cultivation uses natural sunlight and outdoor environmental conditions."
      },
      {
        "type": "p",
        "text": "Weather, season and local climate play larger roles."
      },
      {
        "type": "p",
        "text": "Outdoor does not automatically mean low quality."
      },
      {
        "type": "p",
        "text": "It simply describes the environment."
      },
      {
        "type": "h2",
        "text": "Greenhouse Uses a Protected Structure"
      },
      {
        "type": "p",
        "text": "Greenhouse cultivation uses a protected structure while usually making use of natural light."
      },
      {
        "type": "p",
        "text": "Operations may also use supplemental lighting or environmental controls."
      },
      {
        "type": "p",
        "text": "That makes greenhouse a broad category, not one exact recipe."
      },
      {
        "type": "h2",
        "text": "Hydroponic Describes How Roots Receive Water and Nutrients"
      },
      {
        "type": "p",
        "text": "Hydroponic cultivation generally uses managed water/nutrient delivery rather than traditional field soil."
      },
      {
        "type": "p",
        "text": "Hydro can be used indoors."
      },
      {
        "type": "p",
        "text": "Hydro can be used in greenhouse systems."
      },
      {
        "type": "p",
        "text": "That is why:"
      },
      {
        "type": "p",
        "text": "BC grown vs hydro"
      },
      {
        "type": "p",
        "text": "is not a clean comparison."
      },
      {
        "type": "p",
        "text": "A BC-grown crop can also be hydroponic."
      },
      {
        "type": "h2",
        "text": "Soil and Other Substrates Can Be Used Indoors Too"
      },
      {
        "type": "p",
        "text": "Indoor does not automatically mean hydro."
      },
      {
        "type": "p",
        "text": "Growers can use:"
      },
      {
        "type": "p",
        "text": "soil;"
      },
      {
        "type": "p",
        "text": "soilless substrates;"
      },
      {
        "type": "p",
        "text": "hydroponic systems;"
      },
      {
        "type": "p",
        "text": "other managed media."
      },
      {
        "type": "p",
        "text": "The actual setup can be more complicated than one menu word."
      },
      {
        "type": "h2",
        "text": "No Method Automatically Wins"
      },
      {
        "type": "p",
        "text": "A well-managed outdoor crop can be excellent."
      },
      {
        "type": "p",
        "text": "A poorly handled indoor crop can disappoint."
      },
      {
        "type": "p",
        "text": "Hydroponics can support strong cultivation, but the method alone does not guarantee aroma, cure or freshness."
      },
      {
        "type": "p",
        "text": "The final product comes from the whole chain."
      },
      {
        "type": "h2",
        "text": "Why the Growing Method Still Matters"
      },
      {
        "type": "p",
        "text": "Cultivation context can influence:"
      },
      {
        "type": "p",
        "text": "environmental control;"
      },
      {
        "type": "p",
        "text": "seasonal exposure;"
      },
      {
        "type": "p",
        "text": "consistency;"
      },
      {
        "type": "p",
        "text": "production scale;"
      },
      {
        "type": "p",
        "text": "plant expression."
      },
      {
        "type": "p",
        "text": "It is useful information."
      },
      {
        "type": "p",
        "text": "It just should not be treated as a shortcut for “better” or “worse.”"
      }
    ],
    "faqs": [
      {
        "question": "Is BC bud always indoor?",
        "answer": "No. BC grown describes origin, not the growing environment."
      },
      {
        "question": "Can hydroponic weed be grown indoors?",
        "answer": "Yes. Hydroponic describes a cultivation method and can be used indoors."
      },
      {
        "question": "Is outdoor weed automatically lower quality?",
        "answer": "No. Outdoor describes the environment, not a universal quality score."
      },
      {
        "question": "Is greenhouse the same as indoor?",
        "answer": "No. Greenhouses are protected structures that generally use natural light, while indoor cultivation takes place inside controlled buildings."
      },
      {
        "question": "What matters besides growing method?",
        "answer": "Genetics, plant health, harvest timing, drying, curing, storage and the actual product information all matter."
      }
    ],
    "quickLinks": [
      {
        "label": "Craft vs Commercial Cannabis",
        "href": "/resources/flower-guides/craft-vs-commercial-cannabis"
      },
      {
        "label": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness"
      },
      {
        "label": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean"
      },
      {
        "label": "Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-tier-guide"
      }
    ]
  },
  {
    "path": "/resources/flower-guides/craft-vs-commercial-cannabis",
    "slug": [
      "flower-guides",
      "craft-vs-commercial-cannabis"
    ],
    "eyebrow": "Flower guide",
    "sections": [],
    "title": "Craft vs Commercial Cannabis: Scale Is Not the Whole Story",
    "seoTitle": "Craft vs Commercial Cannabis | Kennedy Loud",
    "metaDescription": "Craft and commercial can describe scale, process and branding, but neither is a universal quality grade. Learn what to compare instead.",
    "summary": "Craft and commercial can describe scale, process and branding, but neither is a universal quality grade. Learn what to compare instead.",
    "blocks": [
      {
        "type": "p",
        "text": "Craft sounds premium."
      },
      {
        "type": "p",
        "text": "Commercial sounds big."
      },
      {
        "type": "p",
        "text": "Those impressions are understandable."
      },
      {
        "type": "p",
        "text": "They are not complete definitions of quality."
      },
      {
        "type": "p",
        "text": "In cannabis, the words can describe:"
      },
      {
        "type": "p",
        "text": "production scale;"
      },
      {
        "type": "p",
        "text": "process;"
      },
      {
        "type": "p",
        "text": "branding;"
      },
      {
        "type": "p",
        "text": "batch size;"
      },
      {
        "type": "p",
        "text": "producer identity;"
      },
      {
        "type": "p",
        "text": "how hands-on the operation wants to present itself."
      },
      {
        "type": "p",
        "text": "Neither term guarantees the finished flower."
      },
      {
        "type": "h2",
        "text": "What People Usually Mean by Craft Cannabis"
      },
      {
        "type": "p",
        "text": "Craft often suggests:"
      },
      {
        "type": "p",
        "text": "smaller-scale production;"
      },
      {
        "type": "p",
        "text": "tighter batch focus;"
      },
      {
        "type": "p",
        "text": "hands-on cultivation;"
      },
      {
        "type": "p",
        "text": "producer identity built around growing detail."
      },
      {
        "type": "p",
        "text": "The word is broad."
      },
      {
        "type": "p",
        "text": "It should not automatically be treated as one specific licence class unless that is actually verified for the producer."
      },
      {
        "type": "p",
        "text": "Marketing language and regulatory licence classes are not the same thing."
      },
      {
        "type": "h2",
        "text": "What People Usually Mean by Commercial Cannabis"
      },
      {
        "type": "p",
        "text": "Commercial often points toward larger-scale production and distribution."
      },
      {
        "type": "p",
        "text": "Larger operations may emphasize:"
      },
      {
        "type": "p",
        "text": "repeatable process;"
      },
      {
        "type": "p",
        "text": "standardization;"
      },
      {
        "type": "p",
        "text": "consistency;"
      },
      {
        "type": "p",
        "text": "scale."
      },
      {
        "type": "p",
        "text": "That does not automatically mean lower quality."
      },
      {
        "type": "p",
        "text": "Large-scale production can have strengths."
      },
      {
        "type": "p",
        "text": "It can also have trade-offs."
      },
      {
        "type": "p",
        "text": "The product still has to stand on its own."
      },
      {
        "type": "h2",
        "text": "Small Is Not Automatically Better"
      },
      {
        "type": "p",
        "text": "A small producer can make excellent flower."
      },
      {
        "type": "p",
        "text": "A small producer can also make an inconsistent batch."
      },
      {
        "type": "p",
        "text": "A large producer can make average flower."
      },
      {
        "type": "p",
        "text": "A large producer can also make carefully finished, consistent flower."
      },
      {
        "type": "p",
        "text": "Scale alone does not settle the comparison."
      },
      {
        "type": "h2",
        "text": "Craft Is Not the Same Thing as Premium or Exotic"
      },
      {
        "type": "p",
        "text": "Craft describes production/branding context."
      },
      {
        "type": "p",
        "text": "Premium and Exotic are retail positioning terms."
      },
      {
        "type": "p",
        "text": "They can overlap."
      },
      {
        "type": "p",
        "text": "They are not synonyms."
      },
      {
        "type": "p",
        "text": "A craft-labelled product does not automatically belong in Kennedy Loud's Exotic Weed owner."
      },
      {
        "type": "p",
        "text": "An Exotic Weed product is not automatically craft."
      },
      {
        "type": "h2",
        "text": "What to Compare at Product Level"
      },
      {
        "type": "p",
        "text": "Instead of stopping at craft vs commercial, compare:"
      },
      {
        "type": "p",
        "text": "exact product;"
      },
      {
        "type": "p",
        "text": "producer;"
      },
      {
        "type": "p",
        "text": "cultivar;"
      },
      {
        "type": "p",
        "text": "legal THC/CBD information;"
      },
      {
        "type": "p",
        "text": "aroma description where provided;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "structure;"
      },
      {
        "type": "p",
        "text": "visible trichomes;"
      },
      {
        "type": "p",
        "text": "moisture/freshness clues;"
      },
      {
        "type": "p",
        "text": "current tier/listing context."
      },
      {
        "type": "p",
        "text": "Those are more specific."
      },
      {
        "type": "h2",
        "text": "Why Producer Context Still Matters"
      },
      {
        "type": "p",
        "text": "Adults may care about:"
      },
      {
        "type": "p",
        "text": "who grew the product;"
      },
      {
        "type": "p",
        "text": "production scale;"
      },
      {
        "type": "p",
        "text": "batch approach;"
      },
      {
        "type": "p",
        "text": "producer reputation;"
      },
      {
        "type": "p",
        "text": "how consistently the product is presented."
      },
      {
        "type": "p",
        "text": "That is useful context."
      },
      {
        "type": "p",
        "text": "The mistake is turning the broad word “craft” into a guarantee."
      }
    ],
    "faqs": [
      {
        "question": "Does craft cannabis mean micro-licensed cannabis?",
        "answer": "Not necessarily. Craft is also used broadly in retail and marketing language."
      },
      {
        "question": "Is commercial cannabis lower quality?",
        "answer": "Not automatically. Scale is not a complete quality grade."
      },
      {
        "question": "Is craft the same as Premium or Exotic Weed?",
        "answer": "No. Craft describes production context; Premium and Exotic are retail positioning terms."
      },
      {
        "question": "What should I compare besides producer size?",
        "answer": "Use the legal product information and actual flower characteristics where available."
      },
      {
        "question": "Can large producers make consistent flower?",
        "answer": "Yes. Larger operations may use standardized processes designed for consistency."
      }
    ],
    "quickLinks": [
      {
        "label": "BC Grown / Indoor / Hydro / Outdoor",
        "href": "/resources/flower-guides/bc-grown-indoor-hydro-outdoor"
      },
      {
        "label": "Weed & Flower Quality Guide",
        "href": "/resources/weed-flower-tier-guide"
      },
      {
        "label": "Drying, Curing & Freshness",
        "href": "/resources/flower-guides/drying-curing-freshness"
      },
      {
        "label": "What Does Good Weed Mean?",
        "href": "/resources/flower-guides/what-does-good-weed-mean"
      }
    ]
  },
  {
    "path": "/resources/cannabis-101/indica-sativa-hybrid",
    "slug": [
      "cannabis-101",
      "indica-sativa-hybrid"
    ],
    "eyebrow": "Cannabis 101",
    "sections": [],
    "title": "Indica vs Sativa vs Hybrid: Useful Labels, Imperfect Shortcuts",
    "seoTitle": "Indica vs Sativa vs Hybrid | Kennedy Loud Cannabis",
    "metaDescription": "Indica, Sativa and Hybrid are familiar cannabis labels, but modern genetics are heavily crossed. Learn what the terms can and cannot tell you.",
    "summary": "Indica, Sativa and Hybrid are familiar cannabis labels, but modern genetics are heavily crossed. Learn what the terms can and cannot tell you.",
    "blocks": [
      {
        "type": "p",
        "text": "Indica."
      },
      {
        "type": "p",
        "text": "Sativa."
      },
      {
        "type": "p",
        "text": "Hybrid."
      },
      {
        "type": "p",
        "text": "These are some of the first words many adults learn around cannabis."
      },
      {
        "type": "p",
        "text": "They are also some of the easiest words to oversimplify."
      },
      {
        "type": "p",
        "text": "The classic shortcut goes:"
      },
      {
        "type": "p",
        "text": "Indica = relaxing Sativa = energetic Hybrid = somewhere in the middle"
      },
      {
        "type": "p",
        "text": "That story is easy to remember."
      },
      {
        "type": "p",
        "text": "Modern cannabis is more complicated."
      },
      {
        "type": "h2",
        "text": "Why the Labels Exist"
      },
      {
        "type": "p",
        "text": "Cannabis plants have historically been described using botanical and geographic differences associated with terms including sativa and indica."
      },
      {
        "type": "p",
        "text": "Over generations of breeding, modern commercial cannabis has been crossed repeatedly."
      },
      {
        "type": "p",
        "text": "That means many products on today's market have mixed ancestry."
      },
      {
        "type": "p",
        "text": "The labels remain useful because people recognize them."
      },
      {
        "type": "p",
        "text": "They should not be treated as perfectly separated scientific boxes."
      },
      {
        "type": "h2",
        "text": "Why the Old Effect Rule Is Too Simple"
      },
      {
        "type": "p",
        "text": "Individual response to cannabis varies."
      },
      {
        "type": "p",
        "text": "Products can differ in:"
      },
      {
        "type": "p",
        "text": "THC;"
      },
      {
        "type": "p",
        "text": "CBD;"
      },
      {
        "type": "p",
        "text": "other cannabinoids;"
      },
      {
        "type": "p",
        "text": "terpene profiles;"
      },
      {
        "type": "p",
        "text": "dose;"
      },
      {
        "type": "p",
        "text": "format;"
      },
      {
        "type": "p",
        "text": "individual sensitivity."
      },
      {
        "type": "p",
        "text": "That makes one-word effect promises unreliable."
      },
      {
        "type": "p",
        "text": "An educational page can explain that people commonly associate Indica and Sativa with different experiences."
      },
      {
        "type": "p",
        "text": "It should not promise that every product will behave that way for every adult."
      },
      {
        "type": "h2",
        "text": "Hybrid Is Normal, Not a Weak Middle Category"
      },
      {
        "type": "p",
        "text": "Hybrid sometimes sounds like the vague option."
      },
      {
        "type": "p",
        "text": "In reality, hybridization is normal in modern cannabis breeding."
      },
      {
        "type": "p",
        "text": "A Hybrid label can reflect mixed ancestry or a product that does not fit a simple Indica/Sativa story."
      },
      {
        "type": "p",
        "text": "That does not make it less distinctive."
      },
      {
        "type": "h2",
        "text": "Read the Label Beside the Category"
      },
      {
        "type": "p",
        "text": "When available, compare:"
      },
      {
        "type": "p",
        "text": "exact product name;"
      },
      {
        "type": "p",
        "text": "producer;"
      },
      {
        "type": "p",
        "text": "cultivar;"
      },
      {
        "type": "p",
        "text": "THC and CBD;"
      },
      {
        "type": "p",
        "text": "format;"
      },
      {
        "type": "p",
        "text": "any aroma or terpene information actually provided."
      },
      {
        "type": "p",
        "text": "The Indica/Sativa/Hybrid label then becomes one piece of the product identity instead of the whole prediction."
      },
      {
        "type": "h2",
        "text": "Use the Label as a Starting Lane"
      },
      {
        "type": "p",
        "text": "A better question is:"
      },
      {
        "type": "p",
        "text": "“What does the producer mean by this classification?”"
      },
      {
        "type": "p",
        "text": "instead of:"
      },
      {
        "type": "p",
        "text": "“Will this definitely make me feel one specific way?”"
      },
      {
        "type": "p",
        "text": "That keeps the familiar menu language without pretending it can predict every person's response."
      }
    ],
    "faqs": [
      {
        "question": "Are Indica and Sativa exact modern genetic categories?",
        "answer": "Not in a simple retail sense. The labels remain common, but extensive crossbreeding makes the categories imperfect."
      },
      {
        "question": "Is most modern cannabis hybridized?",
        "answer": "Mixed ancestry is common in modern commercial cannabis because of extensive breeding."
      },
      {
        "question": "Does Indica always mean sleepy?",
        "answer": "No. That is a common cultural association, not a guaranteed effect."
      },
      {
        "question": "Does Sativa always mean energetic?",
        "answer": "No. Product chemistry and individual response vary."
      },
      {
        "question": "What should I read besides Indica/Sativa/Hybrid?",
        "answer": "Use the legal label, producer, cultivar, THC/CBD and any other product information actually provided."
      }
    ],
    "quickLinks": [
      {
        "label": "Cannabis 101",
        "href": "/resources/cannabis-101"
      },
      {
        "label": "Strain vs Cultivar",
        "href": "/resources/cannabis-101/strain-vs-cultivar"
      },
      {
        "label": "Landrace vs Hybrid",
        "href": "/resources/cannabis-101/landrace-vs-hybrid"
      },
      {
        "label": "THC vs Weed Quality",
        "href": "/resources/flower-guides/thc-vs-weed-quality"
      }
    ]
  },
  {
    "path": "/resources/cannabis-101/strain-vs-cultivar",
    "slug": [
      "cannabis-101",
      "strain-vs-cultivar"
    ],
    "eyebrow": "Cannabis 101",
    "sections": [],
    "title": "Strain vs Cultivar: Why the Name Needs Context",
    "seoTitle": "Strain vs Cultivar | Cannabis Names Explained",
    "metaDescription": "Strain is common cannabis language; cultivar is a horticultural term. Learn why a familiar name does not guarantee identical genetics.",
    "summary": "Strain is common cannabis language; cultivar is a horticultural term. Learn why a familiar name does not guarantee identical genetics.",
    "blocks": [
      {
        "type": "p",
        "text": "Cannabis shoppers say “strain” all the time."
      },
      {
        "type": "p",
        "text": "Growers, breeders and horticulture writers may prefer “cultivar.”"
      },
      {
        "type": "p",
        "text": "Both words can point toward the named type of cannabis being discussed."
      },
      {
        "type": "p",
        "text": "The bigger lesson is this:"
      },
      {
        "type": "p",
        "text": "a familiar name is useful, but it is not a genetic barcode."
      },
      {
        "type": "h2",
        "text": "“Strain” Is the Everyday Cannabis Word"
      },
      {
        "type": "p",
        "text": "In cannabis culture, strain usually means a named line or familiar product identity."
      },
      {
        "type": "p",
        "text": "The word is deeply established."
      },
      {
        "type": "p",
        "text": "People understand it."
      },
      {
        "type": "p",
        "text": "There is no need to correct normal adult language just to sound technical."
      },
      {
        "type": "h2",
        "text": "“Cultivar” Is the Horticultural Word"
      },
      {
        "type": "p",
        "text": "Cultivar is short for “cultivated variety.”"
      },
      {
        "type": "p",
        "text": "It is used in horticulture for plant lines selected and maintained for particular characteristics."
      },
      {
        "type": "p",
        "text": "In cannabis education, the term can be useful because it reminds us that these are cultivated plant lines."
      },
      {
        "type": "h2",
        "text": "Why the Same Name Does Not Guarantee the Same Product Everywhere"
      },
      {
        "type": "p",
        "text": "Cannabis naming is messy."
      },
      {
        "type": "p",
        "text": "Different producers may work with:"
      },
      {
        "type": "p",
        "text": "different cuts;"
      },
      {
        "type": "p",
        "text": "different breeding lines;"
      },
      {
        "type": "p",
        "text": "different selections;"
      },
      {
        "type": "p",
        "text": "different cultivation conditions."
      },
      {
        "type": "p",
        "text": "That means similarly named products can differ in:"
      },
      {
        "type": "p",
        "text": "appearance;"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "labelled chemistry;"
      },
      {
        "type": "p",
        "text": "structure;"
      },
      {
        "type": "p",
        "text": "finished quality."
      },
      {
        "type": "p",
        "text": "The name helps identify the product."
      },
      {
        "type": "p",
        "text": "It does not guarantee every version will be identical."
      },
      {
        "type": "h2",
        "text": "Producer and Process Matter"
      },
      {
        "type": "p",
        "text": "A cultivar is expressed through a real production process."
      },
      {
        "type": "p",
        "text": "The finished flower is influenced by:"
      },
      {
        "type": "p",
        "text": "genetics;"
      },
      {
        "type": "p",
        "text": "cultivation environment;"
      },
      {
        "type": "p",
        "text": "plant health;"
      },
      {
        "type": "p",
        "text": "harvest timing;"
      },
      {
        "type": "p",
        "text": "drying;"
      },
      {
        "type": "p",
        "text": "curing;"
      },
      {
        "type": "p",
        "text": "storage."
      },
      {
        "type": "p",
        "text": "The name is the beginning of the story, not the end."
      },
      {
        "type": "h2",
        "text": "Which Word Should Kennedy Loud Use?"
      },
      {
        "type": "p",
        "text": "Both are fine in the right context."
      },
      {
        "type": "p",
        "text": "Use strain when speaking normal cannabis language."
      },
      {
        "type": "p",
        "text": "Use cultivar when a more horticultural explanation is useful."
      },
      {
        "type": "p",
        "text": "The site does not need to police vocabulary."
      },
      {
        "type": "p",
        "text": "It should help adults understand what the word can and cannot tell them."
      },
      {
        "type": "h2",
        "text": "Do Not Use a Name as an Effect Promise"
      },
      {
        "type": "p",
        "text": "A famous strain/cultivar name does not guarantee one exact experience for every person."
      },
      {
        "type": "p",
        "text": "Use the product's actual information."
      },
      {
        "type": "p",
        "text": "Do not turn the name into a medical or effect claim."
      }
    ],
    "faqs": [
      {
        "question": "Is strain the wrong word for cannabis?",
        "answer": "No. It is common cannabis language and widely understood."
      },
      {
        "question": "What does cultivar mean?",
        "answer": "Cultivar is a horticultural term for a cultivated plant variety."
      },
      {
        "question": "Does the same strain name mean identical genetics everywhere?",
        "answer": "Not necessarily. Commercial naming and producer lines can vary."
      },
      {
        "question": "Can two producers grow the same named cultivar differently?",
        "answer": "Yes. Growing and post-harvest conditions influence the finished product."
      },
      {
        "question": "Should a cultivar name be used to guarantee effects?",
        "answer": "No. The name alone should not be treated as an effect guarantee."
      }
    ],
    "quickLinks": [
      {
        "label": "Indica vs Sativa vs Hybrid",
        "href": "/resources/cannabis-101/indica-sativa-hybrid"
      },
      {
        "label": "Landrace vs Hybrid",
        "href": "/resources/cannabis-101/landrace-vs-hybrid"
      },
      {
        "label": "Cannabis 101",
        "href": "/resources/cannabis-101"
      },
      {
        "label": "Weed Slang Explained",
        "href": "/resources/cannabis-101/weed-slang-glossary"
      }
    ]
  },
  {
    "path": "/resources/cannabis-101/landrace-vs-hybrid",
    "slug": [
      "cannabis-101",
      "landrace-vs-hybrid"
    ],
    "eyebrow": "Cannabis 101",
    "sections": [],
    "title": "Landrace vs Hybrid: A Simple Map of Cannabis Genetics",
    "seoTitle": "Landrace vs Hybrid Cannabis | Genetics Explained",
    "metaDescription": "Learn what landrace and hybrid mean in cannabis genetics and why modern commercial cannabis has a complicated breeding history.",
    "summary": "Learn what landrace and hybrid mean in cannabis genetics and why modern commercial cannabis has a complicated breeding history.",
    "blocks": [
      {
        "type": "p",
        "text": "Cannabis genetics are often explained like a family tree."
      },
      {
        "type": "p",
        "text": "Landrace sits closer to the old regional roots of that story."
      },
      {
        "type": "p",
        "text": "Hybrid describes the crossing and selection that shaped much of modern commercial cannabis."
      },
      {
        "type": "p",
        "text": "Both words are useful."
      },
      {
        "type": "p",
        "text": "Neither is a quality grade."
      },
      {
        "type": "h2",
        "text": "What “Landrace” Usually Means"
      },
      {
        "type": "p",
        "text": "Landrace is generally used for cannabis populations associated with long-term adaptation to a particular geographic region before modern commercial breeding mixed many lineages together."
      },
      {
        "type": "p",
        "text": "The word points toward:"
      },
      {
        "type": "p",
        "text": "geographic history;"
      },
      {
        "type": "p",
        "text": "regional adaptation;"
      },
      {
        "type": "p",
        "text": "older local populations."
      },
      {
        "type": "p",
        "text": "It does not mean every plant from that region is genetically identical."
      },
      {
        "type": "p",
        "text": "It also does not mean the plant was untouched by people."
      },
      {
        "type": "h2",
        "text": "What “Hybrid” Means"
      },
      {
        "type": "p",
        "text": "A hybrid is produced by crossing genetic lines."
      },
      {
        "type": "p",
        "text": "Breeders may cross and select plants to emphasize traits such as:"
      },
      {
        "type": "p",
        "text": "structure;"
      },
      {
        "type": "p",
        "text": "flowering time;"
      },
      {
        "type": "p",
        "text": "aroma;"
      },
      {
        "type": "p",
        "text": "cannabinoid profile;"
      },
      {
        "type": "p",
        "text": "yield;"
      },
      {
        "type": "p",
        "text": "resilience;"
      },
      {
        "type": "p",
        "text": "visual characteristics."
      },
      {
        "type": "p",
        "text": "The resulting line may be selected and crossed again."
      },
      {
        "type": "p",
        "text": "Over time, the family tree gets complicated."
      },
      {
        "type": "h2",
        "text": "Why Modern Cannabis Has So Much Mixed Ancestry"
      },
      {
        "type": "p",
        "text": "Commercial cannabis breeding has been active for decades."
      },
      {
        "type": "p",
        "text": "That history helps explain why today's Indica/Sativa/Hybrid labels do not fit into three perfectly separate genetic boxes."
      },
      {
        "type": "p",
        "text": "Many modern cultivars contain multiple layers of ancestry."
      },
      {
        "type": "h2",
        "text": "Landrace Does Not Mean Automatically Better"
      },
      {
        "type": "p",
        "text": "Old regional origin can be interesting."
      },
      {
        "type": "p",
        "text": "It does not automatically mean:"
      },
      {
        "type": "p",
        "text": "stronger;"
      },
      {
        "type": "p",
        "text": "safer;"
      },
      {
        "type": "p",
        "text": "more aromatic;"
      },
      {
        "type": "p",
        "text": "more premium;"
      },
      {
        "type": "p",
        "text": "better cured."
      },
      {
        "type": "p",
        "text": "Likewise, Hybrid does not mean diluted or lower quality."
      },
      {
        "type": "p",
        "text": "Those are value judgments, not genetic definitions."
      },
      {
        "type": "h2",
        "text": "Cultivar Names Can Hide a Complicated Family Tree"
      },
      {
        "type": "p",
        "text": "Many popular cannabis names reflect crosses between earlier lines."
      },
      {
        "type": "p",
        "text": "Other names are marketing identities whose exact lineage may be difficult for a shopper to verify."
      },
      {
        "type": "p",
        "text": "That is another reason to use genetics as context rather than pretending the name alone tells the whole story."
      },
      {
        "type": "h2",
        "text": "Why This Matters on a Menu"
      },
      {
        "type": "p",
        "text": "Genetics help explain why categories overlap."
      },
      {
        "type": "p",
        "text": "An Indica-labelled product may have mixed ancestry."
      },
      {
        "type": "p",
        "text": "A Sativa-labelled product may have mixed ancestry."
      },
      {
        "type": "p",
        "text": "A Hybrid label is not unusual."
      },
      {
        "type": "p",
        "text": "The practical shopper still needs the actual product label, producer information and current listing."
      }
    ],
    "faqs": [
      {
        "question": "What is landrace cannabis?",
        "answer": "The term generally refers to cannabis populations historically associated with long-term adaptation to particular geographic regions."
      },
      {
        "question": "Is landrace cannabis “pure”?",
        "answer": "“Pure” is too strong. Landrace refers to regional historical populations, not a guarantee of identical untouched genetics."
      },
      {
        "question": "What is a hybrid cultivar?",
        "answer": "A cultivar produced through crossing genetic lines and selection."
      },
      {
        "question": "Is hybrid cannabis lower quality?",
        "answer": "No. Hybrid describes breeding history, not quality."
      },
      {
        "question": "Why are so many modern cultivars hybrids?",
        "answer": "Decades of breeding have mixed many cannabis lineages."
      }
    ],
    "quickLinks": [
      {
        "label": "Indica vs Sativa vs Hybrid",
        "href": "/resources/cannabis-101/indica-sativa-hybrid"
      },
      {
        "label": "Strain vs Cultivar",
        "href": "/resources/cannabis-101/strain-vs-cultivar"
      },
      {
        "label": "BC Grown / Indoor / Hydro / Outdoor",
        "href": "/resources/flower-guides/bc-grown-indoor-hydro-outdoor"
      },
      {
        "label": "Cannabis 101",
        "href": "/resources/cannabis-101"
      }
    ]
  },
  {
    "path": "/resources/cannabis-101/weed-slang-glossary",
    "slug": [
      "cannabis-101",
      "weed-slang-glossary"
    ],
    "eyebrow": "Cannabis 101",
    "sections": [],
    "title": "Weed Slang Explained: Gas, Loud, Fire, Dank, Mids, Quads and More",
    "seoTitle": "Weed Slang Glossary | Gas, Loud, Fire, Mids & Quads",
    "metaDescription": "Weed, bud, gas, loud, fire, dank, mids, quads and zaza are common cannabis slang. Learn what they usually mean and what they do not prove.",
    "summary": "Weed, bud, gas, loud, fire, dank, mids, quads and zaza are common cannabis slang. Learn what they usually mean and what they do not prove.",
    "blocks": [
      {
        "type": "p",
        "text": "Cannabis has two dictionaries."
      },
      {
        "type": "p",
        "text": "One is formal:"
      },
      {
        "type": "p",
        "text": "legal label;"
      },
      {
        "type": "p",
        "text": "THC;"
      },
      {
        "type": "p",
        "text": "CBD;"
      },
      {
        "type": "p",
        "text": "product format;"
      },
      {
        "type": "p",
        "text": "producer;"
      },
      {
        "type": "p",
        "text": "package information."
      },
      {
        "type": "p",
        "text": "The other is street language:"
      },
      {
        "type": "p",
        "text": "weed;"
      },
      {
        "type": "p",
        "text": "bud;"
      },
      {
        "type": "p",
        "text": "gas;"
      },
      {
        "type": "p",
        "text": "loud;"
      },
      {
        "type": "p",
        "text": "fire;"
      },
      {
        "type": "p",
        "text": "dank;"
      },
      {
        "type": "p",
        "text": "mids;"
      },
      {
        "type": "p",
        "text": "quads;"
      },
      {
        "type": "p",
        "text": "zaza;"
      },
      {
        "type": "p",
        "text": "frosty;"
      },
      {
        "type": "p",
        "text": "terpy."
      },
      {
        "type": "p",
        "text": "Kennedy Loud does not need to pretend adults never use the second dictionary."
      },
      {
        "type": "p",
        "text": "It just needs to translate it accurately."
      },
      {
        "type": "h2",
        "text": "Weed"
      },
      {
        "type": "p",
        "text": "Weed is common informal language for cannabis."
      },
      {
        "type": "p",
        "text": "People often use it when they mean flower, but the word can also be used more broadly."
      },
      {
        "type": "p",
        "text": "It is not a quality grade."
      },
      {
        "type": "h2",
        "text": "Bud / Flower / Nugs"
      },
      {
        "type": "p",
        "text": "Bud and flower usually refer to dried cannabis flower."
      },
      {
        "type": "p",
        "text": "Nug or nugs is slang for individual pieces of dried flower."
      },
      {
        "type": "h2",
        "text": "Fire"
      },
      {
        "type": "p",
        "text": "Fire means someone thinks the cannabis is very good."
      },
      {
        "type": "p",
        "text": "That is opinion."
      },
      {
        "type": "p",
        "text": "The useful follow-up is:"
      },
      {
        "type": "p",
        "text": "What makes it fire to you?"
      },
      {
        "type": "p",
        "text": "Maybe aroma."
      },
      {
        "type": "p",
        "text": "Maybe appearance."
      },
      {
        "type": "p",
        "text": "Maybe freshness."
      },
      {
        "type": "p",
        "text": "Maybe cultivar preference."
      },
      {
        "type": "h2",
        "text": "Dank"
      },
      {
        "type": "p",
        "text": "Dank is older cannabis slang usually used positively for strong-smelling or desirable weed."
      },
      {
        "type": "p",
        "text": "Like fire, it is subjective."
      },
      {
        "type": "h2",
        "text": "Gas"
      },
      {
        "type": "p",
        "text": "Gas usually describes a strong fuel-like, diesel-like or sharp pungent aroma."
      },
      {
        "type": "p",
        "text": "It is an aroma word."
      },
      {
        "type": "p",
        "text": "It is not a THC grade."
      },
      {
        "type": "h2",
        "text": "Loud"
      },
      {
        "type": "p",
        "text": "Loud means the smell is pronounced."
      },
      {
        "type": "p",
        "text": "It does not identify one exact aroma family."
      },
      {
        "type": "p",
        "text": "A loud flower can be:"
      },
      {
        "type": "p",
        "text": "gassy;"
      },
      {
        "type": "p",
        "text": "fruity;"
      },
      {
        "type": "p",
        "text": "skunky;"
      },
      {
        "type": "p",
        "text": "floral;"
      },
      {
        "type": "p",
        "text": "earthy."
      },
      {
        "type": "h2",
        "text": "Terpy"
      },
      {
        "type": "p",
        "text": "Terpy suggests a noticeable aroma or flavour profile associated with terpenes."
      },
      {
        "type": "p",
        "text": "It does not tell you which terpenes are present unless that information is actually provided."
      },
      {
        "type": "h2",
        "text": "Frosty"
      },
      {
        "type": "p",
        "text": "Frosty points toward visible trichome coverage."
      },
      {
        "type": "p",
        "text": "The term is useful because it describes something people can see."
      },
      {
        "type": "p",
        "text": "It still does not give you an exact THC number."
      },
      {
        "type": "h2",
        "text": "Bag Appeal"
      },
      {
        "type": "p",
        "text": "Bag appeal means visual first impression."
      },
      {
        "type": "p",
        "text": "People may be talking about:"
      },
      {
        "type": "p",
        "text": "bud size;"
      },
      {
        "type": "p",
        "text": "shape;"
      },
      {
        "type": "p",
        "text": "trim;"
      },
      {
        "type": "p",
        "text": "colour;"
      },
      {
        "type": "p",
        "text": "visible trichomes;"
      },
      {
        "type": "p",
        "text": "overall presentation."
      },
      {
        "type": "h2",
        "text": "Mids"
      },
      {
        "type": "p",
        "text": "Mids means cannabis someone considers middle-of-the-road."
      },
      {
        "type": "p",
        "text": "The reason can vary."
      },
      {
        "type": "p",
        "text": "It is not an official grade."
      },
      {
        "type": "h2",
        "text": "Top Shelf"
      },
      {
        "type": "p",
        "text": "Top shelf suggests premium positioning."
      },
      {
        "type": "p",
        "text": "Retailers and consumers may use the phrase differently."
      },
      {
        "type": "p",
        "text": "It does not come with one required THC range."
      },
      {
        "type": "h2",
        "text": "Quads / AAAA"
      },
      {
        "type": "p",
        "text": "Quads is common Canadian slang for AAAA."
      },
      {
        "type": "p",
        "text": "It generally signals premium positioning."
      },
      {
        "type": "p",
        "text": "It is not one regulated Canadian grading standard."
      },
      {
        "type": "h2",
        "text": "AAA / AAA+"
      },
      {
        "type": "p",
        "text": "AAA is familiar informal grading language."
      },
      {
        "type": "p",
        "text": "AAA+ suggests something positioned slightly above a normal AAA label."
      },
      {
        "type": "p",
        "text": "Kennedy Loud's protected owner is:"
      },
      {
        "type": "p",
        "text": "AAA+ Weed → /aaa-weed"
      },
      {
        "type": "h2",
        "text": "AA"
      },
      {
        "type": "p",
        "text": "AA is another familiar cannabis tier shorthand."
      },
      {
        "type": "p",
        "text": "Kennedy Loud's protected owner is:"
      },
      {
        "type": "p",
        "text": "AA Weed → /aa-weed"
      },
      {
        "type": "h2",
        "text": "Exotic"
      },
      {
        "type": "p",
        "text": "Exotic can suggest:"
      },
      {
        "type": "p",
        "text": "unusual genetics;"
      },
      {
        "type": "p",
        "text": "distinctive aroma;"
      },
      {
        "type": "p",
        "text": "rarity;"
      },
      {
        "type": "p",
        "text": "high-end presentation."
      },
      {
        "type": "p",
        "text": "It is also marketing language."
      },
      {
        "type": "p",
        "text": "At Kennedy Loud, Exotic Weed is a protected owner."
      },
      {
        "type": "h2",
        "text": "Zaza / Za"
      },
      {
        "type": "p",
        "text": "Zaza or za is newer slang often used for expensive, rare-looking, premium or exotic-positioned weed."
      },
      {
        "type": "p",
        "text": "It is not an official grade."
      },
      {
        "type": "p",
        "text": "If someone says:"
      },
      {
        "type": "p",
        "text": "“That is zaza.”"
      },
      {
        "type": "p",
        "text": "the useful question is:"
      },
      {
        "type": "p",
        "text": "Do you mean genetics, appearance, aroma, rarity, price positioning or just hype?"
      },
      {
        "type": "h2",
        "text": "Why Slang Is Worth Keeping"
      },
      {
        "type": "p",
        "text": "Slang can be more direct than formal language."
      },
      {
        "type": "p",
        "text": "Gas quickly communicates an aroma family."
      },
      {
        "type": "p",
        "text": "Frosty points to trichomes."
      },
      {
        "type": "p",
        "text": "Bag appeal points to presentation."
      },
      {
        "type": "p",
        "text": "Quads points toward premium positioning."
      },
      {
        "type": "p",
        "text": "The mistake is not using slang."
      },
      {
        "type": "p",
        "text": "The mistake is treating slang as proof."
      },
      {
        "type": "p",
        "text": "Use the word."
      },
      {
        "type": "p",
        "text": "Then translate it."
      }
    ],
    "faqs": [
      {
        "question": "Is weed the same thing as cannabis?",
        "answer": "Weed is common informal language for cannabis."
      },
      {
        "question": "What does gas mean?",
        "answer": "Usually a fuel-like, diesel-like or pungent aroma impression."
      },
      {
        "question": "What does loud mean?",
        "answer": "Usually that the aroma is pronounced."
      },
      {
        "question": "What are quads?",
        "answer": "Common Canadian slang for AAAA, usually implying premium positioning."
      },
      {
        "question": "What is zaza?",
        "answer": "Newer slang commonly associated with premium, exotic or expensive-positioned cannabis. It is not an official grade."
      }
    ],
    "quickLinks": [
      {
        "label": "Cannabis 101",
        "href": "/resources/cannabis-101"
      },
      {
        "label": "Top Shelf, Mids & Quads",
        "href": "/resources/flower-guides/top-shelf-mids-quads"
      },
      {
        "label": "Gas, Loud & Terpy",
        "href": "/resources/flower-guides/terpenes-gas-loud-aroma"
      },
      {
        "label": "Frosty Weed & Trichomes",
        "href": "/resources/flower-guides/trichomes-frosty-weed"
      },
      {
        "label": "Exotic Weed",
        "href": "/exotic-weed"
      },
      {
        "label": "Premium Weed",
        "href": "/premium-weed"
      }
    ]
  }
];
RESOURCE_HUB.sections.push({ heading: "Learn the Menu, Then Use the Live Menu", body: "Kennedy Loud's Resource Centre has two jobs. First, explain the words and categories that do not change every day. Second, point changing product details back to the current menu. Use the guides for: flower quality language; first-visit planning; THC; trichomes; aroma; growing methods; genetics; weed slang; cigarette terminology. Use the current category/product pages for: current products; prices; package details; flavours; strains; stock; availability. That keeps the Resource Centre useful even when the menu rotates. Add grouped cards Cannabis Basics Cannabis 101 → /resources/cannabis-101 First Visit to Kennedy Loud Cannabis → /resources/hillcrest-ave-visit-guide Weed Dispensary vs Cannabis Dispensary → /resources/cannabis-dispensary-vs-weed-dispensary Indica vs Sativa vs Hybrid → /resources/cannabis-101/indica-sativa-hybrid Strain vs Cultivar → /resources/cannabis-101/strain-vs-cultivar Landrace vs Hybrid → /resources/cannabis-101/landrace-vs-hybrid Weed Slang Explained → /resources/cannabis-101/weed-slang-glossary Flower Quality Kennedy Loud Weed & Flower Quality Guide → /resources/weed-flower-tier-guide What Does Good Weed Mean? → /resources/flower-guides/what-does-good-weed-mean Top Shelf, Mids & Quads → /resources/flower-guides/top-shelf-mids-quads THC vs Weed Quality → /resources/flower-guides/thc-vs-weed-quality Bag Appeal → /resources/flower-guides/bag-appeal Frosty Weed & Trichomes → /resources/flower-guides/trichomes-frosty-weed Gas, Loud & Terpy → /resources/flower-guides/terpenes-gas-loud-aroma Drying, Curing & Freshness → /resources/flower-guides/drying-curing-freshness Smalls vs Big Buds → /resources/flower-guides/smalls-vs-big-buds Growing & Production BC Grown / Indoor / Hydro / Outdoor → /resources/flower-guides/bc-grown-indoor-hydro-outdoor Craft vs Commercial Cannabis → /resources/flower-guides/craft-vs-commercial-cannabis Existing Menu & Visit Guides Preserve current cards for: Kennedy Road menu map; 24-hour Brampton dispensary guide; vapes & concentrates guide; Magic Stuff menu guide. Tobacco Information Native Cigarettes in Ontario → /resources/native-smokes-brampton-guide Do not make the Resource Centre card copy promise current cigarette brands/prices." });
for (const page of RESOURCE_PAGES) Object.assign(page, PINKY_KLC01_OVERRIDES[page.path] || {});
RESOURCE_PAGES.push(...PINKY_KLC01_ADDITIONS);

export const RESOURCE_PATHS = ALL_RESOURCE_PAGES.map((page) => page.path);

export function getResourceBySegments(slug: string[] = []) {
  if (slug.length === 0) return RESOURCE_HUB;
  const path = `/resources/${slug.join("/")}`;
  return RESOURCE_PAGES.find((page) => page.path === path);
}

export function getResourceByPath(path: string) {
  return ALL_RESOURCE_PAGES.find((page) => page.path === path);
}
