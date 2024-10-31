"use client";

import React, { useState } from "react";
import DistanceSelector, { DistanceOption } from "../DistanceSelector";
import { Button } from "@/libs/components";
import { distances } from "./data";

export const EventSummary = () => {
  //TODO: implement logic from api
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
      <div className="m-auto max-w-[500px] ~mb-4/8">
        <DistanceSelector
          distanceOptions={distances}
          onSelectDistance={handleDistanceSelection}
        />
      </div>
      <div className="text-center font-semibold leading-[1.2] text-dark ~text-2xl/3xl ~mb-4/6">
        <p className="mb-6">Дистанція - {formatDistanceLabel()}</p>
        <p className="text-orange-hot">{selectedDistance.price}</p>
      </div>

      <div className="m-auto max-w-[380px] md:max-w-80">
        <Button fullWidth>Реєстрація</Button>
      </div>
    </div>
  );
};
