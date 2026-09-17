import Link from "next/link";
import { SiteLogo } from "@/components/SiteLogo";
import {
  ArrowRight,
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
    <footer className="mt-auto">
      <section
        id="contact"
        className="bg-black text-white"
        aria-labelledby="footer-contact-heading"
      >
        <div className="mx-auto grid max-w-[1300px] gap-10 px-5 py-16 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-[40px] lg:py-20">
          <div>
            <h2
              id="footer-contact-heading"
              className="max-w-md text-[32px] font-bold leading-tight tracking-tight md:text-[40px]"
            >
              Get in touch to discuss your product vision with our team
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/70">
              Tell us what you&apos;re building. We&apos;ll help you shape the
              roadmap, team, and delivery plan.
            </p>
          </div>

          <form
            className="grid gap-4 sm:grid-cols-2"
            action="/contact"
            method="get"
          >
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-[13px] font-medium text-white/70">
                First name*
              </span>
              <input
                name="firstName"
                type="text"
                placeholder="First name"
                required
                className="h-12 w-full rounded-[10px] border border-white/15 bg-white/5 px-4 text-[15px] text-white outline-none placeholder:text-white/35 focus:border-accent"
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-[13px] font-medium text-white/70">
                Last name*
              </span>
              <input
                name="lastName"
                type="text"
                placeholder="Last name"
                required
                className="h-12 w-full rounded-[10px] border border-white/15 bg-white/5 px-4 text-[15px] text-white outline-none placeholder:text-white/35 focus:border-accent"
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-[13px] font-medium text-white/70">
                Email*
              </span>
              <input
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                className="h-12 w-full rounded-[10px] border border-white/15 bg-white/5 px-4 text-[15px] text-white outline-none placeholder:text-white/35 focus:border-accent"
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-[13px] font-medium text-white/70">
                Company name*
              </span>
              <input
                name="company"
                type="text"
                placeholder="Company"
                required
                className="h-12 w-full rounded-[10px] border border-white/15 bg-white/5 px-4 text-[15px] text-white outline-none placeholder:text-white/35 focus:border-accent"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-[13px] font-medium text-white/70">
                I&apos;m looking for*
              </span>
              <select
                name="lookingFor"
                required
                defaultValue=""
                className="h-12 w-full rounded-[10px] border border-white/15 bg-white/5 px-4 text-[15px] text-white outline-none focus:border-accent"
              >
                <option value="" disabled className="text-black">
                  Select your service
                </option>
                <option value="product-development" className="text-black">
                  Product Development
                </option>
                <option value="product-management" className="text-black">
                  Product Management
                </option>
                <option value="product-marketing" className="text-black">
                  Product Marketing
                </option>
                <option value="product-testing" className="text-black">
                  Product Testing
                </option>
                <option value="product-consulting" className="text-black">
                  Product Consulting
                </option>
                <option value="other" className="text-black">
                  Something else
                </option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-[13px] font-medium text-white/70">
                How can we help?
              </span>
              <textarea
                name="message"
                rows={4}
                placeholder="Leave us a message..."
                className="w-full resize-y rounded-[10px] border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-white outline-none placeholder:text-white/35 focus:border-accent"
              />
            </label>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex h-[48px] items-center gap-2 rounded-[10px] bg-accent px-7 text-[14px] font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Book a free consultation
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <div className="bg-[#f2f2f2]">
        <div className="mx-auto grid max-w-[1300px] gap-12 px-5 py-14 md:px-8 lg:grid-cols-[1.1fr_1fr_1fr] lg:px-[40px]">
          <div>
            <SiteLogo />
            <div className="mt-8 flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.label as keyof typeof socialIconMap];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-black transition-colors hover:text-accent"
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
              className="text-[15px] font-bold text-black"
            >
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-grey transition-colors hover:text-black"
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
              className="text-[15px] font-bold text-black"
            >
              Company
            </h2>
            <ul className="mt-5 space-y-3">
              {footerCompany.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-grey transition-colors hover:text-black"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-black/10">
          <div className="mx-auto flex max-w-[1300px] flex-col gap-2 px-5 py-5 text-[13px] text-grey md:flex-row md:items-center md:justify-between md:px-8 lg:px-[40px]">
            <p>© {new Date().getFullYear()} Product Partner. All rights reserved.</p>
            <div className="flex gap-5">
              <Link href="/privacy" className="hover:text-black">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-black">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
