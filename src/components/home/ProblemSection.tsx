import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export function ProblemSection() {
  return (
    <section
      aria-labelledby="problem-heading"
      className={`${inter.className} bg-white text-[#0e0e0e]`}
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-5 px-5 py-[50px] text-center sm:gap-6 sm:p-[50px]">
        <p className="text-[12px] font-semibold tracking-[0.14em] text-[#5e5c58] uppercase">
          The problem
        </p>
        <h2
          id="problem-heading"
          className="text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] text-balance sm:text-[48px] sm:leading-[1.02] lg:text-[72px]"
        >
          Building is the easy part.
          <br />
          <span className="text-[#8a8883]">Deciding what to build isn’t.</span>
        </h2>
        <p className="max-w-[46ch] text-[16px] leading-6 text-[#45433f] sm:text-[18px] sm:leading-[1.6] lg:text-[21px]">
          What to build first. Who it’s for. What can wait. Who owns it after
          launch. Those decisions shape everything that follows. That’s where we
          start, and then we build it with you.
        </p>
      </div>
    </section>
  );
}
