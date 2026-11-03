import Link from "next/link";
import { Section } from "@/components/layout/Section";
import {
  ArrowRight,
  Shield,
  Zap,
  Terminal,
  Cloud,
  BrainCircuit,
  Workflow,
  Cpu,
  FlaskConical,
  Bot,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero */}
      <Section className="bg-linear-to-br from-primary/5 via-background to-background flex flex-col justify-center min-h-[80vh] py-20 md:py-32">
        <div className="max-w-3xl space-y-8 mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            We build tools for our{" "}
            <span className="text-emerald-400">needs</span>. Now you can use
            them in{" "}
            <span className="text-amber-400">production</span>.
          </h1>
          <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Everything we build, we run in our own production first. If it
            can&apos;t survive our stack, it doesn&apos;t reach yours.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Talk to Us
            </Link>
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              See Our Projects
            </Link>
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section className="bg-linear-to-br from-primary/5 via-background to-background">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground">
            Four things we do well. Not everything — just these.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 p-6 rounded-xl border bg-card/50 backdrop-blur-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Cloud className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Cloud & Automation</h3>
            <p className="text-muted-foreground">
              IaC with Terraform, Pulumi or CloudFormation. CI/CD, Kubernetes, observability with Grafana, Prometheus and OpenTelemetry. We set up and maintain the infra so your team can focus on the product.
            </p>
            <Link
              href="/services#cloud"
              className="group mt-auto self-start inline-flex items-center text-sm text-primary font-medium hover:underline"
            >
              Learn more{" "}
              <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="flex flex-col gap-4 p-6 rounded-xl border bg-card/50 backdrop-blur-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Cpu className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Private LLM Serving</h3>
            <p className="text-muted-foreground">
              Open-weight models on your own hardware or cluster, behind an OpenAI-compatible API, with model swapping and monitoring. Your prompts and data stay with you.
            </p>
            <Link
              href="/services#serving"
              className="group mt-auto self-start inline-flex items-center text-sm text-primary font-medium hover:underline"
            >
              Learn more{" "}
              <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="flex flex-col gap-4 p-6 rounded-xl border bg-card/50 backdrop-blur-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Workflow className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Agents & Workflows</h3>
            <p className="text-muted-foreground">
              Agents and LLM pipelines for document validation, process automation and operating systems, with logging, fallbacks and a human in the loop where it matters.
            </p>
            <Link
              href="/services#workflows"
              className="group mt-auto self-start inline-flex items-center text-sm text-primary font-medium hover:underline"
            >
              Learn more{" "}
              <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="flex flex-col gap-4 p-6 rounded-xl border bg-card/50 backdrop-blur-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Model Training</h3>
            <p className="text-muted-foreground">
              LoRA and full fine-tuning of open-weight models for your domain. We handle data, training, eval and deployment, and tell you when a better prompt is enough.
            </p>
            <Link
              href="/services#training"
              className="group mt-auto self-start inline-flex items-center text-sm text-primary font-medium hover:underline"
            >
              Learn more{" "}
              <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Section>

      {/* XCT Methodology */}
      <Section className="bg-linear-to-br from-primary/10 via-muted/40 to-muted/20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Shield className="mr-2 h-4 w-4" />
            How We Build
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            XCT — Execution Control Transfer
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            XCT started as a protocol. Today it is the methodology behind
            everything we build with language models, and{" "}
            <Link href="/xct-core" className="font-medium text-foreground underline underline-offset-4 hover:text-primary">XCT-Core</Link>, our
            agent engine, is where it lives in code. The model proposes; the
            engine decides what runs.
          </p>
          <div className="grid gap-6 md:grid-cols-3 mt-12 text-left">
            <div className="space-y-4 p-6 rounded-xl border bg-card/50 backdrop-blur-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Who Decides</h3>
              <p className="text-muted-foreground">
                The model suggests the next step. The engine owns the loop, the
                tools and the context, and decides what runs. Decision is cheap,
                execution is expensive, so they live in different hands.
              </p>
            </div>
            <div className="space-y-4 p-6 rounded-xl border bg-card/50 backdrop-blur-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Terminal className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Rules Live in Code</h3>
              <p className="text-muted-foreground">
                Anything that has to hold goes in code, not in the prompt. A
                shell command runs unasked only if every part of it is
                read-only, and the model can&apos;t talk its way past that.
              </p>
            </div>
            <div className="space-y-4 p-6 rounded-xl border bg-card/50 backdrop-blur-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FlaskConical className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Count Before You Believe</h3>
              <p className="text-muted-foreground">
                One bad answer looks like bad luck. Ten identical ones are a
                diagnosis. We run things ten times, and we run models through
                the same audit before we trust them.
              </p>
            </div>
          </div>
          <div className="pt-8">
            <Link
              href="/xct"
              className="group inline-flex items-center text-primary font-medium hover:underline"
            >
              Read about XCT{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Section>

      {/* What we build */}
      <Section className="bg-linear-to-br from-primary/5 via-background to-background">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What We Build
          </h2>
          <p className="text-lg text-muted-foreground">
            Tools we built for ourselves and run in production.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-3 rounded-xl border bg-card p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="font-bold">Polaris v4</h3>
            <p className="text-sm text-muted-foreground">
              Our inference layer: an orchestrator in Go on top of llama-server,
              with an OpenAI-compatible API and in-place model swaps with
              rollback, on Kubernetes with pods that use the GPU. It sits under
              our agents and client deployments. The Polaris line also includes
              Polaris v2, our white-label assistant.
            </p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
              <span className="bg-muted px-2 py-0.5 rounded text-xs font-mono">
                Go
              </span>
              <span className="bg-muted px-2 py-0.5 rounded text-xs font-mono">
                llama.cpp
              </span>
              <span className="bg-muted px-2 py-0.5 rounded text-xs font-mono">
                Kubernetes
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 rounded-xl border bg-card p-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Bot className="h-5 w-5" />
            </div>
            <h3 className="font-bold">XCT-Core</h3>
            <p className="text-sm text-muted-foreground">
              The agent engine: one Go binary that owns the loop, the tools, the
              sessions and the context, and serves any front end over HTTP and
              SSE. Built from the archived Go version of opencode (MIT) and heavily rewritten.
            </p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
              <span className="bg-muted px-2 py-0.5 rounded text-xs font-mono">
                Go
              </span>
              <span className="bg-muted px-2 py-0.5 rounded text-xs font-mono">
                XCT
              </span>
              <span className="bg-muted px-2 py-0.5 rounded text-xs font-mono">
                SSE
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center text-primary font-medium hover:underline"
          >
            See all projects{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t bg-linear-to-br from-primary/10 via-muted/40 to-muted/20">
        <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Got a problem that fits?
          </h2>
          <p className="text-muted-foreground text-lg">
            If you need infrastructure that holds up as you grow, or language
            models running on your own hardware with agents you can trust,
            we should talk.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Get in Touch
          </Link>
        </div>
      </Section>
    </div>
  );
}
