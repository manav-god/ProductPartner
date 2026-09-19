import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  className?: string;
  withWordmark?: boolean;
};

export function SiteLogo({ className = "", withWordmark = false }: SiteLogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center gap-2.5 ${className}`}
      aria-label="Product Partner home"
    >
      <Image
        src="/images/icons/pp-logo-nav.png"
        alt=""
        width={160}
        height={160}
        className="h-12 w-12 object-contain md:h-[52px] md:w-[52px]"
        priority
      />
      {withWordmark ? (
        <span className="text-[17px] font-semibold tracking-[-0.02em] text-white md:text-[18px]">
          Product Partner
        </span>
      ) : null}
    </Link>
  );
}
