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
    role: "Frontend Developer",
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
    category: "Front End",
    skills: [
      "HTML 5",
      "CSS 3 (Grid, Flexbox, Media Queries, SASS/SCSS)",
      "JavaScript (ES6+)",
      "TypeScript",
      "React JS",
      "Next.js",
      "Vue.js",
    ],
  },

  {
    category: "CSS Frameworks & Tools",
    skills: ["Tailwind CSS", "Bootstrap", "Sass/SCSS", "CSS-in-JS"],
  },

  {
    category: "React UI Libraries",
    skills: [
      "DaisyUI",
      "Material-UI",
      "Chakra UI",
      "React Bootstrap",
      "Shadcn/ui",
    ],
  },

  {
    category: "State Management",
    skills: [
      "Redux",
      "Redux Toolkit",
      "MobX",
      "React Context API",
      "React Query",
      "Zustand",
      "Jotai",
    ],
  },

  {
    category: "Testing & Quality",
    skills: [
      "Jest",
      "Vitest",
      "React Testing Library",
      "Cypress",
      "Playwright",
      "Mocha",
      "ESLint",
      "Prettier",
    ],
  },

  {
    category: "Backend Frameworks & Runtime",
    skills: [
      "Node.js",
      "Express.js",
      "Fastify",
      "NestJS",
      "GraphQL",
      "Apollo Server",
      "tRPC",
    ],
  },

  {
    category: "Database & ORMs",
    skills: [
      "MongoDB & Mongoose",
      "MySQL",
      "PostgreSQL",
      "Firebase/Firestore",
      "Redis",
      "Elasticsearch",
    ],
  },

  {
    category: "Version Control",
    skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Git Flow"],
  },

  {
    category: "Package Managers & Build Tools",
    skills: ["NPM", "Yarn", "pnpm", "Webpack", "Vite", "Turbopack", "Parcel"],
  },

  {
    category: "Bundlers & Transpilers",
    skills: ["Webpack", "Vite", "Turbopack", "Parcel", "SWC"],
  },

  {
    category: "APIs & Protocols",
    skills: ["RESTful APIs", "GraphQL", "WebSockets", "JWT", "OAuth", "tRPC"],
  },

  {
    category: "Cloud & Deployment",
    skills: [
      "Azure (App Service, Functions, CosmosDB)",
      "Vercel",
      "Netlify",
      "Docker",
      "Docker Compose",
    ],
  },

  {
    category: "CI/CD & DevOps",
    skills: ["GitHub Actions", "GitLab CI", "Husky", "Pre-commit Hooks"],
  },

  {
    category: "Real-time & WebSockets",
    skills: ["Socket.io", "Laravel Echo", "WebSockets"],
  },

  {
    category: "Developer Tools & Technologies",
    skills: [
      "Visual Studio Code",
      "Chrome DevTools",
      "Postman",
      "Insomnia",
      "Swagger/OpenAPI",
      "JSON",
      "XML",
      "Markdown",
      "Storybook",
    ],
  },

  {
    category: "Web Performance & Optimization",
    skills: [
      "Server-Side Rendering (SSR)",
      "Static Site Generation (SSG)",
      "Code Splitting",
      "Image Optimization",
      "Performance Monitoring",
      "SEO Optimization",
    ],
  },

  {
    category: "Progressive Web Apps & Advanced",
    skills: [
      "Progressive Web Apps (PWA)",
      "Service Workers",
      "Web Performance",
      "Responsive Design",
      "Mobile-First Development",
      "Accessibility (A11y)",
    ],
  },

  {
    category: "Methodologies & Practices",
    skills: [
      "Agile Development",
      "Scrum",
      "Git Flow",
      "TDD (Test-Driven Development)",
      "Clean Code",
      "SOLID Principles",
      "Design Patterns",
    ],
  },

  {
    category: "AI & Machine Learning",
    skills: [
      "OpenAI API",
      "Claude API",
      "Deepseek API",
      "Ollama",
      "Vector Databases",
    ],
  },
];
