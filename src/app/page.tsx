import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { ArrowRight, Code2, Cpu, GitBranch, Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <Section className="flex flex-col justify-center min-h-[80vh] py-20 md:py-32">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Engineering-First Cloud Solutions
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            We build open source–driven{" "}
            <span className="text-primary">cloud solutions</span> with real
            engineering.
          </h1>
          <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Specialized in scalability, maintainability, and backend
            architecture. We turn complex requirements into robust,
            production-ready systems.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Discuss Your Project
            </Link>
            <Link
              href="/open-source"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              See Open Source
            </Link>
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section className="bg-muted/40">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Terminal className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Backend Architecture</h3>
            <p className="text-muted-foreground">
              Designing and building scalable APIs, microservices, and
              event-driven systems that can handle high load.
            </p>
          </div>
          <div className="space-y-4">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Cpu className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Cloud & Automation</h3>
            <p className="text-muted-foreground">
              Infrastructure as Code, CI/CD pipelines, and cloud-native
              deployments on AWS, GCP, and Azure.
            </p>
          </div>
          <div className="space-y-4">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Code2 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Applied AI</h3>
            <p className="text-muted-foreground">
              Integrating LLMs and machine learning models into practical
              business workflows and applications.
            </p>
          </div>
        </div>
      </Section>

      {/* Open Source Pillar */}
      <Section>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Open Source is our DNA.
            </h2>
            <p className="text-lg text-muted-foreground">
              We don't just use open source; we contribute to it. We believe
              that transparency and community collaboration lead to better
              software.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <GitBranch className="mr-2 h-5 w-5 text-primary" />
                Active contributors to the ecosystem
              </li>
              <li className="flex items-center">
                <GitBranch className="mr-2 h-5 w-5 text-primary" />
                Maintainers of critical tools
              </li>
              <li className="flex items-center">
                <GitBranch className="mr-2 h-5 w-5 text-primary" />
                Public code, private excellence
              </li>
            </ul>
            <div className="pt-4">
              <Link
                href="/open-source"
                className="group inline-flex items-center text-primary font-medium hover:underline"
              >
                Explore our contributions{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="flex-1 rounded-xl border bg-card text-card-foreground shadow p-8">
            <h3 className="font-semibold text-lg mb-2">Featured Project</h3>
            <div className="text-2xl font-bold mb-4">Polaris Python API</div>
            <p className="text-muted-foreground mb-6">
              A comprehensive Python wrapper for the Polaris ecosystem, designed
              to simplify interactions and automate workflows.
            </p>
            <div className="flex gap-4">
              <div className="bg-muted px-3 py-1 rounded text-xs font-mono">
                Python
              </div>
              <div className="bg-muted px-3 py-1 rounded text-xs font-mono">
                API Wrapper
              </div>
              <div className="bg-muted px-3 py-1 rounded text-xs font-mono">
                Open Source
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t bg-muted/20">
        <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to build something real?
          </h2>
          <p className="text-muted-foreground text-lg">
            If you value engineering quality, maintainability, and open source,
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
