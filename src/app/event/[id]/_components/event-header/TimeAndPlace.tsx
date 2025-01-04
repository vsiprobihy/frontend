import { Icon } from "@/libs/components";
import { dates } from "./data";

const TimeAndPlace = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,max-content))] justify-center ~mb-9/8 ~gap-6/11">
      {dates.map(({ icon, title, text }) => (
        <div
          key={text}
          className="grid grid-flow-col items-center justify-start gap-3 text-3xl"
        >
          <Icon name={icon} className="text-2xl text-dark" />

          <div>
            <h4 className="text-sm font-semibold uppercase text-grey md:text-grey-dark">
              {title}
            </h4>
            <p className="text-base font-medium text-dark">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeAndPlace;
