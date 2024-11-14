import {
  ddMaterialButton,
  materialButton,
  materialButtonSelected,
} from "../styles/materialButton";
import { FaChevronRight } from "react-icons/fa";
import { Button } from "@mui/material";
import { useState } from "react";

const MenuButton = ({
  text,
  icon,
  isSelected,
  onClick,
  hasDropDown,
  dropDownItems,
  isSidebarHidden,
}) => {

  // Selected Index for Dropdown Item
  const [selectedIndex, setSelectedIndex] = useState(null);

  // state for show / hide Dropdown Menu
  const [dropDownVisibility, setDropDownVisibility] = useState(false);

  const styleCondition = isSelected && !hasDropDown ? materialButtonSelected : materialButton;
  const shadowCondition = isSelected && !hasDropDown ? "!shadow-xl" : "";
  const variantCondition = isSelected && !hasDropDown  ? "contained" : "text";
  const iconCondition = isSelected && dropDownVisibility ? "rotate-90" : "rotate-0";
  const dropdownCondition = isSelected ?  "h-36": "overflow-y-hidden h-0";


  // Function that shows Bottom border only when parent isSelected & Selected Index === Index
  const dropDownButtonCondition = (index) => isSelected ? (selectedIndex === index ? "border-[#e3a314] border-b-2" :  "border-b-2 border-transparent") : "border-b-2 border-transparent";

  // Function that runs parent function + show/hide Dropdown Menu
  const hideDropdown = () => {
    onClick();
    setDropDownVisibility(!dropDownVisibility);
  }

  const selectDropdownItem = (index) => {
    // isSelected ? setSelectedIndex(index) : setSelectedIndex(null)
    console.log(isSelected);
  };

  return (
    <div className="px-2">
      <Button sx={styleCondition} variant={variantCondition} onClick={hideDropdown} className={shadowCondition}>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-3 items-center">
            {icon}
            {text}
          </div>
          {hasDropDown && (
            <FaChevronRight
              size={14}
              className={`transition-all shadow-lg ${iconCondition}`}
            />
          )}
        </div>
      </Button>

{/* #e3a314 */}

      {/* Dropdown Menu */}
      {dropDownVisibility && dropDownItems && (
        <div className={`transition-all flex flex-col justify-center ${dropdownCondition}`}>
          {dropDownItems.map((item, index) => (
            <div key={index}>
              <Button sx={ddMaterialButton} variant="text" onClick={() => { selectDropdownItem(index) }}>
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
