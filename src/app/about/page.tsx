import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";

const title = "About | Product Partner";
const description =
  "The story behind Product Partner, how Manav Shah and Arjun Gautami built a company that owns both product decisions and delivery.";
const url = "https://productpartner.net/about/";

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
      "@type": "Organization",
      "@id": "https://productpartner.net/#organization",
      name: "Product Partner",
      url: "https://productpartner.net/",
      logo: {
        "@type": "ImageObject",
        url: "https://productpartner.net/logo.png",
      },
      founder: [
        {
          "@type": "Person",
          name: "Manav Shah",
          jobTitle: "Co-founder & CEO",
        },
        {
          "@type": "Person",
          name: "Arjun Gautami",
          jobTitle: "Co-founder & CTO",
        },
      ],
      sameAs: [
        "https://www.linkedin.com/company/productpartner",
        "https://twitter.com/productpartner",
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://productpartner.net/about/#webpage",
      url,
      name: title,
      description,
      isPartOf: { "@id": "https://productpartner.net/#website" },
      about: { "@id": "https://productpartner.net/#organization" },
      dateModified: "2026-09-19",
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://productpartner.net/about/#breadcrumb",
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
          name: "About",
          item: url,
        },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutContent />
    </>
  );
}
