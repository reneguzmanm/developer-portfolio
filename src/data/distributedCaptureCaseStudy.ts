import type {
  ArchitectureComparisonData,
  ProjectOverviewData,
} from "../types/caseStudy";

export const distributedCaptureOverview: ProjectOverviewData = {
  challengeTitle:
    "Modernizar un sistema crítico sin detener la producción.",

  challenge:
    "El sistema existente concentraba las lecturas de todas las líneas del packing en una única aplicación. Al operar varias líneas simultáneamente, comenzaron a perderse registros utilizados para medir productividad y apoyar el cálculo de remuneraciones variables. La nueva solución debía resolver este problema sin reemplazar todo el sistema de una sola vez.",

  solutionTitle:
    "Distribuir la captura y migrar cada línea de forma gradual.",

  solution:
    "Desarrollé una aplicación independiente para cada Panel PC industrial. Cada instancia capturaba las lecturas de su línea, reconstruía y validaba la información de cada caja, almacenaba los registros localmente y los sincronizaba en segundo plano con la base de datos central utilizada por el sistema existente.",
};

export const distributedCaptureArchitecture: ArchitectureComparisonData = {
  before: {
    title: "Una aplicación procesaba todas las líneas",
    description:
      "Los lectores enviaban sus datos mediante la red Wi-Fi hacia una única aplicación, generando un punto central de congestión y pérdida de registros.",
  },

  after: {
    title: "Cada línea operaba de forma independiente",
    description:
      "Cada Panel PC capturaba, validaba y almacenaba sus registros localmente antes de sincronizarlos con el sistema central.",
  },
};