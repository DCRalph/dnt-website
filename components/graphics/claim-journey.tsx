"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { journey } from "@/lib/content";

/* The five stages of a claim. The accent line fills as the reader scrolls
   through them, so the page itself walks the journey. */
export function ClaimJourney() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 300, damping: 40 });

  return (
    <ol ref={ref} className="relative grid gap-10 pl-10 md:gap-14">
      <div
        className="absolute top-0 bottom-0 left-[7px] w-px bg-line"
        aria-hidden
      />
      <motion.div
        className="absolute top-0 bottom-0 left-[7px] w-px origin-top bg-accent"
        style={{ scaleY }}
        aria-hidden
      />
      {journey.map((step, i) => (
        <motion.li
          key={step.title}
          className="relative"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="absolute top-1.5 -left-10 size-[15px] rounded-full border-2 border-accent bg-background"
            aria-hidden
          />
          <p className="font-medium text-accent-strong text-sm">0{i + 1}</p>
          <h3 className="mt-1 font-medium text-xl md:text-2xl">{step.title}</h3>
          <p className="mt-2 max-w-md text-muted">{step.body}</p>
        </motion.li>
      ))}
    </ol>
  );
}
