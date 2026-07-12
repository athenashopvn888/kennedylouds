export type ResourceArticle = {
  slug: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  summary: string;
  sections: { heading: string; body: string }[];
  quickLinks: { label: string; href: string }[];
};

export const RESOURCE_BANNER = "/banners/KennedyLoud_Welcome_Banner.webp";
export const RESOURCE_CANONICAL = "https://kennedyloudcannabis.com/resources";

export const RESOURCE_PAGES: ResourceArticle[] = [
  {
    slug: "hillcrest-24-hour-visit-guide",
    title: "Hillcrest Ave 24-Hour Visit Guide",
    metaDescription: "Plan a 24-hour Kennedy Loud Cannabis visit on Hillcrest Ave in Brampton with menu, parking, route, and walk-in notes.",
    eyebrow: "Visit guide",
    summary: "A quick local guide for shoppers pulling up to Kennedy Loud Cannabis at 49 Hillcrest Ave Unit 104.",
    sections: [
      { heading: "Start With The Menu", body: "Check the flower tiers first, then jump into vapes, edibles, pre-rolls, concentrates, cigarettes, and accessories. It keeps the visit focused before you get to the counter." },
      { heading: "Use The 24-Hour Advantage", body: "Kennedy Loud is open 24 hours, which makes it useful for late shifts, early errands, and quick Brampton stop-ins when other shops are closed." },
      { heading: "Walk-In Flow", body: "No appointment is needed. Bring valid government ID, know your preferred category or budget lane, and keep a backup pick in mind in case a product rotates." },
    ],
    quickLinks: [
      { label: "Browse Flower Tiers", href: "/#menu" },
      { label: "Brampton GBP Page", href: "/weed-dispensary-brampton/" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    slug: "kennedy-road-menu-guide",
    title: "Kennedy Road Area Menu Guide",
    metaDescription: "A Kennedy Loud Cannabis menu guide for shoppers around the Kennedy Road and Hillcrest Ave side of Brampton.",
    eyebrow: "Menu path",
    summary: "Use this guide when you want a fast category lane before visiting the Hillcrest Ave shop.",
    sections: [
      { heading: "Flower First", body: "Exotic, Premium, AAA+, AA, and Budget give shoppers a simple ladder from top-shelf picks to value flower. The tier pages keep pricing and bundle language clearer than a loose product list." },
      { heading: "Then Pick Format", body: "If flower is not the move, jump into pre-rolls for ready-to-smoke, THC vapes for cartridges and pens, edibles for measured formats, or concentrates for stronger extract categories." },
      { heading: "Local Shortcut", body: "This resource is built for people checking the menu before heading toward Hillcrest Ave from nearby Brampton routes, not for replacing the live menu." },
    ],
    quickLinks: [
      { label: "THC Vapes", href: "/items/vapes" },
      { label: "Pre-Rolls", href: "/items/prerolls" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    slug: "loud-flower-tier-guide",
    title: "Loud Flower Tier Guide",
    metaDescription: "Understand Kennedy Loud Cannabis flower tiers, from Exotic and Premium to AAA+, AA, and Budget.",
    eyebrow: "Flower tiers",
    summary: "A plain-English guide to the KLC tier ladder so shoppers can match quality and budget faster.",
    sections: [
      { heading: "Top-Shelf Lanes", body: "Exotic and Premium are the connoisseur lanes. They are for shoppers who care most about standout flower, strong profiles, and a louder shelf experience." },
      { heading: "Middle Sweet Spot", body: "AAA+ and AA are the practical middle: strong enough for regular shoppers, clear enough for a quick decision, and usually easier to compare by budget." },
      { heading: "Value Lane", body: "Budget is built for price-sensitive shoppers who still want a real menu path. Use it when the goal is value first and product rotation is expected." },
    ],
    quickLinks: [
      { label: "Exotic", href: "/exotic" },
      { label: "AAA+", href: "/aaa" },
      { label: "Budget", href: "/budget" },
    ],
  },
  {
    slug: "late-night-brampton-cannabis",
    title: "Late-Night Brampton Cannabis Guide",
    metaDescription: "Plan a late-night Brampton cannabis stop at Kennedy Loud Cannabis with 24-hour hours and menu-first tips.",
    eyebrow: "Late night",
    summary: "For night-shift shoppers, after-hours errands, and anyone checking the menu outside regular retail hours.",
    sections: [
      { heading: "Do The Menu Check First", body: "Late-night shoppers usually want speed. Check the tier or category page before leaving, then arrive with one main pick and one backup lane." },
      { heading: "Keep It Simple", body: "For fast visits, flower tiers, pre-rolls, and vapes are the easiest lanes to compare. Edibles and concentrates can take more label reading." },
      { heading: "ID Still Matters", body: "The 24-hour schedule does not change the basics. Bring valid 19+ ID and expect normal store verification before purchase." },
    ],
    quickLinks: [
      { label: "Menu", href: "/#menu" },
      { label: "Pre-Rolls", href: "/items/prerolls" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    slug: "native-smokes-guide",
    title: "Native Smokes And Cigarette Category Guide",
    metaDescription: "Review Kennedy Loud Cannabis cigarette category notes and native smoke menu links before visiting in Brampton.",
    eyebrow: "Cigarettes",
    summary: "A simple resource for shoppers who want the cigarette category beside the cannabis menu.",
    sections: [
      { heading: "Use The Category Page", body: "The cigarette page is the cleanest path for this category because availability and brand mix can change. Treat it as a menu lane, not a fixed promise." },
      { heading: "One-Stop Planning", body: "Some shoppers pair cigarettes with flower, pre-rolls, or accessories. The resource hub keeps those nearby routes close together." },
      { heading: "Ask In Store", body: "For specific brand and carton details, confirm at the counter during the visit. The website keeps the category easy to find before you arrive." },
    ],
    quickLinks: [
      { label: "Cigarettes", href: "/items/cigarettes" },
      { label: "Accessories", href: "/items/add-ons" },
      { label: "Visit Page", href: "/weed-dispensary-brampton/" },
    ],
  },
  {
    slug: "vapes-concentrates-guide",
    title: "Vapes And Concentrates Guide",
    metaDescription: "Compare Kennedy Loud Cannabis THC vapes, disposable vapes, concentrates, and accessories before visiting.",
    eyebrow: "Format guide",
    summary: "For shoppers who want stronger format categories without wandering through the whole menu.",
    sections: [
      { heading: "THC Vape Lane", body: "Use the THC vape page for cartridges, pens, and vape-first menu browsing. It is the fastest path if you already know you want a vape format." },
      { heading: "Concentrates Lane", body: "Concentrates sit in their own category because they cover stronger extract formats such as hash, resin, shatter-style products, and related options when carried." },
      { heading: "Grab The Add-Ons", body: "Accessories matter for papers, tools, lighters, and supporting pieces. Check that lane if your visit needs more than the main product." },
    ],
    quickLinks: [
      { label: "THC Vapes", href: "/items/vapes" },
      { label: "Concentrates", href: "/items/concentrates" },
      { label: "Accessories", href: "/items/add-ons" },
    ],
  },
];

export function getResourceBySlug(slug: string) {
  return RESOURCE_PAGES.find((page) => page.slug === slug);
}
