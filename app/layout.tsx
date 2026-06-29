import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://kennedyloudcannabis.com"),
  title: {
    default: "Kennedy Road Brampton Dispensary | Kennedy Loud Cannabis",
    template: "%s | Kennedy Loud Cannabis",
  },
  description:
    "Kennedy Loud Cannabis is a Brampton dispensary near Kennedy Rd and Hillcrest Ave with flower, pre-rolls, vapes, edibles, concentrates, accessories, and adult 19+ info. Open 24 Hours.",
  keywords: [
    "cannabis dispensary Brampton",
    "weed store Brampton",
    "exotic flower Brampton",
    "premium cannabis",
    "Kennedy Loud Cannabis",
    "cheap weed Brampton",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles Brampton",
    "vapes",
    "pre-rolls",
    "native cigarettes Brampton",
    "weed store Brampton",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://kennedyloudcannabis.com",
    siteName: "Kennedy Loud Cannabis",
    title: "Kennedy Road Brampton Dispensary | Kennedy Loud Cannabis",
    description:
      "Kennedy Loud Cannabis is a Brampton dispensary near Kennedy Rd and Hillcrest Ave with flower, pre-rolls, vapes, edibles, concentrates, accessories, and adult 19+ info. Open 24 Hours.",
    images: [
      {
        url: "https://kennedyloudcannabis.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "Kennedy Loud Cannabis — Premium Cannabis Dispensary Brampton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kennedy Road Brampton Dispensary | Kennedy Loud Cannabis",
    description: "Kennedy Loud Cannabis is a Brampton dispensary near Kennedy Rd and Hillcrest Ave with flower, pre-rolls, vapes, edibles, concentrates, accessories, and adult 19+ info. Open 24 Hours.",
    images: ["https://kennedyloudcannabis.com/wp-content/uploads/2026/04/46Oi5.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://kennedyloudcannabis.com",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://kennedyloudcannabis.com",
  name: "Kennedy Loud Cannabis",
  description: "Cannabis dispensary at 49 Hillcrest Ave, Unit 104 in Brampton, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open 24 Hours.",
  url: "https://kennedyloudcannabis.com",
  telephone: "+14372372286",
  image: "https://kennedyloudcannabis.com/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "49 Hillcrest Ave, Unit 104",
    addressLocality: "Brampton",
    addressRegion: "ON",
    postalCode: "L6W 1Y7",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6894,
    longitude: -79.7516,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Brampton",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0JBPDPJ0VX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0JBPDPJ0VX');
            `
          }}
        />
      </head>
      <body>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
