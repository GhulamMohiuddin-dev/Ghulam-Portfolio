import { education } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <div className="grid gap-6 border-t border-line pt-10 lg:grid-cols-12 lg:gap-10">
      <h3 className="label-mono lg:col-span-3">Education</h3>
      <ul className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:col-span-9">
        {education.map((item) => (
          <li key={item.institution} className="bg-ink-950 p-6">
            <Reveal>
              <p className="font-mono text-xs text-subtle">{item.period}</p>
              <p className={item.primary ? "mt-3 text-lg font-medium tracking-[-0.015em] text-paper" : "mt-3 text-base text-paper/85"}>
                {item.credential}
              </p>
              <p className="mt-1 text-sm text-muted">{item.institution}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
