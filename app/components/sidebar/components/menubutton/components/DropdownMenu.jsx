import { Button } from "@mui/material";
import { ddButton } from "@/app/styles/materialButton";
import { useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { SidebarContext } from "@/app/context/SidebarContext";
import { normalizedText } from "@/app/utils/helpers/stringUtils";
import menuList from "../../../list/menuList";

const DropdownMenu = ({ isSelected, dropdownCondition }) => {
  const router = useRouter();
  const pathName = usePathname();
  const { dropdownList, setIsLoading } = useContext(SidebarContext);

  // Selected Index for Dropdown Item
  const [selectedIndex, setSelectedIndex] = useState(null);

  // de-highlights dropdown selected button upon changing routes
  // Persist highlighted button upon refreshing page
  useEffect(() => {
    const currentPath = normalizedText(pathName);

    menuList.forEach(({ dropdown }) => {
      // If dropdown key exist?
      if (dropdown) {
        if (dropdownList.includes(currentPath)) {
          const matchedIndex = dropdownList.findIndex(
            (text) => text === currentPath
          );
          isSelected &&
            setSelectedIndex(matchedIndex !== -1 ? matchedIndex : null);
        }
      }
    });
  }, [dropdownList]);

  const dropDownButtonCondition = (index) =>
    selectedIndex === index
      ? "border-[#e3a314] border-b-2"
      : "border-b-2 border-transparent";

  // Dropdown Button onClick Route
  const selectDropdownItem = (item, index) => {
    // Highlights text only when parent button is selected
    isSelected ? setSelectedIndex(index) : setSelectedIndex(null);

    // Remove space + lower case of Selected String for route
    // Converted String will navigate to other page
    const routeText = `/${item.replace(" ", "-").toLowerCase()}`;
    router.push(routeText);
  };

  return (
    <div
      className={`transition-all flex flex-col justify-center overflow-hidden ${dropdownCondition}`}
    >
      {dropdownList.map((item, index) => (
        <div key={index}>
          <Button
            sx={ddButton}
            variant="text"
            onClick={() => {
              setIsLoading(true);
              selectDropdownItem(item, index);
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
