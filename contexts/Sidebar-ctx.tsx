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
    // set sidebar false if window is less then 1024px
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }

    window.addEventListener("resize", () => {
      // set sidebar false if window is less then 1024px
      if (window.innerWidth < 1024) {
        setIsOpen(false);
      }

      // set sidebar true if window is greater then 1024px
      if (window.innerWidth > 1024) {
        setIsOpen(true);
      }
    });
  }, []);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}
