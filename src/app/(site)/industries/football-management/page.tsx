import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { footballManagement } from "@/lib/industries/football-management";

export const metadata: Metadata = {
  title: { absolute: footballManagement.metaTitle },
  description: footballManagement.metaDescription,
  keywords: footballManagement.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function FootballManagementPage() {
  return <ConnectedIndustryPage page={footballManagement} path="/industries/football-management" />;
}
