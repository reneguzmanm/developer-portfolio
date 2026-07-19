const categories = [
  {
    title: "Aplicación",
    technologies: ["Python", "Tkinter"],
    description:
      "Aplicación de escritorio, lógica de negocio y módulos de administración.",
  },
  {
    title: "Integraciones",
    technologies: ["SOAP", "RS-232", "TCP/IP"],
    description:
      "Comunicación con el ERP, la balanza dinámica y el aplicador automático de etiquetas.",
  },
  {
    title: "Persistencia",
    technologies: ["PostgreSQL"],
    description:
      "Almacenamiento local para consolidación, reimpresión y trazabilidad.",
  },
  {
    title: "Hardware",
    technologies: [
      "Balanza dinámica Minebea",
      "Aplicador automático de etiquetas FoxJet",
    ],
    description:
      "Integración con una balanza dinámica Minebea y un aplicador automático de etiquetas FoxJet, adaptándose a la infraestructura existente de la línea de producción.",
  },
  {
    title: "Herramientas de desarrollo",
    technologies: ["Labelary"],
    description:
      "Vista previa de etiquetas ZPL durante la configuración.",
  },
];

const ProjectTechnologies = () => {
  return (
    <section className="mt-20">
      <p className="text-sm font-medium text-blue-400">
        Tecnologías utilizadas
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Tecnologías e integraciones del proyecto
      </h2>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {categories.map((category) => (
          <article
            key={category.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
          >
            <h3 className="text-xl font-semibold text-white">
              {category.title}
            </h3>

            <p className="mt-3 text-slate-200 font-medium">
              {category.technologies.join(" • ")}
            </p>

            <p className="mt-4 leading-7 text-slate-400">
              {category.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectTechnologies;