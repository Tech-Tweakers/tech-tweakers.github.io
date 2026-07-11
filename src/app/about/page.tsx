import { Section } from "@/components/layout/Section";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Tech Tweakers",
  description: "A small team focused on cloud infrastructure, model training, and AI automation.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section className="bg-linear-to-br from-primary/5 via-background to-background py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tech Tweakers is a small engineering team that builds cloud
            infrastructure, trains models, and automates things with LLMs.
            We keep it lean on purpose.
          </p>
        </div>
      </Section>

      <Section className="bg-linear-to-br from-primary/10 via-muted/40 to-muted/20 ">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">What We Care About</h2>
            <p className="text-muted-foreground leading-7">
              We want to build software that works well and keeps working. No
              cutting corners to ship faster, no over-engineering to look smart.
              Just solid stuff that does what it&apos;s supposed to do.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">How We Work</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Keep it simple.</strong> The best solution is usually the one with fewer moving parts. We avoid complexity unless it earns its place.</span>
              </li>
              <li className="flex gap-3">
                <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Build for prod from day one.</strong> No &quot;we&apos;ll fix it later.&quot; If it&apos;s going to production, it should be ready for production.</span>
              </li>
              <li className="flex gap-3">
                <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Own the problem.</strong> We don&apos;t just write code and hand it off. We understand the context, make trade-offs explicitly, and stay accountable for what we deliver.</span>
              </li>
              <li className="flex gap-3">
                <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Be honest about limits.</strong> If something isn&apos;t a good fit for us, we say so. If a simpler approach works better than the fancy one, we go with simple.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-linear-to-br from-primary/5 via-background to-background">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-2xl font-bold">Who We Are</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Tech Tweakers didn&apos;t start as a company. It started as a place
              to learn — and to make room for people to build together. No
              pressure, no pitch. Just curious engineers figuring things out in the
              open, one problem at a time.
            </p>
            <p>
              Over the years, the systems kept proving themselves. The tools built
              to solve our own problems turned into things we trusted in production
              — and, along the way, into real results across the projects we
              worked on. At some point the evidence was hard to ignore: what we
              were doing worked, and it worked reliably.
            </p>
            <p>
              The corporate step came from there — not to change what this is, but
              to give it a foundation. The same hands-on engineering, now with the
              structure to bring more people in and build for the long run. Lean on
              purpose: every project gets direct attention from the people actually
              building it.
            </p>
          </div>

          <div className="rounded-xl border bg-linear-to-br from-card via-card to-muted/40 p-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <div className="font-semibold text-foreground">Andreh Torres</div>
                <div className="text-sm text-muted-foreground">
                  Principal Engineer / Founder · Tech Tweakers Brazil
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/andrehtorres/?locale=en-US"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/contact"
              className="group inline-flex items-center text-primary font-medium hover:underline"
            >
              Want to build with us?{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
