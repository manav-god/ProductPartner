import Link from "next/link";
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

            <p className="pd-meta-line">
              Reviewed by the Product Partner team · Last updated September 2026
            </p>
          </div>
        </section>

        {/* DEFINITION */}
        <section className="pd-section">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Product Development Explained</span>
            <h2>What Is Product Development?</h2>

            <div className="pd-answer-box" id="definition">
              <p>
                <dfn>
                  <strong>Product development</strong>
                </dfn>{" "}
                <strong>
                  is the process of turning a product opportunity or idea into a
                  usable, tested, launched, and continuously improved product.
                </strong>
              </p>
            </div>

            <p>
              It can involve product discovery, validation, UX/UI design,
              prototyping, MVP development, software engineering, testing,
              deployment, analytics, and post-launch iteration.
            </p>

            <p>
              Effective product development connects business goals, customer
              needs, design, technology, and execution so teams can build
              products with a clear purpose instead of simply building more
              features.
            </p>

            <div className="pd-grid">
              <div className="pd-card">
                <h3>The Problem</h3>
                <p>What customer or business problem are we solving?</p>
              </div>
              <div className="pd-card">
                <h3>The Product</h3>
                <p>What experience and functionality will solve it?</p>
              </div>
              <div className="pd-card">
                <h3>The Outcome</h3>
                <p>How will we know the product is creating value?</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="pd-section" id="services">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Our Services</span>
            <h2>Product Development Services From Idea to Launch</h2>
            <p>
              Product development should reduce uncertainty before increasing
              complexity. Our approach connects discovery, design, engineering,
              testing, launch, and iteration around the product you actually need
              to build.
            </p>

            <div className="pd-grid">
              <div className="pd-card">
                <h3>Product Discovery &amp; Validation</h3>
                <p>
                  Start with the problem, users, business objectives, and
                  technical realities before committing to a large build.
                </p>
                <ul>
                  <li>Product discovery</li>
                  <li>Customer problem validation</li>
                  <li>Market research</li>
                  <li>Technical feasibility</li>
                  <li>Product requirements</li>
                  <li>MVP scope definition</li>
                </ul>
                <p>
                  The goal is simple: create enough clarity to know what should
                  be built before significant development resources are
                  committed.
                </p>
              </div>

              <div className="pd-card">
                <h3>MVP Product Development</h3>
                <p>
                  Build a focused first version that tests the core product value
                  without unnecessarily expanding scope.
                </p>
                <ul>
                  <li>MVP strategy</li>
                  <li>Feature prioritization</li>
                  <li>Prototype development</li>
                  <li>Web MVP development</li>
                  <li>Mobile MVP development</li>
                  <li>SaaS MVP development</li>
                </ul>
                <p>
                  A strong MVP should be small enough to validate, but useful
                  enough to generate meaningful feedback from real users.
                </p>
              </div>

              <div className="pd-card">
                <h3>Product Design &amp; Prototyping</h3>
                <p>
                  Translate product requirements into user journeys, interfaces,
                  prototypes, and experiences that can be tested before full
                  development.
                </p>
                <ul>
                  <li>User journeys</li>
                  <li>Information architecture</li>
                  <li>Wireframes</li>
                  <li>Interactive prototypes</li>
                  <li>UI design</li>
                  <li>Design systems</li>
                </ul>
                <p>
                  Design is not decoration added after development. It is part of
                  deciding how the product should work.
                </p>
              </div>

              <div className="pd-card">
                <h3>Product Engineering &amp; Development</h3>
                <p>
                  Turn validated product requirements and designs into reliable
                  digital products through structured engineering.
                </p>
                <ul>
                  <li>Frontend development</li>
                  <li>Backend development</li>
                  <li>API development</li>
                  <li>Cloud infrastructure</li>
                  <li>Third-party integrations</li>
                  <li>Quality assurance</li>
                </ul>
                <p>
                  We focus on building a technical foundation that can support
                  the product beyond its first release.
                </p>
              </div>

              <div className="pd-card">
                <h3>Product Launch &amp; Deployment</h3>
                <p>
                  Prepare the product for real users with deployment, analytics,
                  monitoring, and launch readiness.
                </p>
                <ul>
                  <li>Production deployment</li>
                  <li>Cloud configuration</li>
                  <li>Analytics implementation</li>
                  <li>Performance testing</li>
                  <li>Launch readiness</li>
                  <li>Monitoring</li>
                </ul>
              </div>

              <div className="pd-card">
                <h3>Post-Launch Product Development</h3>
                <p>
                  Product development does not stop when the product launches.
                  Real usage creates new information about what should happen
                  next.
                </p>
                <ul>
                  <li>User feedback analysis</li>
                  <li>Feature iteration</li>
                  <li>Performance improvements</li>
                  <li>Product analytics</li>
                  <li>Architecture improvements</li>
                  <li>Product scaling</li>
                </ul>
              </div>
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

        {/* INDUSTRIES */}
        <section className="pd-section" id="sports-ecommerce">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">Industry Applications</span>
            <h2>Product Development for Sports &amp; Ecommerce</h2>

            <div className="pd-industry">
              <h3>Sports Technology Product Development</h3>
              <p>
                Sports technology products often bring together athletes,
                coaches, teams, leagues, organizations, fans, and data. Product
                development needs to translate those different workflows into a
                product experience that remains clear and useful.
              </p>
              <ul>
                <li>Sports technology platforms</li>
                <li>Athlete applications</li>
                <li>Team management platforms</li>
                <li>Sports analytics products</li>
                <li>Fan engagement platforms</li>
                <li>Performance technology</li>
                <li>Sports data products</li>
              </ul>
            </div>

            <div className="pd-industry">
              <h3>Ecommerce Product Development</h3>
              <p>
                Ecommerce product development focuses on the complete customer
                experience—from discovering products to purchasing, receiving,
                and returning them.
              </p>
              <ul>
                <li>Ecommerce platforms</li>
                <li>Product discovery</li>
                <li>Shopping experiences</li>
                <li>Checkout workflows</li>
                <li>Personalization</li>
                <li>Customer accounts</li>
                <li>Retention experiences</li>
              </ul>
            </div>
          </div>
        </section>

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
        <section className="pd-section pd-dark">
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
        <section className="pd-section">
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

        {/* CTA */}
        <section className="pd-cta">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <h2>Have a Product Idea Worth Building?</h2>
            <p>
              Let&apos;s turn your product idea, customer problem, or existing
              product challenge into a clearer development path.
            </p>
            <Link href="/#contact" className="pd-btn pd-btn-secondary">
              Talk to Product Partner
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
