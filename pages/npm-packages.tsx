import Image from "next/image";
import React from "react";

export default function NpmPackages() {
  return (
    <div className="px-8 py-10">
      <h2 className="text-3xl font-medium">NPM Packages</h2>
      <hr className="my-3 border-gray-400 border-1" />

      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cursor-pointer">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((each, index) => {
          return (
            <div
              className="flex flex-col rounded-sm border border-gray-300"
              key={index}
            >
              <Image
                className=""
                src="/npm-logo-placeholder.webp"
                alt="avatar"
                width="720"
                height="480"
              />

              <div className="my-3 mx-4">
                <h3 className="text-xl font-medium mb-3">NPM Package Item</h3>
                <button className="bg-[#0D6EFD] focus:ring-4 transition text-white font-bold py-2 px-4 rounded">
                  Demo
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
