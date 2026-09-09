"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

import { portfolioList } from "@/static/personal";
import { portfolios, skills } from "@/static/professional";

type Tab = "professional" | "personal";

const featuredProfessional = portfolios.slice(0, 6);
const additionalProfessional = portfolios.slice(6);

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState<Tab>("professional");

  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8 lg:px-8 lg:pt-16">
      <header className="border-b border-gray-200 pb-10">
        <p className="text-base font-semibold text-[#0D6EFD]">Sadman Sakib / Work</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Selected work and projects</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          Production web applications, AI platforms, automation systems, and personal experiments built with modern full-stack technologies.
        </p>
      </header>

      <div className="mt-8 flex gap-1 border-b border-gray-200" role="tablist" aria-label="Project type">
        <button
          id="professional-tab"
          type="button"
          role="tab"
          aria-selected={activeTab === "professional"}
          aria-controls="professional-projects"
          onClick={() => setActiveTab("professional")}
          className={`rounded-t-md px-4 py-3 text-sm font-semibold transition ${activeTab === "professional" ? "border-b-2 border-[#0D6EFD] text-[#0D6EFD]" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"}`}
        >
          Professional work
        </button>
        <button
          id="personal-tab"
          type="button"
          role="tab"
          aria-selected={activeTab === "personal"}
          aria-controls="personal-projects"
          onClick={() => setActiveTab("personal")}
          className={`rounded-t-md px-4 py-3 text-sm font-semibold transition ${activeTab === "personal" ? "border-b-2 border-[#0D6EFD] text-[#0D6EFD]" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"}`}
        >
          Personal projects
        </button>
      </div>

      {activeTab === "professional" ? (
        <section id="professional-projects" role="tabpanel" aria-labelledby="professional-tab" aria-label="Professional projects" className="pt-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-[#0D6EFD]">Featured professional work</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Projects with production experience.</h2>
            </div>
            <p className="text-sm text-gray-500">{portfolios.length} projects</p>
          </div>
          <div className="space-y-6">
            {featuredProfessional.map((project) => (
              <FeaturedProject key={project.title} project={project} />
            ))}
          </div>
          <div className="mt-16 border-t border-gray-200 pt-10">
            <p className="text-sm font-semibold text-[#0D6EFD]">Additional professional work</p>
            <div className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
              {additionalProfessional.map((project) => (
                <CompactProject key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section id="personal-projects" role="tabpanel" aria-labelledby="personal-tab" aria-label="Personal projects" className="pt-10">
          <div className="mb-6">
            <p className="text-sm font-semibold text-[#0D6EFD]">Personal projects</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Personal projects and side builds.</h2>
          </div>
          <div className="space-y-4">
            {portfolioList.map((project) => (
              <CompactPersonalProject key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function FeaturedProject({ project }: { project: (typeof portfolios)[number] }) {
  const [name, type] = project.title.split(" - ");
  const visibleSkills = project.tags?.slice(0, 4).map((tag) => skills.find((skill) => skill.name === tag)?.name || tag) || [];
  const isPrivate = project.source === "#";

  return (
    <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm md:flex">
      <div className="relative aspect-video w-full bg-gray-100 md:aspect-auto md:min-h-[250px] md:w-2/5">
        <Image src={project.image} alt={`${name} project preview`} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{type || "Professional project"}</p>
            <h3 className="mt-2 text-2xl font-bold text-gray-900">{name}</h3>
          </div>
          <span className="shrink-0 text-xs text-gray-500">{project.duration}</span>
        </div>
        <p className="mt-4 max-w-2xl leading-7 text-gray-600">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {visibleSkills.map((skill) => (
            <span key={skill} className="rounded-md bg-gray-50 px-2.5 py-1.5 text-xs font-medium text-gray-700">
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          {isPrivate ? (
            <span
              title="Live URL is not available for this project"
              className="inline-flex cursor-not-allowed items-center rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-500"
            >
              Private client project
            </span>
          ) : (
            <Link
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#0D6EFD] px-3 py-2 text-sm font-semibold text-white hover:bg-[#0b5ed7]"
            >
              Visit {name} <FiArrowUpRight aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

function CompactProject({ project }: { project: (typeof portfolios)[number] }) {
  const [name, type] = project.title.split(" - ");
  const isPrivate = project.source === "#";
  return (
    <article className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
      <div className="flex min-w-0 items-center gap-4">
        <div className="relative h-14 w-24 shrink-0 overflow-hidden rounded-md bg-gray-100">
          <Image src={project.image} alt={`${name} project preview`} fill sizes="96px" className="object-cover" />
        </div>
        <div className="min-w-0">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="mt-1 text-sm text-gray-500">
          {type || "Professional project"} <span className="px-2 text-gray-300">/</span> {project.duration}
        </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        {isPrivate ? (
          <span title="Live URL is not available for this project" className="text-sm font-medium text-gray-400">
            Private client project
          </span>
        ) : (
          <Link
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#0D6EFD] hover:underline"
          >
            Visit project <FiArrowUpRight aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}

function CompactPersonalProject({ project }: { project: (typeof portfolioList)[number] }) {
  return (
    <article className="flex flex-col gap-4 border-b border-gray-200 py-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
      <div className="flex min-w-0 items-center gap-4">
        <div className="relative h-14 w-24 shrink-0 overflow-hidden rounded-md bg-gray-100">
          <Image src={project.image} alt={`${project.title} project preview`} fill sizes="96px" className="object-cover" />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-600">{project.description}</p>
        </div>
      </div>
      <div className="flex shrink-0 gap-3">
        <Link
          href={project.source}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#0D6EFD] hover:underline"
        >
          <FiGithub aria-hidden="true" /> Source
        </Link>
        <Link
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-gray-900"
        >
          Demo <FiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
