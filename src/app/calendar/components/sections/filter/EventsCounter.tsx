import { Badge } from "~/components";

const text = {
  events: `Події`,
};

export const EventsCounter: React.FC = () => {
  return (
    <Badge count={0}>
      <span className={`h2 text-white`}>{text.events}</span>
    </Badge>
  );
};
