import { Menu, MenuItem } from "@mui/material/index";
import { useState } from "react";

const Button = ({ imgSrc, text, onClick, className, open, setOpen }) => {
  // onClick Event
  const triggerAction = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div>
      {/* Button */}
      <div
        className={`cursor-pointer select-none bg-white flex py-3 px-7 gap-4 rounded-xl shadow-header-button ${className}`}
        onClick={triggerAction}
      >
        <img src={imgSrc} className="w-5" alt="" />
        <p className="text-slate-600 text-sm truncate">{text}</p>
      </div>

      {/* Menu */}
      <Menu
        anchorEl={open}
        open={open}
        onClose={() => { setAnchorEl(false) }}
      >
        <MenuItem className="!text-sm !text-slate-500" onClick={() => { setAnchorEl(false) }}>
          Add New Group
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Button;
