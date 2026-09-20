import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyContent } from "@/components/work/CaseStudyContent";
import {
  getCaseStudy,
  getCaseStudySlugs,
} from "@/lib/case-studies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: "Case Study | Product Partner" };
  }

  const title = `${study.title} | Product Partner`;
  const description = study.lead;
  const url = `https://productpartner.net/work/${study.slug}/`;

  return {
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
      type: "article",
      siteName: "Product Partner",
      title,
      description,
      url,
      images: [{ url: study.image, alt: study.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const url = `https://productpartner.net/work/${study.slug}/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        url,
        headline: study.title,
        description: study.lead,
        image: study.image,
        dateModified: "2026-09-20",
        inLanguage: "en-US",
        author: {
          "@type": "Organization",
          name: "Product Partner",
        },
        isPartOf: { "@id": "https://productpartner.net/#website" },
        about: { "@id": "https://productpartner.net/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
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
            item: "https://productpartner.net/work/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: study.title,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyContent study={study} />
    </>
  );
}
