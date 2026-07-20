import type { Project } from "../../types/project";

interface Props {
  project: Project;
}

const ProjectTechnologies = ({ project }: Props) => {
  const { categories } = project.technologyDetails;

  return (
    <section className="mt-20">
      <p className="text-sm font-medium text-blue-400">
        Tecnologías utilizadas
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Tecnologías e integraciones del proyecto
      </h2>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {categories.map((category) => (
          <article
            key={category.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
          >
            <h3 className="text-xl font-semibold text-white">
              {category.title}
            </h3>

            <p className="mt-3 font-medium text-slate-200">
              {category.technologies.join(" • ")}
            </p>

            <p className="mt-4 leading-7 text-slate-400">
              {category.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectTechnologies;