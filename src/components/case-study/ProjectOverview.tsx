interface ProjectOverviewProps {
  challenge: string;
  solution: string;
}

const ProjectOverview = ({
  challenge,
  solution,
}: ProjectOverviewProps) => {
  return (
    <section className="mt-20 grid gap-10 lg:grid-cols-2">
      <div>
        <p className="text-sm font-medium text-blue-400">
          El desafío
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Integrar una línea de producción con los sistemas del cliente.
        </h2>

        <p className="mt-5 leading-8 text-slate-400">
          {challenge}
        </p>
      </div>

      <div>
        <p className="text-sm font-medium text-blue-400">
          La solución
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Una aplicación central para coordinar todo el proceso.
        </h2>

        <p className="mt-5 leading-8 text-slate-400">
          {solution}
        </p>
      </div>
    </section>
  );
};

export default ProjectOverview;