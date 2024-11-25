"use client";

import clsx from "clsx";
import React, { useState } from "react";

type Tab = {
  text: string;
};

type TabSelectorProps = {
  tabs: Tab[];
  onSelect: (index: number) => void;
};

const TabSelector: React.FC<TabSelectorProps> = ({ tabs, onSelect }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleOnSelect = (index: number) => {
    onSelect(index);
    setActiveTab(index);
  };

  return (
    <div className="m-auto grid max-w-[1050px] grid-flow-col grid-cols-[repeat(3,1fr)] content-between rounded-full border-4 border-white bg-white ~mb-4/8">
      {tabs.map((tab, index) => (
        <button
          onClick={() => handleOnSelect(index)}
          key={index}
          className={clsx(
            "rounded-full font-semibold uppercase leading-tight ~text-sm/2xl ~py-2/6",
            {
              "bg-dark text-white": index === activeTab,
            }
          )}
        >
          {tab.text}
        </button>
      ))}
    </div>
  );
};

export default TabSelector;
