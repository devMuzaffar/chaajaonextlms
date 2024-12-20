"use client";
import LinearProgress from "@mui/material/LinearProgress";
import { CircularProgress } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import uiStyle from "./styles/uiStyle";

const Loading = ({ isMain }) => {
  return !!isMain ? (
    <div className="w-full h-full bg-gray-950 flex flex-col items-center justify-center gap-5">
      <ThemeProvider theme={uiStyle}>
        <img src="./assets/logo.png" />
        <CircularProgress color="secondary" />
      </ThemeProvider>
    </div>
  ) : (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6">
      <ThemeProvider theme={uiStyle}>
        <p className="text-2xl font-medium">Loading...</p>
        <div className="w-72 sm:w-96">
          <LinearProgress />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Loading;
