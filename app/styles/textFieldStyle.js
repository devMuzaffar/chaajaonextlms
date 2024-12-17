import { primary } from "../config/colors";

const textFieldStyle = {
    "& .MuiInputBase-input": {
      fontSize: "14px",
      lineHeight: "20px",
      color: "#475569",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#e2e8f0",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: primary,
    },
    "& .MuiInputLabel-root": {
        fontSize: "14px",
        lineHeight: "20px",
        color: "black",
    },
    "& .MuiInputLabel-root.Mui-focused": {
        fontSize: "14px",
        lineHeight: "20px",
        color: primary,
    },
  }

export default textFieldStyle;