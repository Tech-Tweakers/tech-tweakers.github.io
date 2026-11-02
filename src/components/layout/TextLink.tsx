import Link from "next/link";
import React from "react";

const style =
  "underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground";

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  if (/^https?:/.test(href)) {
    return (
      <a href={href} className={style} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={style}>
      {children}
    </Link>
  );
}
