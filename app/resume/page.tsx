import React from "react";
import { Metadata } from "next";
import { FaCode } from "react-icons/fa";
import { resumeItems } from "../../static/resume";

export const metadata: Metadata = {
  title: "Resume",
};

export default function Resume() {
  return (
    <div className="lg:px-8 lg:py-12 px-6 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Resume</h1>
      <hr className="mb-8 border-gray-300" />

      {/* Summary Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg mb-10">
        <p className="text-gray-700 mb-3 leading-relaxed">
          Hello! My name is Sadman Sakib, and I am a dedicated full-stack web
          developer seeking new opportunities to enhance my skills and take my
          career to the next level.
        </p>

        <p className="text-gray-700 leading-relaxed">
          As someone who is constantly learning and improving, I am excited to
          bring my expertise to a dynamic and challenging work environment. I
          possess a diverse range of skills across modern web technologies.
        </p>
      </div>

      {/* Skills Sections */}
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
    </div>
  );
}
