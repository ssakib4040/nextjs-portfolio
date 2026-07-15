import Image from "next/image";
import Link from "next/link";
import { shimmer, toBase64 } from "@/utils/utils";

interface StoreCardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  demoUrl?: string;
  tags?: string[];
}

export default function StoreCard({
  title,
  description,
  image,
  price,
  demoUrl,
  tags,
}: StoreCardProps) {
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

        <p
          className="text-gray-600 text-sm line-clamp-3 mt-0 tooltip text-left"
          title={description}
        >
          {description}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 my-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-white text-[#0D6EFD] border-[1px] border-[#0D6EFD] text-xs px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-2xl font-bold text-gray-800">
            ${price}
          </span>
          <div className="flex gap-2">
            {demoUrl && (
              <Link
                href={demoUrl}
                target="_blank"
                className="bg-white border-[1px] border-[#0D6EFD] text-[#0D6EFD] px-3 py-2 rounded-lg flex items-center text-sm font-bold justify-center btn min-h-10 h-10"
              >
                Preview
              </Link>
            )}
            <button className="bg-[#0D6EFD] text-white px-3 py-2 rounded-lg flex items-center text-sm font-bold justify-center btn min-h-10 h-10">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
