import type { Metadata } from "next";
import Link from "next/link";
import { AllianceRing } from "@/components/graphics/alliance-ring";
import { LocalFlow } from "@/components/graphics/local-flow";
import { button, PageHero, Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { allianceSupport } from "@/lib/content";
import { photos } from "@/lib/photos";

export const metadata: Metadata = { title: "The Alliance" };

/* What the member portal will offer. Listed now so the brief is visible on the
   page; the portal itself needs a backend and is not part of this static site. */
const portal = [
  "Order gear and uniform",
  "Download help material and procedures",
  "Keep tickets and certifications current",
  "Request assistance or leave feedback, one to one",
];

/* PLACEHOLDER quotes, to be replaced with interviews with local members. */
const quotes = [
  {
    quote:
      "I do the work I'm good at and the paperwork just isn't there any more.",
    who: "Painter, Canterbury",
  },
  {
    quote: "Paid every week. That changes how you run a small business.",
    who: "Builder, Waikato",
  },
  {
    quote:
      "We get government work as a two-person outfit. That doesn't happen on your own.",
    who: "Plumber, Wellington",
  },
];

export default function AlliancePage() {
  return (
    <>
      <PageHero
        photo={photos.alliance}
        title={
          <>
            Good tradespeople.{" "}
            <em className="font-serif font-normal">Great businesses.</em>
          </>
        }
        lede="The best trades are not always the best at running a business, and they should not have to be. Alliance members own their business and do the work. We carry the rest."
      />

      <Section title="What we carry">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <dl className="grid gap-6 sm:grid-cols-2">
            {allianceSupport.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.032}>
                <dt className="font-bold">{item.title}</dt>
                <dd className="mt-1 text-muted">{item.body}</dd>
              </Reveal>
            ))}
          </dl>
          <AllianceRing />
        </div>
      </Section>

      <Section
        tone="sand"
        title="Paid weekly"
        lede="Members invoice nobody and wait for nobody. D&T pays weekly and carries the risk between the job and the settlement."
      >
        <LocalFlow />
      </Section>

      <Section
        tone="dark"
        title="Why members stay"
        lede="Churn in the Alliance is very low. Members get steady work, professional backing and corporate clients they could not reach alone."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((item, i) => (
            <Reveal key={item.who} delay={i * 0.04}>
              <blockquote className="h-full rounded-2xl bg-card p-7">
                <p className="font-serif text-2xl leading-snug md:text-3xl">
                  “{item.quote}”
                </p>
                <footer className="mt-5 font-medium text-accent-strong">
                  {item.who}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Member portal" lede="Coming soon for Alliance members.">
        <Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {portal.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section
        tone="orange"
        title="Own your business. Leave the rest to us."
        lede="Talk to us about joining the Alliance in your region."
      >
        <Reveal>
          <Link href="/contact" className={button.primary}>
            Join the Alliance
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
