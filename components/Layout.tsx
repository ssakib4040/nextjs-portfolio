import Sidebar from "./Sidebar";
import { useSidebar } from "@/contexts/Sidebar-ctx";

export default function Layout({ children }: { children: any }) {
  const sidebar: any = useSidebar();

  return (
    <>
      <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      <Sidebar sidebar={sidebar.isOpen} />
      <div className={`${sidebar.isOpen && "lg:ml-[250px]"} transition-all`}>
        {children}
      </div>
    </>
  );
}
