"use client";
import {MdOutlineMenuOpen } from "react-icons/md";
import menuList from "./list/menuList";
import MenuButton from "./components/MenuButton";
import { useState } from "react";

const Sidebar = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    const sidebarCondition = !isHidden ? "w-1/5" : "w-1/4";
    const logoCondition = !isHidden ? "hidden" : "w-32";

    const minimizeSidebar = () => setIsHidden(!isHidden);

  return (
    <div className={`border-2 h-full border-white`}>
      {/* Red Sidebar */}
      <div className="bg-primary text-white rounded-xl">
        {/* Icon with hide button */}
        <div className="flex items-center justify-evenly h-24">
          {/* Icon */}
          <div className="flex items-center gap-3">
            <img className="w-8" src="./logo.png" alt="" />
            <img className={`${logoCondition}`} src="./logo-text.png" alt="" />
          </div>
          <div onClick={minimizeSidebar}>
          <MdOutlineMenuOpen className="cursor-pointer" size={24} />
          </div>
        </div>

        {/* Menu List */}
        <div className="flex flex-col gap-5 py-6">
          {/* Item */}
          {menuList.map(({ text, icon, dropdown }, index) => (
            <MenuButton
                key={index}
                icon={icon}
                text={text}
                isSelected={selectedIndex === index}
                onClick={() => { setSelectedIndex(index) }}
                hasDropDown={index === 1 || index === 8}
                dropDownItems={selectedIndex === index && dropdown}
                isSidebarHidden={isHidden}
            />
          ))}

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
