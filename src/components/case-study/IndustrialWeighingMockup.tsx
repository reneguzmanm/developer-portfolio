const IndustrialWeighingMockup = () => {
  return (
    <section className="mt-16">
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <p className="text-sm font-medium text-slate-300">
            Sistema de pesaje y etiquetado
          </p>

          <span className="text-xs text-slate-500">Python · Tkinter</span>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border-b border-slate-800 p-6 lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">
                Configuración del producto
              </h2>

              <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
                SOAP
              </span>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <label className="text-sm text-slate-400">
                  SKU del producto
                </label>

                <div className="mt-2 flex gap-2">
                  <div className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200">
                    884
                  </div>

                  <button
                    type="button"
                    className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500"
                  >
                    Buscar
                  </button>
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  La consulta también podía ejecutarse presionando Enter.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Producto
                  </p>

                  <p className="mt-2 rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-slate-200">
                    Jamonada tradicional
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    SKU
                  </p>

                  <p className="mt-2 rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-slate-200">
                    884
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Duración
                </p>

                <p className="mt-2 rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-slate-200">
                  45 días
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-300">
                    Estado de consulta
                  </p>

                  <span className="text-xs text-green-400">
                    Producto cargado
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  La información se obtenía desde los servicios empresariales
                  del cliente utilizando autenticación por token.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">
                Producción en curso
              </h2>

              <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-300">
                Línea activa
              </span>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                <span>RS-232</span>
                <span aria-hidden="true">•</span>
                <span>Balanza dinámica</span>
              </div>

              <p className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
                3,105
                <span className="ml-2 text-2xl font-medium text-slate-400">
                  kg
                </span>
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Peso recibido
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Fecha de vencimiento
                </p>

                <p className="mt-2 rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-slate-200">
                  29/08/2026
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Lote
                </p>

                <p className="mt-2 rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-slate-200">
                  L260715A
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Formato de etiqueta
              </p>

              <div className="mt-2 flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-4 py-3">
                <span className="text-slate-200">Etiqueta cecinas 100 × 80</span>
                <span className="text-slate-500">⌄</span>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-300">
                    Resumen de producción
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Jamonada tradicional
                  </p>
                </div>

                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
                  PostgreSQL
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Cant. Piezas
                  </p>
                  <p className="mt-1 text-xl font-semibold text-white">128</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Kilos totales
                  </p>
                  <p className="mt-1 text-xl font-semibold text-white">
                    247,36 kg
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="flex-1 rounded-lg border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:border-slate-500"
              >
                Imprimir manualmente
              </button>

              <button
                type="button"
                className="flex-1 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500"
              >
                Finalizar producción
              </button>
            </div>

            <p className="mt-4 text-center text-xs leading-5 text-slate-500">
              Al finalizar, la aplicación consolidaba las piezas y los kilos,
              enviaba el resumen al ERP por SOAP y limpiaba la interfaz para el
              siguiente producto.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs text-slate-500">
              <span className="rounded-full border border-slate-800 px-3 py-1">
                QR e ID único
              </span>
              <span className="rounded-full border border-slate-800 px-3 py-1">
                TCP/IP al aplicador
              </span>
              <span className="rounded-full border border-slate-800 px-3 py-1">
                Impresión automática
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-500">
        Mockup original creado para explicar el funcionamiento de la solución
        sin reproducir la interfaz propietaria ni exponer información del
        cliente.
      </p>
    </section>
  );
};

export default IndustrialWeighingMockup;