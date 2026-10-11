import { Section } from "@/components/layout/Section";
import Link from "next/link";
import {
  Pickaxe,
  MessageSquare,
  Check,
  TrendingDown,
  Egg,
  Bird,
  ShieldCheck,
  Vault,
  Hand,
  X,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miner — Golden Hen Suite | Tech Tweakers",
  description:
    "Mine SOL from volatility. A non-custodial, market-neutral engine on Solana that sells into strength, rebuys into weakness, and knows when to stop. Validated on-chain across a full market cycle — zero capital bleed.",
};

const mechanics = [
  {
    step: "01 · sell",
    icon: TrendingDown,
    title: "Sells into strength",
    body: "Price climbs, the engine sells SOL into the move — to rebuy it back cheaper on the turn. The pickaxe of the whole operation.",
  },
  {
    step: "02 · incubate",
    icon: Egg,
    title: "Incubates what didn't fill",
    body: "A position that doesn't close on time doesn't die — it waits in the incubator for the price to return to its mark. Zero cost, capital free.",
  },
  {
    step: "03 · rebuy",
    icon: Bird,
    title: "Rebuys when it returns",
    body: "Price hits the original mark — the position reverses, SOL recovered cheaper than it was sold. A late harvest, not a loss.",
  },
  {
    step: "04 · crystallize",
    icon: Pickaxe,
    title: "Crystallizes the spread",
    body: "Every completed round-trip leaves a spread behind. That surplus is swept off the table into an on-chain vault — mined ore, stored.",
  },
];

const competitors = [
  { feature: "Runs on Solana", grid: false, hen: true },
  { feature: "Non-custodial (your keys)", grid: "some", hen: true },
  { feature: "Knows when to stop", grid: false, hen: true },
  { feature: "No fixed price range to break", grid: false, hen: true },
  { feature: "Live on-chain for 9+ months", grid: false, hen: true },
];

const sweepers = [
  {
    tag: "USDC sweeper",
    icon: Vault,
    title: "Crystallizes the surplus",
    body: "A background loop watches the wallet's total against the run's baseline. Whatever sits above the line is real, realized gain — swept into the savings vault, out of the line of fire. The operational wallet always returns to baseline; only the excess leaves.",
  },
  {
    tag: "composition rescue",
    icon: Bird,
    title: "Keeps the wallet ready",
    body: "An independent loop keeps the wallet's SOL/USDC balance aligned to the regime — enough SOL to ride an upswing, enough USDC to rebuy on the dip. The engine arrives at every opportunity with ammunition, instead of caught empty.",
  },
];

const proofPoints = [
  {
    title: "Survived a full market cycle",
    body: "Climb, drop, and a tight 8-day lateral — a stretch that drained earlier runs. This one bled nothing: it sat still through the chop and harvested the turn. The cycle is the ruler, not the good day.",
  },
  {
    title: "The ruler is SOL, not the dollar",
    body: "Net worth measured in SOL-equivalent against baseline. A dollar figure falling while SOL falls isn't a loss — it's the ruler shrinking. The question is simple: more SOL at the end, or not.",
  },
  {
    title: "Not a promise of profit",
    body: "It's a machine that mines volatility and sometimes pays a toll to exist. Honest by construction — the quiet days, where it does nothing on purpose, show too.",
  },
];

const stack = [
  "Go",
  "XCT Protocol",
  "Jupiter",
  "Solana",
  "Kubernetes",
  "Self-custody",
  "Pyth",
];

export default function HenPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <Section className="bg-linear-to-br from-primary/5 via-background to-background py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Pickaxe className="mr-2 h-4 w-4" />
            Golden Hen Suite · Mining Engine
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
            Miner — it mines SOL from volatility, and knows when to stop.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Not a bot that bets on direction. A non-custodial engine on Solana
            that sells into strength, rebuys into weakness, and crystallizes
            each spread on-chain. The difference from every grid bot:{" "}
            <em>when it&apos;s mining against the grain, it waits</em> — instead
            of bleeding into the trend.
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

      {/* The one thing — it knows when to stop */}
      <Section className="bg-linear-to-br from-primary/10 via-muted/40 to-muted/20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">
              The one thing
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Every grid bot has the same flaw. This one doesn&apos;t.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-card p-7 space-y-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                <X className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-[15px]">
                A grid bot never stops
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                It works beautifully in a choppy market and bleeds badly in a
                trend — it keeps selling into a rally, piling up stuck positions
                until the wallet is dry. Their own builders admit it: grids
                aren&apos;t passive income, they only work sideways.
              </p>
            </div>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-7 space-y-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Hand className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-[15px]">Miner reads itself</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                When its own positions start piling up unclosed, that&apos;s an
                internal signal it&apos;s mining against the tide. So it freezes
                — opens nothing, preserves capital, and waits for the market to
                turn. No fixed range to break out of. It reacts to what has
                already happened to <em>itself</em>, not to a prediction.
              </p>
            </div>
          </div>

          <p className="text-center text-sm font-mono text-muted-foreground">
            a hen with eggs doesn&apos;t wander off to forage — it sits and
            waits. the behavior wasn&apos;t designed. it emerged.
          </p>
        </div>
      </Section>

      {/* How it works */}
      <Section
        className="bg-linear-to-br from-primary/5 via-background to-background"
        id="how"
      >
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">
              How it works
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              A machine that mines volatility, move by move.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Miner doesn&apos;t predict direction — it extracts SOL from the
              market&apos;s movement itself. It sells into the highs and rebuys
              cheaper on the turn, and keeps the ammunition ready for the next
              swing. Each move only has to happen without a loss — the result
              comes from the accumulation, not from being right.
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
      <Section className="bg-linear-to-br from-primary/10 via-muted/40 to-muted/20 ">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">
              The vault
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              The ore doesn&apos;t stay in the line of fire.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Mining isn&apos;t enough — the surplus has to be stored. Two
              independent loops run in the background: one crystallizes realized
              gain into a savings vault, the other keeps the working wallet in
              the right SOL/USDC balance for the current regime. Grow it, store
              it, stay ready.
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
                over the savings and manages it like a treasurer — preserving
                the crystallized stack and putting even the saved capital to
                work. Two engines, one suite: Miner grows it, Treasury guards
                it.
              </p>
            </div>
          </div>

          <p className="text-center text-sm font-mono text-muted-foreground">
            the vault is the product — the result is on-chain, not in a
            P&amp;L line.
          </p>
        </div>
      </Section>

      {/* The proof */}
      <Section className="bg-linear-to-br from-primary/5 via-background to-background ">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">
              The proof
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Not a backtest. Not a promise. A run.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Anyone can claim a number. Miner proves it on-chain: every move is
              a real swap, every sweep a real transaction, the whole ledger
              reconcilable against the blockchain down to a gas-and-dust gap of
              cents. It has run live, with real capital, through bull, bear, and
              lateral — not a demo that never faced the market.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Comparison table */}
            <div className="rounded-xl border bg-card overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3.5 border-b bg-muted font-mono text-xs text-muted-foreground">
                <span>vs. the typical grid bot</span>
                <span>on-chain</span>
              </div>
              <div className="divide-y">
                {competitors.map((c) => (
                  <div
                    key={c.feature}
                    className="flex items-center justify-between px-5 py-3 text-sm"
                  >
                    <span className="text-muted-foreground pr-4">
                      {c.feature}
                    </span>
                    <span className="flex items-center gap-4 shrink-0 font-mono text-xs">
                      <span className="w-14 text-center">
                        {c.grid === true ? (
                          <Check className="h-4 w-4 text-green-500 inline" />
                        ) : c.grid === "some" ? (
                          <span className="text-muted-foreground">some</span>
                        ) : (
                          <X className="h-4 w-4 text-red-500/60 inline" />
                        )}
                      </span>
                      <span className="w-14 text-center">
                        <Check className="h-4 w-4 text-primary inline" />
                      </span>
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-end px-5 py-2.5 gap-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground bg-muted/40">
                  <span className="w-14 text-center">grid</span>
                  <span className="w-14 text-center text-primary">miner</span>
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

      {/* Contact */}
      <Section className="bg-linear-to-br from-primary/10 via-muted/40 to-muted/20">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">
            Built it. Ran it. Want to see?
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-balance">
            We made something a little absurd.
          </h2>
          <p className="text-lg text-muted-foreground">
            A sealed, self-custody engine — the key lives only in the runtime,
            we never touch your money, and the whole ledger is on-chain. If that
            sounds interesting, say hi.
          </p>
          <div className="flex justify-center pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Talk to Us
            </Link>
          </div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground pt-4">
            <ShieldCheck className="h-4 w-4" />
            self-custody by design · the key never leaves the box
          </div>
        </div>
      </Section>
    </div>
  );
}
