"use client";

import React, { useState } from "react";
import DistanceSelector, { DistanceOption } from "../DistanceSelector";
import { Button } from "@/libs/components";
import { distances } from "./data";
import { useIsMobile } from "@/libs/hooks";

export const EventSummary = () => {
  //TODO: implement logic from api
  const isMobile = useIsMobile();
  const [selectedDistance, setSelectedDistance] = useState<DistanceOption>(
    distances[0]
  );

  const handleDistanceSelection = (index: number) => {
    setSelectedDistance(distances[index]);
  };

  const formatDistanceLabel = () =>
    `${selectedDistance.type} ${selectedDistance.distance}`;

  return (
    <div className="~mb-8/12">
      <div className="m-auto max-w-[500px] ~mb-4/8 md:max-w-[478px]">
        <DistanceSelector
          distanceOptions={distances}
          onSelectDistance={handleDistanceSelection}
        />
      </div>
      <div className="text-center font-semibold leading-tight text-dark ~text-2xl/4xl ~mb-4/6">
        <p className="mb-6">Дистанція - {formatDistanceLabel()}</p>
        <p className="text-orange-hot">{selectedDistance.price}</p>
      </div>

      <div className="m-auto max-w-[380px] md:max-w-80">
        <Button fullWidth size={isMobile ? "middle" : "large"}>
          Реєстрація
        </Button>
      </div>
    </div>
  );
};
