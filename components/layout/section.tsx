import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/* Band colours. See the `data-tone` rules in globals.css. */
export type Tone = "cream" | "sand" | "dark" | "orange";

type SectionProps = {
  tone?: Tone;
  id?: string;
  /* Short orange label above the heading. Use sparingly. */
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: ReactNode;
  className?: string;
};

/* A full-width band: heading and optional lede, then content. */
export function Section({
  tone = "cream",
  id,
  eyebrow,
  title,
  lede,
  children,
  className,
}: SectionProps) {
  return (
    <section data-tone={tone} id={id} className={cn("scroll-mt-20", className)}>
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal className="grid gap-4 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            {eyebrow && (
              <p className="mb-3 font-semibold text-accent-strong">{eyebrow}</p>
            )}
            <h2 className="font-bold text-3xl tracking-tight md:text-4xl">
              {title}
            </h2>
          </div>
          {lede && (
            <p className="max-w-xl text-lg text-muted md:col-span-7">{lede}</p>
          )}
        </Reveal>
        {children && <div className="mt-12 md:mt-16">{children}</div>}
      </div>
    </section>
  );
}

/* Photo hero for the inner pages: image under a charcoal wash, heading on top. */
export function PageHero({
  title,
  lede,
  photo,
}: {
  title: ReactNode;
  lede: string;
  photo: StaticImageData;
}) {
  return (
    <section data-tone="dark" className="relative overflow-hidden">
      <Image
        src={photo}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-background/30" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
        <Reveal>
          <h1 className="max-w-3xl font-bold text-4xl tracking-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{lede}</p>
        </Reveal>
      </div>
    </section>
  );
}

const buttonBase =
  "inline-block rounded-full px-6 py-3 font-semibold transition-opacity hover:opacity-85";

/* Shared button classes. Both read tone tokens, so on the orange band the
   primary flips to white with orange text. */
export const button = {
  primary: cn(buttonBase, "bg-accent text-background"),
  secondary: cn(
    buttonBase,
    "border border-foreground/30 text-foreground hover:border-foreground",
  ),
};
