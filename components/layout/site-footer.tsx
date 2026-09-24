import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { container, surface } from "@/components/layout/section";
import { company, nav, yearsOperating } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className={cn(container, "pt-4 pb-6")}>
      <div
        data-tone="tile"
        className={cn(surface.block, "grid gap-10 md:grid-cols-[2fr_1fr_1fr]")}
      >
        <div>
          <Logo className="h-14" />
          <p className="mt-5 max-w-sm text-muted">
            Residential and light commercial reinstatement and facilities
            maintenance. New Zealand owned and operated for {yearsOperating}{" "}
            years.
          </p>
        </div>
        <nav className="flex flex-col gap-2.5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium transition-colors hover:text-accent-strong"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-2.5 text-muted">
          <a
            href={`mailto:${company.email}`}
            className="transition-colors hover:text-foreground"
          >
            {company.email}
          </a>
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="transition-colors hover:text-foreground"
          >
            {company.phone}
          </a>
          <p>{company.address}</p>
          <p className="mt-6 text-sm">
            © {new Date().getFullYear()} {company.name}. 100% New Zealand owned.
          </p>
        </div>
      </div>
    </footer>
  );
}
