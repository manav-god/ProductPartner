export type TrustedClient = {
  id: string;
  alt: string;
  src: string;
  href: string;
  /** Optical scale so mixed logo art reads at a similar size */
  scale?: number;
};

export const heroContent = {
  eyebrow: "Product partner for founders and growing teams",
  titleLead: "The partner you wish",
  titleTail: "you’d started with",
  description:
    "Deciding what to build is harder than building it. We help with both: what to build, building it, launching it and keeping it moving.",
  primaryCta: {
    label: "Book a call",
    href: "/contact",
  },
  secondaryCta: {
    label: "See how we work",
    href: "/#services",
  },
  trustedLabel: "Our partners",
  trustedHighlight: "",
  trustedClients: [
    {
      id: "clientlogo1",
      alt: "Club Duelz",
      src: "/images/clientlogo/clubeduelz.png",
      href: "/work",
      scale: 1,
    },
    {
      id: "clientlogo2",
      alt: "Mediawise",
      src: "/images/clientlogo/mediawise.png",
      href: "/work",
      scale: 1,
    },
    {
      id: "clientlogo3",
      alt: "Statepharm",
      src: "/images/clientlogo/statepharm.png",
      href: "/work",
      scale: 1.55,
    },
    {
      id: "clientlogo4",
      alt: "Client logo",
      src: "/images/clientlogo/logo4.png",
      href: "/work",
      scale: 1.25,
    },
    {
      id: "clientlogo5",
      alt: "Client logo",
      src: "/images/clientlogo/logo5-clear.png",
      href: "/work",
      scale: 1.15,
    },
    {
      id: "dared",
      alt: "Dared",
      src: "/images/clientlogo/Dared.webp",
      href: "/work",
      scale: 1,
    },
  ] satisfies TrustedClient[],
};
