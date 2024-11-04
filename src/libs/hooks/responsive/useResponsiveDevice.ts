import { useState, useEffect, useCallback } from "react";

export const useResponsiveDevice = () => {
  const [isResponsiveDevice, setIsResponsiveDevice] = useState(false);

  const handleResize = useCallback(() => {
    const isSmallScreen = window.innerWidth <= 768;
    const isMediumScreen = window.innerWidth > 768 && window.innerWidth < 1024;
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsResponsiveDevice(isSmallScreen || (isTouchDevice && isMediumScreen));
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return isResponsiveDevice;
};
