/**
 * Every fact the site states, in one place. Sourced from the documents in
 * /bussiness_info. Anything marked PLACEHOLDER is not in those documents and
 * needs a real value before launch.
 *
 * The source documents are mostly confidential (an information memorandum,
 * tender appendices, client pitches). Financials, margins, client revenue
 * splits and named clients are deliberately left out of this file.
 */

export const company = {
  name: "Duncan & Taylor",
  short: "D&T",
  founded: 1969,
  founders: "Peter Taylor and Ron Duncan",
  tagline: "Built on systems. Backed by experience.",
  blurb:
    "Insurance reinstatement, emergency make-safe and property maintenance for New Zealand homes. Working out of Wellington and Christchurch since 1969.",
  domain: "duncanandtaylor.co.nz",
  /* PLACEHOLDER: the documents give the domain but no address on it. */
  email: "hello@duncanandtaylor.co.nz",
  /* PLACEHOLDER phone. Should be the number that is answered 24/7. */
  phone: "0800 000 000",
  address: "Miramar, Wellington",
};

export const yearsOperating = new Date().getFullYear() - company.founded;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/platform", label: "Platform" },
  { href: "/alliance", label: "The Alliance" },
  { href: "/clients", label: "Who we work with" },
  { href: "/about", label: "Our story" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "emergency",
    title: "Emergency response and make-safe",
    summary:
      "Someone on call around the clock, and a crew at the property the same day.",
    detail:
      "Jobs are triaged the moment they arrive, so a collapsed ceiling over a sleeping family is handled before a cracked window. The homeowner hears from us within the hour. When a big storm hits we can move crews between regions, as we did for Hawke's Bay after Cyclone Gabrielle.",
    points: [
      "Same-day make-safe on every job",
      "Homeowner contacted within an hour",
      "Weatherproofing, hazard removal and temporary repairs",
      "Damage scoped on the same visit",
    ],
  },
  {
    slug: "reinstatement",
    title: "Insurance reinstatement",
    summary:
      "Any repair an insured home needs, from a patch and paint to a full rebuild.",
    detail:
      "Our regional managers take the claim from scope to handover. An Alliance member runs the repair on site, and we deal with the insurer, the adjuster and any variation if more damage turns up once the walls are open. Smaller jobs are usually finished within about 30 days.",
    points: [
      "On the panel for every major New Zealand insurer",
      "Scopes priced against each insurer's agreed rates",
      "Variations raised with the adjuster as soon as they're found",
      "Progress photos and written updates throughout",
    ],
  },
  {
    slug: "maintenance",
    title: "Property maintenance",
    summary:
      "Planned and reactive maintenance for public-sector and portfolio clients.",
    detail:
      "The way we run insurance work suits maintenance contracts too: a work order comes in, it gets triaged, the nearest qualified trade picks it up and the client can watch it close out. We already maintain homes for government agencies and property managers.",
    points: [
      "Work orders triaged and dispatched around the clock",
      "Rates agreed up front and shown line by line",
      "A safety plan and pre-start checks before work starts",
      "Live reporting the client can check at any time",
    ],
  },
] as const;

/* The parts of a house reinstatement covers. Contents and vehicles are not
   part of it. */
export const scope = [
  {
    title: "Walls and foundations",
    body: "Framing, linings and decorating. Piles, foundations, floor framing and insulation.",
  },
  {
    title: "Plumbing and electrical",
    body: "Pipework, bathrooms, tiling, underfloor heating and electrical work.",
  },
  {
    title: "Fixtures and fittings",
    body: "Cabinetry, heat pumps and fireplaces.",
  },
  {
    title: "Windows and doors",
    body: "Frames, glazing, curtains and blinds. Doors, garage doors and electric doors.",
  },
  {
    title: "Roofs",
    body: "Roof cladding, roof framing and ceiling insulation.",
  },
  {
    title: "Outside",
    body: "Fences, decks, verandas and tree work.",
  },
];

/* How ATC sorts incoming jobs. Colours are the tier names D&T uses. */
export const triage = [
  {
    tier: "Double Red",
    colour: "#b91c1c",
    when: "Risk to life. Structural collapse, live electrical hazards, flooding in an occupied home.",
    response: "Immediate. Every available crew is redirected.",
  },
  {
    tier: "Red",
    colour: "#ef4444",
    when: "Serious damage that will get worse today, or a vulnerable homeowner: elderly, disabled, or a family with young children.",
    response: "Same day",
  },
  {
    tier: "Orange",
    colour: "#fc5a08",
    when: "Most claims. Roof damage, broken windows, water getting in. Stable, but needs securing today.",
    response: "Same day",
  },
  {
    tier: "Yellow",
    colour: "#eab308",
    when: "The home is liveable and the damage is slow to spread, but it still needs a make-safe.",
    response: "Same day",
  },
  {
    tier: "Green",
    colour: "#16a34a",
    when: "Safe and stable. Light make-safe and routine repairs.",
    response: "Same day",
  },
];

/* A claim from our side, start to finish. */
export const journey = [
  {
    title: "Assigned",
    body: "The insurer or adjuster sends us the claim. One person at D&T owns it through to handover.",
  },
  {
    title: "One visit",
    body: "A builder makes the house safe while a scoper records the damage on video and photos, and in 3D on bigger losses.",
  },
  {
    title: "Priced",
    body: "The scope is priced against the insurer's rates the same day, so a reserve can be set straight away.",
  },
  {
    title: "Repaired",
    body: "An Alliance member does the work. Our regional manager watches quality, safety and any variations.",
  },
  {
    title: "Handed over",
    body: "Signed off. The photos, invoices and updates stay on the job for the insurer to check.",
  },
];

/* How many separate visits a homeowner sits through, by model. */
export const visits = {
  ours: ["Make-safe and scope, together"],
  typical: ["Make-safe contractor", "Loss assessor", "Reinstatement builder"],
};

/* The software D&T builds and runs, in the order a job passes through it. */
export const platform = [
  {
    name: "ATC",
    role: "Intake and dispatch",
    body: "Work orders land here, whether they come by email, portal or API. A.I. reads it against the client's rules and the property's history, then an operator confirms the urgency and assigns it. A person makes the call before anything goes out.",
  },
  {
    name: "Hermes",
    role: "Remote scoping",
    body: "A field technician walks the property on a recorded video call while someone at the hub writes and prices the scope. A plumber or electrician joins the call if needed. Afterwards Hermes reviews the recording and flags anything that looks missed.",
  },
  {
    name: "Domino",
    role: "Pricing",
    body: "Prices each scope line against the client's agreed pricebook and keeps the build-up behind every line. It warns on anything incomplete, and an approved quote goes straight onto the job.",
  },
  {
    name: "Apollo",
    role: "Safety planning",
    body: "Writes the site-specific safety plan and pre-start checklist from the scope and sends them to the trade's phone. The foreman signs off the checks on site.",
  },
  {
    name: "Pluto",
    role: "Job costs",
    body: "Reads incoming supplier invoices and matches them to the job they belong to, so we know what a job has cost as it happens, not at month end.",
  },
  {
    name: "Eden",
    role: "Job portal",
    body: "Where insurers, adjusters and homeowners follow a job: progress, photos, documents, costs and messages to the team doing the work.",
  },
];

/* What a member gets from D&T. */
export const allianceSupport = [
  {
    title: "Steady work",
    body: "Insurer and government jobs that a small outfit can't get on its own.",
  },
  {
    title: "Run your own job",
    body: "You lead the project and your subbies. Bring it in under the allocation and the difference is yours.",
  },
  {
    title: "No lock-in",
    body: "No minimum volume. Turn down a job or take work elsewhere whenever you like.",
  },
  {
    title: "Quoting done",
    body: "We scope, price and negotiate variations with the insurer.",
  },
  {
    title: "Safety plans",
    body: "A site-specific plan on your phone before you arrive.",
  },
  {
    title: "Paid weekly",
    body: "Once the work is signed off, it goes in the next weekly pay run.",
  },
];

/* How a trade business joins. */
export const joining = [
  {
    title: "Talk to us",
    body: "Tell us your trade, where you work and how big your crew is.",
  },
  {
    title: "Checks",
    body: "We check your insurance, your health and safety policies and your qualifications.",
  },
  {
    title: "Agreement",
    body: "One standard Alliance agreement. Everyone signs the same one.",
  },
  {
    title: "Onboarding",
    body: "We set you up on our systems and show you the reporting insurers expect.",
  },
];

/* Trades in the Alliance. Anything else comes from a wider pool of
   specialist subcontractors. */
export const trades = [
  "Carpenters",
  "Joiners",
  "Plasterers",
  "Painters",
  "Plumbers",
  "Gasfitters",
  "Electricians",
  "Roofers",
  "Bricklayers",
  "Demolition",
  "Flooring",
  "Project managers",
] as const;

/* Where D&T works. Offices are staffed bases; regions are served by local
   Alliance members and a regional manager. Coordinates place the map
   markers. */
export const places = [
  {
    name: "Wellington",
    kind: "office",
    lon: 174.78,
    lat: -41.29,
    note: "Head office in Miramar, and where the business started. Covers Wellington and the Kāpiti Coast. One of two 24/7 dispatch hubs.",
  },
  {
    name: "Christchurch",
    kind: "office",
    lon: 172.64,
    lat: -43.53,
    note: "Our South Island base, and the second 24/7 dispatch hub.",
  },
  {
    name: "Wairarapa",
    kind: "region",
    lon: 175.66,
    lat: -40.95,
    note: "Our first move outside Wellington, in 2021.",
  },
  {
    name: "Manawatū",
    kind: "region",
    lon: 175.61,
    lat: -40.35,
    note: "Opened in 2024 at the request of a major insurer, with local trades brought into the Alliance.",
  },
  {
    name: "Hawke's Bay",
    kind: "region",
    lon: 176.91,
    lat: -39.49,
    note: "Crews moved here after Cyclone Gabrielle in 2023 to help with the rebuild.",
  },
] as const;

export const offices = places.filter((p) => p.kind === "office");

/* Current leadership. Headshots go in /public/people/<slug>.jpg. */
export const management = [
  {
    name: "Vince Gregan",
    role: "General Manager",
    slug: "vince-gregan",
    note: "Started at D&T as a 16-year-old plumbing apprentice. Came back to run the business in 2017 and set up the Alliance.",
  },
  {
    name: "Kelly Spratt",
    role: "General Manager, South Island",
    slug: "kelly-spratt",
    note: "Leads the Christchurch team and our South Island network.",
  },
  {
    name: "Peter Wilkes",
    role: "Commercial Manager",
    slug: "peter-wilkes",
    note: "Trade payments, invoicing and reconciliation.",
  },
  {
    name: "John Quinlivan",
    role: "Data and Systems Lead",
    slug: "john-quinlivan",
    note: "A former start-up CTO. Leads the team that builds our software.",
  },
  {
    name: "Nicki Payne",
    role: "Health, Safety and Wellbeing Lead",
    slug: "nicki-payne",
    note: "Leads health and safety across our sites, with our safety officers.",
  },
  {
    name: "David Clements",
    role: "Assurance Lead",
    slug: "david-clements",
    note: "Quality inspections and following up anything that falls short.",
  },
  {
    name: "David Gollan",
    role: "Regional Manager, Wellington",
    slug: "david-gollan",
    note: "Allocates Wellington jobs and looks after the trades doing them.",
  },
  /* PLACEHOLDER region: the org chart pairs Alastair with the Palmerston
     North and Napier hub but does not give his title outright. */
  {
    name: "Alastair Harris",
    role: "Regional Manager, Manawatū and Hawke's Bay",
    slug: "alastair-harris",
    note: "Runs jobs and trades across Manawatū and Hawke's Bay.",
  },
];

export const milestones = [
  {
    year: "1969",
    body: `Founded in Wellington by ${company.founders}.`,
  },
  {
    year: "1970s",
    body: "Certified master builders. First insurance reinstatement contract, and a team of eight.",
  },
  {
    year: "1980s",
    body: "Built the new foundations for the Wellington Cable Car.",
  },
  {
    year: "1990s",
    body: "Built the nocturnal house and chimpanzee enclosure at Wellington Zoo. Brent Taylor, Peter's son, joins as a director.",
  },
  { year: "2000s", body: "Insurance reinstatement becomes the main focus." },
  {
    year: "2017",
    body: "Vince Gregan becomes General Manager and sets up the Alliance.",
  },
  { year: "2021", body: "Expands into the Wairarapa." },
  { year: "2022", body: "Named on the Deloitte Fast 50." },
  {
    year: "2023",
    body: "Crews relocate to Hawke's Bay to help rebuild after Cyclone Gabrielle.",
  },
  { year: "2024", body: "Opens in Manawatū. Passes 10,000 jobs." },
  { year: "2026", body: "Partnership with Flooring Design signed." },
];

/* Flooring Design partnership: D&T works out of FD stores nationwide. */
export const partnership = {
  name: "Flooring Design",
  domain: "flooringdesign.co.nz",
  rollout: [
    {
      when: "June 2026",
      body: "Partnership signed. Teams and stores start moving onto our systems.",
    },
    {
      when: "End of 2026",
      body: "A D&T base in every Flooring Design store from the Bombay Hills to Wellington.",
    },
    {
      when: "2027",
      body: "The same across the South Island.",
    },
  ],
};

/* Headline figures. Hand-edited until there is a live data source. */
export const stats = [
  { value: yearsOperating, label: "Years in business", suffix: "" },
  { value: 10000, label: "Jobs completed", suffix: "+" },
  { value: 80, label: "Alliance work crews", suffix: "+" },
  { value: 600, label: "Jobs a day our dispatch can handle", suffix: "" },
];
