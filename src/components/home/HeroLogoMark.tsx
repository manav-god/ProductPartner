import Image from "next/image";

/**
 * Soft right-side hero graphic — runner mark on desktop only.
 */
export function HeroLogoMark() {
  return (
    <div
      className="hero-logo-mark relative h-[380px] w-[380px] xl:h-[420px] xl:w-[420px]"
      aria-hidden
    >
      <Image
        src="/images/hero/runner3.svg"
        alt=""
        fill
        priority
        unoptimized
        sizes="420px"
        className="object-contain object-center opacity-90 lg:opacity-95"
      />
    </div>
  );
}
