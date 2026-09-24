"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

/* Counts up from zero to `value` once it scrolls into view. */
export function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    const el = ref.current;
    if (!inView || !el) return;
    const controls = animate(0, value, {
      duration: 0.64,
      ease: "circOut",
      onUpdate: (v) => {
        el.textContent = Math.round(v).toLocaleString("en-NZ") + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}
