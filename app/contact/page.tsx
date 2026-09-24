import type { Metadata } from "next";
import { PageHero, Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { company } from "@/lib/content";
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
      <PageHero
        photo={photos.contact}
        title="Talk to us"
        lede="New client, existing client or a trade business looking at the Alliance. Same address."
      />
      <Section title="Get in touch">
        <div className="grid gap-6 md:grid-cols-3">
          {details.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 0.032}
              className="rounded-2xl bg-card p-7 shadow-sm"
            >
              <p className="font-semibold text-accent-strong">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-2 block font-bold text-xl hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 font-bold text-xl">{item.value}</p>
              )}
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
