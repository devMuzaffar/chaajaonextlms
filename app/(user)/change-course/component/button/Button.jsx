"use client";

import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const Button = ({ children, isDisabled }) => {
  const MaterialButton = styled(MuiButton)(({ theme }) => ({
    backgroundColor: "#a11215",
    borderRadius: "9999px",
    boxShadow: "none",
    textTransform: "none",
    "&:hover": {
      boxShadow: "none",
    },
    width: "100%",
    height: "46px",
    [theme.breakpoints.up("sm")]: {
      width: "200px",
    },
  }));

  return <MaterialButton disabled={isDisabled} variant="contained">{children}</MaterialButton>;
};

export default Button;
