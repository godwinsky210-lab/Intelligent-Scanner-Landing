/**
 * Artwork for the featured "Core capability" block.
 *
 * A phone mockup running one looping demonstration of the whole job: a page
 * goes in, a beam crosses it, the app shows it is working, and clean
 * structured text comes out.
 *
 *   1. Document  a clean page settles into the viewfinder
 *   2. Detect    the detected edge and crop handles arm
 *   3. Scan      a beam travels down the page, over the writing
 *   4. Process   "Page 2 of 3", with an indeterminate bar
 *   5. Result    the extracted fields replace the page
 *   6. Confirm   "Extraction complete", and the floating accents land
 *
 * Every phase is one of seven keyframe sets on a single shared 14s cycle
 * (`.animate-cap-*` in `app/globals.css`). There is no state machine and no
 * `"use client"`, so this stays a server component, ships nothing to the
 * client bundle, and the label under the viewfinder cannot drift away from
 * the thing it is describing: those labels reuse the very keyframes that
 * animate the phase they name.
 *
 * The device is angled with a single small Y rotation rather than being
 * redrawn in perspective. That reads as a three-quarter product shot while
 * keeping every character on screen legible, which matters more here than a
 * stronger angle would: the whole point of the frame is the extracted text.
 *
 * Everything inside the screen is an example, not content. It is all
 * `aria-hidden` behind a single `role="img"` description, so a screen reader
 * is never handed a fabricated record that reads like a real one.
 *
 * The floating accents deliberately appear only while the result is on
 * screen. "Text extracted" and "Ready to use" are untrue until the extraction
 * has happened, and they are the one place in this visual where the timing is
 * carrying meaning rather than decoration.
 */
export function FeaturedVisual({ alt }: { alt: string }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className="cap-stage relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
    >
      {/* Accents float in the space around the device, never over it. They
          stay clear of the phone at every breakpoint: `left-0`/`right-0` are
          the stage edges on the narrowest phones, where the device is capped
          at 14rem and there is genuinely no room beside it, and they step
          outward once there is. */}
      <Chip className="animate-cap-chip left-0 top-[12%] sm:-left-4 lg:-left-12">
        <DocGlyph />
        Text extracted
      </Chip>

      <Chip className="animate-cap-chip right-0 top-[26%] sm:-right-3 lg:-right-10">
        3 pages
      </Chip>

      <Chip
        className="animate-cap-chip-late right-1 bottom-[15%] sm:-right-6 lg:-right-14"
      >
        <CheckGlyph />
        Ready to use
      </Chip>

      {/* Soft contact shadow, sitting under the device rather than behind it,
          so the phone reads as resting on the surface. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-16 bottom-6 h-12 rounded-[50%] bg-navy-900/10 blur-xl"
      />

      {/* Device. The perspective is on the parent so the rotation is a real
          three-quarter turn; the phone itself carries no transform of its own,
          which keeps its contents crisp and its shadows square to it. */}
      <div className="cap-device relative mx-auto w-full max-w-56 [perspective:1200px]">
        <div className="relative rounded-[2.25rem] bg-navy-950 p-2 shadow-lift ring-1 ring-navy-900/40 [transform:rotateY(7deg)_rotateX(1deg)]">
          <div
            aria-hidden="true"
            className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-navy-900 to-navy-950"
          >
            {/* Status bar. Two neutral bars, so the top of the screen is not
                a dead strip and nothing implies a carrier or a battery level. */}
            <div className="flex items-center justify-between px-5 pt-4 pb-2.5">
              <span className="h-1.5 w-8 rounded-full bg-navy-600/70" />
              <span className="h-1.5 w-10 rounded-full bg-navy-700/70" />
            </div>

            {/* App bar. The product name, at the size a real app bar would
                use: present enough to name the thing, small enough not to
                become a headline inside the image. */}
            <div className="flex items-center gap-1.5 px-5 pb-3">
              <span className="flex size-4 shrink-0 items-center justify-center rounded-[4px] bg-navy-400/25">
                <DocGlyph className="size-2.5 text-navy-200" />
              </span>
              <span className="truncate font-semibold text-white [font-size:clamp(8px,3.3cqw,11px)]">
                Intelligent Scanner
              </span>
            </div>

            {/* Viewfinder. The page, the beam and the result all share this
                frame, which is what makes the result read as the *same*
                document coming back rather than as a different screen. */}
            <div className="relative mx-3 aspect-9/13 overflow-hidden rounded-2xl bg-navy-950/70 ring-1 ring-navy-700/50">
              {/* The page being scanned. Shares its keyframes with the
                  "Scanning" status line underneath. */}
              <div className="animate-cap-document absolute inset-4 rounded-lg bg-[#fbfaf6] shadow-soft">
                <div className="px-3 pt-3.5 pb-3">
                  <p className="font-semibold tracking-[0.14em] text-ink-600 uppercase [font-size:clamp(5.5px,2.4cqw,9px)]">
                    Service agreement
                  </p>
                  <span className="mt-1.5 block h-px w-9 bg-ink-600/40" />

                  {/* Real prose rather than grey bars: a document has to read
                      as a document for the beam to mean anything. */}
                  <div className="mt-2 space-y-[0.55em] text-ink-600/75 [font-size:clamp(5.5px,2.2cqw,8.5px)]">
                    <p className="leading-[1.5]">
                      This agreement is made between the parties named below
                      and takes effect on the date written above.
                    </p>
                    <p className="leading-[1.5]">
                      The first party agrees to provide the services set out
                      in the schedule attached to this page.
                    </p>
                    <p className="leading-[1.5]">
                      The second party agrees to pay on the terms stated
                      within thirty days of the invoice date.
                    </p>
                    <p className="leading-[1.5]">
                      Signed for and on behalf of each party.
                    </p>
                  </div>
                </div>

                {/* Detected edge and crop handles. The two capabilities this
                    section actually claims, shown as they work. */}
                <div className="animate-cap-detect absolute inset-2.5 rounded-md border-2 border-dashed border-navy-400/70" />
                <Handle className="animate-cap-detect top-2 left-2" />
                <Handle className="animate-cap-detect top-2 right-2" corner="tr" />
                <Handle
                  className="animate-cap-detect bottom-2 left-2"
                  corner="bl"
                />
                <Handle
                  className="animate-cap-detect bottom-2 right-2"
                  corner="br"
                />

                {/* The beam. The only thing that moves over the page, which is
                    both what a scanner does and what keeps every word
                    readable while it passes. */}
                <span className="animate-cap-beam absolute inset-x-0 top-[6%] h-px bg-gradient-to-r from-transparent via-navy-400 to-transparent shadow-[0_0_6px_var(--color-navy-300)]" />
              </div>

              {/* The result. Replaces the page rather than sliding over it,
                  so the transition reads as paper becoming text. */}
              <div className="animate-cap-result absolute inset-4 rounded-lg bg-[#fbfaf6] p-3 shadow-soft">
                <div className="flex items-center gap-1.5">
                  <span className="flex size-3.5 shrink-0 items-center justify-center rounded-full bg-navy-700">
                    <CheckGlyph className="size-2 text-white" />
                  </span>
                  <p className="font-semibold text-navy-950 [font-size:clamp(5.5px,2.5cqw,9.5px)]">
                    Document successfully scanned
                  </p>
                </div>

                <dl className="mt-2.5 space-y-[0.6em] [font-size:clamp(5.5px,2.3cqw,9px)]">
                  <Field label="Name" value="John Doe" />
                  <Field label="Date" value="05/10/2026" />
                  <Field label="Reference" value="IS-20481" />
                </dl>

                <p className="mt-2.5 border-t border-navy-100 pt-2 text-navy-700 [font-size:clamp(5.5px,2.3cqw,9px)]">
                  3 pages processed
                </p>
              </div>
            </div>

            {/* Status line. Three layers in one grid cell, so the strip keeps
                its height across the cycle and nothing jumps. Each layer
                reuses the keyframes of the phase it names, which is what keeps
                the wording from ever disagreeing with the screen above it. */}
            <div className="grid px-4 pt-3 pb-1">
              <div className="animate-cap-document col-start-1 row-start-1 flex items-center gap-1.5">
                <StatusDot />
                <StatusText
                  title="Scanning document"
                  detail="Page 1 of 3"
                />
              </div>

              <div className="animate-cap-processing col-start-1 row-start-1 flex items-center gap-1.5">
                <StatusDot />
                <StatusText title="Processing" detail="Page 2 of 3" />
                <span
                  aria-hidden="true"
                  className="ml-auto h-px w-8 shrink-0 overflow-hidden rounded-full bg-navy-700"
                >
                  <span className="animate-cap-bar block h-px w-1/2 bg-navy-300" />
                </span>
              </div>

              <div className="animate-cap-result col-start-1 row-start-1 flex items-center gap-1.5">
                <StatusDot solid />
                <StatusText
                  title="Extraction complete"
                  detail="3 pages processed"
                />
              </div>
            </div>

            {/* Control bar. Abstract shapes, not a camera UI: the section is
                about capture, not about the settings screen. */}
            <div className="flex items-center justify-between px-5 py-4">
              <span className="h-1.5 w-9 rounded-full bg-navy-700" />
              <span className="size-11 rounded-full border-4 border-navy-700 bg-navy-100" />
              <span className="h-1.5 w-9 rounded-full bg-navy-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * One label pair in the status strip. `min-w-0` on the wrapper lets the text
 * truncate inside the phone rather than pushing the strip wider than the
 * screen.
 */
function StatusText({
  title,
  detail,
}: {
  title: string;
  detail: string;
}) {
  return (
    <span className="flex min-w-0 flex-col">
      <span className="truncate font-medium text-white [font-size:clamp(6.5px,2.7cqw,10px)]">
        {title}
      </span>
      <span className="mt-0.5 truncate text-navy-300 [font-size:clamp(5.5px,2.2cqw,8.5px)]">
        {detail}
      </span>
    </span>
  );
}

/** Status dot. Colour carries the state: lighter once the work is done. */
function StatusDot({ solid = false }: { solid?: boolean }) {
  return (
    <span
      className={`size-1.5 shrink-0 rounded-full ${solid ? "bg-navy-200" : "bg-navy-400"}`}
    />
  );
}

/** One extracted key and value. Label muted, value carried by weight. */
function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-2">
      <dt className="text-navy-500">{label}</dt>
      <dd className="truncate font-medium text-navy-950">{value}</dd>
    </div>
  );
}

/**
 * Floating accent. Glass rather than solid white so it sits in front of the
 * light section background without reading as a second card, and it stays a
 * single short line of text.
 */
function Chip({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      aria-hidden="true"
      className={`absolute z-10 flex items-center gap-1.5 rounded-pill bg-white/75 py-1.5 pr-3 pl-2.5 shadow-soft ring-1 ring-navy-100 backdrop-blur-md [font-size:clamp(9px,2.6cqw,12px)] ${className}`}
    >
      {children}
    </span>
  );
}

/** Document glyph. Decorative, so it never carries the label's meaning. */
function DocGlyph({ className = "size-3 text-navy-600" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
    >
      <path d="M9 1.75H4.5A1.5 1.5 0 0 0 3 3.25v9.5a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5-1.5V5.75z" />
      <path d="M9 1.75V5.75H13" />
      <path d="M5.75 9h4.5M5.75 11.25h3" />
    </svg>
  );
}

/** Check glyph. */
function CheckGlyph({
  className = "size-3 text-navy-600",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
    >
      <path d="M3.5 8.5l3 3 6-6.5" />
    </svg>
  );
}

/** Square crop handle with a grab affordance, matching the app's crop UI. */
function Handle({
  className,
  corner = "tl",
}: {
  className: string;
  corner?: "tl" | "tr" | "bl" | "br";
}) {
  const position = {
    tl: "-translate-x-1/2 -translate-y-1/2",
    tr: "translate-x-1/2 -translate-y-1/2",
    bl: "-translate-x-1/2 translate-y-1/2",
    br: "translate-x-1/2 translate-y-1/2",
  }[corner];

  return (
    <span
      className={`absolute size-2.5 rounded-[3px] border-2 border-navy-600 bg-white shadow-soft ${position} ${className}`}
    />
  );
}