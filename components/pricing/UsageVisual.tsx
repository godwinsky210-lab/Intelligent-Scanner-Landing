/**
 * Illustrates the usage-based model: a run of scanned pages feeding a single
 * extraction step.
 *
 * No figure, amount, or currency appears anywhere in this artwork. A price
 * would imply an active charge, and payments are not live yet. Bar heights are
 * fixed rather than animated, so nothing on screen can be read as a changing
 * quantity or a rate.
 */
export function UsageVisual() {
  const bars = [26, 44, 36, 58, 48];

  return (
    <div
      role="img"
      aria-label="Illustration of scanned pages feeding into a single extraction step, one unit of usage per page."
      className="flex flex-col gap-5 sm:flex-row sm:items-center"
    >
      {/* Scanned pages: stacked sheets of differing height. */}
      <div className="flex items-end gap-3 sm:shrink-0" aria-hidden="true">
        {bars.map((height, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div
              className="w-8 rounded-md border border-navy-200 bg-white shadow-soft"
              style={{ height: `${height * 1.6}px` }}
            >
              <div className="space-y-1 px-1.5 pt-2">
                <div className="h-1 rounded-full bg-navy-100" />
                <div className="h-1 w-4/5 rounded-full bg-navy-50" />
                <div className="h-1 w-3/5 rounded-full bg-navy-50" />
              </div>
            </div>
            {/* navy-600: navy-500 measures 4.49:1 on surface-muted and would just
                miss the 4.5:1 minimum at this size. */}
            <span className="text-xs font-medium text-navy-600">Page</span>
          </div>
        ))}
      </div>

      {/* Connection into extraction */}
      <div className="flex flex-1 items-center gap-3" aria-hidden="true">
        <span className="h-px flex-1 bg-gradient-to-r from-navy-200 to-navy-300" />
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4 shrink-0 text-navy-400"
        >
          <path d="M3 8h10M9.5 4.5L13 8l-3.5 3.5" />
        </svg>
      </div>

      {/* Extraction result: structured blocks, not a fabricated record. */}
      <div
        aria-hidden="true"
        className="w-full rounded-card border border-navy-200 bg-white p-4 shadow-soft sm:max-w-56"
      >
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-navy-400" />
          <span className="h-1.5 w-16 rounded-full bg-navy-200" />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="h-6 rounded-md bg-navy-50 ring-1 ring-navy-100" />
          <div className="h-6 rounded-md bg-navy-50 ring-1 ring-navy-100" />
          <div className="h-6 rounded-md bg-navy-50 ring-1 ring-navy-100" />
          <div className="h-6 rounded-md bg-navy-50 ring-1 ring-navy-100" />
        </div>
      </div>
    </div>
  );
}