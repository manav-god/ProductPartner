import { JsonLd } from "@/components/seo/JsonLd";
import { resolvePageFaqs } from "@/lib/resolve-faqs";
import { faqPageGraph } from "@/lib/schema";
import type { IndustryPageData } from "@/lib/industries/types";
import { IndustryPage } from "./IndustryPage";

export async function ConnectedIndustryPage({
  page,
  path,
}: {
  page: IndustryPageData;
  path: string;
}) {
  const faqs = await resolvePageFaqs(path, page.faqs.items);
  const schema = faqPageGraph(path, faqs);

  return (
    <>
      {schema ? <JsonLd data={schema} /> : null}
      <IndustryPage page={{ ...page, faqs: { ...page.faqs, items: faqs } }} />
    </>
  );
}
