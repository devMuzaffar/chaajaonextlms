"use client";
import { IconButton } from "@mui/material/index";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export const ThreeDotMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const menuStyle = {
    "& .MuiPaper-root": {
      borderRadius: "8px",
    },
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <BsThreeDotsVertical size={22} />
      </IconButton>

      <Menu
        sx={menuStyle}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem className="!text-sm !text-slate-500" onClick={handleClose}>
          Add New Group
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ThreeDotMenu;
