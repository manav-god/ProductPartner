import type { Metadata } from "next";
import { ProductDevelopmentContent } from "@/components/services/ProductDevelopmentContent";

const title =
  "Product Development Services | MVP & Product Engineering | Product Partner";
const description =
  "Product development services for startups and businesses in the USA. From product discovery and MVP development to product engineering, launch, and scale.";
const url = "https://productpartner.net/product-development/";

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
        url: "https://productpartner.net/og/product-development.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Development Services | Product Partner",
    description:
      "From product discovery and MVP development to product engineering, launch, and scale.",
    images: ["https://productpartner.net/og/product-development.jpg"],
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
      "@id": "https://productpartner.net/product-development/#breadcrumb",
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
          name: "Product Development",
          item: url,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://productpartner.net/product-development/#service",
      name: "Product Development Services",
      serviceType: "Product Development & Engineering",
      provider: { "@id": "https://productpartner.net/#organization" },
      areaServed: "Worldwide",
      audience: {
        "@type": "Audience",
        audienceType: "B2B SaaS, SportsTech, and ecommerce companies",
      },
      description:
        "Product development services covering discovery, MVP development, UX/UI design, engineering, launch, and post-launch iteration.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Product Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Product Discovery & Validation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "MVP Product Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Product Design & Prototyping",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Product Engineering & Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Product Launch & Deployment",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Post-Launch Product Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "B2B Product Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sports Technology Product Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ecommerce Product Development",
            },
          },
        ],
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://productpartner.net/product-development/#definition",
      name: "Product Development",
      description:
        "Product development is the process of turning a product opportunity or idea into a usable, tested, launched, and continuously improved product.",
      inDefinedTermSet: "https://productpartner.net/glossary/",
    },
    {
      "@type": "DefinedTerm",
      "@id":
        "https://productpartner.net/product-development/#product-development-debt",
      name: "Product Development Debt",
      description:
        "Product development debt happens when rushed product decisions, unclear requirements, weak architecture, fragmented systems, and short-term fixes accumulate and make future development harder.",
      inDefinedTermSet: "https://productpartner.net/glossary/",
    },
    {
      "@type": "WebPage",
      "@id": "https://productpartner.net/product-development/#webpage",
      url,
      name: title,
      description,
      isPartOf: { "@id": "https://productpartner.net/#website" },
      about: { "@id": "https://productpartner.net/product-development/#service" },
      breadcrumb: {
        "@id": "https://productpartner.net/product-development/#breadcrumb",
      },
      dateModified: "2026-09-19",
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      "@id": "https://productpartner.net/product-development/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is product development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Product development is the process of turning a product opportunity or idea into a usable, tested, launched, and continuously improved product. It can include discovery, validation, UX/UI design, prototyping, MVP development, engineering, testing, deployment, analytics, and post-launch iteration.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between product development and software development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Software development primarily focuses on designing, coding, testing, and maintaining software. Product development is broader and connects customer problems, product strategy, user experience, technology, engineering, launch, and ongoing product improvement.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in product development services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Product development services can include product discovery, validation, MVP strategy, UX/UI design, prototyping, software engineering, API integrations, quality assurance, deployment, analytics, product launch, and post-launch improvements.",
          },
        },
        {
          "@type": "Question",
          name: "How long does product development take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Product development timelines vary based on product complexity, scope, platform requirements, integrations, design needs, technical dependencies, and validation requirements. A focused MVP generally requires less time than a full-scale product.",
          },
        },
        {
          "@type": "Question",
          name: "Can you develop an MVP before building the full product?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. An MVP can help teams test the core product experience and important assumptions before investing in a larger product. The goal is to identify the smallest useful version that can provide meaningful feedback from real users while creating a foundation for future development.",
          },
        },
      ],
    },
  ],
};

export default function ProductDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDevelopmentContent />
    </>
  );
}
