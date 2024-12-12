import { MdOutlineMenuOpen } from "react-icons/md";
import Button from "./components/Button";
import { PiBellLight } from "react-icons/pi";
import { IconButton, ButtonBase } from "@mui/material/index";
import { buttonBaseSx } from "./styles/materialStyles";
import DropdownMenu from "./components/DropdownMenu";
import { counselorList, profileList } from "./list/dropDownList";
import { useContext, useState } from "react";
import { SidebarContext } from "@/app/context/SidebarContext";

const Header = () => {
  const [isButtonOpen, setIsButtonOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const { setIsMobileSidebar } = useContext(SidebarContext);

  // Open Counselor Button Menu
  // Closes other dropdowns Menus
  const openButtonMenu = () => {
    if (isProfileOpen || isNotificationsOpen) {
      setIsProfileOpen(false);
      setIsNotificationsOpen(false);
      setIsButtonOpen(!isButtonOpen);
    } else {
      setIsButtonOpen(!isButtonOpen);
    }
  };

  // Open Profile Dropdown
  // Close other Dropdowns if its open
  const openProfileMenu = () => {
    if (isButtonOpen || isNotificationsOpen) {
      setIsButtonOpen(false);
      setIsNotificationsOpen(false);
      setIsProfileOpen(!isProfileOpen);
    } else {
      setIsProfileOpen(!isProfileOpen);
    }
  };

  // Open Notifications Menu
  // Close other Dropdowns if its open
  const openNotificationsMenu = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    if (isProfileOpen || isButtonOpen) {
      setIsProfileOpen(false);
      setIsButtonOpen(false);
      setIsNotificationsOpen(!isNotificationsOpen);
    } else {
      setIsNotificationsOpen(!isNotificationsOpen);
    }
  };

  //  Toggles Sidebar on Mobile
  const toggleSidebar = () => {
    setIsMobileSidebar(false);
  };

  return (
    <div className="flex justify-between pt-4 px-2 pb-1">
      
      {/* Left */}
      {/* Show Sidebar: Mobile */}
      {/* Buttons */}
      <div className="px-2 flex gap-3">
        {/* Toggle Sidebar Button: Mobile */}
        <div className="p-4 md:hidden" onClick={toggleSidebar}>
          <MdOutlineMenuOpen className="cursor-pointer" size={18} />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {/* Share with friends */}
          <Button
            className={"hidden sm:flex"}
            imgSrc={"./assets/header/share.svg"}
            text={"Share with friends"}
          />

          {/* Talk to Counselor */}
          <div className="relative select-none">
            <Button
              imgSrc={"./assets/header/counselor.svg"}
              text={"Talk to counselor"}
              onClick={openButtonMenu}
            />

            {/* Counselor dropdown Menu */}
            <DropdownMenu
              list={counselorList}
              isOpen={isButtonOpen}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Right */}
      {/* Bell & Profile */}
      <div className="hidden items-center gap-1 xs:flex">
        {/* Notifications */}
        <div className="relative" onClick={openNotificationsMenu}>
          <IconButton sx={{ padding: "4px" }}>
            <PiBellLight size={32} className="text-gray-600" />
          </IconButton>

          {/* Notifications dropdown Menu */}
          <DropdownMenu
            list={[{ icon: "", text: "No notifications were found" }]}
            isOpen={isNotificationsOpen}
            className="right-0 w-72 font-bold"
          />
        </div>

        {/* Profile Icon */}
        <div className="relative" onClick={openProfileMenu}>
          <ButtonBase
            sx={buttonBaseSx}
            className="transition-all hover:bg-slate-200"
          >
            {/* Avatar */}
            <div className="bg-[#bdbdbd] rounded-full w-10 h-10 flex justify-center items-center">
              <p className="text-xl text-white font-semibold">M</p>
            </div>
          </ButtonBase>

          {/* Profile dropdown Menu */}
          <DropdownMenu
            list={profileList}
            isOpen={isProfileOpen}
            className="right-0 w-40 font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
