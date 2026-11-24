import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { flagFootballAppDevelopment } from "@/lib/industries/flag-football-app-development";

export const metadata: Metadata = {
  title: { absolute: flagFootballAppDevelopment.metaTitle },
  description: flagFootballAppDevelopment.metaDescription,
  keywords: flagFootballAppDevelopment.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function CustomFlagFootballAppDevelopmentPage() {
  return <ConnectedIndustryPage page={flagFootballAppDevelopment} path="/custom-flag-football-app-development" />;
}
