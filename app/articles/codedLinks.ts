import { RESOURCE_PAGES } from "../resources/resourceData";

const LOCAL_GUIDES = [
  { slug: "brampton-go-kennedy-loud", title: "Brampton GO to Hillcrest Ave Dispensary | Kennedy Loud", href: "/resources/local-guides/brampton-go-kennedy-loud" },
  { slug: "main-street-brampton-to-kennedy-loud", title: "Main Street to Brampton Weed Dispensary | Hillcrest Ave", href: "/resources/local-guides/main-street-brampton-to-kennedy-loud" },
  { slug: "queen-street-to-hillcrest-brampton", title: "Queen Street to Brampton Weed Dispensary | Hillcrest Ave", href: "/resources/local-guides/queen-street-to-hillcrest-brampton" },
  { slug: "zum-kennedy-dispensary", title: "Kennedy Road Transit to Brampton Weed Dispensary | Open 24 Hours", href: "/resources/local-guides/zum-kennedy-dispensary" },
] as const;

export function codedArticleLinks() {
  const fromResources = RESOURCE_PAGES.flatMap((page) => {
    const slug = page.slug.filter(Boolean).join("/");
    if (!slug) return [];
    return [{ slug, title: page.title, href: page.path }];
  });
  return [...fromResources, ...LOCAL_GUIDES];
}
