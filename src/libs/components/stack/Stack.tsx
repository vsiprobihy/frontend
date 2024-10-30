import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  spacing?: number;
}>;

export const Stack: React.FC<Props> = ({ children, spacing = 4 }) => {
  return <div className={`grid gap-${spacing}`}>{children}</div>;
};
