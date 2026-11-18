"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { FillButton } from "@/components/FillButton";
import { SiteLogo } from "@/components/SiteLogo";
import { ChevronDown } from "@/components/icons";
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
    <FillButton
      href="/contact"
      onClick={onClick}
      variant={onDark ? "white-orange" : "black-white"}
      className={`h-11 rounded-full px-5 text-[15px] ${className}`}
    >
      Get in touch
    </FillButton>
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

function MenuToggleIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-[18px]" aria-hidden="true">
      <span
        className={`nav-drawer__icon-line absolute top-0 left-0 h-0.5 w-full rounded-full bg-current ${
          open ? "translate-y-[7px] rotate-45" : ""
        }`}
      />
      <span
        className={`nav-drawer__icon-line absolute top-[7px] left-0 h-0.5 w-full rounded-full bg-current ${
          open ? "scale-x-0 opacity-0" : ""
        }`}
      />
      <span
        className={`nav-drawer__icon-line absolute top-3.5 left-0 h-0.5 w-full rounded-full bg-current ${
          open ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </span>
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
    const desktop = window.matchMedia("(min-width: 1024px)");
    function onChange() {
      if (desktop.matches) {
        setMobileOpen(false);
        setOpenSection(null);
      }
    }
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const background = document.querySelectorAll("main, footer");
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    background.forEach((element) => {
      if (mobileOpen) element.setAttribute("inert", "");
      else element.removeAttribute("inert");
    });

    if (!mobileOpen) {
      return () => {
        document.body.style.overflow = "";
        background.forEach((element) => element.removeAttribute("inert"));
      };
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setOpenSection(null);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      background.forEach((element) => element.removeAttribute("inert"));
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  function closeMobile() {
    setMobileOpen(false);
    setOpenSection(null);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(14,14,14,0.08)] bg-white text-[#0e0e0e]">
      <div
        className="relative z-50 mx-auto flex h-[72px] w-full max-w-[1500px] items-center justify-between gap-3 px-5 sm:px-8 lg:px-12"
        inert={mobileOpen}
      >
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
          onClick={() => {
            if (mobileOpen) closeMobile();
            else setMobileOpen(true);
          }}
        >
          <MenuToggleIcon open={mobileOpen} />
        </button>
      </div>

      <div
        id={panelId}
        className={`nav-drawer fixed inset-0 z-[60] flex flex-col overflow-y-auto overscroll-contain bg-white lg:hidden ${
          mobileOpen ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <div className="shrink-0 border-b border-[rgba(14,14,14,0.08)]">
        <div className="mx-auto flex h-[72px] w-full max-w-[1500px] items-center justify-between gap-3 px-5 sm:px-8">
          <div className="contents" onClick={closeMobile}>
            <SiteLogo withWordmark tone="ink" compact />
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full"
            aria-label="Close menu"
            onClick={closeMobile}
          >
            <MenuToggleIcon open />
          </button>
        </div>
        </div>
        <nav
          className="mx-auto flex w-full max-w-[1500px] flex-1 flex-col px-5 pt-2 pb-8 sm:px-8"
          aria-label="Mobile"
        >
          {primaryNav.map((item, index) => {
            const motionClass = `nav-drawer__item ${
              mobileOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
            }`;
            const motionStyle = {
              transitionDelay: mobileOpen ? `${90 + index * 50}ms` : "0ms",
            };

            if (!item.children) {
              return (
                <Link
                  key={item.label}
                  href={item.href || "/"}
                  onClick={closeMobile}
                  className={`${motionClass} border-b border-[rgba(14,14,14,0.08)] py-4 text-[18px] leading-none font-semibold tracking-[-0.02em] text-[#0e0e0e] sm:py-5 sm:text-[20px]`}
                  style={motionStyle}
                >
                  {item.label}
                </Link>
              );
            }

            const isOpen = openSection === item.label;

            return (
              <div
                key={item.label}
                className={`${motionClass} border-b border-[rgba(14,14,14,0.08)]`}
                style={motionStyle}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 text-left text-[18px] leading-none font-semibold tracking-[-0.02em] text-[#0e0e0e] sm:py-5 sm:text-[20px]"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenSection((current) => (current === item.label ? null : item.label))
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3 w-3 text-[#0e0e0e]/45 transition-transform duration-300 ease-out ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                  inert={!isOpen}
                  aria-hidden={!isOpen}
                >
                  <ul className="overflow-hidden">
                    {item.children.map((child) => (
                      <li key={child.href + child.label}>
                        <DropdownLink child={child} onClick={closeMobile} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          <div
            className={`nav-drawer__item mt-auto pt-10 ${
              mobileOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
            }`}
            style={{ transitionDelay: mobileOpen ? `${90 + primaryNav.length * 50}ms` : "0ms" }}
          >
            <GetInTouchButton className="w-full justify-center" onClick={closeMobile} />
          </div>
        </nav>
      </div>
    </header>
  );
}
