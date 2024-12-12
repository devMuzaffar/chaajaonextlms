"use client";
import Button from "@mui/material/Button";
import { MdOutlineChat } from "react-icons/md";
import MobileDrawer from "./components/MobileDrawer";
import { useState } from "react";
import ChatHeader from "../chatheader/ChatHeader";

const BodyIntro = () => {
  const [open, setOpen] = useState(false);

  const openChatDrawer = () => setOpen(true);

  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center gap-5 text-gray-800 overflow-auto select-none">
      {/* Chat App */}
      <div className="bg-white rounded-full h-36 w-36 flex items-center justify-center shadow-lg md:w-52 md:h-52">
        <MdOutlineChat className="text-5xl md:text-7xl" />
      </div>

      <p className="text-4xl font-bold">Chat App</p>

      <p className="hidden md:block">
        Select a contact to start a conversation!..
      </p>

      {/* MUI Button that opens Mobile Drawer on Mobile */}
      <div className="md:hidden">
        <Button
          sx={{ textTransform: "none" }}
          className="!text-primary !border-primary !rounded-full !text-xs !text-wrap !font-semibold !py-2"
          variant="outlined"
          onClick={openChatDrawer}
        >
          Select a contact to start a conversation!..
        </Button>
      </div>

      {/* Opens Chat Header Drawer on Mobile Only */}
      <MobileDrawer
        open={open}
        setOpen={setOpen}
        containerId={"chat-body"}
        paperClass={"w-full sm:w-auto"}
      >
        <ChatHeader />
      </MobileDrawer>
    </div>
  );
};

export default BodyIntro;
