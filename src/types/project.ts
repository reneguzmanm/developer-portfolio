import type { Technology } from "./technology";

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  summary: string;
  technologies: Technology[];
  status: "public" | "private";
  githubUrl?: string;
}