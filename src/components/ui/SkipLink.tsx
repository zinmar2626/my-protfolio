/**
 * Skip-to-content link — WCAG 2.4.1 Bypass Blocks.
 *
 * Visually hidden until focused via Tab key. Placed as the first focusable
 * element in <body>. Routes keyboard users directly to <main id="content">.
 */
export function SkipLink() {
  return (
    <a
      href="#content"
      className="
        sr-only focus:not-sr-only
        absolute left-4 top-3 z-[100]
        inline-flex h-9 items-center rounded-md bg-primary px-4
        text-sm font-medium text-primary-foreground
        shadow-lg outline-none
        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
      "
    >
      Skip to content
    </a>
  );
}
