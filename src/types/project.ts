import type { Technology } from "./technology";

export interface WorkflowStep {
  title: string;
  description: string;
  tags: string[];
}

export interface EngineeringDecision {
  title: string;
  problem: string;
  decision: string;
  result: string;
}

export interface Project {
  id: string;
  slug: string;

  title: string;
  shortDescription: string;
  summary: string;

  technologies: Technology[];

  role: string;
  projectType: string;

  workflow: WorkflowStep[];

  engineeringDecisions: EngineeringDecision[];

  status: "public" | "private";

  githubUrl?: string;
}