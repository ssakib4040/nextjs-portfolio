import { shimmer, toBase64 } from "@/utils/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { npmPackageList } from "@/static/npm";

export const metadata: Metadata = {
  title: "NPM Packages",
  description:
    "Open-source NPM packages by Sadman Sakib — utilities, libraries, and tools for React, Next.js, TypeScript, and Node.js development. Free and MIT licensed.",
};

export default function PackagesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          Packages
        </h1>
      </div>

      <Suspense fallback={<SuspenseFallback />}>
        <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 grid-cols-1 gap-6">
          {npmPackageList.map((npm, i) => (
            <div className="bg-white border rounded-md overflow-hidden" key={i}>
              <Image
                src="/npm-placeholder.webp"
                className="object-cover w-full aspect-video"
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475),
                )}`}
                alt=""
                width={1600}
                height={900}
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{npm.title}</h2>
                <p className="text-gray-600 mt-2">{npm.description}</p>

                <div className="flex gap-1 mt-3">
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
                      <path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z" />
                    </svg>
                    View Source
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
}

function SuspenseFallback() {
  return (
    <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 grid-cols-1 gap-6 my-6">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div
            className="bg-gray-200 border rounded-md overflow-hidden animate-pulse h-64"
            key={i}
          />
        ))}
    </div>
  );
}
