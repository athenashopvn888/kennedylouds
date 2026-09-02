import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.brand}>KENNEDY LOUD CANNABIS</div>
            <p className={styles.desc}>
              Your local cannabis dispensary at 49 Hillcrest Ave, Unit 104,
              Brampton. Visit Kennedy Loud Cannabis for premium flower,
              edibles, vapes, cigarettes, accessories, and more. Open 24 Hours.
            </p>
            <div className={styles.buttons}>
              <Link href="/#menu" className={styles.btnPrimary}>
                View Menu
              </Link>
            </div>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Info</h3>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Address:</span>
              <span>49 Hillcrest Ave, Unit 104</span>
              <span>Brampton, ON L6W 1Y7</span>
              <span>Canada</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Phone:</span>
              <span>
                <a href="tel:+12892061181" style={{ color: "inherit" }}>
                  +1 (289) 206-1181
                </a>
              </span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span className={styles.highlight}>Open 24 Hours</span>
            </div>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/exotic-weed">Exotic Weed</Link>
              <Link href="/premium-weed">Premium Weed</Link>
              <Link href="/aaa-weed">AAA+ Weed</Link>
              <Link href="/aa-weed">AA Weed</Link>
              <Link href="/budget-weed">Budget Weed</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">Nic Vape</Link>
              <Link href="/info/nicotine-vapes-brampton">Nicotine Vapes Brampton</Link>
              <Link href="/items/vape-disposables">THC Vape</Link>
              <Link href="/items/magic">Magic Stuff</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/resources/hillcrest-ave-visit-guide">Hillcrest Visit Guide</Link>
              <Link href="/resources/weed-flower-tier-guide">Weed Flower Tier Guide</Link>
              <Link href="/resources/native-smokes-brampton-guide">Native Smokes Guide</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/delivery">DELIVERY MENU</Link>
              <Link href="/info/brampton-weed-dispensary">Brampton Dispensary</Link>
              <Link href="/info/cheap-weed-brampton">Cheap Weed Brampton</Link>
              <Link href="/info/native-cigarettes-brampton">Native Cigarettes</Link>
              <Link href="/info/weed-store-near-hillcrest-ave">Weed Store Near Hillcrest Ave</Link>
              <Link href="/weed-dispensary-brampton/">
                Kennedy Loud Cannabis Weed Dispensary in Brampton
              </Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            Copyright {new Date().getFullYear()} Kennedy Loud Cannabis. Must be
            19+ to enter. Please review posted store and menu information.
          </p>
        </div>
      </div>
    </footer>
  );
}
