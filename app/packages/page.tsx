import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowUpRight, FiDownload, FiPackage } from "react-icons/fi";

import { npmPackageList } from "@/static/npm";

export const metadata: Metadata = {
  title: "npm Packages | Sadman Sakib",
  description: "Open-source npm packages by Sadman Sakib for JavaScript, React, and Node.js development.",
};

type DownloadStats = Record<string, { downloads: number }>;

export default async function PackagesPage() {
  const downloadStats = await getDownloadStats();

  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8 lg:px-8 lg:pt-16">
      <header className="border-b border-gray-200 pb-10">
        <p className="text-base font-semibold text-[#0D6EFD]">Sadman Sakib / npm Packages</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Open-source npm packages</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">Utilities, libraries, and developer tools for JavaScript, React, and Node.js projects.</p>
      </header>

      <section className="mt-10" aria-labelledby="package-list-heading">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 id="package-list-heading" className="text-2xl font-bold tracking-tight text-gray-900">
            Published packages
          </h2>
          <p className="text-sm text-gray-500">{npmPackageList.length} packages</p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {npmPackageList.map((npm) => (
            <article
              key={npm.link}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-[#0D6EFD]">
                  <FiPackage size={22} aria-hidden="true" />
                </div>
                <div className="text-right">
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">npm</span>
                  {downloadStats[npm.packageName] && (
                    <p
                      className="mt-3 flex items-center justify-end gap-1 text-xs text-gray-500"
                      aria-label={`${downloadStats[npm.packageName].downloads.toLocaleString("en-US")} downloads last month`}
                    >
                      <><FiDownload size={12} aria-hidden="true" />{formatDownloads(downloadStats[npm.packageName].downloads)} downloads</>
                    </p>
                  )}
                </div>
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">{npm.title}</h3>
              <p className="mt-2 leading-7 text-gray-600">{npm.description}</p>
              <Link
                href={npm.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#0D6EFD] px-3 py-2 text-sm font-bold text-white transition hover:bg-[#0b5ed7]"
              >
                View on npm <FiArrowUpRight aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

async function getDownloadStats(): Promise<DownloadStats> {
  const packageNames = npmPackageList.map((npm) => npm.packageName).join(",");

  try {
    const response = await fetch(`https://api.npmjs.org/downloads/point/last-month/${packageNames}`, { next: { revalidate: 86400 } });

    if (!response.ok) return {};
    return (await response.json()) as DownloadStats;
  } catch {
    return {};
  }
}

function formatDownloads(downloads: number) {
  if (downloads >= 1_000_000) return `${(downloads / 1_000_000).toFixed(1)}m`;
  if (downloads >= 1_000) return `${(downloads / 1_000).toFixed(1)}k`;
  return downloads.toLocaleString("en-US");
}
