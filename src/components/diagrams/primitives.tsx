import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "default" | "accent" | "muted";

const tones: Record<Tone, string> = {
  default: "border-line-strong bg-ink-850",
  accent: "border-lime/45 bg-lime/[0.06]",
  muted: "border-dashed border-line-strong bg-transparent",
};

export function DiagramFrame({
  fig,
  title,
  caption,
  children,
  className,
}: {
  fig: string;
  title: string;
  caption: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure className={cn("relative overflow-hidden rounded-[6px] border border-line bg-ink-900", className)}>
      <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 sm:px-5">
        <span className="label-mono min-w-0 truncate">
          Fig. {fig} <span className="text-line-strong">/</span> {title}
        </span>
        <span className="label-mono shrink-0 rounded-[3px] border border-lime/30 px-1.5 py-0.5 text-[10px] text-lime/90">
          Illustrative
        </span>
      </div>
      <div className="bg-grid-fine relative p-4 sm:p-6">{children}</div>
      <figcaption className="border-t border-line px-4 py-3 text-xs leading-relaxed text-subtle sm:px-5">
        {caption}
      </figcaption>
    </figure>
  );
}

export function DNode({
  label,
  title,
  meta,
  tone = "default",
  className,
  children,
}: {
  label?: string;
  title: string;
  meta?: string;
  tone?: Tone;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("relative min-w-0 rounded-[4px] border px-2.5 py-2.5 sm:px-3", tones[tone], className)}>
      <Ticks />
      {label ? (
        <div
          className={cn(
            "truncate font-mono text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.14em]",
            tone === "accent" ? "text-lime/80" : "text-subtle",
          )}
        >
          {label}
        </div>
      ) : null}
      <div className="mt-0.5 text-[12.5px] font-medium leading-snug tracking-[-0.005em] text-paper sm:text-[13px]">{title}</div>
      {meta ? <div className="mt-0.5 font-mono text-[10.5px] leading-snug text-muted">{meta}</div> : null}
      {children}
    </div>
  );
}

function Ticks() {
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0">
      <span className="absolute -left-px -top-px size-1.5 border-l border-t border-paper/40" />
      <span className="absolute -bottom-px -right-px size-1.5 border-b border-r border-paper/40" />
    </span>
  );
}

export function Boundary({ label, children, className }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative rounded-[5px] border border-dashed border-line-strong p-2 pt-6", className)}>
      <span className="absolute left-2 top-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-subtle">
        {label}
      </span>
      {children}
    </div>
  );
}

/** Vertical connector with an optional travelling pulse. */
export function VLink({ className, delay = 0, pulse = true }: { className?: string; delay?: number; pulse?: boolean }) {
  return (
    <div aria-hidden className={cn("relative mx-auto h-5 w-px overflow-hidden bg-line-strong", className)}>
      {pulse ? (
        <span
          className="animate-flow absolute left-0 h-1/2 w-px bg-linear-to-b from-transparent via-lime to-transparent"
          style={{ animationDelay: `${delay}s` }}
        />
      ) : null}
    </div>
  );
}

/** Horizontal connector with an optional travelling pulse. */
export function HLink({ className, delay = 0, pulse = true }: { className?: string; delay?: number; pulse?: boolean }) {
  return (
    <div aria-hidden className={cn("relative my-auto h-px w-6 overflow-hidden bg-line-strong", className)}>
      {pulse ? (
        <span
          className="animate-flow-x absolute top-0 h-px w-1/2 bg-linear-to-r from-transparent via-lime to-transparent"
          style={{ animationDelay: `${delay}s` }}
        />
      ) : null}
    </div>
  );
}

/** Vertical on small screens, horizontal from `md` upwards. */
export function ResponsiveLink({ label, delay = 0 }: { label?: string; delay?: number }) {
  return (
    <div aria-hidden className="flex shrink-0 flex-col items-center justify-center gap-1 md:flex-row md:gap-0">
      <VLink delay={delay} className="h-6 md:hidden" />
      <HLink delay={delay} className="hidden w-10 md:block lg:w-12" />
      {label ? (
        <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-subtle md:hidden">{label}</span>
      ) : null}
    </div>
  );
}

/** Three drops joined by a horizontal bus — used between rows of three. */
export function Bus({ count = 3, position = "bottom", delay = 0 }: { count?: number; position?: "top" | "bottom"; delay?: number }) {
  return (
    <div aria-hidden className="relative">
      {position === "bottom" ? <Drops count={count} delay={delay} /> : null}
      <div className="mx-auto h-px bg-line-strong" style={{ width: `${100 - 100 / count}%` }} />
      {position === "top" ? <Drops count={count} delay={delay} /> : null}
    </div>
  );
}

function Drops({ count, delay }: { count: number; delay: number }) {
  return (
    <div className="grid" style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}>
      {Array.from({ length: count }, (_, i) => (
        <VLink key={i} delay={delay + i * 0.35} className="h-4" />
      ))}
    </div>
  );
}

export function PipelineStrip({
  stages,
  label = "ci / cd",
  className,
}: {
  stages: string[];
  label?: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-[4px] border border-line bg-ink-950/60 px-3 py-3", className)}>
      <div className="mb-2.5 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">{label}</span>
        <span className="font-mono text-[10px] text-subtle">azure devops · yaml</span>
      </div>
      <ol className="relative grid" style={{ gridTemplateColumns: `repeat(${stages.length}, minmax(0, 1fr))` }}>
        <span aria-hidden className="absolute left-[10%] right-[10%] top-[5px] h-px bg-line-strong" />
        {stages.map((stage, i) => (
          <li key={stage} className="relative flex flex-col items-center gap-2">
            <span
              aria-hidden
              className="animate-stage relative size-[11px] rounded-full border border-line-strong bg-ink-700"
              style={{ animationDelay: `${(i * 6) / stages.length / 1.6}s` }}
            />
            <span className="text-center font-mono text-[10px] leading-tight text-muted">{stage}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
