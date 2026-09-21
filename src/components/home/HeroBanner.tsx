import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@/lib/hero";
import { HeroLogoMark } from "@/components/home/HeroLogoMark";

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 12L12 4M12 4H6.5M12 4V9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BriefcaseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6.5 6V4.75A1.75 1.75 0 0 1 8.25 3h3.5A1.75 1.75 0 0 1 13.5 4.75V6M3.5 6.5h13v8.25A1.75 1.75 0 0 1 14.75 16.5h-9.5A1.75 1.75 0 0 1 3.5 14.75V6.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 9.5h13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeroBanner() {
  const {
    eyebrow,
    titleLine1,
    titleLine2,
    description,
    primaryCta,
    secondaryCta,
    trustedLabel,
    trustedHighlight,
    trustedClients,
  } = heroContent;

  return (
    <section
      className="relative overflow-x-clip overflow-y-hidden bg-[#111111]"
      aria-label="Highlights"
    >
      {/* Right-side brand mark — soft watermark */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden select-none lg:block"
        aria-hidden
      >
        <div className="absolute inset-y-0 right-[-6%] flex items-center justify-end lg:right-[-4%] xl:right-[-2%]">
          <div className="-translate-y-6 xl:-translate-y-8">
            <HeroLogoMark />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-5 pb-16 pt-20 md:px-8 md:pb-24 md:pt-28 lg:px-[40px] lg:pb-[120px] lg:pt-[120px]">
        <div className="max-w-[720px] lg:max-w-[760px]">
          <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-accent sm:text-[16px] sm:tracking-[0.14em]">
            {eyebrow}
          </p>

          <h1 className="relative mt-4 pb-4 text-[34px] font-semibold leading-[1.15] tracking-[-0.03em] text-white sm:mt-5 sm:text-[44px] sm:leading-[1.15] md:text-[54px] md:leading-[62px] md:tracking-[-2px]">
            {titleLine1}
            <br />
            {titleLine2}
            <span
              className="absolute bottom-0 left-0 block h-[4px] w-[106px] bg-accent"
              aria-hidden
            />
          </h1>

          <p className="mt-5 max-w-[640px] text-[15px] leading-7 text-white/90 sm:mt-6 sm:text-[16px] sm:leading-7">
            {description}
          </p>

          <div className="mt-7 flex flex-col items-start gap-4 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href={primaryCta.href}
              className="inline-flex h-[48px] items-center gap-3.5 rounded-lg border border-white/90 bg-[#1a1a1a]/80 px-4 text-[14px] font-semibold text-white transition-colors hover:border-accent hover:text-accent"
            >
              {primaryCta.label}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex h-[48px] items-center gap-3.5 px-1 text-[14px] font-semibold text-white transition-colors hover:text-accent sm:px-3"
            >
              {secondaryCta.label}
              <BriefcaseIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Trusted-by bar */}
        <div className="mt-10 w-full max-w-full overflow-hidden rounded-[14px] border border-white bg-white/[0.035] px-5 py-4 md:mt-12 lg:mt-14 lg:flex lg:w-fit lg:items-center lg:gap-5 lg:px-6 lg:py-[14px]">
          <p className="shrink-0 border-white/25 pr-0 text-[15px] leading-[1.35] text-white lg:border-r lg:pr-5 lg:text-[16px]">
            {trustedLabel}
            {trustedHighlight ? (
              <>
                {" "}
                <strong className="font-semibold">{trustedHighlight}</strong>
              </>
            ) : null}
          </p>

          {/* Desktop only: static logos */}
          <div className="mt-4 hidden flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-6 lg:mt-0 lg:flex lg:flex-nowrap lg:gap-x-7">
            {trustedClients.map((client) => (
              <Link
                key={client.id}
                href={client.href}
                className="group relative flex h-11 w-[88px] shrink-0 items-center justify-center opacity-90 transition-opacity hover:opacity-100 sm:h-12 sm:w-[100px]"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  sizes="100px"
                  unoptimized
                  className="object-contain bg-transparent"
                  style={{
                    transform: `scale(${client.scale ?? 1})`,
                  }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile + tablet: auto logo slider */}
          <div className="partner-marquee group/partner mt-4 -mx-5 overflow-hidden lg:hidden">
            <div className="partner-marquee__track flex w-max items-center gap-8 px-5">
              {[...trustedClients, ...trustedClients].map((client, index) => (
                <Link
                  key={`${client.id}-${index}`}
                  href={client.href}
                  className="relative flex h-11 w-[88px] shrink-0 items-center justify-center opacity-90"
                  tabIndex={index >= trustedClients.length ? -1 : undefined}
                  aria-hidden={index >= trustedClients.length ? true : undefined}
                >
                  <Image
                    src={client.src}
                    alt={index >= trustedClients.length ? "" : client.alt}
                    fill
                    sizes="88px"
                    unoptimized
                    className="object-contain bg-transparent"
                    style={{
                      transform: `scale(${client.scale ?? 1})`,
                    }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
