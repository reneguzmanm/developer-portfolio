import type { Project } from "../../types/project";

interface WorkflowProps {
  project: Project;
}

const Workflow = ({ project }: WorkflowProps) => {
  return (
    <section className="mt-20">
      <p className="text-sm font-medium text-blue-400">
        Flujo de la solución
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Del ERP a la línea de producción
      </h2>

      <div className="mt-10 divide-y divide-slate-800">
        {project.workflow.map((step, index) => (
          <article
            key={step.title}
            className="grid gap-4 py-8 md:grid-cols-[80px_1fr]"
          >
            <span className="text-sm font-medium text-slate-500">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h3 className="text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 max-w-3xl leading-8 text-slate-400">
                {step.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Workflow;