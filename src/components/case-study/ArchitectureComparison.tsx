type ArchitectureItem = {
  title: string;
  description: string;
};

type ArchitectureComparisonProps = {
  before: ArchitectureItem;
  after: ArchitectureItem;
};

const ArchitectureComparison = ({
  before,
  after,
}: ArchitectureComparisonProps) => {
  return (
    <section className="mt-20">
      <p className="text-sm font-medium text-blue-400">
        Evolución de la arquitectura
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white">
        De una captura centralizada a una operación distribuida
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
            Antes
          </p>

          <h3 className="mt-3 text-xl font-semibold text-white">
            {before.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            {before.description}
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-center text-slate-300">
              Múltiples líneas de producción
            </div>

            <div className="text-center text-slate-600">↓</div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-center text-slate-300">
              Red Wi-Fi del packing
            </div>

            <div className="text-center text-slate-600">↓</div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-center text-slate-300">
              Aplicación central
            </div>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <p className="text-sm font-medium uppercase tracking-wider text-blue-400">
            Después
          </p>

          <h3 className="mt-3 text-xl font-semibold text-white">
            {after.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-400">
            {after.description}
          </p>

          <div className="mt-8 space-y-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {["Línea 1", "Línea 2", "Línea 3"].map((line) => (
                <div
                  key={line}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-center text-slate-300"
                >
                  <p>{line}</p>
                  <p className="mt-2 text-sm text-slate-500">
                    App + BD local
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center text-slate-600">↓</div>

            <div className="rounded-xl border border-blue-900/50 bg-blue-950/20 p-4 text-center text-slate-200">
              Sincronización con la base de datos central
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ArchitectureComparison;