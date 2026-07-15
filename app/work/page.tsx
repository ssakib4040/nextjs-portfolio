"use client";

import { useState, Suspense } from "react";
import PortfolioCard from "@/components/portfolio-card";
import { portfolios } from "@/static/professional";
import { portfolioList } from "@/static/personal";
import { skills } from "@/static/professional";

type Tab = "professional" | "personal";

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState<Tab>("professional");

  function getPortfolioTags(tagNames: string[] | undefined) {
    return (
      tagNames?.map(
        (tagName) =>
          skills.find((skill) => skill.name === tagName) || {
            name: tagName,
            image: undefined,
          },
      ) || []
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pt-6 lg:pt-12 pb-20 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Work</h1>
      <p className="mt-2 text-gray-500">
        Professional projects and side experiments I&apos;ve built over the
        years.
      </p>

      <div className="mt-6 flex items-center gap-1">
        <button
          onClick={() => setActiveTab("professional")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            activeTab === "professional"
              ? "bg-[#0D6EFD] text-white"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          Professional
        </button>
        <button
          onClick={() => setActiveTab("personal")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            activeTab === "personal"
              ? "bg-[#0D6EFD] text-white"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          Personal
        </button>
      </div>

      <Suspense fallback={<SuspenseFallback />}>
        {activeTab === "professional" ? (
          <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 grid-cols-1 gap-6 mt-6">
            {portfolios.map((portfolio, i) => (
              <PortfolioCard
                key={i}
                title={portfolio.title}
                description={portfolio.description}
                image={portfolio.image}
                tags={getPortfolioTags(portfolio.tags)}
                duration={portfolio.duration}
                sourceUrl={portfolio.source}
                sourceLabel="Visit URL"
              />
            ))}
          </div>
        ) : (
          <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 grid-cols-1 gap-6 mt-6">
            {portfolioList.map((portfolio, i) => (
              <PortfolioCard
                key={i}
                title={portfolio.title}
                description={portfolio.description}
                image={portfolio.image}
                tags={portfolio.tags?.map((t) => ({ name: t })) || []}
                sourceUrl={portfolio.source}
                sourceLabel="View Source"
                demoUrl={portfolio.demo}
              />
            ))}
          </div>
        )}
      </Suspense>
    </div>
  );
}

function SuspenseFallback() {
  return (
    <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 grid-cols-1 gap-6 mt-8">
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
