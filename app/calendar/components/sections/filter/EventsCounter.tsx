import Badge from "@/app/components/Badge";

const text = {
  events: `Події`,
};

const EventsCounter: React.FC = () => {
  return (
    <Badge count={0}>
      <span className={`h2 text-white`}>{text.events}</span>
    </Badge>
  );
};

export default EventsCounter;
