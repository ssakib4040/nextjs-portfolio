interface Portfolio {
  title: string;
  description?: string;
  image: string;
  source: string;
  tags?: string[];
  duration?: string;
}

export const portfolios: Portfolio[] = [
  {
    title: "KlearSkill - AI Recruitment Platform",
    description:
      "Full-stack AI-based recruitment platform enabling companies to screen candidates and manage their entire recruitment process. Contributed to developing candidate management features using Next.js, TypeScript, and modern APIs. Implemented automation workflows to streamline recruitment operations.",
    tags: ["Next.js", "TypeScript", "NestJS", "TailwindCSS", "Shadcn/ui"],
    image: "/projects/professional/klearskill.png",
    source: "https://klearskill.com",
    duration: "May 2025 - Present",
  },

  {
    title: "Automation Workflows - Make.com & N8N",
    description:
      "Designed and implemented automation workflows integrating Shopify, Airtable, Reddit, Twitter, and Slack APIs. Automated order management, data synchronization, notification systems, and social media monitoring. Improved operational efficiency by reducing manual tasks through intelligent workflow automation.",
    tags: [
      "Make.com",
      "N8N",
      "Shopify API",
      "Airtable",
      "Reddit API",
      "Slack API",
    ],
    image: "/projects/professional/make.png",
    source: "#",
    duration: "Aug 2025 - Dec 2025",
  },

  {
    title: "Basic Training - Learning Management System (LMS)",
    description:
      "Full-stack Learning Management System with course management, user roles, and certification features. Built responsive UI using React, Next.js, and Tailwind CSS. Integrated backend APIs to manage user progress, content delivery, and admin controls for instructors and students.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Shadcn/ui",
      "React Hook Form",
    ],
    image: "/projects/professional/basic-lms.png",
    source: "https://tccbasictraining.com",
    duration: "Jul 2025 - Aug 2025",
  },

  {
    title: "Swapshop - E-commerce Platform",
    description:
      "Full-stack e-commerce platform enabling business owners to swap and trade products. Built responsive marketplace with product listings, user profiles, and swap management. Developed comprehensive admin dashboard for managing products, users, and transactions.",
    tags: [
      "Next.js",
      "React",
      "RTK Query",
      "TypeScript",
      "TailwindCSS",
      "Redis",
    ],
    image: "/projects/professional/swapshop.png",
    source: "https://swapshopnow.com",
    duration: "Apr 2024 - Dec 2025",
  },

  {
    title: "Wiggle - Dating App",
    description:
      "Sweden-based dating application with real-time chat functionality. Users can swipe, match, and communicate with other users. Implemented responsive UI, notification system, and user profile management. Admin dashboard for user and chat moderation.",
    tags: ["Next.js", "React", "Redux", "TypeScript", "TailwindCSS"],
    image: "/projects/professional/wiggle.png",
    source: "https://thewiggleapp.com",
    duration: "Dec 2024 - Dec 2024",
  },

  {
    title: "Bulk.ly - Social Media Management",
    description:
      "Social media management platform for scheduling posts, managing multiple accounts, and tracking performance. Built with attention to UX with intuitive scheduling interface and analytics dashboard.",
    tags: ["Next.js", "React", "Redux", "TypeScript", "NextAuth", "Bootstrap"],
    image: "/projects/professional/bulkly.png",
    source: "https://bulk.ly",
    duration: "Jan 2024 - Jan 2024",
  },

  {
    title: "Success.ai - AI Tools Platform",
    description:
      "Full-stack AI-powered platform providing users with AI and automation tools for personal and professional use. Integrated with OpenAI and other AI APIs for content generation, automation, and analysis.",
    tags: [
      "React",
      "MUI",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
    ],
    image: "/projects/professional/successai.png",
    source: "https://success.ai",
    duration: "Jan 2024 - Mar 2024",
  },

  {
    title: "Jet Thruster America",
    description:
      "Official website for a premium boat thruster manufacturer. Showcases products, specifications, and ordering capabilities with responsive design.",
    tags: ["React", "TypeScript", "Redux", "Bootstrap", "CSS"],
    image: "/projects/professional/jetthruster.png",
    source: "https://jetthrusteramerica.com",
    duration: "May 2024 - May 2024",
  },

  {
    title: "ServiceBolt - Field Service Platform",
    description:
      "All-inclusive solution for HVAC, Plumbing, Electrical, lawn care, and other field service businesses. Simplifies platform transition with easy setup and training.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    image: "/projects/professional/servicebolt.png",
    source: "https://myservicebolt.com",
    duration: "Nov 2024 - Nov 2024",
  },

  {
    title: "Envoc - Software Development Company",
    description:
      "Corporate website showcasing software development, web development, and mobile app development services.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    image: "/projects/professional/envoc.png",
    source: "https://envoc.com",
    duration: "Mar 2024 - Apr 2024",
  },
];

export const skills = [
  // automation
  { name: "Make.com", image: "/projects/skills/make.svg" },
  { name: "N8N", image: "/projects/skills/n8n.svg" },

  // backend
  { name: "Nest", image: "/projects/skills/nest.svg" },
  { name: "Node.js", image: "/projects/skills/node-js.svg" },
  { name: "Express.js", image: "/projects/skills/express-js.svg" },

  // frontend
  { name: "Next", image: "/projects/skills/next.svg" },
  { name: "React", image: "/projects/skills/react.svg" },
  { name: "React Native", image: "/projects/skills/react.svg" },
  { name: "Redux", image: "/projects/skills/redux.svg" },
  { name: "RTK Query", image: "/projects/skills/redux.svg" },
  { name: "Netlify", image: "/projects/skills/netlify.svg" },
  { name: "NextAuth", image: "/projects/skills/next-auth.png" },
  { name: "Vite", image: "/projects/skills/vite.svg" },
  { name: "MUI", image: "/projects/skills/mui.svg" },
  { name: "DaisyUI", image: "/projects/skills/daisyui.svg" },
  { name: "TailwindCSS", image: "/projects/skills/tailwindcss.svg" },
  { name: "Typescript", image: "/projects/skills/ts.svg" },
  { name: "Vue", image: "/projects/skills/vue.svg" },
  { name: "Lottie", image: "/projects/skills/lottie.svg" },
  { name: "Sass", image: "/projects/skills/sass.svg" },
  { name: "Echo", image: "/projects/skills/laravel.svg" },
  { name: "Shadcn", image: "/projects/skills/shadcn.svg" },
  { name: "HTML", image: "/projects/skills/html.svg" },
  { name: "CSS", image: "/projects/skills/css.svg" },
  { name: "Javascript", image: "/projects/skills/js.svg" },
  { name: "Bootstrap", image: "/projects/skills/bootstrap.svg" },
  { name: "Ant Design", image: "/projects/skills/ant-design.svg" },
  { name: "React Hook Form", image: "/projects/skills/react-hook-form.svg" },
  { name: "Enzyme.js", image: "/projects/skills/enzyme-js.svg" },
  { name: "JQuery", image: "/projects/skills/jquery.svg" },
  { name: "React Router", image: "/projects/skills/rrd.svg" },

  // social media
  { name: "X", image: "/projects/skills/x.svg" },
  { name: "Twitter API", image: "/projects/skills/x.svg" },
  { name: "Reddit", image: "/projects/skills/reddit.svg" },
  { name: "Reddit API", image: "/projects/skills/reddit.svg" },

  // database
  { name: "Airtable", image: "/projects/skills/airtable.svg" },

  // cms
  { name: "Wordpress", image: "/projects/skills/wordpress.svg" },
  { name: "Wordpress API", image: "/projects/skills/wordpress.svg" },
  { name: "Shopify", image: "/projects/skills/shopify.svg" },
  { name: "Shopify API", image: "/projects/skills/shopify.svg" },
];
