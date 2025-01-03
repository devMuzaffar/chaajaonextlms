import { IconButton } from "@mui/material";
import { MdDelete, MdEdit } from "react-icons/md";

const ActionsCell = () => {
  return (
    <div className="flex items-center h-full justify-center gap-2">
        <IconButton aria-label="edit" color="primary">
          <MdEdit size={24} />
        </IconButton>
        <IconButton aria-label="delete" color="error">
          <MdDelete size={24} />
        </IconButton>
      </div>
  )
}

export default ActionsCell