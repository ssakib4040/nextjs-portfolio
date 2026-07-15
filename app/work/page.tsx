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
          }
      ) || []
    );
  }

  return (
    <div className="lg:px-8 lg:py-12 px-6 py-8">
      <h1 className="lg:text-4xl text-2xl font-bold text-gray-800">Work</h1>
      <hr className="my-3 border-gray-600" />

      <div role="tablist" className="tabs tabs-bordered my-6">
        <button
          role="tab"
          className={`tab ${activeTab === "professional" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("professional")}
        >
          Professional
        </button>
        <button
          role="tab"
          className={`tab ${activeTab === "personal" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("personal")}
        >
          Personal
        </button>
      </div>

      <Suspense fallback={<SuspenseFallback />}>
        {activeTab === "professional" ? (
          <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 grid-cols-1 gap-6 my-6">
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
          <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 grid-cols-1 gap-6 my-6">
            {portfolioList.map((portfolio, i) => (
              <PortfolioCard
                key={i}
                title={portfolio.title}
                description={portfolio.description}
                image={portfolio.image}
                tags={
                  portfolio.tags?.map((t) => ({ name: t })) || []
                }
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
