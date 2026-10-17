"use client";

import { useSyncExternalStore, type ReactNode } from "react";

const noopSubscribe = () => () => {};

/** Decodes the address only in the browser, so it never appears in server-rendered HTML. */
function useEmail(encoded: string) {
  const isClient = useSyncExternalStore(noopSubscribe, () => true, () => false);
  return isClient ? atob(encoded) : null;
}

type EmailLinkProps = {
  encoded: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
};

export function EmailLink({ encoded, className, ariaLabel, children }: EmailLinkProps) {
  const email = useEmail(encoded);
  return (
    <a href={email ? `mailto:${email}` : "#contact"} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

export function EmailAddress({ encoded, fallback }: { encoded: string; fallback: string }) {
  return <>{useEmail(encoded) ?? fallback}</>;
}
