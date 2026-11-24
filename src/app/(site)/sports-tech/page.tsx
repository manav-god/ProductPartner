import { notFound } from "next/navigation";

/* Temporarily hidden — Industry pages (kept locally, not live)
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { SportsTechPage } from "@/components/industries/SportsTechPage";
import { sportsTechFaqs } from "@/lib/faq-catalog";
import { resolvePageFaqs } from "@/lib/resolve-faqs";
import { faqPageGraph } from "@/lib/schema";

const title = "Sports Tech Solutions for Every Sport | Product Partner";
const description =
  "Custom sports technology for leagues, clubs, teams and tournament organizers. Product Partner builds management platforms, apps and competition systems.";

export const revalidate = 60;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  robots: { index: true, follow: true },
};

export default async function Page() {
  const faqs = await resolvePageFaqs("/sports-tech", sportsTechFaqs);
  const schema = faqPageGraph("/sports-tech", faqs);

  return (
    <>
      {schema ? <JsonLd data={schema} /> : null}
      <SportsTechPage faqs={faqs} />
    </>
  );
}
*/

export default function Page() {
  notFound();
}
