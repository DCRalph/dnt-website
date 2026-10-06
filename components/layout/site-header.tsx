import Image from "next/image";
import Link from "next/link";
import { container } from "@/components/layout/section";
import { company, nav } from "@/lib/content";
import { cn } from "@/lib/utils";
import mark from "@/public/brand/mark.png";

/* Floating pill navigation. The round mark stands in for the full logo so
   the pill stays short. */
export function SiteHeader() {
  return (
    <header className={cn(container, "fixed inset-x-0 top-3 z-40 md:top-4")}>
      <div className="flex items-center justify-between gap-3 rounded-full bg-card/90 py-2 pr-2 pl-2.5 shadow-black/5 shadow-md ring-1 ring-line backdrop-blur-md lg:pl-3">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src={mark} alt="" priority className="size-9" />
          <span className="display whitespace-nowrap font-semibold text-lg">
            {company.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav
            .filter((item) => item.href !== "/contact")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full px-3 py-2 font-medium text-[15px] transition-colors hover:bg-surface xl:px-4"
              >
                {item.label}
              </Link>
            ))}
        </nav>
        <Link
          href="/contact"
          className="whitespace-nowrap rounded-full bg-accent px-5 py-2.5 font-semibold text-white transition-opacity hover:opacity-85"
        >
          Talk to us
        </Link>
      </div>
      {/* Below lg the section links sit under the pill. */}
      <nav className="mt-2 flex gap-1.5 overflow-x-auto lg:hidden">
        {nav
          .filter((item) => item.href !== "/contact")
          .map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full bg-card/90 px-3.5 py-1.5 font-medium text-sm ring-1 ring-line backdrop-blur-md"
            >
              {item.label}
            </Link>
          ))}
      </nav>
    </header>
  );
}
