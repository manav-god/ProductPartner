"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { SiteLogo } from "@/components/SiteLogo";
import { ChevronDown, CloseIcon, MenuIcon } from "@/components/icons";
import { primaryNav, type NavItem, type NavLink } from "@/lib/navigation";

function GetInTouchButton({
  className = "",
  onClick,
  onDark = false,
}: {
  className?: string;
  onClick?: () => void;
  onDark?: boolean;
}) {
  return (
    <Link
      href="/contact"
      onClick={onClick}
      className={`inline-flex h-11 items-center rounded-full px-5 text-[15px] font-semibold transition-colors ${
        onDark
          ? "bg-white text-[#0e0e0e] hover:bg-[#f4f3ef]"
          : "bg-[#0e0e0e] text-white hover:bg-[#2a2826]"
      } ${className}`}
    >
      Get in touch
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
        className="inline-flex h-11 items-center gap-1.5 text-[15px] font-medium text-inherit transition-colors hover:opacity-60"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {item.label}
        <ChevronDown
          className={`h-2.5 w-2.5 opacity-45 transition-transform duration-200 ${
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
        <div className="overflow-hidden rounded-[14px] border border-[rgba(14,14,14,0.08)] bg-white shadow-[0_12px_40px_rgba(20,16,12,0.08)]">
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
      className="group/item block px-5 py-3 transition-colors hover:bg-[#f4f3ef]"
    >
      <span className="block text-[15px] font-semibold text-[#0e0e0e]">{child.label}</span>
      {child.description ? (
        <span className="mt-0.5 block text-[13px] leading-snug text-[#6a6864]">
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(14,14,14,0.08)] bg-white text-[#0e0e0e]">
      <div className="relative mx-auto flex h-[72px] w-full max-w-[1500px] items-center justify-between gap-3 px-5 sm:px-8 lg:px-12">
        <SiteLogo withWordmark tone="ink" compact />

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          <nav className="flex items-center gap-5 xl:gap-7" aria-label="Primary">
            {primaryNav.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.label} item={item} />
              ) : (
                <Link
                  key={item.label}
                  href={item.href || "/"}
                  className="inline-flex items-center text-[15px] font-medium transition-colors hover:text-[#0e0e0e]/60"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center">
            <GetInTouchButton />
          </div>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-inherit lg:hidden"
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
          className="absolute inset-x-4 top-[calc(100%+8px)] z-40 max-h-[calc(100vh-120px)] overflow-y-auto rounded-3xl border border-[rgba(14,14,14,0.08)] bg-white shadow-[0_10px_30px_rgba(20,16,12,0.06)] sm:inset-x-6 lg:hidden"
        >
          <nav className="flex flex-col px-5 py-3" aria-label="Mobile">
            {primaryNav.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    key={item.label}
                    href={item.href || "/"}
                    onClick={closeMobile}
                    className="border-b border-[rgba(14,14,14,0.08)] py-4 text-[17px] font-semibold text-[#0e0e0e]"
                  >
                    {item.label}
                  </Link>
                );
              }

              const isOpen = openSection === item.label;

              return (
                <div key={item.label} className="border-b border-[rgba(14,14,14,0.08)]">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-left text-[17px] font-semibold text-[#0e0e0e]"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenSection((current) => (current === item.label ? null : item.label))
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3 w-3 text-[#0e0e0e]/45 transition-transform ${
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

            <div className="pt-6 pb-6">
              <GetInTouchButton className="w-full justify-center" onClick={closeMobile} />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
