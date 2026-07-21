import ArchitectureComparison from "../components/case-study/ArchitectureComparison";
import CaseStudyHero from "../components/case-study/CaseStudyHero";
import DistributedCaptureMockup from "../components/case-study/DistributedCaptureMockup";
import EngineeringDecisions from "../components/case-study/EngineeringDecisions";
import ProjectOverview from "../components/case-study/ProjectOverview";
import ProjectParticipation from "../components/case-study/ProjectParticipation";
import ProjectTechnologies from "../components/case-study/ProjectTechnologies";
import Workflow from "../components/case-study/Workflow";
import Container from "../components/layout/Container";

import {
  distributedCaptureArchitecture,
  distributedCaptureOverview,
} from "../data/distributedCaptureCaseStudy";

import { distributedCaptureMockupData } from "../data/distributedCaptureMockup";
import { getProjectBySlug } from "../data/projects";

const project = getProjectBySlug("distributed-capture");

const DistributedCapture = () => {
  if (!project) {
    return null;
  }

  return (
    <main className="min-h-screen py-16">
      <Container>
        <CaseStudyHero project={project} />

        <ProjectOverview {...distributedCaptureOverview} />

        <DistributedCaptureMockup
          data={distributedCaptureMockupData}
        />

        <ArchitectureComparison
          {...distributedCaptureArchitecture}
        />

        <Workflow project={project} />

        <EngineeringDecisions project={project} />

        <ProjectParticipation project={project} />

        <ProjectTechnologies project={project} />
      </Container>
    </main>
  );
};

export default DistributedCapture;