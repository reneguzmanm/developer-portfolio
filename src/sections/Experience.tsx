import Section from "../components/common/Section";
import ExperienceCard from "../components/common/ExperienceCard";
import {technologies} from "../data/technologies"; 
const Experience = () => {
  return (
    <Section
      id="experience"
      eyebrow="Experiencia"
      title="Desarrollo soluciones que generan impacto en la operación."
    >
      <ExperienceCard
        company="Antalis Abitek"
        role="Full Stack Developer"
        period="2023 — 2026"
        achievements={[
          "Desarrollo de aplicaciones internas para producción.",
          "Integración con PLC, balanzas e impresoras industriales.",
          "Automatización de procesos de etiquetado.",
          "Desarrollo de APIs y sistemas web.",
          "Integración con SQL Server y PostgreSQL.",
        ]}
        technologies={[
          technologies.python,
          technologies.django,
          technologies.react,
          technologies.typescript,
          technologies.node,
          technologies.postgresql,
          technologies.docker,
        ]}
      />
    </Section>
  );
};

export default Experience;