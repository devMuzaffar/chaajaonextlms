import { ButtonBase } from "@mui/material/index";

const Button = ({ children, onClick }) => {

  const handleClick = () => {
    onClick();
  }

  return (
    <ButtonBase className="!rounded-full">
      <div className="truncate bg-primary w-full text-white text-sm rounded-full px-6 py-2 md:w-48" onClick={handleClick}>
        {children}
      </div>
    </ButtonBase>
  );
};

export default Button;
