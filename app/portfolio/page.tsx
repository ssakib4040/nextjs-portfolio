import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="lg:px-8 lg:py-12 px-6 py-8">
      <h1 className=" text-4xl font-bold text-gray-800 ">Portfolio</h1>
      <hr className="my-3 border-gray-600" />

      {/* grid with 4 card */}
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-6 my-6">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <div
              className="bg-white shadow-md rounded-md overflow-hidden"
              key={i}
            >
              <Image
                src="https://dummyimage.com/720x480"
                alt=""
                width={1080}
                height={480}
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800">NPM Package</h2>
                <p className="text-gray-600 mt-2">
                  A simple NPM package to generate a random number.
                </p>
                <a
                  href="https://www.npmjs.com/package/random-number-generator-123"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 mt-4 block"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
