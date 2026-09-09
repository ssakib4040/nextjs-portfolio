import type { Metadata } from "next";
import { FaBriefcase, FaCode, FaGraduationCap, FaGlobe } from "react-icons/fa";

import { education, languages, resumeItems, workExperience } from "../../static/resume";

export const metadata: Metadata = {
  title: "Resume | Sadman Sakib",
  description:
    "Resume of Sadman Sakib, a full-stack Software Developer with 3.5+ years of experience in React, Next.js, TypeScript, Node.js, AI products, APIs, and automation.",
};

const priorityCategories = new Set(["Frontend", "Backend & Runtime", "Databases & ORMs", "Automation & AI Integration", "Cloud & Deployment"]);

export default function Resume() {
  const primarySkills = resumeItems.filter((item) => priorityCategories.has(item.category));
  const additionalSkills = resumeItems.filter((item) => !priorityCategories.has(item.category));

  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8 lg:px-8 lg:pt-16">
      <header className="border-b border-gray-200 pb-10">
        <p className="text-base font-semibold text-[#0D6EFD]">Sadman Sakib / Resume</p>
        <div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Resume</h1>
            <p className="mt-3 text-xl font-medium text-gray-700">Software Developer</p>
          </div>
          <p className="max-w-md text-sm leading-6 text-gray-600 lg:text-right">
            3.5+ years building production web applications, AI-powered products, APIs, and workflow automation systems.
          </p>
        </div>
      </header>

      <section className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6 sm:p-8" aria-labelledby="summary-heading">
        <h2 id="summary-heading" className="text-xl font-bold text-gray-900">
          Professional Summary
        </h2>
        <p className="mt-4 max-w-4xl leading-7 text-gray-700">
          Full-stack Software Developer experienced in building and maintaining production applications with React, Next.js, TypeScript, Node.js, and modern
          APIs. I work across frontend interfaces, backend services, databases, deployment, third-party integrations, AI product features, and automation
          workflows. Delivered 20+ professional projects across SaaS platforms, recruitment systems, marketplaces, dashboards, and internal tools. Currently
          building Resumely, an AI-powered resume and career platform.
        </p>
      </section>

      <section className="mt-14" aria-labelledby="experience-heading">
        <div className="mb-6 flex items-center gap-3">
          <FaBriefcase className="h-7 w-7 shrink-0 text-[#0D6EFD]" aria-hidden="true" />
          <h2 id="experience-heading" className="text-3xl font-bold tracking-tight text-gray-900">
            Work Experience
          </h2>
        </div>
        <div className="space-y-5">
          {workExperience.map((experience) => (
            <article key={`${experience.company}-${experience.duration}`} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <header className="flex flex-col gap-3 border-b border-gray-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{experience.role}</h3>
                  <p className="mt-1 font-semibold text-[#0D6EFD]">{experience.company}</p>
                </div>
                <p className="text-sm font-medium text-gray-500">{experience.duration}</p>
              </header>
              <ul className="mt-5 space-y-3">
                {experience.description.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-gray-700">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D6EFD]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14" aria-labelledby="skills-heading">
        <div className="mb-6">
          <h2 id="skills-heading" className="flex items-center gap-3 text-3xl font-bold tracking-tight text-gray-900">
            <FaCode className="h-7 w-7 shrink-0 text-[#0D6EFD]" aria-hidden="true" />
            Technical Skills
          </h2>
          <p className="mt-2 text-gray-600">Core technologies and practices used across professional projects.</p>
        </div>
        <div className="space-y-4">
          {primarySkills.map((item) => (
            <SkillGroup key={item.category} category={item.category} skills={item.skills} />
          ))}
        </div>
        <section className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-5 sm:p-6" aria-labelledby="additional-skills-heading">
          <h3 id="additional-skills-heading" className="font-semibold text-gray-800">
            Additional tools and practices
          </h3>
          <div className="mt-5 space-y-4">
            {additionalSkills.map((item) => (
              <SkillGroup key={item.category} category={item.category} skills={item.skills} />
            ))}
          </div>
        </section>
      </section>

      <div className="mt-14 grid gap-10 border-t border-gray-200 pt-10 md:grid-cols-2">
        <section aria-labelledby="education-heading">
          <div className="mb-5 flex items-center gap-3">
            <FaGraduationCap className="h-7 w-7 shrink-0 text-[#0D6EFD]" aria-hidden="true" />
            <h2 id="education-heading" className="text-2xl font-bold text-gray-900">
              Education
            </h2>
          </div>
          <div className="space-y-4">
            {education.map((item) => (
              <article key={item.degree} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="font-bold text-gray-900">{item.degree}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.school}</p>
                <p className="mt-3 text-sm font-medium text-gray-600">GPA: {item.gpa}</p>
              </article>
            ))}
          </div>
        </section>
        <section aria-labelledby="languages-heading">
          <div className="mb-5 flex items-center gap-3">
            <FaGlobe className="h-7 w-7 shrink-0 text-[#0D6EFD]" aria-hidden="true" />
            <h2 id="languages-heading" className="text-2xl font-bold text-gray-900">
              Languages
            </h2>
          </div>
          <div className="space-y-4">
            {languages.map((item) => (
              <article key={item.name} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="font-bold text-gray-900">{item.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.proficiency}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function SkillGroup({ category, skills }: { category: string; skills: string[] }) {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-5 sm:p-6" aria-labelledby={`skill-${category}`}>
      <h3 id={`skill-${category}`} className="text-lg font-bold text-gray-900">
        {category}
      </h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm text-gray-700">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
