import { notFound } from "next/navigation";

/* Temporarily hidden — Industry pages (kept locally, not live)
import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { laboratoryManagement } from "@/lib/industries/laboratory-management";

export const metadata: Metadata = {
  title: { absolute: laboratoryManagement.metaTitle },
  description: laboratoryManagement.metaDescription,
  keywords: laboratoryManagement.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function LaboratoryManagementPage() {
  return <ConnectedIndustryPage page={laboratoryManagement} path="/laboratory-management-software-development" />;
}
*/

export default function Page() {
  notFound();
}
