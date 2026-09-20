import Link from "next/link";
import { type CaseStudy } from "@/lib/case-studies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
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
          <p className="text-[16px] font-medium text-white">{study.slogan}</p>
        </div>
      </div>
    </article>
  );
}
