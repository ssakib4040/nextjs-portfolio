import { shimmer, toBase64 } from "@/utils/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { portfolioList } from "../../static/personal";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Personal Portfolio",
};

export default function page() {
  return (
    <div className="min-h-screen px-6 py-8 lg:px-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fadeIn">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Personal Projects
            </span>
          </div>
          <h1 className="section-title mb-4">Personal Portfolio</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Discover my personal projects showcasing creativity,
            experimentation, and passion for web development. These projects
            demonstrate my continuous learning journey.
          </p>
        </div>

        {/* Portfolio Grid */}
        <Suspense fallback={<SuspenseFallback />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolioList.map((portfolio, i) => (
              <div
                key={i}
                className="card-glass group overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 animate-fadeIn"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                  <Image
                    src={portfolio.image}
                    alt={portfolio.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    placeholder={`data:image/svg+xml;base64,${toBase64(
                      shimmer(700, 475),
                    )}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {portfolio.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                    {portfolio.description}
                  </p>

                  {/* Tags */}
                  {portfolio.tags && portfolio.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {portfolio.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full text-xs font-medium text-gray-700 hover:bg-blue-100 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                      {portfolio.tags.length > 4 && (
                        <span className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full text-xs font-medium text-gray-700">
                          +{portfolio.tags.length - 4} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={portfolio.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary-modern inline-flex items-center gap-2 justify-center text-sm"
                    >
                      <FaGithub className="w-4 h-4" />
                      Source
                    </a>
                    <a
                      href={portfolio.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-secondary-modern inline-flex items-center gap-2 justify-center text-sm"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}

function SuspenseFallback() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div className="card-glass overflow-hidden animate-pulse" key={i}>
            <div className="h-56 bg-gradient-to-r from-gray-200 to-gray-300"></div>
            <div className="p-6 space-y-4">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="flex gap-3">
                <div className="h-10 bg-gray-200 rounded flex-1"></div>
                <div className="h-10 bg-gray-200 rounded flex-1"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
