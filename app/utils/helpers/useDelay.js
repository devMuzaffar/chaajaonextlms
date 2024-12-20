import { useEffect } from "react";

const useDelay = (callBack, delay) => {
  useEffect(() => {
    const timeoutId = setTimeout(callBack, delay);
    return () => clearTimeout(timeoutId);
  }, []);

  return <div>useDelay</div>;
};

export default useDelay;
