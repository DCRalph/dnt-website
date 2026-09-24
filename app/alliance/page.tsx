import type { Metadata } from "next";
import { AllianceRing } from "@/components/graphics/alliance-ring";
import { LocalFlow } from "@/components/graphics/local-flow";
import { CtaTile } from "@/components/layout/cta-tile";
import { PageIntro, Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { allianceSupport, memberQuotes } from "@/lib/content";
import { photos } from "@/lib/photos";

export const metadata: Metadata = { title: "The Alliance" };

/* What the member portal will offer. Listed now so the brief is visible on the
   page; the portal itself needs a backend and is not part of this static site. */
const portal = [
  "Order gear and uniform",
  "Download help material and procedures",
  "Keep tickets and certifications current",
  "Request assistance or leave feedback, one to one",
];

export default function AlliancePage() {
  return (
    <>
      <PageIntro
        tag="The Alliance"
        photo={photos.alliance}
        title="Good tradespeople. Great businesses."
        lede="The best trades are not always the best at running a business, and they should not have to be. Alliance members own their business and do the work. We carry the rest."
      />

      <Section
        tag="What we carry"
        title="Everything that gets in the way of the work"
      >
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
        tag="Paid weekly"
        title="Invoice nobody. Wait for nobody."
        lede="D&T pays weekly and carries the risk between the job and the settlement."
      >
        <LocalFlow />
      </Section>

      <Section
        tag="Why members stay"
        title="Very low churn, for a reason"
        lede="Steady work, professional backing and corporate clients a small outfit could not reach alone."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {memberQuotes.map((item, i) => (
            <Reveal
              key={item.who}
              delay={i * 0.06}
              className="rounded-[2rem] bg-surface p-8"
            >
              <span className="display font-semibold text-6xl text-accent leading-none">
                “
              </span>
              <p className="display mt-2 font-medium text-2xl">{item.quote}</p>
              <p className="mt-6 font-semibold text-accent-strong">
                {item.who}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        tile
        tag="Member portal"
        title="Coming soon for members"
        lede="One login for gear, help material, tickets and a direct line to us."
      >
        <Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {portal.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-card px-5 py-4 font-medium"
              >
                <span className="size-2 rounded-full bg-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <CtaTile
        title="Own your business. Leave the rest to us."
        lede="Talk to us about joining the Alliance in your region."
        action="Join the Alliance"
      />
    </>
  );
}
