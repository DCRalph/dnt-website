import type { Metadata } from "next";
import Image from "next/image";
import { JourneyRow } from "@/components/graphics/journey-row";
import { CtaTile } from "@/components/layout/cta-tile";
import { PageIntro, Section, surface } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { scope, services, triage } from "@/lib/content";
import { photos, servicePhotos } from "@/lib/photos";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        tag="Services"
        photo={photos.services}
        title="From the first call to the last coat of paint"
        lede="We make homes safe after damage, repair them for the insurer and maintain them for the people who own them. Jobs range from a patch and paint to full rebuilds."
      />
      {services.map((service, i) => (
        <Section
          key={service.slug}
          id={service.slug}
          tile
          tag={`0${i + 1}`}
          title={service.title}
          lede={service.summary}
        >
          {/* Photo and text swap sides on each service. */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal className={cn(i % 2 && "lg:order-last")}>
              <Image
                src={servicePhotos[service.slug]}
                alt=""
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-3/2 w-full rounded-3xl object-cover"
              />
            </Reveal>
            <Reveal delay={0.04}>
              <p className="max-w-xl text-lg md:text-xl">{service.detail}</p>
              <ul className="mt-8 grid gap-3">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      className="mt-2.5 size-2 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>
      ))}

      <Section
        tag="Triage"
        title="The worst damage gets seen first"
        lede="Jobs are sorted into one of five tiers as they arrive. Whatever the tier, the homeowner hears from us within an hour and a crew is there the same day."
      >
        <ol className="grid gap-3">
          {triage.map((item, i) => (
            <Reveal
              key={item.tier}
              delay={i * 0.04}
              className={cn(
                surface.inset,
                "grid gap-2 bg-surface md:grid-cols-[12rem_1fr_14rem] md:items-center md:gap-6",
              )}
            >
              <p className="display flex items-center gap-3 font-semibold text-xl">
                <span
                  className="size-3 rotate-45"
                  style={{ backgroundColor: item.colour }}
                  aria-hidden
                />
                {item.tier}
              </p>
              <p className="text-muted">{item.when}</p>
              <p className="font-medium md:text-right">{item.response}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section
        tile
        tag="Scope"
        title="Everything that's part of the house"
        lede="Reinstatement covers the building itself. Contents and vehicles are handled separately by the insurer."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {scope.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.04}
              className={cn(surface.inset, "bg-card")}
            >
              <h3 className="display font-semibold text-xl">{item.title}</h3>
              <p className="mt-2 text-muted">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        tag="How a claim runs"
        title="One visit, priced the same day"
        lede="Most claims involve three or more visits from different people. Ours start with one."
      >
        <JourneyRow />
      </Section>

      <CtaTile
        title="Got a claim or a portfolio for us?"
        lede="Tell us what you're looking after and we'll tell you how we'd run it."
      />
    </>
  );
}
