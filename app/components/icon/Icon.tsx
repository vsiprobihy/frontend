import { IconType } from "@/app/enums/icon/icon.type";

type IconProps = {
    name: IconType;
    className?: string;
};

const Icon: React.FC<IconProps> = ({name, className = ""}) => (
    <i className={`${name} ${className}`}></i>
);

export default Icon;
