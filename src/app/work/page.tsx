import type { Metadata } from "next";
import { WorkContent } from "@/components/work/WorkContent";

const title = "Our Work | Product Partner";
const description =
  "Product partnerships that deliver results. Selected engagements across product development, fractional leadership, and go-to-market.";
const url = "https://productpartner.net/work/";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Product Partner" }],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: "website",
    siteName: "Product Partner",
    title,
    description,
    url,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://productpartner.net/work/#webpage",
      url,
      name: title,
      description,
      isPartOf: { "@id": "https://productpartner.net/#website" },
      about: { "@id": "https://productpartner.net/#organization" },
      dateModified: "2026-09-20",
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://productpartner.net/work/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://productpartner.net/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Our Work",
          item: url,
        },
      ],
    },
  ],
};

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WorkContent />
    </>
  );
}
