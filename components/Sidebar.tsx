import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Sidebar({ sidebar }: { sidebar: boolean }) {
  const router = useRouter();

  // console.log(router);

  const sidebarImage = "https://dummyimage.com/200x200";

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
    <div
      className={`${
        sidebar ? "left-0" : "left-[-250px]"
      } left-0 flex flex-col justify-between py-8 transition-all fixed top-0 bottom-0 w-[250px] bg-[#E6ECF0] overflow-auto border-r-2 border-gray-300 dev2`}
    >
      <div className="sidebar_top p-4 flex justify-center items-center dev">
        <Image
          className="border-[5px] border-[#0D6EFD] rounded-full p-2"
          src={sidebarImage}
          alt="Profile Image"
          height={200}
          width={200}
        />
      </div>

      <div className="sidebar_menu dev">
        <hr className="my-3 border-t-2 border-gray-300" />
        <ul>
          {menus.map((menu, index) => (
            <li
              key={index}
              className="text-center py-2 text-[#0D6EFD] font-medium hover:bg-[#0D6EFD] hover:text-white transition cursor-pointer dev2"
              onClick={() => router.push(menu.path)}
            >
              <a>{menu.name}</a>
            </li>
          ))}
        </ul>
        <hr className="my-3 border-t-2 border-gray-300" />
      </div>

      <div className="sidebar_footer dev">
        <p className="text-center font-medium">
          &copy; Copyright 2023. All Rights reserved
        </p>
      </div>
    </div>
  );
}
