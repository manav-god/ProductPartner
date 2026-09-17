"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown } from "@/components/icons";
import { startTabs, type StartCard } from "@/lib/start-here";

const SLIDE_MS = 620;
const EASE = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function StartCardItem({ card }: { card: StartCard }) {
  return (
    <article className="start-slide-card relative flex h-[339px] w-[85%] shrink-0 flex-col justify-between bg-white px-5 py-[30px] sm:w-[calc((100%-2.5rem)/3)] sm:px-6">
      <div
        className="pointer-events-none absolute inset-0 border border-[#dadada] transition-[border-color] duration-300"
        aria-hidden
      />
      <div className="relative">
        <p className="text-[16px] font-normal leading-6 text-[#252425]">
          {card.subtitle}
        </p>
        <h3 className="mt-3 text-[20px] font-normal leading-[28px] tracking-tight text-[#252425] xl:text-[22px] xl:leading-[30px]">
          {card.question}
        </h3>
      </div>
      <Link
        href={card.href}
        className="group/link relative inline-flex w-fit cursor-pointer items-center gap-2 text-[16px] font-semibold text-[#252425] transition-colors duration-300 hover:text-accent"
      >
        Know more
        <ArrowRight className="h-3.5 w-3.5 text-accent transition-transform duration-300 ease-out group-hover/link:translate-x-1" />
      </Link>
    </article>
  );
}

function SlideButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Previous card" : "Next card"}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-[8px] border bg-white/80 backdrop-blur-sm transition-all duration-300 ease-out ${
        disabled
          ? "cursor-not-allowed border-[#e0e0e0] text-[#c4c4c4] opacity-60"
          : "border-[#252425]/80 text-[#252425] hover:border-accent hover:bg-accent hover:text-white active:scale-[0.96]"
      }`}
    >
      {direction === "prev" ? (
        <ArrowLeft className="h-4 w-4" />
      ) : (
        <ArrowRight className="h-4 w-4" />
      )}
    </button>
  );
}

export function StartHereSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const current = startTabs[activeTab];

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft < maxScroll - 2);
  }, []);

  const animateTo = useCallback(
    (targetLeft: number) => {
      const el = scrollerRef.current;
      if (!el) return;

      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
        animRef.current = null;
      }

      const start = el.scrollLeft;
      const max = el.scrollWidth - el.clientWidth;
      const end = Math.max(0, Math.min(targetLeft, max));
      const distance = end - start;
      if (Math.abs(distance) < 1) {
        updateArrows();
        return;
      }

      setIsSliding(true);
      const startTime = performance.now();

      const tick = (now: number) => {
        const t = Math.min(1, (now - startTime) / SLIDE_MS);
        el.scrollLeft = start + distance * EASE(t);
        if (t < 1) {
          animRef.current = requestAnimationFrame(tick);
        } else {
          el.scrollLeft = end;
          animRef.current = null;
          setIsSliding(false);
          updateArrows();
        }
      };

      animRef.current = requestAnimationFrame(tick);
    },
    [updateArrows],
  );

  function selectTab(index: number) {
    setActiveTab(index);
    setMobileOpen(false);
    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
    setIsSliding(false);
    requestAnimationFrame(() => {
      const el = scrollerRef.current;
      if (el) {
        el.scrollLeft = 0;
        el.scrollTop = 0;
      }
      updateArrows();
    });
  }

  function scrollByCard(direction: "prev" | "next") {
    if (isSliding) return;
    const el = scrollerRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("article");
    if (!firstCard) return;
    const styles = window.getComputedStyle(el);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
    const step = firstCard.getBoundingClientRect().width + gap;
    const target =
      direction === "next" ? el.scrollLeft + step : el.scrollLeft - step;
    animateTo(target);
  }

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateArrows();
    const onScroll = () => {
      if (!animRef.current) updateArrows();
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateArrows);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateArrows);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [activeTab, updateArrows]);

  useEffect(() => {
    const id = window.requestAnimationFrame(updateArrows);
    return () => window.cancelAnimationFrame(id);
  }, [current.cards.length, activeTab, updateArrows]);

  return (
    <section
      id="start-here"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #edf0f3 100%)",
      }}
      aria-labelledby="start-here-heading"
    >
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[55%] w-[48%] opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(37,36,37,0.18) 1px, transparent 0)",
          backgroundSize: "18px 18px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 10% 90%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 10% 90%, black 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[1300px] px-5 py-14 md:px-8 md:py-16 lg:px-[40px] lg:pb-[50px] lg:pt-16">
        <h2
          id="start-here-heading"
          className="max-w-xl text-[28px] font-bold leading-[1.2] tracking-tight text-[#252425]"
        >
          Not sure where to start?
          <span
            className="mt-3 block h-[4px] w-[36px] bg-accent"
            aria-hidden
          />
        </h2>

        <div className="mt-10 lg:mt-12 lg:grid lg:grid-cols-[minmax(220px,0.34fr)_minmax(0,1fr)] lg:gap-8 xl:gap-12">
          <div className="relative lg:hidden">
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-between border-b border-[#dadada] bg-transparent py-4 text-left text-[22px] font-bold text-accent transition-colors duration-300 sm:text-[24px]"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {current.label}
              <ChevronDown
                className={`h-3 w-3 text-[#252425] transition-transform duration-300 ease-out ${
                  mobileOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileOpen ? (
              <ul className="absolute z-20 w-full border border-[#dadada] bg-white shadow-[0_12px_40px_rgba(37,36,37,0.08)]">
                {startTabs.map((tab, index) => (
                  <li
                    key={tab.id}
                    className="border-b border-[#dadada] last:border-b-0"
                  >
                    <button
                      type="button"
                      className={`flex w-full cursor-pointer items-center justify-between px-4 py-4 text-left text-[18px] font-bold transition-colors duration-300 ${
                        index === activeTab ? "text-accent" : "text-[#252425]"
                      }`}
                      onClick={() => selectTab(index)}
                    >
                      {tab.label}
                      <ArrowRight
                        className={`h-4 w-4 ${
                          index === activeTab ? "text-accent" : "text-[#252425]"
                        }`}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <nav className="hidden lg:block" aria-label="Starting points">
            <ul>
              {startTabs.map((tab, index) => {
                const isActive = index === activeTab;
                return (
                  <li key={tab.id}>
                    <button
                      type="button"
                      className={`group flex w-full cursor-pointer items-center justify-between border-b border-[#dadada] py-5 pr-3 text-left text-[22px] font-bold tracking-tight transition-colors duration-300 xl:text-[24px] ${
                        isActive
                          ? "text-accent"
                          : "text-[#252425] hover:text-accent"
                      } ${index === 0 ? "border-t border-[#dadada]" : ""}`}
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => selectTab(index)}
                    >
                      {tab.label}
                      <ArrowRight
                        className={`h-4 w-4 shrink-0 transition-transform duration-300 ease-out ${
                          isActive
                            ? "translate-x-0.5 text-accent"
                            : "text-[#252425] group-hover:translate-x-0.5 group-hover:text-accent"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-6 min-w-0 lg:mt-0">
            <div className="relative">
              <div
                ref={scrollerRef}
                className="start-slide-track flex touch-pan-x gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-1 [scrollbar-width:none] sm:gap-5 [&::-webkit-scrollbar]:hidden"
              >
                {current.cards.map((card) => (
                  <StartCardItem key={`${activeTab}-${card.id}`} card={card} />
                ))}
              </div>
              <div
                className={`pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#edf0f3] to-transparent transition-opacity duration-500 sm:w-20 ${
                  canNext ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden
              />
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <SlideButton
                direction="prev"
                disabled={!canPrev || isSliding}
                onClick={() => scrollByCard("prev")}
              />
              <SlideButton
                direction="next"
                disabled={!canNext || isSliding}
                onClick={() => scrollByCard("next")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
