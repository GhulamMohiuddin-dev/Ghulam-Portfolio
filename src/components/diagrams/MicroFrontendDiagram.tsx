import { Boundary, Bus, DiagramFrame, DNode, VLink } from "./primitives";

type DiagramProps = { fig: string; caption: string };

export function MicroFrontendDiagram({ fig, caption }: DiagramProps) {
  return (
    <DiagramFrame fig={fig} title="Micro frontend platform" caption={caption}>
      <div
        role="img"
        aria-label="Diagram: a shared application shell handles layout, navigation, session, access control, and internationalization. Three feature applications sit inside separate deployment boundaries, each with its own pipeline. All three consume versioned UI, authentication, and utility packages from Azure Artifacts."
      >
        <DNode
          tone="accent"
          label="shell"
          title="Application Shell"
          meta="layout · navigation · session · rbac · i18n"
        />
        <div className="hidden sm:block">
          <Bus position="top" />
        </div>
        <VLink className="sm:hidden" />
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {["01", "02", "03"].map((n) => (
            <Boundary key={n} label={`deploy ${n}`} className="flex items-center gap-3 sm:block">
              <DNode label={`mfe ${n}`} title="Feature app" meta="react · rtk query" className="flex-1" />
              <div className="flex items-center gap-1.5 px-1 sm:mt-2">
                <span aria-hidden className="animate-blink size-1.5 rounded-full bg-mint" style={{ animationDelay: `${Number(n) * 0.5}s` }} />
                <span className="font-mono text-[10px] text-muted">own pipeline</span>
              </div>
            </Boundary>
          ))}
        </div>
        <div className="hidden sm:block">
          <Bus position="bottom" delay={1} />
        </div>
        <VLink className="h-3" pulse={false} />
        <Boundary label="azure artifacts · versioned">
          <div className="grid grid-cols-3 gap-2">
            <DNode label="package" title="UI" />
            <DNode label="package" title="Auth" />
            <DNode label="package" title="Utilities" />
          </div>
        </Boundary>
      </div>
    </DiagramFrame>
  );
}
