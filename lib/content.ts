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
  { href: "/team", label: "Team" },
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

/* The parts of a house reinstatement covers, in the order they are numbered
   on the house drawing. Contents and vehicles are not part of it. */
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
    title: "Roof",
    body: "Roof cladding, roof framing and ceiling insulation.",
  },
  {
    title: "Outside",
    body: "Fences, decks, verandas and tree work.",
  },
];

/* How big a job can be. */
export const jobSizes = [
  {
    figure: "~$1,000",
    body: "A patch, plaster and paint. The small end of what we do.",
  },
  {
    figure: "~30 days",
    body: "Jobs under $10,000 are usually finished inside a month.",
  },
  {
    figure: "$250,000+",
    body: "A full rebuild after a fire or a slip. The big end. Same team, same systems.",
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

/* A claim from our side, start to finish. Drawn as a job sheet. */
export const journey = [
  {
    title: "Assigned",
    body: "The insurer sends it. One regional manager owns it from this moment to handover.",
  },
  {
    title: "Make safe and scope",
    body: "The builder tarps the roof and clears the hazard. The scoper films the lot, in 3D if it's big. A plumber or sparky joins the call if needed. The homeowner is home once.",
  },
  {
    title: "Priced",
    body: "Every line priced against the insurer's rates before the call ends. The insurer sets a reserve that day.",
  },
  {
    title: "Safety plan sent",
    body: "Apollo writes the site plan from the scope and sends it to the crew's phones. Pre-start checks are signed off on site.",
  },
  {
    title: "Repaired",
    body: "An Alliance crew does the work. Photos go up from site. Find more damage behind a wall, and the variation goes to the adjuster the same day.",
  },
  {
    title: "Costs matched",
    body: "Supplier invoices are read and matched to the job as they arrive. The insurer can see the running cost any time, not just at the end.",
  },
  {
    title: "Handed over",
    body: "Quality checked by an inspector who doesn't work for the crew. Signed off. The whole record stays in Eden.",
  },
];

/* The job on the example sheet. Illustrative, not a real claim. */
export const exampleJob = {
  number: "10,412",
  where: "Karori, Wellington",
  tier: "Orange",
  received: "02:40",
  called: "02:49",
  /* How many of the `journey` steps are ticked off. */
  done: 4,
};

/* The software D&T builds and runs, in the order a job passes through it.
   `short` is the one-liner on the home page; `body` the full description. */
export const platform = [
  {
    name: "ATC",
    role: "Intake and dispatch",
    short:
      "Intake and dispatch, 24/7. A.I. suggests the tier, a person confirms it.",
    body: "Work orders land here, whether they come by email, portal or API. A.I. reads it against the client's rules and the property's history, then an operator confirms the urgency and assigns it. A person makes the call before anything goes out.",
  },
  {
    name: "Hermes",
    role: "Remote scoping",
    short:
      "Scoping on a recorded video call. 8 to 10 a day per tech, up from 4.",
    body: "A field technician walks the property on a recorded video call while someone at the hub writes and prices the scope. A plumber or electrician joins the call if needed. Afterwards Hermes reviews the recording and flags anything that looks missed.",
  },
  {
    name: "Domino",
    role: "Pricing",
    short: "Each line priced against the insurer's rates, build-up kept.",
    body: "Prices each scope line against the client's agreed pricebook and keeps the build-up behind every line. It warns on anything incomplete, and an approved quote goes straight onto the job.",
  },
  {
    name: "Apollo",
    role: "Safety planning",
    short: "Site safety plan and pre-start, straight to the crew's phone.",
    body: "Writes the site-specific safety plan and pre-start checklist from the scope and sends them to the trade's phone. The foreman signs off the checks on site.",
  },
  {
    name: "Pluto",
    role: "Job costs",
    short: "Supplier invoices matched to the job as they land.",
    body: "Reads incoming supplier invoices and matches them to the job they belong to, so we know what a job has cost as it happens, not at month end.",
  },
  {
    name: "Eden",
    role: "Job portal",
    short: "Where the insurer and the homeowner watch the job.",
    body: "Where insurers, adjusters and homeowners follow a job: progress, photos, documents, costs and messages to the team doing the work.",
  },
];

/* What a member gets from D&T. Titles double as the labels on the Alliance
   ring, so keep them short. */
export const allianceSupport = [
  {
    title: "No minimum",
    body: "Turn a job down, take work elsewhere, whenever you like.",
  },
  {
    title: "Keep what you save",
    body: "Bring it in under the allocation and the difference is yours.",
  },
  {
    title: "Paid weekly",
    body: "Signed off this week, paid in the next run. Nobody chases an invoice.",
  },
  {
    title: "Scoped and priced",
    body: "We quote it and argue the variations with the insurer.",
  },
  {
    title: "Safety plan on your phone",
    body: "Apollo writes it from the scope and sends it before you pull up.",
  },
  {
    title: "Steady work",
    body: "Insurer and government jobs come to the Alliance, not to a two-person outfit.",
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

type Person = {
  name: string;
  role: string;
  /* Where they sit, or since when. Set in small mono caps on the card. */
  base: string;
  note?: string;
  /* Wider card with room for a longer note. */
  lead?: true;
  /* Only in the 2024 memorandum, not the 2026 org chart, or needs the
     owner's say-so. Renders a visible flag until the field is removed. */
  confirm?: true;
};

/* A desk or crew rather than one named person. */
type Desk = { desk: string; role: string; base: string; note: string };

/* Everyone on the team page, grouped the way the business is run. Headshots
   go in /public/people once D&T supply them. */
export const team: { group: string; members: (Person | Desk)[] }[] = [
  {
    group: "Running it",
    members: [
      {
        name: "Vince Gregan",
        role: "General Manager",
        base: "Miramar · since 2017",
        lead: true,
        note: "Plumbing apprentice at D&T at sixteen. Left, built and sold trade businesses, advised about thirty more on how to run theirs, and came back in 2017 to run this one. Set up the Alliance. Opened the Wairarapa, Manawatū and Hawke's Bay. Deloitte Fast 50, 2022.",
      },
      {
        name: "Kelly Spratt",
        role: "General Manager, South Island",
        base: "Christchurch",
        lead: true,
        note: "Runs the Christchurch hub and everything south of Cook Strait, including the South Island Alliance crews.",
      },
      {
        name: "Brent Taylor",
        role: "Director",
        base: "Board",
        confirm: true,
        note: "Peter Taylor's son. Second generation to own the firm. On the board, not in the office.",
      },
      {
        name: "Peter Wilkes",
        role: "Commercial Manager",
        base: "Miramar · since 2019",
        note: "Trade payments, invoicing, reconciliation. Massey, Master of Management Communication.",
      },
      {
        name: "John Quinlivan",
        role: "Data and Systems Lead",
        base: "Miramar",
        note: "Leads the developers behind ATC, Hermes, Domino, Apollo, Pluto and Eden. Former start-up CTO.",
      },
      {
        name: "Erin Walshe",
        role: "Commercial Strategy and Partnerships",
        base: "Miramar",
        confirm: true,
        note: "Insurer relationships and the national expansion. Ex investment banking, founded and sold a start-up.",
      },
    ],
  },
  {
    group: "Safety and quality",
    members: [
      {
        name: "Nicki Payne",
        role: "Health, Safety and Wellbeing Lead",
        base: "Miramar",
      },
      {
        name: "Dave Clements",
        role: "Assurance Lead",
        base: "Wairarapa",
        note: "Inspections, the assurance plan, corrective actions. Was Regional Manager, Wairarapa.",
      },
      {
        name: "Mark Gregan",
        role: "Health and Safety Officer",
        base: "Field",
      },
      {
        name: "Khenn Canobis",
        role: "Health and Safety Officer",
        base: "Field",
        confirm: true,
      },
    ],
  },
  {
    group: "In the regions",
    members: [
      {
        name: "David Gollan",
        role: "Regional Manager",
        base: "Wellington and Kāpiti",
        note: "Owns the Wellington claims and looks after the crews doing them.",
      },
      /* The org chart pairs Alastair with the Palmerston North and Napier
         hub but does not give his title outright. */
      {
        name: "Alastair Harris",
        role: "Regional Manager",
        base: "Palmerston North and Napier",
        confirm: true,
        note: "Manawatū and Hawke's Bay.",
      },
      {
        desk: "Christchurch",
        role: "Under Kelly Spratt",
        base: "Hub and field",
        note: "Field technicians, a customer coordinator, an independent quality inspector.",
      },
      {
        desk: "Five on the tools",
        role: "Employed by D&T directly",
        base: "Field",
        note: "Our own tradespeople, who back up the Alliance crews on make-safes and the odd jobs nobody else wants.",
      },
    ],
  },
  {
    group: "Office and hub",
    members: [
      {
        name: "Jordan Taylor",
        role: "Accounts Assistant",
        base: "Miramar",
        confirm: true,
      },
      {
        name: "Tayla Hall",
        role: "Office Assistant",
        base: "Miramar",
        confirm: true,
      },
      {
        desk: "The dispatch desk",
        role: "ATC operators",
        base: "Wellington and Christchurch · 24 hrs",
        note: "Read every work order, confirm the tier, assign the crew, call the homeowner.",
      },
      {
        desk: "The scoping hub",
        role: "Hermes",
        base: "Field techs and hub pricers",
        note: "Walk the property on video, write and price the scope live. Plus our software engineers and a data analyst.",
      },
    ],
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

/* Four moments for the archive strip on the home page. `photo` is what
   should be in the frame; frames are hatched until D&T dig the photos out. */
export const archive = [
  {
    when: "1980s",
    body: "New foundations under the Wellington Cable Car. Ours.",
    photo: "Archive photo",
  },
  {
    when: "1990s",
    body: "The nocturnal house and the chimpanzee enclosure at Wellington Zoo.",
    photo: "Archive photo",
  },
  {
    when: "2017",
    body: "Vince Gregan, who started here as a 16-year-old plumbing apprentice, comes back to run the place. He sets up the Alliance.",
    photo: "Photo: Vince on site",
  },
  {
    when: "2023",
    body: "Crews relocate to Hawke's Bay after Cyclone Gabrielle. 2024: ten thousandth job, and Manawatū opens at an insurer's request.",
    photo: "Photo: Hawke's Bay crew",
  },
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
