import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/* Orange dot and label. The one bit of ceremony above a heading. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3.5 py-1.5 font-semibold text-accent-strong text-sm">
      <span className="size-1.5 rounded-full bg-accent" aria-hidden />
      {children}
    </p>
  );
}

type SectionProps = {
  id?: string;
  tag?: string;
  title: ReactNode;
  lede?: string;
  /* Wrap the whole section in a soft grey tile. */
  tile?: boolean;
  children?: ReactNode;
  className?: string;
};

/* A contained section: tag, heading and lede, then content. */
export function Section({
  id,
  tag,
  title,
  lede,
  tile,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto max-w-7xl scroll-mt-28 px-6 py-10 md:py-14",
        className,
      )}
    >
      <div
        data-tone={tile ? "tile" : undefined}
        className={cn(tile && "rounded-[2.5rem] px-6 py-14 md:px-14 md:py-20")}
      >
        <Reveal className="grid gap-5 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            {tag && <Tag>{tag}</Tag>}
            <h2 className="display mt-4 font-semibold text-4xl md:text-5xl">
              {title}
            </h2>
          </div>
          {lede && (
            <p className="max-w-md text-lg text-muted md:col-span-5 md:justify-self-end">
              {lede}
            </p>
          )}
        </Reveal>
        {children && <div className="mt-10 md:mt-14">{children}</div>}
      </div>
    </section>
  );
}

/* Inner page opener: heading on the left, photo on the right. */
export function PageIntro({
  tag,
  title,
  lede,
  photo,
}: {
  tag: string;
  title: ReactNode;
  lede: string;
  photo: StaticImageData;
}) {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 pt-8 pb-10 md:pt-12 lg:grid-cols-12 lg:items-center">
      <Reveal className="lg:col-span-7">
        <Tag>{tag}</Tag>
        <h1 className="display mt-5 max-w-3xl font-semibold text-5xl md:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-xl text-lg text-muted md:text-xl">{lede}</p>
      </Reveal>
      <Reveal delay={0.08} className="lg:col-span-5">
        <Image
          src={photo}
          alt=""
          priority
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="aspect-4/3 w-full rounded-[2rem] object-cover"
        />
      </Reveal>
    </section>
  );
}

const buttonBase =
  "inline-block rounded-full px-6 py-3 font-semibold transition-opacity hover:opacity-85";

/* Shared button classes. Both read tone tokens, so inside an orange tile the
   primary flips to white with orange text. */
export const button = {
  primary: cn(buttonBase, "bg-accent text-background"),
  secondary: cn(buttonBase, "bg-surface text-foreground hover:bg-line"),
};
