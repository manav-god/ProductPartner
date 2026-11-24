import { notFound } from "next/navigation";

/* Temporarily hidden — Industry pages (kept locally, not live)
import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { soccerAppDevelopment } from "@/lib/industries/soccer-app-development";

export const metadata: Metadata = {
  title: { absolute: soccerAppDevelopment.metaTitle },
  description: soccerAppDevelopment.metaDescription,
  keywords: soccerAppDevelopment.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function SoccerAppDevelopmentPage() {
  return <ConnectedIndustryPage page={soccerAppDevelopment} path="/soccer-app-development" />;
}
*/

export default function Page() {
  notFound();
}
