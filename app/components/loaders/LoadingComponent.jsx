import LinearProgress from "@mui/material/LinearProgress";
import { ThemeProvider } from "@mui/material/styles";
import uiStyle from "../../styles/uiStyle";

const LoadingComponent = () => {
  return (
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

export default LoadingComponent;
