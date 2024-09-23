import { ComponentPropsWithRef } from "react";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  direction: "left" | "right";
}

const UpcomingEventsCarouselButton: React.FC<ButtonProps> = (props) => {
  const { direction, ...buttonProps } = props;
  return (
    <button
      className={
        "relative flex h-[1.875rem] w-[1.875rem] items-center justify-center rounded-lg bg-white text-dark hover:bg-grey-light md:h-[2.5rem] md:w-[2.5rem]"
      }
      {...buttonProps}
    >
      <span className={``}>{direction === "left" ? "<" : ">"}</span>
    </button>
  );
};

export default UpcomingEventsCarouselButton;
