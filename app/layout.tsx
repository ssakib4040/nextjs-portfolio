import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/header";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });
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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
        <link rel="canonical" href="https://ssakib.me" />
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
        <Header />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
