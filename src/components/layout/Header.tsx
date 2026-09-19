"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { SiteLogo } from "@/components/SiteLogo";
import {
  ArrowRight,
  ChevronDown,
  CloseIcon,
  MenuIcon,
} from "@/components/icons";
import { primaryNav, type NavItem, type NavLink } from "@/lib/navigation";

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
      className={`inline-flex h-10 items-center gap-2 rounded-[10px] bg-accent px-6 text-[14px] font-semibold text-white transition-colors hover:bg-accent-hover ${className}`}
    >
      Get in touch
      <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  );
}

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div
      className="relative flex h-full items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="inline-flex h-full items-center gap-1.5 px-3.5 text-[15px] font-semibold text-white transition-colors hover:text-white/70"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {item.label}
        <ChevronDown
          className={`h-2.5 w-2.5 text-accent transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute left-0 top-[calc(50%+18px)] z-50 w-[320px] transition-[opacity,visibility] duration-150 ${
          open
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-[14px] border border-white/10 bg-[#111] shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
          <ul className="py-2">
            {item.children?.map((child) => (
              <li key={child.href + child.label}>
                <DropdownLink child={child} onClick={() => setOpen(false)} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownLink({
  child,
  onClick,
}: {
  child: NavLink;
  onClick?: () => void;
}) {
  return (
    <Link
      href={child.href}
      onClick={() => {
        onClick?.();
        (document.activeElement as HTMLElement | null)?.blur();
      }}
      className="group/item block px-5 py-3 transition-colors hover:bg-white/5"
    >
      <span className="block text-[15px] font-semibold text-white">
        {child.label}
      </span>
      {child.description ? (
        <span className="mt-0.5 block text-[13px] leading-snug text-white/55">
          {child.description}
        </span>
      ) : null}
    </Link>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const panelId = useId();
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setOpenSection(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function closeMobile() {
    setMobileOpen(false);
    setOpenSection(null);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]">
      <div className="mx-auto flex h-[68px] w-full max-w-[1300px] items-center justify-between px-5 md:px-8 lg:px-[40px]">
        <SiteLogo className="h-full" withWordmark />

        <div className="hidden h-full items-center gap-1 lg:flex">
          <nav className="flex h-full items-center" aria-label="Primary">
            {primaryNav.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.label} item={item} />
              ) : (
                <Link
                  key={item.label}
                  href={item.href || "/"}
                  className="inline-flex h-full items-center px-3.5 text-[15px] font-semibold text-white transition-colors hover:text-white/70"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="ml-3 flex h-full items-center">
            <GetInTouchButton />
          </div>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white lg:hidden"
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
          className="fixed inset-x-0 bottom-0 top-[68px] z-40 overflow-y-auto border-t border-white/10 bg-[#111111] lg:hidden"
        >
          <nav
            className="mx-auto flex max-w-[1300px] flex-col px-5 py-4 md:px-8 lg:px-[40px]"
            aria-label="Mobile"
          >
            {primaryNav.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    key={item.label}
                    href={item.href || "/"}
                    onClick={closeMobile}
                    className="border-b border-white/10 py-4 text-[17px] font-semibold text-white"
                  >
                    {item.label}
                  </Link>
                );
              }

              const isOpen = openSection === item.label;

              return (
                <div key={item.label} className="border-b border-white/10">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-left text-[17px] font-semibold text-white"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenSection((current) =>
                        current === item.label ? null : item.label,
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3 w-3 text-accent transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen ? (
                    <ul className="pb-4">
                      {item.children.map((child) => (
                        <li key={child.href + child.label}>
                          <DropdownLink child={child} onClick={closeMobile} />
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}

            <div className="pt-6 pb-10">
              <GetInTouchButton
                className="w-full justify-center"
                onClick={closeMobile}
              />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
