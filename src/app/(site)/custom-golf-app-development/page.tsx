import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { golfAppDevelopment } from "@/lib/industries/golf-app-development";

export const metadata: Metadata = {
  title: { absolute: golfAppDevelopment.metaTitle },
  description: golfAppDevelopment.metaDescription,
  keywords: golfAppDevelopment.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function CustomGolfAppDevelopmentPage() {
  return <ConnectedIndustryPage page={golfAppDevelopment} path="/custom-golf-app-development" />;
}
