import { Reveal } from "@/components/motion/reveal";
import { exampleJob, journey } from "@/lib/content";
import { cn } from "@/lib/utils";

/* A claim as a paper job sheet: one example job, every stage numbered, the
   first few ticked off. Reads from `journey` and `exampleJob`. */
export function JobSheet() {
  return (
    <Reveal className="relative rounded-md border-[1.5px] border-foreground bg-card px-5 py-7 shadow-[6px_6px_0_var(--surface)] md:px-10 md:py-9">
      {/* Rubber stamp over the top edge. */}
      <span
        className="display absolute -top-4 right-5 rotate-6 rounded-lg border-[3px] border-accent bg-card px-3 py-1.5 font-bold text-accent text-sm uppercase tracking-[0.08em] md:right-9"
        aria-hidden
      >
        {exampleJob.tier} · same day
      </span>
      <header className="border-foreground border-b-[1.5px] pb-3.5 font-mono text-xs">
        <p className="display font-semibold text-[22px]">
          Job {exampleJob.number}
        </p>
        <p className="mt-1">
          {exampleJob.where} · received {exampleJob.received} · homeowner called{" "}
          {exampleJob.called} · insurer and adjuster on file
        </p>
      </header>
      <ol>
        {journey.map((step, i) => {
          const done = i < exampleJob.done;
          return (
            <li
              key={step.title}
              className="grid grid-cols-[2.75rem_1fr] gap-x-4 gap-y-1 border-line border-b border-dashed py-4 md:grid-cols-[2.75rem_12.5rem_1fr] md:gap-4"
            >
              <span className="pt-1 font-mono text-[13px] text-accent-strong">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="display flex items-center gap-2 font-semibold text-lg">
                <span
                  role="img"
                  aria-label={done ? "Done" : "To do"}
                  className={cn(
                    "relative inline-block size-3.5 shrink-0 rounded-[3px] border-[1.5px] border-foreground",
                    done &&
                      "after:absolute after:top-0 after:left-[3px] after:h-[9px] after:w-[5px] after:rotate-[40deg] after:border-accent-strong after:border-r-2 after:border-b-2 after:content-['']",
                  )}
                />
                {step.title}
              </p>
              <p className="col-start-2 text-muted md:col-start-auto">
                {step.body}
              </p>
            </li>
          );
        })}
      </ol>
      <footer className="mt-4 flex justify-between gap-4 font-mono text-[11px] text-muted">
        <span>
          Followed by the insurer, the adjuster and the homeowner in Eden
        </span>
        <span>Example job</span>
      </footer>
    </Reveal>
  );
}
