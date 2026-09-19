import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  className?: string;
};

export function SiteLogo({ className = "" }: SiteLogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex h-full shrink-0 items-center ${className}`}
      aria-label="Product Partner home"
    >
      <Image
        src="/images/icons/pp-logo-nav.png"
        alt="Product Partner"
        width={160}
        height={160}
        className="h-12 w-12 object-contain md:h-[52px] md:w-[52px]"
        priority
      />
    </Link>
  );
}
