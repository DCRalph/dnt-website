import type { Metadata } from "next";
import { AllianceRing } from "@/components/graphics/alliance-ring";
import { LocalFlow } from "@/components/graphics/local-flow";
import { CtaTile } from "@/components/layout/cta-tile";
import { PageIntro, Section, surface } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { allianceSupport, joining } from "@/lib/content";
import { photos } from "@/lib/photos";

export const metadata: Metadata = { title: "The Alliance" };

export default function AlliancePage() {
  return (
    <>
      <PageIntro
        photo={photos.alliance}
        title="Good tradespeople. Great businesses."
        lede="The Alliance is our network of more than 80 local trade crews. Members own their businesses and choose which of our jobs to take on. We bring the insurer work and take care of the scoping, pricing and paperwork."
      />

      <Section title="The work, without the admin around it">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <dl className="grid gap-6 sm:grid-cols-2">
            {allianceSupport.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <dt className="display font-semibold text-lg">{item.title}</dt>
                <dd className="mt-1 text-muted">{item.body}</dd>
              </Reveal>
            ))}
          </dl>
          <AllianceRing />
        </div>
      </Section>

      <Section
        tile
        title="Matched on experience and who's free"
        lede="When a job comes in, the regional manager offers it to the member best suited to it. You lead it from there and bring in your own subbies where you need them."
      >
        <LocalFlow />
      </Section>

      <Section
        title="Four steps to your first job"
        lede="We take on carpenters, joiners, plasterers, painters, plumbers, electricians, roofers and more. Specialist trades join our wider subcontractor pool."
      >
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {joining.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 0.04}
              className={`${surface.card} bg-surface`}
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
        title="Run your business. Leave the paperwork to us."
        lede="Talk to us about joining the Alliance in your region."
        action="Join the Alliance"
      />
    </>
  );
}
