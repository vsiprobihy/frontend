import { useEffect } from "react";

export const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
  buttonRef?: React.RefObject<HTMLElement>
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      if (
        buttonRef?.current &&
        buttonRef.current.contains(event.target as Node)
      ) {
        return;
      }

      callback();
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, buttonRef]);
};
