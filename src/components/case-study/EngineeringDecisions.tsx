import type { Project } from "../../types/project";

interface EngineeringDecisionsProps {
    project: Project;
}

const EngineeringDecisions = ({ project }: EngineeringDecisionsProps) => {
    return (
        <section className="mt-20">
            <p className="text-sm font-medium text-blue-400">
                Decisiones de ingeniería
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
                Algunas decisiones que influyeron en la arquitectura y operación del sistema.
            </h2>

            <div className="mt-10 space-y-8">
                {project.engineeringDecisions.map((decision) => (
                    <article
                        key={decision.title}
                        className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
                    >
                        <h3 className="text-xl font-semibold text-white">
                            {decision.title}
                        </h3>

       
       
                        <div className="mt-6 grid gap-7 md:grid-cols-2">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                                    Problema
                                </p>

                                <p className="mt-2 leading-8 text-slate-400">
                                    {decision.problem}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                                    Decisión
                                </p>

                                <p className="mt-2 leading-8 text-slate-400">
                                    {decision.decision}
                                </p>
                            </div>

                            <div className="md:col-span-2">
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                                    Resultado
                                </p>

                                <p className="mt-2 leading-8 text-slate-400">
                                    {decision.result}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default EngineeringDecisions;