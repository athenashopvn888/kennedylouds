import Link from "next/link";
import {
  PARITY_HUB_LINKS,
  TIER_HUB_LINKS,
  VISIT_HUB_LINKS,
  normalizeHubPath,
} from "../lib/sccParityHub";
import styles from "./ParityHubNav.module.css";

type ParityHubNavProps = {
  currentPath: string;
  heading?: string;
  showGeoNote?: boolean;
};

export function ParityHubNav({
  currentPath,
  heading = "Hillcrest / Kennedy hubs and flower tiers",
  showGeoNote = false,
}: ParityHubNavProps) {
  const current = normalizeHubPath(currentPath);

  return (
    <nav className={styles.hub} aria-label="Hillcrest and Kennedy visit hubs">
      <h2 className={styles.heading}>{heading}</h2>
      {showGeoNote ? (
        <p className={styles.body}>
          Kennedy Loud Cannabis is the Hillcrest Ave / Kennedy Road walk-in at 49 Hillcrest Ave
          Unit 104 in central Brampton. That is not a Queen Street West downtown door.
        </p>
      ) : (
        <p className={styles.body}>
          Use the Unit 104 visit guides, then open one of the five flower collections at the
          Hillcrest / Kennedy counter.
        </p>
      )}
      <span className={styles.groupLabel}>Visit hubs</span>
      <div className={styles.list}>
        {VISIT_HUB_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.link}
            aria-current={normalizeHubPath(link.href) === current ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <span className={styles.groupLabel}>Five flower tiers</span>
      <div className={styles.list}>
        {TIER_HUB_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.link}
            aria-current={normalizeHubPath(link.href) === current ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export const PARITY_HUB_LINK_HREFS = PARITY_HUB_LINKS.map((link) => link.href);
