"use client";

import { motion } from "motion/react";
import { allianceSupport, company, trades } from "@/lib/content";

const W = 760;
const H = 640;
const CX = W / 2;
const CY = H / 2;
const HUB = 70;
const SUPPORT_R = 176;
const TRADE_R = 250;

/* Rounded to 2dp: Math.cos/sin can differ in the last digits between the
   server and the browser, which breaks hydration of the SVG attributes. */
const round = (n: number) => Math.round(n * 100) / 100;
const polar = (r: number, deg: number) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return {
    x: round(CX + r * Math.cos(rad)),
    y: round(CY + r * Math.sin(rad)),
  };
};

const ease = [0.22, 1, 0.36, 1] as const;

/* Two words stay on one line; longer labels break before the last word. */
const splitLabel = (label: string) => {
  const words = label.split(" ");
  return words.length < 3
    ? [label]
    : [words.slice(0, -1).join(" "), words[words.length - 1]];
};

/* Independent trade businesses on the outer ring, the D&T layer they sit
   inside on the middle ring, and one accountable name at the centre. */
export function AllianceRing() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="mx-auto w-full max-w-2xl"
      role="img"
      aria-label={`${trades.length} trades supported by ${company.name}: ${allianceSupport.map((item) => item.title.toLowerCase()).join(", ")}.`}
    >
      <title>The Alliance model</title>

      {/* Spokes from each trade to the support ring. */}
      {trades.map((trade, i) => {
        const deg = (360 / trades.length) * i;
        const a = polar(TRADE_R - 8, deg);
        const b = polar(SUPPORT_R + 2, deg);
        return (
          <motion.line
            key={trade}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="var(--line)"
            strokeWidth={1.5}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.32, delay: 0.24 + i * 0.02, ease }}
          />
        );
      })}

      {/* Support ring. */}
      <motion.circle
        cx={CX}
        cy={CY}
        r={SUPPORT_R}
        fill="none"
        stroke="var(--accent)"
        strokeWidth={1.5}
        strokeDasharray="4 6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.56, delay: 0.08, ease }}
      />
      {/* Labels sit inside the ring, offset 15 degrees so they fall between
          the trade spokes, and wrap onto two lines so none reach the ring. */}
      {allianceSupport.map((item, i) => {
        const deg = (360 / allianceSupport.length) * i + 15;
        const p = polar(SUPPORT_R - 42, deg);
        const lines = splitLabel(item.title);
        return (
          <motion.text
            key={item.title}
            x={p.x}
            y={p.y - (lines.length - 1) * 7}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={12}
            fill="var(--accent-strong)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.48 + i * 0.032 }}
          >
            {lines.map((line, n) => (
              <tspan key={line} x={p.x} dy={n === 0 ? 0 : 14}>
                {line}
              </tspan>
            ))}
          </motion.text>
        );
      })}

      {/* Trades. */}
      {trades.map((trade, i) => {
        const deg = (360 / trades.length) * i;
        const p = polar(TRADE_R, deg);
        const l = polar(TRADE_R + 20, deg);
        const anchor =
          Math.abs(deg % 360) < 1 || Math.abs((deg % 360) - 180) < 1
            ? "middle"
            : deg < 180
              ? "start"
              : "end";
        return (
          <motion.g
            key={trade}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.2 + i * 0.02, ease }}
            style={{ transformOrigin: `${p.x}px ${p.y}px` }}
          >
            <circle cx={p.x} cy={p.y} r={7} fill="var(--foreground)" />
            <text
              x={l.x}
              y={l.y}
              textAnchor={anchor}
              dominantBaseline="middle"
              fontSize={13}
              fill="var(--muted)"
            >
              {trade}
            </text>
          </motion.g>
        );
      })}

      {/* Hub. */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.24, ease }}
        style={{ transformOrigin: `${CX}px ${CY}px` }}
      >
        {/* The D&T mark at the centre. Plain SVG <image>, since next/image
            cannot render inside an SVG. */}
        <image
          href="/brand/mark.png"
          x={CX - HUB}
          y={CY - HUB}
          width={HUB * 2}
          height={HUB * 2}
        />
      </motion.g>
    </svg>
  );
}
