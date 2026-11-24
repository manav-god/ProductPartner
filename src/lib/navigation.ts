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
  // Temporarily hidden — Industry pages (kept locally, not live)
  // {
  //   label: "Industries",
  //   children: [
  //     {
  //       label: "Sports Tech",
  //       href: "/sports-tech",
  //       description: "Software for leagues, clubs, teams and tournament organizers.",
  //     },
  //     {
  //       label: "Healthcare",
  //       href: "/healthcare-technology",
  //       description: "Software for clinical, patient and healthcare operations.",
  //     },
  //     {
  //       label: "Logistics & Transportation",
  //       href: "/logistics-transportation-technology",
  //       description: "Software for freight, fleets, warehouses and delivery.",
  //     },
  //   ],
  // },
  {
    label: "Our work",
    href: "/work",
  },
  {
    label: "Blogs",
    href: "/blog",
  },
  // Temporarily hidden — About page
  // {
  //   label: "About",
  //   href: "/about",
  // },
];

export const footerServices = [
  { label: "Fractional Product Leadership", href: "/product-management" },
  { label: "Product Marketing & Positioning", href: "/product-marketing" },
  { label: "Product Development", href: "/product-development" },
];

// Temporarily hidden — Industry pages (kept locally, not live)
// export const footerIndustries = [
//   { label: "Sports Tech", href: "/sports-tech" },
//   { label: "Healthcare", href: "/healthcare-technology" },
//   { label: "Logistics & Transportation", href: "/logistics-transportation-technology" },
// ];

export const footerCompany = [
  // Temporarily hidden — About page
  // { label: "About Product Partner", href: "/about" },
  { label: "Our work", href: "/work" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/manavvshah/" },
  { label: "X", href: "https://x.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
];
