export type TrustedClient = {
  id: string;
  alt: string;
  src: string;
  href: string;
  /** Optical scale so mixed logo art reads at a similar size */
  scale?: number;
};

export const heroContent = {
  eyebrow: "Your Product Partners",
  titleLine1: "Build, Ship & Scale",
  titleLine2: "Products With Confidence.",
  description:
    "From product strategy to delivery and go-to-market, we help startups and enterprises extend their product capacity and ship secure, scalable software faster.",
  primaryCta: {
    label: "Talk to a Product Expert",
    href: "/#contact",
  },
  secondaryCta: {
    label: "View Our Work",
    href: "/#work",
  },
  trustedLabel: "Trusted by",
  trustedHighlight: "",
  trustedClients: [
    {
      id: "clientlogo1",
      alt: "clientlogo1",
      src: "/images/clientlogo/clubeduelz.png",
      href: "/#work",
      scale: 1,
    },
    {
      id: "clientlogo2",
      alt: "clientlogo2",
      src: "/images/clientlogo/mediawise.png",
      href: "/#work",
      scale: 1,
    },
    {
      id: "clientlogo3",
      alt: "clientlogo3",
      src: "/images/clientlogo/statepharm.png",
      href: "/#work",
      scale: 1.55,
    },
    {
      id: "clientlogo4",
      alt: "clientlogo4",
      src: "/images/clientlogo/logo4.png",
      href: "/#work",
      scale: 1.25,
    },
  ] satisfies TrustedClient[],
};
