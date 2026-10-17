import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function FeaturedProjects() {
  return (
    <section id="work" aria-labelledby="work-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          id="work-title"
          index="01"
          label="Selected work"
          title="Case studies in platform and product engineering."
          intro="Anonymized case studies from professional work. Client names, source code, and private metrics are withheld — diagrams are illustrative concepts that explain the architecture, not screenshots of production systems."
        />
        <div className="mt-16 lg:mt-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
