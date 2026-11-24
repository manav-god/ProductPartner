import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { FillButton } from "@/components/FillButton";
import { FaqList } from "@/components/services/SmoothFaq";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
});

const buttonClass =
  "h-11 gap-2 rounded-full px-4 text-[14px] whitespace-nowrap sm:h-14 sm:gap-2.5 sm:px-7 sm:text-[16px]";

const solutions = [
  {
    title: "Custom Logistics Software Development",
    body: "Build a logistics platform around your business model, workflows, and operational requirements. From shipment management and dispatch to customer portals and reporting, develop software that connects the moving parts of your logistics operation.",
    href: "/custom-logistics-software-development",
  },
  {
    title: "Transportation Management System (TMS) Development",
    body: "Plan, execute, and monitor freight movements with a custom transportation management system. Support load planning, carrier selection, shipment tracking, dispatch, freight documentation, and transportation reporting.",
    href: "/transportation-management-system-development",
  },
  {
    title: "3PL Management Software Development",
    body: "Manage third-party logistics operations with software designed for client accounts, orders, warehouse workflows, shipments, billing, and operational reporting. Build a platform that supports the way your 3PL business serves multiple customers.",
    href: "/3pl-management-software-development",
  },
  {
    title: "Last-Mile Delivery Software Development",
    body: "Improve the final stage of order fulfilment with delivery management software for dispatchers, drivers, and customers. Support route assignments, delivery tracking, estimated arrival times, notifications, and proof of delivery.",
    href: "/last-mile-delivery-software-development",
  },
  {
    title: "Supply Chain Visibility Software Development",
    body: "Bring shipment and supply chain information into a more connected view. Develop visibility platforms that consolidate tracking events, carrier updates, shipment milestones, and operational exceptions to help teams understand what is happening across their supply chain.",
    href: "/supply-chain-visibility-software-development",
  },
  {
    title: "Freight Brokerage Software Development",
    body: "Build digital tools for freight brokers to manage loads, carriers, quotes, rate confirmations, dispatch, and customer communication. Connect brokerage workflows in a platform designed around your business operations.",
    href: "/freight-brokerage-software-development",
  },
  {
    title: "Custom Fleet Management Software Development",
    body: "Manage vehicles, drivers, fleet activity, and maintenance through custom fleet management software. Build operational dashboards and connected applications that support GPS tracking, vehicle status, driver workflows, and fleet reporting.",
    href: "/custom-fleet-management-software-development",
  },
  {
    title: "Custom Route Optimization Software Development",
    body: "Plan more efficient delivery and transportation routes using software that considers stops, vehicle capacity, delivery windows, and operational constraints. Build route planning tools that help dispatchers coordinate daily movements more effectively.",
    href: "/custom-route-optimization-software-development",
  },
];

const steps = [
  {
    title: "Discover",
    body: "We learn about your logistics model, operational challenges, users, existing systems, and desired outcomes.",
  },
  {
    title: "Define and Scope",
    body: "We translate requirements into a practical product scope, prioritising workflows, integrations, user roles, and technical dependencies.",
  },
  {
    title: "Design and Build",
    body: "We design and develop the solution in focused cycles, allowing you to review working modules as the product takes shape.",
  },
  {
    title: "Test and Launch",
    body: "We validate the agreed workflows, integrations, permissions, and product behaviour before deployment.",
  },
  {
    title: "Handover and Evolve",
    body: "We provide the agreed code and account handover, with the option to continue improving the product as your operations grow.",
  },
];

const reasons = [
  {
    title: "Product thinking before development",
    body: "We start by understanding the operational problem and the business outcome your software needs to support.",
  },
  {
    title: "Built around your logistics workflows",
    body: "Your business model, users, shipment processes, and existing systems shape the product scope.",
  },
  {
    title: "Clear and reviewable development",
    body: "Work progresses in focused modules, giving you visibility and opportunities to provide feedback.",
  },
  {
    title: "Integration-aware planning",
    body: "We consider how your platform may connect with carrier systems, GPS and telematics providers, ERP, WMS, payment services, and other relevant tools.",
  },
  {
    title: "A partner beyond the first release",
    body: "From product discovery to launch and future improvements, we can support the product journey as your requirements evolve.",
  },
];

export function LogisticsTechPage({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <div className={`${inter.className} bg-white text-[#0e0e0e]`}>
      <section className="canvas-dots">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-5 py-[72px] text-center sm:px-[50px] sm:py-[110px]">
          <h1 className="w-full max-w-[1080px] text-balance text-[36px] leading-[1.08] font-semibold tracking-[-0.045em] sm:text-[56px] lg:text-[68px] xl:text-[80px] xl:leading-[1.02] xl:tracking-[-0.04em]">
            Logistics &amp; Transportation Technology Solutions
          </h1>
          <div className="mt-7 grid w-full max-w-[1080px] gap-4">
            <p className="text-[16px] leading-6 text-[#45433f] sm:text-[18px] sm:leading-[1.6]">
              Build smarter logistics operations with custom software designed for the way your business moves.
            </p>
            <p className="text-[16px] leading-6 text-[#45433f] sm:text-[18px] sm:leading-[1.6]">
              Product Partner helps logistics companies, freight businesses, transportation providers, and supply
              chain organisations plan, design, and develop digital products that connect operations, improve
              visibility, and support better business decisions.
            </p>
            <p className="text-[16px] leading-6 text-[#45433f] sm:text-[18px] sm:leading-[1.6]">
              From transportation management systems and freight brokerage platforms to fleet management, route
              optimization, and last-mile delivery applications, we turn complex operational requirements into
              practical software solutions.
            </p>
          </div>
          <div className="mt-8">
            <FillButton href="/contact" variant="orange-white" className={buttonClass}>
              Discuss Your Logistics Software Project
            </FillButton>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <h2 className="w-full text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08]">
            Custom Software Development for Logistics and Transportation Businesses
          </h2>
          <div className="mt-6 grid w-full gap-4">
            <p className="flex gap-4 text-[16px] leading-[1.7] text-[#45433f]">
              <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
                →
              </span>
              <span className="min-w-0 flex-1">
                Logistics operations involve multiple teams, partners, systems, vehicles, shipments, and delivery
                stages. When these processes rely on disconnected applications or manual coordination, businesses
                can face limited shipment visibility, inefficient dispatching, operational delays, and difficulty
                scaling.
              </span>
            </p>
            <p className="flex gap-4 text-[16px] leading-[1.7] text-[#45433f]">
              <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
                →
              </span>
              <span className="min-w-0 flex-1">
                Custom logistics software can help connect these workflows in a platform designed around your
                operating model.
              </span>
            </p>
            <p className="flex gap-4 text-[16px] leading-[1.7] text-[#45433f]">
              <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
                →
              </span>
              <span className="min-w-0 flex-1">
                Whether you are a freight broker, 3PL provider, carrier, distributor, fleet operator, or technology
                startup, your software should support your processes, connect with your existing systems, and adapt
                as your operations grow.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-[120px] bg-[#f6f5f2]">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <h2 className="w-full text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08]">
            Our Logistics &amp; Transportation Software Development Solutions
          </h2>
          <p className="mt-6 flex w-full gap-4 text-[16px] leading-[1.7] text-[#45433f] sm:text-[18px]">
            <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
              →
            </span>
            <span className="min-w-0 flex-1">
              Explore our custom logistics and supply chain software development services.
            </span>
          </p>
          <ul className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-2">
            {solutions.map((solution) => (
              <li key={solution.href} className="flex flex-col rounded-[22px] bg-white px-7 py-7">
                <h3 className="text-[22px] font-semibold tracking-[-0.03em]">{solution.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-[#45433f]">{solution.body}</p>
                <Link
                  href={solution.href}
                  aria-label={`Read more about ${solution.title}`}
                  className="group/learn mt-6 inline-flex min-h-11 w-fit items-center gap-2 text-[16px] font-semibold"
                >
                  <span className="relative">
                    Read More
                    <span
                      className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover/learn:scale-x-100"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-[#ff5a1f]" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#0e0e0e] text-[#f4f3ef]">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <p className="text-[12px] font-semibold tracking-[0.14em] text-[#a3a19c] uppercase">How it works</p>
          <h2 className="mt-3 w-full text-[32px] leading-[1.12] font-semibold tracking-[-0.05em] sm:text-[48px] sm:leading-[1.1]">
            Our Logistics Software Development Process
          </h2>
          <p className="mt-6 flex w-full gap-4 text-[16px] leading-[1.7] text-[#b9b7b2]">
            <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
              →
            </span>
            <span className="min-w-0 flex-1">
              Building logistics software requires a clear understanding of operational workflows, business rules,
              system dependencies, and the people using the platform.
            </span>
          </p>
          <ol className="mt-8 grid list-none gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-[22px] bg-[#1a1918] p-7">
                <p className={`${jetbrains.className} text-[12px] text-[#ff5a1f]`}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-[20px] leading-[1.25] font-semibold tracking-[-0.03em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.7] text-[#b9b7b2]">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#f4f3ef]">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <h2 className="w-full text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08]">
            Why Choose Product Partner?
          </h2>
          <ul className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason.title} className="rounded-[22px] bg-white px-7 py-7">
                <h3 className="text-[20px] font-semibold tracking-[-0.03em]">{reason.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-[#45433f]">{reason.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {faqs.length > 0 ? (
      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1400px] gap-8 px-5 py-[50px] sm:gap-10 sm:p-[50px] lg:grid-cols-[minmax(0,420px)_minmax(0,594px)] lg:justify-between">
          <h2 className="text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.05] lg:text-[52px]">
            Frequently Asked Questions
          </h2>
          <div>
            <FaqList
              faqs={faqs}
              answerClassName="mt-3 max-w-[58ch] text-[15px] leading-6 text-[#45433f]"
            />
          </div>
        </div>
      </section>
      ) : null}

      {/*
      <section className="canvas-dots">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <h2 className="w-full text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08]">
            Build Your Logistics Technology Solution
          </h2>
          <div className="mt-6 grid w-full gap-4">
            <p className="flex gap-4 text-[16px] leading-[1.7] text-[#45433f] sm:text-[18px]">
              <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
                →
              </span>
              <span className="min-w-0 flex-1">
                Planning a new logistics platform, modernising an existing system, or connecting disconnected
                transportation workflows?
              </span>
            </p>
            <p className="flex gap-4 text-[16px] leading-[1.7] text-[#45433f] sm:text-[18px]">
              <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
                →
              </span>
              <span className="min-w-0 flex-1">
                Let&apos;s understand your business, map your requirements, and explore the right product approach.
              </span>
            </p>
          </div>
          <div className="mt-7">
            <FillButton href="/contact" variant="orange-white" className={buttonClass}>
              Book a Free 45-Minute Discovery Call
            </FillButton>
          </div>
          <p className="mt-6 flex w-full gap-4 text-[16px] leading-[1.7] text-[#45433f]">
            <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
              →
            </span>
            <span className="min-w-0 flex-1">
              Tell us what your logistics business needs to improve or build. We&apos;ll discuss the next practical
              steps.
            </span>
          </p>
        </div>
      </section>
      */}
    </div>
  );
}
