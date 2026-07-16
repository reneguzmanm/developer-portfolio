import { Link } from "react-router";
import type { Project } from "../../types/project";
import TechBadge from "../ui/TechBadge";

interface Props {
  project: Project;
}

const CaseStudyHero = ({ project }: Props) => {
  return (
    <>
      <Link
        to="/"
        className="text-sm text-blue-400 hover:text-blue-300 transition"
      >
        ← Volver al portafolio
      </Link>

      <div className="mt-10">

        <h1 className="text-5xl font-bold tracking-tight text-white">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          {project.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">

          {project.technologies.map((technology) => (
            <TechBadge
              key={technology.id}
              name={technology.name}
              icon={technology.icon}
            />
          ))}

        </div>

      </div>

      <div className="mt-12 grid gap-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-3">

        <div>

          <p className="text-sm text-slate-500">
            Mi participación
          </p>

          <p className="mt-2 text-white">
            {project.role}
          </p>

        </div>

        <div>

          <p className="text-sm text-slate-500">
            Tipo de proyecto
          </p>

          <p className="mt-2 text-white">
            {project.projectType}
          </p>

        </div>

        <div>

          <p className="text-sm text-slate-500">
            Repositorio
          </p>

          <p className="mt-2 text-white">

            {project.status === "private"
              ? "Privado"
              : "Público"}

          </p>

        </div>

      </div>

    </>
  );
};

export default CaseStudyHero;