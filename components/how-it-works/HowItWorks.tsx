import { howItWorks } from "@/lib/site";
import { Container, Section } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="border-t border-navy-100 bg-surface-muted"
    >
      <Container>
        <SectionHeading
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.title}
          description={howItWorks.intro}
          align="center"
          className="mx-auto"
          titleId="how-it-works-heading"
        />

        <ol className="relative mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {/* Connector rail between the cards. Desktop only: on smaller
              screens the cards stack vertically, where a horizontal rail
              would be meaningless and risks overflow. Two segments meet the
              vertical centre of the middle card. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[4.5rem] hidden justify-center gap-2 px-[18%] lg:flex"
          >
            <span className="h-px flex-1 self-center bg-navy-200" />
            <span className="size-1.5 shrink-0 rounded-full bg-navy-300" />
            <span className="h-px flex-1 self-center bg-navy-200" />
          </div>

          {howItWorks.steps.map((step, index) => (
            <li
              key={step.title}
              className="animate-fade-rise relative flex flex-col items-center rounded-card-lg border border-navy-100 bg-white p-7 text-center shadow-soft transition-shadow duration-300 hover:shadow-lift sm:p-8"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <StepIcon name={step.icon} />

              {/* No numeric badge. Sequence comes from the <ol> above, and the
                  icon plus title already identify each step. mt-6 preserves the
                  original gap between the icon and the card's first text. */}
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-navy-950">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-pretty text-ink-500">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

type StepIconName = (typeof howItWorks.steps)[number]["icon"];

/**
 * Inline SVG per step. Hand-built rather than pulled from an icon package so
 * the section adds no dependency. Stroke-only at a consistent weight, and
 * marked decorative: the step title and description carry the meaning.
 */
function StepIcon({ name }: { name: StepIconName }) {
  const shared = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <span
      aria-hidden="true"
      className="flex size-14 items-center justify-center rounded-2xl bg-navy-50 text-navy-700 ring-1 ring-navy-100"
    >
      <svg viewBox="0 0 24 24" className="size-7" {...shared}>
        {name === "scan" ? (
          <>
            {/* Viewfinder corners around a page, echoing the hero visual. */}
            <path d="M3 8V5.5A2.5 2.5 0 0 1 5.5 3H8" />
            <path d="M16 3h2.5A2.5 2.5 0 0 1 21 5.5V8" />
            <path d="M21 16v2.5a2.5 2.5 0 0 1-2.5 2.5H16" />
            <path d="M8 21H5.5A2.5 2.5 0 0 1 3 18.5V16" />
            <rect x="8.5" y="8" width="7" height="8" rx="1" />
          </>
        ) : null}

        {name === "enhance" ? (
          <>
            {/* Adjustment sliders, matching the app's image controls. */}
            <path d="M4 7h9" />
            <path d="M17 7h3" />
            <circle cx="15" cy="7" r="2" />
            <path d="M4 17h3" />
            <path d="M11 17h9" />
            <circle cx="9" cy="17" r="2" />
          </>
        ) : null}

        {name === "extract" ? (
          <>
            {/* Page with content lifting out into a labelled row. */}
            <path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H13l4 4v6" />
            <path d="M13 3v4h4" />
            <path d="M5 4.5v13A1.5 1.5 0 0 0 6.5 19H11" />
            <path d="M14 14h7" />
            <path d="M14 17.5h4.5" />
          </>
        ) : null}
      </svg>
    </span>
  );
}