import Link from "next/link";
import { SiteLogo } from "@/components/SiteLogo";
import { FooterContact } from "@/components/layout/FooterContact";
import {
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons";
import {
  footerCompany,
  footerServices,
  socialLinks,
} from "@/lib/navigation";

const socialIconMap = {
  LinkedIn: LinkedInIcon,
  X: XIcon,
  Instagram: InstagramIcon,
} as const;

export function Footer() {
  return (
    <footer className="mt-auto bg-[#111111] text-white">
      <FooterContact />

      <div className="border-t border-white/20">
        <div className="mx-auto grid max-w-[1300px] gap-10 px-5 py-12 md:px-8 lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-12 lg:px-[40px]">
          <div>
            <SiteLogo />
            <div className="mt-6 flex items-center gap-5">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.label as keyof typeof socialIconMap];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex shrink-0 items-center justify-center text-white/80 transition-colors hover:text-accent"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-labelledby="footer-services-heading">
            <h2
              id="footer-services-heading"
              className="text-[15px] font-bold text-white"
            >
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {footerServices.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-company-heading">
            <h2
              id="footer-company-heading"
              className="text-[15px] font-bold text-white"
            >
              Company
            </h2>
            <ul className="mt-5 space-y-3">
              {footerCompany.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-[1300px] flex-col gap-3 px-5 py-6 text-[13px] text-white/50 md:flex-row md:items-center md:justify-between md:px-8 lg:px-[40px]">
            <p>© {new Date().getFullYear()} Product Partner. All rights reserved.</p>
            <div className="flex gap-5">
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
