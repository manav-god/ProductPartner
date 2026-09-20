import Link from "next/link";
import { CaseStudyToc } from "@/components/work/CaseStudyToc";
import { type CaseStudy } from "@/lib/case-studies";
import "@/app/product-development/product-development.css";
import "./case-study.css";

function MetaIcon({ name }: { name: "location" | "type" | "year" }) {
  if (name === "location") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="10"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (name === "type") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 7.5A2.5 2.5 0 0 1 6.5 5h3.2c.5 0 1 .2 1.3.6L12 7h5.5A2.5 2.5 0 0 1 20 9.5v7A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3.5"
        y="5"
        width="17"
        height="15"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 3.5V7M16 3.5V7M3.5 10.5h17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CaseStudyContent({ study }: { study: CaseStudy }) {
  return (
    <div className="pd-page cs-page">
      <main id="main-content">
        <section className="cs-hero">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <div className="cs-hero__grid">
              <div className="cs-hero__copy">
                <p className="cs-role">{study.role}</p>
                <h1>{study.title}</h1>
                <p className="cs-lead">{study.lead}</p>

                <div className="pd-buttons">
                  <Link href="/contact" className="pd-btn pd-btn-primary">
                    {study.cta}
                  </Link>
                </div>
              </div>

              <div className="cs-hero__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.image}
                  alt={study.imageAlt}
                  width={960}
                  height={720}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="cs-body">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <div className="cs-layout">
              <aside className="cs-layout__toc">
                <div className="cs-toc-sticky">
                  <CaseStudyToc />
                </div>
              </aside>

              <div className="cs-layout__content">
                <section
                  id="about-client"
                  className="cs-section scroll-mt-[140px] lg:scroll-mt-32"
                >
                  <div className="cs-panel">
                    <header className="cs-section-head">
                      <h2>About the client</h2>
                    </header>

                    <div className="cs-prose">
                      {study.about.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    <ul className="cs-tags">
                      {study.services.map((service) => (
                        <li key={service}>{service}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="cs-meta-grid">
                    <div className="cs-meta-card">
                      <div className="cs-meta-label-row">
                        <span className="cs-meta-icon">
                          <MetaIcon name="location" />
                        </span>
                        <span className="cs-meta-label">Location</span>
                      </div>
                      <p>{study.location}</p>
                    </div>
                    <div className="cs-meta-card">
                      <div className="cs-meta-label-row">
                        <span className="cs-meta-icon">
                          <MetaIcon name="type" />
                        </span>
                        <span className="cs-meta-label">Project type</span>
                      </div>
                      <p>{study.projectType}</p>
                    </div>
                    <div className="cs-meta-card">
                      <div className="cs-meta-label-row">
                        <span className="cs-meta-icon">
                          <MetaIcon name="year" />
                        </span>
                        <span className="cs-meta-label">Year</span>
                      </div>
                      <p>{study.year}</p>
                    </div>
                  </div>
                </section>

                <section
                  id="challenges"
                  className="cs-section scroll-mt-[140px] lg:scroll-mt-32"
                >
                  <header className="cs-section-head">
                    <h2>Challenges</h2>
                  </header>

                  <div className="cs-card-grid">
                    {study.challenges.map((item) => (
                      <article key={item.title} className="cs-card">
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section
                  id="solutions"
                  className="cs-section scroll-mt-[140px] lg:scroll-mt-32"
                >
                  <header className="cs-section-head">
                    <h2>Solutions</h2>
                  </header>

                  <p className="cs-intro">{study.solutionsIntro}</p>

                  <div className="cs-solution-list">
                    {study.solutions.map((item) => (
                      <div key={item.title}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section
                  id="tech-stack"
                  className="cs-section scroll-mt-[140px] lg:scroll-mt-32"
                >
                  <header className="cs-section-head">
                    <h2>Project tech stack</h2>
                  </header>

                  <ul className="cs-tech-grid">
                    {study.techStack.map((tech) => (
                      <li key={tech.name}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={tech.icon}
                          alt=""
                          width={48}
                          height={48}
                          loading="lazy"
                        />
                        <span>{tech.name}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section
                  id="features"
                  className="cs-section scroll-mt-[140px] lg:scroll-mt-32"
                >
                  <header className="cs-section-head">
                    <h2>Features</h2>
                  </header>

                  <div className="cs-card-grid">
                    {study.features.map((item) => (
                      <article key={item.title} className="cs-card">
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section
                  id="results"
                  className="cs-section cs-section--last scroll-mt-[140px] lg:scroll-mt-32"
                >
                  <header className="cs-section-head">
                    <h2>Results</h2>
                  </header>

                  <div className="cs-card-grid">
                    {study.results.map((item) => (
                      <article key={item.label} className="cs-card cs-result">
                        {item.stat ? (
                          <p className="cs-result__stat">{item.stat}</p>
                        ) : null}
                        <p className="cs-result__label">{item.label}</p>
                        <p>{item.body}</p>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
