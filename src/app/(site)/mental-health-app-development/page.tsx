import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { mentalHealthApp } from "@/lib/industries/mental-health-app";

export const metadata: Metadata = {
  title: { absolute: mentalHealthApp.metaTitle },
  description: mentalHealthApp.metaDescription,
  keywords: mentalHealthApp.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function MentalHealthAppPage() {
  return <ConnectedIndustryPage page={mentalHealthApp} path="/mental-health-app-development" />;
}
