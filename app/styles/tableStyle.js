import { createTheme } from "@mui/material/styles";
import { primary, secondary } from "../config/colors";

const tableStyle = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
});

export default tableStyle;
