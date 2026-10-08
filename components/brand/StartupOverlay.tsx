import Image from "next/image";

/**
 * First-paint overlay that reproduces the mobile app's startup screen
 * (`src/features/startup/startup-screen.tsx` in the app repository).
 *
 * Same composition, same indigo, same logo, same motion timings:
 *
 *   - background   #5046C8, the app's `Palette.brand`
 *   - stage        fades 0 -> 1 over 320ms, ease-out quadratic
 *   - logo         `clamp(min(100vw, 100vh) * 0.26, 96px, 150px)`, contain
 *   - glow         circle at 1.9x the logo, white at 10% alpha, breathing
 *                  between 0.35 and 0.9 opacity and 0.92 and 1.06 scale on a
 *                  1600ms-per-leg (3200ms) cycle
 *   - track        3px tall, `clamp(55vw, 160px, 220px)` wide, white at 22%
 *   - comet        92px wide with three 3px bands (92/66/44 at 0.14/0.38/1),
 *                  travelling `track/2 - 46 - 8` either side of centre on a
 *                  1700ms ease-in-out-quadratic leg, reversing rather than
 *                  snapping back
 *   - wordmark     "INTELLIGENT SCANNER", white at 72%, 11px/600, 2.4px
 *                  tracking, 8px below the track once the 24px stage gap is
 *                  included
 *
 * The app's screen never ends — it waits for the session to restore. A web
 * page has nothing to wait for, so this is given a fixed 2000ms: long enough
 * for the comet to complete one full left-to-right pass (1700ms) after the
 * 320ms entrance, then a 300ms fade to `visibility: hidden`.
 *
 * Deliberately no JavaScript. The dismissal is a keyframe with
 * `animation-fill-mode: forwards`, and `visibility` is interpolated alongside
 * `opacity`, so it stays visible for the whole fade and only then flips to
 * hidden. `visibility: hidden` is what stops the overlay hit-testing, so the
 * page underneath is interactive again without any timer, listener or state.
 * This keeps `RootLayout` a server component and adds nothing to the client
 * bundle.
 *
 * `prefers-reduced-motion: reduce` removes the overlay outright rather than
 * freezing it, because a frozen indigo panel covering the page would be the
 * worst possible outcome of that preference.
 *
 * The logo is `IS_icon.png` from the app, downscaled to 320px with its alpha
 * intact. It is a white mark on transparency, which is why it reads correctly
 * on the indigo exactly as it does in the app.
 */
export function StartupOverlay() {
  return (
    <div className="is-startup-overlay" aria-hidden="true">
      <div className="is-startup-stage">
        <div className="is-startup-mark">
          <span className="is-startup-glow" />
          <Image
            src="/startup-logo.png"
            alt=""
            width={320}
            height={320}
            priority
            className="is-startup-logo"
          />
        </div>

        <div className="is-startup-track">
          <span className="is-startup-comet">
            <span className="is-startup-band is-startup-band-tail" />
            <span className="is-startup-band is-startup-band-mid" />
            <span className="is-startup-band is-startup-band-head" />
          </span>
        </div>

        <p className="is-startup-wordmark">INTELLIGENT SCANNER</p>
      </div>
    </div>
  );
}
