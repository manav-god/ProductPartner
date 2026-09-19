"use client";

import { usePathname } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";

export function FooterContact() {
  const pathname = usePathname();

  if (pathname === "/contact") {
    return null;
  }

  return (
    <section
      id="contact"
      className="scroll-mt-[68px] border-t border-white/20"
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

        <ContactForm />
      </div>
    </section>
  );
}
