import {
  SiReact,
  SiTypescript,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiDocker,
} from "react-icons/si";

export const technologies = {
  react: {
    id: "react",
    name: "React",
    icon: SiReact,
  },

  typescript: {
    id: "typescript",
    name: "TypeScript",
    icon: SiTypescript,
  },

  python: {
    id: "python",
    name: "Python",
    icon: SiPython,
  },

  django: {
    id: "django",
    name: "Django",
    icon: SiDjango,
  },

  node: {
    id: "nodejs",
    name: "Node.js",
    icon: SiNodedotjs,
  },

  express: {
    id: "express",
    name: "Express",
    icon: SiExpress,
  },

  postgresql: {
    id: "postgresql",
    name: "PostgreSQL",
    icon: SiPostgresql,
  },

  mysql: {
    id: "mysql",
    name: "MySQL",
    icon: SiMysql,
  },

  docker: {
    id: "docker",
    name: "Docker",
    icon: SiDocker,
  },
} as const;