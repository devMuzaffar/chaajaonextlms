import { Button } from "@mui/material";
import { ddButton } from "../../../styles/materialButton";
import { useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import pathList from "../../../list/pathlist";
import { SidebarContext } from "@/app/context/SidebarContext";

const DropdownMenu = ({ isSelected, dropdownCondition }) => {
  const router = useRouter();
  const pathName = usePathname();
  const { dropdownList } = useContext(SidebarContext);

  // Selected Index for Dropdown Item
  const [selectedIndex, setSelectedIndex] = useState(null);

  // de-highlights dropdown selected button upon changing routes
  // Persist highlighted button upon refreshing page
  useEffect(() => {
    if (pathList.includes(pathName)) {
      setSelectedIndex(null);
    } else {
      // Method that scans and converts both pathName and Text to normalized form
      // if normalized form both text matches, returns selected Index
      // else -1
      const matchedIndex = dropdownList.findIndex((text) => {
        const convertedPath = pathName
          .replace(/^\/+/, "")
          .replace(/\s+/g, "-")
          .toLowerCase();
        const convertedText = text.toLowerCase().replace(" ", "-");
        return convertedText === convertedPath;
      });

      // Sets Selected Index only if found to persist selection
      setSelectedIndex(matchedIndex !== -1 ? matchedIndex : null);
    }
  }, [pathName, dropdownList]);

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
