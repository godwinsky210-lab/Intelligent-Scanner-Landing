import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  label: string;
  className?: string;
};

export function StatusBadge({ label, className }: StatusBadgeProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-pill bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700 ring-1 ring-navy-200",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="size-1.5 rounded-full bg-navy-500"
      />
      {label}
    </p>
  );
}