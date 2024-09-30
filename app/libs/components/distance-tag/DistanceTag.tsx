interface DistanceTagProps {
  children: React.ReactNode;
}

export const DistanceTag: React.FC<DistanceTagProps> = (props) => {
  return (
    <div
      className={`rounded-lg bg-grey-light px-4 py-2 text-[0.875rem] font-semibold uppercase leading-none text-dark md:text-base`}
    >
      {props.children}
    </div>
  );
};
