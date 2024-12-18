// "use client";
import MotionWrap from "../animations/MotionWrap";
import { useContext, useEffect } from "react";
import LoadingComponent from "../loaders/LoadingComponent";
import { usePathname } from "next/navigation";
import { SidebarContext } from "@/app/context/SidebarContext";

const PageWrapper = ({ children }) => {

  const {isLoading, setIsLoading } = useContext(SidebarContext);

  const pathname = usePathname();

  // Show Loading
  const handleStart = () => setIsLoading(true);

  // Hide Loading
  const handleComplete = () => setIsLoading(false);

  useEffect(() => {
    return () => handleComplete();
  }, [pathname]);

  return isLoading ? <LoadingComponent /> : <MotionWrap>{children}</MotionWrap>;
};

export default PageWrapper;
