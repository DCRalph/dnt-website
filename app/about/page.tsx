import type { Metadata } from "next";
import Image from "next/image";
import { CtaTile } from "@/components/layout/cta-tile";
import { PageIntro, Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { company, management, milestones, yearsOperating } from "@/lib/content";
import { photos, servicePhotos } from "@/lib/photos";

export const metadata: Metadata = { title: "Our story" };

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

const why = [
  {
    title: "Money stays local",
    body: "Wages, suppliers and rates are paid in the region the work is done.",
  },
  {
    title: "Talent stays local",
    body: "Steady work means trades do not have to leave town, or the trade, to make a living.",
  },
  {
    title: "Businesses grow",
    body: "Alliance members build their own business with corporate clients behind them.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        tag="Our story"
        photo={photos.about}
        title={`${yearsOperating} years of looking after New Zealand homes`}
        lede={`${company.name} started in ${company.founded} as a building and decorating firm. It is still New Zealand owned, still run by people who came up through the trades, and still spends its money where the work is done.`}
      />

      <Section tag="Milestones" title="From one firm to a national Alliance">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <ol className="grid gap-8">
            {milestones.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.04}>
                <li className="grid grid-cols-[5rem_1fr] gap-4">
                  <p className="display font-semibold text-accent-strong text-xl">
                    {item.year}
                  </p>
                  <p className="text-lg">{item.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <Image
              src={servicePhotos.reinstatement}
              alt=""
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-4/3 w-full rounded-[2rem] object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section
        tile
        tag="Management"
        title="The people who answer to you"
        lede="And who your regional manager answers to."
      >
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {management.map((person, i) => (
            <Reveal key={`${person.name}-${person.role}`} delay={i * 0.04}>
              <li>
                {/* Headshots are black and white. Until they arrive, initials. */}
                <div className="flex aspect-square items-end rounded-[2rem] bg-card p-5 grayscale">
                  <span className="display font-semibold text-3xl text-muted">
                    {initials(person.name)}
                  </span>
                </div>
                <p className="display mt-4 font-semibold text-lg">
                  {person.name}
                </p>
                <p className="text-muted">{person.role}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section
        tag="Why it matters"
        title="New Zealand is built on small business"
        lede="When the trades who do the work own their businesses and live in the region, the money and the skills stay there."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {why.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.04}
              className="rounded-[2rem] bg-surface p-8"
            >
              <h3 className="display font-semibold text-2xl">{item.title}</h3>
              <p className="mt-2 text-muted">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaTile
        title="Talk to the team"
        lede="Regional managers on the ground in every part of the country."
      />
    </>
  );
}
