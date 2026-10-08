import { appDownload, hero, site } from "@/lib/site";
import { ActionLink } from "@/components/ui/Button";
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
              {/* External direct download, so this is a plain anchor rather
                  than `ActionLink`: next/link is for internal routes, and
                  GitHub serves the asset with `Content-Disposition:
                  attachment`, which is what triggers the download. The class
                  string reproduces Button's primary variant at size `lg`, so
                  the button looks the same now that it is active. */}
              <a
                href={appDownload.url}
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-pill bg-navy-800 px-6 py-3 text-base font-medium text-white shadow-soft transition-colors duration-200 hover:bg-navy-700 hover:shadow-lift sm:w-auto"
              >
                {appDownload.label}
              </a>
              <ActionLink
                href={`mailto:${site.supportEmail}`}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {hero.secondaryCta}
              </ActionLink>
            </div>

            {/* Availability note. The Android APK is downloadable today;
                iOS is not mentioned because it does not exist. */}
            <p className="mt-5 text-sm text-ink-500">
              {site.statusDetail}{" "}
              <a
                href={appDownload.releasePage}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-navy-700 underline underline-offset-4 hover:text-navy-900"
              >
                View all releases
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