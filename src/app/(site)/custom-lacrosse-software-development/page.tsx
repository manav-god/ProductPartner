import { notFound } from "next/navigation";

/* Temporarily hidden — Industry pages (kept locally, not live)
import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { lacrosseSoftwareDevelopment } from "@/lib/industries/lacrosse-software-development";

export const metadata: Metadata = {
  title: { absolute: lacrosseSoftwareDevelopment.metaTitle },
  description: lacrosseSoftwareDevelopment.metaDescription,
  keywords: lacrosseSoftwareDevelopment.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function CustomLacrosseSoftwareDevelopmentPage() {
  return <ConnectedIndustryPage page={lacrosseSoftwareDevelopment} path="/custom-lacrosse-software-development" />;
}
*/

export default function Page() {
  notFound();
}
