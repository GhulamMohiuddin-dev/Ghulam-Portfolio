import { principles } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PrincipleGlyph } from "@/components/diagrams/PrincipleGlyph";

export function EngineeringPrinciples() {
  return (
    <section
      id="engineering"
      aria-labelledby="engineering-title"
      className="relative border-y border-line bg-ink-900 py-24 sm:py-32"
    >
      <div aria-hidden className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-60" />
      <Container className="relative">
        <SectionHeader
          id="engineering-title"
          index="02"
          label="Engineering"
          title={
            <>
              Beyond components.
              <br />
              <span className="text-muted">Thinking in systems.</span>
            </>
          }
          intro="The principles behind how I approach engineering work — from the first architecture review to the release pipeline."
        />

        <ol className="mt-16 grid border-t border-line md:grid-cols-2 lg:mt-24">
          {principles.map((principle, i) => (
            <li
              key={principle.title}
              className="border-b border-line py-10 md:px-10 md:odd:border-r md:odd:pl-0 md:even:pr-0 lg:py-14"
            >
              <Reveal delay={(i % 2) * 0.08} className="grid gap-8 sm:grid-cols-[1fr_160px] sm:items-start">
                <div>
                  <span className="label-mono text-lime">P / 0{i + 1}</span>
                  <h3 className="mt-4 text-2xl font-medium tracking-[-0.025em] text-paper sm:text-[1.75rem]">
                    {principle.title}
                  </h3>
                  <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted">{principle.description}</p>
                </div>
                <div className="w-40 max-w-full rounded-[4px] border border-line bg-ink-950/70 p-3 sm:order-none">
                  <PrincipleGlyph glyph={principle.glyph} />
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
