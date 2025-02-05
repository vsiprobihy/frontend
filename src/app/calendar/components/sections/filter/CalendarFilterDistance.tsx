"use client";
import * as Slider from "@radix-ui/react-slider";
import { Input } from "~/components";
import { useCalendarFilterParams } from "@/libs/hooks/calendar-filters/useCalendarFilterParams";

const formatNumber = (value: string) => {
  const newValue = value.length ? parseInt(value) : 0;
  return isNaN(newValue) ? 0 : newValue;
};

export const CalendarFilterDistance: React.FC = () => {
  // TODO call API for max value
  const maxValue = 42;
  const minValue = 0;

  const { filterParams, setCalendarFilterParams } = useCalendarFilterParams();

  const distanceMin =
    typeof filterParams.distance_min === "string"
      ? formatNumber(filterParams.distance_min)
      : minValue;
  const distanceMax =
    typeof filterParams.distance_max === "string"
      ? formatNumber(filterParams.distance_max)
      : maxValue;

  const sliderThumbElement = (
    <Slider.Thumb
      className="block h-7 w-7 rounded-full border-2 border-dark bg-yellow focus:outline-none"
      aria-label="Volume"
    />
  );

  const commonInputProps = {
    className: `max-w-24`,
    type: "number",
  };

  const handleSliderChange = (newValues: number[]) => {
    // TODO update the search params when user releases the slider, not during the drag
    setCalendarFilterParams((prevState) => ({
      ...prevState,
      distance_min: String(newValues[0]),
      distance_max: String(newValues[1]),
    }));
  };

  const handleMaxInputChange = (value: string) => {
    setCalendarFilterParams((prevState) => ({
      ...prevState,
      distance_max: value,
    }));
  };

  const handleMinInputChange = (value: string) => {
    setCalendarFilterParams((prevState) => ({
      ...prevState,
      distance_min: value,
    }));
  };

  return (
    <div className={`flex flex-col gap-3`}>
      <p className={`font-semibold uppercase text-white`}>
        {`Дистанція`} <span className={`text-grey`}>{`(км)`}</span>
      </p>
      <div className={`flex w-full flex-row items-center gap-2`}>
        <Input
          value={distanceMin + ``}
          onValueChange={handleMinInputChange}
          {...commonInputProps}
        />
        <Slider.Root
          className="relative flex h-7 w-full flex-1 cursor-pointer touch-none select-none items-center"
          value={[distanceMin, distanceMax]}
          onValueChange={handleSliderChange}
          max={maxValue}
          min={minValue}
        >
          <Slider.Track className="relative h-4 w-full rounded-full bg-grey">
            <Slider.Range className="absolute h-full rounded-full bg-yellow" />
          </Slider.Track>

          {sliderThumbElement}
          {sliderThumbElement}
        </Slider.Root>
        <Input
          value={distanceMax + ``}
          onValueChange={handleMaxInputChange}
          {...commonInputProps}
        />
      </div>
    </div>
  );
};
