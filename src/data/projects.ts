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

    technologyDetails: {
      categories: [
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
      ],
    },

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
        tags: ["Servicios web (SOAP)", "Persistencia de datos (PostgreSQL)"],
      },
    ],
    participation: {
      summary:
        "Fui el único desarrollador del proyecto, responsable del diseño e implementación de toda la solución de software. Además de desarrollar las funcionalidades requeridas, propuse e incorporé mejoras que optimizaron la operación diaria, facilitaron el mantenimiento del sistema y ampliaron sus capacidades durante el desarrollo.",

      contributions: [
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
      ],
    },

    engineeringDecisions: [
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

  {
    id: "distributed-capture",
    slug: "distributed-capture",

    title:
      "Modernización de un sistema de captura de producción para líneas de packing",

    shortDescription:
      "Arquitectura distribuida para capturar y sincronizar registros de producción sin interrumpir la operación.",

    summary:
      "Diseñé una arquitectura distribuida para reemplazar progresivamente un sistema centralizado de captura de producción, permitiendo migrar cada línea de forma independiente sin interrumpir la operación y mejorando la confiabilidad de los registros.",

    role: "Diseño de arquitectura y desarrollo completo del software",
    projectType: "Aplicación de escritorio industrial",
    status: "private",

    technologies: [
      technologies.python,
      technologies.postgresql,
      technologies.tcpip,
      technologies.rs232,
    ],

    technologyDetails: {
      categories: [
        {
          title: "Aplicación",
          technologies: ["Python", "Tkinter"],
          description:
            "Aplicación de escritorio instalada en Panel PCs industriales para capturar, validar y administrar los registros de cada línea.",
        },
        {
          title: "Comunicaciones",
          technologies: ["TCP/IP", "RS-232"],
          description:
            "Recepción de lecturas desde dispositivos Cognex y Microscan según la infraestructura disponible en cada línea.",
        },
        {
          title: "Persistencia",
          technologies: ["PostgreSQL"],
          description:
            "Almacenamiento local de registros pendientes y sincronización posterior con la base de datos central.",
        },
        {
          title: "Procesamiento",
          technologies: ["Threading", "Sincronización en segundo plano"],
          description:
            "Proceso independiente para sincronizar registros sin bloquear la captura ni la interfaz de operación.",
        },
        {
          title: "Hardware",
          technologies: [
            "Panel PCs industriales",
            "Lectores Cognex",
            "Microscan QX300",
          ],
          description:
            "Despliegue de una estación independiente por línea, adaptada a un ambiente con humedad y neblina constante.",
        },
      ],
    },

    workflow: [
      {
        title: "Captura de lecturas",
        description:
          "La aplicación recibía individualmente las etiquetas leídas por el dispositivo conectado a cada línea.",
        tags: ["TCP/IP", "RS-232"],
      },
      {
        title: "Reconstrucción y validación",
        description:
          "Cada lectura era clasificada según su prefijo para reconstruir la caja y validar que todos los datos estuvieran presentes.",
        tags: ["Validación de datos", "Reglas de negocio"],
      },
      {
        title: "Persistencia local",
        description:
          "Los registros válidos se almacenaban localmente para mantener la operación incluso ante problemas de conectividad.",
        tags: ["Persistencia local", "PostgreSQL"],
      },
      {
        title: "Sincronización central",
        description:
          "Un proceso en segundo plano sincronizaba periódicamente los registros con la base de datos central.",
        tags: ["Sincronización", "Procesamiento en segundo plano"],
      },
    ],

    engineeringDecisions: [
      {
        title: "Procesamiento distribuido por línea",
        problem:
          "La aplicación central recibía simultáneamente las lecturas de todas las líneas, generando congestión y pérdida de registros.",
        decision:
          "Desplegar una aplicación independiente en cada Panel PC para que cada línea procesara sus propias lecturas.",
        result:
          "Se eliminó la aplicación central como punto único de congestión y cada línea pudo operar de forma independiente.",
      },
      {
        title: "Compatibilidad con el sistema existente",
        problem:
          "La solución anterior debía continuar operando mientras se habilitaba el nuevo sistema en las distintas líneas.",
        decision:
          "Mantener el mismo modelo de datos y sincronizar los registros con la base central utilizada por el sistema existente.",
        result:
          "Fue posible migrar una línea a la vez sin detener la producción.",
      },
      {
        title: "Persistencia local antes de sincronizar",
        problem:
          "La captura no podía depender completamente de la disponibilidad de la red o de la base de datos central.",
        decision:
          "Guardar primero cada registro validado en la base de datos local del Panel PC.",
        result:
          "La aplicación pudo continuar capturando información durante interrupciones temporales de conectividad.",
      },
      {
        title: "Control de duplicados",
        problem:
          "Los reintentos de sincronización podían intentar insertar nuevamente una caja ya registrada.",
        decision:
          "Verificar el identificador único de la caja en la base central antes de insertar el registro.",
        result:
          "La sincronización pudo reintentarse sin generar registros duplicados.",
      },
    ],



    participation: {
      summary:
        "Fui responsable del diseño de la arquitectura distribuida y del desarrollo completo de la aplicación instalada en los Panel PCs. También participé en la integración con los lectores industriales, la definición de las reglas de validación y la puesta en marcha gradual de la solución en las líneas de producción.",

      contributions: [
        {
          title: "Diseño de la arquitectura",
          description:
            "Propuse distribuir el procesamiento mediante una aplicación independiente por línea, eliminando la dependencia de una única aplicación central.",
        },
        {
          title: "Desarrollo de la aplicación",
          description:
            "Implementé la interfaz, la lógica de captura, la validación de lecturas, los indicadores operacionales y la persistencia local.",
        },
        {
          title: "Integración con lectores",
          description:
            "Desarrollé la comunicación con lectores Cognex y Microscan mediante TCP/IP y RS-232, adaptando la aplicación a la infraestructura disponible en cada línea.",
        },
        {
          title: "Reglas de validación",
          description:
            "Implementé la clasificación de etiquetas mediante prefijos y la reconstrucción temporal de cada caja antes de almacenarla.",
        },
        {
          title: "Sincronización de datos",
          description:
            "Desarrollé el proceso en segundo plano encargado de sincronizar los registros locales con la base de datos central y controlar posibles duplicados.",
        },
        {
          title: "Migración gradual",
          description:
            "La solución mantuvo compatibilidad con el modelo de datos existente, permitiendo habilitar una línea a la vez sin detener la operación del packing.",
        },
      ],
    },
  },
];