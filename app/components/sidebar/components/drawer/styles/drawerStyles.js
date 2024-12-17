import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

const maxWidth = 260;
const minWidth = 62;

// Maximized Theme
const maximizedDrawerTheme = (theme) => ({
  width: maxWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  borderRadius: "12px",
});

// Minimzed Theme
const minimizedDrawerTheme = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  borderRadius: "12px",
  width: minWidth,
});

// Custom MUI Drawer
export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "fixed",
})(({ theme, open, fixed }) => ({
  width: "auto",
  maxWidth: "100%",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  position: fixed ? "fixed" : "static",
  zIndex: "999999",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...maximizedDrawerTheme(theme),
        "& .MuiDrawer-paper": maximizedDrawerTheme(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...minimizedDrawerTheme(theme),
        "& .MuiDrawer-paper": minimizedDrawerTheme(theme),
      },
    },
  ],
}));
