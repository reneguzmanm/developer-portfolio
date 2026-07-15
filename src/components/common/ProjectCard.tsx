import { Link } from "react-router";
import type { Project } from "../../types/project";
import TechBadge from "../ui/TechBadge";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-sm font-medium text-blue-400">
            Proyecto destacado
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
            {project.title}
          </h3>

          <p className="mt-4 max-w-3xl leading-8 text-slate-400">
            {project.shortDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechBadge
              key={technology.id}
              name={technology.name}
              icon={technology.icon}
            />
          ))}
        </div>

        <div>
          <Link
            to={`/case-studies/${project.slug}`}
            className="inline-flex items-center gap-2 font-medium text-blue-400 transition hover:text-blue-300"
          >
            Ver proyecto
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;