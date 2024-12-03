import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export const TableContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={clsx(`flex w-full flex-col`, className)}>{children}</div>
  );
};
