import LikesAndViews from "./LikesAndViews";
import TimeAndPlace from "./TimeAndPlace";

const views = 2424;
const likes = 342;
const title = "Ульратамарафон";
const text =
  "Об’єднані сміливістю: благодійний забіг та збір коштів на «Ловця шахедів»";

export const EventHeader = () => {
  return (
    <>
      <div className="mb-2 grid justify-center">
        <p className="justify-self-center rounded-md bg-grey-light-middle px-3 py-2 text-center text-sm font-bold uppercase italic text-white md:px-4 md:py-3 md:text-base">
          {title}
        </p>

        <h2 className="mb-4 text-center font-semibold leading-[1.2] text-dark ~text-2xl/[3.25rem] ~max-w-[19rem]/[58rem]">
          {text}
        </h2>
      </div>
      <TimeAndPlace />
      <LikesAndViews views={views} likes={likes} />
    </>
  );
};
