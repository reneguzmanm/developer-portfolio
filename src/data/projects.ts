import type { Project } from "../types/project";
import { technologies } from "./technologies";

export const projects: Project[] = [
  {
    id: "industrial-weighing",
    slug: "industrial-weighing",
    title: "Sistema automatizado de pesaje y etiquetado industrial",
    shortDescription:
      "Automatización del pesaje y etiquetado de productos mediante integración con hardware industrial y sistemas empresariales.",
    summary:
      "Aplicación de escritorio desarrollada en Python para consultar productos mediante servicios SOAP, recibir el peso desde una balanza dinámica, generar etiquetas con código QR, enviarlas por TCP/IP a un aplicador y registrar la producción en PostgreSQL.",

    technologies: [
      technologies.python,
      technologies.postgresql,
      technologies.soap,
      technologies.tcpip,
      technologies.rs232,
    ],

    role: "Desarrollo completo del software",
    projectType: "Proyecto empresarial",
    status: "private",

    workflow: [
      {
        title: "Consulta del producto",
        description:
          "El operador ingresaba el SKU y la aplicación consultaba el ERP mediante servicios web (SOAP) para obtener la descripción, el código y la duración del producto.",
        tags: ["Servicios web (SOAP)"],
      },
      {
        title: "Configuración",
        description:
          "La aplicación completaba los datos del producto y el operador definía el lote, revisaba la fecha de vencimiento y seleccionaba el formato de etiqueta.",
        tags: ["Persistencia de datos (PostgreSQL)"],
      },
      {
        title: "Pesaje en línea",
        description:
          "Cada pieza avanzaba por la cinta transportadora mientras la balanza enviaba el peso mediante comunicación serial (RS-232). Antes de imprimir, la aplicación verificaba que toda la información necesaria estuviera disponible para garantizar la correcta generación de la etiqueta.",
        tags: ["Comunicación serial (RS-232)"],
      },
      {
        title: "Generación y aplicación de la etiqueta",
        description:
          "Con el peso recibido, la aplicación generaba un identificador único para el código QR y enviaba la etiqueta al aplicador mediante comunicación de red (TCP/IP).",
        tags: ["Comunicación de red (TCP/IP)", "Código QR"],
      },
      {
        title: "Finalización de la producción",
        description:
          "Al presionar Finalizar, la aplicación consolidaba la producción del lote, contabilizando la cantidad de piezas y el peso total por producto. Posteriormente enviaba el resumen al ERP mediante servicios web (SOAP) y dejaba la estación preparada para iniciar el siguiente ciclo de producción.",
        tags: [
          "Servicios web (SOAP)",
          "Persistencia de datos (PostgreSQL)",
        ],
      },
    ],

    engineeringDecisions:
      [
        {
          title: "Persistencia local antes del ERP",
          problem:
            "La producción no podía enviarse al ERP pieza por pieza, ya que el operador debía revisar y consolidar el lote antes de finalizar el proceso.",
          decision:
            "Registrar cada pieza en una base de datos PostgreSQL y enviar únicamente un resumen consolidado al ERP cuando el operador presionaba Finalizar.",
          result:
            "La solución evitó pérdidas de información ante interrupciones, permitió reimprimir etiquetas y proporcionó trazabilidad completa durante la producción.",
        },
        {
          title: "Vista previa de etiquetas mediante Labelary",
          problem:
            "Cada prueba de una nueva etiqueta implicaba imprimirla físicamente, consumiendo material y obligando al operador a retirar manualmente la etiqueta del aplicador.",
          decision:
            "Integrar la API de Labelary para renderizar el código ZPL como una imagen antes de imprimir.",
          result:
            "Se redujo el consumo de etiquetas, se aceleró la configuración de nuevos formatos y disminuyó la interacción innecesaria con el aplicador.",
        },
        {
          title: "Integración con hardware industrial existente",
          problem:
            "El sistema debía operar con equipos previamente instalados y configurados por el equipo de servicio, respetando sus protocolos de comunicación.",
          decision:
            "Desarrollar la aplicación para integrarse mediante comunicación serial (RS-232) con la balanza y comunicación TCP/IP con el aplicador, adaptándose a la configuración existente.",
          result:
            "La solución pudo incorporarse al proceso productivo sin requerir modificaciones en la infraestructura industrial ya instalada.",
        },
      ],
  },
];