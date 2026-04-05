interface ResumeItem {
  category: string;
  skills: string[];
}

export interface WorkExperience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Education {
  degree: string;
  school: string;
  gpa: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export const workExperience: WorkExperience[] = [
  {
    role: "Software Engineer",
    company: "Mediusware LTD",
    duration: "May 2025 - Present",
    description: [
      "Built and integrated automation workflows (Make.com, N8N) and third-party APIs to streamline business processes",
      "Developed full-stack applications including AI platforms, LMS, and automation tools using Next.js, TypeScript, and modern APIs",
      "Delivered production-ready features, improved performance, and handled debugging across multiple live projects",
    ],
  },
  {
    role: "Software Developer",
    company: "Mediusware LTD",
    duration: "Jul 2023 - Apr 2025",
    description: [
      "Created responsive and reusable UI components using React, Next.js, and Tailwind CSS across multiple client and internal projects",
      "Integrated REST APIs and managed client-side state using tools like Redux / RTK Query",
      "Collaborated with designers and backend developers to implement user-focused features and improve UI/UX",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Higher Secondary and College",
    school: "Janatabagh High School and College",
    gpa: "4.50",
  },
  {
    degree: "Secondary School Certificate",
    school: "Royal Academy",
    gpa: "5.0",
  },
];

export const languages: Language[] = [
  { name: "Bengali", proficiency: "Native speaker" },
  { name: "English", proficiency: "Fluent (spoken & written)" },
  { name: "Hindi", proficiency: "Conversational" },
];

export const resumeItems: ResumeItem[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Shadcn/ui",
      "DaisyUI",
      "Responsive Design",
    ],
  },

  {
    category: "Backend & Runtime",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "RESTful APIs",
      "GraphQL",
      "API Integration",
    ],
  },

  {
    category: "State Management & Data Fetching",
    skills: [
      "Redux",
      "Redux Toolkit",
      "React Query",
      "RTK Query",
      "React Context API",
    ],
  },

  {
    category: "Databases & ORMs",
    skills: [
      "MongoDB & Mongoose",
      "PostgreSQL",
      "MySQL",
      "Firebase/Firestore",
      "Redis",
    ],
  },

  {
    category: "Automation & AI Integration",
    skills: [
      "Make.com",
      "N8N",
      "OpenAI API",
      "Claude API",
      "Third-party API Integration",
      "Automation Workflows",
    ],
  },

  {
    category: "Build Tools & Package Managers",
    skills: ["Vite", "Webpack", "Next.js Build", "NPM", "Yarn", "pnpm"],
  },

  {
    category: "Cloud & Deployment",
    skills: [
      "Vercel",
      "Netlify",
      "Azure (App Service, Functions, CosmosDB)",
      "Docker",
      "Docker Compose",
    ],
  },

  {
    category: "Version Control & Collaboration",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Git Flow",
      "Pull Requests",
      "Code Review",
    ],
  },

  {
    category: "Testing",
    skills: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "Playwright",
      "Unit Testing",
      "E2E Testing",
    ],
  },

  {
    category: "Development Practices",
    skills: [
      "Clean Code",
      "SOLID Principles",
      "Design Patterns",
      "Performance Optimization",
      "SEO Optimization",
      "Accessibility (A11y)",
    ],
  },

  {
    category: "Developer Tools",
    skills: [
      "VS Code",
      "Chrome DevTools",
      "Postman",
      "ESLint",
      "Prettier",
      "Swagger/OpenAPI",
    ],
  },
];
