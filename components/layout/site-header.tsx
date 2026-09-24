import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-line border-b bg-background/90 backdrop-blur-sm">
      {/* Wraps to two rows on narrow screens: logo, then the nav. */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-3">
        <Link href="/" className="shrink-0">
          <Logo className="h-11 md:h-14" priority />
        </Link>
        <nav className="flex w-full flex-wrap items-center gap-x-5 gap-y-2 font-medium text-[15px] md:w-auto md:gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "whitespace-nowrap transition-colors hover:text-accent-strong",
                // The contact link becomes the header's call to action once
                // there is room for a pill.
                item.href === "/contact" &&
                  "md:rounded-full md:bg-foreground md:px-5 md:py-2 md:text-background md:hover:text-background md:hover:opacity-85",
              )}
            >
              {item.href === "/contact" ? "Talk to us" : item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
