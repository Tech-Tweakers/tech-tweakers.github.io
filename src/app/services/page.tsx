import Link from "next/link";
import { Section } from "@/components/layout/Section";
import {
  Cloud,
  Cpu,
  Workflow,
  BrainCircuit,
  ArrowRight,
  Check,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Tech Tweakers",
  description:
    "Cloud automation, private LLM serving, agents and workflows, and model fine-tuning.",
};

const services = [
  {
    id: "cloud",
    icon: Cloud,
    badge: "Cloud & Automation",
    title: "Infrastructure that runs itself.",
    description:
      "We set up and maintain the infra so your team can focus on the product. On AWS, GCP, Azure or your own machines.",
    items: [
      "Infrastructure as code with Terraform, Pulumi or CloudFormation",
      "CI/CD with GitHub Actions, GitLab CI or ArgoCD",
      "Containers and Kubernetes",
      "Observability with Grafana, Prometheus and OpenTelemetry",
      "Secrets and IAM",
      "Databases with backups and replication",
    ],
  },
  {
    id: "serving",
    icon: Cpu,
    badge: "Private LLM Serving",
    title: "Models on your hardware.",
    description:
      "Open-weight models on your machines or cluster, GPU or CPU. We size the machine for the model you actually want to run, context length included, because the context is usually what runs out first.",
    items: [
      "OpenAI-compatible endpoint",
      "Model swapping and rollback",
      "Monitoring of load, latency and memory",
      "Your prompts and your data stay on your hardware",
    ],
  },
  {
    id: "workflows",
    icon: Workflow,
    badge: "Agents & Workflows",
    title: "Work that needs a person to read something.",
    description:
      "Agents and LLM workflows for checking documents, enforcing a process, cleaning data or operating a system. This is where the XCT methodology applies.",
    items: [
      "Every step logged and with a fallback",
      "A human in the loop where being wrong is expensive",
      "Rules enforced in code, not in the prompt",
      "Tested on your real data before it ships",
    ],
    link: { href: "/xct", label: "How XCT works" },
  },
  {
    id: "training",
    icon: BrainCircuit,
    badge: "Model Training",
    title: "Adapt a model to your domain.",
    description:
      "LoRA fine-tuning of open-weight models on your data. Often a better prompt or a skill does the job, so we test that first and tell you. Full fine-tuning is for cases that justify the compute, and we quote those one by one.",
    items: [
      "LoRA adapters, mergeable and swappable without redeploying",
      "Outputs in GGUF, AWQ or GPTQ",
      "Data pipelines, evaluation and benchmark tracking",
      "Full fine-tuning with DeepSpeed or FSDP when it is justified",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section className="bg-linear-to-br from-primary/5 via-background to-background py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We do four things well: cloud infrastructure, private LLM serving,
            agents and workflows, and model training. If your problem is none
            of them, we will say so.
          </p>
        </div>
      </Section>

      {services.map(({ id, icon: Icon, badge, title, description, items, link }, i) => (
        <Section
          key={id}
          id={id}
          className={
            i % 2 === 0
              ? "bg-linear-to-br from-primary/10 via-muted/40 to-muted/20 py-20 scroll-mt-16"
              : "bg-linear-to-br from-primary/5 via-background to-background py-20 scroll-mt-16"
          }
        >
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              <Icon className="mr-2 h-4 w-4" />
              {badge}
            </div>
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {description}
                </p>
                {link && (
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-primary font-medium hover:underline"
                  >
                    {link.label}{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
              <div className="rounded-xl border bg-card p-6 md:p-8">
                <ul className="space-y-3">
                  {items.map((item) => (
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
            </div>
          </div>
        </Section>
      ))}

      <Section className="border-t bg-linear-to-br from-primary/10 via-muted/40 to-muted/20">
        <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            How it starts
          </h2>
          <p className="text-muted-foreground text-lg">
            We read your current process and find where a model actually helps.
            We build it with logging and fallbacks, then test it on your real
            data before it ships.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Tell us what you have
          </Link>
        </div>
      </Section>
    </div>
  );
}
