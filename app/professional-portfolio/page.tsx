import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import { shimmer, toBase64 } from "@/utils/utils";
import { portfolios, skills } from "../../static/professional";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Professional Portfolio",
};

export default function ProfessionalPage() {
  return (
    <div className="lg:px-8 lg:py-12 px-6 py-8">
      <h1 className=" text-4xl font-bold text-gray-800 ">
        Professional Portfolio
      </h1>
      <hr className="my-3 border-gray-600" />

      {/* grid with 4 card */}
      <Suspense fallback={<SuspenseFallback />}>
        <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 grid-cols-1 gap-6 my-6">
          {portfolios.map((portfolio, i) => {
            const tags = skills.filter((skill) =>
              portfolio.tags?.includes(skill.name),
            );

            return (
              <div className="bg-white border rounded-md flex flex-col" key={i}>
                <Image
                  src={portfolio.image}
                  alt=""
                  width={1600}
                  height={1200}
                  className="object-fill aspect-video rounded-t-lg"
                  placeholder={`data:image/svg+xml;base64,${toBase64(
                    shimmer(700, 475),
                  )}`}
                />
                <hr />

                {/* content */}
                <div className="p-4 flex flex-col h-[-webkit-fill-available]">
                  {/* title */}
                  <h2 className="text-xl font-bold text-gray-800 mb-3">
                    {portfolio.title}
                  </h2>

                  {/* description */}
                  <p
                    className="text-gray-600 text-sm line-clamp-3 mt-0 tooltip text-left"
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
                    {tags?.map((tag, i) => {
                      return (
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
                      );
                    })}
                  </div>

                  {/* links  */}
                  <div className="mt-auto">
                    <Link
                      href={portfolio.source}
                      target="_blank"
                      className="bg-[#0D6EFD] text-white px-3 py-2 rounded-lg flex items-center text-sm font-bold justify-center btn min-h-10 h-10"
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
            );
          })}
        </div>
      </Suspense>
    </div>
  );
}

function SuspenseFallback() {
  return <div className="text-center py-20"></div>;
}
