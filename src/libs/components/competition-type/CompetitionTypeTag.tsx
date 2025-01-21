import clsx from "clsx";
import useCompetitionTypes from "~/hooks/useCompetitionTypes";
import { LoadingOrError } from "~/components";

export interface CompetitionTypeTagProps {
  size?: "default" | "large";
  competitionTypeId: string;
}

export const CompetitionTypeTag: React.FC<CompetitionTypeTagProps> = (
  props
) => {
  const { competitionTypes, isError, isLoading } = useCompetitionTypes();
  const competitionType = competitionTypes.find(
    (competitionType) => competitionType.id === props.competitionTypeId
  );
  if (!competitionType) {
    return null;
  }
  if (isLoading || isError) {
    return <LoadingOrError {...{ isError, isLoading }} />;
  }
  return (
    <div
      className={clsx(
        `inline-flex rounded-full bg-grey-light-middle px-3 py-2 text-[0.875rem] font-medium uppercase leading-none text-white md:px-6 md:py-3`
      )}
    >
      {competitionType.name}
    </div>
  );
};
