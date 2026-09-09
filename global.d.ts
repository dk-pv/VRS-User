declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// gtag.js is loaded conditionally in app/layout.tsx when
// NEXT_PUBLIC_GA_MEASUREMENT_ID is set, so it may be absent.
interface Window {
  gtag?: (...args: unknown[]) => void;
}