import { notFound } from "next/navigation";

/* Temporarily hidden — Industry pages (kept locally, not live)
import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { pharmacyManagement } from "@/lib/industries/pharmacy-management";

export const metadata: Metadata = {
  title: { absolute: pharmacyManagement.metaTitle },
  description: pharmacyManagement.metaDescription,
  keywords: pharmacyManagement.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function PharmacyManagementPage() {
  return <ConnectedIndustryPage page={pharmacyManagement} path="/pharmacy-management-software-development" />;
}
*/

export default function Page() {
  notFound();
}
