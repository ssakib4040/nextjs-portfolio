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
  },
  {
    name: "GitHub",
    url: urls.github,
    icon: FaGithub,
  },
  {
    name: "Resume",
    url: urls.cv,
    icon: AiFillFileText,
  },
  {
    name: "Email",
    url: urls.mailto,
    icon: FaAt,
  },
  {
    name: "Facebook",
    url: urls.facebook,
    icon: FaFacebook,
  },
  {
    name: "Twitter",
    url: urls.twitter,
    icon: FaTwitter,
  },
];

export const metadata: Metadata = {
  title: "Contact Me",
};

export default function page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-16">
      <div className="max-w-4xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600">
            Connect with me on social media or send an email
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border-2 border-gray-200 hover:border-[#0D6EFD] 
                  rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg
                  transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <Icon
                    className="text-5xl md:text-6xl text-gray-700 group-hover:text-[#0D6EFD] 
                    transform group-hover:scale-110 transition-all duration-300 mb-3"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#0D6EFD] transition-colors duration-300">
                    {link.name}
                  </h3>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
