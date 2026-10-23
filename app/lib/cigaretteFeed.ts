import { cache } from "react";
import { assembleCigaretteSnapshot, cigarettePublicHeaders, reconcileSurfaceItems, type CigaretteWording } from "./cigDecision.ts";
import { allFlowers, allItems, type ItemProduct } from "./products.ts";
import { cigaretteEnvHardOff } from "./siteConfig.ts";
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
 * TV follows tvOn. The website flag follows webOn only.
 * An env hard-off still forces the website off. Public web pages
 * keep their own static gate.
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
  return { web: snap.web.show, tv: snap.tv.show, wording: snap.wording };
}

export function snapshotHeaders(snap: { web: { show: boolean }; tv: { show: boolean }; wording: CigaretteWording }): Record<string, string> {
  return cigarettePublicHeaders({ web: snap.web.show, tv: snap.tv.show, wording: snap.wording });
}

type ShelfItem = { category?: string; name?: string; slug?: string; sku?: string };

/** TV item payload follows the TV flag. Wraps and pouches stay either way. */
export function applyTvItemPayload<T extends ShelfItem>(body: T[], snap: { tv: { show: boolean }; items: T[] }): T[] {
  return reconcileSurfaceItems(body, snap.items, snap.tv.show);
}

export { reconcileSurfaceItems };
