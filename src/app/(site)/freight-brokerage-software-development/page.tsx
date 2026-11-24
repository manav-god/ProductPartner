import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { freightBrokerage } from "@/lib/industries/freight-brokerage";

export const metadata: Metadata = {
  title: { absolute: freightBrokerage.metaTitle },
  description: freightBrokerage.metaDescription,
  keywords: freightBrokerage.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function FreightBrokeragePage() {
  return <ConnectedIndustryPage page={freightBrokerage} path="/freight-brokerage-software-development" />;
}
