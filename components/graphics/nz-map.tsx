"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { places } from "@/lib/content";
import { cn } from "@/lib/utils";

/* Rough coastline as lon/lat pairs, projected with a flat scale that keeps
   the shape honest at New Zealand's latitude. Detail is deliberately low. */
const northIsland: [number, number][] = [
  [172.68, -34.43],
  [173.05, -34.42],
  [173.5, -34.95],
  [173.75, -35.0],
  [174.15, -35.2],
  [174.35, -35.17],
  [174.55, -35.85],
  [174.6, -36.1],
  [174.85, -36.6],
  [174.85, -36.85],
  [175.35, -37.2],
  [175.55, -37.15],
  [175.5, -36.75],
  [175.4, -36.45],
  [175.8, -36.75],
  [175.9, -37.2],
  [175.95, -37.45],
  [176.2, -37.65],
  [176.45, -37.75],
  [177.0, -37.95],
  [177.3, -38.0],
  [177.95, -37.55],
  [178.55, -37.7],
  [178.3, -38.35],
  [178.05, -38.68],
  [177.9, -39.1],
  [177.4, -39.05],
  [176.92, -39.48],
  [177.1, -39.65],
  [176.65, -40.3],
  [176.6, -40.5],
  [176.2, -40.9],
  [175.25, -41.6],
  [174.9, -41.45],
  [174.8, -41.3],
  [174.7, -41.25],
  [175.0, -40.85],
  [175.1, -40.7],
  [175.2, -40.45],
  [175.0, -39.95],
  [174.5, -39.8],
  [174.25, -39.65],
  [173.85, -39.45],
  [173.75, -39.28],
  [174.05, -39.05],
  [174.25, -38.98],
  [174.6, -38.7],
  [174.7, -38.3],
  [174.8, -38.05],
  [174.85, -37.8],
  [174.7, -37.4],
  [174.55, -37.05],
  [174.4, -36.85],
  [174.15, -36.4],
  [173.8, -36.1],
  [173.4, -35.5],
  [173.1, -35.15],
  [172.85, -34.75],
];

const southIsland: [number, number][] = [
  [172.75, -40.5],
  [172.8, -40.85],
  [173.0, -40.8],
  [173.1, -41.0],
  [173.3, -41.27],
  [173.9, -40.8],
  [174.15, -41.0],
  [174.3, -41.0],
  [174.15, -41.35],
  [174.28, -41.73],
  [174.0, -42.0],
  [173.7, -42.4],
  [173.4, -42.65],
  [173.05, -43.05],
  [172.85, -43.2],
  [172.75, -43.5],
  [173.1, -43.75],
  [172.95, -43.9],
  [172.4, -43.85],
  [172.1, -44.0],
  [171.75, -44.1],
  [171.25, -44.4],
  [171.05, -44.95],
  [170.97, -45.1],
  [170.85, -45.35],
  [170.7, -45.85],
  [170.2, -46.05],
  [169.8, -46.45],
  [169.3, -46.6],
  [168.8, -46.55],
  [168.35, -46.6],
  [167.9, -46.35],
  [167.4, -46.2],
  [166.6, -46.15],
  [166.5, -45.75],
  [166.9, -45.3],
  [167.9, -44.6],
  [168.3, -44.3],
  [168.6, -43.95],
  [169.05, -43.85],
  [169.6, -43.6],
  [169.9, -43.4],
  [170.15, -43.2],
  [170.95, -42.7],
  [171.2, -42.45],
  [171.35, -42.1],
  [171.6, -41.75],
  [172.1, -41.25],
  [172.1, -40.95],
  [172.2, -40.75],
  [172.65, -40.5],
];

const stewartIsland: [number, number][] = [
  [167.7, -46.75],
  [168.2, -46.85],
  [168.25, -47.1],
  [167.95, -47.3],
  [167.5, -47.2],
  [167.55, -46.9],
];

const W = 380;
const H = 540;
const K = 40;
const project = ([lon, lat]: [number, number]) => ({
  x: (lon - 166.2) * 0.755 * K,
  y: (lat + 34.2) * -K,
});
/* Marker position as a percentage of the map box, so HTML buttons can sit
   over the SVG at any rendered size. */
const position = (lon: number, lat: number) => {
  const { x, y } = project([lon, lat]);
  return { left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` };
};
const toPath = (pts: [number, number][]) =>
  `${pts
    .map((p, i) => {
      const { x, y } = project(p);
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ")} Z`;

const islands = [northIsland, southIsland, stewartIsland].map(toPath);
const ease = [0.22, 1, 0.36, 1] as const;

type Place = (typeof places)[number];

/**
 * Map of New Zealand with D&T's offices (diamonds) and the regions it works
 * in (orange dots). Selecting a marker, or a name in the list, shows its
 * details in the side panel.
 */
export function NzMap() {
  const [selected, setSelected] = useState<Place>(places[0]);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
      {/* Width-capped, height follows the viewBox ratio so the markers,
          positioned in percentages, land on the coastline. */}
      <div
        className="relative mx-auto w-full max-w-md"
        style={{ aspectRatio: `${W} / ${H}` }}
      >
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="absolute inset-0 size-full"
          role="img"
          aria-label="Map of New Zealand"
        >
          <title>Map of New Zealand</title>
          {islands.map((d) => (
            <motion.path
              key={d}
              d={d}
              fill="var(--line)"
              stroke="var(--muted)"
              strokeOpacity={0.5}
              strokeWidth={1.5}
              strokeLinejoin="round"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              whileInView={{ pathLength: 1, fillOpacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            />
          ))}
        </svg>

        {places.map((place, i) => {
          const active = selected.name === place.name;
          return (
            <motion.button
              key={place.name}
              type="button"
              aria-label={place.name}
              aria-pressed={active}
              onClick={() => setSelected(place)}
              className="group absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center p-1 outline-none hover:z-10 focus-visible:z-10"
              style={position(place.lon, place.lat)}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.14, delay: 0.24 + i * 0.04, ease }}
            >
              <span
                className={cn(
                  "flex size-6 items-center justify-center rounded-full border-2 border-background bg-accent transition-shadow group-hover:ring-4 group-hover:ring-accent/25",
                  active && "ring-2 ring-foreground ring-offset-2",
                )}
              >
                {place.kind === "office" && (
                  <span className="size-2 rotate-45 bg-foreground" />
                )}
              </span>
              <span className="pointer-events-none absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-background text-xs opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                {place.name}
              </span>
            </motion.button>
          );
        })}
      </div>

      <div>
        <ul className="grid gap-1">
          {places.map((place) => (
            <li key={place.name}>
              <button
                type="button"
                onClick={() => setSelected(place)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left font-medium transition-colors hover:bg-card",
                  selected.name === place.name && "bg-card",
                )}
              >
                {place.kind === "office" ? (
                  <span className="size-2.5 rotate-45 bg-foreground" />
                ) : (
                  <span className="size-2.5 rounded-full bg-accent" />
                )}
                {place.name}
                <span className="ml-auto text-muted text-sm">
                  {place.kind === "office" ? "Office" : "Region"}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-6 min-h-40 rounded-2xl bg-card p-5 md:p-6">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selected.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-semibold text-2xl tracking-tight">
                {selected.name}
              </h3>
              <p className="mt-2 text-muted">{selected.note}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
