"use client";
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";
import { Input } from "~/components";

const formatNumber = (value: string) => {
  const newValue = value.length ? parseInt(value) : 0;
  return isNaN(newValue) ? 0 : newValue;
};

export const CalendarFilterDistance: React.FC = () => {
  // TODO call API for max value
  const maxValue = 42;
  const minValue = 0;

  const valueWithinRange = (value: number) => {
    return Math.min(Math.max(value, minValue), maxValue);
  };

  const [sliderValue, setSliderValue] = useState<number[]>([
    minValue,
    maxValue,
  ]);

  const sliderThumbElement = (
    <Slider.Thumb
      className="block h-7 w-7 rounded-full border-2 border-dark bg-yellow focus:outline-none"
      aria-label="Volume"
    />
  );

  const commonInputProps = {
    className: `max-w-24`,
    type: "number",
    centerText: true,
  };

  return (
    <div className={`flex flex-col gap-3`}>
      <p className={`font-semibold uppercase text-white`}>
        {`Дистанція`} <span className={`text-grey`}>{`(км)`}</span>
      </p>
      <div className={`flex w-full flex-row items-center gap-2`}>
        <Input
          value={sliderValue[0] + ``}
          onValueChange={(newValue) => {
            const numberValue = formatNumber(newValue);

            setSliderValue((prevValue) => [
              valueWithinRange(numberValue),
              prevValue[1],
            ]);
          }}
          {...commonInputProps}
        />
        <Slider.Root
          className="relative flex h-7 w-full flex-1 cursor-pointer touch-none select-none items-center"
          value={sliderValue}
          onValueChange={(newValue) => setSliderValue(newValue)}
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
          value={sliderValue[1] + ``}
          onValueChange={(newValue) => {
            const numberValue = formatNumber(newValue);

            setSliderValue((prevValue) => [
              prevValue[0],
              valueWithinRange(numberValue),
            ]);
          }}
          {...commonInputProps}
        />
      </div>
    </div>
  );
};
