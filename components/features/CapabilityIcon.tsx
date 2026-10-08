import { features } from "@/lib/site";

type IconName = (typeof features.supporting)[number]["icon"];

const shared = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/**
 * Small abstract marks for each supporting capability. Hand-drawn rather than
 * pulled from an icon package so the section adds no dependency.
 *
 * Each is `aria-hidden`: the capability's title and description carry the
 * meaning, so the artwork is decoration rather than information.
 */
export function CapabilityIcon({ name }: { name: IconName }) {
  return (
    <span
      aria-hidden="true"
      className="flex size-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-navy-100"
    >
      <svg viewBox="0 0 24 24" className="size-6" {...shared}>
        {name === "gallery" ? (
          <>
            {/* Overlapping cards, the front one showing a simple landscape. */}
            <rect x="3" y="6.5" width="13" height="11" rx="2" />
            <path d="M16 9.5h3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-2.5" />
            <circle cx="7.75" cy="10.25" r="1.15" />
            <path d="M3 14.75l3.5-3 3 2.5 3.5-3.25 3 2.75" />
          </>
        ) : null}

        {name === "crop" ? (
          <>
            {/* Corner guides around a detected page, matching the featured art. */}
            <path d="M3 8V5.5A2.5 2.5 0 0 1 5.5 3H8" />
            <path d="M16 3h2.5A2.5 2.5 0 0 1 21 5.5V8" />
            <path d="M21 16v2.5a2.5 2.5 0 0 1-2.5 2.5H16" />
            <path d="M8 21H5.5A2.5 2.5 0 0 1 3 18.5V16" />
            <path d="M8 9.5h8v6.5H8z" />
          </>
        ) : null}

        {name === "enhance" ? (
          <>
            {/* Before/after: one plain page, one with strengthened contrast. */}
            <rect x="3" y="4.5" width="8.5" height="15" rx="1.75" />
            <path d="M3 8h8.5M3 11h8.5M3 14h8.5M3 17h8.5" opacity="0.5" />
            <rect x="14.5" y="4.5" width="6.5" height="15" rx="1.5" />
            <path d="M14.5 8h6.5" strokeWidth="2.5" />
            <path d="M14.5 16h6.5" strokeWidth="2.5" />
          </>
        ) : null}

        {name === "organize" ? (
          <>
            {/* Stacked pages resolving into one ordered document. */}
            <rect x="3.5" y="3.5" width="12" height="14" rx="2" opacity="0.45" />
            <rect x="6.5" y="6.5" width="12" height="14" rx="2" opacity="0.7" />
            <rect x="9" y="9.5" width="12" height="12" rx="2" />
            <path d="M12 13h6M12 16h6M12 19h3.5" />
          </>
        ) : null}

        {name === "extract" ? (
          <>
            {/* Loose text lines resolving into structured blocks. */}
            <path d="M3 6h7M3 9.5h7M3 13h5" />
            <path d="M13.5 5.5h7.5M13.5 12.5h7.5" opacity="0.45" />
            <rect x="12" y="8.5" width="4" height="6" rx="1" />
            <rect x="17" y="8.5" width="4" height="6" rx="1" />
            <path d="M12 18h9" />
          </>
        ) : null}
      </svg>
    </span>
  );
}