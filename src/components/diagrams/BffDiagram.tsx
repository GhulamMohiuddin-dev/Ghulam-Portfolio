import { Boundary, DiagramFrame, DNode, ResponsiveLink } from "./primitives";

type DiagramProps = { fig: string; caption: string };

const responsibilities = ["aggregate", "shape responses", "normalize errors", "typed contracts"];

export function BffDiagram({ fig, caption }: DiagramProps) {
  return (
    <DiagramFrame fig={fig} title="Backend-for-Frontend" caption={caption}>
      <div
        role="img"
        aria-label="Diagram: a React application sends requests to a Backend-for-Frontend built with Node.js and Express. The BFF aggregates upstream calls, shapes responses for the interface, normalizes errors, and exposes typed contracts. It communicates with three upstream backend services."
        className="flex flex-col items-stretch md:flex-row md:items-center"
      >
        <Boundary label="client" className="md:w-[30%]">
          <DNode label="frontend" title="React application" meta="renders view models" />
        </Boundary>

        <ResponsiveLink label="rest" />

        <DNode tone="accent" label="bff" title="Node.js · Express" className="md:flex-1">
          <ul className="mt-3 space-y-1.5 border-t border-lime/20 pt-2.5">
            {responsibilities.map((item) => (
              <li key={item} className="flex items-center gap-2 font-mono text-[10.5px] text-muted">
                <span aria-hidden className="size-1 bg-lime/70" />
                {item}
              </li>
            ))}
          </ul>
        </DNode>

        <ResponsiveLink label="upstream" delay={0.8} />

        <Boundary label="backend services" className="md:w-[30%]">
          <div className="grid grid-cols-3 gap-2 md:grid-cols-1">
            {["A", "B", "C"].map((s) => (
              <DNode key={s} label="api" title={`Service ${s}`} />
            ))}
          </div>
        </Boundary>
      </div>
    </DiagramFrame>
  );
}
