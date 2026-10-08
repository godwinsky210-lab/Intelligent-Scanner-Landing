import { faq } from "@/lib/site";
import { Container, Section } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Native <details>/<summary> disclosure list.
 *
 * Chosen over a custom accordion deliberately: it is keyboard operable and
 * correctly exposes expanded/collapsed state to assistive technology without
 * any ARIA wiring or JavaScript. Content animation is left off on purpose so
 * the open state is instant and never depends on a height transition.
 */
export function FAQ() {
  return (
    <Section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-navy-100 bg-white"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Heading rail. Stacks above the list on mobile. */}
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow={faq.eyebrow}
              title={faq.title}
              description={faq.intro}
              titleId="faq-heading"
              className="lg:sticky lg:top-28"
            />
          </div>

          {/* Questions. Plain flow content rather than a <dl>: a <dd> must
              be a sibling of its <dt>, and the <details> wrapper needed for
              the disclosure would sit between them and break that pairing.
              Each summary is already a labelled control for its own answer,
              so the list structure adds nothing here. */}
          <div className="lg:col-span-8">
            <div className="border-t border-navy-100">
              {faq.items.map((item, index) => (
                <details
                  key={item.question}
                  className="group border-b border-navy-100"
                  /* First item open by default so the interaction is obvious
                     on arrival without needing an interaction. */
                  open={index === 0 ? true : undefined}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left marker:content-none sm:py-7">
                    <span className="text-lg font-medium tracking-tight text-navy-950 sm:text-xl">
                      {item.question}
                    </span>
                    <Indicator />
                  </summary>

                  <p className="max-w-2xl pb-7 text-base leading-relaxed text-pretty text-ink-500 sm:text-lg">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/**
 * Expand/collapse affordance. The plus rotates into a minus via the `open`
 * variant, so the state is conveyed by shape rather than colour alone.
 */
function Indicator() {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700 ring-1 ring-navy-200 transition-colors duration-200 group-open:bg-navy-100 group-open:ring-navy-300"
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        className="size-4 transition-transform duration-300 group-open:rotate-90"
      >
        <path d="M8 3.5v9M3.5 8h9" />
      </svg>
    </span>
  );
}