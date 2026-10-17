import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Education } from "./Education";
import { ExperienceTimeline } from "./ExperienceTimeline";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          id="about-title"
          index="03"
          label="About"
          title="Four years of building enterprise software."
          intro="I work across the frontend platform — from architecture reviews and shared libraries to Backend-for-Frontend services and delivery pipelines. I care about systems that stay understandable as they grow, and teams that can ship them with confidence."
        />
        <div className="mt-16 lg:mt-24">
          <ExperienceTimeline />
          <Education />
        </div>
      </Container>
    </section>
  );
}
