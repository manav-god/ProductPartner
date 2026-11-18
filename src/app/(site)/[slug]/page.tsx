import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { OfferingPage } from "@/components/services/OfferingPage";
import { getOffering, offeringPages } from "@/lib/offering-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return offeringPages.map((page) => ({ slug: page.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getOffering(slug);
  if (!page) return { title: { absolute: "Product Partner" } };

  const url = `https://productpartner.net/${page.slug}/`;

  return {
    title: page.title,
    description: page.description,
    authors: [{ name: "Product Partner" }],
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "Product Partner",
      title: page.title,
      description: page.description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export default async function OfferingRoute({ params }: PageProps) {
  const { slug } = await params;
  const page = getOffering(slug);
  if (!page) notFound();

  const url = `https://productpartner.net/${page.slug}/`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
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
                  name: "Product Development",
                  item: "https://productpartner.net/product-development/",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: page.name,
                  item: url,
                },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: page.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ],
        }}
      />
      <OfferingPage page={page} />
    </>
  );
}
