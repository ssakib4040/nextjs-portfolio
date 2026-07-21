import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore professional and personal projects by Sadman Sakib — AI platforms, SaaS products, automation workflows, full-stack applications, and UI experiments built with Next.js, TypeScript, NestJS, and more.",
  openGraph: {
    title: "Work — Sadman Sakib Portfolio",
    description:
      "AI-powered platforms, SaaS products, automation workflows, and full-stack applications built by Sadman Sakib.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Sadman Sakib — Portfolio Projects",
      },
    ],
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
