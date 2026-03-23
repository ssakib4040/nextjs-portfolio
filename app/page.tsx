"use client";

import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const typeAnimationSequence = [
  "I am a web developer",
  1000,
  "I am a front-end developer",
  1000,
  "I am a back-end developer",
  1000,
  "I am a full stack developer",
  1000,
];

export default function Home() {
  useEffect(() => {
    document.title = "Home Page";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
        {/* Greeting Badge */}
        <div className="flex justify-center">
          <div className="badge-modern">
            <span className="text-xs">👋 Welcome to my portfolio</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm{" "}
            <span className="gradient-text">MD Sadman Sakib</span>
          </h1>

          {/* Typing Animation */}
          <div className="h-12 md:h-14 flex items-center justify-center">
            <TypeAnimation
              sequence={typeAnimationSequence}
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          I craft beautiful, scalable web applications using modern technologies. Passionate about building exceptional digital experiences and solving complex problems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link href="/professional-portfolio" className="btn-primary-modern flex items-center gap-2 justify-center">
            View My Work <FaArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/contact" className="btn-secondary-modern flex items-center gap-2 justify-center">
            Get in Touch
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-8">
          <a
            href="https://github.com/ssakib4040"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-200/30 flex items-center justify-center text-blue-600 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white hover:shadow-lg transition-all duration-300"
            title="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/ssakib4040/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-200/30 flex items-center justify-center text-blue-600 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white hover:shadow-lg transition-all duration-300"
            title="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:ssakib4040@gmail.com"
            className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-200/30 flex items-center justify-center text-blue-600 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white hover:shadow-lg transition-all duration-300"
            title="Email"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}
