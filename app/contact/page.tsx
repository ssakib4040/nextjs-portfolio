import React from "react";
import { FaGithub, FaFacebook, FaTwitter, FaAt } from "react-icons/fa";
import { AiFillFileText } from "react-icons/ai";
import { Metadata } from "next";

const urls = {
  github: "https://github.com/ssakib4040",
  facebook: "https://www.facebook.com/ssakib4040",
  twitter: "https://twitter.com/ssakib4040",
  mailto: "mailto:ssakib4040@gmail.com",
  cv: "https://drive.google.com/file/d/1ZU5D0XJFrVzwk__eDZZXfg8w0bFxyU5T/view?usp=share_link",
};

export const metadata: Metadata = {
  title: "Contact Me",
};

export default function page() {
  return (
    <div className="h-screen flex justify-center items-center gap-3 flex-wrap">
      <a
        href={urls.github}
        target="_blank"
        title="Github"
        className="text-[#0D6EFD] cursor-pointer bg-white rounded-md shadow-md p-3"
      >
        <FaGithub className="text-6xl" />
      </a>

      <a
        className="text-[#0D6EFD] cursor-pointer bg-white rounded-md shadow-md p-3"
        href={urls.cv}
        title="CV"
        target="_blank"
      >
        <AiFillFileText className="text-6xl" />
      </a>

      <a
        className="text-[#0D6EFD] cursor-pointer bg-white rounded-md shadow-md p-3"
        href={urls.mailto}
        title="Email"
        target="_blank"
      >
        <FaAt className="text-6xl" />
      </a>

      <a
        className="text-[#0D6EFD] cursor-pointer bg-white rounded-md shadow-md p-3"
        href={urls.facebook}
        title="Facebook"
        target="_blank"
      >
        <FaFacebook className="text-6xl" />
      </a>

      <a
        className="text-[#0D6EFD] cursor-pointer bg-white rounded-md shadow-md p-3"
        href={urls.twitter}
        title="Twitter"
        target="_blank"
      >
        <FaTwitter className="text-6xl" />
      </a>
    </div>
  );
}
