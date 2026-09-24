/**
 * Every fact the site states, in one place. Anything marked PLACEHOLDER is a
 * guess made to shape the page and needs a real number or name before launch.
 */

export const company = {
  name: "Duncan & Taylor",
  short: "D&T",
  /* PLACEHOLDER: "57 years" in the brief puts founding around 1969. Confirm. */
  founded: 1969,
  tagline: "Built on systems. Backed by experience.",
  blurb:
    "Residential and light commercial reinstatement and facilities maintenance, delivered by local trade businesses under one accountable name. New Zealand owned and operated.",
  /* PLACEHOLDER contact details. */
  email: "hello@duncantaylor.co.nz",
  phone: "0800 000 000",
  address: "Wellington, New Zealand",
};

export const yearsOperating = new Date().getFullYear() - company.founded;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/alliance", label: "The Alliance" },
  { href: "/government", label: "Government" },
  { href: "/about", label: "Our story" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "reinstatement",
    title: "Insurance reinstatement",
    summary:
      "Scoped, priced and rebuilt to the claim. Tried and tested with insurers for decades.",
    detail:
      "From make-safe through to handover, one team owns the claim. We scope accurately, hold cost against the estimate, manage every trade on site and keep the homeowner informed at each step.",
  },
  {
    slug: "residential",
    title: "Residential and light commercial",
    summary:
      "Repairs, renovations and remediation for homes, rentals and small commercial premises.",
    detail:
      "Planned works and reactive repairs across housing portfolios and small commercial sites. Programmed to minimise disruption for tenants and occupants.",
  },
  {
    slug: "maintenance",
    title: "Facilities maintenance",
    summary:
      "Planned and reactive maintenance for property portfolios, with real-time reporting.",
    detail:
      "Recurring inspections, compliance work and responsive repairs delivered by local trades who know the buildings. Every job logged, photographed and reported.",
  },
] as const;

/* What D&T carries so an Alliance member does not have to. */
export const allianceSupport = [
  {
    title: "Insurance",
    body: "Public liability and contract works held centrally.",
  },
  {
    title: "Health and safety",
    body: "One system, audited, across every site.",
  },
  {
    title: "Weekly payment",
    body: "Members are paid weekly, not on claim settlement.",
  },
  {
    title: "Payment protection",
    body: "D&T carries the financial risk on every job.",
  },
  {
    title: "Invoicing",
    body: "One invoice to the client. None for the member to chase.",
  },
  { title: "Pricing", body: "Consistent rates, agreed up front." },
];

export const trades = [
  "Builders",
  "Painters",
  "Plumbers",
  "Electricians",
  "Roofers",
  "Plasterers",
  "Flooring",
  "Glaziers",
  "Tilers",
  "Drainlayers",
  "Scaffolders",
  "Landscapers",
] as const;

export type Trade = (typeof trades)[number];

/* The claim journey, as listed in the brief. */
export const journey = [
  {
    title: "Scope",
    body: "Accurate on-site assessment, photographed and documented.",
  },
  {
    title: "Cost control",
    body: "Priced against agreed rates. Variations flagged before they happen.",
  },
  {
    title: "Contractor management",
    body: "Local Alliance trades scheduled, inducted and supervised.",
  },
  {
    title: "Customer communication",
    body: "Homeowner and client updated at every stage.",
  },
  { title: "Handover", body: "Quality checked, signed off, reported." },
];

/* PLACEHOLDER offices. Longitude and latitude place them on the map. */
export const offices = [
  {
    city: "Auckland",
    lon: 174.76,
    lat: -36.85,
    manager: "Name",
    role: "Regional Manager, Northern",
  },
  {
    city: "Hamilton",
    lon: 175.28,
    lat: -37.79,
    manager: "Name",
    role: "Regional Manager, Central North",
  },
  {
    city: "Wellington",
    lon: 174.78,
    lat: -41.29,
    manager: "Peter Taylor",
    role: "Head office",
  },
  {
    city: "Christchurch",
    lon: 172.64,
    lat: -43.53,
    manager: "Name",
    role: "Regional Manager, Canterbury",
  },
  {
    city: "Dunedin",
    lon: 170.5,
    lat: -45.87,
    manager: "Name",
    role: "Regional Manager, Southern",
  },
];

/* PLACEHOLDER Alliance member counts, grouped by the town each business is
   based in. Counts only, never names: the map shows coverage, not people. */
export const memberHubs: {
  town: string;
  lon: number;
  lat: number;
  members: Partial<Record<Trade, number>>;
}[] = [
  {
    town: "Whangārei",
    lon: 174.32,
    lat: -35.73,
    members: { Builders: 2, Painters: 2, Plumbers: 1, Roofers: 1 },
  },
  {
    town: "Auckland",
    lon: 174.76,
    lat: -36.85,
    members: {
      Builders: 8,
      Painters: 6,
      Plumbers: 4,
      Electricians: 4,
      Roofers: 3,
      Plasterers: 3,
      Flooring: 2,
      Glaziers: 2,
      Tilers: 2,
      Drainlayers: 1,
      Scaffolders: 2,
      Landscapers: 1,
    },
  },
  {
    town: "Hamilton",
    lon: 175.28,
    lat: -37.79,
    members: {
      Builders: 4,
      Painters: 3,
      Plumbers: 2,
      Electricians: 2,
      Roofers: 1,
      Plasterers: 1,
      Flooring: 1,
    },
  },
  {
    town: "Tauranga",
    lon: 176.17,
    lat: -37.69,
    members: {
      Builders: 3,
      Painters: 2,
      Plumbers: 1,
      Electricians: 1,
      Tilers: 1,
    },
  },
  {
    town: "Rotorua",
    lon: 176.25,
    lat: -38.14,
    members: { Builders: 2, Painters: 1, Roofers: 1 },
  },
  {
    town: "Gisborne",
    lon: 178.02,
    lat: -38.66,
    members: { Builders: 1, Painters: 1, Plumbers: 1 },
  },
  {
    town: "Napier",
    lon: 176.91,
    lat: -39.49,
    members: {
      Builders: 3,
      Painters: 2,
      Plumbers: 1,
      Electricians: 1,
      Roofers: 1,
      Drainlayers: 1,
    },
  },
  {
    town: "New Plymouth",
    lon: 174.07,
    lat: -39.06,
    members: { Builders: 2, Painters: 1, Plumbers: 1, Electricians: 1 },
  },
  {
    town: "Whanganui",
    lon: 175.05,
    lat: -39.93,
    members: { Builders: 1, Painters: 1, Roofers: 1 },
  },
  {
    town: "Palmerston North",
    lon: 175.61,
    lat: -40.35,
    members: {
      Builders: 2,
      Painters: 2,
      Plumbers: 1,
      Electricians: 1,
      Flooring: 1,
    },
  },
  {
    town: "Masterton",
    lon: 175.66,
    lat: -40.95,
    members: { Builders: 1, Painters: 1 },
  },
  {
    town: "Wellington",
    lon: 174.78,
    lat: -41.29,
    members: {
      Builders: 5,
      Painters: 4,
      Plumbers: 3,
      Electricians: 2,
      Roofers: 2,
      Plasterers: 2,
      Glaziers: 1,
      Tilers: 1,
      Scaffolders: 1,
    },
  },
  {
    town: "Nelson",
    lon: 173.28,
    lat: -41.27,
    members: { Builders: 2, Painters: 1, Plumbers: 1, Landscapers: 1 },
  },
  {
    town: "Blenheim",
    lon: 173.95,
    lat: -41.51,
    members: { Builders: 1, Painters: 1, Roofers: 1 },
  },
  {
    town: "Greymouth",
    lon: 171.21,
    lat: -42.45,
    members: { Builders: 1, Plumbers: 1 },
  },
  { town: "Kaikōura", lon: 173.68, lat: -42.4, members: { Builders: 1 } },
  {
    town: "Christchurch",
    lon: 172.64,
    lat: -43.53,
    members: {
      Builders: 7,
      Painters: 5,
      Plumbers: 3,
      Electricians: 3,
      Roofers: 3,
      Plasterers: 3,
      Flooring: 2,
      Glaziers: 1,
      Tilers: 2,
      Drainlayers: 2,
      Scaffolders: 1,
      Landscapers: 1,
    },
  },
  {
    town: "Ashburton",
    lon: 171.75,
    lat: -43.9,
    members: { Builders: 1, Painters: 1, Electricians: 1 },
  },
  {
    town: "Timaru",
    lon: 171.25,
    lat: -44.4,
    members: { Builders: 2, Painters: 1, Plumbers: 1 },
  },
  {
    town: "Queenstown",
    lon: 168.66,
    lat: -45.03,
    members: { Builders: 2, Painters: 1, Electricians: 1, Landscapers: 1 },
  },
  {
    town: "Dunedin",
    lon: 170.5,
    lat: -45.87,
    members: {
      Builders: 3,
      Painters: 2,
      Plumbers: 2,
      Electricians: 1,
      Roofers: 1,
      Plasterers: 1,
    },
  },
  {
    town: "Invercargill",
    lon: 168.35,
    lat: -46.41,
    members: { Builders: 2, Painters: 1, Plumbers: 1, Roofers: 1 },
  },
];

/* Members in a hub, optionally narrowed to one trade. */
export const hubCount = (hub: (typeof memberHubs)[number], trade?: Trade) =>
  trade
    ? (hub.members[trade] ?? 0)
    : Object.values(hub.members).reduce((sum, n) => sum + n, 0);

export const memberTotal = memberHubs.reduce(
  (sum, hub) => sum + hubCount(hub),
  0,
);

/* PLACEHOLDER people. Headshots go in /public/people/<slug>.jpg. */
export const management = [
  { name: "Peter Taylor", role: "Director", slug: "peter-taylor" },
  { name: "Name", role: "Managing Director", slug: "" },
  { name: "Name", role: "Operations Manager", slug: "" },
  { name: "Name", role: "Health and Safety Manager", slug: "" },
  { name: "Name", role: "Regional Manager, North Island", slug: "" },
  { name: "Name", role: "Regional Manager, South Island", slug: "" },
];

/* PLACEHOLDER milestones. */
export const milestones = [
  {
    year: company.founded,
    body: "Duncan & Taylor founded as a building and decorating firm.",
  },
  { year: 1990, body: "First insurance reinstatement contracts." },
  { year: 2011, body: "Canterbury earthquake reinstatement programme." },
  {
    year: 2018,
    body: "The Alliance model launched: local trade businesses under one name.",
  },
  { year: 2024, body: "Facilities maintenance added for portfolio clients." },
];

/* PLACEHOLDER figures. The brief asks for a running tracker; until there is a
   data source these are hand-edited here, except
   the member count, which is summed from the map data above. */
export const stats = [
  { value: yearsOperating, label: "Years in business", suffix: "" },
  { value: 12400, label: "Jobs completed", suffix: "+" },
  { value: memberTotal, label: "Alliance trade businesses", suffix: "" },
  { value: 100, label: "New Zealand owned", suffix: "%" },
];

/* PLACEHOLDER quotes, to be replaced with interviews with local members. */
export const memberQuotes = [
  {
    quote:
      "I do the work I'm good at and the paperwork just isn't there any more.",
    who: "Painter, Canterbury",
  },
  {
    quote: "Paid every week. That changes how you run a small business.",
    who: "Builder, Waikato",
  },
  {
    quote:
      "We get government work as a two-person outfit. That doesn't happen on your own.",
    who: "Plumber, Wellington",
  },
];
