import Image from "next/image";
import Link from "next/link";
import { AllianceRing } from "@/components/graphics/alliance-ring";
import { JourneyRow } from "@/components/graphics/journey-row";
import { LocalFlow } from "@/components/graphics/local-flow";
import { NzMap } from "@/components/graphics/nz-map";
import { CtaTile } from "@/components/layout/cta-tile";
import { button, Section, Tag } from "@/components/layout/section";
import { StatsRow } from "@/components/layout/stats-row";
import { Reveal } from "@/components/motion/reveal";
import {
  allianceSupport,
  company,
  memberQuotes,
  memberTotal,
  services,
  yearsOperating,
} from "@/lib/content";
import { photos, servicePhotos } from "@/lib/photos";

const tile = "rounded-[2rem] bg-surface p-8";

export default function Home() {
  return (
    <>
      {/* Hero: statement left, photo collage right. */}
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-16 md:pt-16 md:pb-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <Tag>New Zealand owned and operated since {company.founded}</Tag>
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
              Every claim carries risk. Our job is to make it predictable.
              Residential and light commercial reinstatement delivered by local
              trade businesses working under one accountable name.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className={button.primary}>
                Talk to us
              </Link>
              <Link href="/alliance" className={button.secondary}>
                How the Alliance works
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative lg:col-span-5">
            <Image
              src={photos.hero}
              alt=""
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-4/5 w-full rounded-[2rem] object-cover"
            />
            <Image
              src={photos.journey}
              alt=""
              sizes="200px"
              className="absolute -bottom-8 -left-6 hidden w-44 -rotate-3 rounded-3xl object-cover shadow-xl ring-8 ring-background sm:block md:-left-12 md:w-52"
            />
            {/* Stamp. */}
            <div
              data-tone="orange"
              className="absolute -top-6 -right-4 flex size-28 rotate-12 flex-col items-center justify-center rounded-full shadow-lg md:-right-8 md:size-32"
            >
              <span className="display font-semibold text-4xl md:text-5xl">
                {yearsOperating}
              </span>
              <span className="font-semibold text-sm">years</span>
            </div>
          </Reveal>
        </div>

        <StatsRow className="mt-20 md:mt-28" />
      </section>

      <Section
        tag="Why Duncan & Taylor"
        title="Certainty for clients. A fair deal for trades."
        lede="The pieces that make a claim predictable, and keep the money in the town where the work was done."
      >
        <div className="grid gap-4 md:auto-rows-[220px] md:grid-cols-6">
          <Reveal className={`${tile} md:col-span-4 md:row-span-2`}>
            <h3 className="display font-semibold text-2xl">
              Money stays local
            </h3>
            <p className="mt-2 max-w-lg text-muted">
              Members are paid weekly, not when the claim settles. Wages,
              suppliers and rates land in the region.
            </p>
            <div className="mt-6">
              <LocalFlow />
            </div>
          </Reveal>

          <Reveal
            delay={0.05}
            data-tone="orange"
            className="flex flex-col justify-between rounded-[2rem] p-8 md:col-span-2"
          >
            <h3 className="display font-semibold text-4xl">Paid weekly.</h3>
            <p className="text-muted">
              The financial risk sits with us, not with the tradesperson and not
              with the client.
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative min-h-56 overflow-hidden rounded-[2rem] md:col-span-2"
          >
            <Image
              src={servicePhotos.maintenance}
              alt=""
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
            <p className="display absolute right-8 bottom-7 left-8 font-semibold text-2xl text-white">
              One health and safety system across every site.
            </p>
          </Reveal>

          <Reveal
            delay={0.05}
            className={`${tile} flex flex-col md:col-span-2 md:row-span-2`}
          >
            <h3 className="display font-semibold text-2xl">The Alliance</h3>
            <p className="mt-2 text-muted">
              {memberTotal} local trade businesses under one name.
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

          <Reveal delay={0.1} className={`${tile} md:col-span-2`}>
            <h3 className="display font-semibold text-2xl">
              Real-time visibility
            </h3>
            <p className="mt-2 text-muted">
              Every job logged, photographed and reported.
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
            className={`${tile} flex flex-col justify-between md:col-span-2`}
          >
            <h3 className="display font-semibold text-6xl text-accent-strong">
              {yearsOperating}
            </h3>
            <p className="text-muted">
              Years of reinstatement, tried and tested with insurers and now
              government.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section
        tag="What we do"
        title="Three services. One delivery model."
        lede="Every job scoped, tracked and reported the same way."
      >
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.06} className="group">
              <div className="overflow-hidden rounded-[2rem]">
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
        title="They keep their businesses. We carry the rest."
        lede="Independent local trade businesses, working under one name."
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
        tag="The claim journey"
        title="Five stages. No surprises."
        lede="Robust systems and real-time visibility at every step, so clients get certainty and homeowners get their house back."
      >
        <JourneyRow />
      </Section>

      <Section
        tile
        tag="Where we work"
        title="Offices and trades across the country"
        lede="Pick a trade to see who is local."
      >
        <NzMap />
      </Section>

      <Section
        tag="Alliance members"
        title="Why they stay"
        lede="Churn in the Alliance is very low. Members get steady work, professional backing and clients they could not reach alone."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {memberQuotes.map((item, i) => (
            <Reveal key={item.who} delay={i * 0.06} className={tile}>
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

      <CtaTile
        title="Talk to us about your portfolio"
        lede="New client or existing, insurer, agency or portfolio owner. One conversation to start."
      />
    </>
  );
}
