import { scope } from "@/lib/content";

/* Where each number sits, in viewBox units, in the same order as `scope`. */
const markers = [
  [96, 322],
  [118, 252],
  [300, 245],
  [206, 186],
  [300, 100],
  [470, 270],
] as const;

/* A house in section with the areas reinstatement covers numbered on it.
   Stands in for a hero photo. Pipes and wiring are drawn in orange. */
export function House() {
  return (
    <svg
      viewBox="0 0 560 400"
      className="w-full"
      role="img"
      aria-label={`Cross-section of a house with the ${scope.length} areas reinstatement covers numbered: ${scope.map((item) => item.title.toLowerCase()).join(", ")}.`}
    >
      <title>What reinstatement covers</title>
      <g
        fill="none"
        stroke="var(--foreground)"
        strokeWidth={1.6}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* Ground. */}
        <path
          d="M20 335 H540"
          stroke="var(--muted)"
          strokeOpacity={0.6}
          strokeDasharray="3 5"
        />
        {/* Piles and floor. */}
        <rect x={118} y={305} width={10} height={30} />
        <rect x={198} y={305} width={10} height={30} />
        <rect x={278} y={305} width={10} height={30} />
        <rect x={358} y={305} width={10} height={30} />
        <rect x={96} y={293} width={304} height={12} />
        {/* Walls and ceiling. */}
        <path d="M100 293 V158 M396 293 V158 M254 293 V158" />
        <path d="M100 158 H396" />
        {/* Roof, with the framing line dashed inside it. */}
        <path d="M78 160 L248 58 L418 160" />
        <path
          d="M100 158 L248 70 L396 158"
          stroke="var(--muted)"
          strokeOpacity={0.6}
          strokeDasharray="2 4"
        />
        <rect x={330} y={82} width={22} height={50} />
        {/* Window and door. */}
        <rect x={136} y={196} width={66} height={52} />
        <path d="M169 196 V248 M136 222 H202" />
        <rect x={302} y={212} width={42} height={81} />
        <circle cx={336} cy={254} r={2} />
        {/* Bath and its waste pipe. */}
        <rect x={112} y={266} width={60} height={22} rx={8} />
        <path d="M172 277 H214 V293" stroke="var(--accent)" />
        {/* Kitchen cabinets and heat pump. */}
        <rect x={262} y={256} width={34} height={37} />
        <path d="M262 268 H296" />
        <rect x={356} y={170} width={34} height={14} rx={3} />
        {/* Deck, fence and tree. */}
        <rect x={400} y={288} width={78} height={6} />
        <path d="M410 294 V335 M470 294 V335" />
        <path d="M492 335 V300 M506 335 V300 M520 335 V300 M534 335 V300 M488 310 H538" />
        <path d="M506 300 V258" />
        <circle cx={506} cy={238} r={24} />
        {/* Wiring. */}
        <path d="M254 158 V190 H300" stroke="var(--accent)" />
      </g>
      <g className="font-display font-bold" fontSize={13} textAnchor="middle">
        {markers.map(([x, y], i) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r={12} fill="var(--accent)" />
            <text x={x} y={y + 5} fill="var(--background)">
              {i + 1}
            </text>
          </g>
        ))}
      </g>
      <text
        x={20}
        y={372}
        className="font-mono"
        fontSize={11}
        fill="var(--muted)"
      >
        What reinstatement covers. Contents and vehicles are the insurer's.
      </text>
    </svg>
  );
}
