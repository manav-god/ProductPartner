import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { lastMileDelivery } from "@/lib/industries/last-mile-delivery";

export const metadata: Metadata = {
  title: { absolute: lastMileDelivery.metaTitle },
  description: lastMileDelivery.metaDescription,
  keywords: lastMileDelivery.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function LastMileDeliveryPage() {
  return <ConnectedIndustryPage page={lastMileDelivery} path="/last-mile-delivery-software-development" />;
}
