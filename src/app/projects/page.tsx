import { Section } from "@/components/layout/Section";
import Link from "next/link";
import {
  Github,
  BookOpen,
  Shield,
  Cpu,
  Zap,
  ExternalLink,
  Check,
  MessageSquare,
  Mic,
  FileText,
  Globe,
  HardDrive,
  Cloud,
  Workflow,
  Terminal,
  Container,
  FileCheck,
  Coins,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Tech Tweakers",
  description:
    "Projects by Tech Tweakers: XCT Protocol, Polaris Core, Polaris v2, Polaris v3, and XCT-Qwen3-4B.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section className="bg-linear-to-br from-primary/5 via-background to-background py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our Active Projects
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From protocols to runtimes to trained models — these are the
            projects we build and use in production.
          </p>
        </div>
      </Section>

      {/* Hen Trader */}
      <Section className="bg-linear-to-br from-primary/10 via-muted/40 to-muted/20 py-20">
        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
          <div className="p-8 md:p-10 border-b bg-muted/20">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                  <Coins className="mr-2 h-4 w-4" />
                  XCT Applied · On-Chain
                </div>
                <h2 className="text-3xl font-bold">Hen Trader</h2>
                <p className="text-muted-foreground max-w-2xl leading-relaxed">
                  XCT taken to its extreme — where the model steps out of the hot
                  path entirely. An autonomous SOL accumulator on Solana:
                  deterministic price and regime propose, a deterministic pipeline
                  validates, and deterministic tools execute the swap on-chain. The
                  model was promoted to supervisor — it watches and alerts, it
                  doesn&apos;t trade. Dramatically cheaper, safer, and the books
                  reconcile against the blockchain, cent for cent.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link
                  href="/hen"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Link>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Why It Matters</h3>
                <ul className="space-y-3">
                  {[
                    "The model out of the execution path — determinism runs the money",
                    "Four-term ledger that reconciles with on-chain reality (gas + dust)",
                    "SOL-first: accumulates SOL from volatility, not directional bets",
                    "Self-custody appliance — the client's box, wallet, and keys",
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
                <h3 className="font-semibold text-lg">Built With</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    Go
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    XCT Protocol
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    Solana
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    Jupiter / Raydium
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    Kubernetes
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    Pyth
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* XCT-Qwen3-4B Model */}
      <Section className="bg-linear-to-br from-primary/5 via-background to-background py-20">
        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
          <div className="p-8 md:p-10 border-b bg-muted/20">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                  <Cpu className="mr-2 h-4 w-4" />
                  Trained Model
                </div>
                <h2 className="text-3xl font-bold">XCT-Qwen3-4B</h2>
                <p className="text-muted-foreground max-w-2xl leading-relaxed">
                  An execution-oriented language model fine-tuned with LoRA to
                  operate under the XCT Protocol. Not a conversational
                  assistant — a constrained execution engine for controlled,
                  deterministic systems.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link
                  href="https://huggingface.co/tech-tweakers/XCT-Qwen3-4B"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  HuggingFace
                </Link>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Model Specs</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Base Model", value: "Qwen3-4B" },
                      { label: "Parameters", value: "~4B" },
                      {
                        label: "Training",
                        value: "LoRA r=8 · 5 epochs · 150 steps",
                      },
                      { label: "Dataset", value: "238 curated examples" },
                      { label: "Architecture", value: "Decoder-only Transformer" },
                    ].map((spec) => (
                      <div
                        key={spec.label}
                        className="flex justify-between text-sm border-b border-border/50 pb-2"
                      >
                        <span className="text-muted-foreground">
                          {spec.label}
                        </span>
                        <span className="font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">
                    Quantized Variants (GGUF)
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg border bg-muted/30 p-3 text-center">
                      <div className="text-lg font-bold">Q2_K</div>
                      <div className="text-xs text-muted-foreground">
                        1.67 GB
                      </div>
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-3 text-center">
                      <div className="text-lg font-bold">Q5_K</div>
                      <div className="text-xs text-muted-foreground">
                        2.7 GB · Recommended
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Designed For</h3>
                  <ul className="space-y-3">
                    {[
                      "Deterministic execution agents",
                      "Infrastructure orchestration (K8s, CI/CD)",
                      "Deployment automation pipelines",
                      "Tool-driven workflows",
                      "Compliance-sensitive environments",
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
                  <h3 className="font-semibold text-lg">Execution Model</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">
                        1
                      </span>
                      System provides context and instruction
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">
                        2
                      </span>
                      Model proposes a response or action
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">
                        3
                      </span>
                      System validates and executes or rejects
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    LoRA
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    Qwen3
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    GGUF
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    XCT Protocol
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    Apache 2.0
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Polaris v3 */}
      <Section className="bg-linear-to-br from-primary/10 via-muted/40 to-muted/20 py-20">
        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
          <div className="p-8 md:p-10 border-b bg-muted/20">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                  <Workflow className="mr-2 h-4 w-4" />
                  Deterministic Agent
                </div>
                <h2 className="text-3xl font-bold">Polaris v3</h2>
                <p className="text-muted-foreground max-w-2xl leading-relaxed">
                  This is not a chatbot — it&apos;s a deterministic execution
                  agent powered by the XCT Protocol. The model proposes one
                  action at a time, the system validates, deterministic tools
                  execute. Designed to be customized to your use case: each
                  deployment gets its own tool set, validation rules, and
                  execution boundaries tailored to the problem at hand.
                  Built for critical automation where reliability is
                  non-negotiable.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Talk to Us
                </Link>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">XCT Execution Flow</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">
                        1
                      </span>
                      User defines task and context
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">
                        2
                      </span>
                      Model proposes exactly one action
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">
                        3
                      </span>
                      System validates the proposal
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">
                        4
                      </span>
                      Deterministic tool executes or rejects
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">
                        5
                      </span>
                      Result feeds back as signal for next iteration
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Tool Ecosystem</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <Terminal className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Shell Execution</div>
                        <div className="text-xs text-muted-foreground">
                          Commands with timeout and streaming
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <Container className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Docker & EKS</div>
                        <div className="text-xs text-muted-foreground">
                          Container and cluster orchestration
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <FileCheck className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Document Validation</div>
                        <div className="text-xs text-muted-foreground">
                          Critical document verification flows
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <Coins className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Blockchain Trading</div>
                        <div className="text-xs text-muted-foreground">
                          Deterministic trade execution on-chain
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Architecture</h3>
                  <ul className="space-y-3">
                    {[
                      "Clean Architecture with layered separation",
                      "FastAPI REST + WebSocket executor",
                      "RAG with ChromaDB for contextual retrieval",
                      "MongoDB dual-layer memory (short + long term)",
                      "Local inference (Polaris Core) or Groq Cloud",
                      "Hot-reload configuration without restarts",
                      "Prometheus metrics and observability",
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

                <div className="flex flex-wrap gap-2">
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    Python
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    FastAPI
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    WebSocket
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    MongoDB
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    ChromaDB
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    XCT Protocol
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Polaris v2 */}
      <Section className="bg-linear-to-br from-primary/5 via-background to-background py-20">
        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
          <div className="p-8 md:p-10 border-b bg-muted/20">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Institutional Chatbot
                </div>
                <h2 className="text-3xl font-bold">Polaris v2</h2>
                <p className="text-muted-foreground max-w-2xl leading-relaxed">
                  Conversational AI assistant for companies that need a
                  chatbot with guardrails — not a toy. RAG over your
                  documents, voice input/output, multi-platform delivery
                  (web, Telegram, API), deployable on your infrastructure
                  or cloud. Your models, your data, your rules.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link
                  href="https://techtweakers.org/polaris-v2-web/#/"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Capabilities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Conversational AI</div>
                        <div className="text-xs text-muted-foreground">
                          Dual-layer memory with semantic search
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <Mic className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Voice I/O</div>
                        <div className="text-xs text-muted-foreground">
                          TTS (ElevenLabs, Coqui) + STT (Whisper)
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <FileText className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Document Processing</div>
                        <div className="text-xs text-muted-foreground">
                          PDF vectorization + semantic search
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <Globe className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Multi-Platform</div>
                        <div className="text-xs text-muted-foreground">
                          REST API, Telegram, Web UI, Webhooks
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">
                    Infrastructure Options
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg border bg-muted/30 p-4 text-center">
                      <HardDrive className="h-5 w-5 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium">Local</div>
                      <div className="text-xs text-muted-foreground">
                        llama.cpp + your GPU
                      </div>
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-4 text-center">
                      <Cloud className="h-5 w-5 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium">Cloud</div>
                      <div className="text-xs text-muted-foreground">
                        Groq API + managed infra
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Architecture</h3>
                  <ul className="space-y-3">
                    {[
                      "FastAPI backend with JWT authentication",
                      "MongoDB persistence + ChromaDB vector store",
                      "LangChain context management",
                      "Dynamic model selection (local or cloud)",
                      "Prometheus metrics and observability",
                      "Docker Compose deployment",
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

                <div className="flex flex-wrap gap-2">
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    Python
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    FastAPI
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    MongoDB
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    ChromaDB
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    Docker
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    llama.cpp
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    Groq
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Polaris Core */}
      <Section className="bg-linear-to-br from-primary/10 via-muted/40 to-muted/20 py-20">
        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
          <div className="p-8 md:p-10 border-b bg-muted/20">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                  <Zap className="mr-2 h-4 w-4" />
                  Runtime
                </div>
                <h2 className="text-3xl font-bold">Polaris Core</h2>
                <p className="text-muted-foreground max-w-2xl leading-relaxed">
                  Ultra-optimized C++ binding for llama.cpp with first-class
                  Python integration. Built for maximum-performance local
                  inference with streaming, XCT protocol support, and
                  intelligent batch management.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link
                  href="https://github.com/Tech-Tweakers/polaris-core"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Features</h3>
                <ul className="space-y-3">
                  {[
                    "GGUF model support (Qwen, Mistral, LLaMA, Gemma)",
                    "GPU acceleration via CUDA (CPU/Metal also supported)",
                    "Token streaming through Python callbacks",
                    "JSON early-stop for XCT protocol (~30% time savings)",
                    "Intelligent batch backoff with automatic retry",
                    "Thread-safe architecture with GIL management",
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
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">
                    Performance (Qwen3-4B · RTX 4090)
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border bg-muted/30 p-4 text-center">
                      <div className="text-2xl font-bold text-primary">
                        ~15ms
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Prefill (256 tokens)
                      </div>
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-4 text-center">
                      <div className="text-2xl font-bold text-primary">
                        ~2ms
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Per token decode
                      </div>
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-4 text-center">
                      <div className="text-2xl font-bold text-primary">
                        ~9GB
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        VRAM usage
                      </div>
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-4 text-center">
                      <div className="text-2xl font-bold text-primary">
                        30%
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Savings with early-stop
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    C++
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    Python
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    pybind11
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    llama.cpp
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    CUDA
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    Apache 2.0
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* XCT Protocol */}
      <Section className="bg-linear-to-br from-primary/5 via-background to-background py-20">
        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
          <div className="p-8 md:p-10 border-b bg-muted/20">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                  <Shield className="mr-2 h-4 w-4" />
                  Protocol
                </div>
                <h2 className="text-3xl font-bold">
                  XCT — Execution Control Transfer
                </h2>
                <p className="text-muted-foreground max-w-2xl leading-relaxed">
                  An architectural protocol that keeps language models from
                  granting themselves executive authority. XCT inverts the
                  sovereignty model: models propose, but don&apos;t execute.
                  Control remains with deterministic tools. Born from production
                  experience with high-risk AI deployments.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link
                  href="https://github.com/Tech-Tweakers/XCT"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
                <Link
                  href="/xct"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Protocol Principles</h3>
                <ul className="space-y-3">
                  {[
                    "No action without explicit tool invocation",
                    "One step per iteration — controlled loop",
                    "Errors are first-class control signals",
                    "System has veto power over any proposal",
                    "Ambiguity resolves to minimal action",
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
                <h3 className="font-semibold text-lg">Why XCT Exists</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  XCT is not a prompt style or agent framework — it&apos;s an
                  architectural protocol. Traditional AI integrations let models
                  decide what to do and when. XCT inverts this: the model
                  proposes, the system validates, deterministic tools execute.
                  Authority remains external by design.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    AI Safety
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    Production Protocol
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    Sovereignty Inversion
                  </span>
                  <span className="bg-muted px-2.5 py-1 rounded text-xs font-mono">
                    Apache 2.0
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

    </div>
  );
}
