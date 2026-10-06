import Link from "next/link";
import { House } from "@/components/graphics/house";
import { JobSheet } from "@/components/graphics/job-sheet";
import { CtaTile } from "@/components/layout/cta-tile";
import { Placeholder } from "@/components/layout/placeholder";
import {
  button,
  container,
  Section,
  surface,
} from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import {
  allianceSupport,
  archive,
  company,
  jobSizes,
  platform,
  scope,
  trades,
  yearsOperating,
} from "@/lib/content";
import { cn } from "@/lib/utils";

/* A slight lean on the trade tags and the polaroids, so they look pinned up
   rather than typeset. Cycles. */
const tilt = ["-rotate-2", "rotate-1", "", "-rotate-1", "rotate-2", ""];

export default function Home() {
  return (
    <>
      {/* Hero: the house drawing stands in for a photo. */}
      <section
        className={cn(
          container,
          "grid gap-12 pt-6 pb-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:pt-12",
        )}
      >
        <Reveal>
          <span className="display inline-block -rotate-6 rounded-lg border-[3px] border-accent-strong px-3 py-1.5 font-bold text-accent-strong text-sm uppercase tracking-[0.08em]">
            Make-safe · same day
          </span>
          <h1 className="display mt-6 font-semibold text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem]">
            {yearsOperating} years of fixing{" "}
            <span className="highlight">New Zealand houses.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg text-muted md:text-xl">
            We've been building in Wellington since {company.founded} and
            repairing insured homes since the seventies. Today that means a crew
            at the door the same day, a scope priced before they leave, and
            local tradespeople who own their businesses doing the work.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className={button.primary}>
              Send us a claim
            </Link>
            <Link href="/clients#homeowners" className={button.secondary}>
              Your insurer sent us?
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <House />
        </Reveal>
      </section>

      {/* Key to the numbers on the house, then the range of a job. */}
      <section className={cn(container, "pt-4 pb-10")}>
        <Reveal>
          <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6">
            {scope.map((item, i) => (
              <div
                key={item.title}
                className="grid grid-cols-[2.25rem_1fr] gap-3"
              >
                <span
                  className="display flex size-8 items-center justify-center rounded-full bg-accent font-bold text-background text-sm"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div>
                  <dt className="display font-semibold text-lg">
                    {item.title}
                  </dt>
                  <dd className="mt-1 text-muted text-sm">{item.body}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {jobSizes.map((item, i) => (
            <Reveal
              key={item.figure}
              delay={i * 0.05}
              className="rounded-2xl border-[1.5px] border-line border-dashed px-6 py-5"
            >
              <p className="display font-semibold text-4xl text-accent-strong">
                {item.figure}
              </p>
              <p className="mt-2 text-muted text-sm">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Section
        title="One visit. One job sheet. Nothing hidden on it."
        lede="A builder and a scoper go out together. The builder makes the house safe. The scoper records the damage on a ten-minute video call while the hub writes and prices the scope. By the time the van leaves, the insurer has a number."
      >
        <JobSheet />
      </Section>

      <Section title="Local trades who own their businesses.">
        <div
          data-tone="tile"
          className={cn(
            surface.block,
            "grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12",
          )}
        >
          <Reveal>
            <p className="max-w-xl text-lg">
              We don't carry a big payroll. We run the Alliance: more than
              eighty trade crews across the lower North Island and Canterbury,
              each one its own business, each one checked and signed up on the
              same agreement. When a job comes in, the regional manager offers
              it to the crew best placed to do it. They run it, bring in their
              own subbies, and get paid in the weekly pay run once it's signed
              off.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {trades.map((trade, i) => (
                <li
                  key={trade}
                  className={cn(
                    "rounded-[10px] bg-card px-3.5 py-2 font-medium ring-1 ring-line",
                    tilt[i % tilt.length],
                  )}
                >
                  {trade}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <ul className="divide-y divide-line border-line border-t">
              {allianceSupport.map((item) => (
                <li key={item.title} className="flex items-start gap-3 py-3.5">
                  <span
                    className="mt-2.5 size-2 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  <p>
                    <b className="font-semibold">{item.title}.</b> {item.body}
                  </p>
                </li>
              ))}
            </ul>
            <Link href="/alliance" className={cn(button.primary, "mt-6")}>
              Join the Alliance
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section
        title="Some of our work you've probably stood on."
        lede={`${company.founders} started the firm in Wellington as builders and decorators. Insurance work came in the seventies and took over by the 2000s. Still run by people who came up through the trades.`}
      >
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
          {archive.map((item, i) => (
            <Reveal key={item.when} delay={i * 0.06}>
              <div
                className={cn(
                  "bg-card p-3 pb-4 shadow-black/10 shadow-lg ring-1 ring-line",
                  tilt[i % tilt.length],
                )}
              >
                <Placeholder
                  label={item.photo}
                  className="aspect-square rounded-sm grayscale"
                />
                <p className="mt-3 px-0.5 text-sm leading-snug">
                  <b className="display font-semibold text-accent-strong">
                    {item.when}.
                  </b>{" "}
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        title="Our own software, built for this work."
        lede="Six tools written by our own developers sit on top of the job record. Insurers and homeowners log into the same job we do, and every action on it is logged with who did it and when."
      >
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {platform.map((tool, i) => (
            <Reveal
              key={tool.name}
              delay={i * 0.04}
              className="border-foreground border-t-2 pt-3"
            >
              <h3 className="display font-semibold text-2xl">{tool.name}</h3>
              <p className="mt-1 text-muted text-sm">{tool.short}</p>
            </Reveal>
          ))}
        </div>
        <Link
          href="/platform"
          className="mt-10 inline-block font-semibold text-accent-strong hover:underline"
        >
          See what each one does
        </Link>
      </Section>

      <CtaTile
        title="Got a claim for us?"
        lede="Insurer, adjuster, broker, agency or property manager. We'll run the first one and give you a login to watch it."
      />
    </>
  );
}
