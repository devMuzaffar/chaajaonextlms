"use client";
import { createContext, useState } from "react";
export const UIContext = createContext();

const UIProvider = ({ children }) => {

  // Checks if Page is exist or not
  const [isExist, setIsExist] = useState(true);

  return (
    <UIContext.Provider
      value={{
        isExist,
        setIsExist,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
