import { Section } from "@/components/layout/Section";
import { Server, Cloud, Database, BrainCircuit, MessageSquareCode } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Tech Tweakers",
  description: "Specialized technical services in backend architecture, cloud automation, and applied AI.",
};

const services = [
  {
    title: "Backend & API Architecture",
    description: "We design and build robust, scalable APIs and microservices. We focus on performance, security, and clean architecture patterns to ensure your system can grow with your business.",
    icon: Server,
  },
  {
    title: "Cloud & Automation",
    description: "Infrastructure as Code (IaC), CI/CD pipelines, and cloud-native deployments. We automate the boring stuff so you can focus on shipping features and maintaining reliability.",
    icon: Cloud,
  },
  {
    title: "Integrations & ETLs",
    description: "Connecting disparate systems and building reliable data pipelines. We handle data ingestion, transformation, and synchronization at scale, ensuring data integrity.",
    icon: Database,
  },
  {
    title: "AI Applied to Systems",
    description: "Integrating Large Language Models (LLMs) and ML workflows into your existing applications. We move beyond demos to create practical, production-ready AI features.",
    icon: BrainCircuit,
  },
  {
    title: "Technical Consulting",
    description: "Strategic advice on technology choices, architecture reviews, and engineering best practices. We help technical founders and teams make informed decisions.",
    icon: MessageSquareCode,
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section className="py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Technical Services</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We provide specialized engineering services, not generic web development. Our focus is on solving hard technical problems for startups and growing companies.
          </p>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm transition-colors hover:bg-accent/50">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-muted-foreground flex-1 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

