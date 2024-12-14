"use client";
import { useContext } from "react";
import { SidebarContext } from "@/app/context/SidebarContext";
import useViewportWidth from "./hooks/useViewportWidth";
import DrawerDesktop from "./components/drawer/DrawerDesktop";
import SidebarBody from "./components/sidebarbody/SidebarBody";

const Sidebar = () => {
  // Global sidebar Hover Boolean will be true/false on Hover
  const { isSidebarHover, isSidebarFixed, isMobileSidebar } =
    useContext(SidebarContext);

  // Custom Hook variable for current viewport width
  const currentWidth = useViewportWidth();

  // Automatically hides sidebar on mobile if desktop's sidebar is minimized
  const isMobileWidth = currentWidth < 1024;


  return <div>

    <DrawerDesktop>
        <SidebarBody />
    </DrawerDesktop>

  </div>;
};

export default Sidebar;
