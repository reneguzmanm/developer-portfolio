export interface ProjectOverviewData {
  challengeTitle: string;
  challenge: string;
  solutionTitle: string;
  solution: string;
}

export interface ArchitectureState {
  title: string;
  description: string;
}

export interface ArchitectureComparisonData {
  before: ArchitectureState;
  after: ArchitectureState;
}