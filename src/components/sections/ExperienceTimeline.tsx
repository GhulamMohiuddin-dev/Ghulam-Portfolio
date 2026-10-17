import { experience } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { TagList } from "@/components/ui/Tag";

export function ExperienceTimeline() {
  return (
    <ol className="relative">
      {experience.map((entry, i) => (
        <li key={`${entry.role}-${entry.period}`} className="relative grid gap-6 border-t border-line py-10 lg:grid-cols-12 lg:gap-10 lg:py-14">
          <Reveal delay={i * 0.05} className="lg:col-span-3">
            <p className="flex items-center gap-2.5 font-mono text-xs text-muted">
              <span
                aria-hidden
                className={entry.current ? "size-2 rounded-full bg-lime" : "size-2 rounded-full border border-line-strong"}
              />
              {entry.period}
            </p>
            {entry.current ? <p className="label-mono mt-2 pl-[18px] text-lime/80">Current role</p> : null}
          </Reveal>

          <Reveal delay={i * 0.05 + 0.05} className="lg:col-span-4">
            <h3 className="text-2xl font-medium tracking-[-0.025em] text-paper">
              {entry.role}
              {entry.altRole ? (
                <span className="block text-lg text-muted">
                  <span className="sr-only">also titled </span>
                  <span aria-hidden>/ </span>
                  {entry.altRole}
                </span>
              ) : null}
            </h3>
            {entry.company ? <p className="mt-3 text-sm text-subtle">{entry.company}</p> : null}
            {entry.altRole ? (
              <p className="mt-4 max-w-xs text-xs leading-relaxed text-subtle">
                One position — listed as {entry.altRole} on LinkedIn.
              </p>
            ) : null}
          </Reveal>

          <Reveal delay={i * 0.05 + 0.1} className="lg:col-span-5">
            <p className="text-pretty leading-relaxed text-paper/90">{entry.summary}</p>
            <ul className="mt-5 space-y-2.5">
              {entry.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span aria-hidden className="mt-[9px] h-px w-3 shrink-0 bg-lime/70" />
                  {item}
                </li>
              ))}
            </ul>
            <TagList items={entry.technologies} label={`${entry.role} technologies`} className="mt-6" />
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
