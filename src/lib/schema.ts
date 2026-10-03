import type { FaqItem } from "@/lib/page-faqs";

const siteUrl = "https://productpartner.net";

type GraphNode = {
  "@type"?: string;
  [key: string]: unknown;
};

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Product Partner",
    url: `${siteUrl}/`,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
    },
    sameAs: [
      "https://www.linkedin.com/company/productpartner",
      "https://twitter.com/productpartner",
    ],
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: `${siteUrl}/`,
    name: "Product Partner",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function pageUrl(path: string) {
  if (path === "/") return `${siteUrl}/`;
  return `${siteUrl}${path.replace(/\/$/, "")}/`;
}

export function faqEntities(faqs: FaqItem[]) {
  return faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  }));
}

export function applyAdminSchema<T extends GraphNode>(
  graph: T[],
  seo: { metaTitle: string; metaDescription: string; faqs: FaqItem[] },
) {
  return graph.flatMap((node) => {
    if (node["@type"] === "WebPage") {
      return [
        {
          ...node,
          name: seo.metaTitle,
          description: seo.metaDescription,
        },
      ];
    }

    if (node["@type"] === "FAQPage") {
      if (!seo.faqs.length) return [];
      return [
        {
          ...node,
          mainEntity: faqEntities(seo.faqs),
        },
      ];
    }

    return [node];
  });
}

export function pageGraph({
  path,
  name,
  description,
  crumbs,
}: {
  path: string;
  name: string;
  description: string;
  crumbs: { name: string; path: string }[];
}) {
  const url = pageUrl(path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      websiteNode(),
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: crumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: pageUrl(crumb.path),
        })),
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: "en-US",
      },
    ],
  };
}
