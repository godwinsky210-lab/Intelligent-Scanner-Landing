/**
 * Animated representation of the Intelligent Scanner mobile app.
 *
 * A looping demonstration of the core promise: a physical handwritten page
 * goes in, and clean digital text comes out.
 *
 *   1. Page         a sheet of paper with a handwritten story settles into the
 *                   viewfinder
 *   2. Guides       the corner reticle arms
 *   3. Scanning     the scan line travels the page, passing over the writing
 *   4. Processing   the card reads "Extracting information"
 *   5. Extracted    the handwriting is replaced by organised typed text and
 *                   the card reads "Extraction complete"
 *   6. Loop         fades back to the handwritten page and repeats
 *
 * A status card names whichever phase is on screen. It is driven by the same
 * 20s cycle as everything else, so it cannot fall out of step.
 *
 * The written lines and the extracted text are the same sentences. That
 * correspondence is the whole point of the visual, so the two must stay in
 * step if either list is edited.
 *
 * Handwriting is a local font stack plus per-line rotations rather than a
 * webfont or image, so there is no network request, no new dependency, and no
 * external asset. The extracted state deliberately uses the site sans stack
 * instead, which is what makes the change from pen to text legible.
 *
 * All states are driven by CSS animations sharing one 20s timeline (see
 * `.animate-hero-*` in `app/globals.css`). There is no state machine and no
 * `"use client"` here, so the visual stays a server component, ships nothing
 * to the client bundle, and cannot desynchronise its own phases.
 *
 * This is a landing-page illustration of the product. It is not connected to
 * the real extraction backend and performs no live extraction. The story is
 * invented for the illustration: the name is fictional and no addresses,
 * phone numbers, account details or other personal information appear.
 *
 * Under `prefers-reduced-motion: reduce` the animations are removed and the
 * phone holds a single stable, fully written page with the scan line resting
 * partway down.
 *
 * The whole visual is exposed as one image via `role="img"` + `alt`, so the
 * simulated page text is described rather than read out sentence by sentence.
 * The hero heading and supporting copy remain the meaningful accessible
 * content.
 */

/**
 * The story written on the page.
 *
 * Kept as data so the handwritten page and the extracted view render from one
 * source and cannot drift apart.
 *
 * `page` is what appears written on the sheet. `extracted` is the condensed
 * version shown after processing: a real extraction shortens and reorders,
 * rather than reproducing the page word for word. Everything in both comes
 * from the same invented story, and nothing is invented here.
 */
const STORY_TITLE = "The Last Letter";

const STORY = {
  page: [
    "When Daniel opened the old wooden box, he expected to find photographs and forgotten receipts.",
    "Instead, he discovered a letter written many years ago and addressed to someone he had never met.",
    "The paper was folded carefully, and the final sentence ended with a simple request:",
    '“If you ever find this, please finish what I started.”',
    "Daniel read the letter twice. Then he looked at the faded map tucked behind it and smiled.",
    "Whatever the story was, he knew he had just found the beginning of it.",
    "The map showed a narrow road leading away from the town and toward a small lake surrounded by trees.",
    "At the bottom of the page, someone had marked a single location with a small circle.",
    "Daniel folded the letter and placed it safely inside his jacket. By morning, he had decided where he would go first.",
  ],
  extracted: [
    "Daniel opened an old wooden box and discovered a letter addressed to someone he had never met.",
    "The letter contained a simple request:",
    "“If you ever find this, please finish what I started.”",
    "He then discovered a faded map hidden behind the letter.",
    "The map showed a narrow road leading away from town toward a small lake surrounded by trees.",
  ],
} as const;

/**
 * Per-paragraph styling: slight rotation and slight indent.
 *
 * Real handwriting never sits perfectly parallel or flush, and a fraction of a
 * degree is enough to read as pen on paper at the phone's scale without
 * tipping into novelty-font territory.
 *
 * Applied by cycling through a short list rather than indexing a fixed-length
 * array, so adding or removing a paragraph cannot silently shift the styling
 * of every line after it. Nothing here animates: the writing is static and the
 * scan line alone moves, which keeps the words legible while it passes.
 */
const HAND_TILT = [
  "rotate-[0.3deg]",
  "-rotate-[0.5deg]",
  "rotate-[0.7deg]",
  "-rotate-[0.4deg]",
  "rotate-[0.6deg]",
  "-rotate-[0.2deg]",
] as const;

const HAND_INSET = ["", "pl-[1.5%]", "", "pl-[3%]", "pl-[1%]"] as const;

/**
 * Status card states, each pinned to a window on the shared 20s cycle.
 *
 * The windows follow the document animation rather than invent their own:
 * scanning covers the scan line's travel, extracting covers the processing
 * panel, and complete covers the extracted view. Because the timings live in
 * CSS keyframes on the same duration, the label is always describing the
 * state actually on screen and returns to "Scanning document" by itself each
 * time the loop restarts.
 */
const STATUS = [
  {
    key: "scan",
    animation: "animate-hero-status-scan",
    title: "Scanning document",
    detail: "Detecting page edges",
    dot: "bg-navy-300",
    pulse: true,
  },
  {
    key: "extract",
    animation: "animate-hero-status-extract",
    title: "Extracting information",
    detail: "Reading scanned content",
    dot: "bg-navy-400",
    pulse: true,
  },
  {
    key: "complete",
    animation: "animate-hero-status-complete",
    title: "Extraction complete",
    detail: "Information ready to review",
    dot: "bg-navy-200",
    pulse: false,
  },
] as const;

export function HeroVisual({ alt }: { alt: string }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className="hero-device relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
    >
      {/* Soft grounding shadow beneath the device */}
      <div
        aria-hidden="true"
        className="absolute inset-x-8 bottom-0 h-24 rounded-[50%] bg-navy-900/10 blur-2xl"
      />

      <div className="relative rounded-[2.75rem] bg-navy-950 p-2.5 shadow-lift ring-1 ring-navy-900/40">
        {/* Device screen */}
        <div className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-b from-navy-900 to-navy-950">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-5 pb-3">
            <span
              aria-hidden="true"
              className="h-1.5 w-10 rounded-full bg-navy-600/70"
            />
            <span
              aria-hidden="true"
              className="h-1.5 w-12 rounded-full bg-navy-700/70"
            />
          </div>

          {/* Viewfinder */}
          <div className="relative mx-4 aspect-3/4 overflow-hidden rounded-3xl bg-navy-950/60 ring-1 ring-navy-700/60">
            {/* ---------------------------------------------------------
                States 1-4: the physical handwritten page.

                Off-white stock rather than pure white so it reads as paper
                under a camera, with a visible edge and a slight shadow so it
                sits as an object in front of the lens rather than as a screen.
                Type is sized in container units (`.hero-device` in
                `app/globals.css`) so the page holds the same proportion at
                every breakpoint instead of drifting with the viewport.

                Nothing here animates. The scan line alone travels.
                --------------------------------------------------------- */}
            <div className="animate-hero-page absolute inset-x-4 top-8 bottom-14 overflow-hidden rounded-lg bg-[#fbfaf6] shadow-soft">
              <div className="flex h-full flex-col px-3.5 pt-5 pb-4">
                {/* Written heading, underlined by hand rather than typeset. */}
                <p className="font-[family-name:var(--font-handwritten)] leading-none text-ink-600 [font-size:clamp(11px,3.4cqw,21px)]">
                  {STORY_TITLE}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-2 ml-0.5 block h-px w-16 -rotate-[0.5deg] bg-ink-600/45"
                />

                {/* The story.

                    The paper is a crop of a longer sheet: nine paragraphs run
                    from just under the heading to the bottom edge and past it,
                    which is how a page looks under a camera. Paragraph gaps are
                    in `em` so they scale with the type rather than drifting
                    out of proportion on a smaller phone. */}
                <div className="mt-2.5 space-y-[0.42em] text-ink-600 [font-size:clamp(8px,2.45cqw,14px)]">
                  {STORY.page.map((line, index) => (
                    <p
                      key={line}
                      className={`font-[family-name:var(--font-handwritten)] leading-[1.5] ${HAND_TILT[index % HAND_TILT.length]} ${HAND_INSET[index % HAND_INSET.length]}`}
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {/* Scan line. Positioned relative to the page so it travels
                    the full height of the paper. */}
                <span
                  aria-hidden="true"
                  className="animate-hero-scan absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-400 to-transparent shadow-[0_0_6px_var(--color-navy-300)]"
                />
              </div>
            </div>

            {/* ---------------------------------------------------------
                State 5: the story as clean digital text.

                Shares the page's exact bounds so it reads as the same sheet
                after transformation. Site sans instead of the handwritten
                stack, an even left edge, a tinted surface and a hairline rule:
                the contrast in type and alignment is what communicates
                handwriting becoming text.

                The quoted request is set as an indented block so the two states
                share a visible anchor and the reader can match them. Sized in
                the same container units as the page, a little smaller because
                the type is denser.
                --------------------------------------------------------- */}
            <div className="animate-hero-extracted absolute inset-x-4 top-8 bottom-14 overflow-hidden rounded-lg bg-navy-50 shadow-soft">
              <div className="flex h-full flex-col px-3.5 pt-5 pb-4">
                <p className="font-semibold tracking-[0.16em] text-navy-500 uppercase [font-size:clamp(6px,1.35cqw,11px)]">
                  Extracted text
                </p>
                <p className="mt-1.5 leading-tight font-semibold tracking-tight text-navy-800 [font-size:clamp(10px,2.9cqw,19px)]">
                  {STORY_TITLE}
                </p>

                <span
                  aria-hidden="true"
                  className="mt-2 h-px w-full bg-navy-200"
                />

                <div className="mt-2.5 space-y-[0.4em] text-ink-500 [font-size:clamp(7.5px,2.1cqw,13px)]">
                  {STORY.extracted.map((line) =>
                    line.startsWith("“") ? (
                      <blockquote
                        key={line}
                        className="border-l-2 border-navy-200 pl-2 text-ink-600 italic"
                      >
                        {line}
                      </blockquote>
                    ) : (
                      <p key={line} className="leading-[1.5]">
                        {line}
                      </p>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------
                State 5 support: the corner reticle drops away once the text
                has been extracted, since the page is no longer being framed.

                Shares the guides' activation timing but is offset slightly
                later, so the guides lift off just after the typed text
                settles in.
                --------------------------------------------------------- */}
            <div
              aria-hidden="true"
              className="animate-hero-extracted absolute inset-4 rounded-2xl ring-1 ring-navy-300/50"
            />

            {/* ---------------------------------------------------------
                Status card: names what the phone is doing right now.

                The same single source of truth as the rest of the visual.
                Each state is a keyframe set on the shared 20s cycle in
                `app/globals.css`, so the label cannot drift from the scan
                line, the processing panel or the extracted view. No React
                state, no timer, no second animation to fall out of step.

                The three layers share one grid cell and cross-fade, so the
                card's height never changes and nothing jumps. Their windows
                meet rather than overlap: at each handoff both layers are at
                zero for a single frame, which avoids two labels ghosting
                through each other.

                Whole card is aria-hidden: the hero visual is exposed as one
                image with a single description, so narrating three labels
                would add noise without adding meaning.
                --------------------------------------------------------- */}
            <div aria-hidden="true" className="absolute inset-x-7 bottom-6 left-7">
              <div className="rounded-md bg-navy-950/85 px-2.5 py-2 backdrop-blur-sm">
                <div className="grid">
                  {STATUS.map((state) => (
                    <div
                      key={state.key}
                      className={`${state.animation} col-start-1 row-start-1 flex items-center gap-2`}
                    >
                      {/* Restrained dot. Pulses while work is in flight and
                          goes solid once done, so activity is visible but
                          never competes with the label. */}
                      <span
                        className={`size-1.5 shrink-0 rounded-full ${state.dot} ${state.pulse ? "animate-hero-status-dot" : ""}`}
                      />
                      <span className="flex min-w-0 flex-col">
                        <span className="font-medium text-white [font-size:clamp(7px,1.6cqw,13px)]">
                          {state.title}
                        </span>
                        <span className="mt-0.5 text-navy-300 [font-size:clamp(6px,1.25cqw,10px)]">
                          {state.detail}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>

                {/* Indeterminate only: the highlight travels and nothing
                    counts, so there is no implied percentage, duration or
                    progress figure. Hidden while complete. */}
                <div className="mt-1.5 h-px w-full overflow-hidden bg-navy-700">
                  <span
                    className="animate-hero-progress block h-px w-1/3 bg-navy-300"
                  />
                </div>
              </div>
            </div>

            {/* Scan guides, one per corner. Arm after the page settles. */}
            <ScanGuide className="animate-hero-guides top-5 left-5" />
            <ScanGuide
              className="animate-hero-guides top-5 right-5"
              corner="top-right"
            />
            <ScanGuide
              className="animate-hero-guides bottom-12 left-5"
              corner="bottom-left"
            />
            <ScanGuide
              className="animate-hero-guides bottom-12 right-5"
              corner="bottom-right"
            />
          </div>

          {/* Control bar */}
          <div className="flex items-center justify-between px-7 py-5">
            <span
              aria-hidden="true"
              className="h-2 w-12 rounded-full bg-navy-700"
            />
            <span
              aria-hidden="true"
              className="size-14 rounded-full border-4 border-navy-700 bg-navy-100"
            />
            <span
              aria-hidden="true"
              className="h-2 w-12 rounded-full bg-navy-700"
            />
          </div>
        </div>
      </div>

      {/* Nothing sits beside the device.

          The two floating cards that used to overlap the left and right edges
          of the phone were placeholder shapes with no content of their own.
          They read as invented UI rather than as part of this product, so the
          area around the device is now simply negative space.

          They were absolutely positioned, so removing them takes no flow height
          with them and leaves no gap to reclaim. It also retires the only
          elements here that reached outside the device's own box, which is
          what their negative horizontal offsets were doing. */}
    </div>
  );
}

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

type ScanGuideProps = {
  className: string;
  corner?: Corner;
};

/**
 * L-shaped corner marker for the viewfinder. Purely decorative; each is an
 * independent rounded corner rather than a bordered box, so it reads as a
 * scanning reticle rather than a UI container.
 */
function ScanGuide({ className, corner = "top-left" }: ScanGuideProps) {
  const border: Record<Corner, string> = {
    "top-left": "border-t-2 border-l-2",
    "top-right": "border-t-2 border-r-2",
    "bottom-left": "border-b-2 border-l-2",
    "bottom-right": "border-b-2 border-r-2",
  };

  // Rounded on the two outer corners so the marker reads as a reticle.
  const shape: Record<Corner, string> = {
    "top-left": "rounded-tl-xl",
    "top-right": "rounded-tr-xl",
    "bottom-left": "rounded-bl-xl",
    "bottom-right": "rounded-br-xl",
  };

  return (
    <span
      aria-hidden="true"
      className={`absolute size-8 border-navy-400 ${border[corner]} ${shape[corner]} ${className}`}
    />
  );
}