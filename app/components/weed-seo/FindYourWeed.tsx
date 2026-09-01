import Link from "next/link";
import styles from "./FindYourWeed.module.css";

export type WeedDiscoveryItem = {
  label: string;
  description: string;
  href: string;
};

export type WeedDiscoveryGroup = {
  heading: string;
  items: WeedDiscoveryItem[];
};

type FindYourWeedProps = {
  groups: WeedDiscoveryGroup[];
  guide?: WeedDiscoveryItem;
  storeName: string;
};

export function FindYourWeed({ groups, guide, storeName }: FindYourWeedProps) {
  return (
    <section id="find-your-weed" className={styles.discovery} aria-labelledby="find-your-weed-heading">
      <h2 id="find-your-weed-heading">Find Your Weed</h2>
      <p>
        Not everyone shops for cannabis the same way. Some people know the exact format they want;
        others want to start with flower and narrow things down from there.
      </p>
      <p>Use these shortcuts to explore {storeName} by category.</p>

      {groups.map((group) => (
        <div key={group.heading} className={styles.group}>
          <h3>{group.heading}</h3>
          <div className={styles.grid}>
            {group.items.map((item) => (
              <Link key={item.href} href={item.href} className={styles.card}>
                <strong>{item.label}</strong>
                <span>{item.description}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {guide ? (
        <p className={styles.guide}>
          Want to understand how these sections are organized before browsing?{" "}
          <Link href={guide.href}>{guide.label}</Link>
        </p>
      ) : null}

      <p className={styles.disclaimer}>
        These links help you navigate the {storeName} website by category. They do not
        indicate current stock, price, promotion or product availability. Check the current menu
        for specific product details.
      </p>
    </section>
  );
}
