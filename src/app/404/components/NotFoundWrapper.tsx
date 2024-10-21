"use client";

import clsx from "clsx";
import { useResponsiveDevice } from "~/hooks";

interface NotFoundWrapperProps {
  children: React.ReactNode;
}

export const NotFoundWrapper: React.FC<NotFoundWrapperProps> = ({
  children,
}) => {
  const isResponsiveDevice = useResponsiveDevice();

  return (
    <main
      className={clsx(
        "flex min-h-screen flex-col items-center justify-center overflow-hidden text-center",
        { "py-20": isResponsiveDevice }
      )}
    >
      {children}
    </main>
  );
};
