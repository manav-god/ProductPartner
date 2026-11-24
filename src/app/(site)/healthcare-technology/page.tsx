import { notFound } from "next/navigation";

/* Temporarily hidden — Industry pages (kept locally, not live)
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { HealthcareTechPage } from "@/components/industries/HealthcareTechPage";
import { healthcareTechFaqs } from "@/lib/faq-catalog";
import { resolvePageFaqs } from "@/lib/resolve-faqs";
import { faqPageGraph } from "@/lib/schema";

const title = "Healthcare Technology Solutions | Product Partner";
const description =
  "Custom healthcare software for billing, interoperability, patient engagement and clinical operations. Product Partner builds practical digital health products.";

export const revalidate = 60;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  robots: { index: true, follow: true },
};

export default async function Page() {
  const faqs = await resolvePageFaqs("/healthcare-technology", healthcareTechFaqs);
  const schema = faqPageGraph("/healthcare-technology", faqs);

  return (
    <>
      {schema ? <JsonLd data={schema} /> : null}
      <HealthcareTechPage faqs={faqs} />
    </>
  );
}
*/

export default function Page() {
  notFound();
}
