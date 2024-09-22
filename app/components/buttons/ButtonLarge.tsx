import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const ButtonLarge: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={clsx(
        `text-4.5 bg-hot-orange active:text-yellow disabled: block rounded-full p-6 text-center font-semibold uppercase text-white hover:bg-dark disabled:bg-grey-light disabled:text-grey`,
        props.fullWidth && "w-full"
      )}
    >
      {props.children}
    </button>
  );
};

export default ButtonLarge;
