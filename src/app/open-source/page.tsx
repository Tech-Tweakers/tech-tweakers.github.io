import { Section } from "@/components/layout/Section";
import Link from "next/link";
import { Github, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source | Tech Tweakers",
  description: "Our open source contributions and projects, featuring Polaris Python API.",
};

export default function OpenSourcePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section className="py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Open Source</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
             We believe that the best software is built in the open. We contribute to the ecosystem to improve the tools we use and share our solutions with the community.
          </p>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="mb-12">
           <h2 className="text-3xl font-bold tracking-tight mb-6">Featured Project</h2>
           <div className="rounded-xl border bg-card p-8 shadow-sm">
             <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
               <div>
                 <h3 className="text-2xl font-bold">Polaris Python API</h3>
                 <p className="text-muted-foreground mt-2 max-w-2xl">
                   A comprehensive, typed, and production-ready Python wrapper for the Polaris ecosystem. It abstracts away the complexity of raw API calls, providing a clean and pythonic interface for developers.
                 </p>
               </div>
               <div className="flex gap-3 shrink-0">
                 <Link href="https://github.com/tech-tweakers/polaris-python-api" className="inline-flex items-center justify-center rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                   <Github className="mr-2 h-4 w-4" />
                   GitHub
                 </Link>
                 <Link href="#" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                   <BookOpen className="mr-2 h-4 w-4" />
                   Docs
                 </Link>
               </div>
             </div>
             
             <div className="grid md:grid-cols-2 gap-8 mt-8 border-t pt-8">
               <div>
                 <h4 className="font-semibold mb-3">Key Features</h4>
                 <ul className="space-y-2 text-sm text-muted-foreground">
                   <li>• Fully typed (mypy compatible)</li>
                   <li>• Async support out of the box</li>
                   <li>• Automatic retry and rate limit handling</li>
                   <li>• Comprehensive error mapping</li>
                 </ul>
               </div>
               <div>
                 <h4 className="font-semibold mb-3">Real-World Impact</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Used by data teams to automate report generation and synchronize assets across environments, saving hours of manual work weekly.
                  </p>
               </div>
             </div>
           </div>
        </div>

        <div>
           <h2 className="text-2xl font-bold tracking-tight mb-6">Other Experiments</h2>
           <div className="grid gap-6 md:grid-cols-2">
             <div className="rounded-xl border bg-card p-6 shadow-sm">
               <h3 className="text-lg font-bold mb-2">Internal Tools</h3>
               <p className="text-muted-foreground text-sm mb-4">
                 Various CLI tools and scripts we use to automate our own development workflows.
               </p>
               <div className="text-sm font-medium text-muted-foreground">Work in Progress</div>
             </div>
           </div>
        </div>
      </Section>
    </div>
  );
}

