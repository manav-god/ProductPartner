"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export function FooterContact() {
  const pathname = usePathname();

  if (
    pathname === "/contact" ||
    pathname === "/product-development" ||
    pathname === "/product-marketing" ||
    pathname === "/product-management"
  ) {
    return null;
  }

  if (
    pathname === "/work" ||
    pathname === "/blog" ||
    pathname.startsWith("/blog/")
  ) {
    return (
      <section
        id="contact"
        className="scroll-mt-[120px] border-t border-black/10 bg-white text-[#0e0e0e]"
        aria-labelledby="footer-contact-heading"
      >
        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-[40px] lg:py-20">
          <div>
            <h2
              id="footer-contact-heading"
              className="max-w-md text-[32px] font-bold leading-tight tracking-tight text-[#0e0e0e] md:text-[40px]"
            >
              Get in touch to discuss your product vision with our team
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#0e0e0e]/70">
              Tell us what you&apos;re building. We&apos;ll help you shape the
              roadmap, team, and delivery plan.
            </p>
          </div>

          <ContactForm tone="light" />
        </div>
      </section>
    );
  }

  if (pathname === "/") {
    return (
      <section
        id="contact"
        aria-labelledby="footer-contact-heading"
        className={`${inter.className} scroll-mt-[120px] bg-white text-[#0e0e0e]`}
      >
        <div className="mx-auto grid w-full max-w-[1500px] items-start gap-10 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[minmax(0,1fr)_544px] lg:gap-16 lg:px-12 lg:py-[140px]">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.14em] text-[#5e5c58] uppercase">
              Get in touch
            </p>
            <h2
              id="footer-contact-heading"
              className="mt-4 text-[40px] leading-[1.05] font-semibold tracking-[-0.05em] sm:text-[56px] lg:text-[72px]"
            >
              <span className="block text-[#8a8883]">Building</span>
              <span className="block text-[#8a8883]">something?</span>
              <span className="block">
                Let’s connect<span className="text-[#ff5a1f]">.</span>
              </span>
            </h2>
            <p className="mt-6 max-w-[36ch] text-[17px] leading-[1.7] text-[#45433f]">
              Tell us what you’re building and where you’re stuck. You’ll hear back from Manav.
            </p>
          </div>
          <div className="rounded-[28px] bg-[#f6f5f2] p-7 sm:p-10">
            <ContactForm tone="light" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="scroll-mt-[120px] border-t border-white/20 bg-[#111111] text-white"
      aria-labelledby="footer-contact-heading"
    >
      <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-[40px] lg:py-20">
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

        <ContactForm />
      </div>
    </section>
  );
}
