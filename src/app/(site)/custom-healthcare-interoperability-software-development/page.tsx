import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { healthcareInteroperability } from "@/lib/industries/healthcare-interoperability";

export const metadata: Metadata = {
  title: { absolute: healthcareInteroperability.metaTitle },
  description: healthcareInteroperability.metaDescription,
  keywords: healthcareInteroperability.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function CustomHealthcareInteroperabilityPage() {
  return <ConnectedIndustryPage page={healthcareInteroperability} path="/custom-healthcare-interoperability-software-development" />;
}
