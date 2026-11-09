import { Section } from "@/components/layout/Section";
import { Github, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Tech Tweakers",
  description:
    "Get in touch about cloud infrastructure, private LLM serving and agents.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section className="bg-linear-to-br from-primary/5 via-background to-background py-20">
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Let&apos;s Build Together</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tell us about the project or the problem. A few lines is enough.
          </p>
        </div>
      </Section>

      <Section className="bg-linear-to-br from-primary/10 via-muted/40 to-muted/20 ">
        <div className="max-w-xl mx-auto rounded-xl border bg-card p-8 shadow-sm">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Mail className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Write to us</h2>
              <p className="text-sm text-muted-foreground">
                The fastest way to reach us is a short email.
              </p>
            </div>
            <a
              href="mailto:contact@techtweakers.org"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              contact@techtweakers.org
            </a>
          </div>

          <div className="mt-8 pt-8 border-t flex flex-col items-center gap-4 text-center">
            <div className="flex items-center text-muted-foreground">
              <Github className="mr-2 h-4 w-4" />
              <a href="https://github.com/Tech-Tweakers" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">github.com/Tech-Tweakers</a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
