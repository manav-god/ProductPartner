import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { FlIndustrySection } from "@/components/services/FlIndustrySection";
import "@/app/product-development/product-development.css";

const services = [
  {
    label: "Strategy",
    title: "Product Strategy & Roadmapping",
    description:
      "Build a clear direction for your product and connect your roadmap to customer needs and business outcomes. A roadmap should not be a list of everything people have asked for — it should show where the product is going and why those priorities matter.",
    tags: [
      "Product vision",
      "Product strategy",
      "Product roadmap",
      "Product goals",
      "Strategic prioritization",
      "Product-market alignment",
    ],
  },
  {
    label: "Discovery",
    title: "Product Discovery & User Research",
    description:
      "Understand the people behind the problem before committing significant resources to a solution. Before deciding what to build, we help teams understand whether the problem is important enough to solve.",
    tags: [
      "Customer interviews",
      "User research",
      "Customer discovery",
      "Problem validation",
      "Jobs-to-be-done",
      "User journeys",
    ],
  },
  {
    label: "Prioritize",
    title: "Product Prioritization & Requirements",
    description:
      "Turn product opportunities into clear priorities and requirements that teams can actually execute. The hardest product decisions are often about what not to build.",
    tags: [
      "Feature prioritization",
      "Product requirements",
      "MVP definition",
      "User stories",
      "Acceptance criteria",
      "Backlog strategy",
    ],
  },
] as const;

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    <svg key="0" viewBox="0 0 24 24" fill="none">
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
    <svg key="1" viewBox="0 0 24 24" fill="none">
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
    <svg key="2" viewBox="0 0 24 24" fill="none">
      <path
        d="M8 8 4.5 12 8 16M16 8l3.5 4L16 16M13.5 7l-3 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17.5" cy="7" r="1" fill="#FF5900" />
      <circle cx="19" cy="9" r="1" fill="#FF5900" />
      <circle cx="16.5" cy="10" r="1" fill="#FF5900" />
    </svg>,
  ];
  return icons[index] ?? icons[0];
}

export function ProductManagementContent() {
  return (
    <div className="pd-page">
      <main id="main-content">
        <section className="pd-hero">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Product Management Services</span>
            <h1>
              Product Management That Turns{" "}
              <span>Customer Problems Into Products People Want</span>
            </h1>
            <p className="pd-lead">
              Great product management is not about filling a roadmap with
              features. It is about understanding customer problems, making
              better product decisions, and helping teams build products that
              create measurable value.
            </p>
            <div className="pd-buttons">
              <Link href="/contact" className="pd-btn pd-btn-primary">
                Talk to Product Partner
              </Link>
              <a href="#services" className="pd-btn pd-btn-secondary">
                Explore Product Management Services
              </a>
            </div>
          </div>
        </section>

        <section className="pd-section">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Product Management Explained</span>
            <h2>What Is Product Management?</h2>
            <ul className="pd-points" id="definition">
              <li>
                <ArrowRight className="pd-points__icon" />
                <span>
                  Product management is the discipline of identifying customer
                  problems, defining product opportunities, prioritizing what to
                  build, and guiding products from discovery through development
                  and growth.
                </span>
              </li>
              <li>
                <ArrowRight className="pd-points__icon" />
                <span>
                  Product management connects customer needs with business goals,
                  product strategy, technology, design, delivery, and growth. It
                  helps teams decide not only what to build, but why it matters
                  and how success should be measured.
                </span>
              </li>
              <li>
                <ArrowRight className="pd-points__icon" />
                <span>
                  Strong product management balances the customer problem, the
                  business reason to solve it, and the product decisions that
                  turn insight into focused execution.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="pd-section" id="services">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Our Services</span>
            <h2>Product Management Services Built Around Better Decisions</h2>
            <p>
              Product management services should do more than maintain a roadmap.
              They should help your team reduce uncertainty, understand
              customers, prioritize opportunities, and turn product insight into
              focused execution.
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
            <span className="pd-eyebrow">B2B Product Management</span>
            <h2>B2B Product Management Services</h2>
            <p>
              B2B products often involve multiple users, stakeholders, longer
              buying cycles, technical dependencies, and competing business
              priorities. Effective product management balances these factors
              without losing sight of the customer.
            </p>
            <div className="pd-grid">
              <div className="pd-card">
                <h3>B2B SaaS Product Management</h3>
                <p>
                  Align product strategy, customer problems, business goals, and
                  SaaS product development.
                </p>
              </div>
              <div className="pd-card">
                <h3>Enterprise Product Management</h3>
                <p>
                  Bring structure to complex stakeholder requirements,
                  workflows, product priorities, and technology dependencies.
                </p>
              </div>
              <div className="pd-card">
                <h3>Technical Product Management</h3>
                <p>
                  Connect product requirements with technical execution, product
                  analytics, and measurable outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FlIndustrySection />

        <section className="pd-section pd-missing">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Our Product Approach</span>
            <h2>What Makes Our Product Management Approach Different?</h2>
            <p>
              Product decisions become expensive when they are driven by
              assumptions instead of evidence. We focus on the questions behind
              the roadmap.
            </p>
            <div className="pd-grid">
              <div className="pd-card">
                <h3>Are We Solving the Right Problem?</h3>
                <p>
                  We look beyond feature requests to understand the underlying
                  customer problem and desired outcome.
                </p>
              </div>
              <div className="pd-card">
                <h3>What Evidence Do We Have?</h3>
                <p>
                  Customer research, product data, market context, and business
                  objectives can help inform product decisions.
                </p>
              </div>
              <div className="pd-card">
                <h3>What Should We Build Now?</h3>
                <p>
                  Prioritization helps teams focus resources on opportunities
                  with meaningful customer and business value.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pd-section">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Beyond the Roadmap</span>
            <h2>Product Management Is More Than Roadmaps</h2>
            <p>
              Many product teams have roadmaps, backlogs, requirements, and
              development processes. The harder problem is making sure those
              systems are still connected to customer needs and business
              outcomes.
            </p>
            <h3>Product Management Debt</h3>
            <p>
              Product management debt happens when old assumptions, outdated
              priorities, fragmented customer insights, and legacy decisions
              continue influencing what a team builds.
            </p>
            <div className="pd-grid">
              <div className="pd-card">
                <h3>Common Symptoms</h3>
                <ul>
                  <li>Roadmaps driven by stakeholder requests</li>
                  <li>Features without measurable outcomes</li>
                  <li>Unused customer research</li>
                  <li>Conflicting priorities</li>
                </ul>
              </div>
              <div className="pd-card">
                <h3>The Result</h3>
                <p>
                  Teams can become reactive, spend resources on low-impact
                  initiatives, and struggle to explain why particular product
                  decisions were made.
                </p>
              </div>
              <div className="pd-card">
                <h3>The Shift</h3>
                <p>
                  Product Partner helps teams move from reactive delivery toward
                  a structured, evidence-informed product decision process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pd-section">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Product Partner Framework</span>
            <h2>Our Product Management Framework</h2>
            <p>
              Our framework connects discovery, strategy, execution,
              measurement, and continuous learning so product decisions can
              evolve with evidence.
            </p>
            <div className="pd-framework">
              {[
                {
                  num: "01 — DISCOVER",
                  title: "Understand",
                  desc: "Understand customers, problems, market context, and business objectives.",
                },
                {
                  num: "02 — DEFINE",
                  title: "Clarify",
                  desc: "Turn research into clear product opportunities, problems, and desired outcomes.",
                },
                {
                  num: "03 — PRIORITIZE",
                  title: "Focus",
                  desc: "Evaluate opportunities using customer value, business impact, effort, risk, and strategic fit.",
                },
                {
                  num: "04 — BUILD",
                  title: "Execute",
                  desc: "Translate priorities into clear requirements and aligned product execution.",
                },
                {
                  num: "05 — MEASURE",
                  title: "Track",
                  desc: "Monitor adoption, engagement, retention, revenue, or other relevant product outcomes.",
                },
                {
                  num: "06 — LEARN",
                  title: "Improve",
                  desc: "Use evidence and customer feedback to improve product strategy and determine what should happen next.",
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
              Product Management That Connects Strategy With Execution
            </h2>
            <p>
              Product Partner works at the intersection of product strategy,
              customer insight, technology, search, and growth.
            </p>
            <p>
              Instead of treating product management as an isolated function, we
              connect product decisions with the broader journey from customer
              problem to{" "}
              <Link href="/product-development">product development</Link> and
              business outcome.
            </p>
            <ul className="pd-points">
              {[
                "Understand customer problems",
                "Define product strategy",
                "Prioritize opportunities",
                "Build focused product roadmaps",
                "Improve product decisions",
                "Connect product development with business outcomes",
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
            <h2>Frequently Asked Questions About Product Management</h2>
            <div className="pd-faq">
              {[
                {
                  q: "What does a product management consultant do?",
                  a: "A product management consultant helps organizations make better product decisions across areas such as product strategy, discovery, roadmapping, prioritization, requirements, and product growth. Depending on the need, the engagement can support a specific product challenge or a broader product management function.",
                },
                {
                  q: "What are product management services?",
                  a: "Product management services can include product strategy, customer discovery, user research, product roadmapping, prioritization, MVP definition, product requirements, analytics, and product growth. The exact scope depends on the product's stage, goals, customers, and internal team capabilities.",
                },
                {
                  q: "What is the difference between product management and project management?",
                  a: "Product management primarily focuses on what should be built, why it matters, who it serves, and what outcome the product should create. Project management focuses more on how and when work is planned, coordinated, delivered, and managed. The two functions can work closely together during product development.",
                },
                {
                  q: "Why is product discovery important?",
                  a: "Product discovery helps teams understand customer problems, validate assumptions, identify opportunities, and reduce uncertainty before committing significant development resources. It can help teams avoid building features that solve problems customers do not consider important.",
                },
                {
                  q: "When should a startup invest in product management?",
                  a: "Startups can benefit from product management before an MVP, during MVP development, while searching for product-market fit, and as the product scales. The focus changes with each stage—from validating the problem and defining the MVP to prioritizing growth opportunities and managing a larger product portfolio.",
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
