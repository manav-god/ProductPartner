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
    children: [
      {
        label: "Product Development",
        href: "/services/product-development",
        icon: "/images/icons/productdevelopment.svg",
      },
      {
        label: "Product Management",
        href: "/services/product-management",
        icon: "/images/icons/productmanagement.svg",
      },
      {
        label: "Product Marketing",
        href: "/services/product-marketing",
        icon: "/images/icons/productmarketing.svg",
      },
      {
        label: "Product Testing",
        href: "/services/product-testing",
        icon: "/images/icons/producttesting.svg",
      },
      {
        label: "Product Consulting",
        href: "/services/product-consulting",
        icon: "/images/icons/Productconsulting.svg",
      },
    ],
  },
  {
    label: "Our work",
    href: "/case-studies",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Careers",
    href: "/careers",
  },
];

export const footerServices = [
  { label: "Product Development", href: "/services/product-development" },
  { label: "Product Management", href: "/services/product-management" },
  { label: "Product Marketing", href: "/services/product-marketing" },
  { label: "Product Testing", href: "/services/product-testing" },
  { label: "Product Consulting", href: "/services/product-consulting" },
];

export const footerCompany = [
  { label: "About Product Partner", href: "/about" },
  { label: "Our work", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "X", href: "https://x.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
];
