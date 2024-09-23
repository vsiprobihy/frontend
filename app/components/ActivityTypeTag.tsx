import clsx from "clsx";

interface ActivityTypeTagProps {
  children: React.ReactNode;
  size?: "default" | "large";
}

const ActivityTypeTag: React.FC<ActivityTypeTagProps> = (props) => {
  return (
    <div
      className={clsx(
        `inline-flex rounded-full bg-grey-light-middle px-3 py-2 text-[0.875rem] font-medium uppercase leading-none text-white md:px-6 md:py-3`
      )}
    >
      {props.children}
    </div>
  );
};

export default ActivityTypeTag;
