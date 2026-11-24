import { notFound } from "next/navigation";

/* Temporarily hidden — Industry pages (kept locally, not live)
import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { threePlManagement } from "@/lib/industries/3pl-management";

export const metadata: Metadata = {
  title: { absolute: threePlManagement.metaTitle },
  description: threePlManagement.metaDescription,
  keywords: threePlManagement.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function ThreePlManagementPage() {
  return <ConnectedIndustryPage page={threePlManagement} path="/3pl-management-software-development" />;
}
*/

export default function Page() {
  notFound();
}
