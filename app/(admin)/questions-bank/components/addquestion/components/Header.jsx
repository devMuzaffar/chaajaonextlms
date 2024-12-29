import { IconButton } from "@mui/material/index";
import { IoMdClose } from "react-icons/io";


const Header = ({setOpen}) => {
  return (
    <div className="flex justify-between">
      <h2 className="text-xl text-gray-800 font-medium">Add Your Question</h2>
      <div className="md:hidden" onClick={() => setOpen(false)}>
        <IconButton>
          <IoMdClose size="24" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
