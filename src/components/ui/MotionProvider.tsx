"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Respects the user's reduced-motion preference for every Motion component. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
