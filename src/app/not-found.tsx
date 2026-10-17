import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-24">
      <div aria-hidden className="bg-grid mask-radial pointer-events-none absolute inset-0" />
      <Container className="relative">
        <p className="label-mono text-lime">Error 404 · Route not found</p>
        <h1 className="mt-6 max-w-3xl text-balance text-5xl font-medium leading-[1] tracking-[-0.04em] text-paper sm:text-7xl">
          This path isn&apos;t part of the system.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Head back to the portfolio to continue.
        </p>
        <div className="mt-10">
          <ButtonLink href="/">
            <ArrowLeft aria-hidden className="size-4" />
            Back to portfolio
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
