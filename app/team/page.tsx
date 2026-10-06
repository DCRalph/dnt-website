import type { Metadata } from "next";
import Link from "next/link";
import { CtaTile } from "@/components/layout/cta-tile";
import { Placeholder } from "@/components/layout/placeholder";
import { button, container, surface } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { team } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Team" };

/* A site tag: white card with a strip of tape across the top edge. */
const card =
  "relative rounded-2xl border border-line bg-card p-3.5 shadow-[0_2px_0_var(--line)] before:absolute before:-top-1.5 before:left-1/2 before:h-3 before:w-9 before:-translate-x-1/2 before:rounded before:border before:border-line before:bg-surface before:content-['']";

const role = "mt-0.5 font-semibold text-accent-strong text-[13px]";
const base =
  "mt-2 font-mono text-[11px] text-muted uppercase tracking-[0.04em]";

/* Shown next to anyone whose place on the team still needs the owner's
   say-so. Remove `confirm` from their entry in content.ts to clear it. */
function Confirm() {
  return (
    <span className="ml-1.5 inline-block rounded-full bg-accent-soft px-2 py-0.5 align-middle font-semibold text-[11px] text-accent-strong">
      confirm
    </span>
  );
}

export default function TeamPage() {
  return (
    <>
      <section className={cn(container, "pt-6 md:pt-10")}>
        <Reveal>
          <h1 className="display max-w-3xl font-semibold text-4xl sm:text-5xl md:text-7xl">
            The people on the board.
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-muted md:text-xl">
            Office in Miramar, a hub in Christchurch, a dispatch desk that never
            closes, and eighty-odd crews in the field. Here's who you'll be
            dealing with.
          </p>
        </Reveal>

        {team.map((group) => (
          <div key={group.group} className="mt-14">
            <h2 className="flex items-center gap-3.5 font-medium font-mono text-muted text-xs uppercase tracking-[0.06em] after:h-px after:flex-1 after:bg-line after:content-['']">
              {group.group}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {group.members.map((member, i) =>
                "desk" in member ? (
                  <Reveal
                    key={member.desk}
                    delay={i * 0.04}
                    className={cn(
                      card,
                      "border-dashed bg-surface shadow-none before:hidden",
                    )}
                  >
                    <p className="display font-semibold text-lg">
                      {member.desk}
                    </p>
                    <p className={role}>{member.role}</p>
                    <p className={base}>{member.base}</p>
                    <p className="mt-2.5 text-[13px] text-muted leading-snug">
                      {member.note}
                    </p>
                  </Reveal>
                ) : (
                  <Reveal
                    key={member.name}
                    delay={i * 0.04}
                    className={cn(
                      card,
                      member.lead &&
                        "sm:col-span-2 sm:grid sm:grid-cols-[8.75rem_1fr] sm:gap-4",
                    )}
                  >
                    <Placeholder
                      label="Headshot"
                      className={cn(
                        "mb-3 aspect-square rounded-lg grayscale",
                        member.lead && "sm:mb-0",
                      )}
                    />
                    <div>
                      <p className="display font-semibold text-lg">
                        {member.name}
                        {member.confirm && <Confirm />}
                      </p>
                      <p className={role}>{member.role}</p>
                      <p className={base}>{member.base}</p>
                      {member.note && (
                        <p
                          className={cn(
                            "mt-2.5 text-muted leading-snug",
                            member.lead ? "text-sm" : "text-[13px]",
                          )}
                        >
                          {member.note}
                        </p>
                      )}
                    </div>
                  </Reveal>
                ),
              )}
            </div>
          </div>
        ))}

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <Reveal data-tone="tile" className={cn(surface.card, "md:p-9")}>
            <p className="display font-semibold text-7xl text-accent-strong md:text-8xl">
              80+
            </p>
            <p className="mt-4 max-w-sm text-lg">
              Alliance crews. Independent trade businesses on one standard
              agreement, from Kāpiti to Canterbury.
            </p>
            <Link
              href="/alliance"
              className={cn(button.secondary, "mt-6 bg-card")}
            >
              Join the Alliance
            </Link>
          </Reveal>
          <Reveal
            delay={0.05}
            data-tone="tile"
            className={cn(surface.card, "md:p-9")}
          >
            <p className="font-display font-semibold text-2xl leading-tight tracking-tight md:text-3xl">
              Health and safety is audited by IMPAC. Keeping that certification
              is a condition of several of our insurer contracts.
            </p>
            <p className="mt-4 text-muted">
              Apollo writes a site-specific safety plan for every job. The
              foreman signs the pre-start off on site, on their phone.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaTile
        title="Want a name, not a number?"
        lede="Regional managers answer their own phones. The desk answers the main one, all night."
        action="Contact"
      />
    </>
  );
}
