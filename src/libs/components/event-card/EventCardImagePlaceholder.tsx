interface EventCardImagePlaceholderProps {
  title: string;
}

export const EventCardImagePlaceholder: React.FC<
  EventCardImagePlaceholderProps
> = (props) => {
  return (
    <div
      className={`h-full w-full rounded-xl bg-dark p-8 text-3xl font-semibold text-white md:text-4xl`}
    >
      {props.title}
    </div>
  );
};
