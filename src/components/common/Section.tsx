import Container from "../layout/Container";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

const Section = ({
  id,
  eyebrow,
  title,
  children,
}: SectionProps) => {
  return (
    <section
      id={id}
      className="py-24"
    >
      <Container>

        <div className="max-w-3xl">

          <span className="font-medium text-blue-400">
            {eyebrow}
          </span>

          <h2 className="mt-3 text-4xl font-bold text-white">
            {title}
          </h2>

        </div>

        <div className="mt-10">
          {children}
        </div>

      </Container>
    </section>
  );
};

export default Section;