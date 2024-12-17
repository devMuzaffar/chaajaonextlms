import { useContext } from "react";
import MenuIcon from "../menuicon/MenuIcon";
import { SidebarContext } from "@/app/context/SidebarContext";

const SidebarHeader = () => {
  const { isSidebarHover, isSidebarFixed, setIsSidebarFixed } =
    useContext(SidebarContext);

  // Changes Sidebar Position from Block to Fixed
  const toggleFixedSidebar = () => {
    setIsSidebarFixed(!isSidebarFixed);
  };

  return (
    <div className="flex flex-shrink-0 items-center justify-center gap-6 pt-8 pb-4 overflow-hidden">
      {/* Chaajao Logo */}
      <div className="flex items-center gap-3">
        <img className="w-8" src="./assets/logo.png" alt="" />
        {isSidebarHover && (
          <img className="w-32 h-8" src="./assets/logo-text.png" alt="" />
        )}
      </div>
      {isSidebarHover && <MenuIcon onClick={toggleFixedSidebar} />}
    </div>
  );
};

export default SidebarHeader;
