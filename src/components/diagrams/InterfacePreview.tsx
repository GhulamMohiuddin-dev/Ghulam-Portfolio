import { DiagramFrame } from "./primitives";

type DiagramProps = { fig: string; caption: string };

const annotations = [
  { n: "1", text: "AEM-authored content regions" },
  { n: "2", text: "Chakra UI components from Figma" },
  { n: "3", text: "GraphQL-backed feature data" },
  { n: "4", text: "Redux-managed UI state" },
];

function Marker({ n, className }: { n: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute z-10 inline-flex size-5 items-center justify-center rounded-full bg-lime font-mono text-[10px] font-semibold text-ink-950 ring-4 ring-ink-900 ${className ?? ""}`}
    >
      {n}
    </span>
  );
}

function Bar({ w, className }: { w: string; className?: string }) {
  return <span aria-hidden className={`block h-1.5 rounded-full bg-paper/15 ${className ?? ""}`} style={{ width: w }} />;
}

export function InterfacePreview({ fig, caption }: DiagramProps) {
  return (
    <DiagramFrame fig={fig} title="Interface anatomy" caption={caption}>
      <div
        role="img"
        aria-label="Illustrative interface with placeholder content. Annotations mark content regions authored in Adobe Experience Manager, Chakra UI components implemented from Figma, feature data loaded through GraphQL, and UI state managed with Redux."
      >
        <div className="overflow-hidden rounded-[5px] border border-line-strong bg-ink-950">
          <div className="flex items-center gap-2 border-b border-line px-3 py-2">
            <span className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <span key={i} className="size-2 rounded-full bg-paper/15" />
              ))}
            </span>
            <span className="ml-2 h-4 flex-1 rounded-[3px] bg-paper/[0.05]" />
          </div>

          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <span className="h-3 w-14 rounded-[2px] bg-paper/30" />
            <span className="hidden gap-3 sm:flex">
              <Bar w="2.5rem" />
              <Bar w="2.5rem" />
              <Bar w="2.5rem" />
            </span>
            <span className="h-5 w-12 rounded-[3px] border border-paper/20" />
          </div>

          <div className="relative grid gap-4 px-4 py-6 sm:grid-cols-5 sm:py-8">
            <Marker n="1" className="left-2 top-2" />
            <div className="space-y-2.5 sm:col-span-3">
              <span className="block h-3.5 w-4/5 rounded-[2px] bg-paper/45" />
              <span className="block h-3.5 w-3/5 rounded-[2px] bg-paper/45" />
              <div className="space-y-1.5 pt-2">
                <Bar w="90%" />
                <Bar w="70%" />
              </div>
              <div className="flex gap-2 pt-3">
                <span className="h-6 w-20 rounded-[3px] bg-lime/80" />
                <span className="h-6 w-16 rounded-[3px] border border-paper/20" />
              </div>
            </div>
            <div className="bg-grid-fine relative hidden h-full min-h-24 rounded-[4px] border border-line bg-mint/[0.06] sm:col-span-2 sm:block" />
          </div>

          <div className="relative grid grid-cols-3 gap-2 border-t border-line p-4">
            <Marker n="2" className="-top-2.5 left-4" />
            <Marker n="3" className="-top-2.5 right-4" />
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-[4px] border border-line bg-ink-850 p-2.5">
                <span className="mb-2.5 block h-10 rounded-[3px] bg-paper/[0.06]" />
                <Bar w="80%" />
                <Bar w="55%" className="mt-1.5" />
                <div className="mt-3 flex items-center justify-between">
                  <span className="h-2 w-8 rounded-full bg-sand/40" />
                  <span className="size-3 rounded-[2px] border border-paper/25" />
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex items-center gap-2 border-t border-line px-4 py-3">
            <Marker n="4" className="-top-2.5 left-1/2 -translate-x-1/2" />
            <span className="h-4 w-16 rounded-full border border-lime/40 bg-lime/10" />
            <span className="h-4 w-12 rounded-full border border-line-strong" />
            <span className="h-4 w-14 rounded-full border border-line-strong" />
          </div>
        </div>

        <ol className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {annotations.map((a) => (
            <li key={a.n} className="flex items-center gap-2.5 text-xs text-muted">
              <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-full border border-lime/50 font-mono text-[9.5px] text-lime">
                {a.n}
              </span>
              {a.text}
            </li>
          ))}
        </ol>
      </div>
    </DiagramFrame>
  );
}
