import clsx from "clsx";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export const TableBody: React.FC<Props> = ({ children, className }) => {
  return <tbody className={clsx(className)}>{children}</tbody>;
};
