import { Section } from "@/components/layout/Section";
import Link from "next/link";
import {
  Check,
  Coins,
  Cpu,
  Bot,
  ExternalLink,
  Github,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Tech Tweakers",
  description:
    "What Tech Tweakers builds and runs: Polaris, XCT-Core, Golden Hen, and earlier work.",
};

const earlier = [
  {
    name: "Polaris v2",
    text: "An institutional chatbot with retrieval and voice. The demo is still up.",
    href: "https://techtweakers.org/polaris-v2-web/#/",
    label: "Live Demo",
  },
  {
    name: "polaris-core",
    text: "A C++ binding for llama.cpp, from before we adopted llama-server.",
    href: "https://github.com/Tech-Tweakers/polaris-core",
    label: "GitHub",
  },
  {
    name: "XCT",
    text: "The original protocol. Today XCT is a methodology, and XCT-Core is where it runs.",
    href: "https://github.com/Tech-Tweakers/xct",
    label: "GitHub",
  },
  {
    name: "XCT-Qwen3-4B",
    text: "An early fine-tune from the protocol period.",
    href: "https://huggingface.co/tech-tweakers/XCT-Qwen3-4B",
    label: "HuggingFace",
  },
  {
    name: "nebula-monitor",
    text: "An ESP32 monitor for IT resources, online or local.",
    href: "https://github.com/Tech-Tweakers/nebula-monitor",
    label: "GitHub",
  },
];

function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
          {t}
        </span>
      ))}
    </div>
  );
}

function Points({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section className="bg-linear-to-br from-primary/5 via-background to-background py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our Active Projects
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            What we build and what we run in production. Most of it is not open
            source.
          </p>
        </div>
      </Section>

      {/* Polaris */}
      <Section className="bg-linear-to-br from-primary/10 via-muted/40 to-muted/20 py-20">
        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
          <div className="p-8 md:p-10 border-b bg-muted/20 space-y-4">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <Cpu className="mr-2 h-4 w-4" />
              Inference · Private
            </div>
            <h2 className="text-3xl font-bold">Polaris v4</h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              The fourth generation of our inference line. Today it is an
              orchestrator in Go on top of llama-server: it exposes an
              OpenAI-compatible API, swaps models in place with a rollback, and
              runs on Kubernetes, with pods that use the GPU. It is what sits
              under our agents and our client deployments.
            </p>
          </div>
          <div className="p-8 md:p-10 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">What It Does</h3>
              <Points
                items={[
                  "OpenAI-compatible API in front of llama-server",
                  "Hot model swap, with rollback if the new model doesn't come up",
                  "Routing and sessions",
                  "Your prompts and data stay on your hardware",
                ]}
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Built With</h3>
              <Tags items={["Go", "llama.cpp", "Kubernetes", "GPU"]} />
            </div>
          </div>
          <div className="p-8 md:p-10 border-t space-y-6">
            <h3 className="font-semibold text-lg">How Polaris Got Here</h3>
            <ol className="grid gap-4 md:grid-cols-4">
              {[
                {
                  v: "polaris-core",
                  t: "A C++ binding for llama.cpp with Python integration. Our first inference layer.",
                },
                {
                  v: "Polaris v2",
                  t: "An institutional chatbot with RAG, voice and multi-platform support, with guardrails.",
                },
                {
                  v: "Polaris v3",
                  t: "A deterministic agent built on XCT, for critical automation where the model proposes and the system decides.",
                },
                {
                  v: "Polaris v4",
                  t: "Today: an orchestrator in Go on top of llama-server, under our agents and client deployments.",
                },
              ].map((step, i) => (
                <li key={step.v} className="rounded-lg border bg-background p-4 space-y-2">
                  <div className="text-xs font-mono text-primary">0{i + 1}</div>
                  <div className="font-semibold">{step.v}</div>
                  <p className="text-sm text-muted-foreground">{step.t}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* XCT-Core */}
      <Section className="bg-linear-to-br from-primary/5 via-background to-background py-20">
        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
          <div className="p-8 md:p-10 border-b bg-muted/20 flex flex-col md:flex-row justify-between md:items-start gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                <Bot className="mr-2 h-4 w-4" />
                XCT Applied · Agent Engine · Private
              </div>
              <h2 className="text-3xl font-bold">XCT-Core</h2>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                The agent engine: one Go binary that owns the loop, the tools,
                the sessions and the context, and serves any front end over
                HTTP and SSE. Chat and IDE front ends are clients of it. It
                started from the archived Go version of opencode (MIT) and has
                been heavily rewritten. It is where the XCT methodology runs in
                code.
              </p>
            </div>
            <Link
              href="/xct"
              className="inline-flex shrink-0 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              About XCT
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="p-8 md:p-10 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Why It Matters</h3>
              <Points
                items={[
                  "The model proposes; the engine decides what runs",
                  "A shell command runs unasked only if every part of it is read-only",
                  "Network commands are off until someone turns them on",
                  "Failed tools return errors as data, so the model can correct itself",
                ]}
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Built With</h3>
              <Tags items={["Go", "XCT", "HTTP + SSE", "Skills"]} />
            </div>
          </div>
        </div>
      </Section>

      {/* Golden Hen */}
      <Section className="bg-linear-to-br from-primary/10 via-muted/40 to-muted/20 py-20">
        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
          <div className="p-8 md:p-10 border-b bg-muted/20 flex flex-col md:flex-row justify-between md:items-start gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                <Coins className="mr-2 h-4 w-4" />
                XCT Applied · On-Chain
              </div>
              <h2 className="text-3xl font-bold">Golden Hen Suite</h2>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                XCT taken to its extreme — three self-custody engines for
                managing wealth on-chain, where the model steps out of the hot
                path entirely. <strong>Miner</strong> mines SOL from volatility
                and knows when to stop; <strong>Treasury</strong> preserves it;{" "}
                <strong>Pirate</strong> hunts asymmetric bets. Deterministic
                pipelines execute, the model supervises, and the books
                reconcile against the blockchain, cent for cent.
              </p>
            </div>
            <Link
              href="/hen"
              className="inline-flex shrink-0 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Project
            </Link>
          </div>
          <div className="p-8 md:p-10 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Why It Matters</h3>
              <Points
                items={[
                  "The model out of the execution path — determinism runs the money",
                  "Four-term ledger that reconciles with on-chain reality (gas + dust)",
                  "SOL-first: accumulates SOL from volatility, not directional bets",
                  "Self-custody appliance — the client's box, wallet, and keys",
                ]}
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Built With</h3>
              <Tags items={["Go", "XCT", "Solana", "Jupiter / Raydium", "Kubernetes", "Pyth"]} />
            </div>
          </div>
        </div>
      </Section>

      {/* Earlier work */}
      <Section className="bg-linear-to-br from-primary/5 via-background to-background py-20">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Earlier Work
          </h2>
          <p className="text-lg text-muted-foreground">
            Where we came from. Some of it is still up.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {earlier.map((p) => (
            <div key={p.name} className="rounded-xl border bg-card p-6 space-y-3">
              <h3 className="font-bold">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.text}</p>
              <Link
                href={p.href}
                target="_blank"
                className="inline-flex items-center text-xs text-primary font-medium hover:underline"
              >
                {p.label === "GitHub" && <Github className="mr-1 h-3 w-3" />}
                {p.label}
                {p.label !== "GitHub" && <ExternalLink className="ml-1 h-3 w-3" />}
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
