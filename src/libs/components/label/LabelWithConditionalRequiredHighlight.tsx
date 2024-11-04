import clsx from "classnames";

type Props = {
  text: string;
  requiredField: boolean;
  condition: boolean;
  className?: string;
  classNameHighlight?: string;
};

const LabelWithConditionalRequiredHighlight: React.FC<Props> = ({
  text,
  requiredField,
  condition,
  className,
  classNameHighlight,
}) => {
  return (
    <span
      className={clsx("text-[14px] font-medium leading-4 text-dark", className)}
    >
      {text}
      {requiredField && (
        <span
          className={clsx("ml-1 font-medium", classNameHighlight, {
            "text-orange-hot": condition,
          })}
        >
          *
        </span>
      )}
    </span>
  );
};

export default LabelWithConditionalRequiredHighlight;
