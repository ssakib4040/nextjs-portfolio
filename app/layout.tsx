import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/header";

import "./globals.scss";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ssakib.me"),
  title: {
    default: "Sadman Sakib — Software Engineer & Full-Stack Developer",
    template: "%s — Sadman Sakib",
  },
  description:
    "Full-stack software engineer specializing in Next.js, TypeScript, AI-powered SaaS platforms, automation workflows, and premium TailwindCSS templates. 3+ years of experience building scalable web applications.",
  keywords: [
    "Sadman Sakib",
    "software engineer",
    "full-stack developer",
    "Next.js developer",
    "TypeScript",
    "React developer",
    "TailwindCSS templates",
    "SaaS developer",
    "AI platforms",
    "automation workflows",
    "NestJS",
    "web developer portfolio",
  ],
  authors: [{ name: "Sadman Sakib", url: "https://ssakib.me" }],
  creator: "Sadman Sakib",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ssakib.me",
    siteName: "Sadman Sakib",
    title: "Sadman Sakib — Software Engineer & Full-Stack Developer",
    description:
      "Full-stack software engineer specializing in Next.js, TypeScript, AI-powered SaaS platforms, and premium TailwindCSS templates.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Sadman Sakib — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadman Sakib — Software Engineer & Full-Stack Developer",
    description:
      "Full-stack software engineer specializing in Next.js, TypeScript, AI-powered SaaS platforms, and premium TailwindCSS templates.",
    images: ["/og"],
    creator: "@ssakib4040",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sadman Sakib",
              jobTitle: "Software Engineer",
              url: "https://ssakib.me",
              sameAs: [
                "https://www.linkedin.com/in/ssakib4040/",
                "https://github.com/ssakib4040",
                "https://twitter.com/ssakib4040",
                "https://www.facebook.com/ssakib4040",
              ],
              knowsAbout: [
                "Next.js",
                "TypeScript",
                "React",
                "TailwindCSS",
                "Node.js",
                "NestJS",
                "AI Development",
                "Automation",
                "SaaS",
              ],
            }),
          }}
        />
      </head>
      <body className={outfit.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#0D6EFD] focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D6EFD]"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <footer className="border-t border-gray-100 bg-gray-50 mt-auto">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Sadman Sakib. All rights reserved.
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
