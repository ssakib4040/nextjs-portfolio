import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaAt,
  FaLinkedin,
} from "react-icons/fa";
import { AiFillFileText } from "react-icons/ai";
import { Metadata } from "next";

const urls = {
  linkedin: "https://www.linkedin.com/in/ssakib4040/",
  github: "https://github.com/ssakib4040",
  facebook: "https://www.facebook.com/ssakib4040",
  twitter: "https://twitter.com/ssakib4040",
  mailto: "mailto:ssakib4040@gmail.com",
  cv: "https://drive.google.com/file/d/1BSCtHCzQsz7q8NiYfHY2qKOz77nTyyvM/view?usp=sharing",
};

const socialLinks = [
  {
    name: "LinkedIn",
    url: urls.linkedin,
    icon: FaLinkedin,
    color: "from-blue-600 to-blue-400",
    description: "Connect with me on LinkedIn"
  },
  {
    name: "GitHub",
    url: urls.github,
    icon: FaGithub,
    color: "from-gray-800 to-gray-600",
    description: "Check out my code and projects"
  },
  {
    name: "Resume",
    url: urls.cv,
    icon: AiFillFileText,
    color: "from-red-600 to-pink-600",
    description: "Download my CV"
  },
  {
    name: "Email",
    url: urls.mailto,
    icon: FaAt,
    color: "from-purple-600 to-purple-400",
    description: "Send me an email"
  },
  {
    name: "Facebook",
    url: urls.facebook,
    icon: FaFacebook,
    color: "from-blue-700 to-blue-500",
    description: "Following me on Facebook"
  },
  {
    name: "Twitter",
    url: urls.twitter,
    icon: FaTwitter,
    color: "from-sky-500 to-sky-400",
    description: "Follow me on Twitter"
  },
];

export const metadata: Metadata = {
  title: "Contact Me",
};

export default function page() {
  return (
    <div className="min-h-screen px-6 py-8 lg:px-12 lg:py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Get In Touch</span>
            <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </div>
          <h1 className="section-title mb-4">Let's Connect</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any of these channels!
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("mailto") ? undefined : "_blank"}
                rel={link.url.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="card-glass group overflow-hidden hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`bg-gradient-to-br ${link.color} h-32 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
                  <Icon className="w-16 h-16 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10" />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {link.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="mt-16 card-glass p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200/50 text-center animate-fadeIn" style={{ animationDelay: "350ms" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Always Open to Opportunities
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            Whether you have a question, project proposal, or just want to say hello, my inbox is always open. I'll try my best to get back to you ASAP!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:ssakib4040@gmail.com" className="btn-primary-modern">
              Send Me an Email
            </a>
            <a href="/" className="btn-secondary-modern">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
