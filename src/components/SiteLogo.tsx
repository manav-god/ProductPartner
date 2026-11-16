import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  className?: string;
  withWordmark?: boolean;
  /** light = white wordmark on the dark bar. ink = dark wordmark on the pill. */
  tone?: "light" | "ink";
  compact?: boolean;
};

export function SiteLogo({
  className = "",
  withWordmark = false,
  tone = "light",
  compact = false,
}: SiteLogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center gap-2.5 ${className}`}
      aria-label="Product Partner home"
    >
      {compact ? (
        <img
          src="/images/icons/pp-mark.svg"
          alt=""
          width={40}
          height={28}
          className="h-7 w-10"
        />
      ) : (
        <Image
          src="/images/icons/pp-logo-nav.png"
          alt=""
          width={160}
          height={160}
          className="h-12 w-12 object-contain md:h-[52px] md:w-[52px]"
          priority
        />
      )}
      {withWordmark ? (
        <span
          className={
            compact
              ? `text-[21px] font-bold tracking-[-0.035em] ${
                  tone === "ink" ? "text-[#0e0e0e]" : "text-white"
                }`
              : `text-[17px] font-semibold tracking-[-0.02em] md:text-[18px] ${
                  tone === "ink" ? "text-[#0e0e0e]" : "text-white"
                }`
          }
        >
          Product Partner
          {compact ? <span className="text-[#ff5a1f]">.</span> : null}
        </span>
      ) : null}
    </Link>
  );
}
