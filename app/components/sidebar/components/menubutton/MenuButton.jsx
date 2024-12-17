import {
  button,
  buttonSelected,
  iconSelected,
} from "@/app/styles/materialButton";
import { useContext, useState } from "react";
import MaterialButton from "./components/MaterialButton";
import DropdownMenu from "./components/DropdownMenu";
import { SidebarContext } from "@/app/context/SidebarContext";

const MenuButton = ({
  text,
  icon,
  isSelected,
  onClick,
  hasDropDown,
  isSidebarFixed,
}) => {
  // Sidebar Hover Context
  const { isSidebarHover } = useContext(SidebarContext);

  // state for show / hide Dropdown Menu
  const [dropDownVisibility, setDropDownVisibility] = useState(false);

  const styleCondition =
    isSelected && !hasDropDown
      ? isSidebarHover
        ? buttonSelected
        : iconSelected
      : button;

  // CSS Conditions
  const shadowCondition = isSelected && !hasDropDown ? "!shadow-xl" : "";
  const variantCondition = isSelected && !hasDropDown ? "contained" : "text";
  const iconCondition =
    isSelected && dropDownVisibility ? "rotate-90" : "rotate-0";
  const dropdownCondition =
    isSelected && isSidebarHover && dropDownVisibility ? "h-36" : "h-0";

  // Function that runs parent function + show/hide Dropdown Menu if its selected
  const hideDropdown = () => {
    if (isSelected) {
      setDropDownVisibility(!dropDownVisibility);
    } else {
      onClick();
      setDropDownVisibility(true);
    }
  };

  return (
    <div className="px-2">
      <MaterialButton
        sx={styleCondition}
        variant={variantCondition}
        onClick={hideDropdown}
        className={shadowCondition}
        icon={icon}
        text={text}
        isSidebarFixed={isSidebarFixed}
        iconCondition={iconCondition}
        hasDropDown={hasDropDown}
      />

      {/* Dropdown Menu */}
      {!isSidebarFixed && hasDropDown && (
        <DropdownMenu
          isSelected={isSelected}
          dropdownCondition={dropdownCondition}
        />
      )}
    </div>
  );
};

export default MenuButton;
