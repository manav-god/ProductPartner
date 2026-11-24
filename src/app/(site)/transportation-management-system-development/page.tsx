import { notFound } from "next/navigation";

/* Temporarily hidden — Industry pages (kept locally, not live)
import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { transportationManagement } from "@/lib/industries/transportation-management";

export const metadata: Metadata = {
  title: { absolute: transportationManagement.metaTitle },
  description: transportationManagement.metaDescription,
  keywords: transportationManagement.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function TransportationManagementPage() {
  return <ConnectedIndustryPage page={transportationManagement} path="/transportation-management-system-development" />;
}
*/

export default function Page() {
  notFound();
}
