import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { PdIndustrySection } from "@/components/services/PdIndustrySection";
import "@/app/product-development/product-development.css";

export function ProductDevelopmentContent() {
  return (
    <div className="pd-page">
      <main id="main-content">
        {/* HERO */}
        <section className="pd-hero">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Product Development Services</span>

            <h1>
              Product Development That Turns{" "}
              <span>Ideas Into Products People Can Use</span>
            </h1>

            <p className="pd-lead">
              Great product development is not simply about writing code. It is
              about turning a validated problem into a usable product, building
              the right foundation, and continuously improving it as real users
              interact with it.
            </p>

            <div className="pd-buttons">
              <Link href="/#contact" className="pd-btn pd-btn-primary">
                Talk to Product Partner
              </Link>
              <a href="#services" className="pd-btn pd-btn-secondary">
                Explore Product Development Services
              </a>
            </div>
          </div>
        </section>

        {/* DEFINITION */}
        <section className="pd-section">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Product Development Explained</span>
            <h2>What Is Product Development?</h2>

            <ul className="pd-points" id="definition">
              <li>
                <ArrowRight className="pd-points__icon" />
                <span>
                  Product development is the process of turning a product
                  opportunity or idea into a usable, tested, launched, and
                  continuously improved product.
                </span>
              </li>
              <li>
                <ArrowRight className="pd-points__icon" />
                <span>
                  It can involve product discovery, validation, UX/UI design,
                  prototyping, MVP development, software engineering, testing,
                  deployment, analytics, and post-launch iteration.
                </span>
              </li>
              <li>
                <ArrowRight className="pd-points__icon" />
                <span>
                  Effective product development connects business goals,
                  customer needs, design, technology, and execution so teams can
                  build products with a clear purpose instead of simply building
                  more features.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* SERVICES */}
        <section className="pd-section pd-section--light" id="services">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Our Services</span>
            <h2>Product Development Services From Idea to Launch</h2>
            <p>
              Product development should reduce uncertainty before increasing
              complexity. Our approach connects discovery, design, engineering,
              testing, launch, and iteration around the product you actually need
              to build.
            </p>

            <div className="pd-service-grid">
              {[
                {
                  label: "Discovery",
                  title: "Product Discovery & Validation",
                  description:
                    "Start with the problem, users, business objectives, and technical realities before committing to a large build. The goal is simple: create enough clarity to know what should be built before significant development resources are committed.",
                  tags: [
                    "Product discovery",
                    "Customer problem validation",
                    "Market research",
                    "Technical feasibility",
                    "Product requirements",
                    "MVP scope definition",
                  ],
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="11"
                        cy="11"
                        r="6.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M16.5 16.5 20 20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <circle cx="9" cy="10" r="1" fill="#FF5900" />
                      <circle cx="12.5" cy="9.5" r="1" fill="#FF5900" />
                      <circle cx="11" cy="13" r="1" fill="#FF5900" />
                      <path
                        d="M9 10l3.5-.5M12.5 9.5l-1.5 3.5"
                        stroke="#FF5900"
                        strokeWidth="1.2"
                      />
                    </svg>
                  ),
                },
                {
                  label: "MVP",
                  title: "MVP Product Development",
                  description:
                    "Build a focused first version that tests the core product value without unnecessarily expanding scope. A strong MVP should be small enough to validate, but useful enough to generate meaningful feedback from real users.",
                  tags: [
                    "MVP strategy",
                    "Feature prioritization",
                    "Prototype development",
                    "Web MVP development",
                    "Mobile MVP development",
                    "SaaS MVP development",
                  ],
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect
                        x="4"
                        y="5"
                        width="16"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8 15h8M8 11h5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <circle cx="16.5" cy="8.5" r="1" fill="#FF5900" />
                      <circle cx="18.2" cy="10.5" r="1" fill="#FF5900" />
                      <circle cx="15.8" cy="11.5" r="1" fill="#FF5900" />
                      <path
                        d="M16.5 8.5l1.7 2M16.5 8.5l-.7 3"
                        stroke="#FF5900"
                        strokeWidth="1.2"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Design",
                  title: "Product Design & Prototyping",
                  description:
                    "Translate product requirements into user journeys, interfaces, prototypes, and experiences that can be tested before full development. Design is not decoration added after development — it is part of deciding how the product should work.",
                  tags: [
                    "User journeys",
                    "Information architecture",
                    "Wireframes",
                    "Interactive prototypes",
                    "UI design",
                    "Design systems",
                  ],
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 18.5 14.5 8l2.5 2.5L6.5 21H4v-2.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="m13.5 9 2.5 2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle cx="17.5" cy="6.5" r="1" fill="#FF5900" />
                      <circle cx="19.2" cy="8.5" r="1" fill="#FF5900" />
                      <circle cx="16.8" cy="9.5" r="1" fill="#FF5900" />
                      <path
                        d="M17.5 6.5l1.7 2M17.5 6.5l-.7 3"
                        stroke="#FF5900"
                        strokeWidth="1.2"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Engineering",
                  title: "Product Engineering & Development",
                  description:
                    "Turn validated product requirements and designs into reliable digital products through structured engineering. We focus on building a technical foundation that can support the product beyond its first release.",
                  tags: [
                    "Frontend development",
                    "Backend development",
                    "API development",
                    "Cloud infrastructure",
                    "Third-party integrations",
                    "Quality assurance",
                  ],
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M8 8 4.5 12 8 16M16 8l3.5 4L16 16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="m13.5 7-3 10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <circle cx="17.5" cy="7" r="1" fill="#FF5900" />
                      <circle cx="19.2" cy="9" r="1" fill="#FF5900" />
                      <circle cx="16.8" cy="10" r="1" fill="#FF5900" />
                      <path
                        d="M17.5 7l1.7 2M17.5 7l-.7 3"
                        stroke="#FF5900"
                        strokeWidth="1.2"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Launch",
                  title: "Product Launch & Deployment",
                  description:
                    "Prepare the product for real users with deployment, analytics, monitoring, and launch readiness.",
                  tags: [
                    "Production deployment",
                    "Cloud configuration",
                    "Analytics implementation",
                    "Performance testing",
                    "Launch readiness",
                    "Monitoring",
                  ],
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 15.5c2.5-1 5-1.5 7-1.5s4.5.5 7 1.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 4v10M12 4l3.5 3.5M12 4 8.5 7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="16.5" cy="7" r="1" fill="#FF5900" />
                      <circle cx="18.2" cy="9" r="1" fill="#FF5900" />
                      <circle cx="15.8" cy="10" r="1" fill="#FF5900" />
                      <path
                        d="M16.5 7l1.7 2M16.5 7l-.7 3"
                        stroke="#FF5900"
                        strokeWidth="1.2"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Growth",
                  title: "Post-Launch Product Development",
                  description:
                    "Product development does not stop when the product launches. Real usage creates new information about what should happen next.",
                  tags: [
                    "User feedback analysis",
                    "Feature iteration",
                    "Performance improvements",
                    "Product analytics",
                    "Architecture improvements",
                    "Product scaling",
                  ],
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none">
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
                      <circle cx="10.5" cy="9" r="1" fill="#FF5900" />
                      <circle cx="12.2" cy="7" r="1" fill="#FF5900" />
                      <circle cx="9.8" cy="6.5" r="1" fill="#FF5900" />
                      <path
                        d="M10.5 9l1.7-2M10.5 9l-.7-2.5"
                        stroke="#FF5900"
                        strokeWidth="1.2"
                      />
                    </svg>
                  ),
                },
              ].map((service) => (
                <article key={service.title} className="pd-service-card">
                  <div className="pd-service-card__header">
                    <span className="pd-service-card__icon" aria-hidden>
                      {service.icon}
                    </span>
                    <span className="pd-service-card__divider" aria-hidden />
                    <span className="pd-service-card__label">{service.label}</span>
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

        {/* B2B */}
        <section className="pd-section pd-dark" id="b2b">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">B2B Product Development</span>
            <h2>B2B Product Development Services</h2>
            <p>
              B2B products often have multiple user groups, complex workflows,
              integrations, security requirements, and longer decision cycles.
              Product development needs to account for those realities from the
              beginning.
            </p>

            <div className="pd-grid">
              <div className="pd-card">
                <h3>B2B SaaS Product Development</h3>
                <p>
                  Build SaaS products around real customer workflows, scalable
                  architecture, integrations, and measurable product outcomes.
                </p>
              </div>
              <div className="pd-card">
                <h3>Enterprise Product Development</h3>
                <p>
                  Develop digital products that account for complex workflows,
                  stakeholders, security, integrations, and operational
                  requirements.
                </p>
              </div>
              <div className="pd-card">
                <h3>AI Product Development</h3>
                <p>
                  Integrate AI capabilities such as intelligent search,
                  automation, recommendations, assistants, or analysis where they
                  provide meaningful product value.
                </p>
              </div>
            </div>
          </div>
        </section>

        <PdIndustrySection />

        {/* DIFFERENTIATION */}
        <section className="pd-section pd-missing">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Our Product Development Approach</span>
            <h2>What Makes Our Product Development Approach Different?</h2>
            <p>
              Product development becomes expensive when teams move from an
              unclear idea directly into a large build. We create decision points
              throughout the process so teams can learn before complexity
              compounds.
            </p>

            <div className="pd-grid">
              <div className="pd-card">
                <h3>Are We Building the Right Thing?</h3>
                <p>
                  Before development expands, we clarify the customer problem,
                  product opportunity, and expected outcome.
                </p>
              </div>
              <div className="pd-card">
                <h3>What Should Be Built First?</h3>
                <p>
                  We separate essential product value from features that can wait
                  for later releases.
                </p>
              </div>
              <div className="pd-card">
                <h3>Can the Product Grow From Here?</h3>
                <p>
                  Architecture, UX, integrations, analytics, and technical
                  decisions should consider what happens after the first release.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MISSING ANGLE */}
        <section className="pd-section">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Beyond Development</span>
            <h2>Product Development Is More Than Building Features</h2>
            <p>
              Many product development projects focus heavily on features,
              frameworks, and delivery timelines. But shipping more software does
              not automatically create a better product.
            </p>

            <h3 id="product-development-debt">
              The Cost of Product Development Debt
            </h3>
            <p>
              <dfn>
                <strong>Product development debt</strong>
              </dfn>{" "}
              happens when rushed product decisions, unclear requirements, weak
              architecture, fragmented systems, and short-term fixes accumulate
              and make future development harder.
            </p>

            <div className="pd-grid">
              <div className="pd-card">
                <h3>Common Symptoms</h3>
                <ul>
                  <li>Constant feature rework</li>
                  <li>Unclear requirements</li>
                  <li>Slow releases</li>
                  <li>Growing technical complexity</li>
                </ul>
              </div>
              <div className="pd-card">
                <h3>What It Creates</h3>
                <p>
                  Teams spend more time fixing previous decisions and less time
                  creating meaningful improvements for users.
                </p>
              </div>
              <div className="pd-card">
                <h3>The Better Approach</h3>
                <p>
                  Product Partner connects product decisions, design,
                  engineering, testing, analytics, and feedback so development
                  can evolve instead of constantly restart.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FRAMEWORK */}
        <section className="pd-section pd-section--light">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Product Partner Framework</span>
            <h2>Our Product Development Framework</h2>
            <p>
              Our product development framework connects product thinking with
              design and engineering, moving from uncertainty toward a working
              product and continuous improvement.
            </p>

            <div className="pd-framework">
              <div className="pd-step">
                <div className="pd-step-number">01 — DISCOVER</div>
                <h3>Understand</h3>
                <p>
                  Understand the customer problem, users, market, business
                  objectives, and technical context.
                </p>
              </div>
              <div className="pd-step">
                <div className="pd-step-number">02 — DEFINE</div>
                <h3>Scope</h3>
                <p>
                  Define product requirements, core workflows, success criteria,
                  MVP scope, and priorities.
                </p>
              </div>
              <div className="pd-step">
                <div className="pd-step-number">03 — DESIGN</div>
                <h3>Experience</h3>
                <p>
                  Translate requirements into user journeys, wireframes,
                  prototypes, and product interfaces.
                </p>
              </div>
              <div className="pd-step">
                <div className="pd-step-number">04 — DEVELOP</div>
                <h3>Build</h3>
                <p>
                  Engineer the product through frontend, backend, APIs,
                  integrations, testing, and deployment.
                </p>
              </div>
              <div className="pd-step">
                <div className="pd-step-number">05 — LAUNCH</div>
                <h3>Release</h3>
                <p>
                  Deploy the product, establish analytics and monitoring, and put
                  the product in front of users.
                </p>
              </div>
              <div className="pd-step">
                <div className="pd-step-number">06 — LEARN &amp; SCALE</div>
                <h3>Improve</h3>
                <p>
                  Use product data and user feedback to prioritize improvements,
                  strengthen the product, and scale what works.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY PRODUCT PARTNER */}
        <section className="pd-section">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Why Product Partner</span>
            <h2>
              Product Development That Connects Strategy With Technology
            </h2>
            <p>
              Product Partner works at the intersection of product strategy,
              design, technology, engineering, and growth.
            </p>
            <p>
              Instead of treating development as an isolated coding exercise, we
              connect the product problem with the experience, technology,
              release, and learning required to create a product that can evolve.
              That same discipline carries through our{" "}
              <Link href="/#services">product management</Link> and{" "}
              <Link href="/#services">product marketing</Link> work — deciding
              what to build, then how it&apos;s positioned once it ships.
            </p>
            <ul>
              <li>Turn product ideas into buildable opportunities</li>
              <li>
                Validate product concepts before large development investments
              </li>
              <li>Define focused MVPs</li>
              <li>Design usable product experiences</li>
              <li>Build web, mobile, SaaS, and digital products</li>
              <li>Connect product development with measurable outcomes</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="pd-section pd-section--light">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Frequently Asked Questions</span>
            <h2>Frequently Asked Questions About Product Development</h2>

            <div className="pd-faq">
              <details>
                <summary>What is product development?</summary>
                <p>
                  Product development is the process of turning a product
                  opportunity or idea into a usable, tested, launched, and
                  continuously improved product. It can include discovery,
                  validation, UX/UI design, prototyping, MVP development,
                  engineering, testing, deployment, analytics, and post-launch
                  iteration.
                </p>
              </details>

              <details>
                <summary>
                  What is the difference between product development and software
                  development?
                </summary>
                <p>
                  Software development primarily focuses on designing, coding,
                  testing, and maintaining software. Product development is
                  broader: it connects customer problems, product strategy, user
                  experience, technology, engineering, launch, and ongoing
                  product improvement. Software development can therefore be one
                  important part of the larger product development process.
                </p>
              </details>

              <details>
                <summary>
                  What is included in product development services?
                </summary>
                <p>
                  Product development services can include product discovery,
                  validation, MVP strategy, UX/UI design, prototyping, software
                  engineering, API integrations, quality assurance, deployment,
                  analytics, product launch, and post-launch improvements. The
                  exact scope depends on the product stage and business
                  objectives.
                </p>
              </details>

              <details>
                <summary>How long does product development take?</summary>
                <p>
                  Product development timelines vary based on product complexity,
                  scope, platform requirements, integrations, design needs,
                  technical dependencies, and validation requirements. A focused
                  MVP generally requires less time than a full-scale product with
                  multiple workflows, integrations, and user groups.
                </p>
              </details>

              <details>
                <summary>
                  Can you develop an MVP before building the full product?
                </summary>
                <p>
                  Yes. An MVP can help teams test the core product experience and
                  important assumptions before investing in a larger product. The
                  goal is to identify the smallest useful version that can
                  provide meaningful feedback from real users while creating a
                  foundation for future development.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
