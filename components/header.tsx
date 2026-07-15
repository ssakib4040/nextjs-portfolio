"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Store", href: "/store" },
  { name: "Packages", href: "/packages" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-8 sticky top-0 z-50">
      <div className="navbar-start">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Sadman Sakib
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {menus.map((menu) => (
            <li key={menu.href}>
              <Link
                href={menu.href}
                className={
                  isActive(menu.href) ? "bg-[#0D6EFD] text-white" : ""
                }
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menus.map((menu) => (
              <li key={menu.href}>
                <Link
                  href={menu.href}
                  className={
                    isActive(menu.href) ? "bg-[#0D6EFD] text-white" : ""
                  }
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
