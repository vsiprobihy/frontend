import { ComponentPropsWithRef } from "react";
import { IconType } from "~/enums/enums";
import { Icon } from "~/components/icon/Icon";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  direction: "left" | "right";
}

export const CarouselButton: React.FC<ButtonProps> = (props) => {
  const { direction, ...buttonProps } = props;

  const iconName = direction === "left" ? IconType.LEFT : IconType.RIGHT;

  return (
    <button
      className={
        "relative flex h-[1.875rem] w-[1.875rem] items-center justify-center rounded-lg bg-white text-dark hover:bg-grey-light md:h-[2.5rem] md:w-[2.5rem]"
      }
      {...buttonProps}
    >
      <Icon name={iconName} />
    </button>
  );
};
