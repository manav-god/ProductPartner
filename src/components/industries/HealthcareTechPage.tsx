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
    title: "Medical Billing Software Development",
    body: "Simplify billing operations with custom medical billing software designed to support claims processing, payment workflows, patient billing, and revenue cycle operations. Build a system that helps billing teams reduce repetitive administrative work and gain better visibility into outstanding payments and claims.",
    href: "/custom-medical-billing-software-development",
  },
  {
    title: "Healthcare Interoperability Software Development",
    body: "Connect healthcare applications and information systems through healthcare interoperability solutions. We can help plan and build integrations that support data exchange between EHRs, EMRs, laboratories, pharmacies, payers, and other healthcare platforms using relevant standards and APIs.",
    href: "/custom-healthcare-interoperability-software-development",
  },
  {
    title: "Clinical Decision Support Software Development",
    body: "Give healthcare professionals better access to relevant clinical information within their workflows. Custom clinical decision support software can organise patient data, surface clinical guidelines, deliver configurable alerts, and support evidence-informed decisions without replacing professional judgement.",
    href: "/clinical-decision-support-software-development",
  },
  {
    title: "Patient Engagement Software Development",
    body: "Create more connected patient experiences with digital tools for appointment management, secure communication, patient education, reminders, forms, and access to relevant health information. Build patient portals and engagement applications around the needs of your care teams and patients.",
    href: "/patient-engagement-software-development",
  },
  {
    title: "Healthcare Data Analytics Software Development",
    body: "Turn healthcare data into information that supports operational planning and better visibility. Develop healthcare analytics dashboards and data platforms to bring together relevant information from clinical, administrative, financial, and operational systems.",
    href: "/healthcare-data-analytics-software-development",
  },
  {
    title: "Mental Health App Development",
    body: "Build digital mental health products that make it easier to access and manage behavioural health services. From therapy platforms and virtual care experiences to mood tracking, secure messaging, and provider dashboards, develop experiences around the needs of patients and mental health professionals.",
    href: "/mental-health-app-development",
  },
  {
    title: "Pharmacy Management Software Development",
    body: "Support pharmacy operations with custom pharmacy management software for prescription workflows, inventory visibility, dispensing operations, purchase management, and reporting. Design software that helps pharmacies coordinate day-to-day activities and connect with relevant healthcare systems.",
    href: "/pharmacy-management-software-development",
  },
  {
    title: "Laboratory Management Software Development",
    body: "Manage laboratory workflows with software designed for test orders, sample tracking, result management, quality processes, and reporting. Build laboratory information systems that help diagnostic centres and clinical laboratories coordinate work and exchange information with connected healthcare platforms.",
    href: "/laboratory-management-software-development",
  },
];

const steps = [
  {
    title: "Discover",
    body: "We begin with a conversation about your organisation, users, operational challenges, existing systems, and desired outcomes.",
  },
  {
    title: "Define and Scope",
    body: "We translate requirements into a practical product scope, prioritising essential workflows, integrations, user roles, and technical considerations.",
  },
  {
    title: "Design and Build",
    body: "We design and develop the product in focused cycles. You review working modules as they take shape, helping keep decisions visible throughout development.",
  },
  {
    title: "Test and Launch",
    body: "We validate the agreed workflows, integrations, and product behaviour, then prepare the solution for deployment based on the project requirements.",
  },
  {
    title: "Handover and Evolve",
    body: "We provide the agreed code and account handover, with the option to continue improving the product as your needs evolve.",
  },
];

const reasons = [
  {
    title: "Product thinking before development",
    body: "We focus on the problem your software needs to solve, not just the features on a requirements list.",
  },
  {
    title: "Built around your workflows",
    body: "Your organisation’s processes, users, and existing technology shape the product scope and development decisions.",
  },
  {
    title: "Clear, reviewable development cycles",
    body: "Work progresses in focused modules, giving you opportunities to review and provide feedback along the way.",
  },
  {
    title: "A partner beyond the first release",
    body: "From early product planning to launch and future improvements, we can support the product journey as your requirements develop.",
  },
  {
    title: "A practical approach to ownership",
    body: "Our delivery process includes an agreed code and account handover, so you have clarity over the product being built.",
  },
];

export function HealthcareTechPage({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <div className={`${inter.className} bg-white text-[#0e0e0e]`}>
      <section className="canvas-dots">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-5 py-[72px] text-center sm:px-[50px] sm:py-[110px]">
          <h1 className="w-full max-w-[1080px] text-balance text-[36px] leading-[1.08] font-semibold tracking-[-0.045em] sm:text-[56px] lg:text-[68px] xl:text-[80px] xl:leading-[1.02] xl:tracking-[-0.04em]">
            Healthcare Technology Solutions
          </h1>
          <div className="mt-7 grid w-full max-w-[1080px] gap-4">
            <p className="text-[16px] leading-6 text-[#45433f] sm:text-[18px] sm:leading-[1.6]">
              Build better healthcare experiences with technology designed around people, processes, and
              connected care.
            </p>
            <p className="text-[16px] leading-6 text-[#45433f] sm:text-[18px] sm:leading-[1.6]">
              Product Partner helps healthcare organisations and digital health businesses plan, design, and
              develop custom software solutions that support clinical workflows, administrative operations,
              patient experiences, and data-driven decisions.
            </p>
            <p className="text-[16px] leading-6 text-[#45433f] sm:text-[18px] sm:leading-[1.6]">
              From medical billing platforms and healthcare interoperability solutions to patient engagement
              applications and laboratory management systems, we help turn complex healthcare requirements into
              practical digital products.
            </p>
            <p className="text-[16px] leading-6 text-[#45433f] sm:text-[18px] sm:leading-[1.6]">
              Have a healthcare product idea or an existing system to improve? Let&apos;s discuss your
              requirements.
            </p>
          </div>
          <div className="mt-8">
            <FillButton href="/contact" variant="orange-white" className={buttonClass}>
              Discuss Your Healthcare Project
            </FillButton>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <h2 className="w-full text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08]">
            Healthcare Software Development for a Connected Healthcare Ecosystem
          </h2>
          <div className="mt-6 grid w-full gap-4">
            <p className="flex gap-4 text-[16px] leading-[1.7] text-[#45433f]">
              <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
                →
              </span>
              <span className="min-w-0 flex-1">
                Healthcare organisations rely on multiple systems to manage patient information, clinical
                operations, billing, communication, and reporting. When these systems operate in silos, teams face
                fragmented data, manual processes, delayed decisions, and inconsistent patient experiences.
              </span>
            </p>
            <p className="flex gap-4 text-[16px] leading-[1.7] text-[#45433f]">
              <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
                →
              </span>
              <span className="min-w-0 flex-1">
                Custom healthcare software can help bring these workflows together.
              </span>
            </p>
            <p className="flex gap-4 text-[16px] leading-[1.7] text-[#45433f]">
              <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
                →
              </span>
              <span className="min-w-0 flex-1">
                Whether you are a hospital, clinic, medical billing company, pharmacy, diagnostic laboratory, or
                healthcare technology startup, the right software should fit your workflows, support secure
                information handling, and integrate with the systems your teams already use.
              </span>
            </p>
            <p className="flex gap-4 text-[16px] leading-[1.7] text-[#45433f]">
              <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
                →
              </span>
              <span className="min-w-0 flex-1">
                Product Partner approaches healthcare software development with product thinking first:
                understanding the problem, defining the right scope, and building software around real operational
                needs.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-[120px] bg-[#f6f5f2]">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <h2 className="w-full text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08]">
            Our Healthcare Technology Solutions
          </h2>
          <p className="mt-6 flex w-full gap-4 text-[16px] leading-[1.7] text-[#45433f] sm:text-[18px]">
            <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
              →
            </span>
            <span className="min-w-0 flex-1">
              Explore our healthcare software development services, designed for different operational and
              patient-care requirements.
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
            Our Healthcare Software Development Process
          </h2>
          <div className="mt-6 grid w-full gap-4">
            <p className="flex gap-4 text-[16px] leading-[1.7] text-[#b9b7b2]">
              <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
                →
              </span>
              <span className="min-w-0 flex-1">
                A healthcare product needs more than a list of features. It needs a clear understanding of users,
                workflows, integrations, data requirements, and the environment in which it will operate.
              </span>
            </p>
            <p className="flex gap-4 text-[16px] leading-[1.7] text-[#b9b7b2]">
              <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
                →
              </span>
              <span className="min-w-0 flex-1">Our process keeps product decisions and engineering aligned.</span>
            </p>
          </div>
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
            Build Your Healthcare Technology Solution
          </h2>
          <div className="mt-6 grid w-full gap-4">
            <p className="flex gap-4 text-[16px] leading-[1.7] text-[#45433f] sm:text-[18px]">
              <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
                →
              </span>
              <span className="min-w-0 flex-1">
                Have an idea for a healthcare platform, need to modernise an existing workflow, or want to connect
                systems that do not work well together?
              </span>
            </p>
            <p className="flex gap-4 text-[16px] leading-[1.7] text-[#45433f] sm:text-[18px]">
              <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
                →
              </span>
              <span className="min-w-0 flex-1">
                Let&apos;s understand your requirements and explore the right product approach.
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
              Tell us what you are building, who it serves, and the challenge you want to solve. We&apos;ll discuss
              the next practical steps.
            </span>
          </p>
        </div>
      </section>
      */}
    </div>
  );
}
