import Section from "../components/common/Section";

const About = () => {
  return (
    <Section
      id="about"
      eyebrow="Sobre mí"
      title="Desarrollo software para resolver problemas reales."
    >
      <div className="max-w-3xl space-y-6 leading-8 text-slate-400">
          <p className="mt-8 leading-8 text-slate-400">
            Soy Desarrollador Full Stack con experiencia desarrollando
            aplicaciones web e integrando software con hardware industrial.
            Durante mi trayectoria he participado en proyectos de
            automatización, trazabilidad, etiquetado y control de procesos,
            utilizando tecnologías como Python, Django, React, Node.js,
            SQL Server y PostgreSQL.
          </p>

          <p className="mt-6 leading-8 text-slate-400">
            Me gusta trabajar en proyectos donde el software genera un
            impacto directo en la operación, integrando aplicaciones con
            equipos industriales, bases de datos y distintos sistemas para
            optimizar procesos y reducir errores.
          </p>
        </div>
      </Section>
  );
};

export default About;