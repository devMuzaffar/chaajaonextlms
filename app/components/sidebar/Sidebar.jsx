"use client";
import menuList from "./list/menuList";
import MenuButton from "./components/menubutton/MenuButton";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "@/app/context/SidebarContext";
import SidebarHeader from "./components/sidebarheader/SidebarHeader";
import useViewportWidth from "./hooks/useViewportWidth";

const Sidebar = () => {
  // Global sidebar Hover Boolean will be true/false on Hover
  const {
    isSidebarHover,
    setIsSidebarHover,
    isSidebarFixed,
    isMobileSidebar,
    setIsMobileSidebar
  } = useContext(SidebarContext);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const currentWidth = useViewportWidth();

  const isMobileWidth = currentWidth < 1024;

  let sidebarMinimizedWidth = isSidebarHover ? "w-64" : "w-16";

  const sidebarPosition = isSidebarFixed
    ? `fixed left-0 top-0 ${sidebarMinimizedWidth}`
    : "block w-64";

  const mobileSidebarCondition = isMobileSidebar ? "-left-64" : "left-0";
  const mobileSidebarPosition = `absolute w-64 ${mobileSidebarCondition}`;

  //
  // Methods
  //

  // UseEffect runs on background to check viewport width
  // Deactivates Minimized Sidebar on Mobile & Tablet Viewport
  useEffect(() => {
    currentWidth > 1280 && isSidebarFixed ? "" : setIsSidebarHover(true);
  }, [currentWidth]);

  // Minimizes Fixed Sidebar on Hover out
  const toggleMinimizeSidebar = () => {
    isSidebarFixed && setIsSidebarHover(false);
  };

  // Maximizes Fixed Sidebar on Hover In
  const toggleMaximizeSidebar = () => {
    isSidebarFixed && setIsSidebarHover(true);
  };

  const hideMobileSidebar = (e) => {
    e.stopPropagation();
    setIsMobileSidebar(!isMobileSidebar);
  }

  const parentDiv = `transition-all duration-300 absolute w-full inset-0 bg-opacity-50 lg:bg-transparent lg:static lg:w-auto ${isMobileSidebar ? "bg-transparent": "bg-black"}`;

  return (
    <div className={`${parentDiv} `} onClick={(e) => hideMobileSidebar(e)}>
      <div
        className={`h-screen border-none border-white overflow-y-hidden shadow-2xl lg:shadow-none ${isMobileWidth ? mobileSidebarPosition : sidebarPosition}
      `}
        onMouseLeave={toggleMinimizeSidebar}
        onMouseEnter={toggleMaximizeSidebar}
      >
        {/* Red Sidebar */}
        <div className="bg-sidebar text-white h-full flex flex-col lg:border-2 lg:rounded-xl">
          {/* Logo with hide button */}
          <SidebarHeader />

          {/* Menu List */}
          <div className="flex flex-col gap-5 py-6 overflow-y-scroll hide-scrollbar">
            {/* Item */}
            {menuList.map(({ text, icon, dropdown }, index) => (
              <MenuButton
                key={index}
                icon={icon}
                text={text}
                isSelected={selectedIndex === index}
                onClick={() => {
                  setSelectedIndex(index);
                }}
                hasDropDown={index === 1 || index === 8}
                dropdownItems={selectedIndex === index ? dropdown : []}
                isSidebarFixed={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


// TODO: Stop propagation of most parent Div
// TODO: Fix Animation not wokring on absolute mobile sidebar of Left position
// Adjust Responsiveness of sidebar on mobile and tablet
