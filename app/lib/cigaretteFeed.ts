import { cache } from "react";
import { SHOW_CIGARETTES } from "./siteConfig.ts";

export type CigaretteSnapshot = {
  web: { show: boolean };
  tv: { show: boolean };
  guides: { show: boolean };
};

/**
 * Coded cigarette flags for /api/content-status.
 * Public cigarette, native, and grabba URLs keep the redirects in
 * next.config.ts and proxy.ts. This snapshot does not replace them.
 */
export function readCigaretteSnapshot(): CigaretteSnapshot {
  const show = SHOW_CIGARETTES;
  return { web: { show }, tv: { show }, guides: { show } };
}

export const getCigaretteSnapshot = cache(async () => readCigaretteSnapshot());
