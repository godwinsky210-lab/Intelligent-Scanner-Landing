import { pricing } from "@/lib/site";
import { Container, Section } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { UsageVisual } from "./UsageVisual";

export function Pricing() {
  const { card, note } = pricing;

  return (
    <Section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="border-t border-navy-100 bg-surface-muted"
    >
      <Container>
        <SectionHeading
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          description={pricing.intro}
          align="center"
          className="mx-auto"
          titleId="pricing-heading"
        />

        {/* Single card, deliberately capped in width so it reads as a focused
            statement rather than a pricing table. */}
        <div className="animate-fade-rise mx-auto mt-14 w-full max-w-3xl lg:mt-16">
          <div className="overflow-hidden rounded-card-lg border border-navy-100 bg-white shadow-soft">
            {/* Model summary */}
            <div className="p-7 sm:p-9">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-navy-950 sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-pretty text-ink-500">
                    {card.description}
                  </p>
                </div>
                <StatusBadge label={pricing.status} className="shrink-0" />
              </div>

              <ul className="mt-7 grid gap-3.5 sm:grid-cols-3 sm:gap-5">
                {card.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-card bg-surface-muted px-4 py-3.5 ring-1 ring-navy-100"
                  >
                    <PointMark />
                    <span className="text-sm leading-relaxed text-ink-500">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Usage visual: communicates the per-page model without quoting
                a figure, since no price is active yet. */}
            <div className="border-t border-navy-100 bg-surface-muted px-7 py-8 sm:px-9">
              <UsageVisual />
            </div>

            {/* Availability + CTA */}
            <div className="border-t border-navy-100 p-7 sm:p-9">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  {/* Intentionally inert: no purchase is possible yet. */}
                  <Button
                    size="lg"
                    aria-disabled="true"
                    className="w-full cursor-not-allowed opacity-70 sm:w-auto"
                  >
                    {card.cta}
                  </Button>
                  <p className="mt-3 text-sm text-ink-500">{card.ctaNote}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting note, outside the card so the card stays focused. */}
          <div className="mt-6 rounded-card border border-navy-100 bg-white p-6 shadow-soft sm:p-7">
            <h3 className="text-base font-semibold text-navy-950">
              {note.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-pretty text-ink-500">
              {note.body}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function PointMark() {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-navy-100"
    >
      <span className="size-1.5 rounded-full bg-navy-700" />
    </span>
  );
}