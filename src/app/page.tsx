import { HeroBanner } from "@/components/home/HeroBanner";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { StartHereSection } from "@/components/home/StartHereSection";
import { TeamSection } from "@/components/home/TeamSection";
import { TechnologiesSection } from "@/components/home/TechnologiesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhyDifferentSection } from "@/components/home/WhyDifferentSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <StartHereSection />
      <PortfolioSection />
      <TechnologiesSection />
      <WhyDifferentSection />
      <TestimonialsSection />
      <TeamSection />
    </>
  );
}
