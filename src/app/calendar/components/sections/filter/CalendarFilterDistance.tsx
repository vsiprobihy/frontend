"use client";
import * as Slider from "@radix-ui/react-slider";
import { Input } from "~/components";
import { UserPublicEventFilterListData } from "~/api-client/types.gen";
import { useCalendarFilterParams } from "@/libs/hooks/calendar-filters/useCalendarFilterParams";

interface CalendarFilterDistanceProps {
  onChange: (
    newFilters: Partial<UserPublicEventFilterListData["query"]>
  ) => void;
}

const formatNumber = (value: string) => {
  const newValue = value.length ? parseInt(value) : 0;
  return isNaN(newValue) ? 0 : newValue;
};

export const CalendarFilterDistance: React.FC<CalendarFilterDistanceProps> = ({
  onChange,
}) => {
  // TODO call API for max value
  const maxValue = 42;
  const minValue = 0;

  const { filterParams, setCalendarFilterParams } = useCalendarFilterParams();

  const distanceMin =
    formatNumber((filterParams.distance_min as string) ?? "") || minValue;
  const distanceMax =
    formatNumber((filterParams.distance_max as string) ?? "") || maxValue;

  const valueWithinRange = (value: number) => {
    return Math.min(Math.max(value, minValue), maxValue);
  };

  const sliderThumbElement = (
    <Slider.Thumb
      className="block h-7 w-7 rounded-full border-2 border-dark bg-yellow focus:outline-none"
      aria-label="Volume"
    />
  );

  const commonInputProps = {
    className: `max-w-24`,
    type: "number",
    // centerText: true,
  };

  const handleSliderChange = (newValues: number[]) => {
    setCalendarFilterParams((prevState) => ({
      ...prevState,
      distance_min: String(newValues[0]),
      distance_max: String(newValues[1]),
    }));

    onChange({
      distance_min: newValues[0],
      distance_max: newValues[1],
    });
  };

  const handleInputChange = (value: string, index: number) => {
    const numberValue = valueWithinRange(formatNumber(value));
    const newValues =
      index === 0 ? [numberValue, distanceMax] : [distanceMin, numberValue];

    setCalendarFilterParams((prevState) => ({
      ...prevState,
      distance_min: String(newValues[0]),
      distance_max: String(newValues[1]),
    }));

    onChange({
      distance_min: newValues[0],
      distance_max: newValues[1],
    });
  };

  return (
    <div className={`flex flex-col gap-3`}>
      <p className={`font-semibold uppercase text-white`}>
        {`Дистанція`} <span className={`text-grey`}>{`(км)`}</span>
      </p>
      <div className={`flex w-full flex-row items-center gap-2`}>
        <Input
          value={distanceMin + ``}
          onValueChange={(newValue) => handleInputChange(newValue, 0)}
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
          onValueChange={(newValue) => handleInputChange(newValue, 1)}
          {...commonInputProps}
        />
      </div>
    </div>
  );
};
