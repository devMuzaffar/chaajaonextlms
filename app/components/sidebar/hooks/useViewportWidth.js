// A Custom Hook to get Current Viewport Width
// For Responsiveness

import { useEffect, useState } from "react";

const useViewportWidth = () => {
  const [currentWidth, setCurrentWidth] = useState(0);

  const readViewportWidth = () => {
    setCurrentWidth(window.innerWidth);
  };

  useEffect(() => {
    readViewportWidth();

    window.addEventListener("resize", readViewportWidth);

    return () => window.removeEventListener("resize", readViewportWidth);
  }, [currentWidth]);

  return currentWidth;
};

export default useViewportWidth;
