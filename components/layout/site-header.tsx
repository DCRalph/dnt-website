import Image from "next/image";
import Link from "next/link";
import { company, nav } from "@/lib/content";
import { cn } from "@/lib/utils";
import mark from "@/public/brand/mark.png";

/* Floating pill navigation. The round mark stands in for the full logo so
   the pill stays short. */
export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-3 z-40 px-3 md:top-5">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full bg-card/90 py-2 pr-2 pl-3 shadow-black/8 shadow-lg ring-1 ring-black/5 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src={mark} alt="" priority className="size-9" />
          <span className="display font-semibold text-lg">{company.name}</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav
            .filter((item) => item.href !== "/contact")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 font-medium text-[15px] transition-colors hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}
        </nav>
        <Link
          href="/contact"
          className={cn(
            "rounded-full bg-accent px-5 py-2.5 font-semibold text-white transition-opacity hover:opacity-85",
          )}
        >
          Talk to us
        </Link>
      </div>
      {/* Small screens: the section links sit under the pill. */}
      <nav className="mx-auto mt-2 flex max-w-5xl gap-1 overflow-x-auto px-1 md:hidden">
        {nav
          .filter((item) => item.href !== "/contact")
          .map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full bg-card/90 px-3 py-1.5 font-medium text-sm shadow-sm ring-1 ring-black/5 backdrop-blur-md"
            >
              {item.label}
            </Link>
          ))}
      </nav>
    </header>
  );
}
