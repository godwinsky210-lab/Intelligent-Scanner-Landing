import { features } from "@/lib/site";
import { Container, Section } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedVisual } from "./FeaturedVisual";
import { CapabilityIcon } from "./CapabilityIcon";

export function Features() {
  const { featured, supporting } = features;

  return (
    <Section
      id="features"
      aria-labelledby="features-heading"
      className="border-t border-navy-100 bg-white"
    >
      <Container>
        <SectionHeading
          eyebrow={features.eyebrow}
          title={features.title}
          description={features.intro}
          titleId="features-heading"
        />

        {/* Featured capability: dominant on desktop, first on mobile. */}
        <div className="animate-fade-rise mt-14 grid items-center gap-8 rounded-card-lg border border-navy-100 bg-surface-muted p-7 shadow-soft sm:p-10 lg:mt-16 lg:grid-cols-2 lg:gap-14 lg:p-14">
          <div>
            {/* navy-600: on surface-muted, navy-500 measures 4.49:1 and just misses
                the 4.5:1 minimum at this size. */}
            <p className="text-xs font-semibold tracking-[0.2em] text-navy-600 uppercase">
              Core capability
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy-950 sm:text-3xl">
              {featured.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-pretty text-ink-500 sm:text-lg">
              {featured.description}
            </p>

            <ul className="mt-7 space-y-3.5">
              {featured.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-base text-ink-500">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <FeaturedVisual alt={featured.visualAlt} />
        </div>

        {/* Supporting capabilities. Icon-led, no artwork carrying meaning. */}
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3">
          {supporting.map((item, index) => (
            <li
              key={item.title}
              className="animate-fade-rise flex flex-col rounded-card border border-navy-100 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift sm:p-7"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <CapabilityIcon name={item.icon} />

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-navy-950">
                {item.title}
              </h3>
              <p className="mt-2.5 text-base leading-relaxed text-pretty text-ink-500">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function CheckMark() {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-navy-50 ring-1 ring-navy-200"
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-3 text-navy-700"
      >
        <path d="M3.5 8.5l3 3 6-6.5" />
      </svg>
    </span>
  );
}