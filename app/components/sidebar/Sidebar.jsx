"use client";
import menuList from "./list/menuList";
import MenuButton from "./components/menubutton/MenuButton";
import { useContext, useState } from "react";
import MenuIcon from "./components/menuicon/MenuIcon";
import { SidebarContext } from "@/app/context/SidebarContext";

const Sidebar = () => {
  // Global sidebar Hover Boolean will be true/false on Hover
  const { isSidebarHover, setIsSidebarHover } = useContext(SidebarContext);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSidebarFixed, setIsSidebarFixed] = useState(false);

  // w-260px
  let sidebarMinimizedWidth = isSidebarHover ? "w-64" : "w-16";
  const sidebarPosition = isSidebarFixed
    ? `fixed left-0 top-0 ${sidebarMinimizedWidth}`
    : "flex flex-col w-64";
    // w-[315px]

  // Changes Sidebar Position from Block to Fixed
  const toggleFixedSidebar = () => {
    setIsSidebarFixed(!isSidebarFixed);
  };

  // Minimizes Fixed Sidebar on Hover out
  const toggleMinimizeSidebar = () => {
    isSidebarFixed && setIsSidebarHover(false);
  };

  // Maximizes Fixed Sidebar on Hover In
  const toggleMaximizeSidebar = () => {
    isSidebarFixed && setIsSidebarHover(true);
  };

  return (
    <div
      className={`transition-all border-2 h-screen border-white overflow-y-hidden ${sidebarPosition}`}
      onMouseLeave={toggleMinimizeSidebar}
      onMouseEnter={toggleMaximizeSidebar}
    >
      {/* Red Sidebar */}
      <div className="bg-sidebar text-white rounded-xl h-full flex flex-col">
        {/* Icon with hide button */}
        <div className="flex items-center justify-center gap-6 pt-8 pb-4">
          {/* Icon */}
          <div className="flex items-center gap-3">
            <img className="w-8" src="./logo.png" alt="" />
            {isSidebarHover && (
              <img className={`w-32`} src="./logo-text.png" alt="" />
            )}
          </div>
          {isSidebarHover && <MenuIcon onClick={toggleFixedSidebar} />}
        </div>

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
  );
};

export default Sidebar;
