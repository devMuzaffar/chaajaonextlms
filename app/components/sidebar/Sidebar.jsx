"use client";
import menuList from "./list/menuList";
import MenuButton from "./components/menubutton/MenuButton";
import { useState } from "react";
import MenuIcon from "./components/menuicon/MenuIcon";

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSidebarHidden, setIsSidebarHidden] = useState(true);

  const sidebarCondition = !isSidebarHidden ? "w-1/5" : "w-1/4";
  const logoCondition = !isSidebarHidden ? "hidden" : "w-32";

  let sidebarMinimizedWidth;
  // w-[260px]
  const sidebarPosition = isSidebarHidden ? "fixed left-0 top-0 w-fit" : "flex flex-col w-80";

  // Changes Sidebar Position from Block to Fixed
  const toggleMinimizeSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  // Expands Minimized Sidebar
  // Works only when Sidebar is Minimized
  const expandMinimizeSidebar = () => {
    if(isSidebarHidden){


    }
  }

  return (
    <div
      className={`border-2 h-screen border-white overflow-y-hidden ${sidebarPosition}`}
      onMouseEnter={expandMinimizeSidebar}
    >
      {/* Red Sidebar */}
      <div className="bg-sidebar text-white rounded-xl h-full flex flex-col">

        {/* Icon with hide button */}
        <div className="flex items-center justify-center gap-6 pt-8 pb-4">
          {/* Icon */}
          <div className="flex items-center gap-3">
            <img className="w-8" src="./logo.png" alt="" />
            {/* <img className={`w-32`} src="./logo-text.png" alt="" /> */}
          </div>
          {/* <MenuIcon onClick={toggleMinimizeSidebar}/> */}
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
              dropDownItems={selectedIndex === index ? dropdown : []}
              isSidebarMinimized={isSidebarHidden}
            />
          ))}
        
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
