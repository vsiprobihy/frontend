import { IconType } from "~/enums";

type IconProps = {
  name: IconType;
  className?: string;
};

export const Icon: React.FC<IconProps> = ({ name, className = "" }) => (
  <i className={`${name} ${className}`}></i>
);
