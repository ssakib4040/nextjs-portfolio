"use client";

import Link from "next/link";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { FaHome, FaFileAlt, FaBriefcase, FaWindowMaximize, FaBox, FaEnvelope } from "react-icons/fa";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

interface MenuInterface {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const menus: MenuInterface[] = [
  {
    name: "Home",
    href: "/",
    icon: <FaHome className="w-5 h-5" />,
  },
  {
    name: "Resume",
    href: "/resume",
    icon: <FaFileAlt className="w-5 h-5" />,
  },
  {
    name: "Professional",
    href: "/professional-portfolio",
    icon: <FaBriefcase className="w-5 h-5" />,
  },
  {
    name: "Personal",
    href: "/personal-portfolio",
    icon: <FaWindowMaximize className="w-5 h-5" />,
  },
  {
    name: "NPM Package",
    href: "/npm-package",
    icon: <FaBox className="w-5 h-5" />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <FaEnvelope className="w-5 h-5" />,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = usePathname();

  function isActive(href: string) {
    return router === href;
  }

  const handleCloseSidebar = () => {
    const checkbox = document.getElementById("my-drawer-2") as HTMLInputElement;
    checkbox.checked = false;
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content flex flex-col">
            {/* Page content here */}
            {children}
            
            {/* Mobile Menu Button */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden sidebar-button text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </label>
          </div>

          {/* Sidebar */}
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <div className="menu p-0 w-80 min-h-full bg-gradient-to-b from-blue-600 to-purple-600 text-base-content flex flex-col justify-between">
              {/* Navigation Links */}
              <div className="py-8">
                <div className="px-6 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-1">MD Sadman</h2>
                  <p className="text-blue-100 text-sm">Full Stack Developer</p>
                </div>

                <ul className="space-y-2 px-4">
                  {menus.map((menu, index) => {
                    const isMenuActive = isActive(menu.href);
                    return (
                      <li key={index}>
                        <Link
                          href={menu.href}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                            isMenuActive
                              ? "bg-white text-blue-600 shadow-lg font-semibold"
                              : "text-white hover:bg-white/10"
                          }`}
                          onClick={handleCloseSidebar}
                        >
                          {menu.icon}
                          <span>{menu.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Footer */}
              <div className="px-6 py-6 border-t border-white/20">
                <p className="text-white/70 text-xs text-center">
                  © 2025 All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>

        <Analytics />
      </body>
    </html>
  );
}
