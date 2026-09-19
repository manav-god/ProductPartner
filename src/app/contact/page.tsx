import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";

const title = "Contact — Product Partner";
const description =
  "Get in touch with Product Partner. Tell us what you're building — we'll help shape the roadmap, team, and delivery plan.";
const url = "https://productpartner.net/contact/";

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
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url,
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://productpartner.net/contact/#webpage",
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
      "@id": "https://productpartner.net/contact/#breadcrumb",
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
          name: "Contact",
          item: url,
        },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactContent />
    </>
  );
}
