import type { Metadata } from "next";
import { CtaTile } from "@/components/layout/cta-tile";
import { PageIntro, Section, surface } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { platform } from "@/lib/content";
import { photos } from "@/lib/photos";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Platform" };

const audit = [
  {
    title: "Every action logged",
    body: "Each change on a job is recorded with who made it and when.",
  },
  {
    title: "Open to testing",
    body: "Clients can have the platform independently tested whenever they want.",
  },
  {
    title: "Hosted in Australia",
    body: "Runs on Google Cloud in Sydney.",
  },
  {
    title: "Connects to yours",
    body: "Takes work from email, insurer portals or an API, and sends updates back the same way.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageIntro
        photo={photos.journey}
        title="We write our own software"
        lede="Our jobs run through tools that our in-house development team builds and supports. They were made for the way we work, and the insurer sees the same job record we do."
      />

      <Section
        title="In the order a job meets them"
        lede="From the moment a work order arrives to the day the client checks the final invoice."
      >
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {platform.map((tool, i) => (
            <Reveal
              key={tool.name}
              delay={i * 0.04}
              className={cn(surface.card, "bg-surface")}
            >
              <p className="font-semibold text-accent-strong text-sm">
                0{i + 1} · {tool.role}
              </p>
              <h3 className="display mt-3 font-semibold text-3xl">
                {tool.name}
              </h3>
              <p className="mt-3 text-muted">{tool.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tile title="Twice the scopes, no write-up afterwards">
        <div className="grid gap-4 md:grid-cols-3">
          <Reveal className={cn(surface.card, "bg-card")}>
            <p className="display font-semibold text-6xl text-accent-strong">
              8–10
            </p>
            <p className="mt-3 text-muted">
              Scopes a day from one person in the field.
            </p>
          </Reveal>
          <Reveal delay={0.04} className={cn(surface.card, "bg-card")}>
            <p className="display font-semibold text-6xl">4</p>
            <p className="mt-3 text-muted">
              Visits a day the same person managed before, plus about two hours
              per quote to write it up and price it.
            </p>
          </Reveal>
          <Reveal delay={0.08} className={cn(surface.card, "bg-card")}>
            <p className="display font-semibold text-6xl">~10 min</p>
            <p className="mt-3 text-muted">
              A typical walk-through. The scope is finished and priced before
              the call ends.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section
        title="Nothing a client can't check"
        lede="Insurers and adjusters log in to the same jobs we work on. Nobody has to drive out to the property to see how it's going."
      >
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audit.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <dt className="display font-semibold text-lg">{item.title}</dt>
              <dd className="mt-1 text-muted">{item.body}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <CtaTile
        title="Want to see it working?"
        lede="We're happy to walk insurers, adjusters and agencies through a live job."
        action="Book a walkthrough"
      />
    </>
  );
}
