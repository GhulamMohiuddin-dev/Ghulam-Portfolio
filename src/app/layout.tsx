import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/ui/MotionProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.links.linkedin }],
  creator: site.name,
  keywords: [
    "Senior Software Engineer",
    "Frontend Architecture",
    "Micro Frontends",
    "React",
    "TypeScript",
    "Node.js",
    "Backend-for-Frontend",
    "Enterprise Web Applications",
    "AI-assisted development",
    "Generative AI",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body id="top" className="min-h-dvh">
        <a
          href="#main"
          className="sr-only z-[60] rounded-[4px] bg-lime px-4 py-2 text-sm font-medium text-ink-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Header name={site.name} linkedin={site.links.linkedin} availability={site.availability} />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
