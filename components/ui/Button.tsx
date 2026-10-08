import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-navy-800 text-white shadow-soft hover:bg-navy-700 hover:shadow-lift",
  secondary:
    "bg-white text-navy-800 ring-1 ring-navy-200 shadow-soft hover:ring-navy-300 hover:bg-navy-50",
  ghost: "text-navy-700 hover:text-navy-900 hover:bg-navy-50",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-base",
  lg: "px-6 py-3 text-base",
} as const;

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

type ActionProps = React.ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function ActionLink({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ActionProps) {
  return (
    <Link
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}