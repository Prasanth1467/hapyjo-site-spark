/**
 * Image distribution (94 total).
 * Homepage must NOT load all blog/gallery images – only preview images.
 */
export const IMAGE_ALLOCATION = {
  hero: 1,
  about: [2, 3] as const,
  services: [4, 5, 6, 7, 8, 9] as const,
  industries: [10, 11, 12, 13, 14, 15] as const,
  trust: [16, 17, 18] as const,
  galleryStart: 19,
  galleryCount: 40,
  blogDetailStart: 59,
  blogDetailCount: 36,
} as const;

export const GALLERY_IMAGES_PER_PAGE = 12;

/** Gallery image indices (19 to 58 = 40 images). */
export function getGalleryImageIndices(): number[] {
  const start = IMAGE_ALLOCATION.galleryStart;
  const end = start + IMAGE_ALLOCATION.galleryCount - 1;
  const indices: number[] = [];
  for (let i = start; i <= end; i++) indices.push(i);
  return indices;
}

/** Total gallery pages (12 per page). */
export function getGalleryTotalPages(): number {
  return Math.ceil(IMAGE_ALLOCATION.galleryCount / GALLERY_IMAGES_PER_PAGE);
}

/**
 * Project Proof section: 4 clusters for large grouped image blocks.
 * activeExcavation, roadConstructionFleet, materialLoading, workforceTransport.
 */
export const PROJECT_PROOF_CLUSTERS = {
  activeExcavation: [19, 20, 21, 22, 23, 24],
  roadConstructionFleet: [25, 26, 27, 28, 29, 30],
  materialLoading: [31, 32, 33, 34, 35, 36],
  workforceTransport: [37, 38, 39, 40, 41, 42],
} as const;

/**
 * Image grouping for consistent section use (94 images).
 * Fleet | Site Operations | Transport | Equipment Use | Project Deployment
 */
export const IMAGE_GROUPS = {
  fleet: { start: 1, count: 18 },
  siteOperations: { start: 19, count: 20 },
  transport: { start: 39, count: 18 },
  equipmentUse: { start: 57, count: 18 },
  projectDeployment: { start: 75, count: 20 },
} as const;

/** Blog detail: 9 posts × 4 images = 36. Each post: heroIndex, supportIndex1, supportIndex2, supportIndex3. */
export const BLOG_DETAIL_IMAGE_RANGES = [
  [59, 60, 61, 62],
  [63, 64, 65, 66],
  [67, 68, 69, 70],
  [71, 72, 73, 74],
  [75, 76, 77, 78],
  [79, 80, 81, 82],
  [83, 84, 85, 86],
  [87, 88, 89, 90],
  [91, 92, 93, 94],
] as const;
