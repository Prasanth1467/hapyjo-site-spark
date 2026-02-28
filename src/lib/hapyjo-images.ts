/**
 * Hapyjo asset registry – all images from src/assets/hapyjo/
 * Ordered by file number for consistent section distribution.
 * Vite glob with ?url returns modules with default = URL string.
 */
const glob = import.meta.glob<string | { default: string }>(
  "../assets/hapyjo/*.jpeg",
  { eager: true, query: "?url", import: "default" }
);

const byNumber = (a: string, b: string) => {
  const numA = parseInt(a.replace(/.*\/(\d+)\.jpeg/, "$1"), 10) || 0;
  const numB = parseInt(b.replace(/.*\/(\d+)\.jpeg/, "$1"), 10) || 0;
  return numA - numB;
};

const sortedKeys = Object.keys(glob).sort(byNumber);

function getUrl(value: string | { default: string } | undefined): string | null {
  if (typeof value === "string") return value;
  if (value && typeof (value as { default?: string }).default === "string") return (value as { default: string }).default;
  return null;
}

/** Ordered list of all hapyjo image URLs (by file number). */
export const HAPYJO_IMAGES: string[] = sortedKeys
  .map((key) => getUrl(glob[key]))
  .filter((url): url is string => url != null);

/** Get image URL by 1-based index (1..94). Returns undefined if out of range. */
export function getHapyjoImage(index: number): string | undefined {
  return HAPYJO_IMAGES[index - 1];
}

/** Total count of available images. */
export const HAPYJO_IMAGE_COUNT = HAPYJO_IMAGES.length;
