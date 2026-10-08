import { finalCta } from "@/lib/site";
import { Container, Section } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

/**
 * Closing section.
 *
 * Deliberately restrained. The app is pre-launch, so this does not prompt for
 * a download, offer a sign-up, or collect contact details. The button is
 * inert, matching the Pricing section's treatment.
 */
export function FinalCTA() {
  return (
    <Section
      id="get-started"
      aria-labelledby="final-cta-heading"
      className="border-t border-navy-100 bg-surface-muted"
    >
      <Container>
        <div className="animate-fade-rise mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow={finalCta.eyebrow}
            title={finalCta.title}
            description={finalCta.body}
            align="center"
            className="mx-auto"
            titleId="final-cta-heading"
          />

          {/* Intentionally inert: nothing is downloadable or sign-up-able
              yet. aria-disabled keeps it focusable and announced rather than
              silently dropped from the tab order. */}
          <Button
            size="lg"
            aria-disabled="true"
            className="mt-9 w-full cursor-not-allowed opacity-70 sm:w-auto"
          >
            {finalCta.cta}
          </Button>

          <p className="mt-4 text-sm text-ink-500">{finalCta.ctaNote}</p>
        </div>
      </Container>
    </Section>
  );
}