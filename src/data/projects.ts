import { technologies } from "./technologies";
import type { Project } from "../types/project";

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
    status: "private",
  },
];