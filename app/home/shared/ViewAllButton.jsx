import { ButtonBase } from "@/node_modules/@mui/material/index";

const ViewAllButton = ({ hasOutline }) => {
  const fontThick = hasOutline ? "font-medium" : "font-normal";
  const border = hasOutline ? "1px solid #a11215" : "";

  return (
    <ButtonBase
      sx={{
        padding: "4px 12px",
        borderRadius: "16px",
        color: "#a11215",
        border: border,
      }}
      className={`text-xs truncate font-normal ${fontThick}`}
    >
      View All
    </ButtonBase>
  );
};

export default ViewAllButton;
