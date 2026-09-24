import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";

/* A full-bleed photo under a charcoal wash with one big statement on top. */
export function PhotoBand({
  photo,
  children,
}: {
  photo: StaticImageData;
  children: ReactNode;
}) {
  return (
    <section data-tone="dark" className="relative overflow-hidden">
      <Image
        src={photo}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-background/20" />
      <Reveal className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
        {children}
      </Reveal>
    </section>
  );
}
