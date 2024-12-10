import { Button } from "@mui/material";
import { ddButton } from "../../../styles/materialButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

const DropdownMenu = ({ isSelected, dropdownCondition, dropdownItems }) => {
  const router = useRouter();

  // Selected Index for Dropdown Item
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Function that shows Bottom border only when parent isSelected & Selected Index === Index
  const dropDownButtonCondition = (index) =>
    isSelected
      ? selectedIndex === index
        ? "border-[#e3a314] border-b-2"
        : "border-b-2 border-transparent"
      : "border-b-2 border-transparent";

  // Dropdown Button onClick Route
  const selectDropdownItem = (item,index) => {

    // Remove space, lower case selected Item for route
    const routeText = String(item).replace(" ", "-").toLowerCase();
    // const highlightItem = isSelected ? setSelectedIndex(index) : setSelectedIndex(null);
    
    switch(routeText){
      case "chat":
        router.push('/chat');
        break;
      case "contact-us":
        router.push('/contact-us');
        break;
      case "feedback":
        router.push('/feedback');
        break;
      default:
        break;
    }

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
              selectDropdownItem(item,index);
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
