import { Menu, MenuItem } from "@mui/material/index";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

const DropdownMenu = ({
  anchorEl,
  open,
  setAnchorEl,
  list,
  className,
  anchor,
}) => {
  const handleClose = () => setAnchorEl(null);

  const menuClasses = {
    paper: `!rounded-lg mt-2 ${className}`,
  };

  return (
    <Menu
      autoFocus={false}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: anchor ? anchor : "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: anchor ? anchor : "center",
      }}
      open={open}
      onClose={handleClose}
      classes={menuClasses}
    >
      {/* Item */}
      {list.map((item, index) => (
        <MenuItem key={index} onClick={handleClose}>
          {item.icon && (
            <ListItemIcon classes={{ root: "!text-gray-800" }}>
              {item.icon}
            </ListItemIcon>
          )}
          <ListItemText>
            <p className={`text-gray-800 ${className}`}>{item.text}</p>
          </ListItemText>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default DropdownMenu;
