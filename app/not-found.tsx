import Link from "next/link";
import { FiArrowLeft, FiSearch } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6 py-20">
      <section className="w-full max-w-xl text-center" aria-labelledby="not-found-heading">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-[#0D6EFD]"><FiSearch size={28} aria-hidden="true" /></div>
        <p className="mt-6 text-sm font-bold uppercase tracking-wider text-[#0D6EFD]">404 / Page not found</p>
        <h1 id="not-found-heading" className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">This page does not exist.</h1>
        <p className="mx-auto mt-4 max-w-md text-lg leading-8 text-gray-600">The link may be outdated or the page may have moved. You can continue from one of these pages.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/" className="inline-flex items-center gap-2 rounded-md bg-[#0D6EFD] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0b5ed7]">Back to home <FiArrowLeft aria-hidden="true" /></Link><Link href="/work" className="rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">View work</Link><Link href="/resume" className="rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">View resume</Link></div>
      </section>
    </div>
  );
}
