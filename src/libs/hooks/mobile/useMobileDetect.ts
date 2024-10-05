import { useState, useEffect } from "react";

export const useMobileDetect = () => {
  const [isMobileDetect, setIsMobileDetect] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 768;
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobileDetect(isSmallScreen && isTouchDevice);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobileDetect;
};
