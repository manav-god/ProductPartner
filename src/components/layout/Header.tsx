"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { SiteLogo } from "@/components/SiteLogo";
import { ArrowRight, CloseIcon, MenuIcon } from "@/components/icons";
import { primaryNav } from "@/lib/navigation";

function GetInTouchButton({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/#contact"
      onClick={onClick}
      className={`inline-flex h-[45px] items-center gap-2 rounded-[10px] bg-accent px-[28px] text-[14px] font-semibold text-white transition-colors hover:bg-accent-hover ${className}`}
    >
      Get in touch
      <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#eaeaea] bg-white">
      <div className="mx-auto flex h-[91px] w-full max-w-[1300px] items-center justify-between px-5 md:px-8 lg:px-[40px]">
        <SiteLogo />

        <div className="hidden h-full items-center gap-1 lg:flex">
          <nav className="flex h-full items-center" aria-label="Primary">
            {primaryNav.map((item) => (
              <Link
                key={item.label}
                href={item.href || "/"}
                className="inline-flex h-full items-center px-4 text-[16px] font-semibold text-black transition-colors hover:text-black/70"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-3 flex h-full items-center">
            <GetInTouchButton />
          </div>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-black lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls={panelId}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen ? (
        <div
          id={panelId}
          className="fixed inset-x-0 bottom-0 top-[91px] z-40 overflow-y-auto border-t border-[#eaeaea] bg-white lg:hidden"
        >
          <nav
            className="mx-auto flex max-w-[1300px] flex-col px-5 py-4 md:px-8 lg:px-[40px]"
            aria-label="Mobile"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.label}
                href={item.href || "/"}
                onClick={() => setMobileOpen(false)}
                className="border-b border-grey-border py-4 text-[17px] font-semibold text-black"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-6 pb-10">
              <GetInTouchButton
                className="w-full justify-center"
                onClick={() => setMobileOpen(false)}
              />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
