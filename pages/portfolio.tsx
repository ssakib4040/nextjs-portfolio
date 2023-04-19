import Image from "next/image";

export default function Portfolio() {
  const portfolios = [
    {
      title: "react-counter",
      image: "/projects/react-counter.png",
      link: "https://nextjs-tailwind-auth-lake.vercel.app/",
    },

    {
      title: "React Todo App",
      image: "/projects/mern-todo-app.png",
      link: "https://mern-todo-slg.netlify.app/",
    },

    {
      title: "React Tic Tac Toe",
      image: "/projects/react-ttt.png",
      link: "https://ssakib4040.github.io/react-tic-tac-toe/",
    },

    {
      title: "React Rock Paper Scissors",
      image: "/projects/react-rock-paper-scissors.png",
      link: "https://react-rock-paper-scissors1.netlify.app/",
    },

    {
      title: "Nextjs Tailwind Auth",
      image: "/projects/nextjs-tailwind-auth.png",
      link: "https://nextjs-tailwind-auth-lake.vercel.app/",
    },

    {
      title: "React Password Generator",
      image: "/projects/react-password-generator.png",
      link: "https://react-password-generator1.netlify.app/",
    },

    {
      title: "React Emoji Directory",
      image: "/projects/react-emoji-directory.png",
      link: "https://react-emoji-directory.netlify.app/",
    },

    {
      title: "NextJS Bloghub",
      image: "/projects/nextjs-bloghub.png",
      link: "https://bloghub-red.vercel.app/",
    },

    {
      title: "Mern Authentication",
      image: "/projects/mern-auth.png",
      link: "https://github.com/ssakib4040/mern-authentication",
    },

    {
      title: "Mern Authentication 2.0",
      image: "/projects/mern-auth-2.0.png",
      link: "https://github.com/ssakib4040/mern-authentication-2.0",
    },

    {
      title: "Mern Ecommerce",
      image: "/projects/react-ecommerce.png",
      link: "https://github.com/ssakib4040/mern-ecommerce",
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
              className="flex flex-col rounded-sm border border-gray-300 cursor-pointer"
              key={index}
            >
              <Image
                className=""
                src={eachItem.image}
                alt="avatar"
                width="1080"
                height="720"
              />

              <div className="my-3 mx-4">
                <h3 className="text-xl font-medium mb-3">{eachItem.title}</h3>
                <a
                  href={eachItem.link}
                  target="_blank"
                  className="bg-[#0D6EFD] focus:ring-4 transition text-white font-bold py-2 px-4 rounded"
                >
                  Demo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
