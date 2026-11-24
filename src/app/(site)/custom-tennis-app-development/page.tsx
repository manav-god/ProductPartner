import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { tennisAppDevelopment } from "@/lib/industries/tennis-app-development";

export const metadata: Metadata = {
  title: { absolute: tennisAppDevelopment.metaTitle },
  description: tennisAppDevelopment.metaDescription,
  keywords: tennisAppDevelopment.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function CustomTennisAppDevelopmentPage() {
  return <ConnectedIndustryPage page={tennisAppDevelopment} path="/custom-tennis-app-development" />;
}
