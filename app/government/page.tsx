import type { Metadata } from "next";
import { JourneyRow } from "@/components/graphics/journey-row";
import { LocalFlow } from "@/components/graphics/local-flow";
import { NzMap } from "@/components/graphics/nz-map";
import { CtaTile } from "@/components/layout/cta-tile";
import { PageIntro, Section } from "@/components/layout/section";
import { StatsRow } from "@/components/layout/stats-row";
import { Reveal } from "@/components/motion/reveal";
import { photos } from "@/lib/photos";

export const metadata: Metadata = { title: "Government" };

const assurances = [
  {
    title: "Financial risk sits with us",
    body: "Trades are paid weekly by D&T regardless of when the client settles. No subcontractor exposure sits with the agency.",
  },
  {
    title: "Tried and tested",
    body: "Decades of insurance reinstatement, where scope, cost and timeline are audited on every claim.",
  },
  {
    title: "Real-time visibility",
    body: "Every job logged, photographed and reported. Progress and cost are visible without asking.",
  },
  {
    title: "One health and safety system",
    body: "Every Alliance member inducted into the same audited system on every site.",
  },
  {
    title: "Insured centrally",
    body: "Public liability and contract works cover held by D&T across all work.",
  },
  {
    title: "Capacity that scales",
    body: "A network of local trade businesses in every region, ready without a mobilisation gap.",
  },
];

export default function GovernmentPage() {
  return (
    <>
      <PageIntro
        tag="Government"
        photo={photos.government}
        title="Certainty for government and portfolio clients"
        lede="Public housing and public buildings need a partner who is accountable, transparent and already in the community. That is the model we have run for decades."
      />
      <div className="mx-auto max-w-7xl px-6">
        <StatsRow />
      </div>

      <Section tag="What you can rely on" title="Six things we put in writing">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {assurances.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.04}
              className="rounded-[2rem] bg-surface p-8"
            >
              <p className="display font-semibold text-accent-strong">
                0{i + 1}
              </p>
              <h3 className="display mt-3 font-semibold text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 text-muted">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        tile
        tag="Public money, spent locally"
        title="The contract builds capability where it is delivered"
        lede="Wages go to trades who live in the region. Materials come from local suppliers."
      >
        <LocalFlow />
      </Section>

      <Section tag="Every job, the same way" title="Five stages. No surprises.">
        <JourneyRow />
      </Section>

      <Section
        tile
        tag="Already in the community"
        title="Offices and trades in every region"
        lede="Work starts without a mobilisation gap."
      >
        <NzMap />
      </Section>

      <CtaTile
        title="Request a capability statement"
        lede="We will send the full statement, insurances and health and safety documentation."
        action="Contact us"
      />
    </>
  );
}
