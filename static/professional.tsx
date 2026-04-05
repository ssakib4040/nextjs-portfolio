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
    title: "KlearSkill - AI-Powered Recruitment Platform",
    description:
      "Full-stack AI recruitment platform enabling companies to screen candidates, manage hiring workflows, and optimize talent acquisition. Built with modern tech stack managing high-volume applicant processing and real-time collaboration features.",
    tags: ["NestJS", "Next.js", "TypeScript", "TailwindCSS", "Shadcn/ui"],
    image: "/projects/professional/klearskill.png",
    source: "https://app.klearskill.com/",
    duration: "Jan 2026 - Present",
  },

  {
    title: "E-Commerce Automation Workflow - Make.com",
    description:
      "Enterprise automation workflow reducing manual order and inventory management by 90%. Integrated Airtable, Shopify API, and WordPress API for seamless data synchronization across e-commerce platforms. Improved operational efficiency and reduced data entry errors.",
    tags: ["Make.com", "Airtable", "Shopify API", "WordPress API"],
    image: "/projects/professional/make.png",
    source: "#",
    duration: "Oct 2025 - Dec 2025",
  },

  {
    title: "Social Media Content Aggregator - N8N",
    description:
      "Automated content aggregation workflow fetching and filtering Reddit posts by keyword, delivering curated insights to Slack in real-time. Streamlined content discovery and team collaboration with zero manual intervention.",
    tags: ["N8N", "Reddit API", "Twitter API", "Slack API"],
    image: "/projects/professional/n8n.png",
    source: "#",
    duration: "Aug 2025 - Sept 2025",
  },

  {
    title: "Learning Management System (LMS) - Full-Stack",
    description:
      "Complete Learning Management System enabling user enrollment, course delivery, certification tracking, and admin course management. Features real-time progress tracking, certificate generation, and user role-based access control with responsive design across all devices.",
    tags: [
      "Next.js",
      "React.js",
      "Shadcn/ui",
      "TailwindCSS",
      "TypeScript",
      "React Hook Form",
    ],
    image: "/projects/professional/basic-lms.png",
    source: "#",
    duration: "Jul 2025 - Aug 2025",
  },

  {
    title: "Bathroom Renovation Booking Platform",
    description:
      "Service booking platform enabling customers to schedule appointments, manage reservations, and request quotes. Features admin dashboard for managing users, tracking bookings, and quote management. Optimized for mobile conversion with instant booking confirmation.",
    tags: ["HTML", "CSS", "TailwindCSS", "JavaScript", "Vite"],
    image: "/projects/professional/badkamer.png",
    source: "#",
    duration: "Jul 2025 - Jul 2025",
  },

  {
    title: "Teez - AI Assistant & Automation Suite",
    description:
      "Comprehensive SaaS platform offering AI-powered tools and automation features for individuals and enterprises. Provides intelligent assistant capabilities, workflow automation, and productivity enhancement tools with seamless integration ecosystem.",
    tags: [
      "Next.js",
      "React.js",
      "Shadcn/ui",
      "TailwindCSS",
      "TypeScript",
      "React Hook Form",
    ],
    image: "/projects/professional/teez.png",
    source: "#",
    duration: "Mar 2025 - Jul 2025",
  },

  {
    title: "Keystone - Social Community Platform",
    description:
      "Community-driven social platform fostering meaningful connections and personal growth. Features user profiles, thought sharing, discussion threads, and community engagement metrics. Built with modern authentication and real-time synchronization for seamless user experience.",
    tags: [
      "Next.js",
      "React.js",
      "Shadcn/ui",
      "TailwindCSS",
      "TypeScript",
      "React Hook Form",
    ],
    image: "/projects/professional/keystone.png",
    source: "#",
    duration: "Feb 2025 - Mar 2025",
  },

  {
    title: "Clerkal AI - Product Exchange Platform",
    description:
      "Modern e-commerce platform enabling peer-to-peer product swapping and trading. Implemented comprehensive inventory management, order tracking, and user administration. Features matching algorithms for smart product recommendations across the marketplace.",
    tags: [
      "Next.js",
      "React.js",
      "Shadcn/ui",
      "TailwindCSS",
      "TypeScript",
      "React Hook Form",
    ],
    image: "/projects/professional/clerkal.png",
    source: "#",
    duration: "Jan 2025 - Feb 2025",
  },

  {
    title: "Swapshop - Multi-Platform E-Commerce Marketplace",
    description:
      "Full-stack marketplace for product exchange and trading with web and mobile presence. Implemented encrypted authentication, real-time order management, and advanced inventory systems. Scaled to handle thousands of concurrent users with optimized query performance and caching strategies.",
    tags: [
      "Next.js",
      "NextAuth",
      "React.js",
      "React Native",
      "RTK Query",
      "DaisyUI",
      "TailwindCSS",
      "Express.js",
      "React Hook Form",
    ],
    image: "/projects/professional/swapshop.png",
    source: "https://swapshopnow.com/",
    duration: "Apr 2024 - Dec 2025",
  },

  {
    title: "Wiggle - Social Dating Application",
    description:
      "Location-based dating application with intuitive swipe interface and real-time messaging. Implemented performant Redux state management for complex user interactions, instant chat synchronization, and comprehensive user moderation admin panel. Deployed on Netlify with serverless architecture.",
    tags: ["Next.js", "React.js", "Redux", "Netlify"],
    image: "/projects/professional/wiggle.png",
    source: "https://thewiggleapp.com/",
    duration: "Dec 2024 - Dec 2024",
  },

  {
    title: "ServiceBolt - Field Service Management Software",
    description:
      "All-in-one field service platform for HVAC, plumbing, electrical, and lawn care businesses. Streamlined onboarding and training with transparent pricing model. Features job scheduling, customer management, invoicing, and real-time dispatch with mobile-friendly interface for field technicians.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    image: "/projects/professional/servicebolt.png",
    source: "https://myservicebolt.com/",
    duration: "Nov 2024 - Nov 2024",
  },

  {
    title: "Law Firm Portfolio & Practice Website",
    description:
      "Professional portfolio and practice website for California-based legal firm. Showcases attorney expertise, practice areas, and case results. Features client testimonials, case study presentations, and integrated consultation booking system optimized for legal services marketing.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    image: "/projects/professional/law.png",
    source: "https://briandunnlaw.com/",
    duration: "May 2024 - May 2024",
  },

  {
    title: "Jet Thruster - E-Commerce Product Platform",
    description:
      "Official e-commerce platform for marine thruster products with advanced product catalog, specifications database, and purchasing system. Implemented robust inventory management, dynamic pricing, and customer review system. Optimized for conversion with streamlined checkout experience.",
    tags: [
      "React.js",
      "Redux",
      "React Router",
      "CSS",
      "Bootstrap",
      "TypeScript",
    ],
    image: "/projects/professional/jetthruster.png",
    source: "https://jetthrusteramerica.com/",
    duration: "May 2024 - May 2024",
  },

  // {
  //   title: "DWP",
  //   description:
  //     "The Official Website of Jet Thruster America. They provide the best thruster for boats.",
  //   tags: ["React", "Redux", "React Router", "CSS", "Bootstrap", "Typescript"],
  //   image: "/projects/professional/jetthruster.png",
  //   source: "https://jetthrusteramerica.com/",
  //   duration: "May 2024 - May 2024",
  // },

  {
    title: "Envoc - Software Development Agency Website",
    description:
      "Corporate website for full-service software development agency specializing in custom development, web solutions, and mobile applications. Showcases portfolio, service offerings, testimonials, and expertise. Features case studies highlighting successful project delivery and client success stories.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    image: "/projects/professional/envoc.png",
    source: "https://envoc.com/",
    duration: "Mar 2024 - Apr 2024",
  },

  {
    title: "AI Automation Tools Platform - Soflyy",
    description:
      "Comprehensive SaaS platform providing AI-powered automation tools and intelligent features for personal productivity and business operations. Integrated multiple AI services with user-friendly interface for non-technical users. Achieved high adoption rate through intuitive onboarding and responsive design.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/projects/professional/soflyy.png",
    source: "https://success.ai/",
    duration: "Mar 2024 - Apr 2024",
  },

  {
    title: "Korra.ai - Multilingual AI Search Engine",
    description:
      "AI-powered search engine with advanced internationalization (i18n) supporting multiple languages and regional contexts. Implemented intelligent ranking algorithms, semantic search capabilities, and performance optimization. Achieved sub-second query response times using optimized React and Redux architecture.",
    tags: ["React.js", "Preact", "Redux", "Sass"],
    image: "/projects/professional/korraai.png",
    source: "https://success.ai/",
    duration: "Jan 2024 - Mar 2024",
  },

  {
    title: "Success.ai - Enterprise AI Platform",
    description:
      "Enterprise-grade AI and automation platform delivering productivity tools for businesses. Built full-stack MERN architecture handling complex workflows and large-scale data processing. Features real-time synchronization, advanced permission management, and comprehensive audit logging for enterprise compliance.",
    tags: ["React.js", "MUI", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    image: "/projects/professional/successai.png",
    source: "https://success.ai/",
    duration: "Jan 2024 - Mar 2024",
  },

  {
    title: "Bulk.ly - Social Media Management Suite",
    description:
      "Comprehensive social media management platform enabling post scheduling, multi-account management, and performance analytics. Features content calendar, team collaboration tools, and real-time engagement metrics. Achieved 10,000+ active users with 99.9% uptime and Netlify serverless deployment.",
    tags: [
      "Next.js",
      "React.js",
      "Redux",
      "Netlify",
      "NextAuth",
      "Lottie",
      "Bootstrap",
    ],
    image: "/projects/professional/bulkly.png",
    source: "https://bulk.ly/",
    duration: "Jan 2024 - Jan 2024",
  },

  {
    title: "Smugglers Alcohol - Admin Dashboard & Inventory",
    description:
      "Enterprise admin dashboard for e-commerce alcohol retailer with comprehensive product, order, and user management. Implemented complex permissions system, inventory tracking, and sales analytics. Features real-time order notifications, bulk operations, and detailed reporting for business intelligence.",
    tags: [
      "Next.js",
      "React.js",
      "Redux",
      "Ant Design",
      "TypeScript",
      "TailwindCSS",
      "RTK Query",
      "NextAuth",
      "Sass",
      "React Hook Form",
      "Lottie",
    ],
    image: "/projects/professional/smugglers.png",
    source: "#",
    duration: "Jan 2024 - Jan 2024",
  },

  {
    title: "Mediusware Jobs Portal - Recruitment Platform",
    description:
      "Dedicated job board and recruitment portal for technology company connecting companies with talent. Features advanced job search, application tracking, company profiles, and candidate management. Implemented smooth user experience with modern animations and responsive design for all devices.",
    tags: ["Vue.js", "Redux", "Lottie", "Sass"],
    image: "/projects/professional/mw-jobs.png",
    source: "https://job.mediusware.com",
    duration: "July 2023 - Oct 2023",
  },

  {
    title: "Mediusware - Software Development Company Website",
    description:
      "Corporate website for full-service software development company showcasing services, portfolio, and team expertise. Highlights custom development capabilities, project case studies, and client success testimonials. Optimized for lead generation with clear CTAs and SEO-friendly content structure.",
    tags: ["Next.js", "React.js", "Sass", "DaisyUI", "TypeScript", "Lottie"],
    image: "/projects/professional/mediusware.png",
    source: "https://mediusware.com/",
    duration: "July 2023 - Oct 2023",
  },

  {
    title: "TCDB - Web Scraping Data Management Dashboard",
    description:
      "Specialized admin dashboard for managing web-scraped data at scale. Features data validation, duplicate detection, user access management, and batch operations. Implemented efficient data processing pipeline handling thousands of records with pagination and advanced filtering for data quality control.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/projects/professional/tcdb.png",
    source: "#",
    duration: "Dec 2023 - Dec 2023",
  },

  {
    title: "Growtoro - Email Marketing Automation Platform",
    description:
      "Enterprise email marketing platform enabling campaign creation, subscriber management, and performance tracking. Features drag-and-drop email builder, template library, segmentation tools, and detailed analytics dashboard. Achieved 99% email delivery rate with advanced spam filtering and compliance management.",
    tags: ["React.js", "Redux", "Vite", "MUI"],
    image: "/projects/professional/growtoro.png",
    source: "https://growtoro.com/",
    duration: "July 2023 - Oct 2023",
  },
];

export const skills = [
  // automation
  { name: "Make.com", image: "/projects/skills/make.svg" },
  { name: "N8N", image: "/projects/skills/n8n.svg" },

  // backend
  { name: "NestJS", image: "/projects/skills/nest.svg" },
  { name: "Node.js", image: "/projects/skills/node-js.svg" },
  { name: "Express.js", image: "/projects/skills/express-js.svg" },

  // frontend
  { name: "Next.js", image: "/projects/skills/next.svg" },
  { name: "React.js", image: "/projects/skills/react.svg" },
  { name: "React Native", image: "/projects/skills/react.svg" },
  { name: "Redux", image: "/projects/skills/redux.svg" },
  { name: "RTK Query", image: "/projects/skills/redux.svg" },
  { name: "Netlify", image: "/projects/skills/netlify.svg" },
  { name: "NextAuth", image: "/projects/skills/next-auth.png" },
  { name: "Vite", image: "/projects/skills/vite.svg" },
  { name: "MUI", image: "/projects/skills/mui.svg" },
  { name: "DaisyUI", image: "/projects/skills/daisyui.svg" },
  { name: "TailwindCSS", image: "/projects/skills/tailwindcss.svg" },
  { name: "TypeScript", image: "/projects/skills/ts.svg" },
  { name: "Vue.js", image: "/projects/skills/vue.svg" },
  { name: "Lottie", image: "/projects/skills/lottie.svg" },
  { name: "Sass", image: "/projects/skills/sass.svg" },
  { name: "Shadcn/ui", image: "/projects/skills/shadcn.svg" },
  { name: "HTML", image: "/projects/skills/html.svg" },
  { name: "CSS", image: "/projects/skills/css.svg" },
  { name: "JavaScript", image: "/projects/skills/js.svg" },
  { name: "Bootstrap", image: "/projects/skills/bootstrap.svg" },
  { name: "Ant Design", image: "/projects/skills/ant-design.svg" },
  { name: "React Hook Form", image: "/projects/skills/react-hook-form.svg" },
  { name: "React Router", image: "/projects/skills/rrd.svg" },

  // social media & APIs
  { name: "Twitter API", image: "/projects/skills/x.svg" },
  { name: "Reddit API", image: "/projects/skills/reddit.svg" },
  { name: "Slack API", image: "/projects/skills/slack.svg" },

  // database
  { name: "Airtable", image: "/projects/skills/airtable.svg" },
  { name: "MongoDB", image: "/projects/skills/mongodb.svg" },

  // cms & e-commerce
  { name: "WordPress API", image: "/projects/skills/wordpress.svg" },
  { name: "Shopify API", image: "/projects/skills/shopify.svg" },
];
