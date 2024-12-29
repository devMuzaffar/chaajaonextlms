import { IconButton } from "@mui/material";
import { MdDelete, MdEdit } from "react-icons/md";

const ActionButtons = () => {
  return (
    <div className="flex items-center h-full justify-center gap-2">
      <IconButton aria-label="edit">
        <MdEdit size={24}/>
      </IconButton>
      <IconButton aria-label="delete">
      <MdDelete size={24}/>
      </IconButton>
    </div>
  );
};

export default ActionButtons;
