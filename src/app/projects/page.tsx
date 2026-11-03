import { Section } from "@/components/layout/Section";
import Link from "next/link";
import {
  Check,
  Coins,
  Cpu,
  Bot,
  ExternalLink,
  Github,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Tech Tweakers",
  description:
    "What Tech Tweakers builds and runs: Polaris, XCT-Core, Golden Hen, and earlier work.",
};

const earlier: { name: string; text: string; href?: string; label?: string }[] = [
  {
    name: "polaris-core",
    text: "A C++ binding for llama.cpp, from before we adopted llama-server.",
    href: "https://github.com/Tech-Tweakers/polaris-core",
    label: "GitHub",
  },
  {
    name: "Polaris v3",
    text: "A deterministic agent built on XCT. XCT-Core and Polaris v4 took over its job.",
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
            What we build and what we run in production. All of it is ready to
            run under your brand.
          </p>
        </div>
      </Section>

      {/* Polaris line */}
      <Section className="bg-linear-to-br from-primary/10 via-muted/40 to-muted/20 py-20">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The Polaris Line
          </h2>
          <p className="text-lg text-muted-foreground">
            Two products running today, both white label: one for assistants,
            and one for the inference underneath.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-5 rounded-xl border bg-card p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                <MessageSquare className="mr-2 h-4 w-4" />
                Product · Corporate Chatbot
              </div>
              <Link
                href="https://techtweakers.org/polaris-v2-web/#/"
                target="_blank"
                className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Try the Live Demo
              </Link>
            </div>
            <h3 className="text-2xl font-bold">Polaris v2</h3>
            <p className="text-muted-foreground leading-relaxed">
              A conversational assistant ready to run under your brand. Text
              and voice, memory of the conversation, document processing and
              access for several clients, with the model, the transcription and
              the voice chosen by configuration and not by code.
            </p>
            <Points
              items={[
                "Talk to it and it talks back: the live demo answers in voice",
                "Name, instructions and voice are settings, so one product serves many brands",
                "Swap the model provider without redeploying, or run a local model",
                "Runs on your own hardware, so the data never has to leave",
                "From a very small footprint with remote providers up to a GPU server for fully local use",
              ]}
            />
            <div className="mt-auto space-y-4 pt-2">
              <Tags items={["Python", "FastAPI", "Vue", "Kubernetes"]} />
            </div>
          </div>

          <div className="flex flex-col gap-5 rounded-xl border bg-card p-8 shadow-sm">
            <div className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <Cpu className="mr-2 h-4 w-4" />
              Inference · Orchestrator
            </div>
            <h3 className="text-2xl font-bold">Polaris v4</h3>
            <p className="text-muted-foreground leading-relaxed">
              The layer under our agents and our client deployments. An
              orchestrator in Go on top of llama-server: it exposes an
              OpenAI-compatible API, swaps models in place with a rollback, and
              runs on Kubernetes with pods that use the GPU.
            </p>
            <Points
              items={[
                "OpenAI-compatible API in front of llama-server",
                "Hot model swap, with rollback if the new model doesn't come up",
                "Routing between models, and sessions",
                "White label: it runs under your brand, on your own infrastructure",
                "Your prompts and data stay on your hardware",
              ]}
            />
            <div className="mt-auto space-y-4 pt-2">
              <Tags items={["Go", "llama.cpp", "Kubernetes", "GPU"]} />
            </div>
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
              href="/xct-core"
              className="inline-flex shrink-0 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              About XCT-Core
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
              {p.href && (
                <Link
                  href={p.href}
                  target="_blank"
                  className="inline-flex items-center text-xs text-primary font-medium hover:underline"
                >
                  {p.label === "GitHub" && <Github className="mr-1 h-3 w-3" />}
                  {p.label}
                  {p.label !== "GitHub" && <ExternalLink className="ml-1 h-3 w-3" />}
                </Link>
              )}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
