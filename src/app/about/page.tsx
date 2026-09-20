import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";

const title = "About | Product Partner";
const description =
  "Two co-founders kept watching well-built products fail. Product Partner is the team they built to close that gap: we shape the product, build it, and stay for growth.";
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
    description:
      "Two founders. One recurring failure. One partner. The story behind Product Partner.",
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
      founders: [
        {
          "@type": "Person",
          name: "Manav Shah",
          jobTitle: "Co-founder and CEO",
        },
        {
          "@type": "Person",
          name: "Arjun Gautami",
          jobTitle: "Co-founder and CTO",
        },
      ],
      email: "manav@productpartner.net",
      telephone: "+91-7383857958",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressCountry: "India",
      },
    },
    {
      "@type": "AboutPage",
      "@id": "https://productpartner.net/about#webpage",
      url,
      name: title,
      description:
        "Two co-founders kept watching well-built products fail. Product Partner is the team they built to close that gap.",
      dateModified: "2026-09-20",
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
