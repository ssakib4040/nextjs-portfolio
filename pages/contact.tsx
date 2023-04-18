import { FaGithub, FaFacebook, FaTwitter, FaAt } from "react-icons/fa";

export default function Contact() {
  const urls = {
    github: "https://github.com/ssakib4040",
    facebook: "https://www.facebook.com/ssakib4040/",
    twitter: "https://twitter.com/ssakib4040",
    mailto: "mailto:ssakib4040@gmail.com",
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <a
        href={urls.github}
        target="_blank"
        className="text-[#0D6EFD] cursor-pointer mx-2"
      >
        <FaGithub className="text-6xl" />
      </a>

      <a
        className="text-[#0D6EFD] cursor-pointer mx-2"
        href={urls.facebook}
        target="_blank"
      >
        <FaFacebook className="text-6xl" />
      </a>

      <a
        className="text-[#0D6EFD] cursor-pointer mx-2"
        href={urls.twitter}
        target="_blank"
      >
        <FaTwitter className="text-6xl" />
      </a>

      <a
        className="text-[#0D6EFD] cursor-pointer mx-2"
        href={urls.mailto}
        target="_blank"
      >
        <FaAt className="text-6xl" />
      </a>
    </div>
  );
}
