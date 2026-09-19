import Link from "next/link";
import "./ways-to-work.css";

type WayCard = {
  id: string;
  number: string;
  muted: string;
  bold: string;
  subtitle: string;
  href: string;
  featured?: boolean;
  icon: "bulb" | "code" | "trend";
};

const cards: WayCard[] = [
  {
    id: "strategy",
    number: "01",
    muted: "Product",
    bold: "strategy",
    subtitle: "What to build, what to cut, and in what order",
    href: "/product-management",
    icon: "bulb",
  },
  {
    id: "development",
    number: "02",
    muted: "Product",
    bold: "development",
    subtitle: "MVP through custom builds, shipped in weeks",
    href: "/product-development",
    featured: true,
    icon: "code",
  },
  {
    id: "marketing",
    number: "03",
    muted: "Product",
    bold: "marketing",
    subtitle: "B2B go-to-market, SEO and AI search",
    href: "/product-marketing",
    icon: "trend",
  },
];
function CardIcon({ type }: { type: WayCard["icon"] }) {
  if (type === "bulb") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.8c.6.45 1 1.15 1 1.9V17h5v-1.3c0-.75.4-1.45 1-1.9A6 6 0 0 0 12 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "code") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8.5 7.5 4 12l4.5 4.5M15.5 7.5 20 12l-4.5 4.5M13.5 5.5 10.5 18.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 16.5 9.5 11l3.5 3.5L20 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 7.5H20v5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WaysToWorkSection() {
  return (
    <section
      id="services"
      className="wtw-section scroll-mt-[68px]"
      aria-labelledby="ways-to-work-heading"
    >
      <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
        <div className="max-w-2xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-white/55">
            Our Services
          </p>
          <h2
            id="ways-to-work-heading"
            className="mt-4 text-[32px] font-semibold leading-none tracking-tight text-white sm:text-[40px] md:text-[48px]"
          >
            Three ways to work together.
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-7 text-white/65">
            Most partners start with one and grow into the others.
          </p>
        </div>

        <div className="wtw-stage">
          <div className="wtw-glow" aria-hidden />
          <div className="wtw-orb" aria-hidden />

          <svg
            className="wtw-path"
            viewBox="0 0 1000 720"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              className="wtw-path__line"
              d="M210 168 C210 250 500 220 500 310 C500 400 790 370 790 470"
              stroke="#FF5900"
              strokeWidth="2"
              strokeDasharray="7 10"
              strokeLinecap="round"
            />
            <circle className="wtw-path__dot" cx="210" cy="168" r="4.5" />
            <circle className="wtw-path__dot" cx="500" cy="310" r="4.5" />
            <circle className="wtw-path__dot" cx="790" cy="470" r="4.5" />
          </svg>

          <div className="wtw-cards">
            {cards.map((card, index) => (
              <Link
                key={card.id}
                href={card.href}
                className={`wtw-card wtw-card--${index + 1}${
                  card.featured ? " wtw-card--active" : ""
                }`}
              >
                <div className="wtw-card__top">
                  <span className="wtw-card__number">{card.number}</span>
                  <span className="wtw-card__icon">
                    <CardIcon type={card.icon} />
                  </span>
                </div>
                <h3 className="wtw-card__title">
                  <span>{card.muted}</span> {card.bold}
                </h3>
                <p className="wtw-card__subtitle">{card.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
