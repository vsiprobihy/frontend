import clsx from "clsx";

interface BadgeProps {
  children?: React.ReactNode;
  count: number;
  className?: string;
}

const Badge: React.FC<BadgeProps> = (props) => {
  return (
    <div className={clsx(`flex`, props.className)}>
      <div className={`relative`}>
        <p className={`inline`}>{props.children}</p>
        <div
          className={`absolute -right-6 -top-3 flex h-6 w-6 items-center justify-center rounded-full bg-yellow text-center text-xs font-medium leading-none text-dark md:-right-8 md:-top-4 md:h-8 md:w-8 md:text-base`}
        >
          {props.count}
        </div>
      </div>
    </div>
  );
};

export default Badge;
