import { primary, secondary, secondaryShade } from "../config/colors";

// 
// Selected Button Styling
// 
export const buttonSelected = {
  cursor: "auto",
  backgroundColor: secondary,
  padding: "10px",
  width: "100%",
  borderRadius: "12px",
  justifyContent: "start",
  alignItems: "center",
  fontFamily: "poppins",
  textTransform: "none",
  fontSize: "14px",
  lineHeight: "20px",
  minWidth: "24px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

// 
// Un-selected Button Styling
// 
export const button = {
  padding: "10px",
  width: "100%",
  borderRadius: "12px",
  justifyContent: "start",
  alignItems: "center",
  fontFamily: "poppins",
  textTransform: "none",
  fontSize: "14px",
  lineHeight: "20px",
  color: "white",
  "&:hover": {
    backgroundColor: secondaryShade,
  },
  minWidth: "24px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

// 
// Icon-only Button Styling
// 
export const iconSelected = {
  backgroundColor: secondary,
  padding: "10px",
  borderRadius: "12px",
  minWidth: "24px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

// 
// Dropdown button Styling
// 
export const ddButton = {
  fontSize: "14px",
  lineHeight: "20px",
  color: "white",
  padding: "none",
  textDecoration: "none",
  fontFamily: "poppins",
  textTransform: "none",
  justifyContent: "start",
  padding: "12px 2.95rem",
  width: "100%",
  "&:hover": {
    color: "white",
    backgroundColor: "transparent",
    fontWeight: "bold",
  },
};

// 
// View All Button Styling
// 
export const viewAllButton = ({ hasOutline }) => {
  return {
    padding: "4px 12px",
    borderRadius: "16px",
    color: primary,
    border: hasOutline ? `1px solid ${primary}` : "",
  };
};
