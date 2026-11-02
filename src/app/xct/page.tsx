import { Section } from "@/components/layout/Section";
import Link from "next/link";
import {
  Shield,
  Zap,
  Terminal,
  ArrowRight,
  Github,
  Code,
  AlertTriangle,
  FlaskConical,
  Minus,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XCT | Tech Tweakers",
  description:
    "XCT, Execution Control Transfer: the methodology Tech Tweakers uses to build systems around language models, and the xct-core engine that implements it.",
};

const principles = [
  {
    icon: Zap,
    title: "Who decides",
    text: "The model proposes. The engine owns the loop, the tools, the sessions and the context, and it decides what runs. Decision is cheap and execution is expensive, so we keep them in different hands.",
  },
  {
    icon: Terminal,
    title: "Rules live in code",
    text: "Anything that has to hold goes in code, not in the prompt. In our agent, a shell command runs without confirmation only if every segment of it is read-only. Unusual constructs, like command substitution, LD_PRELOAD tricks or escaped whitespace, fall back to asking. Network commands are off until someone turns them on. The server binds to loopback and checks Host and Origin. The Telegram front gets a different set of tools, not the same set with a fence around it.",
  },
  {
    icon: AlertTriangle,
    title: "Errors are data",
    text: "A failed tool returns the failure as a result, marked as an error, and the model reads it and corrects itself. When we swallowed the error instead, the turn recorded an empty result as if it had worked, and the model went on believing the tool had done its job.",
  },
  {
    icon: FlaskConical,
    title: "Count before you believe",
    text: "A bad answer looks like bad luck. Ten identical bad answers are a diagnosis, so we run the same thing ten times and count. Models get the same treatment: we run them through an audit of a real repository and read what they did.",
    link: { href: "/lab", label: "See the lab notes" },
  },
  {
    icon: Minus,
    title: "Subtract",
    text: "Every tool costs tokens on every turn. We dropped the docker, kubectl and lint tools because bash covers them, and brought the domain-specific parts back as skills that load on demand. We stopped maintaining our own inference engine when llama-server did the job better. Fewer parts, fewer ways to fail.",
  },
  {
    icon: Shield,
    title: "Small models can work",
    text: "Because the model never has to carry the whole task, small local models do useful work. It was the original reason for the protocol, and it still holds.",
  },
];

export default function XCTPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Shield className="mr-2 h-4 w-4" />
            Methodology
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            XCT — Execution Control Transfer
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            The way we build systems around language models. It started as a
            protocol, and it is now a set of habits that shape our agent engine,
            our serving layer and how we choose models. The philosophy stayed;
            the message format didn&apos;t need to.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row pt-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              <Terminal className="mr-2 h-4 w-4" />
              See xct-core
            </Link>
            <Link
              href="/lab"
              className="inline-flex items-center justify-center rounded-md border bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <FlaskConical className="mr-2 h-4 w-4" />
              Read the lab notes
            </Link>
          </div>
        </div>
      </Section>

      {/* Principles */}
      <Section className="bg-muted/30">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              What the Methodology Says
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Six principles. Each one comes from something that broke.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map(({ icon: Icon, title, text, link }) => (
              <div
                key={title}
                className="space-y-4 p-6 rounded-xl border bg-card/50 backdrop-blur-sm"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{text}</p>
                {link && (
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-primary font-medium hover:underline"
                  >
                    {link.label}{" "}
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* From protocol to engine */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              From Protocol to xct-core
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              XCT began with the model returning one proposed step as JSON, the
              system validating it and a tool executing it. Then models learned
              to call tools natively and the format stopped mattering. What we
              kept is the division of labor, and xct-core is where it runs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-card p-6 space-y-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Code className="h-5 w-5" />
              </div>
              <h3 className="font-bold">xct-core</h3>
              <p className="text-sm text-muted-foreground">
                One Go binary that owns the loop, the tools, the sessions and
                the context, and serves any front end over HTTP and SSE.
                Private.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center text-xs text-primary font-medium hover:underline"
              >
                More on projects
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
            <div className="rounded-xl border bg-card p-6 space-y-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Github className="h-5 w-5" />
              </div>
              <h3 className="font-bold">The original protocol</h3>
              <p className="text-sm text-muted-foreground">
                The spec and reference loop are still on GitHub. We don&apos;t
                maintain it as a standard. The small model we fine-tuned for it,
                XCT-Qwen3-4B, comes from that period.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/Tech-Tweakers/xct"
                  target="_blank"
                  className="inline-flex items-center text-xs text-primary font-medium hover:underline"
                >
                  Spec
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
                <Link
                  href="https://huggingface.co/tech-tweakers/XCT-Qwen3-4B"
                  target="_blank"
                  className="inline-flex items-center text-xs text-primary font-medium hover:underline"
                >
                  HuggingFace
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
