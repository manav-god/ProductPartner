import { AboutSection } from "@/components/home/AboutSection";
import { HeroBanner } from "@/components/home/HeroBanner";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WaysToWorkSection } from "@/components/home/WaysToWorkSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <WaysToWorkSection />
      <PortfolioSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
