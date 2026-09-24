import Link from "next/link";
import { button, container, surface } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { company } from "@/lib/content";
import { cn } from "@/lib/utils";

/* The orange closing tile every page ends on. */
export function CtaTile({
  title,
  lede,
  action = "Talk to us",
}: {
  title: string;
  lede: string;
  action?: string;
}) {
  return (
    <section className={cn(container, "py-10 md:py-14")}>
      <Reveal
        data-tone="orange"
        className={cn(
          surface.block,
          "grid gap-8 md:grid-cols-12 md:items-center",
        )}
      >
        <div className="md:col-span-8">
          <h2 className="display font-semibold text-4xl md:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted">{lede}</p>
        </div>
        <div className="flex flex-col items-start gap-4 md:col-span-4 md:items-end">
          <Link href="/contact" className={button.primary}>
            {action}
          </Link>
          <a
            href={`mailto:${company.email}`}
            className="font-medium text-muted hover:text-foreground"
          >
            {company.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
