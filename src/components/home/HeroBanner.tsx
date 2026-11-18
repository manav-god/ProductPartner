import { Caveat, Inter, JetBrains_Mono } from "next/font/google";
import { FillButton } from "@/components/FillButton";
import { heroContent } from "@/lib/hero";

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

function StageLabel({ children }: { children: string }) {
  return (
    <p className={`${jetbrains.className} text-[12px] leading-none text-[#6a6864]`}>
      {children}
    </p>
  );
}

function IdeaCard() {
  return (
    <div className="flex w-[236px] justify-center">
      <div
        className={`${caveat.className} relative h-[236px] w-[236px] -rotate-2 rounded-[6px] bg-[#ffe4d4] shadow-[0px_14px_15px_rgba(20,16,12,0.08)]`}
      >
        <p className="absolute top-[23px] left-[22px] text-[32px] leading-[35.2px] text-[#2a2826]">
          What problem
          <br />
          are we actually
          <br />
          solving?
        </p>
        <p className="absolute top-[182px] left-[22px] text-[22px] leading-none text-[#6a6864]">
          who is it for…
        </p>
      </div>
    </div>
  );
}

function WireframeCard() {
  return (
    <div className="relative h-[300px] w-[236px] rounded-[18px] border border-dashed border-[rgba(14,14,14,0.28)] bg-white">
      <span className="absolute top-[21px] left-[21px] h-8 w-8 rounded-[16px] border border-[rgba(14,14,14,0.3)]" />
      <span className="absolute top-[31px] left-[63px] h-2.5 w-[152px] rounded-[5px] bg-[#e7e5e0]" />
      <span className="absolute top-[65px] left-[21px] h-[92px] w-[194px] rounded-[10px] border border-[rgba(14,14,14,0.18)]" />
      <span className="absolute top-[169px] left-[21px] h-2.5 w-[155px] rounded-[5px] bg-[#e7e5e0]" />
      <span className="absolute top-[191px] left-[21px] h-2.5 w-[116px] rounded-[5px] bg-[#e7e5e0]" />
      <span className="absolute top-[213px] left-[21px] h-2.5 w-[136px] rounded-[5px] bg-[#e7e5e0]" />
      <span className="absolute bottom-5 left-[21px] h-10 w-[194px] rounded-full border border-[rgba(14,14,14,0.3)]" />
    </div>
  );
}

function BuildCard() {
  return (
    <div className="relative h-[320px] w-[236px] rounded-[22px] bg-[#0e0e0e] shadow-[0px_20px_20px_rgba(20,16,12,0.16)]">
      <span className="absolute top-[25px] left-[18px] h-2 w-[46px] rounded-[4px] bg-[#3a3936]" />
      <span className="absolute top-[18px] right-[18px] h-[22px] w-[22px] rounded-[11px] bg-[#2a2927]" />
      <p className="absolute top-[57px] left-[18px] text-[20.3px] leading-[24.2px] font-semibold tracking-[-0.66px] text-[#f4f3ef]">
        This week
      </p>
      <span className="absolute top-[94px] left-[18px] h-11 w-[200px] rounded-[12px] bg-[#1e1d1c]" />
      <span className="absolute top-[146px] left-[18px] h-11 w-[200px] rounded-[12px] bg-[#1e1d1c]" />
      <span className="absolute top-[198px] left-[18px] h-11 w-[200px] rounded-[12px] bg-[#1e1d1c]" />
      <span className="absolute bottom-[18px] left-[18px] h-11 w-[200px] rounded-full bg-[#ff5a1f]" />
    </div>
  );
}

function LiveChart() {
  return (
    <div className="absolute top-[103px] left-[23px] h-[90px] w-[190px]">
      <img
        src="/images/hero/live-chart-baseline.svg"
        alt=""
        width={186}
        height={1}
        className="absolute top-[88px] left-[2px] h-px w-[186px] max-w-none"
      />
      <img
        src="/images/hero/live-chart-line.svg"
        alt=""
        width={188.5}
        height={76.5}
        className="absolute top-[8px] left-[2px] h-[76.5px] w-[188.5px] max-w-none"
      />
      <img
        src="/images/hero/live-chart-dot.svg"
        alt=""
        width={10}
        height={10}
        className="absolute top-[3px] left-[183px] size-[10px] max-w-none"
      />
    </div>
  );
}

function LiveCard() {
  return (
    <div className="relative h-[236px] w-[236px] rounded-[18px] border border-[rgba(14,14,14,0.08)] bg-white shadow-[0px_14px_15px_rgba(20,16,12,0.08)]">
      <span className="absolute top-[23px] left-[23px] inline-flex h-7 items-center gap-2 rounded-full bg-[#f4f3ef] pr-3 pl-3">
        <span className="size-2 rounded-[4px] bg-[#ff5a1f]" />
        <span className="text-[12.1px] leading-none font-semibold text-[#0e0e0e]">
          Shipped
        </span>
      </span>
      <p className="absolute top-[65px] left-[23px] text-[18.3px] leading-none font-semibold tracking-[-0.4px] text-[#0e0e0e]">
        First users
      </p>
      <LiveChart />
    </div>
  );
}

const stages = [
  { label: "01 · Idea", offset: "xl:mt-[24px]", card: <IdeaCard /> },
  { label: "02 · Wireframe", offset: "xl:mt-0", card: <WireframeCard /> },
  { label: "03 · Build", offset: "xl:mt-[36px]", card: <BuildCard /> },
  { label: "04 · Live", offset: "xl:mt-[8px]", card: <LiveCard /> },
];

export function HeroBanner() {
  const { eyebrow, titleLead, titleTail, description, primaryCta, secondaryCta } =
    heroContent;

  return (
    <section
      aria-label="Highlights"
      className={`${inter.className} canvas-dots text-[#0e0e0e]`}
    >
      <div className="mx-auto flex min-h-[calc(100dvh-72px)] w-full max-w-[1400px] flex-col items-center justify-center px-5 py-[50px] sm:p-[50px]">
        <p className="inline-flex max-w-full items-center justify-center rounded-full border border-[rgba(14,14,14,0.18)] bg-white px-4 py-2.5 text-center text-[11px] leading-[1.4] font-semibold tracking-[0.12em] text-[#0e0e0e] uppercase sm:h-[35px] sm:px-[17px] sm:py-0 sm:text-[11.3px] sm:leading-none sm:tracking-[1.68px]">
          {eyebrow}
        </p>

        <h1 className="mt-6 max-w-[860px] text-center text-[34px] leading-[1.1] font-semibold tracking-[-0.045em] text-[#0e0e0e] sm:mt-7 sm:text-[56px] sm:leading-[1.06] lg:text-[72px] lg:tracking-[-3.2px] xl:text-[88.5px] xl:leading-[94px] xl:tracking-[-4.608px]">
          {titleLead}
          <br />
          {titleTail}<span className="text-[#ff5a1f]">.</span>
        </h1>

        <p className="mt-4 max-w-[484px] text-center text-[16px] leading-6 text-[#45433f] sm:mt-6 sm:text-[19.6px] sm:leading-[33px]">
          {description}
        </p>

        <div className="mt-7 flex flex-row flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
          <FillButton
            href={primaryCta.href}
            variant="orange-white"
            className="h-11 gap-2 rounded-full px-4 text-[14px] whitespace-nowrap sm:h-14 sm:gap-2.5 sm:px-7 sm:text-[15.7px]"
          >
            {primaryCta.label}
          </FillButton>
          <FillButton
            href={secondaryCta.href}
            variant="white-orange"
            className="h-11 rounded-full px-4 text-[14px] whitespace-nowrap sm:h-14 sm:px-7 sm:text-[15.8px]"
          >
            {secondaryCta.label}
          </FillButton>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] justify-items-center gap-x-6 gap-y-10 px-[50px] pb-[50px] sm:grid-cols-2 xl:flex xl:items-start xl:justify-between xl:gap-6">
          {stages.map((stage) => (
            <div
              key={stage.label}
              className={`flex flex-col items-start gap-2 ${stage.offset}`}
            >
              <StageLabel>{stage.label}</StageLabel>
              {stage.card}
            </div>
          ))}
      </div>
    </section>
  );
}
