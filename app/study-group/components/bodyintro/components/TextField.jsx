import { TextField as MaterialTextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const TextField = ({ label, placeholder, defaultValue }) => {
  const MuiTextField = styled(MaterialTextField)({
    "& .MuiInputBase-input": {
      fontSize: "14px",
      lineHeight: "20px",
      color: "#475569",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#e2e8f0",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#a11215",
    },
    "& .MuiInputLabel-root": {
      fontSize: "14px",
      lineHeight: "20px",
      color: "black",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      fontSize: "14px",
      lineHeight: "20px",
      color: "#a11215",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#a11215",
      },
    },
  });

  return (
    <MuiTextField
      fullWidth
      label={label}
      variant="outlined"
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
};

export default TextField;
