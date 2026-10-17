import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { hero } from "@/data/profile";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { LinkedInIcon } from "@/components/ui/icons";
import { ArchitectureDiagram } from "@/components/diagrams/ArchitectureDiagram";

const rise = "animate-rise";

const facts = [
  { term: "Experience", detail: "4 years, professional" },
  { term: "Focus", detail: "Enterprise frontend architecture" },
  { term: "Practice", detail: "Platforms · BFF · CI/CD" },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div aria-hidden className="bg-grid mask-radial pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[640px] bg-[radial-gradient(closest-side,rgb(205_242_110/0.07),transparent)]"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className={`label-mono flex items-center gap-3 ${rise}`}>
              <span aria-hidden className="h-px w-8 bg-lime" />
              {hero.eyebrow}
            </p>

            <h1
              id="hero-title"
              className="mt-7 text-balance text-[2.6rem] font-medium leading-[0.98] tracking-[-0.04em] text-paper sm:text-6xl lg:text-[clamp(4.25rem,5.4vw,8.5rem)]"
            >
              <span className={`block ${rise}`} style={{ animationDelay: "80ms" }}>
                {hero.headline[0]}
              </span>
              <span className={`block text-muted ${rise}`} style={{ animationDelay: "180ms" }}>
                {hero.headline[1]}
              </span>
            </h1>

            <p
              className={`mt-8 max-w-[38rem] text-pretty text-base leading-relaxed text-muted sm:text-lg ${rise}`}
              style={{ animationDelay: "280ms" }}
            >
              {hero.intro}
            </p>

            <div className={`mt-10 flex flex-wrap items-center gap-3 ${rise}`} style={{ animationDelay: "380ms" }}>
              <ButtonLink href="#work">
                Explore My Work
                <ArrowDownRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Let&apos;s Connect
              </ButtonLink>
              <ButtonLink href={site.links.linkedin} variant="ghost" className="px-3" ariaLabel="LinkedIn profile (opens in a new tab)">
                <LinkedInIcon size={15} />
                LinkedIn
                <ArrowUpRight aria-hidden className="size-3.5" />
              </ButtonLink>
            </div>

            <dl
              className={`mt-14 grid max-w-2xl grid-cols-1 border-t border-line sm:grid-cols-3 ${rise}`}
              style={{ animationDelay: "480ms" }}
            >
              {facts.map((fact, i) => (
                <div
                  key={fact.term}
                  className={`flex items-baseline justify-between gap-4 border-b border-line py-4 sm:block sm:border-b-0 sm:pr-6 ${i > 0 ? "sm:border-l sm:pl-6" : ""}`}
                >
                  <dt className="label-mono">{fact.term}</dt>
                  <dd className="text-sm text-paper sm:mt-2">{fact.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={`lg:col-span-5 lg:pt-4 ${rise}`} style={{ animationDelay: "320ms" }}>
            <ArchitectureDiagram />
          </div>
        </div>

        <div className="mt-20 border-y border-line py-5 lg:mt-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <p className="label-mono shrink-0">Core stack</p>
            <ul aria-label="Core technologies" className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {hero.coreTechnologies.map((tech, i) => (
                <li key={tech} className="flex items-center gap-6 text-sm text-paper/85">
                  {i > 0 ? <span aria-hidden className="hidden size-1 rotate-45 bg-line-strong sm:block" /> : null}
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
