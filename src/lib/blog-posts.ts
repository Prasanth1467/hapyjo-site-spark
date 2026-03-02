import { BLOG_DETAIL_IMAGE_RANGES } from "./image-allocation";

export interface BlogPost {
  slug: string;
  title: string;
  shortDescription: string;
  heroImageIndex: number;
  supportingImageIndices: [number, number, number];
  content: string[];
}

/** 9 blog posts for detail pages. Each uses 4 images (hero + 3 supporting). Unique content per post. */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "fleet-deployment-construction",
    title: "Efficient Fleet Deployment in Construction Sites",
    shortDescription: "Planned fleet deployment strategies for uptime and reduced idle time across construction environments.",
    heroImageIndex: BLOG_DETAIL_IMAGE_RANGES[0][0],
    supportingImageIndices: [BLOG_DETAIL_IMAGE_RANGES[0][1], BLOG_DETAIL_IMAGE_RANGES[0][2], BLOG_DETAIL_IMAGE_RANGES[0][3]],
    content: [
      "Efficient fleet deployment on construction sites depends on matching equipment type and quantity to daily task schedules rather than simply having machines on site.",
      "Contractors who plan deployment around peak activity windows—for example excavators during morning excavation and trucks during afternoon hauling—report fewer idle hours and better fuel and labour utilisation.",
      "Coordinating with site managers to lock in weekly movement plans reduces last-minute shuffling and allows maintenance to be scheduled in predictable gaps.",
      "Use-case: On road projects, assigning dump trucks to specific haul cycles and keeping excavators and compactors in defined zones avoids congestion and speeds handover between phases.",
      "Our approach ensures:",
      "Reduced equipment downtime",
      "On-site availability when needed",
      "Safety compliance through clear movement plans",
      "Scalable deployment as project phases change",
    ],
  },
  {
    slug: "machinery-planning-road-projects",
    title: "Machinery Planning for Road Projects",
    shortDescription: "How to plan and schedule machinery for road construction and paving support.",
    heroImageIndex: BLOG_DETAIL_IMAGE_RANGES[1][0],
    supportingImageIndices: [BLOG_DETAIL_IMAGE_RANGES[1][1], BLOG_DETAIL_IMAGE_RANGES[1][2], BLOG_DETAIL_IMAGE_RANGES[1][3]],
    content: [
      "Road projects require a clear sequence: earthworks, sub-base, base, and surfacing. Each phase needs different machinery and capacity.",
      "Planning machinery for road work starts with quantifying cut-and-fill volumes and haul distances so you can size excavator, loader, and truck requirements. Underestimating haul capacity is a common cause of delay.",
      "Paving and compaction equipment should be scheduled around material delivery windows so that temperature and moisture specs are met and crews are not standing by waiting for trucks.",
      "Practical tip: Build in a small buffer (e.g. 10–15% extra machine-days) for weather and rework; it is cheaper than emergency short-term hires.",
      "Benefits of structured planning:",
      "Fewer bottlenecks between phases",
      "Better use of hired vs owned equipment",
      "Clear handover points for operators and subcontractors",
    ],
  },
  {
    slug: "dump-truck-usage-optimization",
    title: "Dump Truck Usage Optimization",
    shortDescription: "Best practices for dump truck utilization in earthworks and hauling.",
    heroImageIndex: BLOG_DETAIL_IMAGE_RANGES[2][0],
    supportingImageIndices: [BLOG_DETAIL_IMAGE_RANGES[2][1], BLOG_DETAIL_IMAGE_RANGES[2][2], BLOG_DETAIL_IMAGE_RANGES[2][3]],
    content: [
      "Dump truck productivity in earthworks and mining is driven by cycle time: load time, haul distance, dump time, and return. Improving any one of these increases daily tonnage.",
      "Loading should be sized so that trucks are filled in three to five passes; too many passes wastes time, too few leaves capacity unused. Match loader bucket size and truck tray capacity during planning.",
      "Haul road condition has a direct impact on speed and wear. Graded, compacted haul routes reduce cycle time and maintenance; poor roads increase fuel use and repair costs.",
      "Weighing loads at exit and entry points helps avoid overloads (safety and road damage) and underloads (wasted trips), and gives accurate data for invoicing and optimisation.",
      "Key takeaways:",
      "Optimise load-and-haul match",
      "Maintain haul roads",
      "Use weigh data to tune fleet size and cycles",
    ],
  },
  {
    slug: "heavy-equipment-rental-planning",
    title: "Heavy Equipment Rental Planning",
    shortDescription: "Cost-effective equipment rental models and on-demand machinery for peak periods.",
    heroImageIndex: BLOG_DETAIL_IMAGE_RANGES[3][0],
    supportingImageIndices: [BLOG_DETAIL_IMAGE_RANGES[3][1], BLOG_DETAIL_IMAGE_RANGES[3][2], BLOG_DETAIL_IMAGE_RANGES[3][3]],
    content: [
      "Rental works best when it covers predictable peaks or specific phases—e.g. extra excavators for bulk earthworks or cranes for structural lifts—rather than core, long-term needs.",
      "Compare total cost: daily or weekly rate plus transport, fuel, and operator if not included. A lower rate with high mobilisation cost can be worse than a slightly higher all-in rate.",
      "Booking in advance secures availability and often better rates; last-minute rentals are costlier and may not match the exact spec you need.",
      "For multi-month projects, consider phased contracts: initial phase at higher intensity with more units, then scale down as work tapers, instead of one long flat rental.",
      "Rental planning checklist:",
      "Define peak vs steady-state demand",
      "Include transport and operator in cost comparison",
      "Lock in key periods early",
    ],
  },
  {
    slug: "site-logistics-management",
    title: "Site Logistics Management",
    shortDescription: "Integrated site and fleet control for multi-site equipment scheduling.",
    heroImageIndex: BLOG_DETAIL_IMAGE_RANGES[4][0],
    supportingImageIndices: [BLOG_DETAIL_IMAGE_RANGES[4][1], BLOG_DETAIL_IMAGE_RANGES[4][2], BLOG_DETAIL_IMAGE_RANGES[4][3]],
    content: [
      "Site logistics ties together equipment, materials, and labour so that the right resources are in the right place at the right time. Poor coordination shows up as idle plant, delayed deliveries, or overtime.",
      "Multi-site setups need a single view of where each unit is, what it is assigned to, and when it is free. Spreadsheets work for small fleets; beyond that, simple tracking (even shared docs with clear rules) beats no system.",
      "Prioritise high-value or critical-path equipment: excavators, cranes, and key trucks. Allocating these first, then filling in support equipment, avoids conflicts and last-minute moves.",
      "Daily or weekly logistics briefings with site and transport leads help align on priorities, weather, and any changes so redeployments are agreed, not ad hoc.",
      "What good site logistics delivers:",
      "Fewer conflicts over shared equipment",
      "Faster response when plans change",
      "Clear accountability for movement and availability",
    ],
  },
  {
    slug: "transport-efficiency-industrial-projects",
    title: "Transport Efficiency for Industrial Projects",
    shortDescription: "Transport and logistics efficiency for industrial and commercial development.",
    heroImageIndex: BLOG_DETAIL_IMAGE_RANGES[5][0],
    supportingImageIndices: [BLOG_DETAIL_IMAGE_RANGES[5][1], BLOG_DETAIL_IMAGE_RANGES[5][2], BLOG_DETAIL_IMAGE_RANGES[5][3]],
    content: [
      "Industrial and commercial projects often involve tight delivery windows, restricted access, and coordination with other trades. Transport efficiency here means on-time, right-sized loads and minimal site disruption.",
      "Consolidating deliveries into fewer, full loads reduces trips, traffic around site, and admin. Agreeing fixed time slots with suppliers and internal teams makes unloading and staging predictable.",
      "For personnel, dedicated shuttle runs at shift start and end are usually more efficient and safer than ad hoc trips. Routes and timings should be communicated clearly to avoid no-shows and delays.",
      "Documenting transport plans (who delivers what, when, and where to park or unload) avoids conflicts and speeds up handover between logistics and site management.",
      "Efficiency levers:",
      "Consolidated and scheduled deliveries",
      "Dedicated personnel transport where relevant",
      "Written transport and access plans",
    ],
  },
  {
    slug: "earthmoving-equipment-best-practices",
    title: "Earthmoving Equipment Best Practices",
    shortDescription: "Excavator and wheel loader utilization for foundations and material handling.",
    heroImageIndex: BLOG_DETAIL_IMAGE_RANGES[6][0],
    supportingImageIndices: [BLOG_DETAIL_IMAGE_RANGES[6][1], BLOG_DETAIL_IMAGE_RANGES[6][2], BLOG_DETAIL_IMAGE_RANGES[6][3]],
    content: [
      "Excavators and wheel loaders are the backbone of earthworks and material handling. Matching machine size to task—bucket capacity to truck or stockpile, reach to trench depth—avoids underuse or overhire.",
      "For foundations and trenches, plan dig sequence and spoil placement in advance. Working from one end and progressing reduces repositioning and keeps haul routes clear.",
      "Wheel loaders excel at loading trucks and moving bulk material on flat or gently sloping ground. Use them for stockpile management and feeding crushers or screens; use excavators where reach, depth, or precision are needed.",
      "Operator familiarity with the specific machine and site layout cuts cycle time and damage. Where possible, keep the same operator on the same unit for the duration of a phase.",
      "Best practices summary:",
      "Match machine size and type to task",
      "Plan dig and spoil sequence",
      "Use loaders for bulk, excavators for reach and precision",
      "Stable operator–machine assignment",
    ],
  },
  {
    slug: "crane-lifting-operations-site",
    title: "Crane and Lifting Operations on Site",
    shortDescription: "Safety and compliance in heavy machinery and lifting operations.",
    heroImageIndex: BLOG_DETAIL_IMAGE_RANGES[7][0],
    supportingImageIndices: [BLOG_DETAIL_IMAGE_RANGES[7][1], BLOG_DETAIL_IMAGE_RANGES[7][2], BLOG_DETAIL_IMAGE_RANGES[7][3]],
    content: [
      "Crane and lifting operations carry high risk when loads, radii, or ground conditions are misjudged. Planning starts with a lift plan: load weight, pick and set positions, and exclusion zones.",
      "Ground bearing capacity must be confirmed for outrigger or track positions. Mats or spreader plates are often needed on soft or uneven ground to avoid settlement or tip.",
      "Communication between crane operator and banksman (signal person) should be clear and consistent—hand signals, radios, or both—and only one person should direct the lift unless a formal handover is agreed.",
      "Pre-use checks and periodic inspections keep equipment and slings in safe condition. Documented checks also support compliance and help identify trends before they become failures.",
      "Safety and compliance priorities:",
      "Lift plan for every non-routine lift",
      "Suitable ground and outrigger setup",
      "Clear signalling and one director per lift",
      "Routine checks and documented inspections",
    ],
  },
  {
    slug: "integrated-site-fleet-control",
    title: "Integrated Site and Fleet Control Systems",
    shortDescription: "Scaling fleet operations and operator training for large projects.",
    heroImageIndex: BLOG_DETAIL_IMAGE_RANGES[8][0],
    supportingImageIndices: [BLOG_DETAIL_IMAGE_RANGES[8][1], BLOG_DETAIL_IMAGE_RANGES[8][2], BLOG_DETAIL_IMAGE_RANGES[8][3]],
    content: [
      "Larger projects need integrated control of site and fleet: one view of schedules, locations, and maintenance so that decisions are based on current data, not guesswork.",
      "Scaling fleet operations usually requires defined roles: someone responsible for allocation, someone for maintenance and availability, and clear handover between site and transport. Without that, double-booking and gaps are common.",
      "Operator training and familiarisation should cover both the equipment and the project’s safety and quality standards. New operators or new machines on site should have a run-in period with supervision.",
      "Reporting—daily utilisation, fuel, incidents—helps spot underuse, overuse, or recurring issues. Simple dashboards or reports are enough to start; the discipline of reviewing them matters more than the tool.",
      "At scale, focus on:",
      "Single source of truth for allocation and status",
      "Clear roles for allocation and maintenance",
      "Training and run-in for operators and machines",
      "Regular utilisation and incident review",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
