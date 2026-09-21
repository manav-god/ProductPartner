import Image from "next/image";

/**
 * Soft right-side hero graphic — runner mark on desktop only.
 */
export function HeroLogoMark() {
  return (
    <div
      className="hero-logo-mark relative h-[min(72vw,420px)] w-[min(72vw,420px)] sm:h-[480px] sm:w-[480px] md:h-[540px] md:w-[540px] lg:h-[600px] lg:w-[600px] xl:h-[660px] xl:w-[660px]"
      aria-hidden
    >
      <Image
        src="/images/hero/runner1.png"
        alt=""
        fill
        priority
        sizes="(max-width: 768px) 70vw, 600px"
        className="object-contain object-right opacity-90 mix-blend-lighten lg:opacity-95"
      />
    </div>
  );
}
