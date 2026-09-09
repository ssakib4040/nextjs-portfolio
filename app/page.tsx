import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

import { portfolios } from "@/static/professional";

const featuredWork = [
  { label: "AI RECRUITMENT", title: "KlearSkill", description: "Candidate screening and hiring workflows for modern teams.", image: "/projects/professional/klearskill.png", href: portfolios[0]?.source || "#" },
  { label: "AI PRODUCT", title: "Teez", description: "An assistant and automation suite built around useful AI tools.", image: "/projects/professional/teez.png", href: "#" },
  { label: "COMMERCE", title: "Swapshop", description: "A multi-platform marketplace with a full-stack foundation.", image: "/projects/professional/swapshop.png", href: "#" },
];

const stack = ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "NestJS", "PostgreSQL", "MongoDB", "Redis", "Docker", "Azure", "OpenAI", "Claude", "n8n", "Make.com"];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-semibold text-[#0D6EFD]">Sadman Sakib / Software Developer</p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl">I build software that does real work.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">Full-stack software developer with 3.5+ years of professional experience building web applications, AI-powered products, APIs, and automation systems.</p>
              <div className="mt-8 flex flex-wrap gap-3"><Link href="/work" className="inline-flex items-center gap-2 rounded-md bg-[#0D6EFD] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0b5ed7]">Explore selected work <FiArrowUpRight aria-hidden="true" /></Link><Link href="/contact" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">Start a conversation <FiMail aria-hidden="true" /></Link></div>
              <div className="mt-8 flex gap-5 text-gray-500" aria-label="Social links"><a className="transition hover:text-[#0D6EFD]" href="https://github.com/ssakib4040" aria-label="GitHub"><FiGithub size={19} /></a><a className="transition hover:text-[#0D6EFD]" href="https://www.linkedin.com/in/ssakib4040/" aria-label="LinkedIn"><FiLinkedin size={19} /></a><a className="transition hover:text-[#0D6EFD]" href="https://twitter.com/ssakib4040" aria-label="Twitter / X"><FaXTwitter size={17} /></a></div>
            </div>
            <aside className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8" aria-label="Current product"><div className="flex items-center justify-between"><p className="text-xs font-bold uppercase tracking-wider text-gray-500">Currently building</p><span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">Active product</span></div><h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900">Resumily</h2><p className="mt-3 text-base leading-7 text-gray-600">An AI-powered resume and career platform that helps people present their work clearly.</p><a href="https://resumily.live" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0D6EFD] hover:underline">Visit resumily.live <FiArrowUpRight aria-hidden="true" /></a><div className="mt-8 flex gap-6 border-t border-gray-200 pt-5"><div><p className="text-xl font-bold text-gray-900">3.5+</p><p className="mt-1 text-xs text-gray-500">Years experience</p></div><div><p className="text-xl font-bold text-gray-900">20+</p><p className="mt-1 text-xs text-gray-500">Projects shipped</p></div></div></aside>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-8 lg:py-24">
        <section className="flex flex-col gap-8 border-b border-gray-200 pb-16 lg:flex-row lg:gap-24 lg:pb-20"><div className="shrink-0 lg:w-1/3"><p className="text-sm font-semibold text-[#0D6EFD]">What I work on</p><h2 className="mt-3 max-w-md text-3xl font-bold tracking-tight text-gray-900">From interface to infrastructure.</h2></div><div className="flex flex-1 flex-col divide-y divide-gray-200"><div className="flex flex-col gap-2 py-5 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between"><p className="text-lg font-semibold text-gray-900">Product interfaces</p><p className="max-w-md text-sm leading-6 text-gray-600 sm:text-right">Clear, responsive frontend experiences with React, Next.js, and TypeScript.</p></div><div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between"><p className="text-lg font-semibold text-gray-900">Backend systems</p><p className="max-w-md text-sm leading-6 text-gray-600 sm:text-right">APIs, authentication, databases, integrations, and deployment that hold up in production.</p></div><div className="flex flex-col gap-2 py-5 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between"><p className="text-lg font-semibold text-gray-900">AI and automation</p><p className="max-w-md text-sm leading-6 text-gray-600 sm:text-right">Useful AI features and connected workflows using OpenAI, Claude, n8n, and Make.com.</p></div></div></section>

        <section className="py-16 lg:py-20" aria-labelledby="work-heading"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-semibold text-[#0D6EFD]">Selected work</p><h2 id="work-heading" className="mt-3 text-3xl font-bold tracking-tight text-gray-900">A few things I have shipped.</h2></div><Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D6EFD] hover:underline">View all work <FiArrowUpRight aria-hidden="true" /></Link></div><div className="mt-8 divide-y divide-gray-200 border-y border-gray-200">{featuredWork.map((project) => <article key={project.title} className="group flex flex-col gap-6 py-7 md:flex-row md:items-center md:gap-10"><div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-gray-100 md:w-2/5"><Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover transition duration-300 group-hover:scale-105" /></div><div className="flex flex-1 items-start justify-between gap-6"><div><p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{project.label}</p><h3 className="mt-3 text-2xl font-bold text-gray-900">{project.title}</h3><p className="mt-2 max-w-md text-sm leading-6 text-gray-600">{project.description}</p></div><a href={project.href} className="mt-1 shrink-0 text-[#0D6EFD]" aria-label={`Open ${project.title}`}><FiArrowUpRight size={22} /></a></div></article>)}</div></section>

        <section className="flex flex-col gap-8 border-t border-gray-200 pt-10 lg:flex-row lg:gap-24" aria-labelledby="stack-heading"><div className="shrink-0 lg:w-1/3"><p className="text-sm font-semibold text-[#0D6EFD]">Technical focus</p><h2 id="stack-heading" className="mt-3 text-3xl font-bold tracking-tight text-gray-900">The tools behind the work.</h2></div><div className="flex flex-1 flex-wrap content-start gap-2">{stack.map((item) => <span key={item} className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700">{item}</span>)}</div></section>
      </main>
    </div>
  );
}
