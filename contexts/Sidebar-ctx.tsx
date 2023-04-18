import { createContext, useContext, useEffect, useState } from "react";

const SidebarContext: any = createContext(null);

export function useSidebar() {
  return useContext(SidebarContext);
}

export function SidebarProvider({ children }: any) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log(window.innerWidth);
    // set sidebar false if window is less then 768px
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  }, []);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}
