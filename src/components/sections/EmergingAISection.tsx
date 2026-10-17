import { ArrowUpRight, Check } from "lucide-react";
import { emergingAI } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TagList } from "@/components/ui/Tag";

export function EmergingAISection() {
  const hasProjects = emergingAI.projects.length > 0;
  const { practice } = emergingAI;

  return (
    <section id="ai" aria-labelledby="ai-title" className="pb-24 sm:pb-32">
      <Container>
        <div className="relative overflow-hidden rounded-[6px] border border-line bg-ink-950">
          <div aria-hidden className="bg-grid-fine mask-radial pointer-events-none absolute inset-0" />
          <div className="relative grid gap-12 p-7 sm:p-10 lg:grid-cols-12 lg:gap-10 lg:p-14">
            <Reveal className="lg:col-span-5">
              <p className="label-mono flex items-center gap-3">
                <span className="text-lime">§ 05</span>
                <span aria-hidden className="h-px w-6 bg-line-strong" />
                <span>AI</span>
              </p>
              <h2 id="ai-title" className="mt-6 text-balance text-3xl font-medium leading-[1.06] tracking-[-0.03em] text-paper sm:text-[2.6rem]">
                {emergingAI.title}
              </h2>
              <p className="mt-6 text-pretty leading-relaxed text-muted">{emergingAI.intro}</p>
              {!hasProjects ? <p className="mt-6 border-l border-mint/40 pl-4 text-sm leading-relaxed text-subtle">{emergingAI.note}</p> : null}
            </Reveal>

            <Reveal delay={0.1} className="space-y-6 lg:col-span-7">
              <div className="rounded-[4px] border border-lime/30 bg-ink-900/80 p-6 sm:p-7">
                <p className="label-mono flex items-center gap-2 text-lime/90">
                  <span aria-hidden className="size-1.5 rounded-full bg-lime" />
                  {practice.label}
                </p>
                <h3 className="mt-4 text-2xl font-medium tracking-[-0.025em] text-paper">{practice.title}</h3>
                <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted">{practice.description}</p>
                <TagList items={practice.tools} label="AI tools I use" className="mt-5" />
                <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {practice.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-paper/85">
                      <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-lime" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {hasProjects ? (
                <ul className="grid gap-4">
                  {emergingAI.projects.map((project) => (
                    <li key={project.title} className="rounded-[4px] border border-line bg-ink-900 p-6">
                      <h3 className="text-xl font-medium tracking-[-0.02em] text-paper">
                        {project.href ? (
                          <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-lime">
                            {project.title}
                            <ArrowUpRight aria-hidden className="size-4" />
                          </a>
                        ) : (
                          project.title
                        )}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
                      <TagList items={project.technologies} label={`${project.title} technologies`} className="mt-5" />
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="rounded-[4px] border border-dashed border-line-strong p-6 sm:p-7">
                  <p className="label-mono flex items-center gap-2">
                    <span aria-hidden className="animate-blink size-1.5 rounded-full bg-mint" />
                    {emergingAI.status} · AI in products
                  </p>
                  <ul className="mt-5 grid border-t border-line sm:grid-cols-2">
                    {emergingAI.topics.map((topic, i) => (
                      <li key={topic.title} className="flex gap-4 border-b border-line py-4 sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                        <span className="font-mono text-[11px] text-subtle">{String(i + 1).padStart(2, "0")}</span>
                        <span>
                          <span className="block text-sm font-medium text-paper/90">{topic.title}</span>
                          <span className="mt-1 block text-sm text-subtle">{topic.description}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
