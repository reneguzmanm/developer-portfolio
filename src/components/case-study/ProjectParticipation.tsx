const contributions = [
  {
    title: "Arquitectura y desarrollo",
    description:
      "Diseñé y desarrollé toda la aplicación de escritorio, incluyendo la lógica de negocio, las interfaces y los módulos de administración.",
  },
  {
    title: "Integración con el ERP",
    description:
      "Implementé la consulta de productos y el registro consolidado de la producción mediante servicios web SOAP.",
  },
  {
    title: "Integración con hardware",
    description:
      "Desarrollé la comunicación con la balanza mediante RS-232 y con el aplicador de etiquetas mediante TCP/IP.",
  },
  {
    title: "Persistencia y trazabilidad",
    description:
      "Diseñé la persistencia en PostgreSQL para conservar la producción, permitir reimpresiones y consultar el historial.",
  },
  {
    title: "Mejoras propuestas",
    description:
      "Propuse e implementé funcionalidades que no formaban parte de los requerimientos iniciales, como la vista previa de etiquetas, el módulo de reimpresión y la persistencia local para consolidar la producción antes de sincronizarla con el ERP.",
  },
  {
    title: "Pruebas en planta",
    description:
      "Participé en la validación de la solución junto al equipo de servicio, adaptando el software a la configuración de los equipos industriales.",
  },
];

const ProjectParticipation = () => {
  return (
    <section className="mt-20">
      <p className="text-sm font-medium text-blue-400">
        Mi participación
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Alcance de mi participación
      </h2>

      <p className="mt-6 max-w-4xl leading-8 text-slate-400">
        Fui el único desarrollador del proyecto, responsable del diseño e implementación de toda la solución de software. 
        Además de desarrollar las funcionalidades requeridas, propuse e incorporé mejoras que optimizaron la operación 
        diaria, facilitaron el mantenimiento del sistema y ampliaron sus capacidades durante el desarrollo.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {contributions.map((contribution) => (
          <article
            key={contribution.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
          >
            <h3 className="text-lg font-semibold text-white">
              {contribution.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              {contribution.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectParticipation;