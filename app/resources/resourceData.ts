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
    title: "Hillcrest Ave 24-Hour Cannabis Visit Guide",
    metaDescription: "Plan a Kennedy Loud Cannabis visit at 49 Hillcrest Ave Unit 104 in Brampton with 24-hour weed dispensary menu, ID, flower, vape, edible, and native cigarette notes.",
    eyebrow: "Hillcrest visit",
    summary: "A local walk-in guide for Kennedy Loud Cannabis at 49 Hillcrest Ave Unit 104 in Brampton, built for shoppers who want the menu path before they pull up.",
    sections: [
      { heading: "Start At Hillcrest Ave", body: "Kennedy Loud Cannabis is the Hillcrest Ave stop for Brampton shoppers near Kennedy Road, Queen Street, Main Street, and nearby Brampton Transit routes. Use this page as the quick pre-visit map: check the category you want, bring valid 19+ ID, and head in with one backup option in mind." },
      { heading: "Use The Flower Tier Ladder", body: "The menu is easiest when flower shoppers start with the tier ladder: Exotic for top-shelf browsing, Premium for connoisseur-style picks, AAA+ and AA for balanced value, and Budget when the goal is affordable weed in Brampton. Pick the lane first, then compare current strains inside it." },
      { heading: "Match The Format To The Trip", body: "Not every Hillcrest visit is a flower run. The site keeps pre-rolls, edibles, THC vapes, concentrates, accessories, and cigarettes in separate category paths so a shopper looking for cannabis vapes in Brampton does not have to dig through flower pages." },
      { heading: "Plan Around 24-Hour Access", body: "Kennedy Loud is positioned as a 24-hour Brampton dispensary, so the resource hub should support late-night, early-morning, and after-shift visits. Check the menu route first, keep your ID ready, and use the FAQ or contact page for store basics before leaving." },
    ],
    quickLinks: [
      { label: "Brampton visit page", href: "/weed-dispensary-brampton/" },
      { label: "Flower tiers", href: "/#menu" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    slug: "kennedy-road-menu-guide",
    title: "Kennedy Road Brampton Menu Guide",
    metaDescription: "Use the Kennedy Loud Cannabis menu guide for Brampton shoppers near Kennedy Road and Hillcrest Ave looking for flower, pre-rolls, edibles, vapes, concentrates, cigarettes, and accessories.",
    eyebrow: "Menu map",
    summary: "A Brampton menu shortcut for shoppers searching near Kennedy Road, Hillcrest Ave, Queen Street, and Main Street.",
    sections: [
      { heading: "Search By Shopper Intent", body: "People do not all shop the same way. Some search for a Brampton weed dispensary near Kennedy Road, some want cheap weed, some want edibles, and some just want a clean route to the cigarette category. This guide keeps those paths close instead of forcing every shopper through one generic menu." },
      { heading: "Flower, Then Format", body: "If cannabis flower is the plan, start with Exotic, Premium, AAA+, AA, or Budget. If format matters more than tier, jump straight to pre-rolls, edibles, THC vapes, concentrates, or accessories. That structure gives Kennedy Loud a stronger local menu page without changing the existing URLs." },
      { heading: "Useful Internal Links", body: "Resource pages should point shoppers toward the next useful action. The Kennedy Road guide links to vapes, pre-rolls, and contact details so someone checking the menu before a Brampton visit can move fast without bouncing around the site." },
      { heading: "Keep Inventory Flexible", body: "The language stays menu-first because exact strains, brands, and carton details can rotate. The page can rank for Brampton cannabis menu intent while still sending shoppers to live category pages for current product details." },
    ],
    quickLinks: [
      { label: "THC vapes", href: "/items/vapes" },
      { label: "Pre-rolls", href: "/items/prerolls" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    slug: "loud-flower-tier-guide",
    title: "Brampton Flower Tier Guide At Kennedy Loud",
    metaDescription: "Compare Kennedy Loud Cannabis flower tiers in Brampton, including Exotic, Premium, AAA+, AA, and Budget weed menu paths.",
    eyebrow: "Flower tiers",
    summary: "A clearer explanation of the Kennedy Loud flower shelf for shoppers comparing quality, price, and Brampton weed tier pages.",
    sections: [
      { heading: "Exotic And Premium", body: "Exotic and Premium are the loudest shelf signals on the Kennedy Loud menu. They are the right starting point for shoppers searching for exotic cannabis flower in Brampton, top-shelf weed, strong bag appeal, or a more premium flower lane." },
      { heading: "AAA+ And AA", body: "AAA+ and AA are the practical middle of the menu. These pages help regular shoppers compare quality and spend without turning the visit into homework. They also create clean internal paths for Brampton flower tier keywords." },
      { heading: "Budget Flower", body: "Budget is the value lane for shoppers searching cheap weed in Brampton or a simple everyday flower option. The page should stay honest: it points shoppers to the current Budget menu instead of promising a fixed strain or batch." },
      { heading: "Why Tiers Help SEO", body: "Tier pages give Google and shoppers a more specific structure than one broad cannabis menu. Kennedy Loud can cover premium flower, value flower, and local Brampton weed searches while keeping the store navigation easy to scan." },
    ],
    quickLinks: [
      { label: "Exotic flower", href: "/exotic" },
      { label: "AAA+ flower", href: "/aaa" },
      { label: "Budget flower", href: "/budget" },
    ],
  },
  {
    slug: "late-night-brampton-cannabis",
    title: "Late-Night Brampton Cannabis Guide",
    metaDescription: "A late-night Brampton cannabis guide for Kennedy Loud Cannabis shoppers looking for a 24-hour weed dispensary, flower tiers, vapes, pre-rolls, edibles, and cigarettes.",
    eyebrow: "Late night",
    summary: "Built for night-shift shoppers, after-hours errands, early starts, and anyone checking Kennedy Loud outside regular retail hours.",
    sections: [
      { heading: "Choose Before You Leave", body: "Late-night cannabis shoppers usually want a fast trip. Pick the category before heading to Hillcrest Ave: flower if you want tier choices, pre-rolls if you want ready-to-smoke, edibles if you want measured formats, or vapes if you want a cartridge or disposable-style menu lane." },
      { heading: "Keep One Backup Category", body: "Inventory can rotate at any 24-hour Brampton dispensary. A simple backup plan keeps the visit smooth: Premium if Exotic is not the move, AA if Budget is picked over, or pre-rolls if you do not want to compare flower jars." },
      { heading: "Use The Useful Pages", body: "The FAQ, contact page, and Brampton visit page support the late-night flow without promoting phone calls as the main action. The page sends shoppers toward menu and visit basics first." },
      { heading: "Adult-Use Basics Still Apply", body: "Open 24 hours does not change the basics. Bring valid government ID, shop responsibly, and use the website to choose the menu path before you arrive." },
    ],
    quickLinks: [
      { label: "Menu", href: "/#menu" },
      { label: "Pre-rolls", href: "/items/prerolls" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    slug: "native-smokes-guide",
    title: "Native Cigarettes Brampton Guide",
    metaDescription: "Find Kennedy Loud Cannabis native cigarettes in Brampton with category links for cigarettes, accessories, flower, pre-rolls, and the Hillcrest Ave visit page.",
    eyebrow: "Cigarettes",
    summary: "A stronger cigarette category resource for shoppers who search native cigarettes Brampton and want the tobacco lane beside the cannabis menu.",
    sections: [
      { heading: "Use The Cigarette Category First", body: "The cigarette page is the direct route for shoppers looking for native cigarettes in Brampton at Kennedy Loud Cannabis. It keeps tobacco shoppers out of unrelated flower pages while still connecting them to the rest of the Hillcrest Ave menu." },
      { heading: "Pair With Accessories", body: "A cigarette stop often overlaps with papers, lighters, grinders, trays, and other small accessories. The resource page links the cigarette and accessory paths together so shoppers can plan one stop instead of searching the site twice." },
      { heading: "Keep Brand Details Flexible", body: "Native cigarette brands, carton options, and exact selection can change. This page should rank for the local category and send shoppers to the live category or in-store counter for current options instead of making fixed inventory promises." },
      { heading: "Connect It Back To Cannabis", body: "Many Kennedy Loud shoppers browse cigarettes alongside flower, pre-rolls, edibles, or THC vapes. The resource copy makes that relationship clear while preserving the existing /items/cigarettes URL for SEO and navigation." },
    ],
    quickLinks: [
      { label: "Cigarettes", href: "/items/cigarettes" },
      { label: "Accessories", href: "/items/add-ons" },
      { label: "Brampton visit page", href: "/weed-dispensary-brampton/" },
    ],
  },
  {
    slug: "vapes-concentrates-guide",
    title: "Brampton THC Vapes And Concentrates Guide",
    metaDescription: "Compare Kennedy Loud Cannabis THC vapes, disposable vape paths, concentrates, hash, resin-style extracts, and accessories before visiting in Brampton.",
    eyebrow: "Vapes and extracts",
    summary: "A format guide for shoppers who want THC vape, concentrate, and accessory paths without walking through every flower tier first.",
    sections: [
      { heading: "THC Vape Path", body: "The THC vape lane is for shoppers searching cannabis vapes in Brampton, vape pens, cartridges, and vape-first formats. Keeping this path separate from flower helps Kennedy Loud catch shoppers who already know they want a vape category." },
      { heading: "Concentrates Path", body: "Concentrates need their own page because hash, shatter-style products, resin-style extracts, and stronger-format categories are not the same shopping decision as flower or edibles. The resource page explains the lane without promising a specific live SKU." },
      { heading: "Disposable And Support Gear", body: "If a shopper needs disposable vape options, batteries, papers, tools, or add-ons, the accessory and vape links should be close together. That makes the site more useful for Brampton visitors who are planning a complete stop." },
      { heading: "Use The Menu For Current Stock", body: "This page is the decision guide. Current products, flavours, and extract types still belong on the live category pages and at the counter, where rotation can be handled properly." },
    ],
    quickLinks: [
      { label: "THC vapes", href: "/items/vapes" },
      { label: "Concentrates", href: "/items/concentrates" },
      { label: "Accessories", href: "/items/add-ons" },
    ],
  },
];

export function getResourceBySlug(slug: string) {
  return RESOURCE_PAGES.find((page) => page.slug === slug);
}