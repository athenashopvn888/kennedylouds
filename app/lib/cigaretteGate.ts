import itemsJson from "./items.json";
import { SHOW_CIGARETTES, VAPE_PAGE } from "./siteConfig";

export { SHOW_CIGARETTES, VAPE_PAGE };

const KEPT_TOBACCO = /backwoods|cigarillo|rolling[ -]?paper|raw[ -]?paper|\bpapers\b/i;

/** Brand guides and delivery guides that stay up with Backwoods, cigarillos, and rolling papers. */
const KEPT_GUIDE_SLUGS = new Set(["backwoods", "backwoods-delivery-brampton"]);

const HIDDEN_GUIDE_SLUGS = new Set([
  "canadian-classics",
  "nexus-cigarettes",
  "canadian-goose",
  "putters",
  "time-cigarettes",
  "rolled-gold",
  "canadian-cigarettes",
  "grabba",
  "playfares",
  "bb-cigarettes",
  "dks-cigarettes",
  "belmont-king-size",
  "bb-delivery-brampton",
  "bb-full-delivery-brampton",
  "bb-light-delivery-brampton",
  "belmont-delivery-brampton",
  "canadian-classics-delivery-brampton",
  "canadian-classics-original-delivery-brampton",
  "canadian-classics-silver-delivery-brampton",
  "canadian-goose-delivery-brampton",
  "canadian-goose-full-delivery-brampton",
  "canadian-goose-light-delivery-brampton",
  "canadian-delivery-brampton",
  "canadian-full-delivery-brampton",
  "canadian-light-delivery-brampton",
  "rolled-gold-delivery-brampton",
  "rolled-gold-full-delivery-brampton",
  "rolled-gold-light-delivery-brampton",
  "nexus-delivery-brampton",
  "nexus-full-delivery-brampton",
  "nexus-light-delivery-brampton",
  "putters-delivery-brampton",
  "time-delivery-brampton",
  "time-full-delivery-brampton",
  "time-light-delivery-brampton",
  "playfare-delivery-brampton",
  "playfare-ultra-light-delivery-brampton",
  "grabba-delivery-brampton",
]);

const LEGACY_HIDDEN_ITEM_SLUGS = [
  "canadian-lights",
  "canadian-full",
  "putters",
  "canadian-goose-full",
  "canadian-goose-lights",
  "canadian-menthol",
  "canadian-classics-original",
  "canadian-classics-silver",
  "rolled-gold-lights",
  "nexus-full",
  "nexus-lights",
  "time-full",
  "grabba",
  "grabba-shaker-redrose-red-herring",
  "10-x-premium-mix-cigarettes",
  "bb-full-carton",
  "bb-lights-carton",
  "belmont-king-size-pack-only",
  "grabba-redrose-redherring",
  "grabba-shaker-redrose-red-herring-x2-available",
];

const HIDDEN_EXACT_PATHS = new Set([
  "/cigarettes",
  "/items/cigarettes",
  "/native-cigarettes-hillcrest-brampton",
  "/info/native-cigarettes-brampton",
  "/info/native-cigarettes-york",
  "/resources/native-smokes-brampton-guide",
]);

export type NamedProduct = { name?: string; slug?: string; category?: string };

export function isKeptTobaccoProduct(item: NamedProduct): boolean {
  const name = item.name || "";
  const slug = item.slug || "";
  if (/grabba/i.test(name) || /grabba/i.test(slug)) return false;
  return KEPT_TOBACCO.test(name) || KEPT_TOBACCO.test(slug);
}

/** Nicotine pouches (Zyn, Velo, Pablo, Killa) are not cigarettes and stay listed. */
export function isNicotinePouchProduct(item: NamedProduct): boolean {
  const name = `${item.name || ""} ${item.slug || ""}`;
  return /nicotine[\s-]*pouches?|\bzyn\b|\bvelo\b|\bpablo\b|\bkilla\b/i.test(name);
}

/** Vapes sometimes land in the cigarette feed. They stay on the vape shelf. */
export function isVapeProduct(item: NamedProduct): boolean {
  const name = `${item.name || ""} ${item.slug || ""}`;
  if (isNicotinePouchProduct(item)) return false;
  if (/grabba|cigarette|backwood|cigarillo/i.test(name)) return false;
  return /zpod|\bvape\b|ovns|disposable|\bpuff|e-?liquid|flavour beast|level x/i.test(name);
}

export function shouldHideCigaretteProduct(item: NamedProduct): boolean {
  if (isNicotinePouchProduct(item) || isKeptTobaccoProduct(item) || isVapeProduct(item)) return false;
  const slug = item.slug || "";
  const name = item.name || "";
  if (LEGACY_HIDDEN_ITEM_SLUGS.includes(slug)) return true;
  if (/grabba/i.test(name) || /grabba/i.test(slug)) return true;
  if ((item.category || "").toUpperCase() === "CIGARETTES") return true;
  return false;
}

const HIDDEN_ITEM_SLUGS = new Set<string>([
  ...LEGACY_HIDDEN_ITEM_SLUGS,
  ...(itemsJson as NamedProduct[]).filter((item) => shouldHideCigaretteProduct(item)).map((item) => item.slug || ""),
]);

export function isKeptTobaccoSlug(slug: string): boolean {
  if (/grabba/i.test(slug)) return false;
  return KEPT_GUIDE_SLUGS.has(slug) || KEPT_TOBACCO.test(slug);
}

export function isHiddenCigaretteProduct(item: NamedProduct): boolean {
  if (SHOW_CIGARETTES) return false;
  return shouldHideCigaretteProduct(item);
}

export function isHiddenGuideSlug(slug: string): boolean {
  if (SHOW_CIGARETTES) return false;
  if (isKeptTobaccoSlug(slug)) return false;
  if (HIDDEN_GUIDE_SLUGS.has(slug)) return true;
  return /grabba/i.test(slug);
}

export function normalizePath(pathname: string): string {
  const path = pathname.split("?")[0].split("#")[0];
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path || "/";
}

export function isHiddenCigarettePath(pathname: string): boolean {
  if (SHOW_CIGARETTES) return false;
  const path = normalizePath(pathname);
  if (HIDDEN_EXACT_PATHS.has(path)) return true;
  if (path.startsWith("/native-cigarettes")) return true;
  if (path.startsWith("/info/native-cigarettes")) return true;
  if (path.startsWith("/resources/native-smokes")) return true;
  if (/grabba/i.test(path)) return true;
  const guide = path.match(/^\/guides\/([^/]+)$/);
  if (guide && isHiddenGuideSlug(guide[1])) return true;
  const item = path.match(/^\/item\/([^/]+)$/);
  if (item && HIDDEN_ITEM_SLUGS.has(item[1])) return true;
  return false;
}

export function gateLinks<T extends { href: string }>(links: readonly T[]): T[] {
  if (SHOW_CIGARETTES) return [...links];
  return links.filter((link) => !isHiddenCigarettePath(link.href));
}

/** Shelf path for pages that stay visible. Cigarette category URLs still 302 on their own. */
export function publicShelfPath(path: string, slug?: string): string {
  if (SHOW_CIGARETTES) return path;
  if (slug && isKeptTobaccoSlug(slug) && normalizePath(path) === "/items/cigarettes") return "/items/add-ons";
  return path;
}

export function isHiddenReviewComment(comment: string): boolean {
  if (SHOW_CIGARETTES) return false;
  return /\bgrabba\b|cigarette|tobacco|marlboro|belmont|native smoke/i.test(comment);
}

const SCRUB_PHRASES: RegExp[] = [
  /native cigarettes and /gi,
  /Native cigarettes and /gi,
  / and native cigarettes/gi,
  /native cigarettes/gi,
  /Native Cigarettes/gi,
  /Native cigarettes/gi,
  /native smokes/gi,
  /Native Smokes/gi,
  /Native smokes/gi,
  /, or cigarette\b/gi,
  / or cigarette\b/gi,
  /, cigarettes,/gi,
  /, cigarettes\b/gi,
  /\bcigarettes, /gi,
  / and cigarettes\b/gi,
  /\bcigarettes and /gi,
  /\bcigarettes\b/gi,
  /\bcigarette\b/gi,
  /\bgrabba\b/gi,
  /, tobacco\b/gi,
  /\btobacco and /gi,
  / and tobacco\b/gi,
  /\btobacco\b/gi,
];

/** Returns the original string while the switch is on. */
export function scrubCigaretteCopy(text: string): string {
  if (SHOW_CIGARETTES) return text;
  if (!text || text.startsWith("/") || text.startsWith("http")) return text;
  let next = text;
  next = next.replace(/Tobacco Information Native Cigarettes in Ontario\s*→\s*\/resources\/native-smokes-brampton-guide/gi, "");
  next = next.replace(/;\s*cigarette terminology/gi, "");
  for (const phrase of SCRUB_PHRASES) next = next.replace(phrase, "");
  for (const path of [
    "/resources/native-smokes-brampton-guide",
    "/native-cigarettes-hillcrest-brampton",
    "/info/native-cigarettes-brampton",
    "/info/native-cigarettes-york",
    "/items/cigarettes",
  ]) {
    next = next.split(path).join("");
  }
  next = next.replace(/→\s+(?=[A-Z“"])/g, "");
  return next
    .replace(/Backwoods Backwoods/g, "Backwoods")
    .replace(/backwoods backwoods/g, "backwoods")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/,\s*,/g, ",")
    .replace(/\(\s*\)/g, "")
    .replace(/\s+\./g, ".")
    .trim();
}

const URL_KEYS = new Set([
  "href",
  "menuHref",
  "secondaryHref",
  "image",
  "banner",
  "slug",
  "sourceSlug",
  "path",
  "canonical",
  "url",
]);

export function scrubCigaretteValue<T>(value: T, key?: string): T {
  if (SHOW_CIGARETTES) return value;
  if (typeof value === "string") {
    if (key && URL_KEYS.has(key)) return value;
    return scrubCigaretteCopy(value) as T;
  }
  if (Array.isArray(value)) return value.map((entry) => scrubCigaretteValue(entry)) as T;
  if (value && typeof value === "object") {
    const output: Record<string, unknown> = {};
    for (const [childKey, child] of Object.entries(value)) {
      output[childKey] = scrubCigaretteValue(child, childKey);
    }
    return output as T;
  }
  return value;
}

export function visibleFaqs<T extends { q: string; a: string }>(faqs: readonly T[]): T[] {
  if (SHOW_CIGARETTES) return [...faqs];
  return faqs.flatMap((faq) => {
    if (/native cigarette|sell native|sell cigarette|cigarette brand|\bgrabba\b/i.test(faq.q)) return [];
    return [{ ...faq, q: scrubCigaretteCopy(faq.q), a: scrubCigaretteCopy(faq.a) }];
  });
}

export function publicKeptGuideMarkdown(markdown: string): string {
  if (SHOW_CIGARETTES) return markdown;
  return markdown
    .replaceAll("/items/cigarettes", "/items/add-ons")
    .replaceAll("Native Cigarettes", "Backwoods")
    .replaceAll("native cigarettes", "backwoods")
    .replaceAll("Backwoods Backwoods", "Backwoods")
    .replaceAll("backwoods backwoods", "backwoods")
    .split("\n")
    .filter((line) => {
      if (/\bgrabba\b/i.test(line)) return false;
      if (/^\s*-\s+\*\*(Belmont|Playfare|Canadian Classics|BB|Grabba)\b/i.test(line)) return false;
      return true;
    })
    .join("\n");
}

export function publicKeptTitle(title: string): string {
  if (SHOW_CIGARETTES) return title;
  return title
    .replaceAll(" Native Cigarettes", "")
    .replaceAll(" native cigarettes", "")
    .replaceAll("Backwoods Backwoods", "Backwoods")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/** Temporary 302s used while SHOW_CIGARETTES is off. Empty when the switch is on. */
export function cigaretteTemporaryRedirects(): { source: string; destination: string; statusCode: 302 }[] {
  if (SHOW_CIGARETTES) return [];
  const sources = [
    "/cigarettes",
    "/items/cigarettes",
    "/native-cigarettes-hillcrest-brampton",
    "/info/native-cigarettes-brampton",
    "/info/native-cigarettes-york",
    "/resources/native-smokes-brampton-guide",
    ...[...HIDDEN_GUIDE_SLUGS].map((slug) => `/guides/${slug}`),
    ...[...HIDDEN_ITEM_SLUGS].filter(Boolean).map((slug) => `/item/${slug}`),
  ];
  return sources.map((source) => ({ source, destination: VAPE_PAGE, statusCode: 302 as const }));
}
