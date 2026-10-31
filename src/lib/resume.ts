export type ExperienceItem = {
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  period: string;
  highlights: string[];
};

export type EducationItem = {
  school?: string;
  degree: string;
  period: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const resume = {
  // Put your PDF at public/great_ogheneochuko_resume.pdf
  pdfUrl: "/docs/great_ogheneochuko_resume.pdf",

  headline: "Software Engineer | Cloud Security Engineer",

  summary:
    "Software engineer transitioning into cloud security, with 3+ years of experience building production TypeScript backends, automation pipelines, and multi-chain payment infrastructure. Hands-on experience with compliance screening, resilient webhook and retry design, and rate-limited third-party API integrations. Working proficiency in Go and Python.",

  experience: [
    {
      role: "Chief Technology Officer",
      company: "Clinic Lead Stack",
      companyUrl: "https://clinicleadstack.com",
      location: "Taipei, Taiwan (Remote)",
      period: "Jan 2023 – Present",
      highlights: [
        "Architected a TypeScript SaaS platform that automates social media lead funnels for healthcare practices, supporting 8 active clinics.",
        "Built an Instagram post and reel scheduler and an automated DM handler that converts engagement into 20+ booked consultations per week.",
        "Integrated an AI content generation engine and a real-time appointment booking system, publishing 200+ marketing assets monthly.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Virtuous Tech Solutions Ltd",
      location: "Nigeria (Remote)",
      period: "Oct 2024 – Present",
      highlights: [
        "Built a headless CMS for Comobi.co.uk with TypeScript and Sanity.io, establishing a structured content pipeline and modular design system.",
        "Developed the responsive web presence for the Emmanuel Igbinovia Foundation to support global youth empowerment outreach.",
      ],
    },
    {
      role: "Founding Full Stack Engineer",
      company: "BillingBase",
      location: "Canada (Remote)",
      period: "Nov 2025 – Jan 2026",
      highlights: [
        "Designed a non-custodial billing protocol that automates stablecoin payments and multi-chain subscriptions across Base, Polygon, and Arbitrum.",
        "Built resilient infrastructure with 5-tier retry logic and automated webhooks.",
        "Implemented RiskService, a real-time wallet sanctions screening system for compliance.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Blue Marvel Capital",
      location: "UK (Remote)",
      period: "Mar 2025 – Jul 2025",
      highlights: [
        "Built X-Scrape, a TypeScript automation platform for scheduled, multi-platform publishing across X, Threads, and Instagram.",
        "Developed an AI orchestration engine and scheduling subsystem that adapts content to brand voices and manages concurrent publishing pipelines within API rate limits.",
      ],
    },
  ] as ExperienceItem[],

  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Go", "Python", "SQL"],
    },
    {
      category: "Backend and APIs",
      items: [
        "Node.js",
        "Express",
        "REST API design",
        "Webhooks",
        "Queue and retry architecture",
      ],
    },
    {
      category: "Security and compliance",
      items: [
        "API security",
        "Sanctions screening",
        "Non-custodial system design",
        "Secure messaging workflows",
      ],
    },
    {
      category: "Data",
      items: ["MongoDB", "Supabase", "SQL"],
    },
    {
      category: "Frontend and mobile",
      items: ["React", "Next.js", "React Native", "Tailwind CSS"],
    },
  ] as SkillGroup[],

  education: [
    {
      // Add the school name here once you want it shown: school: "University name",
      school: "Miva Open University",
      degree: "Bachelor of Science in Cybersecurity",
      period: "Sept 2026 – July 2029",
    },
  ] as EducationItem[],
};
