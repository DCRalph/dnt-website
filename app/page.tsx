import Image from "next/image";
import Link from "next/link";
import { AllianceRing } from "@/components/graphics/alliance-ring";
import { ClaimJourney } from "@/components/graphics/claim-journey";
import { LocalFlow } from "@/components/graphics/local-flow";
import { NzMap } from "@/components/graphics/nz-map";
import { PhotoBand } from "@/components/layout/photo-band";
import { button, Section } from "@/components/layout/section";
import { StatsBand } from "@/components/layout/stats-band";
import { Reveal } from "@/components/motion/reveal";
import {
  allianceSupport,
  company,
  services,
  yearsOperating,
} from "@/lib/content";
import { photos, servicePhotos } from "@/lib/photos";

export default function Home() {
  return (
    <>
      {/* Hero: photo under a charcoal wash, statement bottom-left. */}
      <section data-tone="dark" className="relative overflow-hidden">
        <Image
          src={photos.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-background/10" />
        <div className="relative mx-auto flex min-h-[78svh] max-w-7xl flex-col justify-end px-6 pt-28 pb-20 md:pb-28">
          <Reveal>
            <p className="font-semibold text-accent-strong">
              Reinstatement and facilities maintenance. New Zealand owned since{" "}
              {company.founded}.
            </p>
            <h1 className="mt-5 max-w-4xl font-bold text-5xl tracking-tight md:text-7xl">
              Built on systems. Backed by{" "}
              <em className="font-serif font-normal">experience.</em>
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-muted md:text-xl">
              Every claim carries risk. Our job is to make it predictable.
              Duncan &amp; Taylor delivers residential and light commercial
              reinstatement through local trade businesses working under one
              accountable name.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className={button.primary}>
                Talk to us
              </Link>
              <Link href="/alliance" className={button.secondary}>
                How the Alliance works
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsBand />

      <Section
        title="What we do"
        lede="Three services, one delivery model. Every job scoped, tracked and reported the same way."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={i * 0.04}
              className="overflow-hidden rounded-2xl bg-card shadow-sm"
            >
              <Image
                src={servicePhotos[service.slug]}
                alt=""
                sizes="(min-width: 768px) 33vw, 100vw"
                className="aspect-3/2 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl">{service.title}</h3>
                <p className="mt-3 text-muted">{service.summary}</p>
                <Link
                  href={`/services#${service.slug}`}
                  className="mt-5 inline-block font-semibold text-accent-strong hover:underline"
                >
                  Learn more
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        tone="dark"
        title="The Alliance"
        lede="Independent local trade businesses, working under one name. They keep their businesses. We carry everything that gets in the way of the work."
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AllianceRing />
          <dl className="grid gap-6 sm:grid-cols-2">
            {allianceSupport.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.032}>
                <dt className="font-bold">{item.title}</dt>
                <dd className="mt-1 text-muted">{item.body}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Section>

      <Section
        tone="sand"
        title="Money stays local"
        lede="Alliance members are paid weekly, not when the claim settles. The financial risk sits with us, and the money lands in the town where the work was done."
      >
        <LocalFlow />
      </Section>

      <Section
        title="The claim journey"
        lede="Robust systems and real-time visibility at every stage, so clients get certainty and homeowners get their house back."
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <ClaimJourney />
          <Reveal className="lg:sticky lg:top-28">
            <Image
              src={photos.journey}
              alt=""
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-4/5 w-full rounded-2xl object-cover"
            />
            <p className="mt-6 font-bold text-2xl tracking-tight md:text-3xl">
              Reliable processes. Accountable delivery.
            </p>
            <p className="mt-3 text-muted">
              {yearsOperating} years of reinstatement work, tried and tested
              with insurers, now applied to government and portfolio clients.
            </p>
            <Link
              href="/government"
              className="mt-5 inline-block font-semibold text-accent-strong hover:underline"
            >
              Working with government
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section
        tone="sand"
        title="Where we work"
        lede="Regional offices and Alliance member businesses across the country. Pick a trade to see who is local."
      >
        <NzMap />
      </Section>

      <PhotoBand photo={photos.community}>
        <p className="max-w-3xl font-bold text-4xl tracking-tight md:text-6xl">
          Restoring homes.{" "}
          <em className="font-serif font-normal">Backing communities.</em>
        </p>
        <p className="mt-6 max-w-xl text-lg text-muted">
          100% Kiwi owned and operated. Money spent in a community stays there,
          and so does the talent.
        </p>
      </PhotoBand>

      <Section
        tone="orange"
        title="Talk to us about your portfolio"
        lede="New client or existing, insurer, agency or portfolio owner. One conversation to start."
      >
        <Reveal className="flex flex-wrap items-center gap-6">
          <Link href="/contact" className={button.primary}>
            Get in touch
          </Link>
          <a
            href={`mailto:${company.email}`}
            className="font-medium text-muted hover:text-foreground"
          >
            {company.email}
          </a>
        </Reveal>
      </Section>
    </>
  );
}
