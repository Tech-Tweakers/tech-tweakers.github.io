import { Section } from "@/components/layout/Section";
import { Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Tech Tweakers",
  description: "Get in touch with us for engineering consulting and cloud solutions.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section className="py-20">
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Let's Build Together</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            If you value engineering quality, open source, and maintainability, we'd love to hear from you.
          </p>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="max-w-xl mx-auto rounded-xl border bg-card p-8 shadow-sm">
           <form className="space-y-6">
             <div className="space-y-2">
               <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
               <input type="text" id="name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Your name" />
             </div>
             <div className="space-y-2">
               <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
               <input type="email" id="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="name@example.com" />
             </div>
             <div className="space-y-2">
               <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
               <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Tell us about your project or technical challenge..." />
             </div>
             <button type="submit" className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
               Send Message
             </button>
           </form>
           
           <div className="mt-8 pt-8 border-t flex flex-col items-center gap-4 text-center">
             <div className="flex items-center text-muted-foreground">
               <Mail className="mr-2 h-4 w-4" />
               <a href="mailto:hello@techtweakers.com" className="hover:text-foreground transition-colors">hello@techtweakers.com</a>
             </div>
           </div>
        </div>
      </Section>
    </div>
  );
}

