import Image from "next/image";
import Link from "next/link";
import "@/app/product-development/product-development.css";
import "@/app/about/about.css";

const proof = [
  { value: "8+", label: "Startups taken from idea to first product" },
  { value: "4", label: "Regions worked across" },
  { value: "3", label: "Industries covered" },
  { value: "1", label: "Acquisition: GamePlan to Stack Sports" },
];

const steps = [
  {
    title: "We sit at the beginning",
    body: "Before the idea hardens into a spec someone else has to defend.",
  },
  {
    title: "We shape the product",
    body: "Before a line of code gets written, because that's the cheapest place to be wrong.",
  },
  {
    title: "We build it ourselves",
    body: "We're the ones who decided what to build, so there's no one else to hand the blame to.",
  },
  {
    title: "We stay for growth",
    body: "Launch was never the finish line. It's the first checkpoint we're accountable for.",
  },
];

function ArtBudgetSpent() {
  return (
    <svg
      className="about-art"
      viewBox="0 0 520 420"
      role="img"
      aria-label="Illustration: three of five product stages are built, while the budget bar is completely spent."
    >
      <rect width="520" height="420" rx="20" fill="rgba(255,255,255,0.04)" />
      <text
        x="52"
        y="62"
        fontSize="15"
        fontWeight="600"
        fill="rgba(255,255,255,0.85)"
      >
        3 of 5 stages built
      </text>
      <rect x="36" y="330" width="448" height="5" rx="2.5" fill="#ffffff" />
      <rect x="52" y="260" width="72" height="70" rx="10" fill="#ffffff" />
      <rect x="66" y="276" width="44" height="6" rx="3" fill="#111111" opacity=".9" />
      <rect x="66" y="290" width="28" height="6" rx="3" fill="#111111" opacity=".55" />
      <rect x="138" y="220" width="72" height="110" rx="10" fill="#ffffff" />
      <rect x="152" y="236" width="44" height="6" rx="3" fill="#111111" opacity=".9" />
      <rect x="152" y="250" width="28" height="6" rx="3" fill="#111111" opacity=".55" />
      <rect x="224" y="180" width="72" height="150" rx="10" fill="#ffffff" />
      <rect x="238" y="196" width="44" height="6" rx="3" fill="#111111" opacity=".9" />
      <rect x="238" y="210" width="28" height="6" rx="3" fill="#111111" opacity=".55" />
      <rect
        x="310"
        y="140"
        width="72"
        height="190"
        rx="10"
        fill="none"
        stroke="#FF5900"
        strokeWidth="3"
        strokeDasharray="8 8"
      />
      <rect
        x="396"
        y="100"
        width="72"
        height="230"
        rx="10"
        fill="none"
        stroke="#FF5900"
        strokeWidth="3"
        strokeDasharray="8 8"
      />
      <line
        x1="432"
        y1="100"
        x2="432"
        y2="66"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M432 66 L462 76 L432 86 Z" fill="#FF5900" />
      <text x="52" y="366" fontSize="14" fontWeight="600" fill="#ffffff">
        Budget
      </text>
      <text
        x="468"
        y="366"
        fontSize="14"
        fontWeight="600"
        fill="#FF5900"
        textAnchor="end"
      >
        Spent
      </text>
      <rect x="52" y="376" width="416" height="16" rx="8" fill="#FF5900" />
    </svg>
  );
}

function ArtRightIdea() {
  return (
    <svg
      className="about-art"
      viewBox="0 0 520 340"
      role="img"
      aria-label="Illustration: a rough idea passes a checkpoint asking whether it is the right idea, before becoming a first product."
    >
      <rect width="520" height="340" rx="20" fill="rgba(255,255,255,0.04)" />
      <text
        x="52"
        y="66"
        fontSize="15"
        fontWeight="600"
        fill="rgba(255,255,255,0.85)"
      >
        Before anyone builds anything
      </text>
      <line
        x1="150"
        y1="190"
        x2="204"
        y2="190"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="3"
        strokeDasharray="1 9"
        strokeLinecap="round"
      />
      <line
        x1="316"
        y1="190"
        x2="378"
        y2="190"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle
        cx="100"
        cy="190"
        r="46"
        fill="#1a1a1a"
        stroke="#ffffff"
        strokeWidth="3"
      />
      <text
        x="100"
        y="208"
        fontSize="52"
        fontWeight="500"
        fill="#FF5900"
        textAnchor="middle"
      >
        ?
      </text>
      <polygon points="260,134 316,190 260,246 204,190" fill="#FF5900" />
      <path
        d="M241 191 l13 13 l25 -27"
        fill="none"
        stroke="#ffffff"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="380" y="146" width="90" height="88" rx="18" fill="#ffffff" />
      <text
        x="425"
        y="198"
        fontSize="20"
        fontWeight="700"
        fill="#111111"
        textAnchor="middle"
      >
        MVP
      </text>
      <text
        x="100"
        y="280"
        fontSize="14"
        fontWeight="500"
        fill="rgba(255,255,255,0.55)"
        textAnchor="middle"
      >
        Rough idea
      </text>
      <text
        x="260"
        y="280"
        fontSize="14"
        fontWeight="600"
        fill="#FF5900"
        textAnchor="middle"
      >
        Right idea?
      </text>
      <text
        x="425"
        y="280"
        fontSize="14"
        fontWeight="500"
        fill="rgba(255,255,255,0.55)"
        textAnchor="middle"
      >
        First product
      </text>
    </svg>
  );
}

function ArtTheGap() {
  return (
    <svg
      className="about-art"
      viewBox="0 0 520 420"
      role="img"
      aria-label="Illustration: development shops are paid for scope, consultants are paid for opinions, and Product Partner bridges whether the product works."
    >
      <rect
        width="520"
        height="420"
        rx="20"
        fill="#161616"
        stroke="rgba(255,255,255,0.12)"
      />
      <text
        x="52"
        y="66"
        fontSize="15"
        fontWeight="600"
        fill="rgba(255,255,255,0.55)"
      >
        The gap nobody is paid to close
      </text>
      <rect x="52" y="104" width="416" height="26" rx="13" fill="#FF5900" />
      <text
        x="260"
        y="122"
        fontSize="12.5"
        fontWeight="600"
        fill="#ffffff"
        textAnchor="middle"
      >
        Product Partner
      </text>
      <rect x="52" y="130" width="150" height="220" rx="16" fill="#1f1f1f" />
      <rect x="318" y="130" width="150" height="220" rx="16" fill="#1f1f1f" />
      <text
        x="127"
        y="202"
        fontSize="17"
        fontWeight="600"
        fill="#ffffff"
        textAnchor="middle"
      >
        Development
      </text>
      <text
        x="127"
        y="224"
        fontSize="17"
        fontWeight="600"
        fill="#ffffff"
        textAnchor="middle"
      >
        shops
      </text>
      <text
        x="127"
        y="274"
        fontSize="14"
        fill="rgba(255,255,255,0.5)"
        textAnchor="middle"
      >
        paid for
      </text>
      <text
        x="127"
        y="306"
        fontSize="28"
        fill="#ffffff"
        textAnchor="middle"
      >
        scope
      </text>
      <text
        x="393"
        y="213"
        fontSize="17"
        fontWeight="600"
        fill="#ffffff"
        textAnchor="middle"
      >
        Consultants
      </text>
      <text
        x="393"
        y="274"
        fontSize="14"
        fill="rgba(255,255,255,0.5)"
        textAnchor="middle"
      >
        paid for
      </text>
      <text
        x="393"
        y="306"
        fontSize="28"
        fill="#ffffff"
        textAnchor="middle"
      >
        opinions
      </text>
      <circle
        cx="260"
        cy="290"
        r="40"
        fill="none"
        stroke="#FF5900"
        strokeWidth="2.5"
        strokeDasharray="6 7"
      />
      <text
        x="260"
        y="296"
        fontSize="15"
        fontWeight="700"
        fill="#FF5900"
        textAnchor="middle"
      >
        Works?
      </text>
    </svg>
  );
}

export function AboutContent() {
  return (
    <div className="pd-page about-page">
      <main id="main-content">
        {/* HERO */}
        <section className="pd-hero about-hero" aria-labelledby="hero-title">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <div className="about-hero__grid">
              <div>
                <h1 id="hero-title">
                  <span>Two founders.</span>
                  <span>One recurring failure.</span>
                  <span>One partner.</span>
                </h1>
                <p className="pd-lead">
                  Manav Shah and Arjun Gautami spent years on opposite sides of
                  the same problem: products that were built correctly and still
                  died. Product Partner is the team they built to close that
                  gap.
                </p>
                <div className="pd-buttons">
                  <Link href="/contact" className="pd-btn pd-btn-primary">
                    Start a conversation
                  </Link>
                  <a href="#chapter-1" className="pd-btn pd-btn-secondary">
                    Read our story
                  </a>
                </div>
              </div>

              <div className="about-portraits">
                <figure className="about-portrait">
                  <Image
                    src="/images/team/manav.webp"
                    alt="Manav Shah, co-founder and CEO of Product Partner"
                    fill
                    className="about-portrait__img"
                    sizes="(max-width: 1024px) 45vw, 280px"
                    priority
                  />
                  <figcaption>
                    <span className="about-portrait__name">Manav Shah</span>
                    <span className="about-portrait__role">
                      Co-founder &amp; CEO
                    </span>
                  </figcaption>
                </figure>
                <figure className="about-portrait about-portrait--offset">
                  <Image
                    src="/images/team/arjun.webp"
                    alt="Arjun Gautami, co-founder and CTO of Product Partner"
                    fill
                    className="about-portrait__img"
                    sizes="(max-width: 1024px) 45vw, 280px"
                    priority
                  />
                  <figcaption>
                    <span className="about-portrait__name">Arjun Gautami</span>
                    <span className="about-portrait__role">
                      Co-founder &amp; CTO
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section className="about-proof" aria-label="Track record">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <div className="about-proof__grid">
              {proof.map((item) => (
                <div key={item.label} className="about-proof__item">
                  <p className="about-proof__num">{item.value}</p>
                  <p className="about-proof__cap">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CHAPTER 1 — ARJUN */}
        <section className="pd-section" id="chapter-1" aria-labelledby="ch1-title">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <div className="about-story">
              <div>
                <p className="about-chapter-mark">
                  <span className="about-chapter-mark__no">1</span>
                  The builder&apos;s view
                </p>
                <h2 id="ch1-title">
                  Arjun kept shipping to spec. The budget kept running out
                  first.
                </h2>
                <div className="about-prose">
                  <p>
                    Arjun Gautami spent a decade inside development shops,
                    delivering exactly what the spec asked for and watching the
                    client run out of runway before the product found its feet.
                  </p>
                  <p>
                    The exception was <strong>GamePlan</strong>. As founding
                    lead developer, he stayed for the parts nobody demos:
                    enhancement, engagement and retention. GamePlan was later
                    acquired by Stack Sports.
                  </p>
                </div>
              </div>
              <div className="about-story__art">
                <ArtBudgetSpent />
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 2 — MANAV */}
        <section className="pd-section" aria-labelledby="ch2-title">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <div className="about-story about-story--flip">
              <div>
                <p className="about-chapter-mark">
                  <span className="about-chapter-mark__no">2</span>
                  The operator&apos;s view
                </p>
                <h2 id="ch2-title">
                  Manav saw founders skip the one question that mattered.
                </h2>
                <div className="about-prose">
                  <p>
                    Manav Shah was brought in by an NFL franchise to work on
                    revenue and operations systems: not a fan app, but the part
                    where a mistake shows up on a balance sheet.
                  </p>
                  <p>
                    Away from that engagement, he took{" "}
                    <strong>8+ startups</strong> from a rough idea to a working
                    first product. Almost none of those founders had asked
                    whether the idea was right before paying someone to build
                    it.
                  </p>
                </div>
                <div className="about-tags">
                  <div className="about-tags__group">
                    <p className="about-tags__label">Industries</p>
                    <ul>
                      <li>Sports tech</li>
                      <li>Ecommerce</li>
                      <li>Healthcare</li>
                    </ul>
                  </div>
                  <div className="about-tags__group">
                    <p className="about-tags__label">Regions</p>
                    <ul>
                      <li>Gulf</li>
                      <li>Australia</li>
                      <li>US</li>
                      <li>Europe</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="about-story__art">
                <ArtRightIdea />
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 3 — THE GAP */}
        <section
          className="pd-section pd-dark about-gap"
          aria-labelledby="ch3-title"
        >
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <div className="about-story">
              <div>
                <p className="about-chapter-mark">
                  <span className="about-chapter-mark__no">3</span>
                  The gap
                </p>
                <h2 id="ch3-title">
                  Nobody gets paid for whether the product works.
                </h2>
                <div className="about-prose">
                  <p>
                    Development shops get paid to deliver{" "}
                    <strong>scope</strong>. Consultants get paid to deliver{" "}
                    <strong>opinions</strong>. Nobody gets paid for whether the
                    product actually <strong>works</strong>.
                  </p>
                  <p>
                    Two records, kept independently, both point at the same gap.
                    So we closed it by refusing to be on either side of it.
                  </p>
                </div>
              </div>
              <div className="about-story__art">
                <ArtTheGap />
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE CLOSE IT */}
        <section className="pd-section" aria-labelledby="how-title">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <div className="about-how-head">
              <h2 id="how-title">How we close the gap.</h2>
              <p className="pd-lead">
                Four commitments, in the order they happen. Each one removes a
                place where products usually go wrong.
              </p>
            </div>
            <ol className="about-steps">
              {steps.map((step, index) => (
                <li key={step.title} className="about-step">
                  <span className="about-step__no" aria-hidden>
                    {index + 1}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* TERMS */}
        <section className="pd-section" aria-labelledby="terms-title">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <div className="about-terms">
              <svg
                className="about-terms__icon"
                viewBox="0 0 132 132"
                role="img"
                aria-label="Two interlocking rings"
              >
                <circle
                  cx="52"
                  cy="66"
                  r="34"
                  fill="none"
                  stroke="#FF5900"
                  strokeWidth="7"
                />
                <circle
                  cx="80"
                  cy="66"
                  r="34"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="7"
                />
              </svg>
              <div>
                <h2 id="terms-title">Why we take a stake in some products.</h2>
                <p>
                  For a small number of products each year, we work on a mix of
                  cash and equity. It&apos;s a structural fix, not a courtesy:
                  when our upside depends on yours, telling you an uncomfortable
                  truth early is worth more to us than keeping the invoice
                  going.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pd-section" aria-labelledby="cta-title">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <div className="about-cta">
              <div>
                <p className="about-cta__status">
                  <span className="about-cta__dot" aria-hidden />
                  Open, taking on a limited number of products
                </p>
                <h2 id="cta-title">Got something worth defending?</h2>
                <p>
                  Tell us what you&apos;re building. We&apos;ll tell you
                  honestly whether it&apos;s ready to be built.
                </p>
              </div>
              <Link href="/contact" className="pd-btn pd-btn-primary">
                Start a conversation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
