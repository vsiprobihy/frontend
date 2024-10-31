import { Paper, Stack } from "@/libs/components";
import clsx from "clsx";
import React from "react";

type TextProps = {
  label: string;
  text: string;
  isCurrentUser?: boolean;
};

const Text: React.FC<TextProps> = ({ label, text, isCurrentUser }) => {
  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold uppercase leading-[1.2] text-grey">
        {label}
      </h3>
      <p
        className={clsx("font-medium leading-[1.4]", {
          "text-orange-hot": isCurrentUser,
        })}
      >
        {text}
      </p>
    </div>
  );
};

type TwoColumnGridProps = {
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
};

const TwoColumGrid: React.FC<TwoColumnGridProps> = ({
  leftComponent,
  rightComponent,
}) => {
  return (
    <div className="grid grid-cols-[55%_45%]">
      {leftComponent}
      {rightComponent}
    </div>
  );
};

type Participant = {
  startNumber: number;
  club: string;
  name: string;
  city: string;
  gender: string;
  birthYear: number;
};

type ParticipantProps = {
  participant: Participant;
  isCurrentUser: boolean;
};

export const Participant: React.FC<ParticipantProps> = ({
  participant,
  isCurrentUser,
}) => {
  const { startNumber, club, name, city, gender, birthYear } = participant;

  return (
    <Paper bgColor="grey-light" padding="sm">
      <Stack>
        <TwoColumGrid
          leftComponent={
            <Text
              label="Стартовий номер"
              text={startNumber.toString()}
              isCurrentUser={isCurrentUser}
            />
          }
          rightComponent={
            <Text label="Клуб" text={club} isCurrentUser={isCurrentUser} />
          }
        />
        <Text label="Ім’я" text={name} isCurrentUser={isCurrentUser} />
        <Text label="Місто" text={city} isCurrentUser={isCurrentUser} />
        <TwoColumGrid
          leftComponent={
            <Text label="Стать" text={gender} isCurrentUser={isCurrentUser} />
          }
          rightComponent={
            <Text
              label="Рік народження"
              text={birthYear.toString()}
              isCurrentUser={isCurrentUser}
            />
          }
        ></TwoColumGrid>
      </Stack>
    </Paper>
  );
};
