import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store — Premium Templates & Plugins",
  description:
    "Browse and buy premium TailwindCSS templates, React components, plugins, and mobile app templates crafted by Sadman Sakib. Clean, modern, production-ready UI kits for developers.",
  openGraph: {
    title: "Store — Premium Templates & Plugins by Sadman Sakib",
    description:
      "Premium TailwindCSS templates, plugins, and mobile app templates. Clean, production-ready UI kits.",
  },
};

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
