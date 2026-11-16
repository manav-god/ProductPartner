import { Caveat, Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: "400",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
});

export function FounderNoteSection() {
  return (
    <section
      id="founder"
      aria-labelledby="founder-note-heading"
      className={`${inter.className} scroll-mt-[120px] bg-[#f4f3ef] text-[#0e0e0e]`}
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28 lg:px-12 lg:py-[140px]">
        <article className="mx-auto max-w-[760px] rounded-[28px] bg-white p-8 shadow-[0_24px_30px_rgba(20,16,12,0.08)] sm:p-12 lg:p-[72px]">
          <p className={`${jetbrains.className} text-[12px] tracking-[0.06em] text-[#6a6864]`}>
            A note from the founder
          </p>
          <h2
            id="founder-note-heading"
            className="mt-4 text-[36px] leading-[1.1] font-semibold tracking-[-0.042em] sm:text-[44px] lg:text-[48px]"
          >
            Hi, I’m Manav<span className="text-[#ff5a1f]">.</span>
          </h2>
          <div className="mt-6 space-y-7 text-[17px] leading-[1.84] text-[#2e2c2a]">
            <p>
              I got a chance to work with 10 startups in under 14 months. One pattern keeps showing
              up: early-stage founders rarely need a big team on day one. They need someone who
              thinks about the product with them.
            </p>
            <p>
              That’s why I started Product Partner. I work with founders to build what’s actually
              needed, launch it, run it and scale it, at a cost that fits where they are.
            </p>
            <p>People don’t work with organisations. People work with people.</p>
            <p>If you’re building something, let’s talk.</p>
          </div>
          <div className="mt-8 flex flex-col gap-6 border-t border-[rgba(14,14,14,0.1)] pt-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={`${caveat.className} text-[44px] leading-none`}>Manav</p>
              <p className="mt-1 text-[13px] text-[#5e5c58]">Manav Shah, Founder</p>
            </div>
            <a
              href="https://www.linkedin.com/in/manavvshah/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 self-start rounded-full border border-[rgba(14,14,14,0.18)] px-[18px] text-[14px] font-semibold sm:self-auto"
            >
              Say hi on LinkedIn
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
