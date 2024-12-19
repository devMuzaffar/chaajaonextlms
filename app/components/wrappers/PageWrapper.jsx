// "use client";
import MotionWrap from "../animations/MotionWrap";
import { useContext, useEffect } from "react";
import LoadingComponent from "../loaders/LoadingComponent";
import { usePathname } from "next/navigation";
import { SidebarContext } from "@/app/context/SidebarContext";

const PageWrapper = ({ children }) => {

  const { dropdownList, isLoading, setIsLoading } = useContext(SidebarContext);

  const pathname = usePathname();

  // Hide Loading
  const handleComplete = () => setIsLoading(false);

  // useEffect - Hides Loading UI once Component is mounted
  // Based on Pathname and dropdown List
  useEffect(() => {

    const timeoutId = setTimeout(handleComplete, 250);
    return () => clearTimeout(timeoutId);
    
  }, [dropdownList, pathname]);

  return isLoading ? <LoadingComponent /> : <MotionWrap>{children}</MotionWrap>;
};

export default PageWrapper;
