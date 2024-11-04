"use client";

import { Icon } from "@/libs/components";
import { useIsMobile } from "@/libs/hooks";
import { useState } from "react";
import { IconType } from "@/libs/enums";
import clsx from "clsx";

export type DistanceOption = {
  type: string;
  distance: string;
  age: string;
  price: string;
};

type Props = {
  distanceOptions: DistanceOption[];
  onSelectDistance: (index: number) => void;
  theme?: "yellow-dark" | "grey-dark";
};

const DEFAULT_DISTANCE_INDEX = 0;

const DistanceSelector: React.FC<Props> = ({
  distanceOptions: distanceData,
  onSelectDistance,
  theme = "yellow-dark",
}) => {
  const isMobile = useIsMobile();
  const [selectedDistanceIndex, setSelectedDistanceIndex] = useState(
    DEFAULT_DISTANCE_INDEX
  );
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const formatDistanceLabel = (index: number) => {
    const currentDistance = distanceData[index];
    return `${currentDistance.type} ${currentDistance.distance}${currentDistance.age ? ` ${currentDistance.age}` : ""}`;
  };

  const toggleDropdownVisibility = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const selectDistance = (index: number) => {
    setSelectedDistanceIndex(index);
    onSelectDistance(index);
  };

  const selectDistanceAndToggleDropdown = (index: number) => {
    selectDistance(index);
    toggleDropdownVisibility();
  };

  const activeDistanceStyle =
    theme === "yellow-dark"
      ? "bg-yellow rounded-3xl text-dark"
      : "bg-dark rounded-3xl text-white";

  const renderMobileView = () => (
    <div className="mb-4">
      <div
        className={clsx(
          "m-auto mb-1 grid max-w-96 grid-flow-col grid-cols-[1fr_auto] items-center rounded-3xl bg-dark p-[2px]",
          {
            "bg-dark": theme === "yellow-dark",
            "bg-grey-light": theme === "grey-dark",
          }
        )}
      >
        <p
          className={clsx(
            "rounded-full px-6 py-3 text-center text-base font-semibold uppercase leading-[1.2]",
            {
              "bg-yellow text-dark": theme === "yellow-dark",
              "bg-dark text-white": theme === "grey-dark",
            }
          )}
        >
          {formatDistanceLabel(selectedDistanceIndex)}
        </p>
        <div onClick={toggleDropdownVisibility} className="cursor-pointer">
          <Icon
            name={IconType.DOWN}
            className={clsx("pl-2 pr-3 text-2xl", {
              "text-white": theme === "yellow-dark",
              "text-dark": theme === "grey-dark",
            })}
          />
        </div>
      </div>

      {isDropdownVisible && (
        <div
          className={clsx("m-auto grid max-w-96 gap-1 rounded-2xl p-1", {
            "bg-dark": theme === "yellow-dark",
            "bg-white": theme === "grey-dark",
          })}
        >
          {distanceData.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                selectDistanceAndToggleDropdown(index);
              }}
              className="cursor-pointer"
            >
              <p
                className={clsx(
                  `rounded-full px-6 py-3 text-center text-base font-semibold uppercase leading-[1.2]`,
                  {
                    "bg-grey-dark text-white hover:bg-grey active:bg-yellow active:text-dark":
                      theme === "yellow-dark",
                    "bg-grey-light text-dark hover:bg-grey-light-dark active:bg-dark active:text-white":
                      theme === "grey-dark",
                  }
                )}
              >
                {formatDistanceLabel(index)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderDesktopView = () => (
    <div
      className={clsx("order-4 grid grid-flow-col rounded-3xl bg-dark", {
        "bg-dark text-white": theme === "yellow-dark",
        "bg-grey-light text-grey": theme === "grey-dark",
      })}
    >
      {distanceData.map((item, index) => (
        <div
          key={index}
          onClick={() => selectDistance(index)}
          className="cursor-pointer"
        >
          <p
            className={`px-6 py-3 text-center text-base font-semibold uppercase leading-[1.4] ${selectedDistanceIndex === index && activeDistanceStyle}`}
          >
            {formatDistanceLabel(index)}
          </p>
        </div>
      ))}
    </div>
  );

  return isMobile ? renderMobileView() : renderDesktopView();
};

export default DistanceSelector;
