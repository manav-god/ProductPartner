import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { FounderNoteSection } from "@/components/home/FounderNoteSection";
import { HeroBanner } from "@/components/home/HeroBanner";
import { HowWeWorkSection } from "@/components/home/HowWeWorkSection";
import { ServiceTicker } from "@/components/home/ServiceTicker";
// import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WaysToWorkSection } from "@/components/home/WaysToWorkSection";
import { resolvePageSeo, withAdminSeo } from "@/lib/page-seo";
import { pageGraph } from "@/lib/schema";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await resolvePageSeo("/");
  return withAdminSeo(
    {
      openGraph: { url: "https://productpartner.net/" },
      twitter: { card: "summary" },
    },
    seo,
  );
}

export default async function Home() {
  const seo = await resolvePageSeo("/");

  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/",
          name: seo.metaTitle,
          description: seo.metaDescription,
          crumbs: [{ name: "Home", path: "/" }],
        })}
      />
      <HeroBanner />
      <ServiceTicker />
      <ProblemSection />
      <WaysToWorkSection />
      <HowWeWorkSection />
      {/* <PortfolioSection /> */}
      <TestimonialsSection />
      <FounderNoteSection />
    </>
  );
}
