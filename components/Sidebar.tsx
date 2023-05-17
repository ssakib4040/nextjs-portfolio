import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSidebar } from "@/contexts/Sidebar-ctx";

//

import { FaBars } from "react-icons/fa";

export default function Sidebar({ sidebar }: { sidebar: boolean }) {
  const router = useRouter();
  const s: any = useSidebar();

  const sidebarImage = "/profile-image.jpg";

  const menus: any[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Resume",
      path: "/resume",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "NPM Packages",
      path: "/npm-packages",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      <button
        className={`${
          s.isOpen ? "left-[250px]" : "left-[0px]"
        } absolute top-0 bg-[#0D6EFD] text-white px-2 py-1 rounded-sm transition-all`}
        onClick={() => s.setIsOpen(!s.isOpen)}
      >
        <FaBars className="text-2xl" />
      </button>

      <div
        className={`${
          sidebar ? "left-0" : "left-[-250px]"
        } left-0 flex flex-col justify-between py-4 transition-all fixed top-0 bottom-0 w-[250px] bg-[#E6ECF0] overflow-auto border-r-2 border-gray-300 z-50`}
      >
        <div className="sidebar_top p-8 flex justify-center items-center">
          <Image
            className="border-[5px] border-[#0D6EFD] rounded-full p-2"
            src={sidebarImage}
            alt="Profile Image"
            height={200}
            width={200}
          />
        </div>

        <div className="sidebar_menu mb-8">
          <hr className="my-3 border-t-2 border-gray-300" />
          <ul>
            {menus.map((menu, index) => (
              <li
                key={index}
                className={`${
                  router.pathname === menu.path && "bg-[#0D6EFD] text-white"
                } text-center py-2 text-[#0D6EFD] font-medium hover:bg-[#0D6EFD] hover:text-white transition cursor-pointer`}
                onClick={() => router.push(menu.path)}
              >
                <a>{menu.name}</a>
              </li>
            ))}
          </ul>
          <hr className="my-3 border-t-2 border-gray-300" />
        </div>

        <div className="sidebar_footer mb-8">
          <p className="text-center font-medium">
            &copy; Copyright 2023. All Rights reserved
          </p>
        </div>
      </div>
    </>
  );
}
