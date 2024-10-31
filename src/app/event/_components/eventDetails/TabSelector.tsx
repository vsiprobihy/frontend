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
    <div className="grid grid-flow-col grid-cols-[repeat(3,1fr)] content-between rounded-full border-4 border-white bg-white ~mb-4/9">
      {tabs.map((tab, index) => (
        <button
          onClick={() => handleOnSelect(index)}
          key={index}
          className={clsx(
            "text-sm/2xl rounded-full font-semibold uppercase leading-[1.2] ~py-2/6",
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