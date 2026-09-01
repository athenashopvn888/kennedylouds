import Link from "next/link";
import styles from "./WeedOwnerBridge.module.css";

export function WeedOwnerBridge() {
  return (
    <section className={styles.section} aria-labelledby="homepage-weed-heading">
      <div className={styles.inner}>
        <h2 id="homepage-weed-heading">Looking for Weed in Brampton?</h2>
        <p>
          Kennedy Loud Cannabis is open <strong>24 hours</strong> at{" "}
          <strong>49 Hillcrest Ave Unit 104 in Brampton</strong>.
        </p>
        <p>
          If you use terms like <strong>weed</strong>, <strong>cannabis</strong>, <strong>bud</strong>{" "}
          or <strong>flower</strong>, our dedicated Brampton Weed Dispensary page brings the store
          details, category shortcuts and visit information together in one place for adults 19+.
        </p>
        <div className={styles.actions}>
          <Link href="/weed-dispensary-brampton/" className={styles.primary}>
            Visit Our Brampton Weed Dispensary Page
          </Link>
          <Link href="/resources/flower-tier-guide" className={styles.secondary}>
            Explore the Flower Tier Guide
          </Link>
        </div>
      </div>
    </section>
  );
}
