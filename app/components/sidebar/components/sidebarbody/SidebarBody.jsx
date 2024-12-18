import menuList from "../../list/menuList";
import MenuButton from "../menubutton/MenuButton";
import SidebarHeader from "../sidebarheader/SidebarHeader";
import { useContext, useState } from "react";
import { SidebarContext } from "@/app/context/SidebarContext";
import useSidebar from "../../hooks/useSidebar";

const SidebarBody = () => {
  const { setDropdownList, isSidebarFixed, setIsSidebarHover, setIsLoading } =
    useContext(SidebarContext);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Custom Hook to containing useful methods
  // This avoids cluttery
  const { handleNavigation, expandSidebar, minimizeSidebar } = useSidebar({
    setDropdownList,
    isSidebarFixed,
    setIsSidebarHover,
    setSelectedIndex,
  });

  // Stops propagation of onClick Events
  const stopPropagate = (e) => e.stopPropagation();

  return (
    <div
      className="bg-sidebar text-white h-full flex flex-col lg:border-2 lg:rounded-xl"
      onClick={stopPropagate}
      onMouseEnter={expandSidebar}
      onMouseLeave={minimizeSidebar}
    >
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
              handleNavigation(index, text, dropdown);
              setIsLoading(true);
            }}
            hasDropDown={
              text.includes("Practice Zone") || text.includes("Support")
            }
            isSidebarFixed={false}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarBody;
