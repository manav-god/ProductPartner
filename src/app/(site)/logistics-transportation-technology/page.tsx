import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { LogisticsTechPage } from "@/components/industries/LogisticsTechPage";
import { logisticsTechFaqs } from "@/lib/faq-catalog";
import { resolvePageFaqs } from "@/lib/resolve-faqs";
import { faqPageGraph } from "@/lib/schema";

const title = "Logistics & Transportation Technology Solutions | Product Partner";
const description =
  "Custom logistics software for transportation, freight, fleet and delivery operations. Product Partner builds practical supply chain platforms.";

export const revalidate = 60;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  robots: { index: true, follow: true },
};

export default async function Page() {
  const faqs = await resolvePageFaqs("/logistics-transportation-technology", logisticsTechFaqs);
  const schema = faqPageGraph("/logistics-transportation-technology", faqs);

  return (
    <>
      {schema ? <JsonLd data={schema} /> : null}
      <LogisticsTechPage faqs={faqs} />
    </>
  );
}
