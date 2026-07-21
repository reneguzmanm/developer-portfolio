import type { DistributedCaptureMockupData } from "../types/distributedCaptureMockup";

export const distributedCaptureMockupData: DistributedCaptureMockupData = {
  line: "Línea 5",

  readerStatus: "Lector conectado",

  workerGroups: [
    {
      id: "packers",
      title: "Embalador",
      workers: [
        {
          id: "packer-1",
          name: "Operador 104",
          count: 8,
          pending: 0,
        },
        {
          id: "packer-2",
          name: "Operador 218",
          count: 6,
          pending: 1,
        },
        {
          id: "packer-3",
          name: "Operador 325",
          count: 3,
          pending: 0,
        },
      ],
    },
    {
      id: "selectors",
      title: "Selector",
      workers: [
        {
          id: "selector-1",
          name: "Operador 307",
          count: 9,
          pending: 0,
        },
        {
          id: "selector-2",
          name: "Operador 412",
          count: 5,
          pending: 2,
        },
      ],
    },
    {
      id: "weighers",
      title: "Pesador",
      workers: [
        {
          id: "weigher-1",
          name: "Operador 511",
          count: 7,
          pending: 0,
        },
        {
          id: "weigher-2",
          name: "Operador 604",
          count: 4,
          pending: 1,
        },
      ],
    },
  ],

  events: [
    "Personal sincronizado correctamente.",
    "Caja registrada en la base de datos local.",
    "Conteo actualizado para los trabajadores asociados.",
    "Sincronización con la base de datos central completada.",
  ],

  lastSynchronization: "10:42:18",

  centralDatabaseStatus: "Base de datos central disponible",
};