import { Section } from "@/components/layout/Section";
import Link from "next/link";
import {
  Coins,
  MessageSquare,
  Check,
  TrendingDown,
  Egg,
  Bird,
  ShieldCheck,
  Vault,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harvest — Golden Hen Suite | Tech Tweakers",
  description:
    "Harvest volatility. An autonomous SOL accumulator on Solana, built on XCT — determinism executes, the model supervises, and the books reconcile against the blockchain, cent for cent.",
};

const mechanics = [
  {
    step: "01 · seed",
    icon: TrendingDown,
    title: "Seeds into the dip",
    body: "SOL climbs, the hen seeds it into the market — waiting to harvest it back cheaper. The engine of the whole cycle.",
  },
  {
    step: "02 · incubate",
    icon: Egg,
    title: "Incubates what didn't fill",
    body: "A seed that times out doesn't die — it goes to the incubator, watching for the price to return to its mark. Zero cost, capital free.",
  },
  {
    step: "03 · hatch",
    icon: Bird,
    title: "Hatches when it returns",
    body: "Price hits the original mark — the egg hatches, the position reverses, SOL recovered. A late harvest, not a loss.",
  },
  {
    step: "04 · harvest",
    icon: Coins,
    title: "Harvests the turn, keeps the SOL",
    body: "On the way up, idle USDC is harvested into SOL — and stays SOL. No flip back. The stack grows.",
  },
];

const sweepers = [
  {
    tag: "SOL sweeper",
    icon: Bird,
    title: "Crystallizes SOL above the line",
    body: "A background loop watches the wallet's total in SOL-equivalent against the run's baseline. Everything above it is real gain — swept as native SOL into the savings vault. The transfer fee comes out of the sweep itself, never the trading wallet.",
  },
  {
    tag: "USDC sweeper",
    icon: Vault,
    title: "Crystallizes USDC above the line",
    body: "Same principle, in dollars. When USDC sits above baseline plus open reserves, the excess is swept to the vault. The operational wallet always returns to its baseline — only the surplus leaves. Protects on the way down, keeps the gain.",
  },
];

const ledger = [
  { label: "win", note: "realized", value: "+$1.4643", tone: "pos" },
  { label: "hold", note: "retained SOL", value: "+$0.2395", tone: "pos" },
  { label: "drf", note: "composition", value: "−$0.5787", tone: "neg" },
  { label: "pnd", note: "open positions", value: "−$0.7119", tone: "neg" },
  { label: "frc", note: "friction", value: "−$0.3169", tone: "neg" },
];

const proofPoints = [
  {
    title: "Two independent paths agree",
    body: "Top-down (residual of the equation) and bottom-up (measured cost per trade) converge. When they match, the friction is real — no hidden leak.",
  },
  {
    title: "The ruler is SOL, not the dollar",
    body: "Net worth measured in SOL-equivalent, frozen at baseline price. A dollar figure falling while SOL falls isn't a loss — it's the ruler shrinking.",
  },
  {
    title: "Not a promise of profit",
    body: "It's a machine that captures volatility and sometimes pays a toll to exist. Honest by construction — the bad days show too.",
  },
];

const stack = [
  "Go",
  "XCT Protocol",
  "Jupiter / Raydium",
  "Solana",
  "Kubernetes",
  "Self-custody",
  "Pyth",
];

export default function HenPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Coins className="mr-2 h-4 w-4" />
            Golden Hen Suite · Harvest Engine
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
            Harvest — a SOL accumulator that never lies about the books.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            The market chops. The hen harvests. An autonomous SOL accumulator on
            Solana that turns volatility into <em>more SOL</em> — not a bet on
            direction. Built on XCT, running self-custody, and honest enough to
            reconcile its ledger against the blockchain, cent for cent.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Talk to Us
            </Link>
            <Link
              href="#how"
              className="inline-flex items-center justify-center rounded-md border bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              See how it works
            </Link>
          </div>
        </div>
      </Section>

      {/* The arc v1 -> v2 */}
      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">
              Product evolution
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              The hen learned to fly on its own.
            </h2>
          </div>

          <div className="space-y-6">
              <div className="relative border-l-2 border-border pl-8">
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-muted-foreground bg-background" />
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  v1 · the model in the loop
                </div>
                <h3 className="text-lg font-semibold mt-1 mb-2">
                  XCT, classic — the model proposed each trade.
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The model looked at context and proposed one action; the system
                  validated; deterministic tools executed on-chain. It worked, and
                  it proved the thesis. But the model sat on the critical path —
                  costly, and one more thing that could go wrong.
                </p>
              </div>

              <div className="relative border-l-2 border-transparent pl-8">
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-primary bg-primary ring-4 ring-primary/20" />
                <div className="text-xs font-bold uppercase tracking-wider text-primary">
                  v2 · the model stepped out
                </div>
                <h3 className="text-lg font-semibold mt-1 mb-2">
                  Determinism took the wheel. The model became the supervisor.
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  When the domain is modeled well, the model doesn&apos;t need to
                  be in the hot path. Now price and regime propose, a deterministic
                  pipeline validates, and deterministic tools execute the swap
                  on-chain. The model was <em>promoted</em>: it watches the signals
                  and raises alerts — copilot, not pilot.{" "}
                  <strong className="text-foreground">
                    Dramatically cheaper, safer, and the books still close.
                  </strong>
                </p>
              </div>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section id="how">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">
              How it works
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              A machine that captures volatility, egg by egg.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              The hen isn&apos;t a bot that bets on direction — it&apos;s a pump
              that accumulates SOL from the market&apos;s chop. It seeds into the
              highs and harvests back cheaper; harvests idle USDC into SOL on the
              way up and <em>keeps</em> it. Each move only has to happen without a
              loss — the result comes from the accumulation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {mechanics.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.step}
                  className="rounded-lg border bg-card p-6 space-y-3"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-xs font-mono text-muted-foreground">
                    {m.step}
                  </div>
                  <h4 className="font-semibold">{m.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {m.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* The vault — sweepers */}
      <Section className="bg-muted/30">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">
              The vault
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              The gain doesn&apos;t stay in the line of fire.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Accumulating isn&apos;t enough — the surplus has to be put away. Two
              independent sweepers run in the background, watching the wallet
              against the run&apos;s baseline. Whatever sits above the line is real
              gain, and it gets crystallized into a savings vault — out of the
              trading wallet, safe from the next dip. The operational wallet always
              returns to baseline; only the excess leaves.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {sweepers.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.tag}
                  className="rounded-lg border bg-card p-6 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">
                      {s.tag}
                    </span>
                  </div>
                  <h4 className="font-semibold">{s.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.body}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="rounded-lg border border-dashed bg-card/50 p-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
              <Vault className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold">Treasury</h4>
                <span className="text-[10px] font-mono uppercase tracking-wider rounded bg-muted px-2 py-0.5 text-muted-foreground">
                  coming soon
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The vault isn&apos;t the end of the line. A sibling engine takes
                over the savings and manages it like a treasurer — preserving the
                crystallized stack and putting even the saved SOL to work. Two
                engines, one suite: Harvest grows it, Treasury guards it.
              </p>
            </div>
          </div>

          <p className="text-center text-sm font-mono text-muted-foreground">
            the sweep is the product — the result is on-chain, not in a P&amp;L
            line.
          </p>
        </div>
      </Section>

      {/* The proof — books that close */}
      <Section className="bg-muted/30">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">
              The proof
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Books that close with the blockchain.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Anyone can claim a number. The hen proves it: every run&apos;s wealth
              change decomposes into a four-term equation that reconciles against
              on-chain reality — down to a gas-and-dust gap of cents. If the model
              could grant itself authority and act wrong, the books wouldn&apos;t
              close. They close because determinism holds.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl border bg-card overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3.5 border-b bg-muted font-mono text-xs text-muted-foreground">
                <span>run ledger · FX-neutral</span>
                <span>SOL-first</span>
              </div>
              <div className="px-5 py-4 font-mono text-sm space-y-1">
                {ledger.map((r) => (
                  <div key={r.label} className="flex justify-between py-1">
                    <span className="text-muted-foreground">
                      {r.label}{" "}
                      <span className="opacity-60">{r.note}</span>
                    </span>
                    <span
                      className={
                        r.tone === "pos" ? "text-green-500" : "text-red-500"
                      }
                    >
                      {r.value}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between border-t mt-2 pt-3 font-semibold">
                  <span className="text-muted-foreground">
                    = reconciles vs chain
                  </span>
                  <span className="text-primary">gas + dust</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {proofPoints.map((p) => (
                <div key={p.title} className="flex gap-3">
                  <span className="flex-shrink-0 mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-green-500/15 text-green-500">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <strong className="block text-[15px] mb-0.5">
                      {p.title}
                    </strong>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {p.body}
                    </span>
                  </div>
                </div>
              ))}
              <div className="flex flex-wrap gap-2 pt-2">
                {stack.map((t) => (
                  <span
                    key={t}
                    className="bg-muted px-2.5 py-1 rounded text-xs font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Limited beta / waitlist */}
      <Section>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">
            Limited beta
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-balance">
            Run your own Harvest.
          </h2>
          <p className="text-lg text-muted-foreground">
            A sealed, self-custody engine — your box, your wallet, your keys. We
            never touch your money. Onboarding is manual and done directly with the
            team, one box at a time, so each deployment stays isolated and secure.
          </p>
          <div className="flex justify-center pt-2">
            <span className="inline-flex items-center justify-center rounded-md border border-primary/30 bg-primary/5 px-8 py-3 text-sm font-medium text-primary">
              Coming soon
            </span>
          </div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground pt-4">
            <ShieldCheck className="h-4 w-4" />
            <span className="text-primary font-bold">10</span> slots · manual
            onboarding · self-custody by design
          </div>
        </div>
      </Section>
    </div>
  );
}
