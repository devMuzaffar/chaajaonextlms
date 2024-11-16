import { SidebarContext } from "@/app/context/SidebarContext";
import { Button } from "@mui/material";
import { useContext } from "react";
import { FaChevronRight } from "react-icons/fa";

// 3-in-1 Material Button
// Plain Button
// Dropdown Button
// Icon Button

const MaterialButton = ({
  sx,
  variant,
  onClick,
  className,
  icon,
  text,
  isSidebarFixed,
  hasDropDown,
  iconCondition,
}) => {

    // Sidebar Hover Context
    const { isSidebarHover } = useContext(SidebarContext);

  return (
    <Button sx={sx} variant={variant} onClick={onClick} className={className}>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-3 items-center">
          <img className="w-6 object-contain" src={icon} />
          {isSidebarHover && text}
          {/* {text} */}
        </div>
        {isSidebarHover && hasDropDown && (
          <FaChevronRight
            size={14}
            className={`transition-all shadow-lg ${iconCondition}`}
          />
        )}
      </div>
    </Button>
  );
};

export default MaterialButton;


// TODO: CHANGE TEXT TO BE HIDDEN OVERFLOW, REMOVE WRAP
// TODO: ANALYZE BROKEN ANIMATION COMING FROM HOVER FROM ICON TO ICON+TEXT