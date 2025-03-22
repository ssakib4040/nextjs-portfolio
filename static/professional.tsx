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
    title: "Keystone - A place for connection and growth",
    description:
      "A platform where users can connect with each other, share their thoughts, and grow together.",
    tags: [
      "Next",
      "React",
      "Shadcn",
      "TailwindCSS",
      "Typescript",
      "React Hook Form",
    ],
    image: "/projects/professional/keystone.png",
    source: "#",
    duration: "Feb 2025 - Current",
  },

  {
    title: "Clerkal AI",
    description:
      "A full-stack e-commerce website where shopowners can swap products. Users can add products to the list and swap. Admin can add products, manage orders, and manage users.",
    tags: [
      "Next",
      "React",
      "Shadcn",
      "TailwindCSS",
      "Typescript",
      "React Hook Form",
    ],
    image: "/projects/professional/clerkal.png",
    source: "#",
    duration: "Jan 2025 - Feb 2025",
  },

  {
    title: "Swapshop - E-commerce Website",
    description:
      "A full-stack e-commerce website where shopowners can swap products. Users can add products to the list and swap. Admin can add products, manage orders, and manage users.",
    tags: [
      "Next",
      "NextAuth",
      "React",
      "React Native",
      "RTK Query",
      "DaisyUI",
      "TailwindCSS",
      "Echo",
      "React Hook Form",
    ],
    image: "/projects/professional/swapshop.png",
    source: "https://swapshopnow.com/",
    duration: "Apr 2024 - Current",
  },

  {
    title: "Wiggle - Dating App",
    description:
      "A Swiden based dating app where users can swipe left or right to like or dislike. Users can chat with each other. Admin can manage users, manage chat, and manage users.",
    tags: ["Next", "React", "Redux", "Netlify"],
    image: "/projects/professional/wiggle.png",
    source: "https://thewiggleapp.com/",
    duration: "Dec 2024 - Dec 2024",
  },

  {
    title: "ServiceBolt",
    description:
      "Simple pricing & all-inclusive solution for your HVAC, Plumbing, Electrical, lawn care, or other field service business. We take care of all the heavy lifting in set-up & training to make the transition from another platform or no platform easy.",
    tags: ["HTML", "CSS", "Javascript", "Bootstrap", "JQuery"],
    image: "/projects/professional/servicebolt.png",
    source: "https://myservicebolt.com/",
    duration: "Nov 2024 - Nov 2024",
  },

  {
    title: "Cochranfirm",
    description:
      "A portfolio website of a lawyer who is from the California, USA.",
    tags: ["HTML", "CSS", "Javascript", "Bootstrap", "JQuery"],
    image: "/projects/professional/law.png",
    source: "https://briandunnlaw.com/",
    duration: "May 2024 - May 2024",
  },

  {
    title: "Jet Thruster",
    description:
      "The Official Website of Jet Thruster America. They provide the best thruster for boats.",
    tags: ["React", "Redux", "React Router", "CSS", "Bootstrap", "Typescript"],
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
    title: "Envoc",
    description:
      "A Software Developmeny Company in USA. They provide custom software development, web development, and mobile app development services.",
    tags: ["HTML", "CSS", "Javascript", "Bootstrap", "JQuery"],
    image: "/projects/professional/envoc.png",
    source: "https://envoc.com/",
    duration: "Mar 2024 - Apr 2024",
  },

  {
    title: "Soflyy",
    description:
      "A full-stack AI based platform where users can get lots of AI and Automation tools for both personal and professional use.",
    tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
    image: "/projects/professional/soflyy.png",
    source: "https://success.ai/",
    duration: "Mar 2024 - Apr 2024",
  },

  {
    title: "Korra.ai",
    description:
      "AI powered i18n search engine where users can search for anything and get the best results.",
    tags: ["React", "Preact", "Redux", "Enzyme.js", "Sass"],
    image: "/projects/professional/korraai.png",
    source: "https://success.ai/",
    duration: "Jan 2024 - Mar 2024",
  },

  {
    title: "Success.ai",
    description:
      "A full-stack AI based platform where users can get lots of AI and Automation tools for both personal and professional use.",
    tags: ["React", "MUI", "Typescript", "Node.js", "Express.js", "MongoDB"],
    image: "/projects/professional/successai.png",
    source: "https://success.ai/",
    duration: "Jan 2024 - Mar 2024",
  },

  {
    title: "Bulk.ly",
    description:
      "A Social Media Management Platform where users can schedule posts, manage social media accounts, and track social media performance.",
    tags: [
      "Next",
      "React",
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
    title: "Smugglers Alcohol",
    description:
      "Admin dashboard for Smugglers Alcohol where admin can manage products, manage orders, and manage users.",
    tags: [
      "Next",
      "React",
      "Redux",
      "Ant Design",
      "Typescript",
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
    title: "Mediusware Jobs",
    description:
      "Job portal for Mediusware.com where users can apply for jobs.",
    tags: ["Vue", "Redux", "Lottie", "Sass"],
    image: "/projects/professional/mw-jobs.png",
    source: "https://job.mediusware.com",
    duration: "July 2023 - Oct 2023",
  },

  {
    title: "Mediusware.com",
    description: "A Custom Software and Web Development Company in Bangladesh.",
    tags: ["Next", "React", "Sass", "DaisyUI", "Typescript", "Lottie"],
    image: "/projects/professional/mediusware.png",
    source: "https://mediusware.com/",
    duration: "July 2023 - Oct 2023",
  },

  {
    title: "TCDB - Admin Dashboard",
    description:
      "A full-stack admin dashboard for handling the scrap data from the web. Admin can manage users, manage scrap data, and manage users.",
    tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
    image: "/projects/professional/tcdb.png",
    source: "#",
    duration: "Dec 2023 - Dec 2023",
  },

  {
    title: "Growtoro - Email Marketing Platform",
    description:
      "A full-stack email marketing platform where users can create email campaigns, manage subscribers, and track email campaigns. Admin can manage users, manage email templates, and manage email campaigns.",
    tags: ["React", "Redux", "Vite", "MUI"],
    image: "/projects/professional/growtoro.png",
    source: "https://growtoro.com/",
    duration: "July 2023 - Oct 2023",
  },
];

export const skills = [
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
  { name: "Node.js", image: "/projects/skills/node-js.svg" },
  { name: "Express.js", image: "/projects/skills/express-js.svg" },
  { name: "Enzyme.js", image: "/projects/skills/enzyme-js.svg" },
  { name: "JQuery", image: "/projects/skills/jquery.svg" },
  { name: "React Router", image: "/projects/skills/rrd.svg" },
];
