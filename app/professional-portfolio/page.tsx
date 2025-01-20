import { shimmer, toBase64 } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PortfolioTags {
  name: string;
  image?: string;
}

interface Portfolio {
  title: string;
  description?: string;
  image: string;
  source: string;
  tags?: PortfolioTags[];
  duration?: string;
}

const portfolioList: Portfolio[] = [
  {
    title: "Swapshop - E-commerce Website",
    description:
      "A full-stack e-commerce website where shopowners can swap products. Users can add products to the list and swap. Admin can add products, manage orders, and manage users.",
    tags: [
      { name: "Next", image: "/projects/skills/next.svg" },
      { name: "NextAuth", image: "/projects/skills/next-auth.png" },
      { name: "React", image: "/projects/skills/react.svg" },
      { name: "React Native", image: "/projects/skills/react.svg" },
      { name: "RTK Query", image: "/projects/skills/redux.svg" },
      { name: "DaisyUI", image: "/projects/skills/daisyui.svg" },
      { name: "TailwindCSS", image: "/projects/skills/tailwindcss.svg" },

      { name: "Echo", image: "/projects/skills/laravel.svg" },
    ],
    image: "/projects/professional/swapshop.png",
    source: "https://swapshopnow.com/",
    duration: "Nov 2023 - Dec 2023",
  },

  {
    title: "Mediusware.com",
    description: "A Custom Software and Web Development Company in Bangladesh.",
    tags: [
      { name: "Next", image: "/projects/skills/next.svg" },
      { name: "React", image: "/projects/skills/react.svg" },
      { name: "Sass", image: "/projects/skills/sass.svg" },
      { name: "DaisyUI", image: "/projects/skills/daisyui.svg" },
      { name: "Typescript", image: "/projects/skills/ts.svg" },
    ],
    image: "/projects/professional/mediusware.png",
    source: "https://mediusware.com/",
    duration: "July 2023 - October 2023",
  },

  {
    title: "Growtoro - Email Marketing Platform",
    description:
      "A full-stack email marketing platform where users can create email campaigns, manage subscribers, and track email campaigns. Admin can manage users, manage email templates, and manage email campaigns.",
    tags: [
      { name: "React", image: "/projects/skills/react.svg" },
      { name: "Vite", image: "/projects/skills/vite.svg" },
      { name: "MUI", image: "/projects/skills/mui.svg" },
    ],
    image: "/projects/professional/growtoro.png",
    source: "https://growtoro.com/",
    duration: "July 2023 - October 2023",
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
              height={1200}
              className="object-fill aspect-video"
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
            />
            <hr />

            {/* content */}
            <div className="p-4">
              {/* title */}
              <h2 className="text-xl font-bold text-gray-800">
                {portfolio.title}
              </h2>

              {/* description */}
              <p
                className="text-gray-600 text-sm mt-2 line-clamp-4"
                title={portfolio?.description}
              >
                {portfolio?.description}
              </p>

              {/* duration */}
              <p className="text-gray-600 text-sm mt-2">
                {portfolio?.duration && (
                  <>
                    <span className="font-bold">Duration:</span>{" "}
                    {portfolio?.duration}
                  </>
                )}
              </p>

              {/* tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {portfolio?.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white text-[#0D6EFD] border-[1px] border-[#0D6EFD] text-xs px-2 py-1 rounded-md flex gap-1 justify-center items-center"
                  >
                    {tag?.image && (
                      <Image
                        src={tag?.image}
                        alt={tag?.name}
                        width={20}
                        height={20}
                        className="object-fill"
                      />
                    )}
                    {tag?.name}
                  </span>
                ))}
              </div>

              {/* links  */}
              <div>
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
                  Visit URL
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
