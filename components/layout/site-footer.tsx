import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { company, nav, yearsOperating } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-7xl px-6 pb-8">
      <div
        data-tone="tile"
        className="grid gap-10 rounded-[2rem] px-8 py-12 md:grid-cols-[2fr_1fr_1fr] md:px-12"
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
