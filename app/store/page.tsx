"use client";

import { useState, Suspense } from "react";
import StoreCard from "@/components/store-card";
import { storeProducts } from "@/static/store";

type Category = "templates" | "plugins" | "mobile";

export default function StorePage() {
  const [activeTab, setActiveTab] = useState<Category>("templates");

  const filtered = storeProducts.filter((p) => p.category === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-6 lg:pt-12 pb-20 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Store</h1>
      <p className="mt-2 text-gray-500">
        Premium templates, plugins, and mobile app kits — clean code, ready to
        ship.
      </p>
      <div className="mt-6 flex items-center gap-1">
        <button
          onClick={() => setActiveTab("templates")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            activeTab === "templates"
              ? "bg-[#0D6EFD] text-white"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          Templates
        </button>
        <button
          onClick={() => setActiveTab("plugins")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            activeTab === "plugins"
              ? "bg-[#0D6EFD] text-white"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          Plugins
        </button>
        <button
          onClick={() => setActiveTab("mobile")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            activeTab === "mobile"
              ? "bg-[#0D6EFD] text-white"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          Mobile Templates
        </button>
      </div>

      <Suspense fallback={<SuspenseFallback />}>
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-16 h-16 text-gray-300 mb-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
            <p className="text-gray-500 text-lg font-medium">No products yet</p>
            <p className="text-gray-400 text-sm mt-1">
              Products will appear here once added to the store.
            </p>
          </div>
        ) : (
          <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 grid-cols-1 gap-6 mt-8">
            {filtered.map((product, i) => (
              <StoreCard key={i} {...product} />
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
