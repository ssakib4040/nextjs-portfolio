"use client";

import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const typeAnimationSequence = [
  "I build scalable full-stack applications",
  1000,
  "I develop AI-based platforms",
  1000,
  "I create automation workflows",
  1000,
  "I write clean, production-ready code",
  1000,
];

export default function Home() {
  useEffect(() => {
    document.title = "Home Page";
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start px-5 pt-16 pb-9 md:justify-center md:px-4 md:py-0">
      {/* Main Content */}
      <div className="w-full max-w-sm text-center md:mb-8 md:max-w-none">
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-800 sm:text-5xl md:mb-3 md:text-6xl md:leading-none">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Sadman Sakib
          </span>
        </h1>

        <p className="mb-5 text-base text-gray-600 sm:text-lg md:mb-4 md:text-xl">
          Software Engineer with{" "}
          <span className="font-bold text-blue-600">3+ years</span> of
          experience
        </p>

        {/* Animated Description */}
        <TypeAnimation
          sequence={typeAnimationSequence}
          speed={40}
          repeat={Infinity}
          className="flex min-h-12 items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-lg font-semibold leading-snug text-transparent sm:text-xl md:min-h-16 md:text-2xl"
        />
      </div>

      {/* CTA Buttons */}
      <div className="mt-8 flex w-full max-w-xs flex-col gap-3 md:w-auto md:max-w-none md:flex-row md:gap-4">
        <Link
          href="/professional-portfolio"
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg text-center hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          View My Work
        </Link>
        <Link
          href="/resume"
          className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg text-center hover:bg-blue-50 hover:scale-105 transition-all duration-300"
        >
          View My Resume
        </Link>
        <Link
          href="/contact"
          className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-800 font-semibold rounded-lg text-center hover:bg-gray-50 hover:scale-105 transition-all duration-300"
        >
          Get In Touch
        </Link>
      </div>

      {/* Stats Section */}
      <div className="mt-10 grid w-full max-w-xs grid-cols-1 gap-4 text-center sm:max-w-2xl sm:grid-cols-3 md:mt-16 md:w-auto md:max-w-none md:gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-2xl font-bold text-blue-600 md:text-3xl">20+</p>
          <p className="text-gray-600 text-sm">Projects Delivered</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-2xl font-bold text-blue-600 md:text-3xl">3+</p>
          <p className="text-gray-600 text-sm">Years Experience</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-2xl font-bold text-blue-600 md:text-3xl">
            Full-Stack
          </p>
          <p className="text-gray-600 text-sm">Developer</p>
        </div>
      </div>
    </div>
  );
}
