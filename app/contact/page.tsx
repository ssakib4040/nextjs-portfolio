import type { Metadata } from "next";
import { AiFillFileText } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const urls = {
  linkedin: "https://www.linkedin.com/in/ssakib4040/",
  github: "https://github.com/ssakib4040",
  twitter: "https://twitter.com/ssakib4040",
  mailto: "mailto:ssakib4040@gmail.com",
  cv: "https://canva.link/9hn5j7x84vjn90t",
};

const socialLinks = [
  { name: "LinkedIn", detail: "View my LinkedIn profile", url: urls.linkedin, icon: FaLinkedin },
  { name: "GitHub", detail: "View my GitHub profile", url: urls.github, icon: FaGithub },
  { name: "Resume", detail: "View my professional resume", url: urls.cv, icon: AiFillFileText },
  { name: "Twitter / X", detail: "View my Twitter / X profile", url: urls.twitter, icon: FaTwitter },
];

export const metadata: Metadata = {
  title: "Contact | Sadman Sakib",
  description:
    "Contact Sadman Sakib, a full-stack Software Developer, for software projects, product collaborations, and professional opportunities.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:px-8 lg:px-8 lg:pt-16">
      <header className="border-b border-gray-200 pb-10">
        <p className="text-base font-semibold text-[#0D6EFD]">Sadman Sakib / Contact</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Let&apos;s build something useful.</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">For software projects, product collaborations, or professional opportunities, you can reach me through the links below.</p>
      </header>

      <section className="mt-10" aria-labelledby="contact-options-heading">
        <h2 id="contact-options-heading" className="sr-only">Contact options</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a href={urls.mailto} className="block rounded-lg border border-blue-200 bg-blue-50 p-6 text-left transition hover:border-blue-300 hover:shadow-md sm:col-span-2"><FiMail className="mb-5 block text-2xl text-[#0D6EFD]" aria-hidden="true" /><div><p className="text-sm font-semibold text-gray-900">Email Sadman</p><p className="mt-1 text-sm text-gray-600">ssakib4040@gmail.com</p></div></a>
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-gray-200 bg-white p-6 text-left transition hover:border-blue-200 hover:shadow-md"><Icon className="mb-5 block text-2xl text-[#0D6EFD]" aria-hidden="true" /><div><p className="text-sm font-semibold text-gray-900">{link.name}</p><p className="mt-1 text-sm text-gray-600">{link.detail}</p></div></a>;
          })}
        </div>
      </section>
    </div>
  );
}
