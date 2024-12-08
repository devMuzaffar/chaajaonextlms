"use client";
import menuList from "./list/menuList";
import MenuButton from "./components/menubutton/MenuButton";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "@/app/context/SidebarContext";
import SidebarHeader from "./components/sidebarheader/SidebarHeader";
import useViewportWidth from "./hooks/useViewportWidth";
import { useRouter, usePathname } from "next/navigation";
import pathList from "./list/pathlist";

const Sidebar = () => {
  // Global sidebar Hover Boolean will be true/false on Hover
  const {
    isSidebarHover,
    setIsSidebarHover,
    isSidebarFixed,
    isMobileSidebar,
    setIsMobileSidebar,
  } = useContext(SidebarContext);

  // State for Selecting Index button
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  // Custom Hook variable for current viewport width
  const currentWidth = useViewportWidth();

  // Automatically hides sidebar on mobile if desktop's sidebar is minimized
  const isMobileWidth = currentWidth < 1024;

  // Minimize Sidebar if sidebar is float, and Hovered or not
  let sidebarMinimizedWidth = isSidebarHover
    ? "transition-all w-64"
    : "transition-all w-16";

  // Changes the Sidebar postition on button Click
  const sidebarPosition = isSidebarFixed
    ? `fixed left-0 top-0 ${sidebarMinimizedWidth}`
    : "block w-64";

  const mobileSidebarCondition = isMobileSidebar ? "-left-64" : "left-0";
  const mobileSidebarPosition = `transition-all absolute w-64 ${mobileSidebarCondition}`;

  //
  // Methods
  //

  // UseEffect runs on background to check viewport width
  // Deactivates Minimized Sidebar on Mobile & Tablet Viewport
  useEffect(() => {
    currentWidth > 1280 && isSidebarFixed ? "" : setIsSidebarHover(true);
  }, [currentWidth]);

  // UseEffect to persist selected Index path even when page refreshed
  useEffect(() => {
    if (pathList.includes(pathname)) {
      const pathIndex = pathList.indexOf(pathname);
      setSelectedIndex(pathIndex);
    }
  }, [pathname]);

  // Minimizes Fixed Sidebar on Hover out
  const toggleMinimizeSidebar = () => {
    isSidebarFixed && setIsSidebarHover(false);
  };

  // Maximizes Fixed Sidebar on Hover In
  const toggleMaximizeSidebar = () => {
    isSidebarFixed && setIsSidebarHover(true);
  };

  // Hides Sidebar on clicking Dark Bg on Mobile
  const hideMobileSidebar = (e) => {
    e.stopPropagation();
    setIsMobileSidebar(true);
  };

  // Handle Navigation Function
  const handleNavigation = (index) => {
    setSelectedIndex(index);

    switch (index) {
      case 0:
        router.push("/");
        break;
      case 2:
        router.push("/study-group");
        break;
      case 3:
        router.push("/news-ads");
        break;
      default:
        router.push("/");
    }
  };

  const parentDiv = `transition-all z-10 duration-300 absolute w-full inset-0 bg-opacity-50 lg:bg-transparent lg:static lg:w-auto ${
    isMobileSidebar
      ? "bg-transparent pointer-events-none"
      : "bg-black pointer-events-auto"
  }`;

  return (
    <div className={`${parentDiv} `} onClick={(e) => hideMobileSidebar(e)}>
      <div
        className={`h-screen border-none border-white overflow-y-hidden shadow-2xl lg:shadow-none ${
          isMobileWidth ? mobileSidebarPosition : sidebarPosition
        }
      `}
        onMouseLeave={toggleMinimizeSidebar}
        onMouseEnter={toggleMaximizeSidebar}
      >
        {/* Red Sidebar */}
        {/* With Thin white border */}
        <div
          className="bg-sidebar text-white h-full flex flex-col lg:border-2 lg:rounded-xl"
          onClick={(e) => {
            e.stopPropagation();
          }}
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
                  handleNavigation(index);
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
