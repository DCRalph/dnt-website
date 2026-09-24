import Image from "next/image";
import { company } from "@/lib/content";
import { cn } from "@/lib/utils";
import logo from "@/public/brand/logo.png";
import logoLight from "@/public/brand/logo-light.png";

/* The full lockup: round D&T mark, wordmark and tagline. Set the height with
   `className` (e.g. `h-9`); width follows the image's aspect ratio. `light`
   swaps to the cream-text version for dark bands. */
export function Logo({
  className,
  priority,
  light,
}: {
  className?: string;
  priority?: boolean;
  light?: boolean;
}) {
  return (
    <Image
      src={light ? logoLight : logo}
      alt={company.name}
      priority={priority}
      className={cn("w-auto", className)}
    />
  );
}
