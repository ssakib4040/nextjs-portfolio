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
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Main Content */}
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-3">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Sadman Sakib
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-4">
          Software Engineer with{" "}
          <span className="font-bold text-blue-600">3+ years</span> of
          experience
        </p>

        {/* Animated Description */}
        <TypeAnimation
          sequence={typeAnimationSequence}
          speed={40}
          repeat={Infinity}
          className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent min-h-16 flex items-center justify-center"
        />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Link
          href="/professional-portfolio"
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          View My Work
        </Link>
        <Link
          href="/resume"
          className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300"
        >
          View My Resume
        </Link>
        <Link
          href="/contact"
          className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300"
        >
          Get In Touch
        </Link>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-6 mt-16 text-center">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-3xl font-bold text-blue-600">20+</p>
          <p className="text-gray-600 text-sm">Projects Delivered</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-3xl font-bold text-blue-600">3+</p>
          <p className="text-gray-600 text-sm">Years Experience</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-3xl font-bold text-blue-600">Full-Stack</p>
          <p className="text-gray-600 text-sm">Developer</p>
        </div>
      </div>
    </div>
  );
}
