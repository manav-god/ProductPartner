import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
});

const projects = [
  {
    href: "/work/fitness-app",
    title: "AI Fitness Platform",
    description:
      "Live camera rep counting turned workouts into multiplayer challenges. Count on-device. Compete live.",
    tags: ["Health & Fitness", "iOS & AI"],
    panel: "stat" as const,
  },
  {
    href: "/work/ai-image-video-generation-platform",
    title: "AI Platform",
    description:
      "Image and video generation unified across mobile, API, admin and cloud.",
    tags: ["AI / Consumer", "Full Stack"],
    panel: "statement" as const,
  },
];

export function PortfolioSection() {
  return (
    <section
      id="work"
      aria-labelledby="portfolio-heading"
      className={`${inter.className} scroll-mt-[120px] bg-white text-[#0e0e0e]`}
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col px-5 py-20 sm:px-8 md:py-28 lg:px-12 lg:py-[140px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="flex max-w-[720px] flex-col gap-3">
            <p className="text-[12px] font-semibold tracking-[0.14em] text-[#5e5c58] uppercase">
              Selected work
            </p>
            <h2
              id="portfolio-heading"
              className="text-[36px] leading-[1.1] font-semibold tracking-[-0.05em] text-balance sm:text-[48px] lg:text-[56px]"
            >
              Partnerships that shipped<span className="text-[#ff5a1f]">.</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex min-h-11 items-center gap-2 text-[16px] font-semibold"
          >
            View all work
            <span className="text-[#ff5a1f]" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.href}>
              <Link href={project.href} className="group block">
                {project.panel === "stat" ? (
                  <div className="relative flex aspect-[560/350] flex-col justify-between overflow-hidden rounded-[24px] bg-[#f4f3ef] p-7">
                    <span
                      className="absolute top-[38%] left-1/2 h-8 w-16 -translate-x-1/2 rounded-full bg-[#0e0e0e]/10 blur-md"
                      aria-hidden="true"
                    />
                    <p className={`${jetbrains.className} text-[12px] text-[#6a6864]`}>
                      [ project image ]
                    </p>
                    <div>
                      <p className="text-[64px] leading-none font-semibold tracking-[-0.054em] sm:text-[80px] lg:text-[96px]">
                        +40%
                      </p>
                      <p className={`${jetbrains.className} mt-2 text-[13px] text-[#45433f]`}>
                        challenge engagement
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex aspect-[560/350] flex-col justify-between overflow-hidden rounded-[24px] bg-[#0e0e0e] p-7 text-[#f4f3ef]">
                    <p className={`${jetbrains.className} text-[12px] text-[#8a8883]`}>
                      [ project image ]
                    </p>
                    <p className="text-[40px] leading-[1.06] font-semibold tracking-[-0.05em] sm:text-[52px] lg:text-[60px]">
                      Create once.
                      <br />
                      Route anywhere.
                    </p>
                  </div>
                )}

                <ul className="mt-[18px] flex list-none flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-[#f4f3ef] px-3 py-1.5 text-[12px] leading-none"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <h3 className="mt-4 text-[24px] leading-[1.2] font-semibold tracking-[-0.03em]">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-[56ch] text-[15px] leading-[1.67] text-[#45433f]">
                  {project.description}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
