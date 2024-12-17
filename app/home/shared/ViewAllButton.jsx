import { viewAllButton } from "@/app/styles/materialButton";
import { ButtonBase } from "@mui/material";

const ViewAllButton = ({ hasOutline }) => {
  const fontThick = hasOutline ? "font-medium" : "font-normal";

  return (
    <ButtonBase
      sx={viewAllButton({ hasOutline })}
      className={`text-xs truncate font-normal ${fontThick}`}
    >
      View All
    </ButtonBase>
  );
};

export default ViewAllButton;
