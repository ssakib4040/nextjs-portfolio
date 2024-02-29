import Image from "next/image";
import Link from "next/link";
import React from "react";

const npmPackageList = [
  {
    title: "Imposter.js",
    description:
      "An npm package to generate fake/dummy data for testing purposes.",
    link: "https://www.npmjs.com/package/imposterjs",
  },

  {
    title: "React Dark State",
    description: "React Dark State a custom react hook to detect dark mode.",
    link: "https://www.npmjs.com/package/react-dark-state",
  },

  {
    title: "Mongodb Backup Toolkit",
    description:
      "Node.js library to easily backup and restore MongoDB databases using Mongoose and the filesystem module.",
    link: "https://www.npmjs.com/package/mongodb-backup-toolkit",
  },

  {
    title: "Rude Filter",
    description: "A simple module that filters rude words from a given text.",
    link: "https://www.npmjs.com/package/rude-filter",
  },

  {
    title: "Img Validation",
    description: "ImgValidation a package to validate image..",
    link: "https://www.npmjs.com/package/img-validation",
  },

  {
    title: "Mongoose Error Beautify",
    description: "A package to simplify mongoose error messages.",
    link: "https://www.npmjs.com/package/mongoose-error-beautify",
  },

  {
    title: "Math Dumb",
    description:
      "This is a simple math nodejs package/module to perform basic math operations.",
    link: "https://www.npmjs.com/package/math-dumb",
  },

  {
    title: "Is Leap",
    description: "A simple lightweight module to detect leap year.",
    link: "https://www.npmjs.com/package/is-leap",
  },
];

export default function page() {
  return (
    <div className="lg:px-8 lg:py-12 px-6 py-8">
      <h1 className=" text-4xl font-bold text-gray-800 ">NPM Package</h1>
      <hr className="my-3 border-gray-600" />

      {/* grid with 4 card */}
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-6 my-6">
        {npmPackageList.map((npm, i) => (
          <div
            className="bg-white shadow-md rounded-md overflow-hidden"
            key={i}
          >
            <Image
              src="/npm-placeholder.webp"
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              alt=""
              width={1600}
              height={900}
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800">{npm.title}</h2>
              <p className="text-gray-600 mt-2">{npm.description}</p>

              {/* tags */}
              {/* 
                <div className="flex flex-wrap gap-1 mb-3">
                  {Array(6)
                    .fill(0)
                    .map((_, i) => (
                      <span
                        className="bg-white text-[#0D6EFD] border-[1px] border-[#0D6EFD] text-xs px-2 py-1 rounded-md inline-block"
                        key={i}
                      >
                        #HTML 5
                      </span>
                    ))}
                </div> */}

              <div className="flex gap-1">
                {/* two button here  */}

                <Link
                  href={npm.link}
                  target="_blank"
                  className="bg-[#0D6EFD] text-white px-3 py-2 rounded-md flex items-center text-sm font-bold"
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
                {/* 
                  <button className="bg-white border-[1px] border-[#0D6EFD] text-[#0D6EFD] px-3 py-2 rounded-md flex items-center font-bold">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 496 512"
                      className="mr-1 mt-[2px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                    View Demo
                  </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
