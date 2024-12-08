"use client";
import Drawer from "@mui/material/Drawer";
import ChatHeader from "../../chatheader/ChatHeader";
import { Box } from "@/node_modules/@mui/material/index";
import { useEffect, useState } from "react";

const MobileDrawer = ({ open, setOpen }) => {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    setContainer(document.getElementById('chat-body'));
  }, []);


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box style={{ position: 'relative' }}>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          container: container,
          style: {
            position: 'absolute',
            maxWidth: 'initial',
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
        <ChatHeader />
      </Drawer>
    </Box>
  );
}

export default MobileDrawer;
