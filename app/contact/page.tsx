import type { Metadata } from "next";
import { PageIntro, Section, surface } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { company, offices } from "@/lib/content";
import { photos } from "@/lib/photos";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const details = [
    { label: "Email", value: company.email, href: `mailto:${company.email}` },
    {
      label: "Phone",
      value: company.phone,
      href: `tel:${company.phone.replace(/\s/g, "")}`,
    },
    { label: "Head office", value: company.address },
  ];
  return (
    <>
      <PageIntro
        tag="Contact"
        photo={photos.contact}
        title="Talk to us"
        lede="New client, existing client or a trade business looking at the Alliance. Same address."
      />
      <Section tag="Get in touch" title="One conversation to start">
        <div className="grid gap-4 md:grid-cols-3">
          {details.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 0.04}
              className={`${surface.card} bg-surface`}
            >
              <p className="font-semibold text-accent-strong">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="display mt-2 block font-semibold text-2xl hover:text-accent-strong"
                >
                  {item.value}
                </a>
              ) : (
                <p className="display mt-2 font-semibold text-2xl">
                  {item.value}
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </Section>
      <Section tile tag="Offices" title="Regional offices">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {offices.map((office, i) => (
            <Reveal
              key={office.city}
              delay={i * 0.04}
              className={`${surface.inset} bg-card`}
            >
              <p className="display font-semibold text-xl">{office.city}</p>
              <p className="mt-1 text-muted text-sm">{office.role}</p>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
