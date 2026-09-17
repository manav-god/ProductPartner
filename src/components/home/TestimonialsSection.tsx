import { testimonials, type Testimonial } from "@/lib/testimonials";

function Stars() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/testimonials/stars.webp"
      alt=""
      width={92}
      height={16}
      className="mb-4 h-[16px] w-[92px]"
      aria-hidden
    />
  );
}

function QuoteTile({ item }: { item: Testimonial }) {
  return (
    <article className="mb-5 rounded-[10px] bg-white p-5">
      <Stars />
      <div className="mb-[1.6em] text-[16px] font-medium leading-[28px] text-black [&_p]:mb-[1.6em] [&_p:last-child]:mb-0 [&_strong]:font-bold">
        {item.quote}
      </div>
      <p className="border-t border-[#e7e7e7] pt-5 text-[16px] font-medium leading-[28px] text-black">
        <strong className="font-bold">{item.name}</strong>
        {" | "}
        {item.role}
      </p>
    </article>
  );
}

export function TestimonialsSection() {
  const [first, ...rest] = testimonials;
  const col2 = rest.slice(0, 2);
  const col3 = rest.slice(2, 4);

  return (
    <section
      id="testimonials"
      className="bg-[#f2f2f2]"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto flex w-full max-w-[1300px] flex-col justify-between gap-0 px-5 py-[90px] md:px-8 lg:flex-row lg:px-5">
        {/* Column 1 — intro + first quote */}
        <div className="w-full lg:w-[32%]">
          <div className="mb-5 flex flex-col items-center rounded-[10px] p-5 text-center">
            <p className="mb-[30px] rounded-lg border border-[rgba(194,194,194,0.2)] px-[15px] py-[5px] text-[12px] font-semibold leading-[28px] text-[#5d5d5d]">
              Testimonials
            </p>
            <h3
              id="testimonials-heading"
              className="text-[28px] font-extrabold leading-[1.25] tracking-tight text-black md:text-[30px] md:leading-[34px]"
            >
              What our clients say about us
            </h3>
          </div>
          {first ? <QuoteTile item={first} /> : null}
        </div>

        {/* Column 2 */}
        <div className="w-full lg:w-[32%]">
          {col2.map((item) => (
            <QuoteTile key={item.id} item={item} />
          ))}
        </div>

        {/* Column 3 */}
        <div className="w-full lg:w-[32%]">
          {col3.map((item) => (
            <QuoteTile key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
