"use client";
import { Box, SwipeableDrawer } from "@mui/material";
import { useEffect, useState } from "react";

const MobileDrawer = ({ open, setOpen, containerId, paperClass, children }) => {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    setContainer(document.getElementById(containerId));
  }, []);


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box style={{ position: 'relative' }}>
      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer(false)}
        classes={{
          paper: paperClass,
        }}
        PaperProps={{
          container: container,
          style: {
            position: 'absolute',
            border: 'none',
            top: 0,
            left: 0,
            zIndex: 0,
          }
        }}
        ModalProps={{
          container: container,
          disableEnforceFocus: true,
          style: { position: 'absolute', zIndex: 0 }
        }}
        BackdropProps={{
          style: {
            position: 'absolute',
            zIndex: 0,
          }
        }}
      >
        {children}
      </SwipeableDrawer>
    </Box>
  );
}

export default MobileDrawer;
