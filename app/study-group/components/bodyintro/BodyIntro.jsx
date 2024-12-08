"use client";
import Button from "@mui/material/Button";
import { MdOutlineChat } from "react-icons/md";
import MobileDrawer from "./components/MobileDrawer";
import { useState } from "react";

const BodyIntro = () => {
  const [open, setOpen] = useState(false);

  const openChatDrawer = () => setOpen(true);

  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center gap-5 text-gray-800 overflow-auto">

      {/* Chat App */}
      <div className="bg-white rounded-full h-36 w-36 flex items-center justify-center shadow-lg md:w-52 md:h-52">
        <MdOutlineChat className="text-5xl md:text-7xl" />
      </div>

      <p className="text-4xl font-bold">Chat App</p>

      <p className="hidden md:block">
        Select a contact to start a conversation!..
      </p>

      <div className="md:hidden">
      <Button
        className="!text-primary !border-primary !rounded-full !text-xs !text-wrap !font-semibold !py-2"
        variant="outlined"
        onClick={openChatDrawer}
      >
        Select a contact to start a conversation!..
      </Button>
      </div>


      <MobileDrawer open={open} setOpen={setOpen}/>

    </div>
  );
};

export default BodyIntro;
