// TODO pull tags from API
"use client";
import { CompetitionTypeButton } from "~/components/competition-type/CompetitionTypeButton";
import { useState } from "react";
import { LoadingOrError } from "~/components";
import useCompetitionTypes from "~/hooks/useCompetitionTypes";

interface CalendarFilterCompetitionTypeProps {
  onChange: (competitionTypeId?: string) => void;
}

//TODO use useCalendarFilterParams hook for inputs

export const CalendarFilterCompetitionType: React.FC<
  CalendarFilterCompetitionTypeProps
> = (props) => {
  const { competitionTypes, isError, isLoading } = useCompetitionTypes();

  const [selectedCompetitions, setSelectedCompetitions] = useState<string[]>(
    []
  );

  const toggleSelect = (competitionTypeId: string) => {
    setSelectedCompetitions((prevState) => {
      if (prevState.includes(competitionTypeId)) {
        return prevState.filter(
          (competition) => competition !== competitionTypeId
        );
      }
      return [...prevState, competitionTypeId];
    });
    props.onChange(competitionTypeId);
  };

  if (isLoading || isError) {
    return <LoadingOrError {...{ isError, isLoading }} />;
  }

  return (
    <div className={`flex flex-col gap-2`}>
      <p className={`font-semibold uppercase text-white`}>{`Тип змагання`}</p>
      <div className={`flex flex-row flex-wrap gap-2`}>
        {competitionTypes.map((competitionType) => (
          <CompetitionTypeButton
            selected={selectedCompetitions.includes(competitionType.id)}
            id={competitionType.id}
            key={competitionType.id}
            onClick={() => toggleSelect(competitionType.id)}
          >
            {competitionType.name}
          </CompetitionTypeButton>
        ))}
      </div>
    </div>
  );
};
