import { notFound } from "next/navigation";

/* Temporarily hidden — Industry pages (kept locally, not live)
import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { medicalBillingSoftwareDevelopment } from "@/lib/industries/medical-billing-software-development";

export const metadata: Metadata = {
  title: { absolute: medicalBillingSoftwareDevelopment.metaTitle },
  description: medicalBillingSoftwareDevelopment.metaDescription,
  keywords: medicalBillingSoftwareDevelopment.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function CustomMedicalBillingSoftwareDevelopmentPage() {
  return <ConnectedIndustryPage page={medicalBillingSoftwareDevelopment} path="/custom-medical-billing-software-development" />;
}
*/

export default function Page() {
  notFound();
}
