"use client";
import { useState } from "react";
import GreenTick from "../greentick/GreenTick";
import ThreeDotMenu from "../threedotmenu/ThreeDotMenu";
import { MdSearch } from "react-icons/md";
import MobileDrawer from "../bodyintro/components/MobileDrawer";
import ProfileStatus from "./components/ProfileStatus";

const ChatHeader = () => {
  const [open, setOpen] = useState(false);

  // Function to open Profile Drawer
  const handleProfileMenu = () => {
    setOpen(true);
  };

  return (
    <div className="flex flex-col gap-6 bg-[#F5F5F5] p-3 w-full">
      {/* Profile & Three-dot Menu */}
      <div className="flex items-center justify-between">
        <div
          className="w-10 relative cursor-pointer"
          onClick={handleProfileMenu}
        >
          <img
            className="rounded-full"
            src="./assets/study-group/profile.jpg"
            alt=""
          />
          <GreenTick />
        </div>

        {/* Three Dot Menu */}
        <ThreeDotMenu />
      </div>

      {/* Search bar */}
      <form className="bg-white flex items-center gap-2 text-gray-500 border-[1px] rounded-full shadow-md p-2">
        <MdSearch size={22} />
        <input
          className="w-full outline-none placeholder:text-gray-300 text-sm"
          type="text"
          placeholder="Search or start new chat"
        />
      </form>

      {/* Drawer That opens profile settings */}
      <MobileDrawer
        open={open}
        setOpen={() => setOpen(false)}
        containerId={"chat-header"}
        paperClass="w-full sm:w-[33.2%]"
      >
        <ProfileStatus closeOnClick={() => setOpen(false)} />
      </MobileDrawer>
    </div>
  );
};

export default ChatHeader;
