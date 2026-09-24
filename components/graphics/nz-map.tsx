"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
  hubCount,
  memberHubs,
  memberTotal,
  offices,
  type Trade,
  trades,
} from "@/lib/content";
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

type Hub = (typeof memberHubs)[number];
type Office = (typeof offices)[number];

/* One entry per town. A town can have an office, members, or both, and gets
   a single marker so neither hides the other. */
type Place = {
  town: string;
  lon: number;
  lat: number;
  office?: Office;
  hub?: Hub;
};

const places: Place[] = [
  ...memberHubs.map((hub) => ({
    town: hub.town,
    lon: hub.lon,
    lat: hub.lat,
    hub,
    office: offices.find((o) => o.city === hub.town),
  })),
  ...offices
    .filter((o) => !memberHubs.some((h) => h.town === o.city))
    .map((office) => ({
      town: office.city,
      lon: office.lon,
      lat: office.lat,
      office,
    })),
];

/* Marker diameter grows with the square root of the count, so area tracks
   the number of members rather than exaggerating the big towns. Towns with an
   office never drop below 24px, or the diamond would cover the circle. */
const markerSize = (count: number, hasOffice: boolean) =>
  count === 0 ? 16 : Math.max(10 + Math.sqrt(count) * 5, hasOffice ? 24 : 0);

/**
 * Interactive map of New Zealand. Two layers, D&T offices and Alliance
 * member hubs, each toggleable; members can be narrowed to one trade.
 * Clicking a marker opens its details in the side panel.
 */
export function NzMap() {
  const [showOffices, setShowOffices] = useState(true);
  const [showMembers, setShowMembers] = useState(true);
  const [trade, setTrade] = useState<Trade | undefined>();
  const [selected, setSelected] = useState<Place | null>(null);

  const visible = places
    .map((place) => ({
      place,
      count: showMembers && place.hub ? hubCount(place.hub, trade) : 0,
      office: showOffices ? place.office : undefined,
    }))
    .filter(({ count, office }) => count > 0 || office);
  const shownTotal = memberHubs.reduce((sum, h) => sum + hubCount(h, trade), 0);
  const shownTowns = memberHubs.filter((h) => hubCount(h, trade) > 0).length;

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div>
        <div className="flex flex-wrap gap-2">
          <LayerToggle
            on={showOffices}
            onClick={() => setShowOffices((v) => !v)}
            swatch={<span className="size-2.5 rotate-45 bg-foreground" />}
          >
            Offices
          </LayerToggle>
          <LayerToggle
            on={showMembers}
            onClick={() => setShowMembers((v) => !v)}
            swatch={<span className="size-2.5 rounded-full bg-accent" />}
          >
            Alliance members
          </LayerToggle>
        </div>

        {/* Width-capped, height follows the viewBox ratio so the markers,
            positioned in percentages, land on the coastline. */}
        <div
          className="relative mx-auto mt-6 w-full max-w-md"
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

          <AnimatePresence>
            {visible.map(({ place, count, office }, i) => {
              const active = selected?.town === place.town;
              const label = [
                place.town,
                office && "office",
                count > 0 && `${count} ${trade ?? "members"}`,
              ]
                .filter(Boolean)
                .join(", ");
              return (
                <Marker
                  key={place.town}
                  style={position(place.lon, place.lat)}
                  delay={0.24 + i * 0.012}
                  label={label}
                  onClick={() => setSelected(place)}
                >
                  <motion.span
                    className={cn(
                      "flex items-center justify-center rounded-full border-2 border-background transition-colors",
                      count > 0
                        ? "bg-accent group-hover:ring-4 group-hover:ring-accent/25"
                        : "bg-transparent border-transparent",
                      active && "ring-2 ring-foreground ring-offset-2",
                    )}
                    animate={{
                      width: markerSize(count, !!office),
                      height: markerSize(count, !!office),
                    }}
                    transition={{ duration: 0.3, ease }}
                  >
                    {office && (
                      <span className="size-2 rotate-45 bg-foreground" />
                    )}
                  </motion.span>
                </Marker>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div>
        <p className="font-medium text-sm">Filter members by trade</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Chip on={!trade} onClick={() => setTrade(undefined)}>
            All trades
          </Chip>
          {trades.map((t) => (
            <Chip key={t} on={trade === t} onClick={() => setTrade(t)}>
              {t}
            </Chip>
          ))}
        </div>

        <div className="mt-8 min-h-72 rounded-2xl border border-line bg-card p-6">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selected?.town ?? "summary"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {selected ? (
                <>
                  <PlaceDetail place={selected} trade={trade} />
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    className="mt-6 text-muted text-sm underline underline-offset-4 hover:text-foreground"
                  >
                    Back to overview
                  </button>
                </>
              ) : (
                <Summary
                  shownTotal={shownTotal}
                  towns={shownTowns}
                  trade={trade}
                  onPick={setSelected}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* A button centred on a map point. The name shows on hover and focus. */
function Marker({
  style,
  delay,
  label,
  onClick,
  children,
}: {
  style: { left: string; top: string };
  delay: number;
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="group absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center p-1 outline-none hover:z-10 focus-visible:z-10"
      style={style}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      // Exits skip the staggered entry delay so filtering feels immediate.
      exit={{ opacity: 0, scale: 0, transition: { duration: 0.2 } }}
      viewport={{ once: true }}
      transition={{ duration: 0.14, delay, ease }}
    >
      {children}
      <span className="pointer-events-none absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-background text-xs opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        {label}
      </span>
    </motion.button>
  );
}

function LayerToggle({
  on,
  onClick,
  swatch,
  children,
}: {
  on: boolean;
  onClick: () => void;
  swatch: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors",
        on
          ? "border-foreground bg-card"
          : "border-line text-muted opacity-60 hover:opacity-100",
      )}
    >
      {swatch}
      {children}
    </button>
  );
}

function Chip({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-sm transition-colors",
        on
          ? "border-accent bg-accent text-background"
          : "border-line bg-card hover:border-foreground",
      )}
    >
      {children}
    </button>
  );
}

function Summary({
  shownTotal,
  towns,
  trade,
  onPick,
}: {
  shownTotal: number;
  towns: number;
  trade?: Trade;
  onPick: (place: Place) => void;
}) {
  return (
    <>
      <p className="font-semibold text-4xl text-accent-strong tabular-nums tracking-tight">
        {shownTotal}
      </p>
      <p className="mt-1 text-muted">
        {trade ? trade.toLowerCase() : "Alliance member businesses"} in {towns}{" "}
        towns
        {trade && ` (of ${memberTotal} members)`}
      </p>
      <p className="mt-6 font-medium text-sm">Offices</p>
      <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1">
        {places
          .filter((p) => p.office)
          .map((p) => (
            <li key={p.town}>
              <button
                type="button"
                onClick={() => onPick(p)}
                className="text-muted hover:text-foreground"
              >
                {p.town}
              </button>
            </li>
          ))}
      </ul>
      <p className="mt-6 text-muted text-sm">Select a marker for details.</p>
    </>
  );
}

/* Everything D&T has in one town: the office, then the member breakdown. */
function PlaceDetail({ place, trade }: { place: Place; trade?: Trade }) {
  const total = place.hub ? hubCount(place.hub) : 0;
  // Largest trade first; the bar scale is relative to that.
  const rows = trades
    .map((t) => ({ t, n: place.hub?.members[t] ?? 0 }))
    .filter(({ n }) => n > 0)
    .sort((a, b) => b.n - a.n);
  const max = rows[0]?.n ?? 1;
  return (
    <>
      <h3 className="font-semibold text-2xl tracking-tight">{place.town}</h3>
      {place.office && (
        <div className="mt-4 flex items-start gap-3">
          <span className="mt-1.5 size-2.5 shrink-0 rotate-45 bg-foreground" />
          <div>
            <p className="font-medium">
              {place.office.role === "Head office"
                ? "Head office"
                : "Regional office"}
            </p>
            <p className="text-muted text-sm">
              {place.office.manager}, {place.office.role}
            </p>
          </div>
        </div>
      )}
      {rows.length > 0 && (
        <>
          <p className="mt-6 text-muted">
            {total} Alliance member {total === 1 ? "business" : "businesses"}{" "}
            based here
          </p>
          <ul className="mt-3 grid gap-2">
            {rows.map(({ t, n }) => (
              <li
                key={t}
                className={cn(
                  "grid grid-cols-[7rem_1fr_1.5rem] items-center gap-3 text-sm",
                  trade && trade !== t && "opacity-40",
                )}
              >
                <span>{t}</span>
                <span className="h-2 rounded-full bg-line">
                  <motion.span
                    className="block h-full rounded-full bg-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${(n / max) * 100}%` }}
                    transition={{ duration: 0.5, ease }}
                  />
                </span>
                <span className="text-right tabular-nums">{n}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
