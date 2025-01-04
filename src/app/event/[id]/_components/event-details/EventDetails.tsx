import { useState } from "react";
import Information from "./Information";
import { Participants } from "./Participants";
import { Regulations } from "./Regulations";
import TabSelector from "./TabSelector";
import { organizerInfo } from "./data";

//TODO: get data from api and delete logoOrganizer from public folder

export const tabs = [
  {
    text: "Інформація",
    component: <Information organizerInfo={organizerInfo} />,
  },
  { text: "Регламент", component: <Regulations /> },
  { text: "Учасники", component: <Participants /> },
];

export const EventDetails = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <>
      <TabSelector tabs={tabs} onSelect={setSelectedTabIndex} />
      {tabs[selectedTabIndex].component}
    </>
  );
};
