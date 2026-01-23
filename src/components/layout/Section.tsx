import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string;
}

export function Section({ className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <div className={cn("container max-w-screen-2xl px-4 md:px-8 mx-auto", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

