import { CircularProgress } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import uiStyle from "../../styles/uiStyle"

const Loading = () => {

  return (
    <div className="w-full h-full bg-gray-950 flex flex-col items-center justify-center gap-5">
        <ThemeProvider theme={uiStyle}>
            <img src="./assets/logo.png"/>
            <CircularProgress color="secondary"/>
        </ThemeProvider>
    </div>
  )
}

export default Loading