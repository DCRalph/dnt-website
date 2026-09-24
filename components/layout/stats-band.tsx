import { Counter } from "@/components/motion/counter";
import { Reveal } from "@/components/motion/reveal";
import { stats } from "@/lib/content";

/* The orange strip of headline numbers. Counts up on scroll. */
export function StatsBand() {
  return (
    <section data-tone="orange">
      <Reveal className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-6 py-14 md:grid-cols-4 md:py-16">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-bold text-5xl tabular-nums tracking-tight md:text-6xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 font-medium text-muted">{stat.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
