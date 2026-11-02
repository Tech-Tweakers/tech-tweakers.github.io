import { Section } from "@/components/layout/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lab notes | Tech Tweakers",
  description:
    "Things we measured while running language models on our own hardware, with how many runs each one rests on.",
};

function Note({
  id,
  meta,
  title,
  children,
}: {
  id: string;
  meta: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article id={id} className="scroll-mt-24 rounded-2xl border bg-card p-7 md:p-8">
      <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
        {meta}
      </span>
      <h2 className="mt-4 text-2xl font-bold tracking-tight">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
        {children}
      </div>
    </article>
  );
}

export default function LabPage() {
  return (
    <Section className="bg-linear-to-br from-primary/5 via-background to-background py-16 md:py-24">
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Lab notes
        </h1>
        <p className="text-lg text-muted-foreground">
          Things we measured while running this stack. Each note says how many
          runs it rests on, because most of them rest on one.
        </p>
      </div>

      <div className="mx-auto max-w-3xl space-y-6">
        <Note
          id="audit"
          meta="Model selection · November 2026 · one run per model, one repository"
          title="Three models, one audit"
        >
          <p>
            We gave three open-weight models the same task: audit a real Go
            codebase, find what is wrong, and say what you could not measure.
            Each ran once, so read this as an anecdote with numbers.
          </p>
          <p>
            Qwen3.6-35B-A3B made 61 tool calls over about 30 minutes, used up
            to 92k tokens of context without compacting, and reported 17
            findings. Roughly three of them held up when we checked. It also
            delegated part of the work to a sub-agent and then confronted that
            agent’s data with its own.
          </p>
          <p>
            gpt-oss-20b was the fastest, at about 36 tokens per second. It
            finished in 159 seconds with 24 tool calls and no sub-agents,
            opened four files, reported no findings, and wrote that nothing had
            gone unmeasured, which was false. It is stable and good for short
            jobs. It is a shallow auditor.
          </p>
          <p>
            LFM2.5-24B-A2B decided Go was not installed when it was only
            missing from the PATH, tried to apt-get it, and read the README
            instead of the code. Its speed matched Qwen’s, about 29 tokens per
            second, so the gap is in behavior and not in hardware. One caveat:
            we ran it with the sampling settings we use for Qwen, not the ones
            its authors recommend, so its result may be understated.
          </p>
          <p>
            The shell the agent runs in has no root, and that is what stopped
            the apt-get. We stay on Qwen3.6.
          </p>
        </Note>

        <Note
          id="compaction"
          meta="Agent context · autumn 2026 · measured on a simulated run and one live run"
          title="We stopped summarising"
        >
          <p>
            Our agent kept losing the thread after auto-compaction. We rewrote
            the summary prompt four times over two days and nothing changed.
          </p>
          <p>
            What worked was not summarising at all. A deterministic step blanks
            the content of old tool results, with no model involved. On a
            simulated reconnaissance it freed 79% of the context, and in a live
            run the growth per four messages fell from about 4,600 tokens to
            about 266.
          </p>
        </Note>

        <Note
          id="context-size"
          meta="Agent context · one model, one task type"
          title="The best compaction is the one that never fires"
        >
          <p>
            The same Qwen3.6-35B-A3B that compacted four times and re-read
            files at 32.8k tokens did a full reconnaissance plus a runtime bug
            hunt in one turn when we gave it 112k, ending at 82.1k. At 128k of
            context the model used about 6 GB of the card’s 12.
          </p>
          <p>
            Before tuning any compaction setting, check that the context window
            is as large as your VRAM allows.
          </p>
        </Note>

        <Note
          id="same-model"
          meta="Serving · 21 July 2026 · one experiment, one model"
          title="Same model, same machine, different prompt"
        >
          <p>
            We served the same Qwen3.5-9B (Q8) on the same machine to the same
            agent client, twice. Through our own serving layer of the time,
            which built the ChatML prompt by hand, flattened the chat roles and
            parsed tool calls out of plain text, the run was unstable: empty
            decodes, echoes, a stream that hung.
          </p>
          <p>
            Through llama-server, using the model’s own chat template and
            native tool calls, it was clean and the agent started building a
            service. The weights were the same and so was the llama.cpp
            underneath. The difference was how the prompt ended and how tool
            calls were formatted.
          </p>
          <p>
            After that we stopped maintaining our own engine. What we run now
            is an orchestrator around llama-server: routing, hot model swap,
            sessions. The inference itself is someone else’s, and better kept
            up than we would manage.
          </p>
        </Note>

        <Note
          id="prompt-placement"
          meta="Agent prompts · September 2026 · a handful of runs on one task"
          title="Where an instruction lands"
        >
          <p>
            An instruction in the user message outweighed the same rule in the
            system prompt. With “always validate your conclusions with data”
            only in the system prompt and in the skills, earlier runs still got
            a constant wrong and inverted a mechanism. Put in the user message,
            the next answer had every constant and file reference verified.
          </p>
          <p>
            We now put per-task rigour in the prompt, procedure in skills and
            facts in the project notes. It is one task and a few runs, so treat
            it as a habit that worked for us, not a law.
          </p>
        </Note>

        <Note
          id="disk"
          meta="Operations · 1 November 2026 · one incident"
          title="Disk at 89% and the image that vanished"
        >
          <p>
            After a reboot our inference pod went into ImagePullBackOff, with
            the image sitting right there in Docker. k3s keeps its own image
            store in containerd, separate from Docker, and the kubelet
            garbage-collects images that have no running pod once the disk
            passes 85%. The root disk was at 89%, and the k3s log says so every
            five minutes.
          </p>
          <p>
            We cleared about 50 GB of Docker build cache, and we never run{" "}
            <code className="font-mono text-[0.9em]">docker image prune -a</code>{" "}
            on that machine. We have not proven that the garbage collector
            removed that specific image. The timing and the log make it the
            strong suspect. Two image imports run at the same time also hung;
            one on its own takes about two minutes.
          </p>
        </Note>
      </div>
    </Section>
  );
}
