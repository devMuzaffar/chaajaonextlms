"use client";
import {
  MdOutlineChat,
  MdFilePresent,
  MdOutlineAddAPhoto,
  MdOutlineSend,
} from "react-icons/md";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

const actions = [
  { icon: <MdOutlineAddAPhoto size={18} />, name: "Photo" },
  { icon: <MdFilePresent size={18} />, name: "Document" },
];

const ChatBody = () => {
  // SpeedDial Open/Close State
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-chat h-full w-full flex flex-col relative justify-end">
      <div className="bg-chat-shade absolute w-full h-full" />

      {/* Chat Icon with Text */}
      <div className="h-full flex flex-col items-center justify-evenly absolute inset-0">
        <MdOutlineChat className="text-9xl" />
        <p className="text-xs sm:text-sm">
          Start a conversation by typing your message below.
        </p>
      </div>

      {/* bottom Bar */}
      <div className="p-2">
        {/* Input Field with Upload & Submit Button */}
        <div className="flex items-center pl-16 relative">
          <SpeedDial
            sx={{ position: "absolute", left: "0", bottom: 0, zIndex: "0" }}
            FabProps={{
              className: "!bg-primary hover:brightness-90 !shadow-sm",
            }}
            ariaLabel="SpeedDial"
            icon={<SpeedDialIcon />}
            open={open}
            onClick={() => {
              setOpen(!open);
            }}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>

          <form className="w-full bg-white border-2 rounded-full flex items-center justify-between pl-2">
            <input
              className="outline-none bg-transparent text-sm text-slate-500 placeholder:text-gray-300 placeholder:text-sm p-2 w-full"
              type="text"
              placeholder="Type your message"
            />
            <IconButton className="!bg-white">
              <MdOutlineSend />
            </IconButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
