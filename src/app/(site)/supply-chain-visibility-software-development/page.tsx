import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { supplyChainVisibility } from "@/lib/industries/supply-chain-visibility";

export const metadata: Metadata = {
  title: { absolute: supplyChainVisibility.metaTitle },
  description: supplyChainVisibility.metaDescription,
  keywords: supplyChainVisibility.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function SupplyChainVisibilityPage() {
  return <ConnectedIndustryPage page={supplyChainVisibility} path="/supply-chain-visibility-software-development" />;
}
