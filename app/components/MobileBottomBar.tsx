"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FULL_NAME_NAP } from "../lib/fullNameNap";
import { storeHoursStatus } from "../lib/storeHoursStatus";
import { useFleetContent } from "./fleet/FleetContentProvider";
import styles from "./MobileBottomBar.module.css";

const HIDDEN_PATHS = new Set(["/tv", "/tv2"]);

function isHiddenPath(pathname: string | null) {
  if (!pathname) return false;
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return HIDDEN_PATHS.has(path);
}

/**
 * Mobile-only sticky actions. Directions uses this store's Google Business Profile pin.
 * Hours copy is computed in America/Toronto from the site's opening hours.
 * Hidden on the in-store boards at /tv and /tv2.
 */
export default function MobileBottomBar() {
  const pathname = usePathname();
  const hidden = isHiddenPath(pathname);
  const { nap } = useFleetContent();
  const mapsHref = nap.mapsSearchUrl || FULL_NAME_NAP.mapsUrl;
  const [status, setStatus] = useState(() => storeHoursStatus(new Date()));

  useEffect(() => {
    if (hidden) return;
    const update = () => setStatus(storeHoursStatus(new Date()));
    update();
    const id = window.setInterval(update, 30_000);
    return () => window.clearInterval(id);
  }, [hidden]);

  if (hidden) {
    return (
      <style data-mobile-bottom-bar-hidden="">
        {`@media (max-width: 768px) { body { padding-bottom: 0 !important; } }`}
      </style>
    );
  }

  return (
    <div
      className={styles.bar}
      role="navigation"
      aria-label="Store actions"
      data-mobile-bottom-bar=""
      data-hours-kind={status.kind}
      suppressHydrationWarning
    >
      <a
        className={`${styles.action} ${styles.directions}`}
        href={mapsHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        Directions
      </a>
      <Link className={`${styles.action} ${styles.hours}`} href="/hours">
        <span className={styles.srOnly}>Hours. </span>
        <span className={styles.hoursLabel} suppressHydrationWarning>
          {status.label}
        </span>
      </Link>
      <Link className={`${styles.action} ${styles.minor}`} href="/exotic-weed">
        Menu
      </Link>
      <Link className={`${styles.action} ${styles.minor}`} href="/delivery">
        Delivery
      </Link>
    </div>
  );
}
