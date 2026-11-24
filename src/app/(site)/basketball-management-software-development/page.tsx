import { notFound } from "next/navigation";

/* Temporarily hidden — Industry pages (kept locally, not live)
import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { basketballManagement } from "@/lib/industries/basketball-management";

export const metadata: Metadata = {
  title: { absolute: basketballManagement.metaTitle },
  description: basketballManagement.metaDescription,
  keywords: basketballManagement.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function BasketballManagementPage() {
  return <ConnectedIndustryPage page={basketballManagement} path="/basketball-management-software-development" />;
}
*/

export default function Page() {
  notFound();
}
