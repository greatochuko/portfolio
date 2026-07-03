export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  url: string;
  status: "live" | "build" | "archive";
  statusLabel: string;
  duration: string;
  role: string;
  desc: string;
  tags: string[];
  thumbnailUrl?: string;
  overview: string;
  challenge: string;
  solution: string;
  architecture: string[];
};

export const projects: Project[] = [
  {
    slug: "clinic-lead-stack",
    title: "Clinic Lead Stack",
    subtitle: "AI social media post creator and scheduler",
    url: "https://clinicleadstack.com",
    status: "live",
    statusLabel: "Live",
    duration: "6 months, ongoing",
    role: "Full-stack developer & product owner",
    desc: "An AI social media post creator and scheduler — generate captions, queue carousels and reels, and track campaign performance from one dashboard.",
    tags: ["React", "Node.js", "Prisma", "Meta Graph API", "Cloudinary"],
    thumbnailUrl: "cls-1.webp",
    overview:
      "Clinic Lead Stack helps small teams and solo operators plan, generate, and publish social content without juggling five different tools. Users draft captions with AI, queue up carousels and reels, and see how each post performs against ad spend from a single dashboard.",
    challenge:
      "Publishing to Instagram programmatically means working around Meta's container-based upload flow, handling video assets that need external hosting, and reconciling ad-level metrics with individual posts — all while keeping the UI simple enough for non-technical users.",
    solution:
      "Built a Node.js/Prisma backend that manages Instagram media containers end-to-end (images, carousels, reels), using Cloudinary as an intermediary host for video assets before they're handed to the Graph API. Added a CampaignMetric model that syncs ad-level performance data on a schedule and surfaces it in a sortable, color-coded metrics table on the frontend.",
    architecture: [
      "React + TypeScript frontend with route-level auth protection",
      "Node.js/Express backend with Prisma ORM over a relational database",
      "Meta Graph API integration for Instagram publishing (image, carousel, reel)",
      "Cloudinary as intermediary storage for video assets pre-publish",
      "Scheduled sync job for Meta campaign-level ad metrics",
      "Client/project data queries optimized with relational filtering and Promise.all parallelization",
    ],
  },
  {
    slug: "garcia-medical-clinic",
    title: "Garcia Medical Clinic",
    subtitle: "Private clinic portal for patient intake and scheduling",
    url: "https://garciamedicalclinic.site",
    status: "live",
    statusLabel: "Live (client)",
    duration: "N/A",
    role: "Full-stack developer",
    desc: "A private clinic portal for patient intake, scheduling, and records — built on Laravel, gated behind auth for staff and patients.",
    tags: ["Laravel", "PHP", "Auth", "Healthcare"],
    thumbnailUrl: "garcia-medical-clinic-1.webp",
    overview:
      "A Laravel-based patient management portal for a medical clinic, handling intake, scheduling, and records behind an authenticated staff/patient login. Not publicly browsable by design.",
    challenge:
      "Healthcare-adjacent tooling has to be strict about access control from day one, and the client needed something reliable and low-maintenance rather than feature-heavy.",
    solution:
      "Built on Laravel with auth-gated routes separating staff and patient views, prioritizing a stable, boring-by-design architecture over a flashy public-facing feature set.",
    architecture: [
      "Laravel backend with server-rendered auth flows",
      "Role-gated views for staff vs. patients",
      "Scheduling and records management modules",
    ],
  },
  {
    slug: "comobi",
    title: "Comobi",
    subtitle: "Operations and startup consultancy",
    url: "https://comobi.co.uk",
    status: "live",
    statusLabel: "Live (client)",
    duration: "N/A",
    role: "Frontend developer",
    desc: "Operations and startup consultancy site — helps funded startups strengthen operational efficiency, design go-to-market strategy, and implement AI-driven workflow automation.",
    tags: ["Next.js", "Sanity CMS", "Consultancy"],
    thumbnailUrl: "comobi.webp",
    overview:
      "Marketing and content site for Comobi, a UK-based consultancy helping funded startups improve operational efficiency, plan go-to-market strategy, and adopt AI-driven workflow automation.",
    challenge:
      "Needed a content-heavy site (About, Services, Blog, Startup Guide, Contact) that the client could update independently without touching code.",
    solution:
      "Built on Next.js with Sanity as a headless CMS so non-technical team members can manage blog and guide content directly, while keeping page performance and SEO structure developer-controlled.",
    architecture: [
      "Next.js frontend",
      "Sanity CMS for content management",
      "Blog and resource guide sections decoupled from core site code",
    ],
  },
  {
    slug: "igbinovia-foundation",
    title: "Emmanuel Igbinovia Foundation",
    subtitle: "Championing education access for vulnerable groups",
    url: "https://igbinoviafoundation.org",
    status: "live",
    statusLabel: "Live (client)",
    duration: "N/A",
    role: "Frontend developer",
    desc: "Nonprofit site for a foundation committed to quality education for orphans in Nigeria through Project 'Ripple Town,' championing access to education for vulnerable groups.",
    tags: ["React", "Nonprofit", "CMS"],
    thumbnailUrl: "eif-1.webp",
    overview:
      "Site for the Emmanuel Igbinovia Foundation, a Nigerian nonprofit committed to quality education for orphans through its Project 'Ripple Town,' aligned with SDG 4.",
    challenge:
      "Nonprofit sites need to build trust and communicate impact quickly to potential donors and partners, without a large content or dev team to maintain them.",
    solution:
      "Delivered a clean, content-forward React site focused on mission clarity and program storytelling, structured to be easy for the foundation's team to keep current.",
    architecture: [
      "React frontend",
      "Content-driven page structure for mission, programs, and donation info",
    ],
  },
  {
    slug: "rec-liiga",
    title: "REC LiiGA",
    subtitle: "Drop-in sports, reimagined",
    url: "https://recliiga.com",
    status: "live",
    statusLabel: "Live (client)",
    duration: "N/A",
    role: "Full-stack developer",
    desc: "Drop-in sports, reimagined — discover local pickup games, draft teams, and track standings, built to make recreational sports social and competitive.",
    tags: ["React", "Sports", "Community"],
    thumbnailUrl: "recliiga-1.webp",
    overview:
      "REC LiiGA helps people find local drop-in sports games, draft teams on the fly, and track standings — bringing structure and competition to casual pickup sports.",
    challenge:
      "Drop-in sports are inherently unstructured — the product needed to make team drafting and standings feel effortless for organizers without turning it into a heavyweight league-management tool.",
    solution:
      "Built lightweight game discovery, drafting, and standings features that layer competitive structure onto casual pickup sports without adding organizer overhead.",
    architecture: [
      "React frontend",
      "Game discovery and drafting flow",
      "Standings tracking",
    ],
  },
  {
    slug: "scoutsesh",
    title: "ScoutSesh",
    subtitle: "Athlete development, evaluated and tracked",
    url: "https://scoutsesh.com",
    status: "live",
    statusLabel: "Live (client)",
    duration: "N/A",
    role: "Full-stack developer",
    desc: "An athlete development platform combining coach/scout evaluations, goal tracking, and virtual group coaching classes for athletes at any level.",
    tags: ["React", "Sports", "Coaching"],
    thumbnailUrl: "scoutsesh-1.webp",
    overview:
      "ScoutSesh brings together coach and scout evaluations, goal-setting tools, and virtual group coaching classes into one platform for athletes across skill levels.",
    challenge:
      "The platform needed to serve three distinct workflows — evaluation, goal tracking, and live virtual classes — without feeling like three disconnected products bolted together.",
    solution:
      "Structured the product around three clear pillars (Athlete Evaluation, Goal Setting, Group Classes) sharing a common athlete profile, so progress in one area is visible across the others.",
    architecture: [
      "React frontend",
      "Athlete evaluation and feedback module",
      "Goal-setting and progress tracking",
      "Virtual group class scheduling",
    ],
  },
  {
    slug: "x-scrape",
    title: "X-Scrape",
    subtitle: "AI-assisted scheduling for Threads, Reddit, and Twitter",
    url: "https://x-scrape.vercel.app",
    status: "build",
    statusLabel: "In development",
    duration: "2 months, ongoing",
    role: "Full-stack developer",
    desc: "An AI-assisted social scheduling tool for Threads, Reddit, and Twitter — tone/vibe controls (Casual, Hype, Spicy), smart scheduling, and real analytics.",
    tags: ["React", "Next.js", "AI", "Scheduling"],
    thumbnailUrl: "x-scrape.png",
    overview:
      "X-Scrape automates social posting across Threads, Reddit, and Twitter from one dashboard, with AI-generated post copy that can be tuned to a specific tone or 'vibe' before scheduling.",
    challenge:
      "Each platform has different content norms and API quirks, so 'one post, three platforms' needed tone controls and formatting that actually fit each destination rather than a single generic output.",
    solution:
      "Added configurable vibe presets (Casual, Hype, Spicy) that adjust AI-generated copy per platform, paired with a smart scheduler and an analytics layer to track real post performance. Rolled out a tiered pricing structure, starting with a live Starter tier.",
    architecture: [
      "React/Next.js frontend",
      "AI copy generation with tone/vibe presets",
      "Multi-platform posting (Threads, Reddit, Twitter)",
      "Smart scheduling engine",
      "Analytics dashboard",
      "Tiered pricing (Starter live; Professional/Enterprise planned)",
    ],
  },
];
