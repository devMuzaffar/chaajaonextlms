import { createTheme } from "@mui/material/styles";
import { primary, secondary } from "../config/colors";

const uiStyle = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
});

export default uiStyle;