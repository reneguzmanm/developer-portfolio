import CaseStudyHero from "../components/case-study/CaseStudyHero";
import IndustrialWeighingMockup from "../components/case-study/IndustrialWeighingMockup";
import Container from "../components/layout/Container";
import { projects } from "../data/projects";
import ProjectOverview from "../components/case-study/ProjectOverview";
import Workflow from "../components/case-study/Workflow";
import EngineeringDecisions from "../components/case-study/EngineeringDecisions";

const project = projects.find(
  (currentProject) => currentProject.slug === "industrial-weighing",
)!;

const IndustrialWeighing = () => {
  return (
    <main className="min-h-screen py-16">
      <Container>
        <CaseStudyHero project={project} />
        <ProjectOverview
          challenge="El proceso debía identificar cada producto, obtener su información desde el ERP, capturar automáticamente el peso en una línea dinámica, generar una etiqueta válida y aplicarla sin interrumpir el flujo de producción."
          solution="Desarrollé una aplicación en Python que integraba servicios SOAP, una balanza conectada por comunicación serial, PostgreSQL y un aplicador de etiquetas por TCP/IP. La solución validaba los datos, calculaba la fecha de vencimiento, generaba el código QR y registraba cada operación."
        />
        <IndustrialWeighingMockup />
        <Workflow project={project} />
        <EngineeringDecisions project={project} />
      </Container>
    </main>
  );
};

export default IndustrialWeighing;