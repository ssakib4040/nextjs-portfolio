import Sidebar from "./Sidebar";
import { useSidebar } from "@/contexts/Sidebar-ctx";

export default function Layout({ children }: { children: any }) {
  const sidebar: any = useSidebar();

  return (
    <>
      <Sidebar sidebar={sidebar.isOpen} />
      <div className={`${sidebar.isOpen && "lg:ml-[250px]"} transition-all`}>
        {children}
      </div>
    </>
  );
}
