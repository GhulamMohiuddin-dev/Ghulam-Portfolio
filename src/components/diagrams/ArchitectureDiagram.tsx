import { Bus, DiagramFrame, DNode, PipelineStrip, VLink } from "./primitives";

const apps = ["App A", "App B", "App C"];

/** Hero visual: an abstract platform concept — shell, micro frontends, shared packages, BFF, and CI/CD. */
export function ArchitectureDiagram() {
  return (
    <DiagramFrame
      fig="00"
      title="Platform concept"
      caption="Illustrative architecture concept — not a depiction of confidential production infrastructure."
    >
      <div role="img" aria-label="Diagram: an application shell composes three independently deployable micro frontends. They consume shared UI, authentication, and utility packages and call a Backend-for-Frontend service. A CI/CD pipeline builds, tests, checks quality, publishes, and deploys each part.">
        <DNode tone="accent" label="shell" title="Application Shell" meta="routing · session · layout" />
        <Bus position="top" delay={0.2} />
        <div className="grid grid-cols-3 gap-2">
          {apps.map((app, i) => (
            <DNode key={app} label={`mfe 0${i + 1}`} title={app} meta="own release" />
          ))}
        </div>
        <Bus position="bottom" delay={1.1} />
        <VLink className="h-3" pulse={false} />
        <Bus count={2} position="top" delay={1.8} />
        <div className="grid grid-cols-2 gap-2">
          <DNode label="packages" title="Shared libraries" meta="ui · auth · utils" />
          <DNode label="bff" title="BFF service" meta="node · express" />
        </div>
        <div className="mt-4">
          <PipelineStrip stages={["build", "test", "quality", "publish", "deploy"]} />
        </div>
      </div>
    </DiagramFrame>
  );
}
