import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("w-full px-[clamp(1.25rem,4vw,6rem)]", className)}>{children}</div>;
}
