interface Portfolio {
  title: string;
  description?: string;
  image: string;
  source: string;
  demo: string;
  tags?: string[];
}

export const portfolioList: Portfolio[] = [
  {
    title: "Marketing Agency",
    description:
      "Attractive website for a marketing agency, showcasing services and attracting clients with a modern design.",
    tags: ["Next.js", "React.JS", "TailwindCSS"],
    image: "/projects/marketing-house.png",
    source: "https://marketing-house.vercel.app",
    demo: "https://github.com/ssakib4040/marketing-house",
  },

  {
    title: "Bloghub Platform",
    description: `Innovative blog platform for seamless content creation and sharing, empowering writers and readers alike.`,
    image: "/projects/nextjs-bloghub.png",
    demo: "https://bloghub-red.vercel.app/",
    source: "https://github.com/ssakib4040/bloghub",
    tags: ["HTML 5", "CSS 3", "Tailwind Css", "React js", "Next js"],
  },

  // {
  //   title: "Optimiza Landing Page",
  //   description: `Landing page for a digital marketing agency, showcasing services and attracting clients with a modern design.`,
  //   image: "/projects/optimiza.png",
  //   demo: "https://optimiza.vercel.app/",
  //   source: "https://github.com/ssakib4040/optimiza",
  //   tags: ["HTML 5", "CSS 3", "Tailwind Css", "React js", "Next js"],
  // },

  {
    title: "Awesome App Landing",
    description: `Landing page for a mobile app, showcasing features and attracting users with a modern design.`,
    image: "/projects/app-landing.png",
    demo: "http://app-landing-black.vercel.app/",
    source: "https://github.com/ssakib4040/app-landing",
    tags: ["HTML 5", "CSS 3", "Tailwind Css", "React js", "Next js"],
  },

  {
    title: "Plant Shop",
    description: `Plant shop website for selling plants, showcasing products and attracting customers with a modern UI.`,
    image: "/projects/plant.png",
    demo: "https://nextjs-plant.vercel.app/",
    source: "https://github.com/ssakib4040/nextjs-plant",
    tags: ["HTML 5", "CSS 3", "Tailwind Css", "React js", "Next js"],
  },

  {
    title: "Chat UI",
    description: `Chat UI for a chat application, showcasing features and attracting users with a modern design.`,
    image: "/projects/chat-ui.png",
    demo: "https://chat-ui-smoky.vercel.app/",
    source: "https://github.com/ssakib4040/chat-ui",
    tags: [
      "HTML 5",
      "CSS 3",
      "Flexbox",
      "Grid",
      "Tailwind Css",
      "React js",
      "Next js",
    ],
  },

  // {
  //   title: "CSS Helicopter",
  //   description: `CSS Helicopter is a small CSS library for creating a helicopter with pure CSS and HTML only.`,
  //   image: "/projects/css-helicopter.png",
  //   demo: "https://css-helicopter.vercel.app/",
  //   source: "https://github.com/ssakib4040/CSS-Helicopter",
  //   tags: ["HTML 5", "CSS 3", "Sass", "React js", "Next js", "Docusaurus"],
  // },

  {
    title: "Ecommerce Website",
    description: `Ecommerce website for selling products, showcasing products and attracting customers with a modern UI.`,
    image: "/projects/ecommerce.png",
    demo: "https://nextjs-ecommerce-silk-beta.vercel.app/",
    source: "https://github.com/ssakib4040/nextjs-ecommerce",
    tags: ["HTML 5", "CSS 3", "Tailwind Css", "React js", "Next js"],
  },

  {
    title: "Gym Website",
    description: `Gym website for a gym, showcasing services and attracting clients with a modern design.`,
    image: "/projects/gym-website.png",
    demo: "https://nextjs-gym.vercel.app/",
    source: "https://github.com/ssakib4040/nextjs-gym",
    tags: ["HTML 5", "CSS 3", "Tailwind Css", "React js", "Next js"],
  },

  {
    title: "React Counter",
    description: `A simple counter app built with React js, showcasing features and attracting users with a modern design.`,
    image: "/projects/react-counter.png",
    demo: "https://react-counter-zeta.vercel.app/",
    source: "https://github.com/ssakib4040/react-counter",
    tags: ["HTML 5", "CSS 3", "Bootstrap", "Vite js", "React js"],
  },

  {
    title: "React Todo App",
    description: `A simple todo app built with React js, showcasing features and attracting users with a modern design.`,
    image: "/projects/mern-todo-app.png",
    demo: "https://mern-todo-slg.netlify.app/",
    source: "https://github.com/ssakib4040/react-todo",
    tags: ["HTML 5", "CSS 3", "Bootstrap", "React js", "Node js", "MongoDB"],
  },

  {
    title: "React Tic Tac Toe",
    // it was built with react js official tutorial and added some extra features
    description: `Enhanced version of the classic Tic Tac Toe game built with React, featuring interactive gameplay and additional features.`,
    image: "/projects/react-ttt.png",
    demo: "https://ssakib4040.github.io/react-tic-tac-toe/",
    source: "https://github.com/ssakib4040/react-tic-tac-toe",
    tags: ["HTML 5", "CSS 3", "Bootstrap", "React js"],
  },

  {
    title: "React Rock Paper Scissors",
    description: `A classic Rock Paper Scissors game built with React js and vanilla CSS`,
    image: "/projects/react-rock-paper-scissors.png",
    demo: "https://react-rock-paper-scissors1.netlify.app/",
    source: "https://github.com/ssakib4040/react-rock-paper-scissors",
    tags: ["HTML 5", "CSS 3", "Bootstrap", "React js"],
  },

  {
    title: "Nextjs Tailwind Auth",
    description: `Authentication system built with Next js, Tailwind Css and next-auth`,
    image: "/projects/nextjs-tailwind-auth.png",
    demo: "https://nextjs-tailwind-auth-lake.vercel.app/",
    source: "https://github.com/ssakib4040/nextjs-tailwind-auth",
    tags: [
      "HTML 5",
      "CSS 3",
      "Tailwind Css",
      "React js",
      "Next js",
      "next-auth",
    ],
  },

  {
    title: "React Password Generator",
    description: `A simple password generator built with React js, showcasing features and attracting users with bootstrap UI.`,
    image: "/projects/react-password-generator.png",
    demo: "https://react-password-generator1.netlify.app/",
    source: "https://github.com/ssakib4040/react-password-generator",
    tags: ["HTML 5", "CSS 3", "Bootstrap", "React js"],
  },

  {
    title: "React Emoji Directory",
    description: `Interactive directory showcasing a wide range of emojis, built with React for easy search and browsing.`,
    image: "/projects/react-emoji-directory.png",
    demo: "https://react-emoji-directory.netlify.app/",
    source: "https://github.com/ssakib4040/react-emoji-search",
    tags: ["HTML 5", "CSS 3", "Bootstrap", "React js"],
  },

  {
    title: "Firebase React Authentication",
    description: `Authentication system built with FERN stack, featuring user authentication and authorization.`,
    image: "/projects/mern-auth.png",
    demo: "https://github.com/ssakib4040/mern-authentication",
    source: "https://github.com/ssakib4040/mern-authentication",
    tags: ["HTML 5", "CSS 3", "Bootstrap", "React js", "Node js", "MongoDB"],
  },

  {
    title: "Firebase React Authentication 2.0",
    description: `Authentication system built with FERN stack, featuring user authentication and authorization.`,
    image: "/projects/mern-auth-2.0.png",
    demo: "https://github.com/ssakib4040/mern-authentication-2.0",
    source: "https://github.com/ssakib4040/mern-authentication-2.0",
    tags: ["HTML 5", "CSS 3", "Javascript", "React js", "Node js", "MongoDB"],
  },

  {
    title: "Mern Ecommerce",
    image: "/projects/react-ecommerce.png",
    demo: "https://github.com/ssakib4040/mern-ecommerce",
    source: "https://github.com/ssakib4040/mern-ecommerce",
    tags: ["HTML 5", "CSS 3", "React js", "Node js", "MongoDB"],
  },
];
