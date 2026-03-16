import { Section } from "@/components/layout/Section";
import Link from "next/link";
import { Shield, Zap, Terminal, ArrowRight, Github, CheckCircle, AlertTriangle, Code } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XCT Protocol | Tech Tweakers",
  description: "Execution Control Transfer — A protocol for keeping LLMs out of the driver's seat in production systems.",
};

export default function XCTPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Shield className="mr-2 h-4 w-4" />
            Protocol
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            XCT — Execution Control Transfer
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            A protocol we built because we got tired of LLMs doing things they
            shouldn&apos;t. Models propose, systems validate, tools execute.
            That&apos;s it. No magic — just separation of concerns applied to AI.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row pt-4">
            <Link href="https://github.com/Tech-Tweakers/XCT" target="_blank" className="inline-flex items-center justify-center rounded-md border bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
              <Github className="mr-2 h-4 w-4" />
              Read the Spec
            </Link>
            <Link href="/projects" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
              <Terminal className="mr-2 h-4 w-4" />
              See It in Action
            </Link>
          </div>
        </div>
      </Section>

      {/* The Problem */}
      <Section className="bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Why We Built This</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Most AI integrations let the model run the show. That works fine
              until it doesn&apos;t — and in production, &quot;doesn&apos;t&quot; can mean
              deleted infrastructure, wrong transactions, or silent data corruption.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                <h3 className="text-xl font-bold text-destructive">The Usual Approach</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                  <span>Model decides what to do and does it</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                  <span>Tools are just extensions of the model&apos;s will</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                  <span>State changes happen without explicit validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                  <span>Failures are unpredictable and hard to trace</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                  <span>Good luck with the audit trail</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-primary">What XCT Does Instead</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Model suggests an action, nothing more</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>System decides whether to approve it</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Tools execute deterministically</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Errors come back as structured data, not exceptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Every step is traceable</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Principles */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">The Rules</h2>
            <p className="text-lg text-muted-foreground">
              Five constraints. Not features — constraints. XCT works because it limits what the model can do.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-1">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <span className="font-bold text-lg">1</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">No action without a tool call</h3>
                  <p className="text-muted-foreground">
                    The model can&apos;t describe an action and pretend it happened.
                    If there&apos;s no tool invocation, nothing changed. Period.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <span className="font-bold text-lg">2</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">One step at a time</h3>
                  <p className="text-muted-foreground">
                    One proposal per iteration. The system owns the loop — it can
                    pause, inspect, or stop at any point.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <span className="font-bold text-lg">3</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">The model doesn&apos;t remember</h3>
                  <p className="text-muted-foreground">
                    Context comes from the system, not from the model&apos;s
                    memory. Same input, same output. No hidden state, no surprises.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <span className="font-bold text-lg">4</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Errors are data</h3>
                  <p className="text-muted-foreground">
                    A failed tool call isn&apos;t a crash — it&apos;s information.
                    The model gets the error back and proposes accordingly. No retries, no panic.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <span className="font-bold text-lg">5</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">The system can always say no</h3>
                  <p className="text-muted-foreground">
                    Valid syntax doesn&apos;t mean approved. The system can veto any
                    proposal for any reason — policy, resources, or just &quot;not now.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Protocol Flow */}
      <Section className="bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Two possible responses. That&apos;s the whole contract.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <Code className="h-5 w-5 text-primary" />
                Model Output
              </h3>

              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2 text-primary">Propose an action:</h4>
                  <pre className="text-sm bg-muted p-3 rounded overflow-x-auto"><code>{`{
  "next_step": {
    "tool": "fs.write",
    "arguments": {
      "path": "config.yaml",
      "content": "..."
    },
    "goal": "update the config"
  }
}`}</code></pre>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2 text-primary">Or say &quot;done&quot;:</h4>
                  <pre className="text-sm bg-muted p-3 rounded overflow-x-auto"><code>{`{
  "done": true,
  "message": "config updated"
}`}</code></pre>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <Terminal className="h-5 w-5 text-primary" />
                System Response
              </h3>

              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2 text-green-600">It worked:</h4>
                  <pre className="text-sm bg-muted p-3 rounded overflow-x-auto"><code>{`{
  "status": "success",
  "result": { ... }
}`}</code></pre>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2 text-orange-600">It didn&apos;t:</h4>
                  <pre className="text-sm bg-muted p-3 rounded overflow-x-auto"><code>{`{
  "status": "error",
  "message": "permission denied"
}`}</code></pre>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6">
              &quot;Decision is cheap. Execution is expensive. Keep them separate.&quot;
            </blockquote>
          </div>
        </div>
      </Section>

      {/* When to Use */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">When It Makes Sense</h2>
            <p className="text-lg text-muted-foreground">
              XCT adds overhead. Use it when the cost of getting it wrong is higher than the cost of going slower.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-bold text-green-600">Good Fit</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Infrastructure automation (deploy, scale, delete)</li>
                <li>• Financial operations and blockchain transactions</li>
                <li>• Document validation in regulated environments</li>
                <li>• Anything where &quot;undo&quot; is expensive or impossible</li>
                <li>• Multi-step pipelines with real-world side effects</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                <h3 className="text-xl font-bold text-orange-600">Probably Overkill</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Quick prototypes and experiments</li>
                <li>• Creative writing or brainstorming</li>
                <li>• Chatbots and conversational UIs</li>
                <li>• Simple question/answer patterns</li>
                <li>• Low-stakes internal tooling</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t bg-muted/20">
        <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter">
            Want to try it?
          </h2>
          <p className="text-muted-foreground text-lg">
            XCT is open-source. Read the spec, check the implementations, or
            reach out if you want to talk about how it fits your stack.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
              Get in Touch
            </Link>
            <Link href="https://github.com/Tech-Tweakers/XCT" target="_blank" className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
