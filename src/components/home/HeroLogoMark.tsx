import Image from "next/image";

/**
 * Soft right-side brand mark — large watermark, no motion / light beams.
 */
export function HeroLogoMark() {
  return (
    <div
      className="hero-logo-mark relative h-[min(72vw,420px)] w-[min(72vw,420px)] sm:h-[480px] sm:w-[480px] md:h-[540px] md:w-[540px] lg:h-[600px] lg:w-[600px] xl:h-[660px] xl:w-[660px]"
      aria-hidden
    >
      <Image
        src="/images/icons/pp-logo-nav.png"
        alt=""
        fill
        priority
        sizes="(max-width: 768px) 70vw, 600px"
        className="object-contain opacity-[0.38] sm:opacity-[0.42] lg:opacity-[0.48]"
      />
    </div>
  );
}
