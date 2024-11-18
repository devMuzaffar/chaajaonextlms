import { Button } from "@mui/material";
import { ddButton } from "../../../styles/materialButton";
import { useState } from "react";

const DropdownMenu = ({ isSelected, dropdownCondition, dropdownItems }) => {
  // Selected Index for Dropdown Item
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Function that shows Bottom border only when parent isSelected & Selected Index === Index
  const dropDownButtonCondition = (index) =>
    isSelected
      ? selectedIndex === index
        ? "border-[#e3a314] border-b-2"
        : "border-b-2 border-transparent"
      : "border-b-2 border-transparent";

  // Reserved for Routing
  const selectDropdownItem = (index) => {
    // isSelected ? setSelectedIndex(index) : setSelectedIndex(null)
    console.log(isSelected);
  };

  return (
    <div
      className={`transition-all flex flex-col justify-center overflow-hidden ${dropdownCondition}`}
    >
      {dropdownItems.map((item, index) => (
        <div key={index}>
          <Button
            sx={ddButton}
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
  );
};

export default DropdownMenu;
