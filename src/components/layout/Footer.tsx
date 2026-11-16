import { Inter } from "next/font/google";
import Link from "next/link";
import { SiteLogo } from "@/components/SiteLogo";
import { FooterContact } from "@/components/layout/FooterContact";
import { footerCompany, footerServices, socialLinks } from "@/lib/navigation";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h2 className="text-[12px] font-semibold tracking-[0.14em] text-[#6a6864] uppercase">
        {title}
      </h2>
      <ul className="mt-4 space-y-5">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-[14px] leading-none text-[#0e0e0e]">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className={`${inter.className} mt-auto bg-white text-[#0e0e0e]`}>
      <FooterContact />

      <div className="border-t border-[rgba(14,14,14,0.1)]">
      <div className="mx-auto w-full max-w-[1500px] px-5 pt-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_240px_160px_160px] lg:gap-x-10">
          <div>
            <SiteLogo compact withWordmark />
            <p className="mt-3 text-[15px] leading-6 text-[#45433f]">
              The partner you wish you’d started with.
            </p>
          </div>
          <FooterColumn title="Services" links={footerServices} />
          <FooterColumn title="Company" links={footerCompany} />
          <nav aria-label="Follow">
            <h2 className="text-[12px] font-semibold tracking-[0.14em] text-[#6a6864] uppercase">
              Follow
            </h2>
            <ul className="mt-4 space-y-5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] leading-none text-[#0e0e0e]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>
      </div>
      <div className="mt-12 border-t border-[rgba(14,14,14,0.1)]">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-3 px-5 py-6 text-[13px] text-[#5e5c58] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>People work with people. © {new Date().getFullYear()} Product Partner</p>
          <div className="flex gap-6">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
