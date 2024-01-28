"use client";

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Portfolio",
//   description: "Portfolio of my work",
// };

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
    href: "/npmpackage",
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

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            {children}
            {/* <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label> */}
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
                        className={`text-center block ${
                          isActive(menu.href) ? "bg-[#0D6EFD] text-white" : ""
                        }`}
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
