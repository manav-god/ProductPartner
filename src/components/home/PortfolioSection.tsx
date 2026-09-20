import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { CaseStudyCard } from "@/components/work/CaseStudyCard";
import { caseStudies } from "@/lib/case-studies";

export function PortfolioSection() {
  return (
    <section
      id="work"
      className="scroll-mt-[68px] bg-[#111111] py-[70px] md:py-[100px]"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
        <div className="mb-10 max-w-3xl md:mb-12">
          <h2
            id="portfolio-heading"
            className="text-[28px] font-semibold leading-tight tracking-tight text-white md:text-[36px]"
          >
            Product Partnerships That Deliver Results
            <span
              className="mt-3 block h-[4px] w-[36px] bg-accent"
              aria-hidden
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/15 pt-10 md:flex-row md:items-center">
          <div>
            <p className="text-[18px] font-semibold text-white">
              Proven work. Measurable outcomes.
            </p>
            <p className="mt-1 text-[16px] text-white/70">
              See how we deliver on complex, high-impact initiatives.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex h-[48px] cursor-pointer items-center gap-2 rounded-[10px] bg-accent px-7 text-[14px] font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            View all work
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
