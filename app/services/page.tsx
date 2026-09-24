import type { Metadata } from "next";
import Image from "next/image";
import { JourneyRow } from "@/components/graphics/journey-row";
import { CtaTile } from "@/components/layout/cta-tile";
import { PageIntro, Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/lib/content";
import { photos, servicePhotos } from "@/lib/photos";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        tag="Services"
        photo={photos.services}
        title="Reinstatement, repairs and maintenance"
        lede="Residential and light commercial work across New Zealand, delivered by local trades under one accountable contract."
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
            </Reveal>
          </div>
        </Section>
      ))}
      <Section
        tag="How a job runs"
        title="The same five stages, every time"
        lede="Whether it is a claim, a repair or a scheduled maintenance visit."
      >
        <JourneyRow />
      </Section>
      <CtaTile
        title="Have a job or a portfolio to talk about?"
        lede="Tell us what you are looking after and we will come back with how we would run it."
      />
    </>
  );
}
