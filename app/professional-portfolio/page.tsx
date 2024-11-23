import { shimmer, toBase64 } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Portfolio {
  title: string;
  description?: string;
  image: string;
  source: string;
  demo: string;
  tags?: string[];
}

const portfolioList: Portfolio[] = [
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

  {
    title: "CSS Helicopter",
    description: `CSS Helicopter is a small CSS library for creating a helicopter with pure CSS and HTML only.`,
    image: "/projects/css-helicopter.png",
    demo: "https://css-helicopter.vercel.app/",
    source: "https://github.com/ssakib4040/CSS-Helicopter",
    tags: ["HTML 5", "CSS 3", "Sass", "React js", "Next js", "Docusaurus"],
  },

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

export default function page() {
  return (
    <div className="lg:px-8 lg:py-12 px-6 py-8">
      <h1 className=" text-4xl font-bold text-gray-800 ">
        Professional Portfolio
      </h1>
      <hr className="my-3 border-gray-600" />

      {/* grid with 4 card */}
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-6 my-6">
        {portfolioList.map((portfolio, i) => (
          <div className="bg-white border rounded-md overflow-hidden" key={i}>
            <Image
              src={portfolio.image}
              alt=""
              width={1600}
              height={900}
              className="object-cover h-44"
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
            />
            <hr />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">
                {portfolio.title}
              </h2>
              <p className="text-gray-600 mt-2">{portfolio.description}</p>

              {/* tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {portfolio.tags &&
                  portfolio.tags.map((tag, i) => (
                    <span
                      className="bg-white text-[#0D6EFD] border-[1px] border-[#0D6EFD] text-xs px-2 py-1 rounded-md inline-block"
                      key={i}
                    >
                      {tag}
                    </span>
                  ))}
              </div>

              <div className="">
                <Link
                  href={portfolio.source}
                  target="_blank"
                  className="bg-[#0D6EFD] text-white px-3 py-2 rounded-md flex items-center text-sm font-bold justify-center"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="mr-1 mt-[2px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"></path>
                  </svg>
                  View Source
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
