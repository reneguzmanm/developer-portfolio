interface ProjectOverviewProps {
  challengeTitle: string;
  challenge: string;
  solutionTitle: string;
  solution: string;
}

const ProjectOverview = ({
  challengeTitle,
  challenge,
  solutionTitle,
  solution,
}: ProjectOverviewProps) => {
  return (
    <section className="mt-20 grid gap-10 lg:grid-cols-2">
      <div>
        <p className="text-sm font-medium text-blue-400">
          El desafío
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white">
          {challengeTitle}
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
          {solutionTitle}
        </h2>

        <p className="mt-5 leading-8 text-slate-400">
          {solution}
        </p>
      </div>
    </section>
  );
};

export default ProjectOverview;