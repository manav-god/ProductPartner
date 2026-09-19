import type { ReactNode } from "react";

export type StartCard = {
  id: string;
  subtitle: string;
  question: ReactNode;
  answer: string;
  href: string;
};

export type StartTab = {
  id: string;
  label: string;
  cards: StartCard[];
};

export const startTabs: StartTab[] = [
  {
    id: "product",
    label: "Product",
    cards: [
      {
        id: "consulting",
        subtitle: "Product Consulting",
        question: (
          <>
            You need clarity on direction, but{" "}
            <strong>don&apos;t know which bets to make</strong>?
          </>
        ),
        answer:
          "We assess opportunity, risk, and readiness, then hand you a clear GO / NO-GO product roadmap.",
        href: "/services/product-consulting",
      },
      {
        id: "management",
        subtitle: "Product Management",
        question: (
          <>
            Roadmaps keep slipping and{" "}
            <strong>priorities keep shifting</strong>?
          </>
        ),
        answer:
          "We install outcome-based product management so every sprint ties to metrics that matter.",
        href: "/services/product-management",
      },
      {
        id: "marketing",
        subtitle: "Product Marketing",
        question: (
          <>
            The product is ready, but the{" "}
            <strong>market story isn&apos;t landing</strong>?
          </>
        ),
        answer:
          "We sharpen positioning, messaging, and go-to-market so the right buyers understand the value fast.",
        href: "/services/product-marketing",
      },
      {
        id: "development",
        subtitle: "Product Development",
        question: (
          <>
            Your direction is validated, but you need{" "}
            <strong>production-grade product, fast</strong>?
          </>
        ),
        answer:
          "We deliver in focused milestones, production-ready product with a clear decision point after each phase.",
        href: "/services/product-development",
      },
      {
        id: "testing",
        subtitle: "Product Testing",
        question: (
          <>
            Quality gaps keep <strong>slowing every release</strong>?
          </>
        ),
        answer:
          "We put structured testing and release quality in place so shipping stays fast without breaking trust.",
        href: "/services/product-testing",
      },
    ],
  },
  {
    id: "software",
    label: "Software Development",
    cards: [
      {
        id: "software-development",
        subtitle: "Software Development",
        question: (
          <>
            You need custom software built{" "}
            <strong>the right way from day one</strong>?
          </>
        ),
        answer:
          "We design and engineer reliable software aligned to your product goals, stack, and delivery timeline.",
        href: "/services/software-development",
      },
      {
        id: "software-integration",
        subtitle: "Software Integration",
        question: (
          <>
            Your tools and systems don&apos;t talk, and{" "}
            <strong>data keeps getting stuck</strong>?
          </>
        ),
        answer:
          "We connect platforms, APIs, and workflows so information flows cleanly across your stack.",
        href: "/services/software-integration",
      },
      {
        id: "web-app-development",
        subtitle: "Web App Development",
        question: (
          <>
            You need a web product that is{" "}
            <strong>fast, scalable, and ready for users</strong>?
          </>
        ),
        answer:
          "We build modern web applications with clean architecture, strong UX, and production-ready delivery.",
        href: "/services/web-app-development",
      },
      {
        id: "staff-augmentation",
        subtitle: "Staff Augmentation",
        question: (
          <>
            Your roadmap is clear, but the{" "}
            <strong>team capacity isn&apos;t there</strong>?
          </>
        ),
        answer:
          "We embed skilled engineers into your squad so delivery keeps moving without long hiring cycles.",
        href: "/services/staff-augmentation",
      },
      {
        id: "software-outsourcing",
        subtitle: "Software Outsourcing",
        question: (
          <>
            You want an external partner to{" "}
            <strong>own delivery end to end</strong>?
          </>
        ),
        answer:
          "We take accountability for scoped outcomes, from discovery through build, launch, and iterate.",
        href: "/services/software-outsourcing",
      },
      {
        id: "saas-development",
        subtitle: "SaaS Development",
        question: (
          <>
            You&apos;re building a SaaS product and need it to{" "}
            <strong>scale with paying customers</strong>?
          </>
        ),
        answer:
          "We ship multi-tenant SaaS foundations, auth, billing-ready flows, and architecture built to grow.",
        href: "/services/saas-development",
      },
      {
        id: "mvp-development",
        subtitle: "MVP Development",
        question: (
          <>
            You need an MVP that proves value{" "}
            <strong>without overbuilding</strong>?
          </>
        ),
        answer:
          "We scope the smallest useful product, ship fast, and give you a clear next-step decision.",
        href: "/services/mvp-development",
      },
      {
        id: "digital-transformation",
        subtitle: "Digital Transformation",
        question: (
          <>
            Legacy processes are slowing you down and{" "}
            <strong>change feels too risky</strong>?
          </>
        ),
        answer:
          "We modernise systems and workflows in controlled stages so operations improve without chaos.",
        href: "/services/digital-transformation",
      },
      {
        id: "dedicated-software-team",
        subtitle: "Dedicated Software Team",
        question: (
          <>
            You need a long-term team that{" "}
            <strong>works like an extension of yours</strong>?
          </>
        ),
        answer:
          "We provide a dedicated pod with clear ownership, communication, and delivery rhythm.",
        href: "/services/dedicated-software-team",
      },
    ],
  },
];
