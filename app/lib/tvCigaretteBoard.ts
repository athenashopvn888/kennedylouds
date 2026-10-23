import { isKeptSmokeName, isRealCigaretteItem } from "./cigMarkers.ts";
import { isNicotineItem } from "../tv/flashMessages.ts";

const KEPT_TOBACCO = /backwoods|cigarillo|rolling[ -]?paper|raw[ -]?paper|\bpapers\b/i;
const POUCH = /nicotine[\s-]*pouches?|\bzyn\b|\bvelo\b|\bpablo\b|\bkilla\b/i;
const VAPE = /zpod|\bvape\b|ovns|disposable|\bpuff|e-?liquid|flavour beast|level x/i;

export const CIGARETTE_CARD_OFF_TITLE = "BACKWOODS";

type ShelfItem = { category?: string; name?: string; slug?: string };

function blob(item: ShelfItem): string {
  return `${item.name || ""} ${item.slug || ""}`;
}

function isPouch(item: ShelfItem): boolean {
  return POUCH.test(blob(item));
}

function isKeptTobacco(item: ShelfItem): boolean {
  const name = item.name || "";
  const slug = item.slug || "";
  if (/grabba/i.test(name) || /grabba/i.test(slug)) return false;
  return KEPT_TOBACCO.test(name) || KEPT_TOBACCO.test(slug);
}

function isVape(item: ShelfItem): boolean {
  const name = blob(item);
  if (isPouch(item)) return false;
  if (/grabba|cigarette|backwood|cigarillo/i.test(name)) return false;
  return VAPE.test(name);
}

/** Same hide rule the TV board used while the static switch was off. */
function shouldHideCigarette(item: ShelfItem): boolean {
  if (isPouch(item) || isKeptTobacco(item) || isVape(item)) return false;
  const name = item.name || "";
  const slug = item.slug || "";
  if (/grabba/i.test(name) || /grabba/i.test(slug)) return true;
  if ((item.category || "").toUpperCase() === "CIGARETTES") return true;
  return isRealCigaretteItem(item);
}

export function tv2CardItems<T extends ShelfItem>(
  items: T[],
  card: { id: string; filter: (item: T) => boolean },
  show: boolean,
  daytime: boolean,
): T[] {
  return items.filter((it) => {
    if (!show && card.id === "VAPES" && it.category === "CIGARETTES" && isPouch(it)) return true;
    if (card.id === "CIGARETTES" && !show) {
      if (isPouch(it)) return false;
      return isKeptTobacco(it) || isKeptSmokeName(it.name, it.slug);
    }
    if (!show && shouldHideCigarette(it)) return false;
    return card.filter(it);
  }).filter((it) => (show || card.id !== "CIGARETTES" ? !(daytime && isNicotineItem(it)) : true));
}

export function tv2CardTitle(card: { id: string; title: string }, show: boolean, wordingTitle?: string): string {
  if (card.id !== "CIGARETTES") return card.title;
  if (!show) return CIGARETTE_CARD_OFF_TITLE;
  const next = (wordingTitle || "").trim();
  return next || card.title;
}

export function tv2CategoryOff(cardId: string, show: boolean): boolean {
  return cardId === "CIGARETTES" && !show;
}
