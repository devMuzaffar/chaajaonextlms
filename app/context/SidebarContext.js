import { createContext, useState } from "react";
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  // Changes Sidebar Width when Hover In/out (pos Fixed only)
  const [isSidebarHover, setIsSidebarHover] = useState(true);

  // Converts Sidebar Position from Block to Float(pos fixed)
  // Used in Sidebar Header Component
  const [isSidebarFixed, setIsSidebarFixed] = useState(false);

  // Stores dropdownList while looping
  const [dropdownList, setDropdownList] = useState([]);

  // Open/Closes Mobile Sidebar
  const [isMobileSidebar, setIsMobileSidebar] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarFixed,
        setIsSidebarFixed,
        dropdownList,
        setDropdownList,
        isSidebarHover,
        setIsSidebarHover,
        isMobileSidebar,
        setIsMobileSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
