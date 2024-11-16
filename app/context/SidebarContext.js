import { createContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({children}) => {

    const [isSidebarHover, setIsSidebarHover] = useState(true);

    return (
    <SidebarContext.Provider value={{isSidebarHover, setIsSidebarHover}}>
        {children}
    </SidebarContext.Provider>
    )
}

export default SidebarProvider;