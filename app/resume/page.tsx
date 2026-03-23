import React from "react";
import { Metadata } from "next";
import { resumeItems } from "../../static/resume";
import { FaDownload } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Resume",
};

export default function Resume() {
  return (
    <div className="min-h-screen px-6 py-8 lg:px-12 lg:py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fadeIn">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Professional Summary
            </span>
          </div>
          <h1 className="section-title mb-6">My Resume</h1>

          {/* Download Button */}
          <a
            href="https://drive.google.com/file/d/1BSCtHCzQsz7q8NiYfHY2qKOz77nTyyvM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary-modern"
          >
            <FaDownload className="w-4 h-4" />
            Download CV
          </a>
        </div>

        {/* Introduction Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="card-glass p-6 animate-fadeIn">
            <h3 className="text-lg font-bold text-gray-800 mb-3">About Me</h3>
            <p className="text-gray-600 leading-relaxed">
              Hello! My name is Sadman Sakib, and I am a dedicated full-stack
              web developer seeking new opportunities to enhance my skills and
              take my career to the next level.
            </p>
          </div>
          <div
            className="card-glass p-6 animate-fadeIn"
            style={{ animationDelay: "50ms" }}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-3">Approach</h3>
            <p className="text-gray-600 leading-relaxed">
              As someone who is constantly learning and improving, I am excited
              to bring my expertise to a dynamic and challenging work
              environment with diverse and evolving skill sets.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-6">
          {resumeItems.map((item, index) => (
            <div
              key={index}
              className="card-glass p-6 animate-fadeIn"
              style={{ animationDelay: `${(index + 2) * 50}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-800">
                  {item.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pl-4">
                {item.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-start gap-2 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="mt-12 card-glass p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200/50 text-center animate-fadeIn"
          style={{ animationDelay: "300ms" }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Ready to Work Together?
          </h3>
          <p className="text-gray-600 mb-6">
            Let's connect and discuss how I can contribute to your team and
            projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary-modern inline-flex items-center gap-2 justify-center"
            >
              Get In Touch
            </a>
            <a
              href="https://www.linkedin.com/in/ssakib4040/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-modern inline-flex items-center gap-2 justify-center"
            >
              Visit LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
