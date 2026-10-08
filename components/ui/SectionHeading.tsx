import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Lets a parent <section> point aria-labelledby at this heading. */
  titleId?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleId,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {/* navy-600 rather than navy-500: this component also renders on
          surface-muted, where navy-500 measures 4.49:1 and just misses the
          4.5:1 requirement. navy-600 clears it comfortably. */}
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wide text-navy-600 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className="mt-3 text-3xl font-semibold tracking-tight text-balance text-navy-950 sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-pretty text-ink-500 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}