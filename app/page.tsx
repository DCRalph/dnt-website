import Image from "next/image";
import Link from "next/link";
import { AllianceRing } from "@/components/graphics/alliance-ring";
import { JourneyRow } from "@/components/graphics/journey-row";
import { NzMap } from "@/components/graphics/nz-map";
import { CtaTile } from "@/components/layout/cta-tile";
import {
  button,
  container,
  Section,
  surface,
  Tag,
} from "@/components/layout/section";
import { StatsRow } from "@/components/layout/stats-row";
import { Reveal } from "@/components/motion/reveal";
import {
  allianceSupport,
  company,
  platform,
  services,
  visits,
  yearsOperating,
} from "@/lib/content";
import { photos, servicePhotos } from "@/lib/photos";

/* Grey bento card. */
const tile = `${surface.card} bg-surface`;

export default function Home() {
  return (
    <>
      {/* Hero: statement left, photo collage right. */}
      <section className={`${container} pt-6 pb-10 md:pt-12 md:pb-14`}>
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <Tag>Building in New Zealand since {company.founded}</Tag>
            <h1 className="display mt-6 font-semibold text-6xl md:text-8xl">
              Built on systems.
              <br />
              Backed by{" "}
              <span className="relative inline-block">
                <span className="relative z-10">experience.</span>
                {/* Highlighter stroke under the last word. */}
                <span
                  className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 rounded bg-accent/30 md:bottom-2 md:h-6"
                  aria-hidden
                />
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted md:text-xl">
              Insurance reinstatement and emergency make-safe for New Zealand
              homes. We scope a claim in one visit, price it the same day and
              send local trades to do the repair.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className={button.primary}>
                Talk to us
              </Link>
              <Link href="/clients#homeowners" className={button.secondary}>
                Your insurer sent us?
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative lg:col-span-5">
            <Image
              src={photos.hero}
              alt=""
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-4/5 w-full rounded-3xl object-cover"
            />
            <Image
              src={photos.journey}
              alt=""
              sizes="200px"
              className="absolute -bottom-8 -left-6 hidden w-44 -rotate-3 rounded-2xl object-cover shadow-lg ring-6 ring-background sm:block md:-left-10 md:w-52"
            />
            {/* Stamp. */}
            <div
              data-tone="orange"
              className="absolute -top-6 right-4 flex size-28 rotate-12 flex-col items-center justify-center rounded-full shadow-md md:size-32 min-[1400px]:-right-6"
            >
              <span className="display font-semibold text-4xl md:text-5xl">
                {yearsOperating}
              </span>
              <span className="font-semibold text-sm">years</span>
            </div>
          </Reveal>
        </div>

        <StatsRow className="mt-16 md:mt-24" />
      </section>

      <Section
        tag="Why Duncan & Taylor"
        title="Fewer visits and a price on the day"
        lede="What insurers, adjusters and homeowners get when a claim comes to us."
      >
        <div className="grid gap-4 md:auto-rows-[220px] md:grid-cols-6">
          <Reveal className={`${tile} md:col-span-4 md:row-span-2`}>
            <h3 className="display font-semibold text-2xl">
              One visit for the homeowner
            </h3>
            <p className="mt-2 max-w-lg text-muted">
              Our builder makes the house safe while a scoper records the
              damage, at the same appointment.
            </p>
            <div className="mt-8 grid gap-6">
              <div>
                <p className="font-semibold text-sm">{company.name}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {visits.ours.map((visit) => (
                    <li
                      key={visit}
                      className="rounded-full bg-accent px-4 py-2 font-medium text-background"
                    >
                      {visit}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-muted text-sm">
                  A typical claim
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {visits.typical.map((visit) => (
                    <li
                      key={visit}
                      className="rounded-full bg-card px-4 py-2 font-medium ring-1 ring-line"
                    >
                      {visit}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-muted text-sm">
                  Often days or weeks apart.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.05}
            data-tone="orange"
            className={`${surface.card} flex flex-col justify-between gap-6 md:col-span-2`}
          >
            <h3 className="display font-semibold text-4xl">Same day.</h3>
            <p className="text-muted">
              A crew on site the day the claim arrives, and a call to the
              homeowner within the hour.
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative min-h-56 overflow-hidden rounded-3xl md:col-span-2"
          >
            <Image
              src={servicePhotos.maintenance}
              alt=""
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
            <p className="display absolute inset-x-6 bottom-6 font-semibold text-2xl text-white md:inset-x-8 md:bottom-8">
              A site-specific safety plan on every job.
            </p>
          </Reveal>

          <Reveal
            delay={0.05}
            className={`${tile} flex flex-col md:col-span-2 md:row-span-2`}
          >
            <h3 className="display font-semibold text-2xl">The Alliance</h3>
            <p className="mt-2 text-muted">
              More than 80 local crews who own their businesses.
            </p>
            <div className="my-auto">
              <AllianceRing />
            </div>
            <Link
              href="/alliance"
              className="font-semibold text-accent-strong hover:underline"
            >
              How it works
            </Link>
          </Reveal>

          <Reveal delay={0.1} className={`${tile} md:col-span-4`}>
            <h3 className="display font-semibold text-2xl">Live in Eden</h3>
            <p className="mt-2 text-muted">
              Insurers and homeowners see progress, photos and costs as they
              happen.
            </p>
            <ul className="mt-5 grid gap-2" aria-hidden>
              {[100, 72, 45].map((w) => (
                <li key={w} className="h-2 rounded-full bg-line">
                  <span
                    className="block h-full rounded-full bg-accent"
                    style={{ width: `${w}%` }}
                  />
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.15}
            className={`${tile} flex flex-col justify-between gap-6 md:col-span-4 md:flex-row md:items-end`}
          >
            <h3 className="display font-semibold text-6xl text-accent-strong md:text-8xl">
              {yearsOperating}
            </h3>
            <p className="max-w-xs text-muted">
              Years building in New Zealand, and reinstating insured homes since
              the 1970s.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section
        tag="What we do"
        title="Make it safe, fix it, look after it"
        lede="Three services, all run through the same systems."
      >
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.06} className="group">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src={servicePhotos[service.slug]}
                  alt=""
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="display mt-6 font-semibold text-accent-strong">
                0{i + 1}
              </p>
              <h3 className="display mt-2 font-semibold text-2xl">
                {service.title}
              </h3>
              <p className="mt-2 text-muted">{service.summary}</p>
              <Link
                href={`/services#${service.slug}`}
                className="mt-4 inline-block font-semibold hover:text-accent-strong"
              >
                Learn more
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        tile
        tag="The Alliance"
        title={`Local trades with ${yearsOperating} years of backing`}
        lede="Members run their own businesses and pick the jobs they want. We bring the work and handle everything around it."
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AllianceRing />
          <dl className="grid gap-6 sm:grid-cols-2">
            {allianceSupport.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <dt className="display font-semibold text-lg">{item.title}</dt>
                <dd className="mt-1 text-muted">{item.body}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Section>

      <Section
        tag="How a claim runs"
        title="One visit, priced the same day"
        lede="The insurer can follow the claim in Eden without anyone driving out to the property."
      >
        <JourneyRow />
      </Section>

      <Section
        tile
        tag="Where we work"
        title="Wellington, Christchurch and the lower North Island"
        lede="Through our partnership with Flooring Design, we'll have a base in every region by the end of 2027."
      >
        <NzMap />
      </Section>

      <Section
        tag="Platform"
        title="Software we build ourselves"
        lede="Our own development team writes the tools our jobs run through."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {platform.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 0.04} className={tile}>
              <p className="font-semibold text-accent-strong text-sm">
                {tool.role}
              </p>
              <h3 className="display mt-2 font-semibold text-2xl">
                {tool.name}
              </h3>
            </Reveal>
          ))}
        </ul>
        <Link
          href="/platform"
          className="mt-8 inline-block font-semibold text-accent-strong hover:underline"
        >
          See what each one does
        </Link>
      </Section>

      <CtaTile
        title="Talk to us about your claims"
        lede="Tell us what you need covered and we'll show you how we'd run it."
      />
    </>
  );
}
