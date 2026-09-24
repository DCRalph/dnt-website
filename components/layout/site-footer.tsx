import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { company, nav, yearsOperating } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer data-tone="dark">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Logo className="h-14" light />
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
              className="text-muted transition-colors hover:text-foreground"
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
        </div>
      </div>
      <div className="border-line border-t">
        <p className="mx-auto max-w-7xl px-6 py-5 text-muted text-sm">
          © {new Date().getFullYear()} {company.name}. 100% New Zealand owned.
        </p>
      </div>
    </footer>
  );
}
