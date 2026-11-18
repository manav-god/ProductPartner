"use client";

import { useState } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
});

const steps = [
  {
    step: "Step 1",
    title: "Build it",
    body: "Agree what the product has to prove, then build only that.",
  },
  {
    step: "Step 2",
    title: "Launch it",
    body: "Put it in front of the first users and learn fast.",
  },
  {
    step: "Step 3",
    title: "Run it",
    body: "Roadmap, releases and priorities, week to week.",
  },
  {
    step: "Step 4",
    title: "Scale it",
    body: "Hands-on product marketing, so the right people find it.",
  },
];

const buildProgress = 25;

export function HowWeWorkSection() {
  const [progress, setProgress] = useState(buildProgress);

  return (
    <section
      id="how"
      aria-labelledby="how-we-work-heading"
      className={`${inter.className} scroll-mt-[120px] bg-[#0e0e0e] text-[#f4f3ef]`}
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col px-5 py-[50px] sm:p-[50px]">
        <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="flex max-w-[560px] flex-col gap-3">
            <p className="text-[12px] font-semibold tracking-[0.14em] text-[#a3a19c] uppercase">
              How we work
            </p>
            <h2
              id="how-we-work-heading"
              className="text-[32px] leading-[1.12] font-semibold tracking-[-0.05em] text-balance sm:text-[48px] lg:text-[56px]"
            >
              From first build to first{" "}
              <span className="lg:block">
                users, and beyond<span className="text-[#ff5a1f]">.</span>
              </span>
            </h2>
          </div>
          <p className="max-w-[360px] text-[16px] leading-6 text-[#a3a19c] sm:leading-[1.72]">
            One partner through every stage, from the first build to growing the
            product.
          </p>
        </div>

        <div className="relative mt-14 h-0.5 bg-white/14 lg:mt-[60px]" aria-hidden="true">
          <div
            className="absolute inset-y-0 left-0 bg-[#ff5a1f] transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff5a1f] transition-[left] duration-500 ease-out"
            style={{ left: `${progress}%` }}
          />
        </div>

        <ol
          className="mt-16 grid list-none gap-5 md:grid-cols-2 lg:grid-cols-4"
          onMouseLeave={() => setProgress(buildProgress)}
        >
          {steps.map((item, index) => (
            <li
              key={item.step}
              className="rounded-[22px] bg-[#1a1918] p-7"
              onMouseEnter={() => setProgress((index + 1) * 25)}
            >
              <p className={`${jetbrains.className} text-[12px] text-[#a3a19c]`}>{item.step}</p>
              <h3 className="mt-3 text-[28px] leading-none font-semibold tracking-[-0.033em]">
                {item.title}
              </h3>
              <p className="mt-3.5 text-[15px] leading-[1.65] text-[#b9b7b2]">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
