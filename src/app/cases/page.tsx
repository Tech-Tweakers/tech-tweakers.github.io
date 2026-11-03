import { Section } from "@/components/layout/Section";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Coins,
  Gauge,
  LifeBuoy,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cases | Tech Tweakers",
  description:
    "How we moved a trading platform to a setup that grows with demand, costs a fraction as much to run, and can be rebuilt from code in about two hours.",
};

type Stat = { value: string; label: string; note: string };

function Stats({ items }: { items: Stat[] }) {
  return (
    <div className={`grid gap-4 ${items.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
      {items.map((s) => (
        <div key={s.label} className="rounded-lg border bg-background p-5 space-y-1">
          <div className="text-3xl font-bold tracking-tight">{s.value}</div>
          <div className="text-sm font-medium">{s.label}</div>
          <div className="text-xs text-muted-foreground">{s.note}</div>
        </div>
      ))}
    </div>
  );
}

function Points({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg flex items-center gap-2">
        <Icon className="h-5 w-5 text-primary" />
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function CasesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section className="bg-linear-to-br from-primary/5 via-background to-background py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Cases
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Work we did for others, with the results and with what went wrong.
            We say what each number is based on. Both cases below are from the
            same client, a crypto trading platform, in the same two weeks.
          </p>
        </div>
      </Section>

      {/* Case 1 — cost and growth */}
      <Section className="bg-linear-to-br from-primary/10 via-muted/40 to-muted/20 py-20">
        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
          <div className="p-8 md:p-10 border-b bg-muted/20 space-y-4">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <Coins className="mr-2 h-4 w-4" />
              Cost and growth · 2026
            </div>
            <h2 className="text-3xl font-bold">
              A platform that costs less and grows with its users
            </h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              The platform was running on a handful of servers that were mostly
              idle, and that could not safely take a sudden wave of users. The
              company was about to launch. They needed it to cost less and to
              handle growth without anyone watching it. We moved it to managed
              Kubernetes on DigitalOcean (DOKS), a setup that adds and removes
              capacity on its own, in about two weeks of focused work.
            </p>
          </div>

          <div className="p-8 md:p-10 space-y-10">
            <Stats
              items={[
                {
                  value: "−83%",
                  label: "cost of the first environment we moved",
                  note: "from $144 to $24 a month in servers",
                },
                {
                  value: "1 → 10",
                  label: "copies of the app, on its own",
                  note: "Kubernetes added them under load and removed them afterwards",
                },
              ]}
            />

            <div className="grid md:grid-cols-2 gap-10">
              <Block icon={ShieldCheck} title="What we did">
                <Points
                  items={[
                    "Measured what the old servers really used before choosing anything, and sized the new setup from that",
                    "Moved the services one at a time onto a managed Kubernetes cluster (DigitalOcean DOKS), and switched the old servers off only after the new ones had proven themselves",
                    "Set Kubernetes to add copies of the app, and servers, when demand rises and remove them when it drops, so it only pays for what it uses",
                    "Left the system closed to the public by default, accepting only traffic that comes through the company’s protection layer",
                  ]}
                />
              </Block>

              <Block icon={Gauge} title="What the results are based on">
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Cost.</strong> The
                    first environment we moved ran on four servers that were
                    about 6% used, at $144 a month. After the move, the same
                    services ran on a single Kubernetes node at $24 a month. Counting the
                    extra piece that receives the traffic, the saving is closer
                    to 75%. These are published prices against what we measured,
                    not a closed invoice, and they cover that one environment.
                    The others were sized with extra room on purpose for the
                    launch, to be trimmed once there is real traffic to size
                    them by.
                  </p>
                  <p>
                    <strong className="text-foreground">Growth.</strong> We ran
                    one 10-minute test with a flood of simulated alerts. Kubernetes
                    added copies of the app on its own, from 1 to 10, and
                    servers from 1 to 6, and the platform handled about 520
                    thousand alerts, and when it reached its limit it turned the
                    excess away politely instead of crashing. It is one test, so
                    it shows how the system behaves, not how much it can take in
                    real use.
                  </p>
                </div>
              </Block>
            </div>
          </div>
        </div>
      </Section>

      {/* Case 2 — resilience */}
      <Section className="bg-linear-to-br from-primary/5 via-background to-background py-20">
        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
          <div className="p-8 md:p-10 border-b bg-muted/20 space-y-4">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <LifeBuoy className="mr-2 h-4 w-4" />
              Resilience · 2026
            </div>
            <h2 className="text-3xl font-bold">
              Rebuilt in two hours, and safer than before
            </h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Everything the platform runs on, the Kubernetes cluster included,
              is written down as code, so it can be reviewed, repeated and
              rebuilt. We found out how well that works the hard way: one of
              the clusters was deleted by mistake, and we brought it back from
              the code. It went smoothly because we had built it to be rebuilt:
              the cluster and the databases are written as Terraform, and every
              service has its own solid pipeline that builds and deploys it
              from scratch. Recovery meant running them again, not fixing
              things by hand.
            </p>
          </div>

          <div className="p-8 md:p-10 space-y-10">
            <Stats
              items={[
                {
                  value: "~2 h",
                  label: "to rebuild everything",
                  note: "a real incident, not a drill",
                },
                {
                  value: "0",
                  label: "data lost",
                  note: "the data lived outside what was deleted",
                },
              ]}
            />

            <div className="grid md:grid-cols-2 gap-10">
              <Block icon={TriangleAlert} title="What went wrong">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  During a routine update, an old change was out of date while
                  the cloud provider had also upgraded Kubernetes on its own.
                  The two disagreed, and the update deleted the cluster instead
                  of adjusting it. All five services were back, running, about
                  two hours later. Then we fixed the cause, so that a routine
                  update can no longer delete the cluster.
                </p>
              </Block>

              <Block icon={ShieldCheck} title="What we changed afterwards">
                <Points
                  items={[
                    "Automatic Kubernetes upgrades from the provider are switched off. Upgrades are now a deliberate step, tried first and applied in a planned window",
                    "Bad settings are caught before they can reach production",
                    "Changes reach production through a path with checks. Nothing goes live on its own: it needs two people to approve and a deliberate confirmation",
                    "Monitoring lives outside the platform it watches, so it keeps working when the platform doesn’t",
                  ]}
                />
              </Block>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t bg-linear-to-br from-primary/10 via-muted/40 to-muted/20">
        <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Need your systems to hold up as you grow?
          </h2>
          <Link
            href="/contact"
            className="group inline-flex items-center text-primary font-medium hover:underline"
          >
            Talk to us{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
