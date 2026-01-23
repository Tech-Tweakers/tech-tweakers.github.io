import { Section } from "@/components/layout/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Tech Tweakers",
  description: "Case studies and technical projects highlighting our engineering approach.",
};

const projects = [
  {
    title: "Enterprise ETL Pipeline",
    category: "Architecture & Data",
    description: "Designed and implemented a high-throughput ETL pipeline for a fintech client. Replaced legacy cron jobs with an event-driven architecture using AWS Lambda and Step Functions.",
    tech: ["AWS", "Python", "Terraform", "PostgreSQL"],
    outcome: "Reduced processing time by 70% and improved data reliability.",
  },
  {
    title: "SaaS Backend Migration",
    category: "Backend Engineering",
    description: "Migrated a monolithic Node.js application to a microservices architecture. Implemented a centralized authentication service and service mesh for observability.",
    tech: ["Node.js", "Kubernetes", "Redis", "gRPC"],
    outcome: "Improved scalability and reduced deployment risk.",
  },
  {
    title: "AI-Powered Document Search",
    category: "Applied AI",
    description: "Built a RAG (Retrieval-Augmented Generation) system for internal documentation. Optimized vector search and context window usage for accuracy.",
    tech: ["Python", "OpenAI API", "Pinecone", "FastAPI"],
    outcome: "Enabled natural language queries over 5,000+ internal documents.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section className="py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Selected Projects</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A look at some of the engineering challenges we've tackled. We focus on scalability, maintainability, and solving the right problem.
          </p>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="grid gap-8">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border bg-card shadow-sm">
              <div className="flex-1 space-y-4">
                <div className="text-sm font-medium text-primary">{project.category}</div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1 md:border-l md:pl-6 flex flex-col justify-center">
                 <div className="space-y-2">
                   <span className="text-sm font-semibold text-foreground">Outcome</span>
                   <p className="text-muted-foreground">
                     {project.outcome}
                   </p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

