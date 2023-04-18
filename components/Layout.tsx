// components/layout.js

import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useSidebar } from "@/contexts/Sidebar-ctx";

export default function Layout({ children }: { children: any }) {
  // const [sidebar, setSidebar] = useState<boolean>(true);
  const sidebar: any = useSidebar();

  return (
    <>
      <Sidebar sidebar={sidebar.isOpen} />
      <div
        className={`${sidebar.isOpen && "ml-[250px]"} transition-all p-3 dev`}
      >
        {/* <h1>Home</h1> */}

        {/* <button onClick={toggleSidebar}>Toggle Sidebar</button> */}

        {children}
      </div>
    </>
  );
}
