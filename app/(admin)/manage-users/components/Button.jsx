import { ButtonBase } from "@mui/material";

const Button = ({ children, onClick, className }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <ButtonBase className={`!rounded-full ${className}`}>
      <div
        className="truncate bg-primary w-full text-white text-sm rounded-full px-6 py-2"
        onClick={handleClick}
      >
        {children}
      </div>
    </ButtonBase>
  );
};

export default Button;
