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
  hasDropDown,
  iconCondition,
}) => {
  // Sidebar Hover Context
  const { isSidebarHover } = useContext(SidebarContext);

  return (
    <Button sx={sx} variant={variant} onClick={onClick} className={className}>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-3 items-center">
          <img className="w-5 h-5 object-contain object-left" src={icon} />
          {isSidebarHover && text}
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
