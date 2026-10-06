import type { Metadata } from "next";
import Image from "next/image";
import { CtaTile } from "@/components/layout/cta-tile";
import { PageIntro, Section, surface } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import {
  company,
  milestones,
  partnership,
  yearsOperating,
} from "@/lib/content";
import { photos, servicePhotos } from "@/lib/photos";

export const metadata: Metadata = { title: "Our story" };

export default function AboutPage() {
  return (
    <>
      <PageIntro
        photo={photos.about}
        title={`${yearsOperating} years of building in New Zealand`}
        lede={`${company.founders} started ${company.name} in Wellington in ${company.founded}. We did our first insurance repair in the 1970s and have finished more than 10,000 jobs since.`}
      />

      <Section title="From a Wellington builder to a national network">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <ol className="grid gap-6">
            {milestones.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.03}>
                <li className="grid grid-cols-[5rem_1fr] gap-4">
                  <p className="display font-semibold text-accent-strong text-xl">
                    {item.year}
                  </p>
                  <p className="text-lg">{item.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal className="lg:sticky lg:top-32">
            <Image
              src={servicePhotos.reinstatement}
              alt=""
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-4/3 w-full rounded-3xl object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section
        title={`Going national with ${partnership.name}`}
        lede={`${partnership.name} has flooring stores and showrooms across the country. We're setting up a base in each one, and their installers are joining the Alliance.`}
      >
        <ol className="grid gap-4 md:grid-cols-3">
          {partnership.rollout.map((step, i) => (
            <Reveal
              key={step.when}
              delay={i * 0.04}
              className={`${surface.card} bg-surface`}
            >
              <p className="display font-semibold text-accent-strong">
                {step.when}
              </p>
              <p className="mt-3 text-lg">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <CtaTile
        title="Talk to the team"
        lede="Offices in Wellington and Christchurch, with regional managers covering the lower North Island."
      />
    </>
  );
}
