import { skillGroups } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TechnicalSkills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeader
          id="skills-title"
          index="04"
          label="Skills"
          title="Technical toolkit."
          intro="Grouped by discipline, most relevant first. No proficiency bars — the case studies show how each is applied."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-[6px] border border-line bg-line md:grid-cols-2 lg:mt-24">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 2) * 0.08} className="bg-ink-950 p-7 sm:p-9">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-medium tracking-[-0.02em] text-paper">{group.title}</h3>
                <span className="label-mono">
                  {group.code} · {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-7 flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <li
                    key={item}
                    className={
                      j < 3
                        ? "rounded-[3px] border border-lime/30 bg-lime/[0.05] px-3 py-1.5 text-sm text-paper"
                        : "rounded-[3px] border border-line-strong px-3 py-1.5 text-sm text-paper/85"
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
