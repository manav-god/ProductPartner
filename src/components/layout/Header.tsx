"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { SiteLogo } from "@/components/SiteLogo";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
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
      href="/contact"
      onClick={onClick}
      className={`inline-flex h-[45px] items-center gap-2 rounded-[10px] bg-accent px-[28px] text-[14px] font-semibold text-white transition-colors hover:bg-accent-hover ${className}`}
    >
      Get in touch
      <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  );
}

function ServiceIcon({ icon }: { icon?: string }) {
  if (!icon) {
    return <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-accent" />;
  }

  return (
    <Image
      src={icon}
      alt=""
      width={22}
      height={22}
      className="mt-0.5 h-[22px] w-[22px] shrink-0 object-contain"
      aria-hidden="true"
    />
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
      onClick={onClick}
      className="group/item flex items-start gap-3 px-5 py-3 transition-colors hover:bg-grey-surface"
    >
      <ServiceIcon icon={child.icon} />
      <span className="min-w-0">
        <span className="block text-[15px] font-semibold text-black">
          {child.label}
        </span>
        {child.description ? (
          <span className="mt-0.5 block text-[13px] leading-snug text-grey">
            {child.description}
          </span>
        ) : null}
      </span>
    </Link>
  );
}

function DesktopDropdown({ item }: { item: NavItem }) {
  const hasDescriptions = item.children?.some((child) => child.description);
  const isMega = Boolean(item.featured) || hasDescriptions;

  return (
    <div className="group relative flex h-full items-center">
      <button
        type="button"
        className="inline-flex h-full items-center gap-1.5 px-4 text-[16px] font-semibold text-black transition-colors hover:text-black/70"
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown className="h-2.5 w-2.5 text-accent transition-transform duration-200 group-hover:rotate-180" />
      </button>

      <div
        className={`pointer-events-none invisible absolute top-[calc(50%+18px)] z-50 opacity-0 transition-[opacity,visibility] duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 ${
          isMega ? "left-1/2 w-[min(92vw,720px)] -translate-x-1/2" : "left-0 w-[300px]"
        }`}
      >
        <div className="overflow-hidden rounded-[14px] border border-grey-border bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
          <div className={isMega && item.featured ? "grid md:grid-cols-[1.1fr_0.9fr]" : ""}>
            <ul className="py-2">
              {item.children?.map((child) => (
                <li key={child.href}>
                  <DropdownLink child={child} />
                </li>
              ))}
            </ul>

            {item.featured ? (
              <div className="border-t border-grey-border bg-grey-surface p-5 md:border-l md:border-t-0">
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-accent">
                  {item.featured.eyebrow}
                </p>
                <Link
                  href={item.featured.href}
                  className="mt-3 block text-[18px] font-semibold leading-snug text-black transition-colors hover:text-black/70"
                >
                  {item.featured.title}
                </Link>
                <p className="mt-2 text-[12px] text-grey-muted">{item.featured.meta}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-grey">
                  {item.featured.excerpt}
                </p>
                <Link
                  href={item.featured.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-black"
                >
                  Read full story
                  <ArrowRight className="h-3.5 w-3.5 text-accent" />
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
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
            {primaryNav.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.label} item={item} />
              ) : (
                <Link
                  key={item.label}
                  href={item.href || "/"}
                  className="inline-flex h-full items-center px-4 text-[16px] font-semibold text-black transition-colors hover:text-black/70"
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
          <nav className="mx-auto flex max-w-[1300px] flex-col px-5 py-4 md:px-8 lg:px-[40px]" aria-label="Mobile">
            {primaryNav.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    key={item.label}
                    href={item.href || "/"}
                    onClick={() => setMobileOpen(false)}
                    className="border-b border-grey-border py-4 text-[17px] font-semibold text-black"
                  >
                    {item.label}
                  </Link>
                );
              }

              const isOpen = openSection === item.label;

              return (
                <div key={item.label} className="border-b border-grey-border">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-left text-[17px] font-semibold text-black"
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
                        <li key={child.href}>
                          <DropdownLink
                            child={child}
                            onClick={() => setMobileOpen(false)}
                          />
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
                onClick={() => setMobileOpen(false)}
              />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
