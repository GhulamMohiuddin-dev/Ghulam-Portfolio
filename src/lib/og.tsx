import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

type OgImageOptions = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  footerLeft: string;
  footerRight: string;
};

/** Shared branded layout for generated Open Graph images. */
export function renderOgImage({ eyebrow, title, subtitle, footerLeft, footerRight }: OgImageOptions) {
  const headline = { display: "flex", fontSize: 76, fontWeight: 600, letterSpacing: -3, lineHeight: 1.04 } as const;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0a0b0a",
          backgroundImage:
            "linear-gradient(to right, rgba(236,235,228,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(236,235,228,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          color: "#ecebe4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              border: "1px solid rgba(236,235,228,0.25)",
              borderRadius: 6,
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            GM
          </div>
          <div style={{ display: "flex", fontSize: 18, letterSpacing: 3, color: "#a3a59b", textTransform: "uppercase" }}>
            {eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
          <div style={headline}>{title}</div>
          {subtitle ? <div style={{ ...headline, color: "#a3a59b" }}>{subtitle}</div> : null}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24 }}>
          <div style={{ display: "flex" }}>{footerLeft}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#cdf26e" }}>
            <div style={{ display: "flex", width: 10, height: 10, backgroundColor: "#cdf26e" }} />
            {footerRight}
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
