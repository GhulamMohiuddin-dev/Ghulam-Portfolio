import { highlights } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function EngineeringHighlights() {
  return (
    <section aria-labelledby="highlights-title" className="py-20 sm:py-24">
      <Container>
        <h2 id="highlights-title" className="sr-only">
          Engineering highlights
        </h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <li
              key={item.title}
              className="border-t border-line py-8 sm:pr-8 lg:border-t-0 lg:border-l lg:px-8 lg:py-2 lg:first:border-l-0 lg:first:pl-0"
            >
              <Reveal delay={i * 0.08}>
                <span className="label-mono">0{i + 1}</span>
                <p className="mt-5 text-[1.75rem] font-medium leading-none tracking-[-0.03em] text-paper sm:text-[2rem]">
                  {item.title}
                </p>
                <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-muted">{item.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
