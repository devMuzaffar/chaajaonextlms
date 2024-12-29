import { IconButton } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { MdClose } from "react-icons/md";

const direction = {
  vertical: "top",
  horizontal: "center",
};

const Notification = ({ isOpen, onClose, message, time }) => {
  // Handle Close
  const handleClose = () => {
    onClose();
  };

  // Close Button
  const CloseButton = () => (
    <IconButton size="small" color="inherit" onClick={handleClose}>
      <MdClose size={22} />
    </IconButton>
  );

  return (
    <Snackbar
      anchorOrigin={direction}
      autoHideDuration={time}
      action={<CloseButton />}
      open={isOpen}
      onClose={handleClose}
      message={message}
    />
  );
};

export default Notification;
