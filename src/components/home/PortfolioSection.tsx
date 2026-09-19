import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { caseStudies, type CaseStudy } from "@/lib/case-studies";

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[16px] border border-white/15 bg-white/[0.04] transition-all duration-300 ease-out hover:-translate-y-[5px] hover:border-accent hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
      <Link
        href={study.href}
        className="absolute inset-0 z-10 cursor-pointer"
        aria-label={`Read case study: ${study.titleBefore}${study.titleHighlight}${study.titleAfter}`}
      />

      <div className="h-[224px] w-full overflow-hidden bg-[#1a1a1a]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={study.image}
          alt={study.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col px-[22px] pb-6 pt-5">
        <div className="mb-[18px] flex flex-wrap gap-2.5">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[3px] bg-accent/15 px-[9px] py-1 text-[12px] leading-[16px] text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-[15px] text-[20px] font-semibold leading-8 tracking-tight text-white md:text-[22px]">
          {study.titleBefore}
          <span className="text-accent">{study.titleHighlight}</span>
          {study.titleAfter}
        </h3>

        <p className="mb-5 line-clamp-2 text-[16px] leading-7 text-white/75">
          {study.description}
        </p>

        <div className="mt-auto border-t border-white/15 pt-5">
          <p className="text-[16px] font-medium text-white">
            {study.slogan}
          </p>
        </div>
      </div>
    </article>
  );
}

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
            href="/#contact"
            className="inline-flex h-[48px] cursor-pointer items-center gap-2 rounded-[10px] bg-accent px-7 text-[14px] font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Start a project
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
