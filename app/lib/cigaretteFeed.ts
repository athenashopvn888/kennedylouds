import { cache } from "react";
import { assembleCigaretteSnapshot, cigarettePublicHeaders, publicWebsiteCigaretteFlag, reconcileSurfaceItems, type CigaretteSurfaceDecision, type CigaretteWording } from "./cigDecision.ts";
import { allFlowers, allItems, type ItemProduct } from "./products.ts";
import { cigaretteEnvHardOff, SHOW_CIGARETTES } from "./siteConfig.ts";
import { getCigaretteDataset } from "./tvStock";

export type CigaretteSnapshot = ReturnType<typeof assembleCigaretteSnapshot> & {
  items: ItemProduct[];
};

export type PublicCigaretteState = {
  web: boolean;
  tv: boolean;
  wording: CigaretteWording;
};

function snapshotFrom(cig: unknown, items: ItemProduct[], live: boolean, errored: boolean): CigaretteSnapshot {
  return { ...assembleCigaretteSnapshot({ cig, items, live, errored }), items };
}

/**
 * Live cigarette flags for TV boards and /api/content-status.
 * TV follows tvOn and hides when the feed errors or the block is missing.
 * A recent successful snapshot can still be served for its normal cache window.
 * The public website flag is SHOW_CIGARETTES and webOn, and stays off on a feed error.
 */
export async function readCigaretteFeed(): Promise<CigaretteSnapshot> {
  if (cigaretteEnvHardOff()) return snapshotFrom(null, [], false, false);
  try {
    const dataset = await getCigaretteDataset({
      staticFlowers: allFlowers,
      staticItems: allItems,
    });
    const live = dataset?.source === "live";
    const items = Array.isArray(dataset?.items) ? dataset.items as ItemProduct[] : allItems;
    const cig = dataset?.cig ?? null;
    return snapshotFrom(cig, items.length ? items : allItems, live, !live && !cig);
  } catch {
    return snapshotFrom(null, allItems, false, true);
  }
}

export const getCigaretteSnapshot = cache(readCigaretteFeed);

export function toPublicCigaretteState(snap: CigaretteSnapshot): PublicCigaretteState {
  return {
    web: publicWebsiteCigaretteFlag(snap.web, SHOW_CIGARETTES),
    tv: snap.tv.show,
    wording: snap.wording,
  };
}

export function snapshotHeaders(snap: { web: CigaretteSurfaceDecision; tv: { show: boolean }; wording: CigaretteWording }): Record<string, string> {
  return cigarettePublicHeaders({
    web: publicWebsiteCigaretteFlag(snap.web, SHOW_CIGARETTES),
    tv: snap.tv.show,
    wording: snap.wording,
  });
}

type ShelfItem = { category?: string; name?: string; slug?: string; sku?: string };

/** TV item payload follows the TV flag. Wraps and pouches stay either way. */
export function applyTvItemPayload<T extends ShelfItem>(body: T[], snap: { tv: { show: boolean }; items: T[] }): T[] {
  return reconcileSurfaceItems(body, snap.items, snap.tv.show);
}

export { reconcileSurfaceItems };
