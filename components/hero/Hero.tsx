import { hero, site } from "@/lib/site";
import { ActionLink, Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-white"
    >
      {/* Very light brand wash so the section reads as premium without
          competing with the content. Intentionally subtle. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-[38rem] bg-[radial-gradient(60%_60%_at_70%_20%,var(--color-navy-50)_0%,transparent_70%)]"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
          {/* Copy column */}
          <div className="animate-fade-rise max-w-xl">
            <StatusBadge label={hero.badge} />

            <h1
              id="hero-heading"
              className="mt-6 text-4xl font-semibold tracking-tight text-balance text-navy-950 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
            >
              {hero.headingLead}{" "}
              <span className="text-gradient-brand">{hero.headingAccent}</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-pretty text-ink-500">
              {hero.body}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              {/* Intentionally inert: the product is not publicly available.
                  Uses aria-disabled rather than the disabled attribute so it
                  stays in the tab order and screen readers still announce it. */}
              <Button
                size="lg"
                aria-disabled="true"
                className="w-full cursor-not-allowed opacity-70 sm:w-auto"
              >
                {hero.primaryCta}
              </Button>
              <ActionLink
                href={`mailto:${site.supportEmail}`}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {hero.secondaryCta}
              </ActionLink>
            </div>

            {/* Plain-language availability note. Avoids implying the app can
                be downloaded or used publicly today. */}
            <p className="mt-5 text-sm text-ink-500">
              {site.statusDetail}{" "}
              <a
                href={`mailto:${site.supportEmail}`}
                className="font-medium text-navy-700 underline underline-offset-4 hover:text-navy-900"
              >
                {site.supportEmail}
              </a>
            </p>
          </div>

          {/* Product visual column */}
          <div className="animate-fade-rise relative [animation-delay:120ms]">
            <HeroVisual alt={hero.visualAlt} />
          </div>
        </div>
      </div>
    </section>
  );
}