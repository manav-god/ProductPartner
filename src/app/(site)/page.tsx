import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { AboutSection } from "@/components/home/AboutSection";
import { HeroBanner } from "@/components/home/HeroBanner";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WaysToWorkSection } from "@/components/home/WaysToWorkSection";
import { resolvePageSeo, withAdminSeo } from "@/lib/page-seo";
import { pageGraph } from "@/lib/schema";

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
      <WaysToWorkSection />
      <PortfolioSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
