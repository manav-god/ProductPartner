import Link from "next/link";
import { CaseStudyCard } from "@/components/work/CaseStudyCard";
import { getPublishedCaseStudies } from "@/lib/get-case-studies";
import "@/app/(site)/product-development/product-development.css";
import "@/app/(site)/work/work.css";

export async function WorkContent() {
  const caseStudies = await getPublishedCaseStudies();
  return (
    <div className="pd-page work-page">
      <main id="main-content">
        <section className="pd-hero">
          <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
            <span className="pd-eyebrow">Our work</span>
            <h1>
              Product partnerships that{" "}
              <span>deliver results</span>
            </h1>
            <p className="pd-lead">
              Selected engagements across product development, fractional
              leadership, and go-to-market, built around outcomes, not output.
            </p>
            <div className="pd-buttons">
              <Link href="/contact" className="pd-btn pd-btn-primary">
                Start a project
              </Link>
            </div>
          </div>
        </section>

        <section className="pd-section" id="case-studies">
          <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
            <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
