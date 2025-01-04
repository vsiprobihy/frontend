import { Paper, Stack } from "@/libs/components";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeaderCell,
} from "@/libs/components/table";
import { TableRow } from "@/libs/components/table/TableRow";
import { useIsMobile } from "@/libs/hooks";
import DistanceSelector from "../DistanceSelector";
import { distances, participants } from "./data";
import { Participant } from "./Participant";

type Mobile = {
  currentUserID: number;
};

const Mobile: React.FC<Mobile> = ({ currentUserID }) => {
  return (
    <Paper>
      <DistanceSelector
        distanceOptions={distances}
        theme="grey-dark"
        onSelectDistance={() => {}}
      />

      <Stack spacing={2}>
        {participants.length > 0 &&
          participants.map((athlete) => (
            <Participant
              key={athlete.id}
              participant={athlete}
              isCurrentUser={currentUserID === athlete.id}
            />
          ))}
      </Stack>
    </Paper>
  );
};

export const Participants = () => {
  const isMobile = useIsMobile();
  //TODO: implement logic from api
  const currentUserID = 0;

  if (isMobile) {
    return <Mobile currentUserID={currentUserID} />;
  }

  return (
    <Paper>
      <Stack spacing={6} className="flex-col-reverse">
        <DistanceSelector
          distanceOptions={distances}
          theme="grey-dark"
          //TODO: implement logic from api
          onSelectDistance={() => {}}
        />

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>СТАРТОВИЙ НОМЕР</TableHeaderCell>
                <TableHeaderCell>ІМ’Я</TableHeaderCell>
                <TableHeaderCell>МІСТО</TableHeaderCell>
                <TableHeaderCell>СТАТЬ</TableHeaderCell>
                <TableHeaderCell>РІК НАРОДЖЕННЯ</TableHeaderCell>
                <TableHeaderCell>КЛУБ</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {participants.length > 0 &&
                participants.map((row, index) => (
                  <TableRow
                    bgColor={index % 2 === 0 ? "bg-grey-light" : ""}
                    textColor={
                      currentUserID === row.id ? "text-orange-hot" : "text-dark"
                    }
                    key={index}
                  >
                    <TableCell className="rounded-l-2xl">
                      {row.startNumber}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.city}</TableCell>
                    <TableCell>{row.gender}</TableCell>
                    <TableCell>{row.birthYear}</TableCell>
                    <TableCell className="rounded-r-2xl">{row.club}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Paper>
  );
};
