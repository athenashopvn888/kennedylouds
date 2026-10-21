import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { RESOURCE_BANNER, RESOURCE_HUB, RESOURCE_PAGES, type ResourceArticle } from "./resourceData";
import { gateLinks, isHiddenCigarettePath, scrubCigaretteCopy } from "../lib/cigaretteGate";
import { SHOW_CIGARETTES } from "../lib/siteConfig";
import styles from "./resources.module.css";

type ResourceViewProps = {
  article: ResourceArticle;
};

function RichText({ text }: { text: string }) {
  if (!text.includes("**") && !text.includes("](")) return <>{text}</>;
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter((part) => part.length > 0);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        const link = /^\[([^\]]+)\]\((\/[^)]*)\)$/.exec(part);
        if (link && link[2].startsWith("/") && !link[2].startsWith("//")) {
          if (!SHOW_CIGARETTES && isHiddenCigarettePath(link[2])) return null;
          return (
            <Link key={index} href={link[2]}>
              {SHOW_CIGARETTES ? link[1] : scrubCigaretteCopy(link[1])}
            </Link>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

function visibleCopy(text: string, path: string) {
  if (SHOW_CIGARETTES || path.includes("smoking-at-home-fire-safety")) return text;
  return scrubCigaretteCopy(text);
}

export default function ResourceView({ article }: ResourceViewProps) {
  const isHub = article.path === RESOURCE_HUB.path;
  const quickLinks = gateLinks(article.quickLinks);

  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <img src={RESOURCE_BANNER} alt="Kennedy Loud Cannabis resource centre" className={styles.heroImage} />
        </div>
        <div className={styles.heroText}>
          <span className={styles.eyebrow}>{visibleCopy(article.eyebrow, article.path)}</span>
          <h1>{visibleCopy(article.title, article.path)}</h1>
          {article.lastChecked ? <p className={styles.lastChecked}>Last checked: {article.lastChecked}</p> : <p>{visibleCopy(article.summary, article.path)}</p>}
        </div>
      </section>

      {isHub ? (
        <>
          <section className={styles.introBand} aria-label="Kennedy Loud resource overview">
            <div className={styles.introGrid}>
              {article.sections.map((section) => (
                <article key={section.heading} className={styles.introPanel}>
                  <h2>{visibleCopy(section.heading, article.path)}</h2>
                  <p>{visibleCopy(section.body, article.path)}</p>
                </article>
              ))}
            </div>
          </section>
          <section className={styles.gridWrap} aria-label="Kennedy Loud resource guides">
            <div className={styles.grid}>
              {RESOURCE_PAGES.map((page) => {
                if (!SHOW_CIGARETTES && isHiddenCigarettePath(page.path)) return null;
                return (
                <Link key={page.path} href={page.path} className={styles.card}>
                  <span>{visibleCopy(page.eyebrow, page.path)}</span>
                  <h2>{visibleCopy(page.title, page.path)}</h2>
                  <p>{visibleCopy(page.summary, page.path)}</p>
                  <b>Read guide</b>
                </Link>
                );
              })}
              <Link href="/guides" className={styles.card}>
                <span>Name guides</span>
                <h2>{SHOW_CIGARETTES ? "Strain, Native Cigarette & Vape Name Guides" : "Strain, Backwoods & Vape Name Guides"}</h2>
                <p>{SHOW_CIGARETTES ? "Browse Kennedy Loud name guides by shelf: strains, Native Cigarettes, Nicotine Vape, and THC Vape." : "Browse Kennedy Loud name guides by shelf: strains, Backwoods, Nicotine Vape, and THC Vape."}</p>
                <b>Browse name guides</b>
              </Link>
            </div>
          </section>
        </>
      ) : (
        <article className={styles.article}>
          <div className={styles.articleGrid}>
            <div className={styles.articleBody}>
              {article.blocks ? article.blocks.map((block, index) => {
                if (block.type === "h2") return <h2 key={`${block.type}-${index}`}><RichText text={visibleCopy(block.text, article.path)} /></h2>;
                if (block.type === "h3") return <h3 key={`${block.type}-${index}`}><RichText text={visibleCopy(block.text, article.path)} /></h3>;
                if (block.type === "list") return <ul key={`${block.type}-${index}`}>{block.items.map((item) => <li key={item}><RichText text={visibleCopy(item, article.path)} /></li>)}</ul>;
                return <p key={`${block.type}-${index}`}><RichText text={visibleCopy(block.text, article.path)} /></p>;
              }) : article.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{visibleCopy(section.heading, article.path)}</h2>
                  <p>{visibleCopy(section.body, article.path)}</p>
                </section>
              ))}
              {article.faqs?.length ? (
                <section className={styles.faqs}>
                  <h2>Frequently Asked Questions</h2>
                  {article.faqs.filter((faq) => SHOW_CIGARETTES || !/\bgrabba\b|native cigarette|cigarette/i.test(`${faq.question} ${faq.answer}`) || article.path.includes("smoking-at-home-fire-safety")).map((faq) => <div key={faq.question}><h3>{visibleCopy(faq.question, article.path)}</h3><p>{visibleCopy(faq.answer, article.path)}</p></div>)}
                </section>
              ) : null}
            </div>
            <aside className={styles.sideBox}>
              <h2>Useful links</h2>
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
              <Link href="/resources">All resources</Link>
            </aside>
          </div>
        </article>
      )}

      <Footer />
    </main>
  );
}
