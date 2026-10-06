import type { Metadata } from "next";
import { CtaTile } from "@/components/layout/cta-tile";
import {
  container,
  PageIntro,
  Section,
  surface,
} from "@/components/layout/section";
import { StatsRow } from "@/components/layout/stats-row";
import { Reveal } from "@/components/motion/reveal";
import { company } from "@/lib/content";
import { photos } from "@/lib/photos";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Who we work with" };

const clients = [
  {
    title: "Insurers",
    body: "Same-day make-safe, a priced scope on the day of the visit, and your jobs open to you in Eden.",
  },
  {
    title: "Loss adjusters and project managers",
    body: "We scope the smaller claims ourselves, raise variations with you as soon as we find them and report on the schedule you set.",
  },
  {
    title: "Brokers",
    body: "A building partner you can put your clients' claims in front of, knowing the work will be done properly and on time.",
  },
  {
    title: "Property managers",
    body: "Routine maintenance across your properties. When a claim comes in, the crew already knows the building.",
  },
  {
    title: "Government and public housing",
    body: "Work orders triaged around the clock, rates shown line by line, and reporting your contract managers can check for themselves.",
  },
  {
    title: "Homeowners",
    body: "Your insurer appoints us, but you're the one we deal with day to day. What to expect is below.",
  },
];

const reasons = [
  {
    title: "One visit",
    body: "Make-safe and scope happen at the same appointment, so the homeowner only waits in once.",
  },
  {
    title: "A reserve on the day",
    body: "The scope is priced against your rates the same day, not in a report a week later.",
  },
  {
    title: "Open-book costs",
    body: "Hours and supplier invoices are logged against the job, where you can see them.",
  },
  {
    title: "Capacity in a storm",
    body: "Around 100 jobs a day without calling in extra crews, run from two 24/7 dispatch hubs.",
  },
  {
    title: "Safety on every site",
    body: "Each job gets its own safety plan, and pre-start checks are signed off on site.",
  },
  {
    title: "A long record",
    body: `Reinstating insured homes since the 1970s, and building in Wellington since ${company.founded}.`,
  },
];

const homeowner = [
  {
    title: "We call you",
    body: "Within an hour of getting the claim, to book a time and check nobody is at risk.",
  },
  {
    title: "One visit",
    body: "A builder makes the house safe while a scoper records the damage. You only need to be home once.",
  },
  {
    title: "Follow it online",
    body: "You get a login to Eden, where you can see progress, photos and who's working on your home.",
  },
  {
    title: "Repaired and checked",
    body: "A local Alliance member does the repairs, and we check the work before we hand it back.",
  },
];

export default function ClientsPage() {
  return (
    <>
      <PageIntro
        photo={photos.government}
        title="On the panel for every major insurer in New Zealand"
        lede="Most of our work comes from insurers and the adjusters and brokers who manage claims for them. We also maintain homes for government agencies and property managers."
      />
      <div className={container}>
        <StatsRow />
      </div>

      <Section title="Who sends us work">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {clients.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.04}
              className={cn(surface.card, "bg-surface")}
            >
              <h3 className="display font-semibold text-2xl">{item.title}</h3>
              <p className="mt-2 text-muted">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        tile
        title="Why insurers use us"
        lede="Fewer visits, faster reserves and costs you can check line by line."
      >
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <dt className="display font-semibold text-lg">{item.title}</dt>
              <dd className="mt-1 text-muted">{item.body}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <Section
        id="homeowners"
        title="If your insurer has sent us"
        lede="What to expect once your claim reaches us."
      >
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {homeowner.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 0.04}
              className={cn(surface.card, "bg-surface")}
            >
              <p className="display font-semibold text-accent-strong">
                0{i + 1}
              </p>
              <h3 className="display mt-3 font-semibold text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 text-muted">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <CtaTile
        title="Talk to us about your claims"
        lede="Send us a few jobs, or ask us to walk you through how we'd handle your claims."
      />
    </>
  );
}
