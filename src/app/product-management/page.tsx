import type { Metadata } from "next";
import { ProductManagementContent } from "@/components/services/ProductManagementContent";

const title =
  "Product Management Services | Product Strategy & Growth | Product Partner";
const description =
  "Product management services that connect customer needs, product strategy, technology, and growth. Build better products with Product Partner.";
const url = "https://productpartner.net/product-management/";

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
    images: [
      {
        url: "https://productpartner.net/og/product-management.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Management Services | Product Partner",
    description:
      "Product management services that connect customer needs, product strategy, technology, and growth.",
    images: ["https://productpartner.net/og/product-management.jpg"],
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
      sameAs: [
        "https://www.linkedin.com/company/productpartner",
        "https://twitter.com/productpartner",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://productpartner.net/#website",
      url: "https://productpartner.net/",
      name: "Product Partner",
      publisher: { "@id": "https://productpartner.net/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://productpartner.net/product-management/#breadcrumb",
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
          name: "Services",
          item: "https://productpartner.net/#services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Product Management",
          item: url,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://productpartner.net/product-management/#service",
      name: "Product Management Services",
      serviceType: "Product Management & Fractional Product Leadership",
      provider: { "@id": "https://productpartner.net/#organization" },
      areaServed: "Worldwide",
      audience: {
        "@type": "Audience",
        audienceType: "B2B SaaS, SportsTech, and ecommerce companies",
      },
      description:
        "Product management services covering product strategy, discovery, roadmapping, prioritization, requirements, and product growth.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Product Management Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Product Strategy & Roadmapping",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Product Discovery & User Research",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Product Prioritization & Requirements",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "B2B Product Management",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sports Technology Product Management",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ecommerce Product Management",
            },
          },
        ],
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://productpartner.net/product-management/#definition",
      name: "Product Management",
      description:
        "Product management is the discipline of identifying customer problems, defining product opportunities, prioritizing what to build, and guiding products from discovery through development and growth.",
      inDefinedTermSet: "https://productpartner.net/glossary/",
    },
    {
      "@type": "DefinedTerm",
      "@id":
        "https://productpartner.net/product-management/#product-management-debt",
      name: "Product Management Debt",
      description:
        "Product management debt happens when old assumptions, outdated priorities, fragmented customer insights, and legacy decisions continue influencing what a team builds.",
      inDefinedTermSet: "https://productpartner.net/glossary/",
    },
    {
      "@type": "WebPage",
      "@id": "https://productpartner.net/product-management/#webpage",
      url,
      name: title,
      description,
      isPartOf: { "@id": "https://productpartner.net/#website" },
      about: { "@id": "https://productpartner.net/product-management/#service" },
      breadcrumb: {
        "@id": "https://productpartner.net/product-management/#breadcrumb",
      },
      dateModified: "2026-09-19",
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      "@id": "https://productpartner.net/product-management/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does a product management consultant do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A product management consultant helps organizations make better product decisions across areas such as product strategy, discovery, roadmapping, prioritization, requirements, and product growth. Depending on the need, the engagement can support a specific product challenge or a broader product management function.",
          },
        },
        {
          "@type": "Question",
          name: "What are product management services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Product management services can include product strategy, customer discovery, user research, product roadmapping, prioritization, MVP definition, product requirements, analytics, and product growth. The exact scope depends on the product's stage, goals, customers, and internal team capabilities.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between product management and project management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Product management primarily focuses on what should be built, why it matters, who it serves, and what outcome the product should create. Project management focuses more on how and when work is planned, coordinated, delivered, and managed. The two functions can work closely together during product development.",
          },
        },
        {
          "@type": "Question",
          name: "Why is product discovery important?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Product discovery helps teams understand customer problems, validate assumptions, identify opportunities, and reduce uncertainty before committing significant development resources. It can help teams avoid building features that solve problems customers do not consider important.",
          },
        },
        {
          "@type": "Question",
          name: "When should a startup invest in product management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Startups can benefit from product management before an MVP, during MVP development, while searching for product-market fit, and as the product scales. The focus changes with each stage, from validating the problem and defining the MVP to prioritizing growth opportunities and managing a larger product portfolio.",
          },
        },
      ],
    },
  ],
};

export default function ProductManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductManagementContent />
    </>
  );
}
