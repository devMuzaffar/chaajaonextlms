import React from "react";
import {
  ddMaterialButton,
  materialButton,
  materialButtonSelected,
} from "../styles/materialButton";
import { FaChevronRight } from "react-icons/fa";
import { Button } from "@mui/material";

const MenuButton = ({
  text,
  icon,
  isSelected,
  onClick,
  hasDropDown,
  dropDownItems,
  isSidebarHidden,
}) => {
  const styleCondition = isSelected ? materialButtonSelected : materialButton;
  const variantCondition = isSelected ? "contained" : "text";
  const iconCondition = isSelected ? "rotate-90" : "rotate-0";
  const dropdownCondition = isSelected ? "overflow-y-hidden pt-0" : "pt-5";

  return (
    <div className="px-2">
      <Button sx={styleCondition} variant={variantCondition} onClick={onClick}>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-3 items-center">
            {icon}
            {isSidebarHidden != false && text}
          </div>
          {isSidebarHidden && hasDropDown && (
            <FaChevronRight
              size={14}
              className={`transition-all ${iconCondition}`}
            />
          )}
        </div>
      </Button>

      {dropDownItems && (
        <div className={`transition-all ${dropdownCondition}`}>
          {dropDownItems.map((item, index) => (
            <div key={index} className={`flex flex-col`}>
              <Button sx={ddMaterialButton} variant="text">
                {item}
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuButton;
