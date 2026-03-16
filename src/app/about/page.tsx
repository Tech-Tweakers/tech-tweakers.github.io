import { Section } from "@/components/layout/Section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Tech Tweakers",
  description: "A small team focused on cloud infrastructure, model training, and AI automation.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section className="py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tech Tweakers is a small engineering team that builds cloud
            infrastructure, trains models, and automates things with LLMs.
            We keep it lean on purpose.
          </p>
        </div>
      </Section>

      <Section className="bg-muted/30">
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

      <Section>
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-2xl font-bold">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed">
            A small team with experience in backend systems, cloud
            infrastructure, and applied AI. We stay lean because it lets us
            focus on the work instead of managing overhead. Every project gets
            direct attention from the people actually building it.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="group inline-flex items-center text-primary font-medium hover:underline"
            >
              Want to work with us?{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
