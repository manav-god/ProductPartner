"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ArrowRight, ChevronDown } from "@/components/icons";

type IndustryTab = {
  id: string;
  label: string;
  cardLabel: string;
  question: ReactNode;
  description: string;
  tags: string[];
};

const industries: IndustryTab[] = [
  {
    id: "sports",
    label: "Sports Technology",
    cardLabel: "Sports Technology Product Management",
    question: (
      <>
        Serving athletes, coaches, teams, and fans — but the{" "}
        <strong>jobs keep pulling the product apart</strong>?
      </>
    ),
    description:
      "Sports technology products often serve very different users—from athletes and coaches to teams, leagues, organizations, and fans. Product management needs to understand each user's job without losing the core product direction.",
    tags: [
      "SportsTech products",
      "Athlete technology",
      "Team platforms",
      "Sports analytics",
      "Fan experiences",
      "Performance technology",
      "Sports data products",
    ],
  },
  {
    id: "ecommerce",
    label: "Ecommerce",
    cardLabel: "Ecommerce Product Management",
    question: (
      <>
        More features keep shipping, but{" "}
        <strong>friction still kills conversion</strong>?
      </>
    ),
    description:
      "Ecommerce product management is not simply about adding more features. It is about removing friction from the moments that matter—from product discovery to checkout, personalization, retention, and repeat purchase.",
    tags: [
      "Ecommerce product strategy",
      "Customer journey optimization",
      "Conversion experience",
      "Product discovery",
      "Checkout experience",
      "Personalization",
      "Ecommerce analytics",
    ],
  },
];

export function FlIndustrySection() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const current = industries[active];

  return (
    <section
      className="pd-fp-section"
      id="sports-ecommerce"
      aria-labelledby="fl-fp-heading"
    >
      <div className="mx-auto w-full max-w-[1300px] px-5 py-14 md:px-8 md:py-16 lg:px-[40px] lg:py-[72px]">
        <h2 id="fl-fp-heading" className="pd-fp-heading">
          Product Management for Sports &amp; Ecommerce
          <span className="pd-fp-heading__rule" aria-hidden />
        </h2>

        <div className="pd-fp-layout">
          <div className="pd-fp-left">
            <div className="relative lg:hidden">
              <button
                type="button"
                className="pd-fp-mobile-trigger"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((open) => !open)}
              >
                {current.label}
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-300 ${
                    mobileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileOpen ? (
                <ul className="pd-fp-mobile-menu">
                  {industries.map((tab, index) => (
                    <li key={tab.id}>
                      <button
                        type="button"
                        className={
                          index === active
                            ? "pd-fp-nav-item is-active"
                            : "pd-fp-nav-item"
                        }
                        onClick={() => {
                          setActive(index);
                          setMobileOpen(false);
                        }}
                      >
                        {tab.label}
                        <ArrowRight className="h-4 w-4 shrink-0" />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <nav className="pd-fp-nav" aria-label="Industries">
              <ul>
                {industries.map((tab, index) => {
                  const isActive = index === active;
                  return (
                    <li key={tab.id}>
                      <button
                        type="button"
                        className={
                          isActive
                            ? "pd-fp-nav-item is-active"
                            : "pd-fp-nav-item"
                        }
                        aria-current={isActive ? "true" : undefined}
                        onClick={() => setActive(index)}
                      >
                        {tab.label}
                        <ArrowRight className="h-4 w-4 shrink-0" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="pd-fp-right">
            <article className="pd-fp-card" key={current.id}>
              <p className="pd-fp-card__label">{current.cardLabel}</p>
              <h3 className="pd-fp-card__question">{current.question}</h3>
              <p className="pd-fp-card__desc">{current.description}</p>
              <div className="pd-fp-card__tags">
                {current.tags.map((tag) => (
                  <span key={tag} className="pd-fp-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/#contact" className="pd-fp-card__cta">
                Talk to us
                <ArrowRight className="h-3.5 w-3.5 text-accent" />
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
