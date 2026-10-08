import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return <div className={cn("container-page", className)} {...props} />;
}

type SectionProps = React.ComponentProps<"section">;

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-28", className)}
      {...props}
    />
  );
}