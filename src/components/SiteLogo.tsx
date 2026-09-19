import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  className?: string;
};

export function SiteLogo({ className = "" }: SiteLogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Product Partner home"
    >
      <Image
        src="/images/icons/dynamic_red_ribbon_p_logo.svg"
        alt="Product Partner"
        width={48}
        height={48}
        className="h-10 w-10 object-contain md:h-11 md:w-11"
        priority
      />
    </Link>
  );
}
