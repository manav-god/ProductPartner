import type { ReactNode } from "react";

export type Testimonial = {
  id: string;
  quote: ReactNode;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "one",
    quote: (
      <p>
        “Manav was a highly diligent and dedicated partner to us. His attention
        to detail and ability to manage projects from start to finish were
        exceptional. What stood out most, however, was his communication. Manav
        was always clear, responsive and proactive, ensuring everyone remained
        aligned and informed throughout each project. It was a pleasure working
        with Manav, and I would have no hesitation recommending him to any
        organisation looking for a reliable, professional and highly capable
        partner.”
      </p>
    ),
    name: "",
    role: "CEO Of PD",
  },
  {
    id: "two",
    quote: (
      <p>
        “Amazing experience working with Arjun! He helped us build a multiplayer mobile game MVP from scratch and did an outstanding job. His expertise in SwiftUI and Firebase is top-notch, and he handled complex real-time features perfectly. What I really appreciated was his communication he was always available to discuss feedback and implemented changes incredibly fast. He is not just a great coder but also a true professional who cares about the project. We are already planning future updates with him. If you need a reliable and talented iOS developer, Arjun is your guy. 10/10!”
      </p>
    ),
    name: "Nikodem Rafal",
    role: "CEO Of Dared",
  },
  {
    id: "three",
    quote: (
      <p>
        “They brought a strong combination of strategic insight and execution,
        ensuring the site not only looked great but clearly communicated our
        mission and value. Their ability to translate ideas into a clean,
        functional, and engaging digital presence made a meaningful impact for
        our organization. We&apos;re very proud of the site.”
      </p>
    ),
    name: "Dawn M Price",
    role: "Sr Industry Engagement Manager | GSIC",
  },
  {
    id: "four",
    quote: (
      <>
        <p>
          “<strong>Nemo enim ipsam voluptatem</strong> quia voluptas sit
          aspernatur aut odit aut fugit. Sed quia consequuntur magni dolores eos
          qui ratione{" "}
          <strong>voluptatem sequi nesciunt.</strong>
        </p>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit.”
        </p>
      </>
    ),
    name: "Priya Nair",
    role: "COO, Cascade Systems",
  },
  {
    id: "five",
    quote: (
      <p>
        “At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium.{" "}
        <strong>
          Voluptatum deleniti atque corrupti quos dolores et quas molestias
        </strong>
        . Et harum quidem rerum facilis est et expedita distinctio nam libero
        tempore.”
      </p>
    ),
    name: "Marcus Chen",
    role: "CTO, Harbor Digital",
  },
];
