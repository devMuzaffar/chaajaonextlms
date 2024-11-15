import { IconButton } from "@mui/material";
import { useState } from "react";
import { MdOutlineMenuOpen, MdOutlineMenu } from "react-icons/md";


const MaterialIcon = ({children}) => (
  <IconButton sx={{color: "white", padding: "2px"}}>
    {children}
  </IconButton>
)


const MenuIcon = ({ onClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleButtonShape = () => {
    onClick();
    setIsSelected(!isSelected);
  };

  return (
    <div onClick={toggleButtonShape}>
      {isSelected ? (
        <MaterialIcon><MdOutlineMenu className="cursor-pointer" size={24} /></MaterialIcon>
      ) : (
        <MaterialIcon><MdOutlineMenuOpen className="cursor-pointer" size={24} /></MaterialIcon>
      )}
    </div>
  );
};

export default MenuIcon;
