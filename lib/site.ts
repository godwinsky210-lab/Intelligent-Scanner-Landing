export const site = {
  name: "Intelligent Scanner",
  tagline: "Scan. Extract. Organize.",
  /**
   * Neutral product description used for metadata and social previews.
   * Deliberately avoids vendor names and unsubstantiated marketing claims.
   */
  description:
    "Intelligent Scanner — scan, enhance, organize, and extract information from documents.",
  status: "Android APK available",
  statusDetail: "The Android app is available as a direct APK download. It is an early testing release.",
  supportEmail: "godwinsky210@gmail.com",
  icon: "/intelligent-scanner-icon.png",
  ogImage: "/og-image.png",
} as const;

/**
 * Canonical site URL, used to resolve absolute URLs for metadata.
 *
 * PLACEHOLDER: no production domain has been confirmed or purchased. Set
 * NEXT_PUBLIC_SITE_URL in the deployment environment before launch. The
 * fallback below is intentionally not treated as the real domain.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://example.com";

export { siteUrl };

/**
 * Android APK download, published as GitHub Release v1.0.0.
 *
 * Points at the release asset itself rather than the release page so the
 * link downloads the file directly. GitHub serves these with
 * `Content-Disposition: attachment`, which is what makes the download work
 * without any server-side handling of our own.
 *
 * Bumping to a new release means changing both the tag and the filename
 * below: they are separate parts of the URL, so a mismatch produces a 404
 * rather than a redirect. Keep the two in step when publishing.
 */
export const appDownload = {
  label: "Download Android App",
  url: "https://github.com/godwinsky210-lab/Intelligent-Scanner-Landing/releases/download/v1.0.0/Intelligent-Scanner-v1.0.0.apk",
  releasePage: "https://github.com/godwinsky210-lab/Intelligent-Scanner-Landing/releases",
} as const;

/**
 * Primary navigation. These anchor targets are filled in by the sections
 * built after the hero.
 */
export const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
] as const;

/**
 * Hero copy. Kept here so product language lives in one place.
 * Avoids vendor names and comparative claims.
 *
 * The primary CTA label lives in `appDownload` rather than here, since it
 * describes the download rather than the hero. `badge` still says "Currently
 * in testing" because that remains true: the Android APK is published as an
 * early testing release, not a finished launch.
 */
export const hero = {
  badge: "Currently in testing",
  headingLead: "Scan, extract, and organize",
  headingAccent: "your documents.",
  body: "Intelligent Scanner lets you capture pages with the camera, fine-tune each one, and turn paper into organized digital information — in one focused mobile app.",
  secondaryCta: "Contact us",
  // Describes the full transformation rather than a single frame, since the
  // visual now shows handwritten notes becoming typed text. Updated from the
  // previous scanning-only description, which no longer matched the visual.
  visualAlt:
    "Illustration of the Intelligent Scanner mobile app: a handwritten short story is captured in the camera viewfinder, scanned line by line, then shown as clean extracted digital text.",
} as const;

/**
 * "How it works" section copy.
 *
 * Wording is verified against the mobile app implementation. In particular:
 * capture is camera or gallery; enhancement covers edge adjustment, rotation
 * and the filter modes; extraction is a per-page operation that returns
 * structured content. No timing, accuracy, format or volume claims are made
 * because none are confirmed.
 */
export const howItWorks = {
  eyebrow: "How it works",
  title: "Three steps, start to finish.",
  intro:
    "From a sheet of paper to organised digital content, the workflow stays short and predictable.",
  /**
   * No `number` field. The steps are an ordered list, so the surrounding
   * <ol> already conveys sequence to assistive technology, and each step has
   * a distinct icon and title. The previous "01"/"02"/"03" badges were purely
   * decorative and read as numbered-template filler, so they were dropped.
   */
  steps: [
    {
      title: "Scan",
      description:
        "Capture a document with the scanner or prepare a document image.",
      icon: "scan",
    },
    {
      title: "Enhance",
      description:
        "Improve the document appearance with scanning and enhancement tools so it is easier to read and work with.",
      icon: "enhance",
    },
    {
      title: "Extract",
      description:
        "Process the document and extract useful information from it.",
      icon: "extract",
    },
  ],
} as const;

/**
 * "Features" section copy.
 *
 * Each entry maps to functionality verified in the mobile app. Intentionally
 * omitted because they are either not implemented or not part of this
 * section's scope: accuracy figures, processing times, offline operation,
 * cloud sync, export formats, document classification, handwriting
 * recognition, and third-party integrations.
 *
 * Note on "enhancement": in the current build the adjustment controls are
 * reached after a document is saved, so the copy describes the capability
 * rather than promising adjustments during capture.
 */
export const features = {
  eyebrow: "Features",
  title: "Everything the workflow needs, nothing it doesn't.",
  intro:
    "Each capability below is built around one job: getting a clean, organised copy of a document out of your phone.",
  featured: {
    title: "Document scanning",
    description:
      "Capture a document with the phone camera. Intelligent Scanner frames the page as you shoot, so you can see what is being captured before you keep it.",
    points: [
      "Camera capture with framing guides",
      "Automatic page edge detection",
      "Manual crop adjustment when you need it",
    ],
    visualAlt:
      "Illustration of the Intelligent Scanner app on a phone: a clean page is detected and scanned by a moving beam, then replaced by extracted text reading “Document successfully scanned”, with the fields Name: John Doe, Date: 05/10/2026 and Reference: IS-20481, and a note that 3 pages were processed. The details are an example, not a real document.",
  },
  supporting: [
    {
      title: "Gallery import",
      description:
        "Import an existing document image from your device gallery and use it as a page.",
      icon: "gallery",
    },
    {
      title: "Edge detection & cropping",
      description:
        "Document boundaries are detected automatically, and you can adjust the crop yourself when the outline needs correcting.",
      icon: "crop",
    },
    {
      title: "Image enhancement",
      description:
        "Improve the appearance of a scanned page with the available enhancement controls, including brightness, contrast, and sharpness.",
      icon: "enhance",
    },
    {
      title: "Document organisation",
      description:
        "Work with your scans as documents, then manage individual pages within each one.",
      icon: "organize",
    },
    {
      title: "Information extraction",
      description:
        "Process scanned pages to extract structured information you can work with.",
      icon: "extract",
    },
  ],
} as const;

/**
 * "Pricing" section copy.
 *
 * The app is in pre-launch and payments are not live, so no figure is
 * published here. The section explains the intended usage-based model without
 * presenting it as an active charge or a permanent commitment.
 *
 * Deliberately excluded: any specific amount, subscription or plan language,
 * tier tables, guarantee or accuracy claims, and payment-provider or backend
 * implementation details.
 */
export const pricing = {
  eyebrow: "Pricing",
  title: "Simple, usage-based pricing.",
  intro:
    "Intelligent Scanner is designed around usage-based extraction. Pricing and payment will be available when the app launches.",
  status: "Currently in testing",
  card: {
    title: "Usage-based extraction",
    description:
      "Extraction is metered by the pages you choose to process, so the amount of work you do stays visible and understandable.",
    points: [
      "A single model, with nothing to compare against",
      "Charging tied to the pages you choose to process",
      "Nothing is published while the app is in testing",
    ],
    cta: "Coming Soon",
    ctaNote: "Payments are not live yet. Nothing is charged at this stage.",
  },
  note: {
    title: "What this means right now",
    body: "Pricing and payment will be available when the app launches. Details may change from this intended model as testing continues, so nothing here should be treated as a fixed commitment.",
  },
} as const;

/**
 * "FAQ" section copy.
 *
 * Answers describe only what the mobile app actually does, verified against
 * the implementation.
 *
 * Deliberately excluded: vendor names, payment-provider or backend details,
 * figures of any kind (prices, accuracy, timing, user counts), plan or tier
 * language, and any mention of cloud sync, offline operation, automatic
 * classification, handwriting recognition, export formats or enterprise
 * features.
 */
export const faq = {
  eyebrow: "FAQ",
  title: "Questions worth asking first.",
  intro:
    "What Intelligent Scanner does today, and what is still to come.",
  items: [
    {
      question: "What is Intelligent Scanner?",
      answer:
        "Intelligent Scanner is a mobile document scanning application. It helps you capture documents, improve scanned pages, organise documents, and extract information from them.",
    },
    {
      question: "How do I scan a document?",
      answer:
        "You capture a document with the phone camera. Framing guidance and document edge detection help you line the page up before it is kept.",
    },
    {
      question: "Can I import an existing document image?",
      answer:
        "Yes. You can import an existing document image from your device gallery and use it as a page.",
    },
    {
      question: "Can I adjust a scanned page?",
      answer:
        "Yes. You can adjust the crop yourself, and use the available image enhancement controls such as brightness, contrast, and sharpness.",
    },
    {
      question: "What does information extraction do?",
      answer:
        "Intelligent Scanner can process scanned pages and extract structured information from them, turning a page into content you can work with.",
    },
    {
      question: "Is Intelligent Scanner available yet?",
      answer:
        "Yes, for Android. The app is published as an early testing release, and the APK can be downloaded from this page. There is no iOS version yet.",
    },
    {
      question: "How does pricing work?",
      answer:
        "The intended model is usage-based extraction. Pricing and payment will be available when the app launches, and no figures are published at this stage.",
    },
    {
      question: "Are payments live?",
      answer:
        "No. Payment functionality is currently being tested, and live payments are not available at this stage.",
    },
  ],
} as const;

/**
 * Closing CTA copy.
 *
 * The button stays inert: it refers to the full public launch, which has not
 * happened, and must not be confused with the Android download. The copy
 * around it therefore points at the APK that *is* available instead of
 * claiming nothing can be downloaded.
 */
export const finalCta = {
  eyebrow: "Ready when you are",
  title: "A simpler way to work with scanned documents.",
  body: "The Android app is out now as an early testing release — download it from the top of this page. The full public launch is still to come.",
  cta: "Coming Soon",
  ctaNote: "The full launch, including pricing and payments, is not live yet.",
} as const;

/**
 * Footer copy and link groups.
 *
 * These groups stay internal anchors and routes on purpose: the footer is
 * navigation, not a download surface. The Android APK lives in the hero, and
 * external release URLs live in `appDownload` above.
 */
export const footer = {
  description:
    "Scan, enhance, organise, and extract information from documents.",
  navigation: [
    { href: "/", label: "Home" },
    { href: "/#features", label: "Features" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#faq", label: "FAQ" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
} as const;