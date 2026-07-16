import CaseStudyHero from "../components/case-study/CaseStudyHero";
import IndustrialWeighingMockup from "../components/case-study/IndustrialWeighingMockup";
import Container from "../components/layout/Container";
import { projects } from "../data/projects";

const project = projects.find(
  (currentProject) => currentProject.slug === "industrial-weighing",
)!;

const IndustrialWeighing = () => {
  return (
    <main className="min-h-screen py-16">
      <Container>
        <CaseStudyHero project={project} />
        <IndustrialWeighingMockup />
      </Container>
    </main>
  );
};

export default IndustrialWeighing;