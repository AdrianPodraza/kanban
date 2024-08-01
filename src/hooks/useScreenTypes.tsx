import { useState, useEffect } from "react";

const useScreenType = (): string => {
  const [screenSize, setScreenSize] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setScreenSize("mobile");
      else if (window.innerWidth >= 640 && window.innerWidth < 1024)
        setScreenSize("tablet");
      else setScreenSize("desktop");
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenType;
