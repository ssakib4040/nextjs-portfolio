import Image from "next/image";
import Link from "next/link";
import { shimmer, toBase64 } from "@/utils/utils";

interface Skill {
  name: string;
  image?: string;
}

interface PortfolioCardProps {
  title: string;
  description?: string;
  image: string;
  tags?: Skill[];
  duration?: string;
  sourceUrl?: string;
  sourceLabel?: string;
  demoUrl?: string;
}

export default function PortfolioCard({
  title,
  description,
  image,
  tags,
  duration,
  sourceUrl,
  sourceLabel = "Visit URL",
  demoUrl,
}: PortfolioCardProps) {
  return (
    <div className="bg-white border rounded-md flex flex-col">
      <Image
        src={image}
        alt=""
        width={1600}
        height={1200}
        className="object-fill aspect-video rounded-t-lg"
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      />

      <div className="p-4 flex flex-col h-full">
        <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>

        {description && (
          <p
            className="text-gray-600 text-sm line-clamp-3 mt-0 tooltip text-left"
            title={description}
          >
            {description}
          </p>
        )}

        {duration && (
          <p className="text-gray-600 text-sm mt-2">
            <span className="font-bold">Duration:</span> {duration}
          </p>
        )}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 my-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-white text-[#0D6EFD] border-[1px] border-[#0D6EFD] text-xs px-2 py-1 rounded-md flex gap-1 justify-center items-center"
              >
                {tag.image && (
                  <Image
                    src={tag.image}
                    alt={tag.name}
                    width={20}
                    height={20}
                    className="object-fill"
                  />
                )}
                {tag.name}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex gap-2 flex-wrap">
          {sourceUrl && (
            <Link
              href={sourceUrl}
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
                <path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z" />
              </svg>
              {sourceLabel}
            </Link>
          )}
          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              className="bg-white border-[1px] border-[#0D6EFD] text-[#0D6EFD] px-3 py-2 rounded-lg flex items-center text-sm font-bold justify-center btn min-h-10 h-10"
            >
              View Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
