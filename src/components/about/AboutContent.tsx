import Image from "next/image";
import Link from "next/link";
import "@/app/product-development/product-development.css";
import "@/app/about/about.css";

export function AboutContent() {
  return (
    <div className="pd-page about-page">
      <main id="main-content">
        <section className="pd-hero">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <span className="pd-eyebrow">The story behind Product Partner</span>
            <h1>
              It began with two different journeys,{" "}
              <span>and the same realization.</span>
            </h1>
            <p className="pd-lead">
              Good products don&apos;t usually fail because people can&apos;t
              build them. They fail because the right decisions never get made
              early enough, or never get owned all the way through. This is the
              story of how we learned that, the hard way, from opposite sides of
              the table.
            </p>
            <div className="pd-buttons">
              <a href="#chapter-one" className="pd-btn pd-btn-primary">
                Start reading
              </a>
              <Link href="/contact" className="pd-btn pd-btn-secondary">
                Talk to Product Partner
              </Link>
            </div>
          </div>
        </section>

        <section className="pd-section" id="chapter-one">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <div className="about-chapter">
              <figure className="about-chapter__photo">
                <Image
                  src="/images/team/manav.webp"
                  alt="Manav Shah"
                  fill
                  className="about-chapter__img"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </figure>
              <div className="about-chapter__content">
                <span className="pd-eyebrow">Chapter one</span>
                <h2>Where Manav started</h2>
                <p className="about-chapter__person">
                  <strong>Manav Shah</strong>
                  <span>Co-founder &amp; CEO</span>
                </p>
                <div className="about-chapter__body">
                  <p>
                    Manav&apos;s path moved through sports technology, ecommerce,
                    healthcare, startups, and international markets, never
                    settling long enough to specialize, always close enough to
                    see how products actually got made. Along the way, he worked
                    with founders and teams at every stage, helping carry more
                    than eight startups from a rough idea to a working first
                    product.
                  </p>
                  <p>
                    A stretch of work across the Gulf, Australia, the US, and
                    Europe added another layer: a firsthand feel for how
                    international businesses actually buy, and what it takes for
                    a product to hold its own outside its home market. A move to
                    Dubai sharpened that further.
                  </p>
                  <p>
                    Later, working alongside an NFL team on operations and
                    revenue-focused digital tools drove the lesson home for good.
                    A product&apos;s value was never about how many features
                    it carried. It was about whether it solved something that
                    actually mattered to the people using it.
                  </p>
                  <p className="about-pull">
                    The build was never the hard part. Deciding what to build
                    was.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pd-section pd-dark">
          <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
            <div className="about-chapter about-chapter--reverse">
              <div className="about-chapter__content">
                <span className="pd-eyebrow">Chapter two</span>
                <h2>Where Arjun started</h2>
                <p className="about-chapter__person">
                  <strong>Arjun Gautami</strong>
                  <span>Co-founder &amp; CTO</span>
                </p>
                <div className="about-chapter__body">
                  <p>
                    Arjun&apos;s road ran differently. For nearly a decade he
                    stayed hands-on in software development, much of it inside
                    development shops, writing the code, shipping the releases,
                    answering for what happened after launch. He eventually
                    became the founding lead developer at GamePlan, and stayed
                    with the product well past its first release: through
                    development, enhancement, engagement, and the long,
                    unglamorous work of retention.
                  </p>
                  <p>
                    That journey carried all the way to an outcome few teams
                    ever reach, GamePlan being acquired by Stack Sports. And it
                    taught him something that never left him: building the
                    product is only one chapter of the story. What happens after
                    launch matters just as much, sometimes more.
                  </p>
                  <p className="about-pull">
                    I watched budgets run out before products found their
                    footing.
                  </p>
                </div>
              </div>
              <figure className="about-chapter__photo">
                <Image
                  src="/images/team/arjun.webp"
                  alt="Arjun Gautami"
                  fill
                  className="about-chapter__img"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </figure>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
