import Image from "next/image";
import React from "react";

export default function NpmPackages() {
  const npmPackages = [
    {
      name: "Imposter.js",
      link: "https://www.npmjs.com/package/imposterjs",
      desc: "An npm package to generate fake/dummy data for testing purposes.",
    },

    {
      name: "React Dark State",
      link: "https://www.npmjs.com/package/react-dark-state",
      desc: "React Dark State a custom react hook to detect dark mode",
    },

    {
      name: "Mongodb Backup Toolkit",
      link: "https://www.npmjs.com/package/mongodb-backup-toolkit",
      desc: "Node.js library to easily backup and restore MongoDB databases using Mongoose and the filesystem module.",
    },

    {
      name: "Rude Filter",
      link: "https://www.npmjs.com/package/rude-filter",
      desc: "A simple module that filters rude words from a given text.",
    },

    {
      name: "Img Validation",
      link: "https://www.npmjs.com/package/img-validation",
      desc: "ImgValidation a package to validate image.",
    },

    {
      name: "Mongoose Error Beautify",
      link: "https://www.npmjs.com/package/mongoose-error-beautify",
      desc: "A package to simplify mongoose error messages",
    },

    {
      name: "Math Dumb",
      link: "https://www.npmjs.com/package/math-dumb",
      desc: "This is a simple math nodejs package/module to perform basic math operations.",
    },

    {
      name: "Is Leap",
      link: "https://www.npmjs.com/package/is-leap",
      desc: "A simple lightweight module to detect leap year.",
    },
  ];

  return (
    <div className="px-8 py-10">
      <h2 className="text-3xl font-medium">NPM Packages</h2>
      <hr className="my-3 border-gray-400 border-1" />

      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {npmPackages.map((_package, index) => {
          return (
            <div
              className="flex flex-col rounded-sm border border-gray-300 cursor-pointer"
              key={index}
              onClick={() => window.open(_package.link, "_blank")}
            >
              <Image
                className=""
                src="/npm-logo-placeholder.webp"
                alt="avatar"
                width="720"
                height="480"
              />

              <div className="my-3 mx-4">
                <h3 className="text-xl font-medium mb-3">{_package.name}</h3>
                <p className="mb-3 text-gray-600">{_package.desc}</p>
                <div className="flex">
                  <a
                    href={_package.link}
                    target="_blank"
                    className="bg-[#0D6EFD] flex focus:ring-4 transition text-white font-bold py-2 px-4 rounded"
                  >
                    Link
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
