import type {
  DistributedCaptureMockupData,
  MockupWorkerGroup,
} from "../../types/distributedCaptureMockup";

interface Props {
  data: DistributedCaptureMockupData;
}

interface WorkerGroupProps {
  group: MockupWorkerGroup;
}

const WorkerGroup = ({ group }: WorkerGroupProps) => {
  return (
    <section>
      <div className="border-b border-slate-300 bg-slate-100 px-4 py-2">
        <h4 className="text-sm font-bold uppercase tracking-wide text-slate-700">
          {group.title}
        </h4>
      </div>

      <div className="divide-y divide-slate-200">
        {group.workers.map((worker) => {
          const hasPending = worker.pending > 0;

          return (
            <div
              key={worker.id}
              className="grid grid-cols-[1fr_auto] items-center gap-4 bg-white px-4 py-3"
            >
              <span className="truncate text-sm font-medium text-slate-800">
                {worker.name}
              </span>

              <span
                className={`text-sm font-bold ${
                  hasPending
                    ? "text-amber-500"
                    : "text-emerald-600"
                }`}
              >
                {worker.count}

                {hasPending && (
                  <span className="ml-1 font-semibold">
                    ({worker.pending} por comprobar)
                  </span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const DistributedCaptureMockup = ({ data }: Props) => {
  return (
    <section className="mt-20">
      <p className="text-sm font-medium text-blue-400">
        Interfaz operacional
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Conteo visible por trabajador en cada línea
      </h2>

      <p className="mt-5 max-w-4xl leading-8 text-slate-400">
        Cada trabajador podía comprobar directamente que su contador
        aumentaba al procesarse una caja. Los registros pendientes de
        validación central se mostraban en amarillo y los confirmados,
        en verde.
      </p>

      <div className="mt-10 overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 shadow-2xl shadow-black/30">
        <header className="flex items-center justify-between border-b border-slate-700 bg-slate-900 px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Captura de producción
            </p>

            <h3 className="mt-1 text-xl font-semibold text-white">
              {data.line}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 text-sm text-slate-300 sm:flex">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              {data.readerStatus}
            </div>

            <button
              type="button"
              className="rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200"
            >
              Configuración
            </button>
          </div>
        </header>

        <div className="grid bg-slate-200 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)]">
          <div className="min-w-0 border-slate-400 lg:border-r">
            {data.workerGroups.map((group) => (
              <WorkerGroup
                key={group.id}
                group={group}
              />
            ))}
          </div>

          <div className="flex min-h-[520px] flex-col bg-slate-100">
            <div className="flex flex-1 items-center justify-center p-8">
              <div className="flex h-52 w-52 items-center justify-center rounded-full border-[12px] border-emerald-500 bg-white shadow-inner">
                <div className="text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                    Estado
                  </p>

                  <p className="mt-2 text-xl font-black uppercase text-emerald-600">
                    Lectura válida
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-300 bg-white">
              <div className="border-b border-slate-200 px-4 py-3">
                <h4 className="text-sm font-bold uppercase tracking-wide text-slate-700">
                  Eventos
                </h4>
              </div>

              <div className="max-h-52 space-y-2 overflow-y-auto px-4 py-4">
                {data.events.map((event) => (
                  <div
                    key={event}
                    className="flex gap-3 text-sm text-slate-600"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                    <p>{event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer className="flex flex-col gap-2 border-t border-slate-700 bg-slate-900 px-5 py-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>
            Última sincronización: {data.lastSynchronization}
          </span>

          <span>{data.centralDatabaseStatus}</span>
        </footer>
      </div>
    </section>
  );
};

export default DistributedCaptureMockup;