import { AreaIntentPage } from "./AreaIntentPage";
import guideData from "../lib/routeGuides.generated.json";

const tierHrefs = ["/exotic-weed", "/premium-weed", "/aaa-weed", "/aa-weed", "/budget-weed"];

export function GeneratedGuidePage({ guideKey, eyebrow, h1 }: { guideKey: keyof typeof guideData; eyebrow: string; h1: string }) {
  const guide = guideData[guideKey];
  return <AreaIntentPage
    eyebrow={eyebrow}
    h1={h1}
    addressLine="Destination: 49 Hillcrest Ave Unit 104, Brampton, ON L6W 1Y7"
    storeHref="/weed-dispensary-brampton/"
    storeLabel="Brampton visit details"
    intro={guide.paragraphs}
    mapAddress={guide.mapAddress}
    faq={guide.faq}
    relatedLinks={guide.links.map((label, index) => ({ label, href: tierHrefs[index] || "/budget-weed" }))}
  />;
}
