import { FaGithub, FaFacebook, FaTwitter, FaAt } from "react-icons/fa";

import { AiFillFileText } from "react-icons/ai";

export default function Contact() {
  const urls = {
    github: "https://github.com/ssakib4040",
    facebook: "https://www.facebook.com/ssakib4040/",
    twitter: "https://twitter.com/ssakib4040",
    mailto: "mailto:ssakib4040@gmail.com",
    cv: "https://drive.google.com/file/d/1ZU5D0XJFrVzwk__eDZZXfg8w0bFxyU5T/view?usp=share_link",
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <a
        href={urls.github}
        target="_blank"
        title="Github"
        className="text-[#0D6EFD] cursor-pointer mx-2"
      >
        <FaGithub className="text-6xl" />
      </a>

      <a
        className="text-[#0D6EFD] cursor-pointer mx-2"
        href={urls.cv}
        title="CV"
        target="_blank"
      >
        <AiFillFileText className="text-6xl" />
      </a>

      <a
        className="text-[#0D6EFD] cursor-pointer mx-2"
        href={urls.mailto}
        title="Email"
        target="_blank"
      >
        <FaAt className="text-6xl" />
      </a>

      <a
        className="text-[#0D6EFD] cursor-pointer mx-2"
        href={urls.facebook}
        title="Facebook"
        target="_blank"
      >
        <FaFacebook className="text-6xl" />
      </a>

      <a
        className="text-[#0D6EFD] cursor-pointer mx-2"
        href={urls.twitter}
        title="Twitter"
        target="_blank"
      >
        <FaTwitter className="text-6xl" />
      </a>
    </div>
  );
}
