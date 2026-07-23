import Container from "../components/layout/Container";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Información principal */}
          <div>
            <p className="text-blue-400 font-medium">
              Hola, soy
            </p>

            <h1 className="mt-3 text-5xl font-bold tracking-tight text-white md:text-6xl">
              René Guzmán
            </h1>

            <h2 className="mt-5 text-2xl text-slate-300">
              <p>
              Full Stack Developer 
              </p>
              <p>
                  Web Applications & Industrial Systems Integration
              </p>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Desarrollo aplicaciones web e integro sistemas de software y hardware para automatizar
               procesos industriales, conectando aplicaciones con equipos y plataformas productivas.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
              >
                Ver proyectos
              </a>

              <a
                href="/CV_Rene_Guzman_Portafolio.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-300 transition hover:border-slate-500"
              >
                Descargar CV
              </a>
            </div>
          </div>


          {/* Panel técnico */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">
                Perfil técnico
              </span>

              <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                Disponible
              </span>
            </div>


            <div className="mt-6 space-y-4">

              <div>
                <p className="text-sm text-slate-500">
                  Backend
                </p>

                <p className="text-white">
                  Python · Django · Flask · Node.js
                </p>
              </div>


              <div>
                <p className="text-sm text-slate-500">
                  Frontend
                </p>

                <p className="text-white">
                  React · TypeScript · Tailwind
                </p>
              </div>


              <div>
                <p className="text-sm text-slate-500">
                  Datos
                </p>

                <p className="text-white">
                  PostgreSQL · SQL Server · MySQL
                </p>
              </div>


              <div>
                <p className="text-sm text-slate-500">
                  Integración industrial
                </p>

                <p className="text-white">
                  PLC · RS232 · Lectores industriales · Automatización
                </p>
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;