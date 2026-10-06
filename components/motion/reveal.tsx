"use client";

import { type HTMLMotionProps, motion } from "motion/react";

type RevealProps = HTMLMotionProps<"div"> & { delay?: number };

/* Fades and settles its children into place the first time they scroll
   into view: a small lift plus a touch of scale, so tiles feel placed. */
export function Reveal({ delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    />
  );
}
