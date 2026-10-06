"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const nodes = [
  { label: "Client", sub: "Insurer, adjuster or property owner" },
  {
    label: "Duncan & Taylor",
    sub: "Holds the contract and runs the job",
  },
  { label: "Local trade businesses", sub: "Paid in the weekly pay run" },
  { label: "The community", sub: "Wages and supplier spend stay local" },
];

const W = 960;
const H = 330;
const Y = 110;
const BOX_W = 200;
const BOX_H = 64;
const GAP = (W - nodes.length * BOX_W) / (nodes.length + 1);
const xOf = (i: number) => GAP + i * (BOX_W + GAP);

/* How the money moves: from the client, through D&T, to trades who live where
   the work is, and back into the town. The return arc is talent staying local. */
export function LocalFlow() {
  const first = xOf(0) + BOX_W / 2;
  const last = xOf(nodes.length - 1) + BOX_W / 2;
  /* Starts below the captions so the arrow does not cross them. */
  const arcY = Y + BOX_H + 40;
  const returnArc = `M ${last} ${arcY} C ${last} ${H - 10}, ${first + (last - first) / 2 + 120} ${H - 10}, ${xOf(2) + BOX_W / 2} ${arcY}`;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full"
      role="img"
      aria-label="Money flows from the client to Duncan and Taylor, to local trade businesses paid weekly, and stays in the region."
    >
      <title>Where the money goes</title>
      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)" />
        </marker>
      </defs>

      {nodes.map((node, i) => {
        const x = xOf(i);
        const isDT = i === 1;
        return (
          <motion.g
            key={node.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.24, delay: i * 0.1, ease }}
          >
            <rect
              x={x}
              y={Y}
              width={BOX_W}
              height={BOX_H}
              rx={10}
              fill={isDT ? "var(--accent)" : "var(--card)"}
              stroke={isDT ? "var(--accent)" : "var(--line)"}
              strokeWidth={1.5}
            />
            <text
              x={x + BOX_W / 2}
              y={Y + BOX_H / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={16}
              fontWeight={500}
              fill={isDT ? "var(--background)" : "var(--foreground)"}
            >
              {node.label}
            </text>
            <text
              x={x + BOX_W / 2}
              y={Y + BOX_H + 26}
              textAnchor="middle"
              fontSize={12}
              fill="var(--muted)"
            >
              {node.sub}
            </text>
          </motion.g>
        );
      })}

      {nodes.slice(0, -1).map((node, i) => {
        const x1 = xOf(i) + BOX_W + 6;
        const x2 = xOf(i + 1) - 6;
        return (
          <motion.line
            key={node.label}
            x1={x1}
            y1={Y + BOX_H / 2}
            x2={x2}
            y2={Y + BOX_H / 2}
            stroke="var(--accent)"
            strokeWidth={2}
            markerEnd="url(#arrow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.24, delay: 0.08 + i * 0.1, ease }}
          />
        );
      })}

      <motion.path
        d={returnArc}
        fill="none"
        stroke="var(--accent)"
        strokeWidth={1.5}
        strokeDasharray="4 6"
        markerEnd="url(#arrow)"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.44, ease }}
      />
      <motion.text
        x={(xOf(2) + xOf(3) + BOX_W) / 2}
        y={H - 10}
        textAnchor="middle"
        fontSize={12}
        fill="var(--accent-strong)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.72 }}
      >
        Talent stays local
      </motion.text>
    </svg>
  );
}
