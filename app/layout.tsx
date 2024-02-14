"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

interface MenuInterface {
  name: string;
  href: string;
}

const menus: MenuInterface[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Resume",
    href: "/resume",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "NPM Package",
    href: "/npm-package",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = usePathname();

  function isActive(href: string) {
    return router === href ? "active" : "";
  }

  const handleCloseSIdebar = () => {
    const checkbox = document.getElementById("my-drawer-2") as HTMLInputElement;
    checkbox.checked = false;
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content">
            {/* Page content here */}

            {children}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden sidebar-button"
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
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <div className="menu justify-center items-center flex  bg-base-200 min-h-full">
              <ul className="w-80 text-base-content">
                {/* Sidebar content here */}
                {menus.map((menu, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={menu.href}
                        className={`text-center block active:!bg-[#0d6efd] focus:!bg-[#0d6efd] focus:!text-white ${
                          isActive(menu.href) ? "bg-[#0D6EFD] text-white" : ""
                        }`}
                        onClick={handleCloseSIdebar}
                      >
                        {menu.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
