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
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.{" "}
        <strong>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong>”
      </p>
    ),
    name: "Alex Rivera",
    role: "Head of Product, Northwind Labs",
  },
  {
    id: "two",
    quote: (
      <p>
        “Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia{" "}
        <strong>deserunt mollit anim id est laborum.</strong>”
      </p>
    ),
    name: "Jordan Lee",
    role: "VP Engineering, Atlas Commerce",
  },
  {
    id: "three",
    quote: (
      <>
        <p>
          “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
        <p>
          Totam rem aperiam, eaque ipsa quae ab illo{" "}
          <strong>inventore veritatis et quasi architecto</strong> beatae vitae
          dicta sunt explicabo.”
        </p>
      </>
    ),
    name: "Sam Okonkwo",
    role: "Director of Product, Beacon Health",
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
