export const profile = {
  name: "Hazem Salem",
  roles: ["Software", "Game", "Fullstack", "Backend", "Frontend", "App", "Web"],
  tagline:
    "Texas A&M Computer Engineering grad, with minors in Math and Game Design & Development. I build real-time systems, multiplayer games, and interfaces people actually enjoy using.",
  location: "Katy / College Station, TX",
  email: "hazemhhasalem@gmail.com",
  phone: "+1 (832) 812-4643",
  github: "https://github.com/hazcazdaz",
  linkedin: "https://www.linkedin.com/in/hhasalem",
  availability: "Open to full-time software and game dev roles",
};

export const about = {
  paragraphs: [
    "I'm Hazem, from Katy, Texas. I graduated from Texas A&M University in May 2026 with a B.S. in Computer Engineering and minors in Mathematics and Game Design & Development, finishing with a 3.803 GPA.",
    "I'm interested in software development, game design, product management, and AI. I like creating and leading user-focused projects, whether that's a course-tracking app serving thousands of students or a chaotic multiplayer party game. Off the keyboard you'll usually find me on a bouldering wall, working a project of a different kind. I also draw digital art, play guitar, and enjoy meeting new people.",
  ],
  photo: "/images/profile-casual.png",
};

export type Project = {
  num: string;
  title: string;
  period: string;
  role: string;
  stack: string[];
  description: string;
  bullets: string[];
  image?: string;
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    num: "01",
    title: "Mother Clucker!",
    period: "Jan 2026 – Present",
    role: "UI Engineer · 6-person team",
    stack: ["Unreal Engine 5", "C++", "Blueprints", "UMG", "Figma"],
    description:
      "A 4-player party game built in Unreal Engine 5: mother hens battle to keep their eggs safe across five minigames and three maps, local and online.",
    image: "/images/project-motherclucker.jpg",
    bullets: [
      "Architected a modular UI framework: interactive building popups and controller-navigable menus with focus states",
      "Designed and produced all UI assets in Figma: custom SVG textures, button states, animated components",
      "Collaborating across engineering and 3D art, managing parallel workstreams in gameplay, networking, and UI",
    ],
    links: [{ label: "Play on itch.io", url: "https://duskastraeus.itch.io/mother-clucker" }],
  },
  {
    num: "02",
    title: "A.M.P.S.",
    period: "Jan 2026 – May 2026",
    role: "Software Design Lead · 6-person team",
    stack: ["React", "FastAPI", "Python", "PostgreSQL", "Supabase", "ESP32", "Machine Learning"],
    description:
      "Adaptive Management Power System: a full-stack IoT smart power strip that fingerprints connected appliances with machine learning and cuts standby 'vampire' power automatically.",
    image: "/images/project-amps.png",
    bullets: [
      "Engineered a full-stack IoT system with ESP32 sensing hardware, FastAPI, and PostgreSQL for per-outlet monitoring and control",
      "Built an ML pipeline classifying appliances by their electrical behavior, targeting 85%+ accuracy for automatic standby cutoff",
      "Designed and built the React dashboard: sub-second telemetry, per-outlet relay controls, scheduling, and energy analytics",
    ],
    links: [{ label: "GitHub", url: "https://github.com/Nkasten11/AMPS" }],
  },
  {
    num: "03",
    title: "AggieSeek",
    period: "Apr 2025 – Present",
    role: "Backend & Notifications · 5-person team",
    stack: ["AWS Lambda", "AWS RDS", "Next.js", "React Native", "Twilio", "Discord API"],
    description:
      "Cross-platform app that streamlines course registration tracking for Texas A&M students.",
    bullets: [
      "Engineered a Python/TypeScript backend monitoring course status and triggering timely alerts",
      "Pulled enrollment data from the TAMU Howdy API via AWS Lambda into an RDS database",
      "Real-time notifications through Twilio and Discord reaching 8,000+ users across multiple semesters",
    ],
    image: "/images/project-aggieseek.png",
    links: [{ label: "aggieseek.net", url: "https://aggieseek.net/" }],
  },
  {
    num: "04",
    title: "Bobashop POS",
    period: "Feb 2025 – May 2025",
    role: "Fullstack",
    stack: ["React", "Node.js", "PostgreSQL", "Java", "Jira", "Figma"],
    description:
      "Full-stack point-of-sale web app with real-time order tracking, built Agile.",
    bullets: [
      "Engineered the stack end-to-end with React, Node.js, and PostgreSQL",
      "Integrated Google Translate and Weather APIs for adaptive, accessible UX",
      "Coordinated sprints and backlog in Jira to ship core features on time",
    ],
    image: "/images/project-bobashop.png",
    links: [{ label: "GitHub", url: "https://github.com/hazcazdaz/BobashopPOSSystem" }],
  },
  {
    num: "05",
    title: "Roblox Multiplayer Games",
    period: "Jul 2021 – Dec 2022",
    role: "Lead Programmer",
    stack: ["Lua", "Roblox Studio", "Jira"],
    description:
      "Led programming on real-time multiplayer games amassing 450,000+ visits and 5,000+ active users.",
    bullets: [
      "Shipped admin, spectator, and movement systems that raised engagement by 60%",
      "Designed robust real-time mechanics and the team processes to keep shipping",
    ],
    image: "/images/project-kazuhiko.png",
    links: [
      { label: "Kazuhiko Academy", url: "https://www.roblox.com/games/14168494606/MDM-Kazuhiko-Academy" },
      { label: "60 Seconds", url: "https://www.roblox.com/games/14113363085/MB-60-Seconds" },
      { label: "Village of Rire", url: "https://www.roblox.com/games/14062983214/MB-Village-of-Rire" },
    ],
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Backend Engineering Intern",
    org: "Aggie Nexus",
    period: "Apr 2025 – Aug 2025",
    location: "Remote",
    bullets: [
      "Reduced API response time by 50% with Next.js and cut type-related errors by 30%",
      "Optimized PostgreSQL queries by 40%, enabling real-time updates for 10,000+ records at 99.99% uptime and 150 ms latency",
      "Streamlined the deployment pipeline to daily releases with zero rollbacks over 6 months",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Karate Fox Studios",
    period: "Oct 2024 – Jan 2025",
    location: "College Station, TX",
    bullets: [
      "Refactored and debugged navigation in JavaScript/Node.js, reducing errors by 40%",
      "Resolved critical control-binding bugs, cutting user-reported UI issues by 15%",
      "Migrated legacy navigation code to modular XState architecture for testability",
    ],
  },
  {
    role: "Lead Undergraduate Teaching Assistant",
    org: "Texas A&M, CS & Computer Engineering",
    period: "Aug 2024 – Dec 2024",
    location: "College Station, TX",
    bullets: [
      "Directed a team of TAs delivering course material to 150+ students",
      "Weekly office hours supporting 40+ students, lifting assignment scores by ~12%",
      "Designed 6 programming assignments and 10 lab exercises for Data Structures & Algorithms",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    org: "Texas A&M, AggieNova",
    period: "Nov 2023 – Jan 2025",
    location: "College Station, TX",
    bullets: [
      "Screened 10,000 objects from Swift satellite data, identifying 104 supernovae for NASA's Swift Observatory",
      "Built Python visualizations analyzing spectral characteristics across 4 supernovae for NASA presentations",
    ],
  },
];

export const education = {
  school: "Texas A&M University",
  degree: "B.S. Computer Engineering",
  minors: "Minors in Mathematics & Game Design and Development",
  gpa: "3.803",
  grad: "May 2026",
  extra: "Includes graduate-level CS coursework",
  coursework: [
    "Data Structures & Algorithms",
    "Analysis of Algorithms",
    "Game Development",
    "Computer Graphics",
    "Human-Computer Interaction",
    "Machine Learning",
    "Programming Design & Concepts",
  ],
};

export type Skill = {
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "Databases" | "Cloud & DevOps" | "Game Dev" | "Tools";
  icon?: string;
};

const d = (slug: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${variant}.svg`;

export const skills: (Skill & { iconUrl?: string })[] = [
  { name: "Python", category: "Languages", iconUrl: d("python") },
  { name: "TypeScript", category: "Languages", iconUrl: d("typescript") },
  { name: "JavaScript", category: "Languages", iconUrl: d("javascript") },
  { name: "C / C++", category: "Languages", iconUrl: d("cplusplus") },
  { name: "Java", category: "Languages", iconUrl: d("java") },
  { name: "SQL", category: "Languages", iconUrl: d("azuresqldatabase") },
  { name: "Go", category: "Languages", iconUrl: d("go") },
  { name: "Lua / Luau", category: "Languages", iconUrl: d("lua") },
  { name: "Verilog", category: "Languages" },
  { name: "Assembly", category: "Languages" },
  { name: "HTML / CSS", category: "Languages", iconUrl: d("html5") },

  { name: "React", category: "Frontend", iconUrl: d("react") },
  { name: "Next.js", category: "Frontend", iconUrl: d("nextjs") },
  { name: "React Native", category: "Frontend", iconUrl: d("react") },
  { name: "Tailwind CSS", category: "Frontend", iconUrl: d("tailwindcss") },

  { name: "Node.js", category: "Backend", iconUrl: d("nodejs") },
  { name: "Spring Boot", category: "Backend", iconUrl: d("spring") },

  { name: "PostgreSQL", category: "Databases", iconUrl: d("postgresql") },
  { name: "Supabase", category: "Databases", iconUrl: d("supabase") },

  { name: "AWS", category: "Cloud & DevOps", iconUrl: d("amazonwebservices", "original-wordmark") },
  { name: "Google Cloud", category: "Cloud & DevOps", iconUrl: d("googlecloud") },
  { name: "Docker", category: "Cloud & DevOps", iconUrl: d("docker") },
  { name: "Git / GitHub", category: "Cloud & DevOps", iconUrl: d("git") },

  { name: "Unreal Engine 5", category: "Game Dev", iconUrl: d("unrealengine") },
  { name: "Blender", category: "Game Dev", iconUrl: d("blender") },
  { name: "Roblox Studio", category: "Game Dev" },

  { name: "Figma", category: "Tools", iconUrl: d("figma") },
  { name: "Jira", category: "Tools", iconUrl: d("jira") },
];

export const skillCategories = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Databases",
  "Cloud & DevOps",
  "Game Dev",
  "Tools",
] as const;
