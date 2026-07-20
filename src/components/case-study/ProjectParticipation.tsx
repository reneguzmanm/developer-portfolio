import type { Project } from "../../types/project";

interface Props {
  project: Project;
}

const ProjectParticipation = ({ project }: Props) => {
  const { participation } = project;

  return (
    <section className="mt-20">
      <p className="text-sm font-medium text-blue-400">
        Mi participación
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Alcance de mi participación
      </h2>

      <p className="mt-6 max-w-4xl leading-8 text-slate-400">
        {participation.summary}
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {participation.contributions.map((contribution) => (
          <article
            key={contribution.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
          >
            <h3 className="text-lg font-semibold text-white">
              {contribution.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              {contribution.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectParticipation;