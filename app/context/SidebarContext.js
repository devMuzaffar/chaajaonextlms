import { createContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isSidebarHover, setIsSidebarHover] = useState(true);
  const [isSidebarFixed, setIsSidebarFixed] = useState(false);
  const [isMobileSidebar, setIsMobileSidebar] = useState(false);

  // A temp list of selected dropdown to remain persist highlighted in refreshing page
  const [dropdownList, setDropdownList] = useState([]);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarHover,
        setIsSidebarHover,
        isSidebarFixed,
        setIsSidebarFixed,
        isMobileSidebar,
        setIsMobileSidebar,
        dropdownList,
        setDropdownList,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
