import { NextPage } from "next";

interface EventPageProps {
  params: { id: string };
}

const Event: NextPage<EventPageProps> = ({ params }) => {
  const { id } = params;

  return (
    <main className="p-40 text-center text-3xl text-dark">
      <p>Event ID: {id}</p>
    </main>
  );
};

export default Event;
