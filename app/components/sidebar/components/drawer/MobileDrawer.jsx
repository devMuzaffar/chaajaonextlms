import { SidebarContext } from "@/app/context/SidebarContext";
import Drawer from "@mui/material/Drawer";
import { useContext, useEffect } from "react";
import useViewportWidth from "../../hooks/useViewportWidth";

export const MobileDrawer = ({ children }) => {
  const { isMobileSidebar, setIsMobileSidebar } = useContext(SidebarContext);
  const currentWidth = useViewportWidth();

  const toggleDrawer = (newOpen) => () => {
    setIsMobileSidebar(newOpen);
  };

  useEffect(() => {
    currentWidth > 768 && setIsMobileSidebar(false);
  }, [currentWidth]);

  return (
    <div>
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            width: 260,
          },
        }}
        open={isMobileSidebar}
        onClose={toggleDrawer(false)}
      >
        {children}
      </Drawer>
    </div>
  );
};

export default MobileDrawer;
