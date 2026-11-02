import { cn } from "@/lib/utils";
import React from "react";

interface RowProps {
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

// Label on the left, text on the right, a thin rule above. The page reads like
// a document, not a grid of cards.
export function Row({ label, children, className }: RowProps) {
  return (
    <div
      className={cn(
        "grid gap-3 border-t border-border py-8 md:grid-cols-[11rem_1fr] md:gap-10",
        className,
      )}
    >
      <div className="text-sm text-muted-foreground md:pt-0.5">{label}</div>
      <div className="max-w-2xl space-y-4 leading-7 text-foreground/90">
        {children}
      </div>
    </div>
  );
}
