import { shimmer, toBase64 } from "@/utils/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { FaExternalLinkAlt, FaNpm } from "react-icons/fa";
import { npmPackageList } from "../../static/npm";

export const metadata: Metadata = {
  title: "NPM Package",
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
              Open Source
            </span>
          </div>
          <h1 className="section-title mb-4">NPM Packages</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            I've published several npm packages to help developers build better
            applications. These are open-source projects available for the
            community.
          </p>
        </div>

        {/* Packages Grid */}
        <Suspense fallback={<SuspenseFallback />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {npmPackageList.map((npm, i) => (
              <div
                key={i}
                className="card-glass group overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 animate-fadeIn"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                  <Image
                    src="/npm-placeholder.webp"
                    alt={npm.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    placeholder={`data:image/svg+xml;base64,${toBase64(
                      shimmer(700, 475),
                    )}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    <FaNpm className="w-8 h-8 text-red-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {npm.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {npm.description}
                  </p>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Link
                      href={npm.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary-modern inline-flex items-center gap-2 justify-center w-full"
                    >
                      View Package
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </Link>
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
              <div className="h-10 bg-gray-200 rounded w-full mt-4"></div>
            </div>
          </div>
        ))}
    </div>
  );
}
