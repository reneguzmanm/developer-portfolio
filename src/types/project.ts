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

  participation: ProjectParticipation;

  status: "public" | "private";

  githubUrl?: string;

  technologyDetails: ProjectTechnologyDetails;
}

export interface ProjectContribution {
  title: string;
  description: string;
}

export interface ProjectParticipation {
  summary: string;
  contributions: ProjectContribution[];
}

export interface ProjectTechnologyCategory {
  title: string;
  technologies: string[];
  description: string;
}

export interface ProjectTechnologyDetails {
  categories: ProjectTechnologyCategory[];
}