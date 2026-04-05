import React from "react";
import { Metadata } from "next";
import { FaBriefcase, FaGraduationCap, FaGlobe } from "react-icons/fa";
import {
  resumeItems,
  workExperience,
  education,
  languages,
} from "../../static/resume";

export const metadata: Metadata = {
  title: "Resume",
};

export default function Resume() {
  return (
    <div className="lg:px-8 lg:py-12 px-6 py-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-800">Resume</h1>
      <hr className="my-3 border-gray-600 mb-6" />

      {/* Professional Summary Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          Professional Summary
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Full-stack Software Engineer with 3+ years of experience building
          scalable, production-ready applications using Next.js, Node.js, React,
          and TypeScript. Specialized in developing AI-based platforms and
          automation workflows (N8N, Make.com). Delivered 20+ professional
          projects across SaaS platforms, dashboards, and automation systems.
          Passionate about clean code, performance optimization, and delivering
          user-focused solutions.
        </p>
      </div>

      {/* Work Experience Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <FaBriefcase className="text-blue-600 text-2xl" />
          <h2 className="text-3xl font-bold text-gray-800">Work Experience</h2>
        </div>

        <div className="space-y-6">
          {workExperience.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {exp.role}
                  </h3>
                  <p className="text-blue-600 font-semibold">{exp.company}</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-700 flex gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Languages Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Education */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <FaGraduationCap className="text-blue-600 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Education</h2>
          </div>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4"
              >
                <h3 className="font-bold text-gray-800">{edu.degree}</h3>
                <p className="text-gray-600 text-sm mb-2">{edu.school}</p>
                <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                  GPA: {edu.gpa}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <FaGlobe className="text-blue-600 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Languages</h2>
          </div>

          <div className="space-y-4">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4"
              >
                <h3 className="font-bold text-gray-800">{lang.name}</h3>
                <p className="text-gray-600 text-sm">{lang.proficiency}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Technical Skills Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Technical Skills
        </h2>
        <div className="space-y-6">
          {resumeItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-800">
                  {item.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
