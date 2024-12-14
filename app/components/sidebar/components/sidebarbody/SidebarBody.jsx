import { formatToPath, removeSlashPath } from "@/app/utils/helpers/stringUtils";
import menuList from "../../list/menuList";
import MenuButton from "../menubutton/MenuButton";
import SidebarHeader from "../sidebarheader/SidebarHeader";
import { useRouter, usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "@/app/context/SidebarContext";

const SidebarBody = () => {
  const { setDropdownList } = useContext(SidebarContext);

  // State for Selecting Index button
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  // UseEffect to persist selectedIndex path even when page is refreshed
  useEffect(() => {
    // Method to find current Index from current Route Path by searching from menuList
    // Assigns the founded Index to Selected Index
    const currentIndex = menuList.findIndex(({ text }) => {
      const firstWord = text
        .toLowerCase()
        .substring(
          0,
          text.indexOf(" ") === -1 ? text.length : text.indexOf(" ")
        );
      const currentPath = removeSlashPath(pathname);
      return currentPath.includes(firstWord);
    });

    // If Not found, then select Home by default
    if (currentIndex === -1) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(currentIndex);
    }
  }, [pathname]);

  // Handle Navigation Function
  const handleNavigation = (index, text, dropdownList) => {
    setSelectedIndex(index);

    // Route to specific path only if has no dropdown List
    const routeText = formatToPath(text);
    const routePath = `/${routeText}`;

    if (!dropdownList) {
      if (routeText.includes("home")) {
        router.push("/");
      } else {
        router.push(routePath);
      }
    }

    setDropdownList(dropdownList ? dropdownList : []);
  };

  return (
    <div
      className="bg-sidebar text-white h-full flex flex-col lg:border-2 lg:rounded-xl"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {/* Logo with hide button */}
      <SidebarHeader />

      {/* Menu List */}
      <div className="flex flex-col gap-5 py-6 overflow-y-scroll hide-scrollbar">
        {/* Item */}
        {menuList.map(({ text, icon, dropdown }, index) => (
          <MenuButton
            key={index}
            icon={icon}
            text={text}
            isSelected={selectedIndex === index}
            onClick={() => {
              handleNavigation(index, text, dropdown);
            }}
            hasDropDown={
              text.includes("Practice Zone") || text.includes("Support")
            }
            isSidebarFixed={false}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarBody;
