import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://kennedyloudcannabis.com"),
  title: {
    default: "Kennedy Loud Cannabis | 24 Hour Weed Dispensary Brampton",
    template: "%s | Kennedy Loud Cannabis",
  },
  description:
    "Kennedy Loud Cannabis is a 24-hour weed dispensary at 49 Hillcrest Ave Unit 104, Brampton, near Kennedy Rd. Flower, vapes, edibles. Call +1 (289) 206-1181. Adults 19+.",
  keywords: [
    "weed dispensary Brampton",
    "cannabis dispensary Brampton",
    "weed store Brampton",
    "24 hour dispensary Brampton",
    "Hillcrest Ave dispensary",
    "Kennedy Road Brampton weed",
    "Kennedy Loud Cannabis",
    "cheap weed Brampton",
    "dispensary near me",
    "edibles Brampton",
    "vapes",
    "pre-rolls",
    "native cigarettes Brampton",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://kennedyloudcannabis.com",
    siteName: "Kennedy Loud Cannabis",
    title: "Kennedy Loud Cannabis | 24 Hour Weed Dispensary Brampton",
    description:
      "Kennedy Loud Cannabis is a 24-hour weed dispensary at 49 Hillcrest Ave Unit 104, Brampton, near Kennedy Rd. Flower, vapes, edibles. Call +1 (289) 206-1181. Adults 19+.",
    images: [
      {
        url: "https://kennedyloudcannabis.com/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "Kennedy Loud Cannabis — 24 Hour Weed Dispensary in Brampton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kennedy Loud Cannabis | 24 Hour Weed Dispensary Brampton",
    description: "24-hour weed dispensary at 49 Hillcrest Ave Unit 104, Brampton, near Kennedy Rd. Call +1 (289) 206-1181. Adults 19+.",
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
const storeJsonLd = {
  "@context": "https://schema.org",
  "@type": "CannabisStore",
  "@id": "https://kennedyloudcannabis.com/#store",
  name: "Kennedy Loud Cannabis",
  description: "Cannabis dispensary at 49 Hillcrest Ave Unit 104 in Brampton, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open 24 Hours.",
  url: "https://kennedyloudcannabis.com/",
  telephone: "+12892061181",
  image: "https://kennedyloudcannabis.com/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "49 Hillcrest Ave Unit 104",
    addressLocality: "Brampton",
    addressRegion: "ON",
    postalCode: "L6W 1Y7",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6940006,
    longitude: -79.7477885,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: ["Brampton", "Hillcrest Ave", "Kennedy Road", "Downtown Brampton", "Queen Street"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://kennedyloudcannabis.com/#website",
  name: "Kennedy Loud Cannabis",
  url: "https://kennedyloudcannabis.com",
  publisher: { "@id": "https://kennedyloudcannabis.com/#store" },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify([storeJsonLd, websiteJsonLd]) }}
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
        <Link className="deliveryAnnouncement" href="/delivery">
          NEW DELIVERY MENU IS HERE — CLICK TO EXPLORE
        </Link>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
