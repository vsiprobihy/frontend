import { IconType } from "~/enums/icon/icon.type";
import { Icon } from "~/components";

interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
  icon?: IconType;
}

export const Label: React.FC<LabelProps> = (props) => {
  return (
    <div className={`flex flex-row items-center gap-2`}>
      {props.icon && <Icon name={props.icon} />}
      <label
        className={`text-base font-semibold uppercase`}
        htmlFor={props.htmlFor}
      >
        {props.children}
      </label>
    </div>
  );
};
