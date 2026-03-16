import Link from "next/link";
import { Section } from "@/components/layout/Section";
import {
  Cloud,
  Database,
  BrainCircuit,
  Layers,
  Cpu,
  ArrowRight,
  Check,
  Workflow,
  FileCheck,
  GitBranch,
  ShieldCheck,
  Bot,
  Container,
  RefreshCcw,
  Monitor,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Tech Tweakers",
  description:
    "Cloud automation, custom model training (LoRA & full fine-tuning), and LLM-powered automation workflows.",
};

const trainingTiers = [
  {
    name: "LoRA Fine-Tuning",
    icon: Layers,
    tagline: "Adapt a model without retraining it from scratch",
    description:
      "We take an existing open-source model and fine-tune it on your data using LoRA. It's faster, cheaper, and good enough for most production use cases.",
    highlights: [
      "Works with LLaMA, Mistral, Qwen, Gemma, and others",
      "Trains on your data with modest compute requirements",
      "Mergeable adapters — swap them without redeploying",
      "Dataset to deployed model in days, not weeks",
      "Quantization-ready outputs (GGUF, AWQ, GPTQ)",
    ],
    useCases: [
      "Domain-specific assistants (legal, medical, finance)",
      "Code generation for internal frameworks",
      "Tone and style alignment",
      "Classification and extraction pipelines",
    ],
  },
  {
    name: "Full Fine-Tuning",
    icon: Cpu,
    tagline: "When LoRA isn't enough",
    description:
      "Full parameter training for cases where you need the model to deeply learn your domain. More expensive, more time, but sometimes it's the right call.",
    highlights: [
      "Multi-GPU / multi-node training setups",
      "Data pipelines with filtering and deduplication",
      "Evaluation suites and benchmark tracking",
      "Distributed training with DeepSpeed / FSDP",
      "Model distillation when you need a smaller version",
    ],
    useCases: [
      "Building your own foundation model",
      "High-stakes domains where accuracy is non-negotiable",
      "Multi-task models with complex reasoning",
      "On-premise deployments with strict data rules",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section className="py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We do three things well: cloud infrastructure, model training, and
            LLM automation. If your problem fits one of these, we can probably
            help.
          </p>
        </div>
      </Section>

      {/* Cloud & Automation Section */}
      <Section id="cloud" className="bg-muted/30 py-20">
        <div className="max-w-3xl mx-auto space-y-6 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Cloud className="mr-2 h-4 w-4" />
            Cloud & Automation
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Infrastructure That Works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We set up and maintain cloud infrastructure using IaC. CI/CD,
            containers, observability, security — the stuff that keeps your
            product running while your team ships features.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Cloud className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Infrastructure as Code</h3>
            <p className="text-muted-foreground leading-relaxed">
              Terraform, Pulumi, CloudFormation. Reproducible infra across AWS,
              GCP, and Azure. No more clicking around in consoles.
            </p>
          </div>

          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <RefreshCcw className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">CI/CD Pipelines</h3>
            <p className="text-muted-foreground leading-relaxed">
              GitHub Actions, GitLab CI, ArgoCD. Push code, tests run, it
              deploys. If it breaks, you know before your users do.
            </p>
          </div>

          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Container className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Containers & Orchestration</h3>
            <p className="text-muted-foreground leading-relaxed">
              Docker, Kubernetes, ECS. Service mesh, auto-scaling,
              multi-environment deploys. The boring but critical stuff.
            </p>
          </div>

          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Monitor className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Observability</h3>
            <p className="text-muted-foreground leading-relaxed">
              Grafana, Prometheus, OpenTelemetry. Logs, metrics, traces — so
              you actually know what&apos;s happening in prod.
            </p>
          </div>

          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Security & Compliance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Secrets management, IAM, network segmentation. Not an
              afterthought — baked into every deployment from day one.
            </p>
          </div>

          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Data Services</h3>
            <p className="text-muted-foreground leading-relaxed">
              Database provisioning, backups, replication, migration.
              PostgreSQL, Redis, DynamoDB — automated and monitored.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center text-primary font-medium hover:underline"
          >
            Talk about your infra{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>

      {/* Model Training Section */}
      <Section id="training" className="py-20">
        <div className="max-w-3xl mx-auto space-y-6 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <BrainCircuit className="mr-2 h-4 w-4" />
            Model Training
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Custom Model Training
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We fine-tune open-source LLMs on your data. Two approaches depending
            on what you need — LoRA for most cases, full training when it
            matters.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {trainingTiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col rounded-xl border bg-card shadow-sm overflow-hidden"
            >
              <div className="p-8 space-y-4 border-b bg-muted/20">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <tier.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <p className="text-sm font-medium text-primary">
                  {tier.tagline}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="p-8 space-y-6 flex-1">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    What you get
                  </h4>
                  <ul className="space-y-2">
                    {tier.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Works well for
                  </h4>
                  <ul className="space-y-2">
                    {tier.useCases.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground pl-4 border-l-2 border-primary/20"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center text-primary font-medium hover:underline"
          >
            Talk about training{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>

      {/* LLM Workflows Section */}
      <Section id="workflows" className="bg-linear-to-br from-primary/5 via-background to-primary/5 py-20">
        <div className="max-w-3xl mx-auto space-y-6 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Workflow className="mr-2 h-4 w-4" />
            LLM Workflows
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            LLM Automation Flows
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We build workflows that use LLMs to automate things that today
            require manual review — document checks, process enforcement, data
            cleanup. Structured, logged, and with fallbacks.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <FileCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Document Validation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Cross-reference documents, extract data, flag inconsistencies.
              Replaces hours of manual review with repeatable checks.
            </p>
          </div>

          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <GitBranch className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Process Enforcement</h3>
            <p className="text-muted-foreground leading-relaxed">
              Workflows that follow your business rules step by step — routing,
              checklists, compliance gates. Nothing skips a step.
            </p>
          </div>

          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Quality Checks</h3>
            <p className="text-muted-foreground leading-relaxed">
              Multi-stage review where LLMs check outputs against your criteria,
              escalate edge cases, and log every decision.
            </p>
          </div>

          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Bot className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Agentic Pipelines</h3>
            <p className="text-muted-foreground leading-relaxed">
              Multi-step agents that use tools and talk to external systems.
              With guardrails and human-in-the-loop when it matters.
            </p>
          </div>

          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Data Enrichment</h3>
            <p className="text-muted-foreground leading-relaxed">
              Classify, normalize, and enrich raw data with LLMs. Turn
              unstructured inputs into clean datasets your systems can use.
            </p>
          </div>

          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Workflow className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Custom Orchestration</h3>
            <p className="text-muted-foreground leading-relaxed">
              When none of the above fits exactly, we build custom flow
              engines connecting models, APIs, and your business logic.
            </p>
          </div>
        </div>

        <div className="rounded-xl border bg-card/50 p-8 max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold mb-4">How we approach it</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">01</div>
              <h4 className="font-medium">Understand</h4>
              <p className="text-sm text-muted-foreground">
                We look at your current process, find what&apos;s slow or
                error-prone, and figure out where an LLM actually helps.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">02</div>
              <h4 className="font-medium">Build</h4>
              <p className="text-sm text-muted-foreground">
                We wire up the flow with checkpoints, fallbacks, and logging.
                Nothing runs without visibility.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">03</div>
              <h4 className="font-medium">Validate</h4>
              <p className="text-sm text-muted-foreground">
                We test against your real data, tune what needs tuning, and
                deploy when it&apos;s actually ready.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center text-primary font-medium hover:underline"
          >
            Talk about your workflow{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
