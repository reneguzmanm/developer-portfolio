import ProjectCard from "../components/common/ProjectCard";
import Section from "../components/common/Section";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <Section
      id="projects"
      eyebrow="Proyectos"
      title="Soluciones desarrolladas para problemas reales."
    >
      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;