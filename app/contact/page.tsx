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
  cv: "https://drive.google.com/file/d/1KJ0W2y--tv3nVN-FniCbVxXewbwKthnw/view?usp=sharing",
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
  title: "Contact",
  description:
    "Get in touch with Sadman Sakib — software engineer and full-stack developer. Available for freelance projects, collaborations, and consulting. Find me on LinkedIn, GitHub, Twitter, or email.",
};

export default function page() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-6 lg:pt-12 pb-20 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
        Contact
      </h1>
      <p className="mt-2 text-gray-500">
        Reach out for projects, collabs, or just to say hi.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 text-center hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <Icon className="text-4xl text-gray-400 group-hover:text-[#0D6EFD] transition-colors mx-auto mb-3" />
                <p className="text-sm font-semibold text-gray-800 group-hover:text-[#0D6EFD] transition-colors">
                  {link.name}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
