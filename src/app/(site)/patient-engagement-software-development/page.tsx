import { notFound } from "next/navigation";

/* Temporarily hidden — Industry pages (kept locally, not live)
import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { patientEngagement } from "@/lib/industries/patient-engagement";

export const metadata: Metadata = {
  title: { absolute: patientEngagement.metaTitle },
  description: patientEngagement.metaDescription,
  keywords: patientEngagement.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function PatientEngagementPage() {
  return <ConnectedIndustryPage page={patientEngagement} path="/patient-engagement-software-development" />;
}
*/

export default function Page() {
  notFound();
}
