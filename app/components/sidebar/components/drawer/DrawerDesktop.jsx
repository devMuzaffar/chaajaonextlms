import { useContext } from "react";
import { SidebarContext } from "@/app/context/SidebarContext";
import { Drawer } from "./styles/drawerStyles";

// Main Component
const DrawerDesktop = ({ children }) => {
  // Open State  : For Minimized - Maximized Width on Hover
  // Fixed State : For Static - Fixed Position
  const { isSidebarHover, isSidebarFixed } = useContext(SidebarContext);

  return (
    <Drawer variant="permanent" open={isSidebarHover} fixed={isSidebarFixed}>
      {/* Your Component */}
      {children}
    </Drawer>
  );
};

export default DrawerDesktop;
