"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "@/components/icons";
import { heroSlides } from "@/lib/hero";

const AUTO_MS = 8000;
const EASE = "cubic-bezier(0.4, 0.2, 0.4, 1)";

function PlusIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 5V19M5 12H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CircleArrow({
  direction,
  onClick,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/80 text-white transition-colors hover:border-accent hover:text-accent"
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
        {direction === "prev" ? (
          <path
            d="M15 6L9 12L15 18"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M9 6L15 12L9 18"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}

export function HeroBanner() {
  const [active, setActive] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const goTo = useCallback((index: number) => {
    setActive((index + heroSlides.length) % heroSlides.length);
    setProgressKey((key) => key + 1);
  }, []);

  const goPrev = useCallback(() => {
    goTo(active - 1);
  }, [active, goTo]);

  const goNext = useCallback(() => {
    goTo(active + 1);
  }, [active, goTo]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
      setProgressKey((key) => key + 1);
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [active, progressKey]);

  return (
    <section className="bg-white" aria-label="Highlights">
      <div className="mx-auto w-full max-w-[1300px] px-5 pb-10 pt-5 md:px-8 md:pb-14 md:pt-6 lg:px-[40px]">
        {/* Desktop accordion */}
        <div
          className="hidden h-[560px] gap-2.5 lg:flex xl:h-[640px]"
          role="list"
        >
          {heroSlides.map((slide, index) => {
            const isActive = index === active;

            return (
              <article
                key={slide.id}
                role="listitem"
                aria-current={isActive ? "true" : undefined}
                tabIndex={isActive ? -1 : 0}
                onClick={() => {
                  if (!isActive) goTo(index);
                }}
                onKeyDown={(event) => {
                  if (!isActive && (event.key === "Enter" || event.key === " ")) {
                    event.preventDefault();
                    goTo(index);
                  }
                }}
                className={`group/slide relative min-h-0 overflow-hidden ${
                  isActive
                    ? "z-[1] flex-[1_1_0%] cursor-default"
                    : "flex-[0_0_90px] cursor-pointer hover:flex-[0_0_120px] xl:flex-[0_0_100px] xl:hover:flex-[0_0_130px]"
                }`}
                style={{
                  background: slide.gradient,
                  transition: `flex 0.85s ${EASE}`,
                }}
              >
                <div
                  className={`absolute inset-0 ${
                    isActive
                      ? "bg-black/25"
                      : "bg-black/40 backdrop-blur-[20px] group-hover/slide:bg-black/25 group-hover/slide:backdrop-blur-0"
                  }`}
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-40"
                  style={{
                    background:
                      "radial-gradient(ellipse at 70% 20%, rgba(255,89,0,0.18), transparent 55%)",
                  }}
                />

                {/* Collapsed strip label — instant swap, never tweened */}
                <p
                  className="hero-strip-title"
                  style={{
                    visibility: isActive ? "hidden" : "visible",
                    opacity: isActive ? 0 : 1,
                  }}
                  aria-hidden={isActive}
                >
                  {slide.number}. {slide.label}
                </p>

                {!isActive ? (
                  <span className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/80 group-hover/slide:text-accent">
                    <PlusIcon className="h-5 w-5" />
                  </span>
                ) : null}

                {/*
                  Expanded copy stays fixed-width and clipped by overflow:hidden.
                  That way fonts don't reflow/animate while the card width transitions.
                */}
                <div
                  className="hero-slide-copy"
                  style={{
                    visibility: isActive ? "visible" : "hidden",
                    opacity: isActive ? 1 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  aria-hidden={!isActive}
                >
                  <div className="hero-slide-copy__inner">
                    <p className="text-[15px] font-bold tracking-tight text-white xl:text-[16px]">
                      {slide.number}. {slide.label}
                    </p>

                    {isActive ? (
                      <h1 className="mt-6 max-w-[620px] text-[34px] font-bold leading-[1.12] tracking-tight text-white xl:mt-8 xl:text-[46px]">
                        {slide.title}
                        <em className="not-italic text-accent">{slide.accent}</em>
                        {slide.titleAfter}
                      </h1>
                    ) : (
                      <p className="mt-6 max-w-[620px] text-[34px] font-bold leading-[1.12] tracking-tight text-white xl:mt-8 xl:text-[46px]">
                        {slide.title}
                        <em className="not-italic text-accent">{slide.accent}</em>
                        {slide.titleAfter}
                      </p>
                    )}

                    <p className="mt-5 max-w-[540px] text-[16px] leading-relaxed text-white/85 xl:text-[17px]">
                      {slide.description}
                    </p>

                    {slide.cta ? (
                      <Link
                        href={slide.cta.href}
                        className="mt-7 inline-flex w-fit items-center gap-2 text-[15px] font-semibold text-white hover:text-accent"
                        tabIndex={isActive ? 0 : -1}
                        onClick={(event) => event.stopPropagation()}
                      >
                        {slide.cta.label}
                        <ArrowRight className="h-3.5 w-3.5 text-accent" />
                      </Link>
                    ) : null}

                    <div className="hero-slide-copy__footer">
                      <div className="relative h-[2px] min-w-0 flex-1 overflow-hidden bg-white/35">
                        {isActive ? (
                          <div
                            key={progressKey}
                            className="absolute inset-y-0 left-0 bg-accent"
                            style={{
                              animation: `hero-progress ${AUTO_MS}ms linear forwards`,
                            }}
                          />
                        ) : null}
                      </div>
                      <div className="flex shrink-0 items-center gap-3">
                        <CircleArrow
                          direction="prev"
                          label="Previous slide"
                          onClick={goPrev}
                        />
                        <CircleArrow
                          direction="next"
                          label="Next slide"
                          onClick={goNext}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile / tablet */}
        <div className="lg:hidden">
          <div
            className="relative flex min-h-[460px] flex-col overflow-hidden px-6 pb-6 pt-8 sm:min-h-[520px] sm:px-10 sm:pb-8 sm:pt-10"
            style={{ background: heroSlides[active].gradient }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse at 70% 20%, rgba(255,89,0,0.18), transparent 55%)",
              }}
            />

            <div className="relative z-10 flex flex-1 flex-col">
              <p className="text-[14px] font-bold text-white">
                {heroSlides[active].number}. {heroSlides[active].label}
              </p>
              <h1 className="mt-5 max-w-[620px] text-[32px] font-bold leading-[1.12] tracking-tight text-white sm:text-[40px]">
                {heroSlides[active].title}
                <em className="not-italic text-accent">
                  {heroSlides[active].accent}
                </em>
              </h1>
              <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-white/85 sm:text-[16px]">
                {heroSlides[active].description}
              </p>
              {heroSlides[active].cta ? (
                <Link
                  href={heroSlides[active].cta!.href}
                  className="mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-white"
                >
                  {heroSlides[active].cta!.label}
                  <ArrowRight className="h-3.5 w-3.5 text-accent" />
                </Link>
              ) : null}

              <div className="mt-auto flex items-center gap-4 pt-10">
                <div className="relative h-[2px] min-w-0 flex-1 overflow-hidden bg-white/35">
                  <div
                    key={`m-${progressKey}`}
                    className="absolute inset-y-0 left-0 bg-accent"
                    style={{
                      animation: `hero-progress ${AUTO_MS}ms linear forwards`,
                    }}
                  />
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <CircleArrow
                    direction="prev"
                    label="Previous slide"
                    onClick={goPrev}
                  />
                  <CircleArrow
                    direction="next"
                    label="Next slide"
                    onClick={goNext}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2.5 flex gap-2">
            {heroSlides.map((slide, index) => {
              const isActive = index === active;
              return (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Show ${slide.label}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => goTo(index)}
                  className={`relative h-[72px] flex-1 overflow-hidden ${
                    isActive ? "flex-[1.4]" : "flex-1"
                  }`}
                  style={{
                    background: slide.gradient,
                    transition: `flex 0.85s ${EASE}`,
                  }}
                >
                  <span className="absolute inset-0 bg-black/35" />
                  <span className="relative z-10 flex h-full items-center justify-center px-2 text-center text-[11px] font-bold leading-tight text-white sm:text-[12px]">
                    {slide.number}. {slide.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
