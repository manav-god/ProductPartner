import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { waysToWork, type WayToWork } from "@/lib/ways-to-work";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
});

function ServiceMark({ icon }: { icon: WayToWork["icon"] }) {
  return (
    <span className="grid size-10 place-items-center rounded-[12px] bg-white" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt="" className="size-7" />
    </span>
  );
}

export function WaysToWorkSection() {
  return (
    <section
      id="services"
      aria-labelledby="ways-to-work-heading"
      className={`${inter.className} scroll-mt-[120px] bg-white text-[#0e0e0e]`}
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-9 px-5 py-[50px] md:gap-12 sm:p-[50px]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12 sm:gap-6">
          <div className="flex max-w-[640px] flex-col gap-4 sm:gap-[18px]">
            <p className="text-[12px] font-semibold tracking-[0.14em] text-[#5e5c58] uppercase">
              What we do
            </p>
            <h2
              id="ways-to-work-heading"
              className="text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] text-balance sm:text-[48px] sm:leading-[1.02] lg:text-[60px]"
            >
              Three ways to work together<span className="text-[#ff5a1f]">.</span>
            </h2>
          </div>
          <p className="max-w-[380px] text-[16px] leading-6 text-[#45433f] sm:text-[18px] sm:leading-[1.55]">
            Not sure which one you need? That’s what the first call is for.
          </p>
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {waysToWork.map((way) => (
            <article
              key={way.id}
              className="flex flex-col gap-[18px] rounded-[26px] bg-[#f6f5f2] p-7 sm:p-9"
            >
              <ServiceMark icon={way.icon} />
              <h3 className="text-[28px] leading-[1.1] font-semibold tracking-[-0.03em]">
                {way.title}
              </h3>
              <p className="text-[17px] leading-[1.55] text-[#45433f]">{way.description}</p>
              <p className={`${jetbrains.className} mt-1.5 text-[12px] text-[#6a6864]`}>
                What’s included
              </p>
              <ul className="flex flex-wrap gap-2">
                {way.includes.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-white px-3.5 py-2 text-[14px] leading-none"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={way.href}
                className="group/learn mt-auto inline-flex min-h-11 w-fit items-center gap-2 self-start text-[16px] font-semibold"
              >
                <span className="relative">
                  Learn more
                  <span
                    className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover/learn:scale-x-100"
                    aria-hidden="true"
                  />
                </span>
                <span className="text-[#ff5a1f]" aria-hidden="true">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
