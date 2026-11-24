import { notFound } from "next/navigation";

/* Temporarily hidden — Industry pages (kept locally, not live)
import type { Metadata } from "next";
import { ConnectedIndustryPage } from "@/components/industries/ConnectedIndustryPage";
import { pickleballAppDevelopment } from "@/lib/industries/pickleball-app-development";

export const metadata: Metadata = {
  title: { absolute: pickleballAppDevelopment.metaTitle },
  description: pickleballAppDevelopment.metaDescription,
  keywords: pickleballAppDevelopment.searchKeywords,
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function CustomPickleballAppDevelopmentPage() {
  return <ConnectedIndustryPage page={pickleballAppDevelopment} path="/custom-pickleball-app-development" />;
}
*/

export default function Page() {
  notFound();
}
