import { IconButton } from "@mui/material";
import { useContext, useState } from "react";
import { MdOutlineMenuOpen, MdOutlineMenu } from "react-icons/md";
import useViewportWidth from "../../hooks/useViewportWidth";
import { SidebarContext } from "@/app/context/SidebarContext";

// Material Icon Component
const MaterialIcon = ({ children }) => (
  <IconButton sx={{ color: "white", padding: "2px" }}>{children}</IconButton>
);

// Main Component
const MenuIcon = ({ onClick }) => {
  const { setIsMobileSidebar, isMobileSidebar, isSidebarFixed } = useContext(SidebarContext);
  const [isSelected, setIsSelected] = useState(false);
  const viewportWidth = useViewportWidth();

  const toggleButton = () => {
    // If Clicked on Desktop: Change Shape
    if (viewportWidth > 768) {
      onClick();
      setIsSelected(!isSelected);
    }

    // Else for Mobile & Tablet: Hide Sidebar
    else {
      setIsMobileSidebar(!isMobileSidebar);
    }

  };

  return (
    <div onClick={toggleButton}>
      {/* Desktop Button Style */}
      <div className="hidden lg:block">
        {isSidebarFixed ? (
          <MaterialIcon>
            <MdOutlineMenu className="cursor-pointer" size={24} />
          </MaterialIcon>
        ) : (
          <MaterialIcon>
            <MdOutlineMenuOpen className="cursor-pointer" size={24} />
          </MaterialIcon>
        )}
      </div>

      {/* Mobile & Tablet Style */}
      <div className="block lg:hidden">
        <MaterialIcon>
          <MdOutlineMenu className="cursor-pointer" size={24} />
        </MaterialIcon>
      </div>

    </div>
  );
};

export default MenuIcon;
