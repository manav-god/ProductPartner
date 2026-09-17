import { teamMembers, type TeamMember } from "@/lib/team";

function TeamCard({
  member,
  offset,
}: {
  member: TeamMember;
  offset: "up" | "down";
}) {
  return (
    <article
      className={`flex w-full min-w-0 flex-1 items-center gap-3 rounded-[12px] border border-[#dadada] bg-white p-2.5 shadow-[0_8px_24px_rgba(37,36,37,0.04)] ${
        offset === "down" ? "lg:mt-10" : "lg:mt-0"
      }`}
    >
      <div className="h-[64px] w-[64px] shrink-0 overflow-hidden rounded-[10px] bg-[#edf0f3]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="min-w-0 pr-1">
        <h3 className="truncate text-[15px] font-semibold tracking-tight text-[#252425]">
          {member.name}
        </h3>
        <p className="mt-0.5 truncate text-[13px] text-[#252425]/65">
          {member.role}
        </p>
      </div>
    </article>
  );
}

export function TeamSection() {
  return (
    <section
      id="team"
      className="overflow-hidden py-16 md:py-20"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #edf0f3 100%)",
      }}
      aria-labelledby="team-heading"
    >
      <div className="mx-auto w-full max-w-[1300px] px-5 md:px-8 lg:px-[40px]">
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="text-[15px] font-medium text-[#252425]/70">
            Leadership &amp; key experts
          </p>
          <h2
            id="team-heading"
            className="mt-2 text-[28px] font-bold leading-tight tracking-tight text-[#252425] md:text-[36px]"
          >
            Meet our team
            <span
              className="mt-3 block h-[4px] w-[36px] bg-accent"
              aria-hidden
            />
          </h2>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-3 lg:pb-10">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              offset={index % 2 === 0 ? "up" : "down"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
