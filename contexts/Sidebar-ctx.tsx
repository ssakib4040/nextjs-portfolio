import { createContext, useContext, useState } from "react";

const SidebarContext: any = createContext(null);

export function useSidebar() {
  return useContext(SidebarContext);
}

export function SidebarProvider({ children }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}
