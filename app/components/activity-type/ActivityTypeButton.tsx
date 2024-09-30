import clsx from "clsx";
import Button from "@/app/components/buttons/Button";

export interface ActivityTypeButtonProps {
  children: React.ReactNode;
  id: string;
  selected?: boolean;
  onClick?: () => void;
}

const ActivityTypeButton: React.FC<ActivityTypeButtonProps> = (props) => {
  return (
    <Button
      onClick={props.onClick}
      className={clsx(
        `inline-flex rounded-full border px-3 py-2.5 text-[0.875rem] font-semibold uppercase leading-none md:px-6 md:py-3 md:text-base`,
        props.selected
          ? "border-transparent bg-yellow text-dark"
          : "border-white bg-grey-dark text-white hover:bg-dark"
      )}
    >
      {props.children}
    </Button>
  );
};

export default ActivityTypeButton;
