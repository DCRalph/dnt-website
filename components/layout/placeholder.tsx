import { cn } from "@/lib/utils";

/* Where a D&T photo goes. Hatched until one exists, with a note on what
   should be in the frame. Pass the shape (aspect ratio, radius) in
   `className`. */
export function Placeholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <figure className={cn("hatched relative overflow-hidden", className)}>
      <figcaption className="absolute bottom-3 left-3 max-w-[90%] rounded-md bg-background/90 px-2 py-1 text-muted text-xs">
        {label}
      </figcaption>
    </figure>
  );
}
