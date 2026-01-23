import { Section } from "@/components/layout/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Tech Tweakers",
  description: "We are an open source–driven consulting brand focused on cloud solutions and backend engineering.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section className="py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Tech Tweakers</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tech Tweakers is an open source–driven side project and consulting brand, focused on cloud solutions, backend engineering, automation, and applied AI.
          </p>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-7">
              Our goal is simple: to build high-quality software that stands the test of time. We believe in the power of open source not just as a consumer, but as a contributor. We approach every project—whether it's a client engagement or an internal tool—as an engineering challenge that deserves a robust, scalable solution.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Engineering Philosophy</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Transparency:</strong> We prefer open code and open communication.</span>
              </li>
              <li className="flex gap-3">
                <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Simplicity:</strong> We avoid over-engineering. The best solution is often the simplest one that works at scale.</span>
              </li>
              <li className="flex gap-3">
                <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Quality:</strong> We don't ship "hacky" code. We build for production from day one.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We are a small team of 2 active collaborators, combining years of experience in backend development, cloud infrastructure, and software architecture. We maintain a lean operation to ensure we can focus deeply on the technical quality of our work without the distractions of large agency overhead.
          </p>
        </div>
      </Section>
    </div>
  );
}

