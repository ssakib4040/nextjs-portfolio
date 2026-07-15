"use client";

import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const typeAnimationSequence = [
  "I build full-stack apps with Next.js & TypeScript",
  2000,
  "I ship AI-powered SaaS platforms",
  2000,
  "I automate workflows with Make.com & N8N",
  2000,
  "I create production-ready UIs with Tailwind & Shadcn",
  2000,
];

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start pt-20 pb-16 sm:justify-center sm:py-0 px-6">
      {/* Subtle background dots */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0D6EFD 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Main Content */}
      <div className="text-center max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new projects
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r text-blue-600">Sadman Sakib</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-500 font-normal max-w-xl mx-auto leading-relaxed">
          Software Engineer with{" "}
          <span className="font-semibold text-gray-800">3+ years</span> of
          experience building modern web applications
        </p>

        {/* Animated Description */}
        <div className="mt-6 min-h-14 md:min-h-16">
          <TypeAnimation
            sequence={typeAnimationSequence}
            speed={30}
            repeat={Infinity}
            className="text-lg sm:text-xl md:text-2xl font-semibold !text-blue-500"
          />
        </div>

        {/* CTA Buttons */}
        <div className="lg:mt-10 mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/work"
            className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900/20 transition-all duration-300 text-center"
          >
            View My Work
          </Link>
          <Link
            href="/store"
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300 text-center"
          >
            Browse Store
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm transition-all duration-300 text-center"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-20 w-full max-w-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 text-center hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <p className="text-4xl font-bold text-gray-900 tracking-tight">
                20<span className="text-blue-600">+</span>
              </p>
              <p className="mt-1.5 text-sm font-medium text-gray-500">
                Projects Delivered
              </p>
            </div>
          </div>

          <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 text-center hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <p className="text-4xl font-bold text-gray-900 tracking-tight">
                3<span className="text-blue-600">+</span>
              </p>
              <p className="mt-1.5 text-sm font-medium text-gray-500">
                Years Experience
              </p>
            </div>
          </div>

          <div className="group relative bg-white border border-gray-100 rounded-2xl p-6 text-center hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <p className="text-4xl font-bold text-gray-900 tracking-tight">
                Full-Stack
              </p>
              <p className="mt-1.5 text-sm font-medium text-gray-500">
                Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
