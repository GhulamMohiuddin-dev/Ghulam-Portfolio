import { Check } from "lucide-react";
import { Bus, DiagramFrame, DNode, VLink } from "./primitives";

type DiagramProps = { fig: string; caption: string };

const gates = [
  { name: "lint", tool: "ESLint" },
  { name: "test", tool: "Vitest · RTL" },
  { name: "analyze", tool: "SonarQube" },
  { name: "publish", tool: "Artifacts" },
];

export function PackageEcosystemDiagram({ fig, caption }: DiagramProps) {
  return (
    <DiagramFrame fig={fig} title="Package ecosystem" caption={caption}>
      <div
        role="img"
        aria-label="Diagram: UI, authentication, and utility packages pass through quality gates — ESLint, Vitest with React Testing Library, and SonarQube — before being published as versioned releases to an Azure Artifacts feed. Three independent applications consume those versions."
      >
        <div className="grid grid-cols-3 gap-2">
          <DNode label="package" title="UI" meta="components" />
          <DNode label="package" title="Auth" meta="session" />
          <DNode label="package" title="Utilities" meta="helpers" />
        </div>
        <Bus position="bottom" />
        <VLink className="h-3" />

        <div className="rounded-[4px] border border-line bg-ink-950/60 p-3">
          <div className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">quality gates · azure devops</div>
          <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {gates.map((gate, i) => (
              <li key={gate.name} className="flex items-center gap-2 rounded-[3px] border border-line px-2 py-1.5">
                <span
                  aria-hidden
                  className="animate-stage inline-flex size-4 shrink-0 items-center justify-center rounded-full border border-line-strong"
                  style={{ animationDelay: `${i * 0.9}s` }}
                >
                  <Check className="size-2.5 text-ink-950" strokeWidth={3} />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-paper">{gate.name}</span>
                  <span className="block truncate font-mono text-[10px] text-muted">{gate.tool}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <VLink className="h-5" delay={0.6} />
        <DNode tone="accent" label="registry" title="Azure Artifacts feed" meta="versioned releases" />
        <Bus position="top" delay={1.2} />
        <div className="grid grid-cols-3 gap-2">
          {["A", "B", "C"].map((a) => (
            <DNode key={a} label="consumer" title={`App ${a}`} meta="pins version" />
          ))}
        </div>
      </div>
    </DiagramFrame>
  );
}
