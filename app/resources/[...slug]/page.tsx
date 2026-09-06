import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResourceView from "../ResourceView";
import { RESOURCE_PAGES, RESOURCE_SITE, getResourceBySegments } from "../resourceData";

export function generateStaticParams() {
  return RESOURCE_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getResourceBySegments(slug);
  if (!page) return {};

  return {
    title: { absolute: page.seoTitle ?? page.title },
    description: page.metaDescription,
    alternates: { canonical: `${RESOURCE_SITE}${page.path}` },
  };
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = getResourceBySegments(slug);
  if (!page) notFound();

  const canonical = `${RESOURCE_SITE}${page.path}`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.title,
      description: page.metaDescription,
      mainEntityOfPage: canonical,
      author: { "@type": "Organization", name: "Kennedy Loud Cannabis" },
      publisher: { "@type": "Organization", name: "Kennedy Loud Cannabis" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: RESOURCE_SITE },
        { "@type": "ListItem", position: 2, name: "Resources", item: `${RESOURCE_SITE}/resources` },
        { "@type": "ListItem", position: 3, name: page.title, item: canonical },
      ],
    },
    ...(page.faqs?.length ? [{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    }] : []),
  ];

  return <><ResourceView article={page} />{schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />)}</>;
}
