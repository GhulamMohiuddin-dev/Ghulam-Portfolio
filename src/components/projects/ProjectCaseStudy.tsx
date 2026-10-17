import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import { projectKindLabel, projects, type Project } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TagList } from "@/components/ui/Tag";
import { ProjectVisual } from "@/components/diagrams/ProjectVisual";

const chapters = [
  { id: "problem", label: "The problem" },
  { id: "why", label: "Why it mattered" },
  { id: "role", label: "Role & contribution" },
  { id: "decisions", label: "Architectural decisions" },
  { id: "stack", label: "Technologies" },
  { id: "approach", label: "Implementation" },
  { id: "outcome", label: "Outcome" },
  { id: "lessons", label: "Trade-offs & lessons" },
] as const;

function Chapter({ index, id, title, children }: { index: number; id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-12 first:border-t-0 first:pt-0">
      <Reveal>
        <p className="label-mono text-lime">{String(index + 1).padStart(2, "0")}</p>
        <h2 id={`${id}-title`} className="mt-3 text-2xl font-medium tracking-[-0.025em] text-paper sm:text-3xl">
          {title}
        </h2>
        <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted">{children}</div>
      </Reveal>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="mt-[11px] h-px w-3 shrink-0 bg-lime/70" />
          <span className="text-paper/85">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProjectCaseStudy({ project }: { project: Project }) {
  const position = projects.findIndex((p) => p.slug === project.slug);
  const number = String(position + 1).padStart(2, "0");
  const next = projects[(position + 1) % projects.length];

  return (
    <article>
      <header className="relative overflow-hidden pb-16 pt-28 sm:pt-36">
        <div aria-hidden className="bg-grid mask-radial pointer-events-none absolute inset-0" />
        <Container className="relative">
          <Link
            href="/#work"
            className="label-mono inline-flex min-h-11 items-center gap-2 transition-colors hover:text-paper"
          >
            <ArrowLeft aria-hidden className="size-3.5" />
            All work
          </Link>

          <p className="label-mono mt-10 flex flex-wrap items-center gap-3">
            <span className="text-lime">
              Case study {number} / {String(projects.length).padStart(2, "0")}
            </span>
            <span aria-hidden className="h-px w-8 bg-line-strong" />
            {projectKindLabel[project.kind]}
          </p>
          <h1 className="mt-6 max-w-[22ch] text-balance text-[2.5rem] font-medium leading-[1] tracking-[-0.04em] text-paper sm:text-6xl lg:text-[clamp(4.25rem,5.4vw,8.5rem)]">
            {project.title}
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted">{project.summary}</p>

          <dl className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-ink-950 p-5">
              <dt className="label-mono">Context</dt>
              <dd className="mt-2 text-sm leading-relaxed text-paper/90">{project.context}</dd>
            </div>
            <div className="bg-ink-950 p-5">
              <dt className="label-mono">Role</dt>
              <dd className="mt-2 text-sm leading-relaxed text-paper/90">{project.role}</dd>
            </div>
            <div className="bg-ink-950 p-5 sm:col-span-2 lg:col-span-1">
              <dt className="label-mono">Stack</dt>
              <dd className="mt-3">
                <TagList items={project.technologies} label="Technologies" />
              </dd>
            </div>
          </dl>
        </Container>
      </header>

      <Container>
        <Reveal>
          <ProjectVisual project={project} fig={number} />
        </Reveal>

        {project.images?.length ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {project.images.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-auto w-full rounded-[6px] border border-line"
              />
            ))}
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-12 py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
          <aside className="lg:col-span-4">
            <nav aria-label="Case study chapters" className="lg:sticky lg:top-28">
              <p className="label-mono">Contents</p>
              <ol className="mt-4 hidden border-l border-line lg:block">
                {chapters.map((chapter, i) => (
                  <li key={chapter.id}>
                    <a
                      href={`#${chapter.id}`}
                      className="-ml-px flex gap-3 border-l border-transparent py-1.5 pl-4 text-sm text-muted transition-colors hover:border-lime hover:text-paper"
                    >
                      <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
                      {chapter.label}
                    </a>
                  </li>
                ))}
              </ol>
              <ol className="mt-4 flex flex-wrap gap-2 lg:hidden">
                {chapters.map((chapter, i) => (
                  <li key={chapter.id}>
                    <a href={`#${chapter.id}`} className="inline-flex min-h-9 items-center gap-2 rounded-[3px] border border-line px-2.5 text-xs text-muted">
                      <span className="font-mono text-subtle">{String(i + 1).padStart(2, "0")}</span>
                      {chapter.label}
                    </a>
                  </li>
                ))}
              </ol>

              {project.disclosure ? (
                <p className="mt-10 flex gap-3 rounded-[4px] border border-line bg-ink-900 p-4 text-xs leading-relaxed text-subtle">
                  <ShieldCheck aria-hidden className="mt-0.5 size-4 shrink-0 text-mint" />
                  {project.disclosure}
                </p>
              ) : null}
            </nav>
          </aside>

          <div className="lg:col-span-8">
            <Chapter index={0} id="problem" title="The problem">
              <p className="text-lg text-paper/90">{project.problem}</p>
              <Bullets items={project.challenges} />
            </Chapter>

            <Chapter index={1} id="why" title="Why it mattered">
              <p>{project.whyItMattered}</p>
            </Chapter>

            <Chapter index={2} id="role" title="Role & contribution">
              <p className="text-paper/90">{project.role}</p>
              <Bullets items={project.contributions} />
            </Chapter>

            <Chapter index={3} id="decisions" title="Architectural decisions">
              <ol className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2">
                {project.decisions.map((decision, i) => (
                  <li key={decision.title} className="bg-ink-950 p-5">
                    <span className="font-mono text-xs text-subtle">D{i + 1}</span>
                    <h3 className="mt-2 font-medium text-paper">{decision.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{decision.detail}</p>
                  </li>
                ))}
              </ol>
            </Chapter>

            <Chapter index={4} id="stack" title="Technologies">
              <TagList items={project.technologies} label="Technologies used" />
            </Chapter>

            <Chapter index={5} id="approach" title="Implementation approach">
              <ol className="space-y-4">
                {project.approach.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-mono text-xs leading-7 text-subtle">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-paper/85">{step}</span>
                  </li>
                ))}
              </ol>
            </Chapter>

            <Chapter index={6} id="outcome" title="Outcome">
              <p className="text-paper/90">{project.outcome}</p>
              {project.metrics?.length ? (
                <dl className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="bg-ink-950 p-5">
                      <dt className="label-mono">{metric.label}</dt>
                      <dd className="mt-2 text-2xl font-medium text-paper">{metric.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}
              {project.links?.length ? (
                <ul className="flex flex-wrap gap-4">
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-paper underline-offset-4 hover:text-lime hover:underline">
                        {link.label}
                        <ArrowUpRight aria-hidden className="size-3.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Chapter>

            <Chapter index={7} id="lessons" title="Trade-offs & lessons">
              <Bullets items={project.tradeoffs} />
            </Chapter>
          </div>
        </div>
      </Container>

      {next && next.slug !== project.slug ? (
        <Container>
          <Link
            href={`/work/${next.slug}`}
            prefetch={true}
            className="group mb-24 flex flex-col gap-4 rounded-[6px] border border-line bg-ink-900 p-7 transition-colors hover:border-lime/40 sm:flex-row sm:items-end sm:justify-between sm:p-10"
          >
            <span>
              <span className="label-mono">Next case study</span>
              <span className="mt-3 block text-2xl font-medium tracking-[-0.025em] text-paper sm:text-4xl">{next.title}</span>
            </span>
            <ArrowRight aria-hidden className="size-6 text-muted transition-all group-hover:translate-x-1 group-hover:text-lime" />
          </Link>
        </Container>
      ) : null}
    </article>
  );
}
