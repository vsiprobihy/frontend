import clsx from "clsx";

type Props = {
  message?: string;
  className?: string;
};

export const ProfileFormError: React.FC<Props> = ({ message, className }) => {
  if (!message) return null;

  return (
    <p className={clsx("mb-4 block text-sm font-medium text-red", className)}>
      {message}
    </p>
  );
};
