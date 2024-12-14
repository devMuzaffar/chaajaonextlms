"use client";
import useViewportWidth from "./hooks/useViewportWidth";
import SidebarBody from "./components/sidebarbody/SidebarBody";
import DrawerDesktop from "./components/drawer/DrawerDesktop";
import MobileDrawer from "./components/drawer/MobileDrawer";

const Sidebar = () => {
  // Custom Hook variable for current viewport width
  const currentWidth = useViewportWidth();

  return (
    <div>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <DrawerDesktop>
          <SidebarBody />
        </DrawerDesktop>
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <MobileDrawer>
          <SidebarBody />
        </MobileDrawer>
      </div>
    </div>
  );
};

export default Sidebar;
