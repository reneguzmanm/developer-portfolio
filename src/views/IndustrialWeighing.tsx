import { Link } from "react-router";
import Container from "../components/layout/Container";

const IndustrialWeighing = () => {
  return (
    <main className="min-h-screen py-16">
      <Container>
        <Link
          to="/"
          className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
        >
          ← Volver al portafolio
        </Link>

        <section className="mt-16">
          <p className="font-medium text-blue-400">Caso de estudio</p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Sistema automatizado de pesaje y etiquetado industrial
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Solución desarrollada en Python para integrar servicios SOAP,
            una balanza dinámica, PostgreSQL y un aplicador de etiquetas
            conectado mediante TCP/IP.
          </p>

          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
            <p className="text-slate-300">
              Caso de estudio en construcción.
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default IndustrialWeighing;