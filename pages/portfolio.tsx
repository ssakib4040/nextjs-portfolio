import Image from "next/image";
import { FaGithub, FaRocket } from "react-icons/fa";

export default function Portfolio() {
  interface Portfolio {
    title: string;
    description?: string;
    image: string;
    link: string;
    githubUrl: string;
    skills?: string[];
  }

  const portfolios: Portfolio[] = [
    {
      title: "Marketing Agency",
      description:
        "Attractive website for a marketing agency, showcasing services and attracting clients with a modern design.",
      image: "/projects/marketing-house.png",
      link: "https://marketing-house.vercel.app/",
      githubUrl: "https://github.com/ssakib4040/marketing-house",
      skills: [
        "HTML 5",
        "CSS 3",
        "Tailwind Css",
        "Javascrpt",
        "React js",
        "Next js",
      ],
    },

    {
      title: "Bloghub Platform",
      description: `Innovative blog platform for seamless content creation and sharing, empowering writers and readers alike.`,
      image: "/projects/nextjs-bloghub.png",
      link: "https://bloghub-red.vercel.app/",
      githubUrl: "https://github.com/ssakib4040/bloghub",
      skills: ["HTML 5", "CSS 3", "Tailwind Css", "React js", "Next js"],
    },

    {
      title: "Optimiza Landing Page",
      description: `Landing page for a digital marketing agency, showcasing services and attracting clients with a modern design.`,
      image: "/projects/optimiza.png",
      link: "https://optimiza.vercel.app/",
      githubUrl: "https://github.com/ssakib4040/optimiza",
      skills: ["HTML 5", "CSS 3", "Tailwind Css", "React js", "Next js"],
    },

    {
      title: "Awesome App Landing",
      description: `Landing page for a mobile app, showcasing features and attracting users with a modern design.`,
      image: "/projects/app-landing.png",
      link: "http://app-landing-black.vercel.app/",
      githubUrl: "https://github.com/ssakib4040/app-landing",
      skills: ["HTML 5", "CSS 3", "Tailwind Css", "React js", "Next js"],
    },

    {
      title: "Plant Shop",
      description: `Plant shop website for selling plants, showcasing products and attracting customers with a modern UI.`,
      image: "/projects/plant.png",
      link: "https://nextjs-plant.vercel.app/",
      githubUrl: "https://github.com/ssakib4040/nextjs-plant",
      skills: ["HTML 5", "CSS 3", "Tailwind Css", "React js", "Next js"],
    },

    {
      title: "Chat UI",
      description: `Chat UI for a chat application, showcasing features and attracting users with a modern design.`,
      image: "/projects/chat-ui.png",
      link: "https://chat-ui-smoky.vercel.app/",
      githubUrl: "https://github.com/ssakib4040/chat-ui",
      skills: [
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
      link: "https://css-helicopter.vercel.app/",
      githubUrl: "https://github.com/ssakib4040/CSS-Helicopter",
      skills: ["HTML 5", "CSS 3", "Sass", "React js", "Next js", "Docusaurus"],
    },

    {
      title: "Ecommerce Website",
      description: `Ecommerce website for selling products, showcasing products and attracting customers with a modern UI.`,
      image: "/projects/ecommerce.png",
      link: "https://nextjs-ecommerce-silk-beta.vercel.app/",
      githubUrl: "https://github.com/ssakib4040/nextjs-ecommerce",
      skills: ["HTML 5", "CSS 3", "Tailwind Css", "React js", "Next js"],
    },

    {
      title: "Gym Website",
      description: `Gym website for a gym, showcasing services and attracting clients with a modern design.`,
      image: "/projects/gym-website.png",
      link: "https://nextjs-gym.vercel.app/",
      githubUrl: "https://github.com/ssakib4040/nextjs-gym",
      skills: ["HTML 5", "CSS 3", "Tailwind Css", "React js", "Next js"],
    },

    {
      title: "React Counter",
      description: `A simple counter app built with React js, showcasing features and attracting users with a modern design.`,
      image: "/projects/react-counter.png",
      link: "https://react-counter-zeta.vercel.app/",
      githubUrl: "https://github.com/ssakib4040/react-counter",
      skills: ["HTML 5", "CSS 3", "Bootstrap", "Vite js", "React js"],
    },

    {
      title: "React Todo App",
      description: `A simple todo app built with React js, showcasing features and attracting users with a modern design.`,
      image: "/projects/mern-todo-app.png",
      link: "https://mern-todo-slg.netlify.app/",
      githubUrl: "https://github.com/ssakib4040/react-todo",
      skills: [
        "HTML 5",
        "CSS 3",
        "Bootstrap",
        "React js",
        "Node js",
        "MongoDB",
      ],
    },

    {
      title: "React Tic Tac Toe",
      // it was built with react js official tutorial and added some extra features
      description: `Enhanced version of the classic Tic Tac Toe game built with React, featuring interactive gameplay and additional features.`,
      image: "/projects/react-ttt.png",
      link: "https://ssakib4040.github.io/react-tic-tac-toe/",
      githubUrl: "https://github.com/ssakib4040/react-tic-tac-toe",
      skills: ["HTML 5", "CSS 3", "Bootstrap", "React js"],
    },

    {
      title: "React Rock Paper Scissors",
      description: `A classic Rock Paper Scissors game built with React js and vanilla CSS`,
      image: "/projects/react-rock-paper-scissors.png",
      link: "https://react-rock-paper-scissors1.netlify.app/",
      githubUrl: "https://github.com/ssakib4040/react-rock-paper-scissors",
      skills: ["HTML 5", "CSS 3", "Bootstrap", "React js"],
    },

    {
      title: "Nextjs Tailwind Auth",
      description: `Authentication system built with Next js, Tailwind Css and next-auth`,
      image: "/projects/nextjs-tailwind-auth.png",
      link: "https://nextjs-tailwind-auth-lake.vercel.app/",
      githubUrl: "https://github.com/ssakib4040/nextjs-tailwind-auth",
      skills: [
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
      link: "https://react-password-generator1.netlify.app/",
      githubUrl: "https://github.com/ssakib4040/react-password-generator",
      skills: ["HTML 5", "CSS 3", "Bootstrap", "React js"],
    },

    {
      title: "React Emoji Directory",
      description: `Interactive directory showcasing a wide range of emojis, built with React for easy search and browsing.`,
      image: "/projects/react-emoji-directory.png",
      link: "https://react-emoji-directory.netlify.app/",
      githubUrl: "https://github.com/ssakib4040/react-emoji-search",
      skills: ["HTML 5", "CSS 3", "Bootstrap", "React js"],
    },

    {
      title: "Firebase React Authentication",
      description: `Authentication system built with FERN stack, featuring user authentication and authorization.`,
      image: "/projects/mern-auth.png",
      link: "https://github.com/ssakib4040/mern-authentication",
      githubUrl: "https://github.com/ssakib4040/mern-authentication",
      skills: [
        "HTML 5",
        "CSS 3",
        "Bootstrap",
        "React js",
        "Node js",
        "MongoDB",
      ],
    },

    {
      title: "Firebase React Authentication 2.0",
      description: `Authentication system built with FERN stack, featuring user authentication and authorization.`,
      image: "/projects/mern-auth-2.0.png",
      link: "https://github.com/ssakib4040/mern-authentication-2.0",
      githubUrl: "https://github.com/ssakib4040/mern-authentication-2.0",
      skills: [
        "HTML 5",
        "CSS 3",
        "Javascript",
        "React js",
        "Node js",
        "MongoDB",
      ],
    },

    {
      title: "Mern Ecommerce",
      image: "/projects/react-ecommerce.png",
      link: "https://github.com/ssakib4040/mern-ecommerce",
      githubUrl: "https://github.com/ssakib4040/mern-ecommerce",
      skills: ["HTML 5", "CSS 3", "React js", "Node js", "MongoDB"],
    },
  ];

  return (
    <div className="px-8 py-10">
      <h2 className="text-3xl font-medium">Portfolio</h2>
      <hr className="my-3 border-gray-400 border-1" />

      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {portfolios.map((eachItem, index) => {
          return (
            <div
              className="flex flex-col rounded-sm border border-gray-300"
              key={index}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "180px",
                }}
              >
                <Image
                  className=""
                  src={eachItem.image}
                  alt="portfolio image"
                  fill
                  sizes="100vw"
                  style={
                    {
                      // objectFit: "contain",
                    }
                  }
                />
              </div>

              <hr />

              <div className="my-3 mx-4">
                <h3 className="text-lg font-medium mb-1">{eachItem.title}</h3>

                <p className="mb-3 text-sm text-gray-500">
                  {eachItem.description}
                </p>

                <div className="mb-3 flex flex-wrap gap-x-1 gap-y-2">
                  {eachItem.skills?.map((skill: any, index: any) => {
                    return (
                      <div
                        className="border border-[#0D6EFD] text-xs text-[#0D6EFD] px-1 rounded inline font-medium"
                        key={index}
                      >
                        #{skill}
                      </div>
                    );
                  })}
                </div>

                <div className="flex">
                  <a
                    href={eachItem.link}
                    target="_blank"
                    className="bg-[#0D6EFD] focus:ring-4 transition text-white font-bold py-1 px-3 rounded flex items-center justify-center"
                  >
                    <FaRocket className="mr-1 mt-[3px]" />
                    Demo
                  </a>

                  <a
                    href={eachItem.githubUrl}
                    target="_blank"
                    className="border-[#0D6EFD] focus:ring-4 border-[1px] transition text-[#0D6EFD] font-bold py-1 px-3 rounded ml-2  flex items-center justify-center"
                  >
                    <FaGithub className="mr-1 mt-[2px]" />
                    Github
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
