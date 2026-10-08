import { appDownload, finalCta } from "@/lib/site";
import { Container, Section } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Closing section.
 *
 * The button is the Android download rather than a placeholder. The APK has
 * been published for several releases, so a closing section reading "Coming
 * Soon" would contradict the hero two screens above it. The anchor mirrors
 * the hero's link: a plain `<a>` rather than `ActionLink`, because `next/link`
 * is for internal routes and GitHub serves the asset with
 * `Content-Disposition: attachment`, which is what triggers the download.
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

          {/* Live download, so a real anchor with no `aria-disabled`. The class
              string reproduces Button's primary variant at size `lg`, matching
              the hero so the same action looks the same wherever it appears. */}
          <a
            href={appDownload.url}
            download
            className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-navy-800 px-6 py-3 text-base font-medium text-white shadow-soft transition-colors duration-200 hover:bg-navy-700 hover:shadow-lift sm:w-auto"
          >
            {appDownload.label}
          </a>

          <p className="mt-4 text-sm text-ink-500">{finalCta.ctaNote}</p>
        </div>
      </Container>
    </Section>
  );
}