import {
  ddMaterialButton,
  materialButton,
  materialButtonSelected,
  materialIcon,
  materialIconSelected,
} from "../../styles/materialButton";
import { FaChevronRight } from "react-icons/fa";
import { Button, IconButton } from "@mui/material";
import { useState } from "react";

const MenuButton = ({
  text,
  icon,
  isSelected,
  onClick,
  hasDropDown,
  dropDownItems,
  isSidebarMinimized,
}) => {
  // Selected Index for Dropdown Item
  const [selectedIndex, setSelectedIndex] = useState(null);

  // state for show / hide Dropdown Menu
  const [dropDownVisibility, setDropDownVisibility] = useState(false);

  // Animate dropdown Menu on show / hide
  const [animateDropdown, setAnimateDropdown] = useState(false);

  const styleCondition =
    isSelected && !hasDropDown ? materialButtonSelected : materialButton;
  const iconStyleCondition =
    isSelected && !hasDropDown ? materialIconSelected : materialIcon;
  const shadowCondition = isSelected && !hasDropDown ? "!shadow-xl" : "";
  const variantCondition = isSelected && !hasDropDown ? "contained" : "text";
  const iconCondition =
    isSelected && dropDownVisibility ? "rotate-90" : "rotate-0";
  const dropdownCondition = isSelected && dropDownVisibility ? "h-36" : "h-0";

  // Function that shows Bottom border only when parent isSelected & Selected Index === Index
  const dropDownButtonCondition = (index) =>
    isSelected
      ? selectedIndex === index
        ? "border-[#e3a314] border-b-2"
        : "border-b-2 border-transparent"
      : "border-b-2 border-transparent";

  // Function that runs parent function + show/hide Dropdown Menu if its selected
  const hideDropdown = () => {
    if (isSelected) {
      setDropDownVisibility(!dropDownVisibility);
    } else {
      onClick();
      setDropDownVisibility(true);
    }
  };

  // Reserved for Routing
  const selectDropdownItem = (index) => {
    // isSelected ? setSelectedIndex(index) : setSelectedIndex(null)
    console.log(isSelected);
  };

  return (
    <div className="px-2">
      {!isSidebarMinimized ? (
        <Button
        sx={styleCondition}
        variant={variantCondition}
        onClick={hideDropdown}
        className={shadowCondition}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-3 items-center">
            {icon}
            {text}
          </div>
          {!isSidebarMinimized && hasDropDown && (
            <FaChevronRight
              size={14}
              className={`transition-all shadow-lg ${iconCondition}`}
            />
          )}
        </div>
      </Button>
      ) :
        (
          <IconButton
          sx={iconStyleCondition}
          className={shadowCondition}
          centerRipple={false}
          >
            {icon}
          </IconButton>
        )
      }

      {/* Dropdown Menu */}
      {!isSidebarMinimized && hasDropDown && (
        <div
          className={`transition-all flex flex-col justify-center overflow-y-hidden ${dropdownCondition}`}
        >
          {dropDownItems.map((item, index) => (
            <div key={index}>
              <Button
                sx={ddMaterialButton}
                variant="text"
                onClick={() => {
                  selectDropdownItem(index);
                }}
              >
                <p className={dropDownButtonCondition(index)}>{item}</p>
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuButton;
