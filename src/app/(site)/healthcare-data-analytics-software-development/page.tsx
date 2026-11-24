import { notFound } from "next/navigation";

/* Temporarily hidden — Industry pages (kept locally, not live)
import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { healthcareDataAnalytics } from "@/lib/industries/healthcare-data-analytics";

export const metadata: Metadata = {
  title: { absolute: healthcareDataAnalytics.metaTitle },
  description: healthcareDataAnalytics.metaDescription,
  keywords: healthcareDataAnalytics.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function HealthcareDataAnalyticsPage() {
  return <ConnectedIndustryPage page={healthcareDataAnalytics} path="/healthcare-data-analytics-software-development" />;
}
*/

export default function Page() {
  notFound();
}
