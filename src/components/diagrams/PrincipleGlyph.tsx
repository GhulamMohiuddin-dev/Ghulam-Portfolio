import type { PrincipleGlyph as Glyph } from "@/data/profile";

const stroke = "rgb(236 235 228 / 0.28)";
const accent = "var(--color-lime)";

/** Small decorative diagrams that accompany each engineering principle. */
export function PrincipleGlyph({ glyph }: { glyph: Glyph }) {
  return (
    <svg viewBox="0 0 160 96" className="h-auto w-full" fill="none" aria-hidden>
      {glyph === "intent" ? <Intent /> : null}
      {glyph === "decoupled" ? <Decoupled /> : null}
      {glyph === "quality" ? <Quality /> : null}
      {glyph === "performance" ? <Performance /> : null}
    </svg>
  );
}

/** Several options, one deliberate path. */
function Intent() {
  return (
    <g strokeWidth="1">
      <rect x="10" y="40" width="22" height="16" rx="2" stroke={stroke} />
      {[14, 40, 66].map((y) => (
        <path key={y} d={`M32 48 C 50 48, 50 ${y + 8}, 68 ${y + 8}`} stroke={y === 40 ? accent : stroke} strokeDasharray={y === 40 ? undefined : "2 3"} />
      ))}
      {[14, 40, 66].map((y) => (
        <rect key={y} x="68" y={y} width="22" height="16" rx="2" stroke={y === 40 ? accent : stroke} />
      ))}
      <path d="M90 48 H 122" stroke={accent} />
      <rect x="122" y="36" width="28" height="24" rx="2" stroke={accent} fill="rgb(205 242 110 / 0.08)" />
    </g>
  );
}

/** A shared core with loose, versioned connections. */
function Decoupled() {
  return (
    <g strokeWidth="1">
      <rect x="62" y="34" width="36" height="28" rx="2" stroke={accent} fill="rgb(205 242 110 / 0.08)" />
      {[
        [14, 10],
        [14, 62],
        [124, 10],
        [124, 62],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width="22" height="22" rx="2" stroke={stroke} />
          <path
            d={x < 80 ? `M${x + 22} ${y + 11} H 50 L 62 48` : `M${x} ${y + 11} H 110 L 98 48`}
            stroke={stroke}
            strokeDasharray="2 3"
          />
        </g>
      ))}
    </g>
  );
}

/** A pipeline with gates that must pass before release. */
function Quality() {
  const xs = [14, 50, 86, 122];
  return (
    <g strokeWidth="1">
      <path d="M8 48 H 152" stroke={stroke} />
      {xs.map((x, i) => (
        <g key={x}>
          <rect x={x} y="36" width="24" height="24" rx="2" stroke={i === xs.length - 1 ? accent : stroke} fill="rgb(10 11 10)" />
          <path d={`M${x + 7} 48 l4 4 l7 -8`} stroke={accent} strokeWidth="1.25" />
        </g>
      ))}
    </g>
  );
}

/** Measured, incremental improvement over time. */
function Performance() {
  const bars = [62, 54, 50, 40, 34, 26];
  return (
    <g strokeWidth="1">
      <path d="M10 84 H 150" stroke={stroke} />
      {bars.map((h, i) => (
        <rect key={i} x={16 + i * 22} y={84 - h} width="12" height={h} rx="1" stroke={stroke} fill={i === bars.length - 1 ? "rgb(205 242 110 / 0.18)" : "transparent"} />
      ))}
      <path d="M22 18 C 60 22, 90 40, 144 52" stroke={accent} strokeDasharray="3 3" />
    </g>
  );
}
