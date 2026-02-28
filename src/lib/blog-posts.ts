import { BLOG_DETAIL_IMAGE_RANGES } from "./image-allocation";

export interface BlogPost {
  slug: string;
  title: string;
  shortDescription: string;
  heroImageIndex: number;
  supportingImageIndices: [number, number, number];
  content: string[];
}

const SAMPLE_CONTENT = (title: string) => [
  `HapyJo Ltd supports infrastructure contractors through planned fleet deployment strategies that ensure uptime and reduce idle machinery time across multiple construction environments.`,
  `With our 34 unit fleet (11 machines and 23 trucks), we enable timely project support through coordinated machinery scheduling and transport logistics.`,
  `Our approach ensures:`,
  `Reduced equipment downtime`,
  `On-site availability`,
  `Safety compliance`,
  `Scalable deployment support`,
];

/** 9 blog posts for detail pages. Each uses 4 images (hero + 3 supporting). */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "fleet-deployment-construction",
    title: "Efficient Fleet Deployment in Construction Sites",
    shortDescription: "Planned fleet deployment strategies for uptime and reduced idle time across construction environments.",
    heroImageIndex: BLOG_DETAIL_IMAGE_RANGES[0][0],
    supportingImageIndices: [BLOG_DETAIL_IMAGE_RANGES[0][1], BLOG_DETAIL_IMAGE_RANGES[0][2], BLOG_DETAIL_IMAGE_RANGES[0][3]],
    content: SAMPLE_CONTENT("Fleet Deployment"),
  },
  {
    slug: "machinery-planning-road-projects",
    title: "Machinery Planning for Road Projects",
    shortDescription: "How to plan and schedule machinery for road construction and paving support.",
    heroImageIndex: BLOG_DETAIL_IMAGE_RANGES[1][0],
    supportingImageIndices: [BLOG_DETAIL_IMAGE_RANGES[1][1], BLOG_DETAIL_IMAGE_RANGES[1][2], BLOG_DETAIL_IMAGE_RANGES[1][3]],
    content: SAMPLE_CONTENT("Machinery Planning"),
  },
  {
    slug: "dump-truck-usage-optimization",
    title: "Dump Truck Usage Optimization",
    shortDescription: "Best practices for dump truck utilization in earthworks and hauling.",
    heroImageIndex: BLOG_DETAIL_IMAGE_RANGES[2][0],
    supportingImageIndices: [BLOG_DETAIL_IMAGE_RANGES[2][1], BLOG_DETAIL_IMAGE_RANGES[2][2], BLOG_DETAIL_IMAGE_RANGES[2][3]],
    content: SAMPLE_CONTENT("Dump Truck Usage"),
  },
  {
    slug: "heavy-equipment-rental-planning",
    title: "Heavy Equipment Rental Planning",
    shortDescription: "Cost-effective equipment rental models and on-demand machinery for peak periods.",
    heroImageIndex: BLOG_DETAIL_IMAGE_RANGES[3][0],
    supportingImageIndices: [BLOG_DETAIL_IMAGE_RANGES[3][1], BLOG_DETAIL_IMAGE_RANGES[3][2], BLOG_DETAIL_IMAGE_RANGES[3][3]],
    content: SAMPLE_CONTENT("Heavy Equipment Rental"),
  },
  {
    slug: "site-logistics-management",
    title: "Site Logistics Management",
    shortDescription: "Integrated site and fleet control for multi-site equipment scheduling.",
    heroImageIndex: BLOG_DETAIL_IMAGE_RANGES[4][0],
    supportingImageIndices: [BLOG_DETAIL_IMAGE_RANGES[4][1], BLOG_DETAIL_IMAGE_RANGES[4][2], BLOG_DETAIL_IMAGE_RANGES[4][3]],
    content: SAMPLE_CONTENT("Site Logistics"),
  },
  {
    slug: "transport-efficiency-industrial-projects",
    title: "Transport Efficiency for Industrial Projects",
    shortDescription: "Transport and logistics efficiency for industrial and commercial development.",
    heroImageIndex: BLOG_DETAIL_IMAGE_RANGES[5][0],
    supportingImageIndices: [BLOG_DETAIL_IMAGE_RANGES[5][1], BLOG_DETAIL_IMAGE_RANGES[5][2], BLOG_DETAIL_IMAGE_RANGES[5][3]],
    content: SAMPLE_CONTENT("Transport Efficiency"),
  },
  {
    slug: "earthmoving-equipment-best-practices",
    title: "Earthmoving Equipment Best Practices",
    shortDescription: "Excavator and wheel loader utilization for foundations and material handling.",
    heroImageIndex: BLOG_DETAIL_IMAGE_RANGES[6][0],
    supportingImageIndices: [BLOG_DETAIL_IMAGE_RANGES[6][1], BLOG_DETAIL_IMAGE_RANGES[6][2], BLOG_DETAIL_IMAGE_RANGES[6][3]],
    content: SAMPLE_CONTENT("Earthmoving Equipment"),
  },
  {
    slug: "crane-lifting-operations-site",
    title: "Crane and Lifting Operations on Site",
    shortDescription: "Safety and compliance in heavy machinery and lifting operations.",
    heroImageIndex: BLOG_DETAIL_IMAGE_RANGES[7][0],
    supportingImageIndices: [BLOG_DETAIL_IMAGE_RANGES[7][1], BLOG_DETAIL_IMAGE_RANGES[7][2], BLOG_DETAIL_IMAGE_RANGES[7][3]],
    content: SAMPLE_CONTENT("Crane and Lifting"),
  },
  {
    slug: "integrated-site-fleet-control",
    title: "Integrated Site and Fleet Control Systems",
    shortDescription: "Scaling fleet operations and operator training for large projects.",
    heroImageIndex: BLOG_DETAIL_IMAGE_RANGES[8][0],
    supportingImageIndices: [BLOG_DETAIL_IMAGE_RANGES[8][1], BLOG_DETAIL_IMAGE_RANGES[8][2], BLOG_DETAIL_IMAGE_RANGES[8][3]],
    content: SAMPLE_CONTENT("Integrated Site and Fleet Control"),
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
