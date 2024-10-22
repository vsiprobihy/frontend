import { NextPage } from "next";

interface EventPageProps {
  params: { id: string };
}

const Event: NextPage<EventPageProps> = ({ params }) => {
  const { id } = params;

  return (
    <main className="bg-dark p-40 text-center text-3xl text-white">
      <p>Event ID: {id}</p>
    </main>
  );
};

export default Event;
