import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { clinicalDecisionSupport } from "@/lib/industries/clinical-decision-support";

export const metadata: Metadata = {
  title: { absolute: clinicalDecisionSupport.metaTitle },
  description: clinicalDecisionSupport.metaDescription,
  keywords: clinicalDecisionSupport.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function ClinicalDecisionSupportPage() {
  return <ConnectedIndustryPage page={clinicalDecisionSupport} path="/clinical-decision-support-software-development" />;
}
