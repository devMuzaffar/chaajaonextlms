import { createContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isSidebarHover, setIsSidebarHover] = useState(true);
  const [isSidebarFixed, setIsSidebarFixed] = useState(false);
  const [isMobileSidebar, setIsMobileSidebar] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarHover,
        setIsSidebarHover,
        isSidebarFixed,
        setIsSidebarFixed,
        isMobileSidebar,
        setIsMobileSidebar
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
