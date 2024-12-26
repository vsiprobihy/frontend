import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export const TableHead: React.FC<Props> = ({ children, className }) => {
  return <thead className={clsx(className)}>{children}</thead>;
};
