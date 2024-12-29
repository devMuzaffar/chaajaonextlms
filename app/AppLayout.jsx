"use client";
import { useState } from "react";
import Loading from "./loading";
import useDelay from "./utils/helpers/useDelay";
import { usePathname } from "next/navigation";
import MainComponent from "./components/layout/MainComponent";

const AppLayout = ({ children }) => {
  const [isFirstTime, setIsFirstTime] = useState(true);
  const pathname = usePathname();

  // Loading Timer
  useDelay(() => setIsFirstTime(false), 250);

  // const foundPage = menuList.includes(removeSlashPath(pathname));

  return (
    <div className="app flex justify-end relative bg-contentbg overflow-x-hidden">
      {isFirstTime ? (
        <Loading isMain={true} />
      ) : (
        <MainComponent>{children}</MainComponent>
      )}
    </div>
  );
};

export default AppLayout;
