import Image from "next/image";
import Link from "next/link";
import { differenceRows } from "@/lib/difference";

function CheckIcon() {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      aria-hidden
      className="h-[27px] w-[27px] shrink-0"
    >
      <path
        d="M24.75 4.5V6.75H23.625V7.875H22.5V9H21.375V10.125H20.25V11.25H19.125V12.375H18V13.5H16.875V14.625H15.75V15.75H14.625V16.875H13.5V18H12.375V19.125H11.25V20.25H9V19.125H7.875V18H6.75V16.875H5.625V15.75H4.5V14.625H3.375V13.5H2.25V11.25H4.5V12.375H5.625V13.5H6.75V14.625H7.875V15.75H9V16.875H11.25V15.75H12.375V14.625H13.5V13.5H14.625V12.375H15.75V11.25H16.875V10.125H18V9H19.125V7.875H20.25V6.75H21.375V5.625H22.5V4.5H24.75Z"
        fill="#FF5900"
      />
    </svg>
  );
}

const GRID_COLS = "minmax(180px,0.7fr) minmax(340px,1.25fr) minmax(240px,1fr) minmax(240px,1fr)";

export function WhyDifferentSection() {
  return (
    <section
      id="why-different"
      className="bg-white py-[80px] md:py-[100px]"
      aria-labelledby="why-different-heading"
    >
      <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
        <div className="mb-12 flex flex-col items-start gap-2 md:mb-16">
          <p className="text-[16px] font-medium leading-[22px] text-[#020202]">
            Why We&apos;re Different
          </p>
          <h2
            id="why-different-heading"
            className="text-[32px] font-semibold leading-[1.2] tracking-tight text-[#020202] md:text-[40px] md:leading-[48px]"
          >
            Not just another agency
            <span
              className="mt-3 block h-[4px] w-[36px] bg-accent"
              aria-hidden
            />
          </h2>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[1000px]">
            {/* Header — no tick above Strategy */}
            <div className="grid" style={{ gridTemplateColumns: GRID_COLS }}>
              <div aria-hidden className="border-b border-[rgba(2,2,2,0.14)]" />

              <div className="flex min-h-[91px] items-center gap-3 bg-[#020202] px-6">
                <Image
                  src="/images/logo/product-partner.svg"
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
                <span className="text-[18px] font-medium tracking-tight text-white">
                  Product Partner
                </span>
              </div>

              <div className="flex items-center border-b border-[rgba(2,2,2,0.14)] px-8">
                <p className="font-mono text-[18px] leading-[27px] text-[#020202]">
                  Other agencies
                </p>
              </div>

              <div className="flex items-center border-b border-[rgba(2,2,2,0.14)] px-8">
                <p className="font-mono text-[18px] leading-[27px] text-[#020202]">
                  Freelancers
                </p>
              </div>
            </div>

            {differenceRows.map((row) => (
              <div
                key={row.label}
                className="grid"
                style={{ gridTemplateColumns: GRID_COLS }}
              >
                <div className="flex items-center border-b border-[rgba(2,2,2,0.14)] py-5 pr-3">
                  <p className="font-mono text-[16px] leading-[21px] text-[#020202]">
                    {row.label}
                  </p>
                </div>

                <div className="flex min-h-[85px] bg-[#1b1b1b]">
                  <div className="flex w-[73px] shrink-0 items-center justify-center px-[23px]">
                    <CheckIcon />
                  </div>
                  <div className="flex flex-1 items-center border-t border-white/10 bg-[#020202] px-8 py-5">
                    <p className="text-[16px] leading-[22px] text-white">
                      {row.us}
                    </p>
                  </div>
                </div>

                <div className="flex items-center border-b border-[rgba(2,2,2,0.14)] px-8 py-5">
                  <p className="text-[16px] leading-[22px] text-[#020202]/80">
                    {row.agencies}
                  </p>
                </div>

                <div className="flex items-center border-b border-[rgba(2,2,2,0.14)] px-8 py-5">
                  <p className="text-[16px] leading-[22px] text-[#020202]/80">
                    {row.freelancers}
                  </p>
                </div>
              </div>
            ))}

            {/* Discovery CTA — full width of Product Partner column */}
            <div className="grid" style={{ gridTemplateColumns: GRID_COLS }}>
              <div aria-hidden />
              <Link
                href="/contact"
                className="flex h-[52px] w-full cursor-pointer items-center justify-between bg-accent px-4 text-[16px] font-medium text-white transition-colors hover:bg-accent-hover"
              >
                <span>Book discovery call</span>
                <svg
                  width="11"
                  height="14"
                  viewBox="0 0 11 14"
                  fill="none"
                  aria-hidden
                  className="shrink-0"
                >
                  <path
                    d="M8.987 7.446L7.94 6.412 2.588 11.696l1.047 1.034 5.352-5.284z"
                    fill="currentColor"
                  />
                  <path
                    d="M9.472 6.97L8.425 8.004 2.588 2.241 3.635 1.207 9.472 6.97z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <div aria-hidden />
              <div aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
