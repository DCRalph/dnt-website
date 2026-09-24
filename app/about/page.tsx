import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Section } from "@/components/layout/section";
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
      <PageHero
        photo={photos.about}
        title={`${yearsOperating} years of looking after New Zealand homes`}
        lede={`${company.name} started in ${company.founded} as a building and decorating firm. It is still New Zealand owned, still run by people who came up through the trades, and still spends its money where the work is done.`}
      />

      <Section title="Our story">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <ol className="grid gap-8 border-accent border-l-2 pl-8">
            {milestones.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.032}>
                <li>
                  <p className="font-semibold text-accent-strong">
                    {item.year}
                  </p>
                  <p className="mt-1 max-w-xl text-lg">{item.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <Image
              src={servicePhotos.reinstatement}
              alt=""
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-4/3 w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section
        tone="dark"
        title="Management"
        lede="The people your regional manager answers to, and who answer to you."
      >
        <ul className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {management.map((person, i) => (
            <Reveal key={`${person.name}-${person.role}`} delay={i * 0.024}>
              <li>
                {/* Headshots are black and white. Until they arrive, initials. */}
                <div className="flex aspect-square items-end rounded-2xl bg-surface p-5 grayscale">
                  <span className="font-bold text-3xl text-muted">
                    {initials(person.name)}
                  </span>
                </div>
                <p className="mt-4 font-bold">{person.name}</p>
                <p className="text-muted">{person.role}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section
        tone="sand"
        title="Why it matters"
        lede="New Zealand is built on small business. When the trades who do the work own their businesses and live in the region, the money and the skills stay there."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {why.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.032}
              className="rounded-2xl bg-card p-7"
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="mt-2 text-muted">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
