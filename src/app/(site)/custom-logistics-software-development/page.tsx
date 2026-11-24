import { notFound } from "next/navigation";

/* Temporarily hidden — Industry pages (kept locally, not live)
import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { logisticsSoftware } from "@/lib/industries/logistics-software";

export const metadata: Metadata = {
  title: { absolute: logisticsSoftware.metaTitle },
  description: logisticsSoftware.metaDescription,
  keywords: logisticsSoftware.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function CustomLogisticsSoftwarePage() {
  return <ConnectedIndustryPage page={logisticsSoftware} path="/custom-logistics-software-development" />;
}
*/

export default function Page() {
  notFound();
}
