export type NavLink = {
  label: string;
  href: string;
  description?: string;
  icon?: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavLink[];
  featured?: {
    eyebrow: string;
    title: string;
    href: string;
    meta: string;
    excerpt: string;
  };
};

export const primaryNav: NavItem[] = [
  {
    label: "Services",
    href: "/#services",
  },
  {
    label: "Our work",
    href: "/#work",
  },
  {
    label: "About",
    href: "/#about",
  },
];

export const footerServices = [
  { label: "Product Development", href: "/#services" },
  { label: "Fractional Product Leadership", href: "/#services" },
  { label: "Product Marketing", href: "/#services" },
];

export const footerCompany = [
  { label: "About Product Partner", href: "/#about" },
  { label: "Our work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "X", href: "https://x.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
];
