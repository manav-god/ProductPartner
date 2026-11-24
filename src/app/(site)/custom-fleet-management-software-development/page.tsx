import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { fleetManagement } from "@/lib/industries/fleet-management";

export const metadata: Metadata = {
  title: { absolute: fleetManagement.metaTitle },
  description: fleetManagement.metaDescription,
  keywords: fleetManagement.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function FleetManagementPage() {
  return <ConnectedIndustryPage page={fleetManagement} path="/custom-fleet-management-software-development" />;
}
