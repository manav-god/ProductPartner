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
    name: "Steve",
    role: "CEO Of PD",
  },
  {
    id: "two",
    quote: (
      <p>
        “Amazing experience working with Arjun. He built our multiplayer mobile
        game MVP from scratch, handling complex real-time features perfectly
        with SwiftUI and Firebase. Always available for feedback, and fast to
        implement changes. A great developer and a true professional. If you
        need a reliable iOS developer, Arjun is your guy.”
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
      <p>
        “Arjun did a fantastic job integrating our voice recognition from Bubble
        into Swift. His communication was clear throughout, and he adapted
        quickly whenever we needed changes. It was a pleasure working with him,
        and I&apos;d definitely recommend him for future projects.”
      </p>
    ),
    name: "Freddy",
    role: "Project Manager | Krox",
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
