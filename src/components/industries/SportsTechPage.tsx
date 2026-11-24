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
    title: "Football Management Software",
    body: "Build digital platforms for American football teams, leagues, clubs, and competition organizers. Manage team operations, player information, schedules, game administration, and league activities through custom software.",
    href: "/industries/football-management",
  },
  {
    title: "Soccer App Development",
    body: "Create connected soccer experiences for leagues, clubs, teams, coaches, players, and fans. Develop applications for fixtures, team registration, match scoring, standings, and league administration.",
    href: "/soccer-app-development",
  },
  {
    title: "Basketball App Development",
    body: "Develop basketball applications for clubs, leagues, academies, and tournament organizers. Support player profiles, team rosters, game schedules, scoring, statistics, and competition management.",
    href: "/basketball-management-software-development",
  },
  {
    title: "Golf App Development",
    body: "Build custom golf applications and platforms for golf clubs, courses, players, leagues, and golf technology businesses. Explore digital scoring, player profiles, tournament management, course information, and golf-related integrations.",
    href: "/custom-golf-app-development",
  },
  {
    title: "Pickleball App Development",
    body: "Create pickleball software for clubs, facilities, tournament organizers, and player communities. Connect player registration, court bookings, event management, tournament brackets, and match results.",
    href: "/custom-pickleball-app-development",
  },
  {
    title: "Lacrosse Software Solutions",
    body: "Develop digital solutions for lacrosse teams, clubs, leagues, and tournament organizers. Support player and team registration, rosters, schedules, game results, standings, and communication workflows.",
    href: "/custom-lacrosse-software-development",
  },
  {
    title: "Tennis App Development",
    body: "Build tennis applications for clubs, academies, players, and tournament organizers. Create connected experiences for court bookings, player profiles, match scheduling, tournament draws, scoring, and club management.",
    href: "/custom-tennis-app-development",
  },
  {
    title: "Flag Football Software Solutions",
    body: "Develop custom flag football platforms for youth leagues, adult competitions, clubs, and tournament organizers. Manage teams, player registrations, schedules, results, standings, and competition operations.",
    href: "/custom-flag-football-app-development",
  },
];

const steps = [
  {
    title: "Discover",
    body: "Understand your sport, organization, users, and business objectives.",
  },
  {
    title: "Define",
    body: "Identify essential features, workflows, integrations, and technical requirements.",
  },
  {
    title: "Design and Build",
    body: "Develop your web platform, mobile application, and administration tools in reviewable stages.",
  },
  {
    title: "Test and Launch",
    body: "Validate user experiences, competition workflows, and platform functionality.",
  },
  {
    title: "Handover and Evolve",
    body: "Provide the relevant code and account access, document the solution, and plan future improvements.",
  },
];

export function SportsTechPage({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <div className={`${inter.className} bg-white text-[#0e0e0e]`}>
      <section className="canvas-dots">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-5 py-[72px] text-center sm:px-[50px] sm:py-[110px]">
          <h1 className="w-full max-w-[1080px] text-balance text-[36px] leading-[1.08] font-semibold tracking-[-0.045em] sm:text-[56px] lg:text-[68px] xl:text-[80px] xl:leading-[1.02] xl:tracking-[-0.04em]">
            Sports Tech Solutions for Every Sport
          </h1>
          <div className="mt-7 grid w-full max-w-[1080px] gap-4">
            <p className="text-[16px] leading-6 text-[#45433f] sm:text-[18px] sm:leading-[1.6]">
              Every sport has its own way of operating, competing, and engaging with players and fans. The
              technology behind it should be designed around those unique requirements.
            </p>
            <p className="text-[16px] leading-6 text-[#45433f] sm:text-[18px] sm:leading-[1.6]">
              At Product Partner, we build custom sports technology solutions for leagues, clubs, teams,
              tournament organizers, and sports businesses. From sports management platforms and mobile
              applications to competition management systems and digital experiences, we help transform sports
              operations through technology.
            </p>
            <p className="text-[16px] leading-6 text-[#45433f] sm:text-[18px] sm:leading-[1.6]">
              Explore our sport-specific software development capabilities and discover how we can help bring
              your next SportsTech product to life.
            </p>
          </div>
          <div className="mt-8">
            <FillButton href="#solutions" variant="orange-white" className={buttonClass}>
              Explore Our Sports Tech Solutions
            </FillButton>
          </div>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-[120px] bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-[50px] sm:p-[50px]">
          <h2 className="w-full text-[32px] leading-[1.12] font-semibold tracking-[-0.045em] sm:text-[48px] sm:leading-[1.08]">
            Sports Software and App Development Solutions
          </h2>
          <ul className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-2">
            {solutions.map((solution) => (
              <li key={solution.href} className="flex flex-col rounded-[22px] bg-[#f6f5f2] px-7 py-7">
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
            Our Sports Tech Development Approach
          </h2>
          <p className="mt-6 flex w-full gap-4 text-[16px] leading-[1.7] text-[#b9b7b2]">
            <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
              →
            </span>
            <span className="min-w-0 flex-1">
              We approach sports software as a product, understanding the sport, its users, and the operational
              workflows before deciding what to build.
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
            Why Choose Product Partner for Sports Tech Development?
          </h2>
          <div className="mt-6 grid w-full gap-4">
            <p className="flex gap-4 text-[16px] leading-[1.7] text-[#45433f] sm:text-[18px]">
              <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
                →
              </span>
              <span className="min-w-0 flex-1">
                We combine product thinking with software engineering to build digital solutions around the real
                needs of sports organizations.
              </span>
            </p>
            <p className="flex gap-4 text-[16px] leading-[1.7] text-[#45433f]">
              <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
                →
              </span>
              <span className="min-w-0 flex-1">
                Our portfolio includes Liga D1, a soccer league website, app, and admin console, and Club Duelz, a
                multi-sport competition and fan engagement platform.
              </span>
            </p>
            <p className="flex gap-4 text-[16px] leading-[1.7] text-[#45433f]">
              <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
                →
              </span>
              <span className="min-w-0 flex-1">
                These projects reflect our understanding of the different workflows involved in building sports
                technology products.
              </span>
            </p>
          </div>
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
            Let&apos;s Build Your Next Sports Tech Product
          </h2>
          <p className="mt-6 flex w-full gap-4 text-[16px] leading-[1.7] text-[#45433f] sm:text-[18px]">
            <span className="mt-[2px] shrink-0 text-[18px] leading-none text-[#ff5a1f]" aria-hidden="true">
              →
            </span>
            <span className="min-w-0 flex-1">
              Have an idea for a sports application, league platform, or competition management system? Let&apos;s
              understand your requirements and explore the right way to build it.
            </span>
          </p>
          <div className="mt-7">
            <FillButton href="/contact" variant="orange-white" className={buttonClass}>
              Book a free 45-minute discovery call
            </FillButton>
          </div>
        </div>
      </section>
      */}
    </div>
  );
}
