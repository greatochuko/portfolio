export type Project = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  overview?: string;
  stack?: string[];
  liveUrl?: string;
  sourceUrl?: string;
  galleryCount?: number;
  galleryImageExt?: string;
};

export function getGalleryImages(project: Project) {
  return Array.from(
    { length: project.galleryCount ?? 0 },
    (_, i) =>
      `/images/projects/${project.slug}-${i + 1}.${project.galleryImageExt || "webp"}`,
  );
}

export const projects: Project[] = [
  {
    slug: "gofixy",
    title: "Gofixy",
    description:
      "A marketplace for finding and hiring trusted artisans and home service professionals across Nigeria.",
    thumbnail: "/images/projects/thumbnails/gofixy.png",
    overview:
      "Gofixy is a marketplace that connects people across Nigeria with trusted artisans and home service professionals, making it easy to find, compare, and hire reliable help for repairs and household jobs.",
    stack: ["Node.js", "Express.js", "Socket.IO", "Zod"],
    liveUrl: "https://gofixy.ng",
    galleryCount: 19,
    galleryImageExt: "png",
  },
  {
    slug: "clinic-lead-stack",
    title: "Clinic Lead Stack",
    description:
      "An AI-powered content and patient engagement platform that helps chiropractors create on-brand scripts, newsletters, and reels.",
    thumbnail: "/images/projects/thumbnails/clinic-lead-stack.png",
    overview:
      "Clinic Lead Stack helps chiropractors simplify patient education and engagement. The platform provides a calendar-first dashboard, AI-powered script generation for spinal health and wellness tips, newsletter creation from videos, and branded reels remixing. With a central knowledge base, every output is personalized to match a clinic's voice, style, and brand guidelines.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Resend",
      "Instagram API",
      "YouTube API",
    ],
    liveUrl: "https://clinicleadstack.com",
    galleryCount: 15,
    galleryImageExt: "png",
  },
  {
    slug: "garcia-medical-clinic",
    title: "Garcia Medical Clinic",
    description:
      "A role-based patient management system for appointments, medical records, billing, and clinic inventory.",
    thumbnail: "/images/projects/thumbnails/garcia-medical-clinic.png",
    overview:
      "The Garcia Medical Clinic Patient Management System streamlines clinic operations by handling appointment scheduling, electronic medical records, billing, and inventory management. It supports Admin, Doctor, and Secretary roles, providing secure, role-based access. The interactive dashboard gives a complete overview of patients, appointments, financials, and inventory, helping staff operate efficiently, reduce administrative workload, and deliver better patient care.",
    stack: [
      "React",
      "Tailwind CSS",
      "Laravel",
      "PHP",
      "MySQL",
      "JWT",
      "Role-based access control",
      "RESTful APIs",
      "Chart.js",
    ],
    liveUrl: "https://garciamedicalclinic.site",
    galleryCount: 32,
  },
  {
    slug: "emmanuel-igbinovia-foundation",
    title: "Emmanuel Igbinovia Foundation",
    description:
      "A non-profit platform for scholarships, school supplies, and empowerment programs in underserved communities.",
    thumbnail: "/images/projects/thumbnails/emmanuel-igbinovia-foundation.png",
    overview:
      "The Emmanuel Igbinovia Foundation is a non-profit organization focused on improving access to education and essential support for underserved communities. The platform highlights initiatives such as scholarship programs, bursary awards, school supply distribution, women and youth empowerment, and climate education outreach. It provides a clear and engaging interface for donors, volunteers, and beneficiaries to learn about programs, participate in initiatives, and track the foundation's impact.",
    stack: ["React", "Tailwind CSS", "Brevo"],
    liveUrl: "https://igbinoviafoundation.org",
    galleryCount: 10,
  },
  {
    slug: "scoutsesh",
    title: "ScoutSesh",
    description:
      "An athlete development platform with training programs and performance tracking for athletes and coaches.",
    thumbnail: "/images/projects/thumbnails/scoutsesh.png",
    overview:
      "ScoutSesh is a comprehensive athlete development platform designed to elevate athletes' performance across all levels and sports. It provides tailored training programs, skill development modules, and performance tracking tools for athletes and coaches. The platform facilitates seamless collaboration between athletes and coaches, ensuring data-driven insights and structured progression plans.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "JWT",
      "Stripe",
      "Google Meet API",
    ],
    liveUrl: "https://scoutsesh.com",
    galleryCount: 35,
  },
  {
    slug: "x-scrape",
    title: "X-Scrape",
    description:
      "An AI-powered dashboard for scheduling, posting, and tracking content across X, Reddit, Threads, and LinkedIn.",
    thumbnail: "/images/projects/thumbnails/x-scrape.png",
    overview:
      "X-Scrape is an AI-powered social media dashboard for managing and growing your presence from one place. You connect your accounts, configure your bot's tone and posting frequency (Casual, Hype, or Spicy), and it creates, schedules, and posts content for X, Reddit, Threads, and LinkedIn. It includes smart scheduling with custom post times and media folders, plus analytics that show which posts are working across platforms.",
    stack: ["Next.js"],
    liveUrl: "https://x-scrape.vercel.app",
    galleryCount: 1,
    galleryImageExt: "png",
  },
  {
    slug: "billing-base",
    title: "Billing Base",
    description:
      "A billing platform for managing invoices, payments, and customer subscriptions in one place.",
    thumbnail: "/images/projects/thumbnails/billing-base.png",
    liveUrl: "https://billingbase.io",
    galleryCount: 1,
    galleryImageExt: "png",
  },
  {
    slug: "recliiga",
    title: "REC LiiGA",
    description:
      "A free app that brings fantasy sports drafting, ratings, and leaderboards to recreational drop-in games.",
    thumbnail: "/images/projects/thumbnails/recliiga.png",
    overview:
      "REC LiiGA is a free-to-use app designed to make recreational sports more fun and competitive by bringing the excitement of fantasy sports to drop-in games. It offers features like team drafting, player ratings, individual leaderboards, and event management, while helping organizers streamline league management and enhancing player engagement.",
    stack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Cloud storage",
    ],
    liveUrl: "https://recliiga.com",
    galleryCount: 14,
  },
  {
    slug: "learnex",
    title: "LearnEx",
    description:
      "A scalable learning management system for course creation, interactive lessons, and progress tracking.",
    thumbnail: "/images/projects/thumbnails/learnex.webp",
    overview:
      "LearnEx is a comprehensive learning management system (LMS) designed to empower educators and learners with seamless course creation, interactive learning experiences, and efficient progress tracking. It focuses on providing an engaging and user-friendly interface, and secure access to educational resources. The platform is built for scalability, making it suitable for institutions, businesses, and independent educators of any size.",
    stack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    liveUrl: "https://learnex.vercel.app",
    galleryCount: 13,
  },
  {
    slug: "shopparel",
    title: "Shopparel",
    description:
      "A fashion e-commerce platform for browsing, purchasing, and managing apparel orders with secure checkout.",
    thumbnail: "/images/projects/thumbnails/shopparel.webp",
    overview:
      "Shopparel is a dynamic e-commerce platform designed for fashion enthusiasts to browse, purchase, and manage their favorite apparel seamlessly. It focuses on providing an engaging and responsive user experience, secure transactions, and efficient order management. The platform is tailored for scalability, making it suitable for businesses of any size.",
    stack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    liveUrl: "https://shopparel.vercel.app",
    galleryCount: 7,
  },
  {
    slug: "bloggerzine",
    title: "Bloggerzine",
    description:
      "A blog platform where writers publish articles and readers explore content across many niches.",
    thumbnail: "/images/projects/thumbnails/bloggerzine.webp",
    overview:
      "Bloggerzine is a scalable blog platform tailored for writers and readers across various niches. It allows writers to publish engaging articles effortlessly and readers to explore diverse content. With features like secure user authentication and real-time content updates, Bloggerzine is a go-to hub for content creators and consumers alike.",
    stack: ["Next.js", "TypeScript", "Supabase"],
    liveUrl: "https://bloggerzine.vercel.app",
    galleryCount: 25,
  },
  {
    slug: "estate-haven",
    title: "Estate Haven",
    description:
      "A real estate platform for listing properties and searching by location, price, and other filters.",
    thumbnail: "/images/projects/thumbnails/estate-haven.png",
    overview:
      "Estate Haven is a comprehensive real estate platform aimed at simplifying property listings and searches for users. The platform enables property owners to list their properties while potential buyers and renters can search and filter options based on location, price, and other criteria. Its user-friendly design ensures seamless navigation and accessibility across devices.",
    stack: ["Next.js", "TypeScript", "Supabase", "JWT"],
    liveUrl: "https://estatehaven.vercel.app",
    galleryCount: 16,
  },
  {
    slug: "pikxr",
    title: "Pikxr",
    description:
      "A photo-sharing platform with dynamic galleries and social features for photographers and enthusiasts.",
    thumbnail: "/images/projects/thumbnails/pikxr.webp",
    overview:
      "Pikxr is an innovative photo-sharing platform designed for photographers and enthusiasts to share, explore, and appreciate high-quality images. It includes features like dynamic image galleries, social interactions, and a clean, responsive interface. Pikxr provides a creative space where users can showcase their work and connect with a like-minded community.",
    stack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    liveUrl: "https://pikxr.onrender.com",
    galleryCount: 6,
  },
];

export const contactLinks = [
  {
    label: "Email",
    detail: "greatochuko123@gmail.com",
    href: "mailto:greatochuko123@gmail.com",
  },
  {
    label: "LinkedIn",
    detail: "in/greatochuko123",
    href: "https://linkedin.com/in/greatochuko123",
  },
  {
    label: "WhatsApp",
    detail: "+234 704 807 8103",
    href: "https://wa.me/+2347048078103",
  },
  {
    label: "Github",
    detail: "@greatochuko",
    href: "https://github.com/greatochuko",
  },
];
