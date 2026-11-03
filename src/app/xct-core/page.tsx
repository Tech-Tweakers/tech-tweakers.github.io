import { Section } from "@/components/layout/Section";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  Cloud,
  Cpu,
  Layers,
  Plug,
  ShieldCheck,
  Split,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XCT-Core | Tech Tweakers",
  description:
    "XCT-Core is the engine behind our agents: it runs the loop, the tools and the sessions, and the model only proposes the next step. Local first, cloud when you need it.",
};

const pillars = [
  {
    icon: Split,
    title: "The model proposes. The engine decides.",
    text: "The model only suggests the next step. XCT-Core owns the loop, the tools, the sessions and the context. That is why a small local model can do real work: it never has to carry the whole task.",
  },
  {
    icon: Cpu,
    title: "Local first, cloud when you need it",
    text: "By default it talks to Polaris, which runs the model on your own hardware, so your data never leaves. When a job needs more muscle, it can go straight to a cloud provider, and every token is counted so you always see what a run costs.",
  },
  {
    icon: ShieldCheck,
    title: "Careful by default",
    text: "A shell command runs without asking only if every part of it is read-only. Anything unusual, like hidden commands inside commands, always asks first. The model can’t talk its way past that, because the rule is in code and not in the prompt.",
  },
  {
    icon: Layers,
    title: "Many conversations, no mixing",
    text: "Every session is isolated, with its own history, its own context and its own model. One engine serves many sessions at once: a browser tab, a one-off command, a bot. None of them bleed into each other.",
  },
  {
    icon: Plug,
    title: "One engine, many front ends",
    text: "The engine has no screen of its own. Chat, IDE and bot front ends are thin clients that plug into it, and what each deployment adds on top, like its own rules and connectors, stays with that deployment and never touches the core.",
  },
];

const providers = ["Polaris (your hardware)", "Groq", "Gemini", "OpenRouter", "Mistral", "NVIDIA", "Z.ai"];

export default function XCTCorePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <Section className="bg-linear-to-br from-primary/5 via-background to-background py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Bot className="mr-2 h-4 w-4" />
            Modular agent engine
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            XCT-Core
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            The engine behind our agents. A small, self-contained program that
            runs the work, keeps the sessions and enforces the rules, while the
            model only proposes the next step. It is where the{" "}
            <Link href="/xct" className="text-primary hover:underline">
              XCT methodology
            </Link>{" "}
            runs in code.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row pt-4">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Talk to Us
            </Link>
            <Link
              href="/xct"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              What XCT is
            </Link>
          </div>
        </div>
      </Section>

      {/* Pillars */}
      <Section className="bg-linear-to-br from-primary/10 via-muted/40 to-muted/20">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Five ideas, each one from something that went wrong before.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="space-y-4 p-6 rounded-xl border bg-card/50 backdrop-blur-sm"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Providers */}
      <Section className="bg-linear-to-br from-primary/5 via-background to-background">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <Cloud className="mr-2 h-4 w-4" />
              Your choice of model
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Switch on the fly
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each session can use a different provider, and you can change it
              in the middle of the work. XCT-Core speaks the OpenAI-compatible
              API, so any provider that does the same can plug in.
            </p>
          </div>
          <p className="text-center font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Tested so far
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {providers.map((p) => (
              <span
                key={p}
                className="rounded-full border bg-card px-4 py-2 text-sm font-medium"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Good to know */}
      <Section className="bg-linear-to-br from-primary/10 via-muted/40 to-muted/20">
        <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Good to Know</h2>
            <ul className="space-y-3">
              {[
                "It is private software. It is not open source, and we run it ourselves and for our clients.",
                "It is one program with no dependencies to install, and it runs on Linux, macOS and Windows.",
                "It has no screen of its own, by design. Whatever talks to a person is a separate client.",
                "A long-running background service version is planned, not available yet.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Where It Came From</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              XCT-Core started from the archived Go version of opencode, by
              Kujtim Hoxha (MIT license). We took a copy and work on it
              internally, and the agent architecture, the prompts and the rules
              are rewritten for XCT-Core.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center text-sm text-primary font-medium hover:underline"
            >
              More on what we build on{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="border-t bg-linear-to-br from-primary/5 via-background to-background">
        <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Want an agent you can trust with real work?
          </h2>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Get in Touch
          </Link>
        </div>
      </Section>
    </div>
  );
}
