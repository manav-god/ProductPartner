import type { Metadata } from "next";
import { ProductMarketingContent } from "@/components/services/ProductMarketingContent";

const title =
  "Product Marketing Services | Positioning, GTM & SEO/AEO/GEO | Product Partner";
const description =
  "Product marketing services for B2B, SportsTech and ecommerce brands. From positioning and messaging to go-to-market strategy, SEO, AEO, GEO, and demand generation.";
const url = "https://productpartner.net/product-marketing/";

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
        url: "https://productpartner.net/og/product-marketing.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Marketing Services | Product Partner",
    description:
      "Positioning, messaging, go-to-market strategy, SEO, AEO, GEO, and demand generation for B2B, SportsTech, and ecommerce brands.",
    images: ["https://productpartner.net/og/product-marketing.jpg"],
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
      "@id": "https://productpartner.net/product-marketing/#breadcrumb",
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
          name: "Product Marketing",
          item: url,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://productpartner.net/product-marketing/#service",
      name: "Product Marketing Services",
      serviceType: "Product Marketing",
      provider: { "@id": "https://productpartner.net/#organization" },
      areaServed: "Worldwide",
      audience: {
        "@type": "Audience",
        audienceType: "B2B SaaS, SportsTech, and ecommerce companies",
      },
      description:
        "Product marketing services covering positioning, messaging, go-to-market strategy, competitive intelligence, demand generation, and SEO/AEO/GEO content strategy.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Product Marketing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Product Positioning & Messaging",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Go-to-Market Strategy",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO, AEO & GEO for Product Discovery",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Competitive & Market Intelligence",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Demand Generation & Content",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Post-Launch Growth & Iteration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "B2B Product Marketing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sports Technology Product Marketing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ecommerce Product Marketing",
            },
          },
        ],
      },
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://productpartner.net/product-marketing/#definition",
      name: "Product Marketing",
      description:
        "Product marketing is the discipline of positioning, messaging, launching, promoting, and growing a product based on customer needs and market opportunities.",
      inDefinedTermSet: "https://productpartner.net/glossary/",
    },
    {
      "@type": "DefinedTerm",
      "@id":
        "https://productpartner.net/product-marketing/#product-marketing-debt",
      name: "Product Marketing Debt",
      description:
        "Product marketing debt happens when outdated claims, inconsistent terminology, changing customer objections, and new competitors accumulate and make messaging harder to trust.",
      inDefinedTermSet: "https://productpartner.net/glossary/",
    },
    {
      "@type": "WebPage",
      "@id": "https://productpartner.net/product-marketing/#webpage",
      url,
      name: title,
      description,
      isPartOf: { "@id": "https://productpartner.net/#website" },
      about: { "@id": "https://productpartner.net/product-marketing/#service" },
      breadcrumb: {
        "@id": "https://productpartner.net/product-marketing/#breadcrumb",
      },
      dateModified: "2026-09-19",
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      "@id": "https://productpartner.net/product-marketing/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does a product marketing agency do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A product marketing agency helps a business research its market, define product positioning, develop messaging, plan go-to-market activity, support demand generation, and improve how the product is discovered and understood.",
          },
        },
        {
          "@type": "Question",
          name: "What's the difference between product marketing and digital marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digital marketing primarily describes channels and tactics such as search, social, email, and paid media. Product marketing starts with the product, customer, market, and competitive landscape, then connects that understanding to messaging and channels.",
          },
        },
        {
          "@type": "Question",
          name: "Why do B2B companies need product marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "B2B products often involve longer buying cycles, multiple stakeholders, technical requirements, and higher consideration. Product marketing helps translate product capabilities into business value and gives sales and marketing teams consistent positioning.",
          },
        },
        {
          "@type": "Question",
          name: "Can product marketing improve SEO and AI search visibility?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Product marketing supplies the customer language, product context, questions, positioning, and evidence that can make content more useful for traditional search, answer engines, and generative AI search experiences.",
          },
        },
        {
          "@type": "Question",
          name: "When should a startup invest in product marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Startups can use product marketing before launch, during go-to-market, and after launch. The scope can begin with positioning and buyer research, then expand into messaging, content, sales enablement, search, and product growth.",
          },
        },
      ],
    },
  ],
};

export default function ProductMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductMarketingContent />
    </>
  );
}
