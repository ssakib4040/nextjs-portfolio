import Image from "next/image";

export default function Portfolio() {
  interface Portfolio {
    title: string;
    image: string;
    link: string;
    githubUrl: string;
  }

  const portfolios: Portfolio[] = [
    {
      title: "Marketing Agency",
      image: "/projects/marketing-house.png",
      link: "https://marketing-house.vercel.app/",
      githubUrl: "https://github.com/ssakib4040/marketing-house",
    },

    {
      title: "Bloghub Platform",
      image: "/projects/nextjs-bloghub.png",
      link: "https://bloghub-red.vercel.app/",
      githubUrl: "https://github.com/ssakib4040/bloghub",
    },

    {
      title: "Optimiza Landing Page",
      image: "/projects/optimiza.png",
      link: "https://optimiza.vercel.app/",
      githubUrl: "https://github.com/ssakib4040/optimiza",
    },

    {
      title: "Awesome App Landing",
      image: "/projects/app-landing.png",
      link: "http://app-landing-black.vercel.app/",
      githubUrl: "https://github.com/ssakib4040/app-landing",
    },

    {
      title: "Plant Shop",
      image: "/projects/plant.png",
      link: "https://nextjs-plant.vercel.app/",
      githubUrl: "https://github.com/ssakib4040/nextjs-plant",
    },

    {
      title: "React Counter",
      image: "/projects/react-counter.png",
      link: "https://react-counter-zeta.vercel.app/",
      githubUrl: "https://github.com/ssakib4040/react-counter",
    },

    {
      title: "React Todo App",
      image: "/projects/mern-todo-app.png",
      link: "https://mern-todo-slg.netlify.app/",
      githubUrl: "https://github.com/ssakib4040/react-todo",
    },

    {
      title: "React Tic Tac Toe",
      image: "/projects/react-ttt.png",
      link: "https://ssakib4040.github.io/react-tic-tac-toe/",
      githubUrl: "https://github.com/ssakib4040/react-tic-tac-toe",
    },

    {
      title: "React Rock Paper Scissors",
      image: "/projects/react-rock-paper-scissors.png",
      link: "https://react-rock-paper-scissors1.netlify.app/",
      githubUrl: "https://github.com/ssakib4040/react-rock-paper-scissors",
    },

    {
      title: "Nextjs Tailwind Auth",
      image: "/projects/nextjs-tailwind-auth.png",
      link: "https://nextjs-tailwind-auth-lake.vercel.app/",
      githubUrl: "https://github.com/ssakib4040/nextjs-tailwind-auth",
    },

    {
      title: "React Password Generator",
      image: "/projects/react-password-generator.png",
      link: "https://react-password-generator1.netlify.app/",
      githubUrl: "https://github.com/ssakib4040/react-password-generator",
    },

    {
      title: "React Emoji Directory",
      image: "/projects/react-emoji-directory.png",
      link: "https://react-emoji-directory.netlify.app/",
      githubUrl: "https://github.com/ssakib4040/react-emoji-search",
    },

    {
      title: "Mern Authentication",
      image: "/projects/mern-auth.png",
      link: "https://github.com/ssakib4040/mern-authentication",
      githubUrl: "https://github.com/ssakib4040/mern-authentication",
    },

    {
      title: "Mern Authentication 2.0",
      image: "/projects/mern-auth-2.0.png",
      link: "https://github.com/ssakib4040/mern-authentication-2.0",
      githubUrl: "https://github.com/ssakib4040/mern-authentication-2.0",
    },

    {
      title: "Mern Ecommerce",
      image: "/projects/react-ecommerce.png",
      link: "https://github.com/ssakib4040/mern-ecommerce",
      githubUrl: "https://github.com/ssakib4040/mern-ecommerce",
    },
  ];

  return (
    <div className="px-8 py-10">
      <h2 className="text-3xl font-medium">Portfolio</h2>
      <hr className="my-3 border-gray-400 border-1" />

      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                <h3 className="text-xl font-medium mb-4">{eachItem.title}</h3>

                <div>
                  <a
                    href={eachItem.link}
                    target="_blank"
                    className="bg-[#0D6EFD] focus:ring-4 transition text-white font-bold py-2 px-4 rounded"
                  >
                    Demo
                  </a>

                  <a
                    href={eachItem.githubUrl}
                    target="_blank"
                    className="border-[#0D6EFD] focus:ring-4 border-[1px] transition text-[#0D6EFD] font-bold py-2 px-4 rounded ml-2"
                  >
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
