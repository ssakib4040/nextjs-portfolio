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
    title: "Clerkal AI",
    description:
      "A full-stack e-commerce website where shopowners can swap products. Users can add products to the list and swap. Admin can add products, manage orders, and manage users.",
    tags: ["Next", "React", "Shadcn", "TailwindCSS", "Typescript"],
    image: "/projects/professional/clerkal.png",
    source: "#",
    duration: "Jan 2024 - Current",
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
    ],
    image: "/projects/professional/swapshop.png",
    source: "https://swapshopnow.com/",
    duration: "Nov 2023 - Dec 2023",
  },

  {
    title: "Wiggle - Dating App",
    description:
      "A Swiden based dating app where users can swipe left or right to like or dislike. Users can chat with each other. Admin can manage users, manage chat, and manage users.",
    tags: ["Next", "React", "Redux", "Netlify"],
    image: "/projects/professional/wiggle.png",
    source: "https://thewiggleapp.com/",
    duration: "Dec 2023 - Dec 2023",
  },

  {
    title: "Smugglers Alcohol",
    description:
      "A full-stack admin dashboard for a companys internal use. Admin can manage users, manage products, manage orders, and manage users.",
    tags: [],
    image: "/projects/professional/mw-jobs.png",
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
    tags: ["Next", "React", "Sass", "DaisyUI", "Typescript"],
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
];
