import type { Project } from "@/data/projects";
import { BffDiagram } from "./BffDiagram";
import { InterfacePreview } from "./InterfacePreview";
import { MicroFrontendDiagram } from "./MicroFrontendDiagram";
import { PackageEcosystemDiagram } from "./PackageEcosystemDiagram";

const visuals = {
  "micro-frontend": MicroFrontendDiagram,
  bff: BffDiagram,
  packages: PackageEcosystemDiagram,
  interface: InterfacePreview,
} satisfies Record<Project["visual"], unknown>;

export function ProjectVisual({ project, fig }: { project: Project; fig: string }) {
  const Visual = visuals[project.visual];
  return <Visual fig={fig} caption={project.visualCaption} />;
}
