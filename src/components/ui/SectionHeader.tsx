import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  className?: string;
};

export function SectionHeader({ index, label, title, intro, id, className }: SectionHeaderProps) {
  return (
    <Reveal className={cn("grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10", className)}>
      <p className="label-mono flex items-center gap-3 self-start lg:col-span-3 lg:pt-4">
        <span className="text-lime">§ {index}</span>
        <span aria-hidden className="h-px w-8 bg-line-strong" />
        <span>{label}</span>
      </p>
      <div className="lg:col-span-9">
        <h2
          id={id}
          className="max-w-[28ch] text-balance text-[2.1rem] font-medium leading-[1.04] tracking-[-0.03em] text-paper sm:text-5xl lg:text-[clamp(3.25rem,3.9vw,6rem)]"
        >
          {title}
        </h2>
        {intro ? <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">{intro}</p> : null}
      </div>
    </Reveal>
  );
}
