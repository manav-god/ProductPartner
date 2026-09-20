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
        description:
          "MVPs, custom apps and web platforms, built to survive the next stage.",
      },
      {
        label: "Fractional Product Leadership",
        href: "/product-management",
        description:
          "Roadmap, retention and delivery, owned by someone accountable for shipping.",
      },
      {
        label: "Product Marketing",
        href: "/product-marketing",
        description:
          "B2B search, content and positioning, built on how buyers actually search now.",
      },
    ],
  },
  {
    label: "Our work",
    href: "/work",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const footerServices = [
  { label: "Product Development", href: "/product-development" },
  { label: "Fractional Product Leadership", href: "/product-management" },
  { label: "Product Marketing", href: "/product-marketing" },
];

export const footerCompany = [
  { label: "About Product Partner", href: "/about" },
  { label: "Our work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "X", href: "https://x.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
];
