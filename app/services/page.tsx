import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClaimJourney } from "@/components/graphics/claim-journey";
import { button, PageHero, Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/lib/content";
import { photos, servicePhotos } from "@/lib/photos";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        photo={photos.services}
        title="Reinstatement, repairs and maintenance"
        lede="Residential and light commercial work across New Zealand, delivered by local trades under one accountable contract."
      />
      {services.map((service, i) => (
        <Section
          key={service.slug}
          id={service.slug}
          tone={i % 2 ? "sand" : "cream"}
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
                className="aspect-3/2 w-full rounded-2xl object-cover"
              />
            </Reveal>
            <Reveal delay={0.04}>
              <p className="max-w-xl text-lg md:text-xl">{service.detail}</p>
            </Reveal>
          </div>
        </Section>
      ))}
      <Section
        tone="dark"
        title="How a job runs"
        lede="The same five stages, whether it is a claim, a repair or a scheduled maintenance visit."
      >
        <ClaimJourney />
      </Section>
      <Section tone="orange" title="Have a job or a portfolio to talk about?">
        <Reveal>
          <Link href="/contact" className={button.primary}>
            Talk to us
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
