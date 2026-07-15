import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/header";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sadman Sakib — Software Engineer",
    template: "%s — Sadman Sakib",
  },
  description:
    "Full-stack software engineer building scalable applications and AI platforms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={outfit.className}>
        <Header />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
