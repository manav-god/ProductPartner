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
    children: [
      {
        label: "Product Development",
        href: "/product-development",
        description: "MVPs, custom apps, and web platforms from idea to launch.",
      },
      {
        label: "Fractional Product Leadership",
        href: "/#services",
        description: "Product thinking on the inside — roadmap, retention, delivery.",
      },
      {
        label: "Product Marketing",
        href: "/#services",
        description: "Positioning and content that gets you found by buyers.",
      },
    ],
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
  { label: "Product Development", href: "/product-development" },
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
