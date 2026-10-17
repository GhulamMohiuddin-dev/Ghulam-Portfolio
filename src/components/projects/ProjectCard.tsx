import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectKindLabel, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ProjectVisual } from "@/components/diagrams/ProjectVisual";
import { Reveal } from "@/components/ui/Reveal";
import { TagList } from "@/components/ui/Tag";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0");
  const href = `/work/${project.slug}`;
  const flipped = index % 2 === 1;

  return (
    <article aria-labelledby={`project-${project.slug}`} className="group border-t border-line py-16 lg:py-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className={cn("lg:col-span-5", flipped && "lg:order-last")}>
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-lime">{number}</span>
            <span aria-hidden className="h-px flex-1 bg-line" />
            <span className="label-mono">{projectKindLabel[project.kind]}</span>
          </div>

          <h3
            id={`project-${project.slug}`}
            className="mt-8 text-balance text-3xl font-medium leading-[1.05] tracking-[-0.03em] text-paper sm:text-4xl"
          >
            <Link href={href} prefetch={true} className="transition-colors hover:text-lime">
              {project.title}
            </Link>
          </h3>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted">{project.summary}</p>

          <dl className="mt-8 space-y-5 border-t border-line pt-6">
            <div>
              <dt className="label-mono">Context</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-paper/90">{project.context}</dd>
            </div>
            <div>
              <dt className="label-mono">The problem</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-paper/90">{project.problem}</dd>
            </div>
            <div>
              <dt className="label-mono">My role</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-paper/90">{project.role}</dd>
            </div>
          </dl>

          <TagList items={project.technologies} label={`${project.title} technologies`} className="mt-7" />

          <Link
            href={href}
            prefetch={true}
            className="mt-9 inline-flex min-h-11 items-center gap-2 border-b border-line-strong pb-1 text-sm font-medium text-paper transition-colors hover:border-lime hover:text-lime"
          >
            Read the case study
            <span className="sr-only">: {project.title}</span>
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="lg:sticky lg:top-28 lg:col-span-7 lg:self-start">
          <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1 motion-reduce:transform-none">
            <ProjectVisual project={project} fig={number} />
          </div>
        </Reveal>
      </div>
    </article>
  );
}
