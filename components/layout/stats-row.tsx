import { Counter } from "@/components/motion/counter";
import { Reveal } from "@/components/motion/reveal";
import { stats } from "@/lib/content";
import { cn } from "@/lib/utils";

/* Headline numbers in a ruled row. Counts up on scroll. */
export function StatsRow({ className }: { className?: string }) {
  return (
    <Reveal
      className={cn(
        "grid grid-cols-2 gap-y-8 border-line border-y py-8 md:grid-cols-4 md:divide-x md:divide-line",
        className,
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="md:px-8 md:first:pl-0 md:last:pr-0">
          <p className="display font-semibold text-4xl text-accent-strong tabular-nums md:text-5xl">
            <Counter value={stat.value} suffix={stat.suffix} />
          </p>
          <p className="mt-2 text-muted">{stat.label}</p>
        </div>
      ))}
    </Reveal>
  );
}
