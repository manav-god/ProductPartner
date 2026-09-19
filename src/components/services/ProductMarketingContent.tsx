import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { PmIndustrySection } from "@/components/services/PmIndustrySection";
import "@/app/product-development/product-development.css";

const services = [
  {
    label: "Positioning",
    title: "Product Positioning & Messaging",
    description:
      "Clarify your product's value proposition and turn complicated features into messaging customers can understand. The goal is simple: make it easy for buyers to understand what the product does, why it matters, and why they should choose it now.",
    tags: [
      "Product positioning",
      "Messaging frameworks",
      "Value propositions",
      "ICP and buyer research",
      "Competitive analysis",
      "Sales enablement messaging",
    ],
  },
  {
    label: "GTM",
    title: "Go-to-Market Strategy",
    description:
      "A successful launch needs more than a launch date. Go-to-market strategy connects research, positioning, and messaging into a clear direction, market research, channels, content, and launch sequencing in one coherent plan.",
    tags: [
      "Launch planning",
      "Market research",
      "Channel strategy",
      "Content planning",
      "Conversion opportunities",
      "Launch sequencing",
    ],
  },
  {
    label: "Search",
    title: "SEO, AEO & GEO for Product Discovery",
    description:
      "Customers increasingly discover products through AI-powered search, answer engines, and generative platforms, not just traditional search results. The objective is to make the product understandable and referenceable across the search ecosystem.",
    tags: [
      "SEO for organic search",
      "AEO for answer engines",
      "GEO for generative search",
      "AI-search content strategy",
      "Topic and entity optimization",
      "Product-led organic growth",
    ],
  },
  {
    label: "Intelligence",
    title: "Competitive & Market Intelligence",
    description:
      "Turn scattered competitor information into messaging your sales team can actually use and defend with confidence.",
    tags: [
      "Competitor positioning audits",
      "Sales battlecards",
      "Market landscape mapping",
      "Pricing and packaging context",
      "Win/loss insight",
      "Category definition",
    ],
  },
  {
    label: "Demand",
    title: "Demand Generation & Content",
    description:
      "Build content and campaigns on the same positioning and evidence used everywhere else, not a separate marketing narrative.",
    tags: [
      "Content strategy",
      "Campaign messaging",
      "Landing pages",
      "Case studies and proof points",
      "Lifecycle messaging",
      "Sales enablement assets",
    ],
  },
  {
    label: "Growth",
    title: "Post-Launch Growth & Iteration",
    description:
      "Product marketing does not stop when the product launches. Customer objections change, competitors reposition, and search behavior evolves.",
    tags: [
      "Positioning refreshes",
      "Messaging testing",
      "Search visibility monitoring",
      "Competitive re-assessment",
      "Content gap analysis",
      "Product-led growth iteration",
    ],
  },
] as const;

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    <svg key="0" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3.5 14.2 9l5.8.5-4.4 3.8 1.4 5.7L12 16.2 6.9 19l1.4-5.7L4 9.5 9.8 9 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="17" cy="6" r="1" fill="#FF5900" />
      <circle cx="18.5" cy="8" r="1" fill="#FF5900" />
      <circle cx="16" cy="9" r="1" fill="#FF5900" />
    </svg>,
    <svg key="1" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 16.5 9 11l3.5 3.5L20 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 7h5v5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="9" r="1" fill="#FF5900" />
      <circle cx="12" cy="7" r="1" fill="#FF5900" />
      <circle cx="9.5" cy="6.5" r="1" fill="#FF5900" />
    </svg>,
    <svg key="2" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16.5 16.5 20 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="9" cy="10" r="1" fill="#FF5900" />
      <circle cx="12.5" cy="9.5" r="1" fill="#FF5900" />
      <circle cx="11" cy="13" r="1" fill="#FF5900" />
    </svg>,
    <svg key="3" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 18.5V5.5h7.5v13M11.5 12H20M16 8.5 19.5 12 16 15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17.5" cy="6" r="1" fill="#FF5900" />
      <circle cx="19" cy="8" r="1" fill="#FF5900" />
      <circle cx="16.5" cy="9" r="1" fill="#FF5900" />
    </svg>,
    <svg key="4" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 7.5h14M5 12h14M5 16.5h9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="17" cy="7" r="1" fill="#FF5900" />
      <circle cx="18.5" cy="9" r="1" fill="#FF5900" />
      <circle cx="16" cy="10" r="1" fill="#FF5900" />
    </svg>,
    <svg key="5" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 4v10M12 4l3.5 3.5M12 4 8.5 7.5M5 15.5c2.5-1 5-1.5 7-1.5s4.5.5 7 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16.5" cy="7" r="1" fill="#FF5900" />
      <circle cx="18" cy="9" r="1" fill="#FF5900" />
      <circle cx="15.5" cy="10" r="1" fill="#FF5900" />
    </svg>,
  ];
  return icons[index] ?? icons[0];
}

export function ProductMarketingContent() {
  return (
    <div className="pd-page">
      <main id="main-content">
        <section className="pd-hero">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Product Marketing Services</span>
            <h1>
              Product Marketing That Turns{" "}
              <span>Products Into Growth Stories</span>
            </h1>
            <p className="pd-lead">
              Great products do not always sell themselves. Buyers need to
              understand what your product does, why it matters, and why they
              should choose it now. That is where product marketing comes in.
            </p>
            <div className="pd-buttons">
              <Link href="/contact" className="pd-btn pd-btn-primary">
                Talk to Product Partner
              </Link>
              <a href="#services" className="pd-btn pd-btn-secondary">
                Explore Product Marketing Services
              </a>
            </div>
          </div>
        </section>

        <section className="pd-section">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Product Marketing Explained</span>
            <h2>What Is Product Marketing?</h2>
            <ul className="pd-points" id="definition">
              <li>
                <ArrowRight className="pd-points__icon" />
                <span>
                  Product marketing is the discipline of positioning, messaging,
                  launching, promoting, and growing a product based on customer
                  needs and market opportunities.
                </span>
              </li>
              <li>
                <ArrowRight className="pd-points__icon" />
                <span>
                  It can involve product positioning, messaging, value
                  propositions, ICP and buyer research, competitive analysis,
                  go-to-market planning, SEO, AEO, GEO, and demand generation.
                </span>
              </li>
              <li>
                <ArrowRight className="pd-points__icon" />
                <span>
                  Effective product marketing connects the product, the market,
                  and the buyer so sales, marketing, product, and leadership
                  teams share one clear story about who the product is for, what
                  makes it different, and how it creates value.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="pd-section" id="services">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Our Services</span>
            <h2>Product Marketing Services From Positioning to Growth</h2>
            <p>
              Product marketing should reduce ambiguity before increasing spend.
              Our approach connects positioning, messaging, go-to-market
              planning, search, and demand generation around the product you
              actually need to sell.
            </p>

            <div className="pd-service-grid">
              {services.map((service, index) => (
                <article key={service.title} className="pd-service-card">
                  <div className="pd-service-card__header">
                    <span className="pd-service-card__icon" aria-hidden>
                      <ServiceIcon index={index} />
                    </span>
                    <span className="pd-service-card__divider" aria-hidden />
                    <span className="pd-service-card__label">
                      {service.label}
                    </span>
                  </div>
                  <h3 className="pd-service-card__title">{service.title}</h3>
                  <p className="pd-service-card__desc">{service.description}</p>
                  <div className="pd-service-card__tags">
                    {service.tags.map((tag) => (
                      <span key={tag} className="pd-service-card__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pd-section pd-dark" id="b2b">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">B2B Product Marketing</span>
            <h2>B2B Product Marketing Services</h2>
            <p>
              B2B products often have longer buying cycles, multiple
              decision-makers, technical requirements, and complicated value
              propositions. Product marketing needs to account for those
              realities from the beginning.
            </p>
            <div className="pd-grid">
              <div className="pd-card">
                <h3>B2B SaaS Product Marketing</h3>
                <p>
                  Position SaaS products around real buyer workflows, technical
                  evaluation criteria, and measurable business outcomes.
                </p>
              </div>
              <div className="pd-card">
                <h3>Enterprise Product Marketing</h3>
                <p>
                  Develop messaging that accounts for multiple stakeholders,
                  procurement processes, security requirements, and long
                  consideration cycles.
                </p>
              </div>
              <div className="pd-card">
                <h3>AI Product Marketing</h3>
                <p>
                  Communicate AI capabilities such as automation, intelligent
                  search, or recommendations in language buyers and evaluators
                  actually trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        <PmIndustrySection />

        <section className="pd-section pd-missing">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Our Product Marketing Approach</span>
            <h2>What Makes Our Product Marketing Approach Different?</h2>
            <p>
              Many product marketing programs stop at positioning or launch
              planning. We connect product strategy with discoverability and
              evidence throughout the process.
            </p>
            <div className="pd-grid">
              <div className="pd-card">
                <h3>What Questions Are Buyers Asking?</h3>
                <p>
                  Before we write messaging, we clarify what buyers actually
                  want to know before they choose a product.
                </p>
              </div>
              <div className="pd-card">
                <h3>What Does Search Understand About the Product?</h3>
                <p>
                  We check what Google and AI systems already associate with the
                  product and category before optimizing further.
                </p>
              </div>
              <div className="pd-card">
                <h3>Which Content Creates Demand Before Sales Is Involved?</h3>
                <p>
                  Positioning, content, and search decisions should consider the
                  buyer&apos;s full journey, not just the sales conversation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pd-section">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Beyond Launch</span>
            <h2>Product Marketing Is More Than a Launch Plan</h2>
            <p>
              Many product marketing projects focus heavily on launch messaging
              and campaign timelines. But shipping more content does not
              automatically create durable positioning.
            </p>
            <h3>The Cost of Product Marketing Debt</h3>
            <p>
              Product marketing debt happens when outdated claims, inconsistent
              terminology, changing customer objections, and new competitors
              accumulate and make messaging harder to trust.
            </p>
            <div className="pd-grid">
              <div className="pd-card">
                <h3>Common Symptoms</h3>
                <ul>
                  <li>Outdated claims</li>
                  <li>Inconsistent terminology</li>
                  <li>Stale competitive comparisons</li>
                  <li>Declining search visibility</li>
                </ul>
              </div>
              <div className="pd-card">
                <h3>What It Creates</h3>
                <p>
                  Teams spend more time defending old claims and less time
                  creating messaging that reflects where the product and market
                  actually are.
                </p>
              </div>
              <div className="pd-card">
                <h3>The Better Approach</h3>
                <p>
                  Product Partner connects positioning, content, competitive
                  intelligence, and search performance so messaging can evolve
                  instead of quietly going stale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pd-section">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Product Partner Framework</span>
            <h2>Our Product Marketing Framework</h2>
            <p>
              Our product marketing framework connects product thinking with
              positioning and content, moving from ambiguity toward a message
              buyers and search systems can trust.
            </p>
            <div className="pd-framework">
              {[
                {
                  num: "01 RESEARCH",
                  title: "Understand",
                  desc: "Understand the customer problem, buyer, market, and competitive landscape.",
                },
                {
                  num: "02 POSITION",
                  title: "Define",
                  desc: "Define positioning, value proposition, ICP, and category context.",
                },
                {
                  num: "03 MESSAGE",
                  title: "Translate",
                  desc: "Translate positioning into messaging, content, and sales enablement language.",
                },
                {
                  num: "04 LAUNCH",
                  title: "Activate",
                  desc: "Activate go-to-market channels, content, and campaigns around the message.",
                },
                {
                  num: "05 OPTIMIZE",
                  title: "Discover",
                  desc: "Optimize content for SEO, AEO, and GEO so it performs across search and AI systems.",
                },
                {
                  num: "06 LEARN & SCALE",
                  title: "Improve",
                  desc: "Use performance data and buyer feedback to refresh positioning and scale what works.",
                },
              ].map((step) => (
                <div key={step.num} className="pd-step">
                  <div className="pd-step-number">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pd-section">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Why Product Partner</span>
            <h2>
              Product Marketing That Connects Strategy With Discoverability
            </h2>
            <p>
              Product Partner works at the intersection of product marketing,
              search, content, and growth.
            </p>
            <p>
              Instead of treating product marketing as an isolated campaign, we
              connect the product story with the research, content, and search
              performance required to help it grow. That same discipline carries
              through our{" "}
              <Link href="/product-development">product development</Link> work,
              building the right product, then telling its story well.
            </p>
            <ul className="pd-points">
              {[
                "Turn product positioning into messaging buyers understand",
                "Validate messaging before large campaign investments",
                "Define focused go-to-market plans",
                "Create content that performs in search and AI answers",
                "Build positioning for web, mobile, SaaS, and digital products",
                "Connect product marketing with measurable demand",
              ].map((item) => (
                <li key={item}>
                  <ArrowRight className="pd-points__icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pd-section">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Frequently Asked Questions</span>
            <h2>Frequently Asked Questions About Product Marketing</h2>
            <div className="pd-faq">
              {[
                {
                  q: "What does a product marketing agency do?",
                  a: "A product marketing agency helps a business research its market, define product positioning, develop messaging, plan go-to-market activity, support demand generation, and improve how the product is discovered and understood.",
                },
                {
                  q: "What's the difference between product marketing and digital marketing?",
                  a: "Digital marketing primarily describes channels and tactics such as search, social, email, and paid media. Product marketing starts with the product, customer, market, and competitive landscape, then connects that understanding to messaging and channels.",
                },
                {
                  q: "Why do B2B companies need product marketing?",
                  a: "B2B products often involve longer buying cycles, multiple stakeholders, technical requirements, and higher consideration. Product marketing helps translate product capabilities into business value and gives sales and marketing teams consistent positioning.",
                },
                {
                  q: "Can product marketing improve SEO and AI search visibility?",
                  a: "Yes. Product marketing supplies the customer language, product context, questions, positioning, and evidence that can make content more useful for traditional search, answer engines, and generative AI search experiences.",
                },
                {
                  q: "When should a startup invest in product marketing?",
                  a: "Startups can use product marketing before launch, during go-to-market, and after launch. The scope can begin with positioning and buyer research, then expand into messaging, content, sales enablement, search, and product growth.",
                },
              ].map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
