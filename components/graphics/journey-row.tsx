"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { journey } from "@/lib/content";

/* The five stages of a claim laid out left to right. An orange line runs
   along the top and fills as the row scrolls into view; stacks on small
   screens. */
export function JourneyRow() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 55%"],
  });
  const scale = useSpring(scrollYProgress, { stiffness: 300, damping: 40 });

  return (
    <ol
      ref={ref}
      className="relative grid gap-8 border-line border-l-2 pl-6 md:grid-cols-5 md:gap-6 md:border-t-2 md:border-l-0 md:pt-8 md:pl-0"
    >
      {/* Progress line: vertical on small screens, horizontal from md. */}
      <motion.div
        className="absolute top-0 -left-0.5 h-full w-0.5 origin-top bg-accent md:-top-0.5 md:left-0 md:h-0.5 md:w-full md:origin-left"
        style={{ scaleY: scale, scaleX: scale }}
        aria-hidden
      />
      {journey.map((step, i) => (
        <motion.li
          key={step.title}
          className="relative"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.3,
            delay: i * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span
            className="absolute top-1 -left-[31px] size-3 rounded-full bg-accent ring-4 ring-background md:-top-[38.5px] md:left-0"
            aria-hidden
          />
          <p className="display font-semibold text-accent-strong text-sm">
            0{i + 1}
          </p>
          <h3 className="display mt-2 font-semibold text-2xl">{step.title}</h3>
          <p className="mt-2 text-muted">{step.body}</p>
        </motion.li>
      ))}
    </ol>
  );
}
