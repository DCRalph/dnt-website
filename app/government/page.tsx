import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClaimJourney } from "@/components/graphics/claim-journey";
import { LocalFlow } from "@/components/graphics/local-flow";
import { NzMap } from "@/components/graphics/nz-map";
import { button, PageHero, Section } from "@/components/layout/section";
import { StatsBand } from "@/components/layout/stats-band";
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
      <PageHero
        photo={photos.government}
        title="Certainty for government and portfolio clients"
        lede="Public housing and public buildings need a partner who is accountable, transparent and already in the community. That is the model we have run for decades."
      />

      <StatsBand />

      <Section title="What you can rely on">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {assurances.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.024}
              className="rounded-2xl bg-card p-7 shadow-sm"
            >
              <span className="block size-2.5 rounded-full bg-accent" />
              <h3 className="mt-5 font-bold text-lg">{item.title}</h3>
              <p className="mt-2 text-muted">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        tone="sand"
        title="Public money, spent locally"
        lede="Wages go to trades who live in the region. Materials come from local suppliers. The contract builds capability in the community it serves."
      >
        <LocalFlow />
      </Section>

      <Section title="Every job, the same way">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <ClaimJourney />
          <Reveal className="lg:sticky lg:top-28">
            <Image
              src={photos.journey}
              alt=""
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-4/5 w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section
        tone="sand"
        title="Already in the community"
        lede="Offices and local trade businesses in every region, so work starts without a mobilisation gap."
      >
        <NzMap />
      </Section>

      <Section
        tone="orange"
        title="Request a capability statement"
        lede="We will send the full statement, insurances and health and safety documentation."
      >
        <Reveal>
          <Link href="/contact" className={button.primary}>
            Contact us
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
