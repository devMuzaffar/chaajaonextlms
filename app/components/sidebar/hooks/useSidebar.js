import {
  formatToPath,
  normalizedText,
} from "@/app/utils/helpers/stringUtils";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import menuList from "../../../list/menuList";

const useSidebar = ({
  setDropdownList,
  isSidebarFixed,
  setIsSidebarHover,
  setSelectedIndex,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  let currentIndex = null;

  // 
  // UseEffect to stick selectedIndex path even when page is refreshed
  // 
  useEffect(() => {
    currentIndex = menuList.reduce((acc, { text }, index) => {
      const currentPath = normalizedText(pathname);
      const firstWord = text.substring(
        0,
        text.indexOf(" ") === -1 ? text.length : text.indexOf(" ")
      );
      if (pathname === "/") return 0;
      if (currentPath.includes(firstWord)) return index;

      // Return default -1 value
      return acc;
    }, -1);

    // If Not found, then select Home by default
    if (currentIndex === -1) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(currentIndex);
    }
  }, [pathname]);

  // 
  // Handle Navigation Function
  // 
  const handleNavigation = (index, text, dropdownList) => {

    // Sets Index
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

  // 
  // Dynamic Sidebar Methods
  // 
  const expandSidebar = () => isSidebarFixed && setIsSidebarHover(true);
  const minimizeSidebar = () => isSidebarFixed && setIsSidebarHover(false);

  return {
    handleNavigation,
    expandSidebar,
    minimizeSidebar,
  };
};

export default useSidebar;
