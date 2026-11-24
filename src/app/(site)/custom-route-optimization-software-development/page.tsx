import { notFound } from "next/navigation";

/* Temporarily hidden — Industry pages (kept locally, not live)
import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { routeOptimization } from "@/lib/industries/route-optimization";

export const metadata: Metadata = {
  title: { absolute: routeOptimization.metaTitle },
  description: routeOptimization.metaDescription,
  keywords: routeOptimization.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function RouteOptimizationPage() {
  return <ConnectedIndustryPage page={routeOptimization} path="/custom-route-optimization-software-development" />;
}
*/

export default function Page() {
  notFound();
}
